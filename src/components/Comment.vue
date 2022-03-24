<template>
  <div id="halo-comment" class="halo-comment">
    <comment-editor :configs="mergedConfigs" :options="options" :target="target" :targetId="id" />

    <div v-if="!mergedConfigs.autoLoad && !list.loaded" class="comment-load-button">
      <a class="button-load" href="javascript:void(0)" rel="nofollow noopener" @click="handleGetComments">加载评论</a>
    </div>

    <comment-loading v-show="list.loading" :configs="configs" />

    <ol v-if="list.data.length >= 1" class="comment-nodes">
      <template v-for="(comment, index) in list.data">
        <CommentNode
          :key="index"
          :comment="comment"
          :configs="mergedConfigs"
          :options="options"
          :target="target"
          :targetId="id"
        />
      </template>
    </ol>

    <div v-if="list.loaded && !list.loading && list.data.length <= 0" class="comment-empty">暂无评论</div>

    <div v-if="list.pages > 1" class="comment-page">
      <pagination :page="list.params.page" :size="list.size" :total="list.total" @change="handlePaginationChange" />
    </div>
  </div>
</template>
<script>
import './index'
import apiClient from '@/plugins/api-client'
import 'yue.css/yue.css'

export default {
  name: 'Comment',
  props: {
    id: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      required: false,
      default: 'post',
      validator: function (value) {
        return ['post', 'sheet', 'journal'].indexOf(value) !== -1
      }
    },
    configs: {
      type: Object,
      required: false,
      default: () => ({
        // auto load comment,default true
        autoLoad: true,
        showUserAgent: true,
        loadingStyle: 'default'
      })
    }
  },
  data() {
    return {
      list: {
        data: [],
        loading: false,
        loaded: false,
        params: {
          page: 0
        },
        pages: 0,
        total: 0,
        size: 10
      },

      repliedSuccess: null,
      replyingComment: null,
      options: {
        comment_gravatar_default: 'mm'
      }
    }
  },
  computed: {
    target() {
      // pluralize it
      return `${this.type}s`
    },
    mergedConfigs() {
      return Object.assign(
        {
          autoLoad: true,
          showUserAgent: true,
          loadingStyle: 'default'
        },
        this.configs
      )
    }
  },
  created() {
    if (this.mergedConfigs.autoLoad) {
      this.handleGetComments()
    }
    this.loadOptions()
  },
  methods: {
    async handleGetComments() {
      this.list.loading = true

      const { data } = await apiClient.comment.listAsTreeView(this.target, this.id, this.list.params)

      this.list.data = data.content
      this.list.total = data.total
      this.list.pages = data.pages
      this.list.size = data.size

      this.list.loading = false
      this.list.loaded = true
    },

    loadOptions() {
      apiClient.option.comment().then(response => {
        this.options = response.data
      })
    },

    handlePaginationChange(page) {
      this.list.params.page = page
      this.handleGetComments()
    }
  }
}
</script>
<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
@import '../styles/global';
</style>
