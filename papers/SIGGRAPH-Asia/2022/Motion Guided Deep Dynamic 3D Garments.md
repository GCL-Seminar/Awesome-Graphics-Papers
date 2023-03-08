---
layout: 'paper-reading'
papertitle: 'Motion Guided Deep Dynamic 3D Garments'
paperauthors: Meng Zhang，Duygu Ceylan， Niloy J.Ceylan     
papersource: 'SIGGRAPH-Asia'
paperurl: 'https://dl.acm.org/doi/pdf/10.1145/3550454.3555485‘
papertags: Physical simulation

date: 2023-03-04
---

基本信息：
- 简介：数据驱动的服装仿真。
- 相关材料：
  - 源码：[MengZephyr/Motion-Guided-Deep-Dynamic-3D-Garment (github.com)](https://github.com/MengZephyr/Motion-Guided-Deep-Dynamic-3D-Garment)
  - 论文主页：[SGP | UCL](https://geometry.cs.ucl.ac.uk/projects/2022/MotionDeepGarment/)
  - 讨论班: 2023-03-04

本文提出了一种不依靠运动序列对服装进行仿真的数据驱动方法。它首先学习一个服装的形变空间，然后学习服装的速度、加速度、位置等信息到下一帧的形变编码的网络，从而实现对未知运动序列的服装的预测。