---
layout: 'paper-reading'
papertitle: 'LuisaRender: A High-Performance Rendering Framework with Layered and Unified Interfaces on Stream Architectures'
paperauthors: Shaokun Zheng, Zhiqian Zhou, Xin Chen, Difei Yan, Chuyan Zhang, Yuefeng Geng, Yan Gu, Kun Xu
papersource: 'SIGGRAPH-Asia'
paperurl: 'https://dl.acm.org/doi/10.1145/3550454.3555463'
papertags: 'Rendering System'
date: 2023-4-16
---

基本信息：
- 简介：一个适用于现代流处理器架构的、高性能的渲染框架。
- 相关材料：
  - 源码：https://github.com/LuisaGroup/LuisaCompute
  - 视频：GAMES 上面有分享： [GAMES Webinar 2023 – 267期](https://games-cn.org/games-webinar-20230309-267/)
  - 讨论班: 2023-4-16
 
LuisaRender 是一个适用于现代流处理器架构的、高性能的渲染框架。该框架提供了嵌入到 C++ 中的 DSL、现代图形 API 的资源封装，后端 JIT 代码生成和编译，以及一个优化的 Monte Carlo 渲染器。