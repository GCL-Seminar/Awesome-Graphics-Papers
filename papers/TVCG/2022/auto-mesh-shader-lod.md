---
layout: 'paper-reading'
papertitle: 'Automatic Mesh and Shader Level of Detail'
paperauthors: Yuzhi Liang, Qi Song, Rui Wang, Yuchi Huo, Hujun Bao
papersource: 'TVCG'
paperurl: 'https://ieeexplore.ieee.org/document/9815871'
papertags: 'Rasterization pipeline optimization'
date: 2023-02-26
---

基本信息：
- 简介：本篇文章给出了在自适应划分的距离组下同时优化网格和 Shader 的 LOD 的优化算法。
- 相关材料：
  - 源码：无
  - 视频：无
  - 讨论班: 2023-02-26

文章中首先提出了被称为“交替优化”的优化算法，其中首先对 Shader 利用遗传算法进行变异，得到若干变体，再利用网格简化算法来以 image loss 进行网格简化，使得在给定距离上每个变体对应的运算代价小于给定开销，且误差上满足要求。之后，这些变体会进行排序，前 N% 的变体进入下一轮交替优化，反复多轮后得到结果。

针对交替优化耗时较长的问题，文章中还提出了“分别优化”的算法。该算法会首先分别对网格和 Shader 独立的进行简化，得到一系列质量单调下降的 Shader 和网格变体列，然后再针对每个距离组选择合适的网格和 Shader 对。为了让 LOD 组间的变化尽可能平滑，文章还设置了最平滑的 LOD 切换路线的查找，以及 LOD 组数量的优化操作。

自己写的博客：https://blog.libreliu.info/paper-reading/auto-shader-mesh-lod/