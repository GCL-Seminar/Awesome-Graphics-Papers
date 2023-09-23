---
layout: 'paper-reading'
papertitle: 'Second-order Stencil Descent for Interior-point Hyperelasticity'
paperauthors: LEI LAN, MINCHEN LI, CHENFANFU JIANG, HUAMIN WANG, YIN YANG,
papersource: 'SIGGRAPH'
paperurl: 'https://drive.google.com/uc?export=view&id=1PRp8vmH_62MfqXmtq4-Jlo_X_43FSn7X'
papertags:  Finite Element Method, Incremental Potential Contact, GPU Acceleration
date: 2023-9-02
---

基本信息：

- 简介：本文在GPU上实现了基于IPC内点法的有限元超弹性模拟算法，旨在利用GPU加速和内点法，来提高同时处理碰撞和接触约束的有限元法模拟算法的效率。文章提出的算法利用在局部利用Hessian进行迭代求解，全局使用并行计算，确保目标函数能够快速收敛，并使用互补着色和混合扫描方案来充分利用GPU计算能力。此外，文章还提出了一种专门的预热过程，用于改善迭代初值并提高算法的收敛速度和稳定性。
- 视频：[youtube](https://www.youtube.com/watch?v=k3e8ZMfLBRc)
- 讨论班：2023-09-02
