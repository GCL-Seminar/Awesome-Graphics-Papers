---
layout: 'paper-reading'
papertitle: 'Inverse Global Illumination using a Neural Radiometric Prior'
paperauthors: Saeed Hadadan, Geng Lin, Jan Novák, Fabrice Rousselle, Matthias Zwicker
papersource: 'SIGGRAPH'
paperurl: 'https://research.nvidia.com/labs/rtr/inverse_global_illumination/'
papertags: Neural Radiosity
date: 2023-06-11
---

基本信息：
- 简介：基于神经辐射度先验的逆向全局光照。
- 相关材料：
  - 源码：无
  - 视频：无
  - 讨论班: 2023-06-11
 
本文提出了一种逆向渲染方法，该方法使用神经网络表示辐射度，并通过自动微分（AD）计算场景参数的梯度，而不是构建并微分路径积分。与需要跟踪完整路径样本的先前工作相比（例如路径重放反向传播，Path Replay Backpropagation），可以以相当（有时更好）的质量恢复场景参数且具有更快的运行速度。