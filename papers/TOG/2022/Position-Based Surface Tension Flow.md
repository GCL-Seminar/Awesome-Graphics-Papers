---
layout: 'paper-reading'
papertitle: 'Position-Based Surface Tension Flow'
paperauthors: Jingrui Xing, Liangwang Ruan , Bin Wang, Bo Zhu, Baoquan Chen
papersource: 'TOG'
paperurl: 'https://lwruan.com/pubs/pbd-st'
papertags: Surface Tension, Fluid Simulation, Position Based Dynamics
date: 2023-03-18
---

基本信息：
- 简介：PBD 框架下的表面张力算法
- 相关材料：
  - PBD综述：[EG 2017](http://www.vci.rwth-aachen.de/publication/0553/)
  - [论文主页](https://lwruan.com/pubs/pbd-st)
  - 讨论班: 2023-03-18 仿真组

本文提出了在PBD框架下流体表面张力的计算方法。该算法通过局部网格划分，得到每个表面粒子周围的局部几何体，并基于该几何体，计算表面张力约束，整合入PBD框架中。相较于其他方法，该算法具有较高的计算效率较高和鲁棒性。