---
layout: 'paper-reading'
papertitle: 'A Contact Proxy Splitting Method for Lagrangian Solid-Fluid Coupling'
paperauthors: Tianyi Xie, Minchen Li, Yin Yang, and Chenfanfu Jiang
papersource: 'SIGGRAPH'
paperurl: 'https://drive.google.com/uc?export=view&id=1Nv47RP2tNunw3w7-eZy3qNu3InXRPB2q'
papertags:  Finite Element Method, Particle-based Method, Smoothed Particle Hydrodynamics, Fluid Solid Coupling, Incremental Potential Contact
date: 2023-06-09
---

基本信息：

- 简介：本文提出了一种用于FEM可变形体与SPH流体之间的强流固耦合算法。首先，本文将SPH流体的运动、不可压条件等求解转化为能量函数优化问题。其次，本文将流固耦合问题转化为流体粒子与固体网格之间的碰撞问题，通过引入了IPC模型，在运动求解的同时处理了碰撞与耦合，并提出了强流固耦合对应的能量函数优化问题。最后，本文针对提出的优化问题使用了交替迭代方法，借助Contact Proxy实现了快速且稳定的求解。
- 视频：[youtube](https://www.youtube.com/watch?v=kVByO8_1CT8)
- 讨论班：2023-06-03
