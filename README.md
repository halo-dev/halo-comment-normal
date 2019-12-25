<h1 align="center"><a href="https://github.com/halo-dev" target="_blank">halo-comment-normal</a></h1>

> 适用于 Halo 的评论组件。

### 使用指南

1. 进入后台 -> 系统 -> 博客设置 -> 评论设置

2. 将 `评论模块 JS` 修改为：`https://cdn.jsdelivr.net/npm/halo-comment-normal@1.1.0/dist/halo-comment.min.js`

### 自定义配置

如果你需要自定义该评论组件，下面提供了一些属性：

| 属性          | 说明                     | 默认值 |
| ------------- | ------------------------ | ------ |
| autoLoad      | 是否自动加载评论列表     | true   |
| showUserAgent | 是否显示评论者的 UA 信息 | true   |

配置方法：

在引入评论组件的页面加上：

```javascript
<script>
var configs = {
    autoLoad: true,
    showUserAgent: true
}
</script>
```

修改评论组件标签加上：

```html
:configs="configs"
```

示例：

```html
<halo-comment id="${post.id?c}" type="post" :configs="configs">
```

```html
<halo-comment id="${sheet.id?c}" type="sheet" :configs="configs">
```

```html
<halo-comment id="${journal.id?c}" type="journal" :configs="configs">
```