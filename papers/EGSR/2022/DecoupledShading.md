---
layout: 'paper-reading'
papertitle: 'Generalized Decoupled and Object Space Shading System'
paperauthors: D. Baker and M. Jarzynsk
papersource: 'EGSR'
paperurl: 'https://www.oxidegames.com/wp-content/uploads/2022/07/Generalized-Decoupled-and-Object-Space-Shading-System.pdf'
papertags: Rendering System
date: 2023-02-24
---

基本信息：

- 简介：本篇文章介绍了一种基于物体空间的解耦着色渲染系统，通过在运行时采集渲染所需的element（称为Shadel），并直接在Shadel上完成着色，最后再通过光栅化输出到屏幕结果。整个过程解耦了着色与光栅化，可以使着色和光栅化以不同速率进行计算，提高渲染效率，同时也能够支持多层材质等复杂材质系统
- 相关材料：
  - 源码：无
  - Presentation: [https://www.oxidegames.com/2022/07/egsr-2022-presentation-generalized-decoupled-shading/](https://www.oxidegames.com/2022/07/egsr-2022-presentation-generalized-decoupled-shading/)
  - 前置工作PPT: [https://www.oxidegames.com/wp-content/uploads/2016/03/Object-Space-Lighting-Rev-21.pdf](https://www.oxidegames.com/wp-content/uploads/2016/03/Object-Space-Lighting-Rev-21.pdf)
  - 讨论班: 2023-02-24