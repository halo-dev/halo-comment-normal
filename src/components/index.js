// Register components
import Vue from 'vue'

// pro components
import CommentEditor from './CommentEditor'
import CommentNode from './CommentNode'
import CommentLoading from './CommentLoading'
import Pagination from './Pagination'
import BaseButton from './BaseButton'

const _components = {
  CommentEditor,
  CommentNode,
  CommentLoading,
  Pagination,
  BaseButton
}

const components = {}

Object.keys(_components).forEach(key => {
  components[key] = Vue.component(key, _components[key])
})

export default components
