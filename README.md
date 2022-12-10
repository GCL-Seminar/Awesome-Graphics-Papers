# Awesome-Rendering-Papers
本仓库存储 GCL 渲染组看过的论文整理后的列表。

本列表采用 hexo 编译，使用自行维护的模板 `awesome-papers`。

查看编译后的站点请点击[这里]()。

## 仓库内容维护

更新请通过 Pull Requests 的方法进行，这样合并到主分支前可以进行数据完整性的检查。

### 会议/期刊论文页面

本页面维护于 `paperSources` 下的各个文件，同时用软符号链接的方式，链接到 `siteGen/sources` 目录下。

### 概念层级结构页面

本页面的主要信息维护于 `hierarchy.yml`。

### 文章简介页面

路径格式：`papers/会议名称/年份/文章名.md`

> 例如：`papers/SIGGRAPH-Asia/2022/icarus.md`

文章简介的 Markdown 需要包括一个 metadata 字段，推荐使用下面的模板：

```markdown
---
layout: 'paper-reading'
papertitle: '你的文章名字; 这里的文章名字需要匹配 Source 中相应的会议/期刊 yaml 中该年的论文名字'
paperauthors: 作者一, 作者二, 作者三
papersource: '来源会议; 需要和对应的会议/期刊的 yaml 中会议/期刊的名字一致'
paperurl: '项目主页或论文地址; 优先写项目主页'
papertags: 叶子节点集合
---

基本信息：
- 简介：这里放上文章简介
- 相关材料：
  - 源码：有 / 无，有的话在哪里(可以用超链接，也可以写 e.g. 项目主页)
  - 视频：有 / 无，有的话在哪里(可以用超链接，也可以写 e.g. 项目主页)
  - 讨论班: 20xx-xx-xx (如果讲过的话)

这里放上你对文章其它想说的东西；写博客的也可以考虑外链到博客等。

```

### 完整性检查列表

1. 每个论文必须有 >= 1 个 tag
2. 每个 tag 必须为 leaf tag

## 开发札记

### 和 Hexo 的对应关系

- 每篇文章的具体介绍仍然对应 Hexo 的一篇 post
- Hierarchy 和各个 paperSources 页面通过钩子挂在 this.config 下面

### 已知问题

1. Hexo 在运行生成或 server 时，会尝试利用 Cache；在 `paper-generator.js` 中定义的变量，由于没有和数据库 `db.json` 绑定在一起，所以在尝试使用 Cache 进行生成时会丢失。
   > 作为 Walkaround，可以先使用 `npm run clean && npm run server` 或 `npm run clean && npm run build`