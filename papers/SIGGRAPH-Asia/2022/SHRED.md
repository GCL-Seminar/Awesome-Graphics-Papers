---
layout: 'paper-reading'
papertitle: 'SHRED: 3D Shape Region Decomposition with Learned Local Operations'
paperauthors: R. Kenny Jones , Aalia Habib , Daniel Ritchie     
papersource: 'SIGGRAPH-Asia'
paperurl: 'https://rkjones4.github.io/pdf/shred.pdf'
papertags: Point Cloud Decomposition
date: 2023-02-18
---

基本信息：
- 简介：细粒度的点云分解算法。
- 相关材料：
  - 源码：https://github.com/rkjones4/SHRED
  - 论文主页：https://rkjones4.github.io/shred.html
  - 讨论班: 2023-02-18

SHRED是一种三维点云区域分解算法。他通过学习局部操作来生成细粒度零件实例的分割，并可以依据下游目标任务调整合并阈值来更改颗粒度。