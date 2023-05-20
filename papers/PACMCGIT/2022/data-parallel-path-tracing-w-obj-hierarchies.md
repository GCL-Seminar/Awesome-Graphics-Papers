---
layout: 'paper-reading'
papertitle: 'Data Parallel Path Tracing with Object Hierarchies'
paperauthors: Ingo Wald, Steven G Parker
papersource: 'PACMCGIT'
paperurl: 'https://dl.acm.org/doi/pdf/10.1145/3543861'
papertags: 'Rendering System'
date: 2023-05-14
---

基本信息：
- 简介：本文提出了一种同时支持空间和对象层次结构两种划分方式的，新的场景数据划分方法。同时，利用多种减少数据通信的策略，本文的方法可以同时实现降低通信开销、降低内存占用、增加性能的目标，进而可以实现在相对低端的互联网络上实现 interactive 级别的渲染性能。
- 相关材料：
  - 源码：无
  - 幻灯片：[HPG 2022 上的 Slide](https://www.highperformancegraphics.org/slides22/Brix-HPG-FINAL.pdf)
  - 视频：[YouTube](https://youtu.be/HM6Leo6_ZLk?t=7442)
  - 讨论班: 2022-10-16
