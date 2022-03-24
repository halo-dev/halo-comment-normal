<template>
  <li
    :id="'li-comment-' + comment.id"
    :class="commentClass"
    class="comment"
    itemprop="comment"
    itemtype="http://schema.org/Comment"
  >
    <div :id="'comment-' + comment.id" class="comment-body">
      <div class="comment-avatar">
        <a :href="`${comment.authorUrl ? comment.authorUrl : 'javascript:void(0)'}`" rel="nofollow" target="_blank">
          <img :alt="comment.author + `'s avatar`" :src="avatar" class="avatar" />
        </a>
      </div>
      <div class="contain-main">
        <div class="comment-meta">
          <div class="comment-author" itemprop="author">
            <div class="flex justify-between">
              <div class="self-center inline-flex">
                <a :href="comment.authorUrl" class="self-center author-name mr-2" rel="nofollow" target="_blank">
                  {{ comment.author }}
                </a>
                <span v-if="comment.isAdmin" class="self-center is-admin">
                  <svg
                    class="icon"
                    height="14"
                    version="1.1"
                    viewBox="0 0 1024 1024"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m0 896c-212.032 0-384-171.968-384-384S299.968 128 512 128s384 171.968 384 384-171.968 384-384 384z m94.08-513.408L512 192.064l-94.016 190.528-210.304 30.592 152.192 148.288-35.968 209.344L512 672l188.032 98.88-35.904-209.344 152.128-148.288-210.176-30.656z"
                      fill="#1296db"
                      p-id="6998"
                    ></path>
                  </svg>
                </span>
              </div>
              <div class="self-center">
                <BaseButton @click="handleReplyClick" type="secondary" size="xs">
                  {{ editing ? '取消回复' : '回复' }}
                </BaseButton>
              </div>
            </div>
            <div v-if="configs.showUserAgent" class="useragent-info">
              {{ compileUserAgent }}
            </div>
          </div>
          <time :datetime="comment.createTime" class="comment-time" itemprop="datePublished">{{ createTimeAgo }}</time>
        </div>
        <div class="comment-content yue" itemprop="description" v-html="compileContent"></div>
      </div>
    </div>
    <comment-editor
      v-if="editing"
      :configs="configs"
      :options="options"
      :replyComment="comment"
      :target="target"
      :targetId="targetId"
    />
    <ol v-if="comment.children" class="children">
      <template v-for="(children, index) in comment.children">
        <CommentNode
          :key="index"
          :comment="children"
          :configs="configs"
          :isChild="true"
          :options="options"
          :parent="comment"
          :target="target"
          :targetId="targetId"
        />
      </template>
    </ol>
  </li>
</template>
<script>
import './index'
import { timeAgo } from '@/utils/util'
import ua from 'ua-parser-js'
import { marked } from 'marked'

export default {
  name: 'CommentNode',
  props: {
    isChild: {
      type: Boolean,
      required: false,
      default: false
    },
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: 'posts',
      validator: function (value) {
        return ['posts', 'sheets', 'journals'].indexOf(value) !== -1
      }
    },
    parent: {
      type: Object,
      required: false
    },
    comment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      type: Object,
      required: false,
      default: () => {}
    },
    configs: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editing: false
    }
  },
  computed: {
    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/'
      if (this.comment.avatar) {
        return this.comment.avatar
      }
      return `${gravatarSource}${this.comment.gravatarMd5}?s=256&d=${gravatarDefault}`
    },
    compileContent() {
      let at = ''
      if (this.parent) {
        at = `[@${this.parent.author}](#comment-${this.parent.id})`
      }
      return marked.parse(at + ' ' + this.comment.content, { sanitize: true })
    },
    createTimeAgo() {
      return timeAgo(this.comment.createTime)
    },
    compileUserAgent() {
      const parser = new ua()
      parser.setUA(this.comment.userAgent)
      const result = parser.getResult()
      return result.browser.name + ' ' + result.browser.version + ' in ' + result.os.name + ' ' + result.os.version
    },
    commentClass() {
      let isChild = this.isChild ? ' ' : ' index-1'
      return ' li-comment-' + this.comment.id + isChild
    }
  },
  methods: {
    handleReplyClick() {
      this.editing = !this.editing
    }
  }
}
</script>
