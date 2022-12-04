# Awesome-Rendering-Papers
本仓库存储 GCL 渲染组看过的论文整理后的列表。

## 仓库内容维护

### 会议/期刊论文页面


### Tag 树页面

本页面的主要信息维护于 `hierarchy.yaml`。

### 文章简介页面

路径格式：`papers/会议名称/年份/文章名.md`

> 例如：`papers/SIGGRAPH/2022/icarus.md`

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
