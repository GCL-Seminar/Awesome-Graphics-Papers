---
layout: 'paper-reading'
papertitle: 'Ref-NeRF: Structured View-Dependent Appearance for Neural Radiance Fields'
paperauthors: Dor Verbin, Peter Hedman, Ben Mildenhall, Todd Zickler, Jonathan T. Barron, Pratul P. Srinivasan
papersource: 'CVPR'
paperurl: 'https://arxiv.org/abs/2112.03907'
papertags: NeRF
date: 2022-12-18
---

基本信息：
- 简介：本篇文章对原始的NeRF结构进行改进，改善NeRF处理glossy现象的问题。
- 相关材料：
  - 源码：https://github.com/google-research/multinerf
  - 视频：https://www.youtube.com/watch?v=qrdRH9irAlk&ab_channel=DorVerbin
  - 讨论班: 2022-12-18

NeRF在glossy情况下，由于每点的出射光差异很大，因此使用NeRF直接根据出射方向推断出射光是较为困难的，而在Phong模型、无限远环境光的条件下，每点的入射光是一致的。作者将反射方向、roughness、法线方向等显式地作为网络的输入，简化了模型推理的难度；此外，加入了对normal的惩罚，使得density场更加准确。在合成场景下表现很好，但是现实场景下由于不满足无穷远环境光的假设，改善效果不是很好。