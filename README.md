# Awesome-Graphics-Papers
本仓库存储 GCL 讨论班看过的论文整理后的列表。

本列表采用 hexo 编译，使用模板 `blairos` 修改而成。

查看编译后的站点请点击[这里](https://gcl-seminar.github.io/Awesome-Graphics-Papers/)。

## 仓库内容维护

更新请通过 Pull Requests 的方法进行，这样合并到主分支前可以进行数据完整性的检查。

### FAQ

#### 为什么我的 Pull Request 检查失败了？

目前检查失败可能会有多种原因，请查看 Github Actions 中对应的 Action 输出的日志。

目前出现过的问题：
- 论文元数据校验相关
  - 现象
    - 日志中出现类似 `Error: paperMeta validation: 某某某文章 is not in hierarchy leaf nodes` 等以 `paperMeta validation` 打头的输出
  - 原因
    - 论文所对应的 tag 中，存在某个 tag 在 `hierarchy.yml` 中没有出现，或者不是 hierarchy 的叶子节点
    - 论文所指定的会议 (e.g. `papersource: 'SIGGRAPH'`) 所对应的论文数据库 (e.g. `paperSources/SIGGRAPH.yml`) 中，没有找到对应的论文
  - 提示
    - 特别要注意大小写，空格等问题。如果不放心，Yaml 和 Markdown front-matter 都是可以使用单引号来 quote 一个字符串的 (e.g. `'字符串'`)
- Yaml 编辑相关
  - 现象
    - 日志中出现类似 `YAMLException: bad indentation of a mapping entry (40:17)` 等以 `YAMLException` 打头的输出
  - 原因
    - `hierarchy.yml` 中的 Yaml 需要为合法的 Yaml——与 Python 类似，Yaml 的缩进是有语法含义的。
  - 提示
    - 照葫芦画瓢改动的话一般不会出现这个问题
    - 可以寻找相关的编辑上的教程，或者找将 Yaml 在线转换为 JSON 的工具来辅助确定自己的编辑没有问题。
    - 也可以确定一下字面值是否正确 quote

#### 为什么编译通过了，但是文章没有出现在网站上？

目前出现过的问题：
- Markdown 文件的扩展名需要为 `.md`，否则 hexo 不会调用 Markdown 渲染器进行渲染，也就不会应用模板并输出

### 如何添加新文章：超快速上手指南

假设现在要添加来自于 *conf* 会议 *year* 年的文章 *paper*：
1. 准备工作
   1. 确保你安装有 git 和合适的 Markdown 编辑器（比如 VSCode）
   2. Fork 一份本仓库到自己的 GitHub 账号下，或者在本仓库下创建名为 `dev/你的名字` 的分支
   3. 把前面的分支 / Fork clone 到本地
2. 检查 *conf* 会议的会议数据文件 (`conf.yml`) 是否已经在 `paperSources` 文件夹中创建
   - 如果没有创建，仿照其它会议在目录下创建此文件。详情请参考 **会议/期刊论文页面** 一节中的介绍
3. 检查 *conf* 会议的会议数据文件 (`conf.yml`) 中，是否已经在 *year* 年下存在文章 *paper*
   > 为什么很多还没有在讨论班讲过的文章也要记录进来？
   > 
   > 这是考虑到，如果是采用按会议来“扫”文章的阅读方法，那么找会议的文章列表其实是比较重复的工作，可以由第一位同学一口气做好，这样之后的同学挑文章时可以省点事儿。
   - 如果不存在，则在对应的 *year* 字段下加入文章，格式请参考写好的其他文件，比如 `paperSources/SIGGRAPH-Asia.yml`
     - 请注意，*paper* 需要字符串意义上的匹配，多 / 少空格都是不可以的
4. 添加介绍页面 (`paper_short_name.md`)，放到 `papers/conf/year/` 下
   - Markdown 文件的名字推荐起短一些的，方便在 VSCode 等编辑器中查看；文件名本身不影响任何其它地方
   - 请参考 **文章简介页面** 一节的描述进行 Markdown 文件的写作，推荐从写好的文件开始进行修改
   - `papertitle` 等字段需要字符串意义上的匹配，多 / 少空格都是不可以的
5. Commit 并创建到 `main` 分支的 Pull Request
   - 提交时会由配置好的 GitHub Actions 进行自动检查，请等检查通过后再合并 Pull Request
   - 一个 Pull Request 示例：https://github.com/GCL-Rendering/Awesome-Rendering-Papers/pull/1
6. 合并到 `main` 分支后，等待 GitHub Pages 持续集成编译完成
   - 编译是比较快的，但是 GitHub Pages 的缓存刷新需要不短的时间，距 libreliu 的使用体验可能需要十分钟左右

### 会议/期刊论文页面

本页面维护于 `paperSources` 下的各个文件，同时用软符号链接的方式，链接到 `siteGen/sources` 目录下。

加入尚未存在的论文前，务必先更新此文件。

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
papersource: '来源会议; 需要和对应的会议/期刊的 yaml 文件名一致'
paperurl: '项目主页或论文地址; 优先写项目主页'
papertags: 叶子节点集合，以逗号分割
date: 讲的或预期讲的讨论班日期，格式 yyyy-mm-dd，如 2022-08-08；如果没有讲的计划的话，就写你编辑的时间就行
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

> 每个提交必须完成下面的完整性检查，否则持续集成系统会失败。

1. 每个论文必须有 >= 1 个 tag
2. 每个 tag 必须为 leaf tag

## 开发札记

### 配置开发环境

```bash
npm install .
npm run clean && npm run server
```

### 和 Hexo 的对应关系

- 每篇文章的具体介绍仍然对应 Hexo 的一篇 post
- Hierarchy 和各个 paperSources 页面通过钩子挂在 this.config 下面

### 已知问题

1. Hexo 在运行生成或 server 时，会尝试利用 Cache；在 `paper-generator.js` 中定义的变量，由于没有和数据库 `db.json` 绑定在一起，所以在尝试使用 Cache 进行生成时会丢失。
   > 作为 Walkaround，可以先使用 `npm run clean && npm run server` 或 `npm run clean && npm run build`