---
layout: 'paper-reading'
papertitle: 'Machine Learning is the Solution Also for Foveated Path Tracing Reconstruction'
paperauthors: Atro Lotvonen , Matias Koskela , Pekka Jääskeläinen
papersource: 'VISIGRAPP'
paperurl: 'https://trepo.tuni.fi//bitstream/handle/10024/129877/GRAPP_2020_45.pdf?sequence=1'
papertags: Foveated Rendering 
date: 2023-4-16
---

基本信息：
- 简介：注视点实时路径追踪渲染过程中使用神经网络进行超分辨率重建。
- 相关材料：
  - 源码：无
  - 视频：无
  - 讨论班: 2023-4-16
 
本文提出了一种使用神经网络进行超分辨率重建的注视点路径追踪渲染方法，在视觉极坐标空间中进行路径追踪和去噪后，使用CNN超分辨率网络重建视野外围部分，最后投影到屏幕空间，一定程度上提高了渲染质量。