---
layout: 'paper-reading'
papertitle: 'Sparsity-Specific Code Optimization using Expression Trees'
paperauthors: Philipp Herholz, Xuan Tang, Teseo Schneider, Shoaib Kamil, Daniele Panozzo, Olga Sorkine-Hornung
papersource: 'TOG'
paperurl: 'https://dl.acm.org/doi/10.1145/3520484'
papertags: Graphics DSL & Tools
date: 2023-03-19
---

基本信息：
- 简介：本篇文章实现了一个对使用稀疏数据的算法的代码做优化的优化器，该优化器可以将未优化的、使用 C++ 编写的操作稀疏数据的算法代码变换为并行的、使用 CPU / GPU 进行运算的运算核函数。该方法依赖固定的进行稀疏计算的计算模式。
- 相关材料：
  - 源码：https://github.com/PhHerholz/SymbolicLib
  - 视频：无
  - 讨论班：2023-03-19 渲染组

本质上就是如何把稀疏矩阵对应的计算图 Lower 到 GPU 和 CPU 并行计算设备上面去的问题。这篇文章可能应该结合 AI 编译器的工作一起看。