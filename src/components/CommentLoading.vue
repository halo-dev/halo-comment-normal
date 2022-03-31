<template>
  <div class="comment-loader-container">
    <div v-if="configs.loadingStyle === 'default'" class="comment-loader-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div v-else-if="configs.loadingStyle === 'circle'" class="comment-loader-circle"></div>
    <div v-else-if="configs.loadingStyle === 'balls'" class="comment-loader-balls">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommentLoading',
  props: {
    configs: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.comment-loader-container {
  animation: top20 500ms;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 30px 0;

  .comment-loader-default {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 30px;

    span {
      width: 4px;
      height: 15px;
      background-color: #898c7b;

      &:nth-of-type(1) {
        animation: grow 1s -0.45s ease-in-out infinite;
      }

      &:nth-of-type(2) {
        animation: grow 1s -0.3s ease-in-out infinite;
      }

      &:nth-of-type(3) {
        animation: grow 1s -0.15s ease-in-out infinite;
      }

      &:nth-of-type(4) {
        animation: grow 1s ease-in-out infinite;
      }
    }

    @keyframes grow {
      0%,
      100% {
        transform: scaleY(1);
      }

      50% {
        transform: scaleY(2);
      }
    }
  }

  .comment-loader-circle {
    border: 3px solid #898c7b;
    border-top-color: #fff;
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation: spin 0.7s linear infinite;

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }

  .comment-loader-balls {
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    div {
      width: 0.7em;
      height: 0.7em;
      border-radius: 50%;
      background-color: #898c7b;
      transform: translateY(-100%);
      animation: wave 0.7s ease-in-out alternate infinite;

      &:nth-of-type(1) {
        animation-delay: -0.4s;
      }

      &:nth-of-type(2) {
        animation-delay: -0.2s;
      }
    }

    @keyframes wave {
      from {
        transform: translateY(-100%);
      }

      to {
        transform: translateY(100%);
      }
    }
  }
}
</style>
