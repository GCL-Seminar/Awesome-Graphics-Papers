---
layout: 'paper-reading'
papertitle: 'A Data-Driven Paradigm for Precomputed Radiance Transfer'
paperauthors: Laurent Belcour, Thomas Deliot, Wilhem Barbier, Cyril Soler
papersource: 'PACMCGIT'
paperurl: 'https://arxiv.org/abs/2206.13112'
papertags: Global Illumination
date: 2022-12-18
---

基本信息：
- 简介：传统的 PRT 是将漫反射材质的出射 irradiance 分解成为不同的、以 SH 基函数定义的光照为基础的响应的线性组合；本篇文章将漫反射材质的出射 irradiance 分解成不同 light configuration 下出射光响应的线性组合，并且用矩阵降维的方法压缩存储。
- 相关材料：
  - 源码：有个 Notebook，[链接](https://belcour.github.io/blog/supp/2022-data-driven-prt/index.html)
    - 看这个 URL，感觉他之后会写博客介绍？但是 https://belcour.github.io/blog 里面目前没看到
  - 视频：[YouTube](https://www.youtube.com/watch?v=k3hzcrjoFbc)
    - (!) 视频比 paper 好懂一些
  - 讨论班: 2022-12-18
    - 时间比较紧，看的也不是很明白，没写 ppt

自己写的博客：https://blog.libreliu.info/paper-reading/data-driven-prt/