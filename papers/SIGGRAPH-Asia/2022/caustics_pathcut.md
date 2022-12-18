---
layout: 'paper-reading'
papertitle: 'Unbiased Caustics Rendering Guided by Representative Specular Paths'
paperauthors: He Li, Beibei Wang, Changhe Tu, Kun Xu, Nicolas Holzschuch, Ling-Qi Yan
papersource: 'SIGGRAPH-Asia'
paperurl: 'https://wangningbei.github.io/2022/PathcutGuiding_files/paper_pathcut_guiding.pdf'
papertags: Ray tracing,Acceleration structure
date: 2022-12-04
---

基本信息：
- 简介：本篇文章介绍了一种利用Pathcut方法生成的Pure Specular Path对每次bounce采样方向进行引导，进而加速渲染caustic现象的方法。
- 相关材料：
  - 源码：https://github.com/Lihns/caustics-pathcut
  - 视频：无
  - 讨论班: 2022-12-04

首先利用Pathcut方法生成的Pure Specular Path，然后使用这个代表性路径对bounce处的入射光分布进行估计，根据估计的入射光分布可以引导bounce处的采样