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
            ref="commentTextarea"
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
    <div class="comment-alert">
      <!-- Info -->
      <template v-if="infoAlertVisiable">
        <div
          class="alert info"
          v-for="(info, index) in infoes"
          :key="index"
        >
          <span
            class="closebtn"
            @click="clearAlertClose"
          >&times;</span>
          <strong>{{ info }}</strong>
        </div>
      </template>

      <!-- Success -->
      <template v-if="successAlertVisiable">
        <div
          class="alert success"
          v-for="(success, index) in successes"
          :key="index"
        >
          <span
            class="closebtn"
            @click="clearAlertClose"
          >&times;</span>
          <strong>{{ success }}</strong>
        </div>
      </template>

      <!-- Warning -->
      <template v-if="warningAlertVisiable">
        <div
          class="alert warning"
          v-for="(warning, index) in warnings"
          :key="index"
        >
          <span
            class="closebtn"
            @click="clearAlertClose"
          >&times;</span>
          <strong>{{ warning }}</strong>
        </div>
      </template>

    </div>
  </section>
</template>
<script>
import marked from "marked";
import md5 from "md5";
import { isEmpty, isObject } from "../utils/util";
import { validEmail } from "../utils/util";
import commentApi from "../api/comment";
import autosize from "autosize";

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
        content: ""
      },
      previewMode: false,
      infoes: [],
      warnings: [],
      successes: []
    };
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked(this.comment.content) : "";
    },
    avatar() {
      if (!this.comment.email || !validEmail(this.comment.email)) {
        return (
          this.configs.gravatarSource +
          "?d=" +
          this.options.comment_gravatar_default
        );
      }
      const gravatarMd5 = md5(this.comment.email);
      return (
        this.configs.gravatarSource +
        `/${gravatarMd5}?s=256&d=` +
        this.options.comment_gravatar_default
      );
    },
    commentValid() {
      return (
        !isEmpty(this.comment.author) &&
        !isEmpty(this.comment.email) &&
        !isEmpty(this.comment.content)
      );
    },
    infoAlertVisiable() {
      return this.infoes !== null && this.infoes.length > 0;
    },
    warningAlertVisiable() {
      return this.warnings !== null && this.warnings.length > 0;
    },
    successAlertVisiable() {
      return this.successes !== null && this.successes.length > 0;
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
  mounted() {
    // autosize(this.$refs.commentTextArea);
    autosize(document.querySelector("textarea"));
  },
  methods: {
    handleSubmitClick() {
      if (isEmpty(this.comment.author)) {
        this.warnings.push("评论者昵称不能为空");
        return;
      }
      if (isEmpty(this.comment.email)) {
        this.warnings.push("邮箱不能为空");
        return;
      }
      if (isEmpty(this.comment.content)) {
        this.warnings.push("评论内容不能为空");
        return;
      }
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
          this.handleCommentCreated(response.data.data);
          this.$emit("close", false);
        })
        .catch(error => {
          this.$emit("failed", error.response);
          this.handleFailedToCreateComment(error.response);
        });
    },
    handlePreviewContent() {
      this.previewMode = !this.previewMode;
    },
    handleCommentCreated(createdComment) {
      this.clearAlertClose();

      if (createdComment.status === "PUBLISHED") {
        this.loadComments();
        this.successes.push("评论成功！");
      } else {
        // Show tips
        this.infoes.push("您的评论已经投递至博主，等待博主审核！");
      }

      this.repliedSuccess = null;
    },
    handleFailedToCreateComment(response) {
      this.clearAlertClose();
      this.repliedSuccess = null;

      if (response.status === 400) {
        this.warnings.push(response.data.message);
        if (response.data) {
          const errorDetail = response.data.data;
          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach(key => {
              this.warnings.push(errorDetail[key]);
            });
          }
        }
      }
    },
    clearAlertClose() {
      this.infoes = [];
      this.warnings = [];
      this.successes = [];
    }
  }
};
</script>