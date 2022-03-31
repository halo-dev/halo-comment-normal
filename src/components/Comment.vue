<template>
  <div id="halo-comment" class="halo-comment">
    <comment-editor :configs="mergedConfigs" :options="options" :target="target" :targetId="id" />

    <div v-if="!mergedConfigs.autoLoad && !list.loaded" class="text-center py-10">
      <BaseButton type="secondary" @click="handleGetComments">加载评论</BaseButton>
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

    <pagination
      v-if="list.pages > 1"
      :page="list.params.page"
      :size="list.size"
      :total="list.total"
      @change="handlePaginationChange"
    />
  </div>
</template>
<script>
import './index'
import apiClient from '../plugins/api-client'

const defaultConfig = {
  autoLoad: true,
  showUserAgent: true,
  loadingStyle: 'default'
}

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
      type: [Object, String],
      required: false,
      default: () => defaultConfig
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

      options: {
        comment_gravatar_default: ''
      }
    }
  },
  computed: {
    target() {
      // pluralize it
      return `${this.type}s`
    },
    mergedConfigs() {
      let externalConfigs = {}
      if (Object.prototype.toString.call(this.configs) === '[object String]') {
        externalConfigs = JSON.parse(this.configs)
      }
      return Object.assign(defaultConfig, externalConfigs)
    }
  },
  created() {
    this.handleGetOptions()
    if (this.mergedConfigs.autoLoad) {
      this.handleGetComments()
    }
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

    async handleGetOptions() {
      const { data } = await apiClient.option.comment()
      this.options = data
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
@import 'github-markdown-css/github-markdown-light.css';
</style>
