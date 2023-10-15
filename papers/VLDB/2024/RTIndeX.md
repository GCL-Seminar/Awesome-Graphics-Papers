---
layout: 'paper-reading'
papertitle: 'RTIndeX: Exploiting Hardware-Accelerated GPU Raytracing for Database Indexing'
paperauthors: Justus Henneberg, Felix Schuhknecht
papersource: 'VLDB'
paperurl: 'https://arxiv.org/pdf/2303.01139.pdf'
papertags: 'Exploit of Raytracing on other fields'
date: 2023-10-15
---

基本信息：
- 简介：用 NVIDIA GPU 提供的硬件光追单元，来进行数据库索引查找问题的解决
- 相关材料：
  - 源码：https://gitlab.rlp.net/juhenneb/rtindex
  - 视频：似乎还没有
  - 讨论班: 2023-10-15

本篇文章实现了一套利用 NVIDIA RTX GPU 提供的硬件光追单元来解决数据库索引问题的框架，其将要索引的数据集当作 3D 场景中的一系列物体，并且发射射线来进行点查询和范围查询。为了探索这种方法的优劣，本文还仔细比较了很多情况下该方法与其它 CPU/GPU 数据库索引方法的性能。
