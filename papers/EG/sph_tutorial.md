
---
layout: 'paper-reading'
papertitle: 'Smoothed Particle Hydrodynamics Techniques for the Physics Based Simulation of Fluids and Solids'
paperauthors: Dan Koschier, Jan Bender, Barbara Solenthaler, Matthias Teschner 
papersource: 'EG'
paperurl: 'https://interactivecomputergraphics.github.io/SPH-Tutorial/'
papertags: Particle-based Method
date: 2023-02-18
---

基本信息：
- 简介：
  (第一部分) SPH是一种在图形学中被广泛使用的基于粒子表示的仿真方法，能够高效地仿真多种属性的材料，如流体、高粘度材料、弹性体等，并且今年来的研究使得SPH能够鲁棒地处理多种材料之间的交互。在Seminar的第一部分，我们介绍了SPH的粒子采样近似连续函数和微分算子的基础概念，并介绍了流体仿真的一般求解流程（算子分裂operator splitting），以及流体不可压缩性的显式（SESPH）/隐式（PCISPH，IISPH，DFSPH）求解方法。
  (第二部分) SPH的固液边界本质上就是偏微分方程的边界条件，其本质困难在于物理场在固体边界附近还没有合适的表达。其中，密度场的表达是依赖于固体的表达的：若固体是基于粒子离散，则常用方法为单层不均匀采样，但是会有表面崎岖的问题；若固体是基于网格离散，则一般边界处采用连续碰撞检测结合碰撞冲量的方式解决穿透，但是会带来效率降低的问题；若固体是隐式表达，例如如今的SOTA方法volume map，这就能比较好地解决上述问题。此外，压强梯度场的表达主要依托于固体区域上压强场的延拓，分为镜像法和外插法。镜像法即算某液体粒子处压强梯度时，直接用该液体粒子处的压强代替固体伪粒子处压强，外插法即用SPH/MLS等方式通过所有邻居液体粒子插值出每个空间位置处的合适压强。 
 （第三部分）介绍了SPH流体模拟中引入粘性、涡量和表面张力的主要方法。粘性力主要描述了流体动能的耗散，主要有显式和隐式求解两类方法。借鉴了有限差分的显式方法，能够保持守恒量，并有较高的计算效率，是粘性力计算的主流方法。在涡量和表面张力的研究上，主要可以从宏观或微观上入手。引入涡量有助于降低SPH格式的数值耗散现象，能够更好保持流体的漩涡运动。表面张力描述了液体分子之间的相互吸引力，有助于更真实的流体表面的形成。
- 相关材料：
  - 网站：https://interactivecomputergraphics.github.io/SPH-Tutorial
  - 讨论班: 2023-02-18


