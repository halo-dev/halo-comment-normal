<template>
  <section
    class="comment-editor"
    role="form"
  >
    <div class="inner">
      <div class="commentator">
        <img
          :src="avatar"
          class="avatar"
        >
      </div>
      <form class="comment-form">
        <div class="author-info">
          <input
            type="text"
            id="author"
            v-model="comment.author"
            tabindex="1"
            required="required"
            aria-required="true"
            placeholder="* 昵称"
          >
          <input
            type="text"
            id="email"
            v-model="comment.email"
            tabindex="2"
            required="required"
            aria-required="true"
            placeholder="* 电子邮件"
          >
          <input
            type="text"
            id="authorUrl"
            v-model="comment.authorUrl"
            tabindex="3"
            placeholder="个人站点"
          >
        </div>
        <div
          class="comment-textarea"
          v-if="!previewMode"
        >
          <textarea
            cols="45"
            rows="1"
            required="required"
            aria-required="true"
            tabindex="4"
            :placeholder="options.comment_content_placeholder || '撰写评论...'"
            v-model="comment.content"
          ></textarea>
        </div>
        <div
          class="comment-preview"
          v-else
          v-html="renderedContent"
        ></div>
        <ul class="comment-buttons">
          <li
            v-if="comment.content"
            class="middle"
            style="margin-right:5px"
          >
            <a
              class="button-preview-edit"
              href="javascript:void(0)"
              rel="nofollow noopener"
              @click="handlePreviewContent"
            >{{previewMode?'编辑':'预览'}}</a>
          </li>
          <li class="middle">
            <a
              class="button-submit"
              href="javascript:void(0)"
              tabindex="5"
              rel="nofollow noopener"
              @click="handleSubmitClick"
            >提交</a>
          </li>
        </ul>
      </form>
    </div>
  </section>
</template>
<script>
import marked from "marked";
import md5 from "md5";
import commentApi from "../api/comment";
export default {
  name: "CommentEditor",
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0
    },
    target: {
      type: String,
      required: false,
      default: "posts",
      validator: function(value) {
        return ["posts", "sheets", "journals"].indexOf(value) !== -1;
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
    }
  },
  data() {
    return {
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: ""
      },
      previewMode: false
    };
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked(this.comment.content) : "";
    },
    avatar() {
      if (!this.comment.email) {
        return (
          "//cdn.v2ex.com/gravatar?d=" + this.options.comment_gravatar_default
        );
      }
      const gravatarMd5 = md5(this.comment.email);
      return (
        `//cdn.v2ex.com/gravatar/${gravatarMd5}?s=256&d=` +
        this.options.comment_gravatar_default
      );
    }
  },
  created() {
    // Get info from local storage
    var author = localStorage.getItem("comment-author");
    var authorUrl = localStorage.getItem("comment-authorUrl");
    var email = localStorage.getItem("comment-email");
    this.comment.author = author ? author : "";
    this.comment.authorUrl = authorUrl ? authorUrl : "";
    this.comment.email = email ? email : "";
  },
  methods: {
    handleSubmitClick() {
      // Submit the comment
      this.comment.postId = this.targetId;
      if (this.replyComment) {
        // Set parent id if available
        this.comment.parentId = this.replyComment.id;
      }
      commentApi
        .createComment(this.target, this.comment)
        .then(response => {
          // Store comment author, email, authorUrl
          localStorage.setItem("comment-author", this.comment.author);
          localStorage.setItem("comment-email", this.comment.email);
          localStorage.setItem("comment-authorUrl", this.comment.authorUrl);

          // clearn comment
          this.comment.content = null;

          // Emit a created event
          this.$emit("created", response.data.data);
          this.$emit("close", false);
        })
        .catch(error => {
          this.$emit("failed", error.response);
        });
    },
    handlePreviewContent() {
      this.previewMode = !this.previewMode;
    }
  }
};
</script>