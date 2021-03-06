<template>
  <section class="comment-editor" role="form">
    <div class="inner">
      <div class="commentator">
        <img :src="avatar" class="avatar" />
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
          />
          <input
            type="text"
            id="email"
            v-model="comment.email"
            tabindex="2"
            required="required"
            aria-required="true"
            placeholder="* 电子邮件"
          />
          <input
            type="text"
            id="authorUrl"
            v-model="comment.authorUrl"
            tabindex="3"
            placeholder="个人站点"
          />
        </div>
        <div class="comment-textarea" v-if="!previewMode">
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
          class="comment-preview markdown-body"
          v-else
          v-html="renderedContent"
        ></div>
        <ul class="comment-buttons">
          <li v-if="comment.content" class="middle" style="margin-right:5px">
            <a
              class="button-preview-edit"
              href="javascript:void(0)"
              rel="nofollow noopener"
              @click="previewMode = !previewMode"
              >{{ previewMode ? "编辑" : "预览" }}</a
            >
          </li>
          <li class="middle">
            <a
              class="button-submit"
              href="javascript:void(0)"
              tabindex="5"
              rel="nofollow noopener"
              @click="handleSubmitClick"
              >提交</a
            >
          </li>
        </ul>
        <div class="comment-alert">
          <!-- Info -->
          <template v-if="infoAlertVisiable">
            <div
              class="alert info"
              v-for="(info, index) in infoes"
              :key="index"
            >
              <span class="closebtn" @click="clearAlertClose">&times;</span>
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
              <span class="closebtn" @click="clearAlertClose">&times;</span>
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
import Vue from "vue";
import marked from "marked";
import md5 from "md5";
import { isEmpty, isObject } from "../utils/util";
import { validEmail } from "../utils/util";
import apiClient from '@/plugins/api-client'
import autosize from "autosize";

export default {
  name: "CommentEditor",
  props: {
    targetId: {
      type: Number,
      required: false,
      default: 0,
    },
    target: {
      type: String,
      required: false,
      default: "posts",
      validator: function(value) {
        return ["posts", "sheets", "journals"].indexOf(value) !== -1;
      },
    },
    replyComment: {
      type: Object,
      required: false,
      default: () => {},
    },
    options: {
      required: false,
      default: [],
    },
    configs: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comment: {
        author: null,
        authorUrl: null,
        email: null,
        content: "",
      },
      previewMode: false,
      infoes: [],
      warnings: [],
      successes: [],
    };
  },
  computed: {
    renderedContent() {
      return this.comment.content ? marked(this.comment.content) : "";
    },
    avatar() {
      const gravatarDefault = this.options.comment_gravatar_default;
      const gravatarSource =
        this.options.gravatar_source || "//cn.gravatar.com/avatar/";

      if (!this.comment.email || !validEmail(this.comment.email)) {
        return `${gravatarSource}?d=${gravatarDefault}`;
      }

      const gravatarMd5 = md5(this.comment.email);
      return `${gravatarSource}${gravatarMd5}?s=256&d=${gravatarDefault}`;
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
    },
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

      let client = null;

      switch (this.target) {
        case "posts":
          client = apiClient.post;
          break;
        case "sheets":
          client = apiClient.sheet;
          break;
        case "journals":
          client = apiClient.journal;
          break;
      }

      client
        .comment(this.comment)
        .then((response) => {
          // Store comment author, email, authorUrl
          localStorage.setItem("comment-author", this.comment.author);
          localStorage.setItem("comment-email", this.comment.email);
          localStorage.setItem("comment-authorUrl", this.comment.authorUrl);

          // clear comment
          this.comment.content = "";
          this.handleCommentCreated(response.data);
        })
        .catch((error) => {
          this.handleFailedToCreateComment(error);
        });
    },
    handleCommentCreated(createdComment) {
      this.clearAlertClose();

      if (createdComment.status === "PUBLISHED") {
        try {
          this.createdNewNode(createdComment);
          this.successes.push("评论成功");
        } catch {
          this.successes.push("评论成功，刷新即可显示最新评论！");
        }
      } else {
        // Show tips
        this.infoes.push("您的评论已经投递至博主，等待博主审核！");
      }
    },
    createdNewNode(newComment) {
      let pr = {
        targetId: this.targetId,
        target: this.target,
        options: this.options,
        configs: this.configs,
        comment: newComment,
      };

      pr =
        newComment.parentId == 0
          ? pr
          : {
              ...pr,
              ...{
                isChild: true,
                parent: this.replyComment,
                depth: this.$parent.selfAddDepth,
              },
            };

      const CommentNode = () => import("./CommentNode.vue");
      // 创建一个组件
      let comment = new Vue({
        render: (h) => {
          return h(CommentNode, {
            props: pr,
          });
        },
      });
      let dom;
      if (newComment.parentId == 0) {
        if (this.$root.$el.getElementsByClassName("comment-nodes").length > 0) {
          dom = this.$root.$el.getElementsByClassName("comment-nodes")[0];
        } else {
          dom = document.createElement("ol");
          dom.setAttribute("class", "comment-nodes");
          let emptyDom = this.$root.$el.getElementsByClassName(
            "comment-empty"
          )[0];
          emptyDom.parentNode.replaceChild(dom, emptyDom);
        }
        dom = this.$root.$el.getElementsByClassName("comment-nodes")[0];
      } else {
        let parentDom = this.$parent.$el;
        let replyDom = parentDom.getElementsByTagName("ol");
        if (replyDom.length > 0) {
          dom = replyDom[0];
        } else {
          dom = document.createElement("ol");
          dom.setAttribute("class", "children");
          parentDom.appendChild(dom);
        }
      }
      let nodeDom = document.createElement("div");
      if (dom.children[0]) {
        dom.insertBefore(nodeDom, dom.children[0]);
      } else {
        dom.appendChild(nodeDom);
      }
      comment.$mount(nodeDom);
    },
    handleFailedToCreateComment(response) {
      this.clearAlertClose();
      if (response.status === 400) {
        this.warnings.push(response.data.message);
        if (response.data) {
          const errorDetail = response.data.data;
          if (isObject(errorDetail)) {
            Object.keys(errorDetail).forEach((key) => {
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
    },
  },
};
</script>
