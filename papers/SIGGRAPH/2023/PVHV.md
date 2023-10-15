---
layout: 'paper-reading'
papertitle: 'Potentially Visible Hidden-volume Rendering for Multi-view Warping'
paperauthors: Janghun Kim, Sungkil Lee
papersource: 'SIGGRAPH'
paperurl: 'https://cg.skku.edu/pub/papers/2023-kim-siggraph-pvhv-cam.pdf'
papertags: 'Rasterization pipeline optimization'
date: 2023-09-03
---

基本信息：
- 简介：一种基于 depth peeling 的思想，快速计算在新视点可能可见的不可见区域，从而进行 fragment culling 的技术
- 相关材料：
  - 源码：https://github.com/cgskku/pvhv (只有几个 shader)
  - 视频：YouTube [SIGGRAPH 2023: Potentially Visible Hidden-Volume Rendering for Multi-View Warping](https://www.youtube.com/watch?v=cnR8iujBu7A)
  - SIGGRAPH 的 Slide: [here](https://cg.skku.edu/pub/papers/2023-kim-siggraph-pvhv-slides.pdf)
  - 讨论班: 2023-09-03

在多视点 warping 时，重用已有样本是比较重要的。该文章给出了对于不同的可能视点分布类型下，那些可能在一个视点内被遮挡，但在其它视点中被暴露的区域的一种快速计算方法。该方法可以用于 warping 前的片段剔除。