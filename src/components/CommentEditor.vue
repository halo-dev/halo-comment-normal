<template>
  <section class="comment-editor" role="form">
    <div class="flex my-5">
      <div class="mr-2">
        <img :src="avatar" class="avatar" />
      </div>
      <form class="comment-form flex-1">
        <div class="grid grid-cols-3 gap-2 mb-2">
          <input
            id="author"
            v-model="comment.author"
            aria-required="true"
            class="w-full"
            placeholder="* 昵称"
            required="required"
            type="text"
          />
          <input id="email" v-model="comment.email" class="w-full" placeholder="电子邮件" type="text" />
          <input
            id="authorUrl"
            v-model="comment.authorUrl"
            class="w-full"
            placeholder="个人站点"
            type="text"
          />
        </div>
        <div v-if="!previewMode" class="comment-textarea mb-2">
          <textarea
            ref="commentTextarea"
            class="block w-full"
            v-model="comment.content"
            :placeholder="options.comment_content_placeholder || '撰写评论...'"
            aria-required="true"
            required="required"
          ></textarea>
        </div>
        <div v-else class="comment-preview markdown-body mb-2 w-full" v-html="renderedContent"></div>
        <ul>
          <li class="inline-flex mr-2">
            <BaseButton type="secondary" @click="handleSubmitClick">提交</BaseButton>
          </li>
          <li class="inline-flex" v-if="comment.content">
            <BaseButton @click="previewMode = !previewMode">
              {{ previewMode ? '编辑' : '预览' }}
            </BaseButton>
          </li>
        </ul>
        <div class="comment-alert">
          <!-- Info -->
          <template v-if="infoAlertVisible">
            <div v-for="(info, index) in infoes" :key="index" class="alert info">
              <span class="closebtn" @click="clearAlertClose">&times;</span>
              <strong>{{ info }}</strong>
            </div>
          </template>

          <!-- Success -->
          <template v-if="successAlertVisible">
            <div v-for="(success, index) in successes" :key="index" class="alert success">
              <span class="closebtn" @click="clearAlertClose">&times;</span>
              <strong>{{ success }}</strong>
            </div>
          </template>

          <!-- Warning -->
          <template v-if="warningAlertVisible">
            <div v-for="(warning, index) in warnings" :key="index" class="alert warning">
              <span class="closebtn" @click="clearAlertClose">&times;</span>
              <strong>{{ warning }}</strong>
            </div>
          </template>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
import { marked } from 'marked'
import md5 from 'md5'
import { isEmpty, isObject, validEmail } from '../utils/util'
import apiClient from '@/plugins/api-client'
import autosize from 'autosize'

export default {
  name: 'CommentEditor',
  props: {
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
    replyComment: {
      type: Object,
      required: false,
      default: () => {}
    },
    options: {
      required: false,
      default: []
    },
    configs: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ''
      },
      previewMode: false,
      infoes: [],
      warnings: [],
      successes: []
    }
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked.parse(this.comment.content) : ''
    },
    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default
      const gravatarSource = this.options.gravatar_source || '//cn.gravatar.com/avatar/'

      if (!this.comment.email || !validEmail(this.comment.email)) {
        return `${gravatarSource}?d=${gravatarDefault}`
      }

      const gravatarMd5 = md5(this.comment.email)
      return `${gravatarSource}${gravatarMd5}?s=256&d=${gravatarDefault}`
    },
    infoAlertVisible() {
      return this.infoes !== null && this.infoes.length > 0
    },
    warningAlertVisible() {
      return this.warnings !== null && this.warnings.length > 0
    },
    successAlertVisible() {
      return this.successes !== null && this.successes.length > 0
    }
  },
  created() {
    // Get info from local storage
    const author = localStorage.getItem('comment-author')
    const authorUrl = localStorage.getItem('comment-authorUrl')
    const email = localStorage.getItem('comment-email')
    this.comment.author = author ? author : ''
    this.comment.authorUrl = authorUrl ? authorUrl : ''
    this.comment.email = email ? email : ''
  },
  mounted() {
    autosize(document.querySelector('textarea'))
  },
  methods: {
    handleSubmitClick() {
      if (isEmpty(this.comment.author)) {
        this.warnings.push('评论者昵称不能为空')
        return
      }
      if (isEmpty(this.comment.content)) {
        this.warnings.push('评论内容不能为空')
        return
      }
      // Submit the comment
      this.comment.postId = this.targetId
      if (this.replyComment) {
        // Set parent id if available
        this.comment.parentId = this.replyComment.id
      }

      apiClient.comment
        .create(this.target, this.comment)
        .then(response => {
          // Store comment author, email, authorUrl
          localStorage.setItem('comment-author', this.comment.author)
          localStorage.setItem('comment-email', this.comment.email)
          localStorage.setItem('comment-authorUrl', this.comment.authorUrl)

          // clear comment
          this.comment.content = ''
          this.handleCommentCreated(response.data)
        })
        .catch(error => {
          this.handleFailedToCreateComment(error)
        })
    },
    handleCommentCreated(createdComment) {
      this.clearAlertClose()

      if (createdComment.status === 'PUBLISHED') {
        this.successes.push('评论成功，刷新即可显示最新评论！')
      } else {
        // Show tips
        this.infoes.push('您的评论已经投递至博主，等待博主审核！')
      }
    },
    handleFailedToCreateComment(response) {
      this.clearAlertClose()
      if (response.status === 400) {
        this.warnings.push(response.data.message)
        if (response.data) {
          const errorDetail = response.data.data
          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(key => {
              this.warnings.push(errorDetail[key])
            })
          }
        }
      }
    },
    clearAlertClose() {
      this.infoes = []
      this.warnings = []
      this.successes = []
    }
  }
}
</script>
