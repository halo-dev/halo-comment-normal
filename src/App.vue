<template>
  <div id="app">
    <Comment :id="17" type="post" :configs="configs" />
  </div>
</template>

<script>
import Comment from './components/Comment'

export default {
  name: 'app',
  components: {
    Comment
  },
  data() {
    return {
      configs: {
        autoLoad: true,
        showUserAgent: true,
        loadingStyle: 'default'
      }
    }
  }
}
</script>
