# Blairos

Blairos is a fresh looking and responsive theme for [Hexo](http://hexo.io) with more features and some build-in service and some libin's style based on Minos.  

**Blairos support Hexo 3.0 now !**

[Demo](http://52binge.github.io)

[如何使用 Blairos 主题](https://github.com/52binge/hexo-theme-blairos/)

## Installation

### Install
```
$ git clone https://github.com/52binge/hexo-theme-blairos.git themes/blairos
```
**Blairos requires Hexo 2.7 and above.** 

### Enable

Modify `theme` setting in blog folder` _config.yml` to `blairos`.

### Update

```
cd themes/blairos
git pull origin master
```

**please backup your `_config.yml` and `layout/_partial/header.ejs` file before update.** 

## Configuration

Modify settings in  `/themes/blairos/_config_bak.yml` to `_config.yml`.     
Modify settings in  `/themes/blairos/layout/_partial/header_bak.ejs` to `header.ejs`. 

## Configuration

### Theme configuration example
```
# Header
menu:
  Home: /
  Archives: archives
  Categories: categories
  Tags: tags
  Tweet: tweet
  About: about

# Content
excerpt_link: Read More
toc: false
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png
```

- **excerpt_link** - Cooperate with, you can use article description instand of this <!--more-->
- **toc** - Whether to show the table of contents in articles.
- **fancybox** - Enable [Fancybox].
- **google_analytics** - Google Analytics ID.
- **favicon** - Favicon path.

### toc

layout/_partial/article.ejs

如何需要显示 toc number, 则修改 article.ejs, 去掉 {list_number: false}

```
toc(post.content, {list_number: false})
```

## blairos' improvement minos

blairos | Date
------- | ------- 
增加了代码块高亮，改变 markdown 的渲染形式 | 2016.07.23
改善 markdown 部分解析style不符合常规 | 2016.07.23
增加Link颜色，改变字体，更易读 | 2016.07.23
Index 页面大改版，增加desc，文章简介，将标题style改变，日期改为显示标题淡小字显示 | 2016.07.23
增加 文章尾部 category 和 tag 并且 靠右，然后增加响应图标等 | 2016.07.23
增加 disqus 评论、About、授权显示 | 2016.07.24
调整 生成 文章目录 的样式 | 2016.07.24
调整 文章标题 分别于上下的间距 | 2016.07.24
调整 底部和上部空白格距离调整 | 2016.07.24
增加 Tweet 系统 & About 和 Tweet 等页面去掉 授权显示 | 2016.07.25
调整 Archives 的字体间距与大小 | 2016.07.25
去掉 index 页面的 标题下划线 | 2016.07.25
Blair 图标的制作和增加 | 2016.07.28
首页重新改版，恢复 Read More 等 | 2017.10.08
改版 archives 页面样式 | 2017.10.17
默认字体改变与code pre 块样式修改 | 2017.10.17
文章置顶 & 文章尾部增加分享功能  papre dev. | -
增加 tags 显示出属于tag的文章数量上角标 | -
增加 category 和 tags 和 好友连接，最近发布，最新评论等 | -
写文档，开源我的 hexo-theme-blairos | 2017.10.17

## Features

### Custom Categories & Tags Pages

Get your categories and tags listed in single pages to make your blog more methodic. of course, tweet
is my favorite feature.

### Fancybox

You can uses [Fancybox] to showcase your photos. of course, you can also use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)
```

### Monokai Sublime Syntax Highlight

Thanks to [Highlight.js](https://highlightjs.org/).

## Development

### Requirements

- [Grunt] 0.4+
- Hexo 3.0+

### Grunt tasks

- **default** - Download [Fancybox] and [Font Awesome].
- **fontawesome** - Only download [Font Awesome].
- **fancybox** - Only download [Fancybox].
- **clean** - Clean temporarily files and downloaded files.

[Hexo]: http://zespia.tw/hexo/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/

## Sites

- [Blairos Theme][1] - The demo site of Blairos Theme
- [Blair Chan's Blog][1] - The author's blog of Blairos

If you are using Blairos,you can add your site [here](https://github.com/52binge/blairos/wiki/Sites) ! I'll push the available sites here.

##License
[MIT](/LICENSE)

[1]: http://52binge.github.io
