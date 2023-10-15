---
layout: 'paper-reading'
papertitle: 'A Practical Wave Optics Reflection Model for Hair and Fur'
paperauthors: Mengqi (Mandy) Xia, Bruce Walter, Christophe Hery, Olivier Maury, Eric Michielssen, Steve Marschner
papersource: 'SIGGRAPH'
paperurl: 'https://mandyxmq.github.io/research/assets/WaveFiber3d_paper_compress.pdf'
papertags: 'Material'
date: 2023-07-23
---

基本信息：
- 简介：一个新的粗糙纤维建模的材质模型。
- 相关材料：
  - 源码：https://github.com/mandyxmq/WaveFiber3d
  - 项目网站：https://mandyxmq.github.io/research/wavefiber_3d.html
  - 讨论班: 2023-07-23
 
传统的纤维散射模型缺乏了一些重要的纤维外观表现。之前的波动散射工作对纤维建模采用了理想的挤出模型，这样的模型缺乏对表面粗糙度和倾斜的角质鳞片的建模。

本工作中将粗糙纤维的建模向前推进了重要的一步，将任意的 3D microgeometry 纳入考量。该工作首先提出了一个基于几何光学部分近似的 3D 波动光学模拟器，并使用 GPU 加速，来进行表面反射和衍射式散射的模拟，然后将这些模拟结果放到本工作提出的一个基于小波噪声的纤维模型里面去，从而实现更真实的仿真。