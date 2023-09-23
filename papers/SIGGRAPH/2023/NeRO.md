---
layout: 'paper-reading'
papertitle: 'NeRO: Neural Geometry and BRDF Reconstruction of Reflective Objects from Multiview Images'
paperauthors: YUAN LIU, PENG WANG, CHENG LIN, XIAOXIAO LONG, JIEPENG WANG, LINGJIE LIU, TAKU KOMURA, WENPING WANG
papersource: 'SIGGRAPH'
paperurl: 'https://liuyuan-pal.github.io/NeRO/'
papertags: NeRF
date: 2023-09-03
---

基本信息：
- 简介：多视角镜面反射物体图像的神经几何与BRDF重建。
- 相关材料：
  - 源码：无
  - 视频：无
  - 讨论班: 2023-09-03
 
本文提出了一种基于神经渲染的方法NeRO，用于从多视角图像中重建光泽反射（Glossy）物体的几何与BRDF。首先通过应用split-sum近似和积分方向编码来近似直接光和间接光的着色效果，从而准确地重建反射对象的几何形状。然后在物体几何形状固定的情况下，使用更精确的采样来恢复环境光和物体的BRDF。测试数据集上，几何的重建效果好于COLMAP、NeuS等方法，BRDF的重建效果好于NDR等方法。