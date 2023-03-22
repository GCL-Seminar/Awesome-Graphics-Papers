---
layout: 'paper-reading'
papertitle: 'Depth of Field Aware Differentiable Rendering'
paperauthors: Stanislav Pidhorskyi, Timur Bagautdinov, Shugao Ma, Jason Saragih, Gabriel Schwartz, Yaser Sheikh, Tomas Simon
papersource: 'TOG'
paperurl: 'https://dl.acm.org/doi/10.1145/3550454.3555521'
papertags: Differentiable Rendering
date: 2023-03-18
---

基本信息：
- 简介：可微渲染解决带景深效果的场景重建问题
- 相关材料：
  - 视频：无
  - 讨论班: 2023-03-18 渲染组

通过求解景深下的可微渲染方程，提出一种可以规避自动微分的景深模糊可微方法，并将其应用于基于Ray Marching的可微渲染（如Nerf和 Plenoxels）和基于光栅化的可微渲染框架中。