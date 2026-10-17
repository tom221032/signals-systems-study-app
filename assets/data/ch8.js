window.SIGNAL_CHAPTERS = window.SIGNAL_CHAPTERS || [];
window.SIGNAL_CHAPTERS.push({
  id: "ch8",
  num: "08",
  title: "系统的状态空间分析",
  tag: "现代控制",
  accent: "#6e7750",
  pages: [353, 396],
  overview: "把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。",
  core: "状态记忆过去；ẋ=Ax+Bu，y=Cx+Du",
  sections: [
    {
      id: "s8-0", no: "8.0", title: "引言", pages: [353, 355],
      summary: "状态空间方法从系统内部状态出发，用一组一阶方程统一描述连续、离散和多输入多输出系统。",
      points: [
        "状态变量完整记忆系统过去对未来的影响；知道当前状态和未来输入，就能确定未来输出。",
        "状态方程描述状态演化，输出方程描述可观测输出。",
        "状态空间法自然处理初始条件、多变量耦合和内部结构，是经典输入输出法的补充。"
      ],
      formulas: [{ label: "标准结构", expr: "状态方程 + 输出方程", note: "内部状态 x 与外部输入输出 u、y 的桥梁。" }],
      pitfall: "状态变量选取不唯一，但状态维数等于系统阶数；多选或少选都会破坏模型完整性。",
      check: "为什么仅知道当前输入不足以预测系统未来输出？状态变量补足了什么信息？",
      keywords: ["状态空间", "状态变量", "MIMO", "内部状态"]
    },
    {
      id: "s8-1-1", no: "8.1.1", title: "连续时间系统状态方程的建立", pages: [355, 360],
      summary: "选择独立储能变量作为状态，列写一阶微分方程组并整理为标准矩阵形式。",
      points: [
        "常用状态：电容电压、电感电流、机械系统的位置/速度等独立储能变量。",
        "对每个储能元件列写含一阶导数的方程，消去非状态变量，得到 ẋ=Ax+Bu。",
        "输出方程 y=Cx+Du 把所需输出表示为状态和输入的线性组合。"
      ],
      formulas: [
        { label: "连续状态模型", expr: "ẋ(t)=Ax(t)+Bu(t)", note: "x 为 n×1 状态向量。" },
        { label: "输出方程", expr: "y(t)=Cx(t)+Du(t)", note: "D 为直通矩阵。" }
      ],
      pitfall: "状态变量必须相互独立；若选了相关变量，A 矩阵会失去正确维数或方程不独立。",
      check: "RLC 串联电路选 i<sub>L</sub>、v<sub>C</sub> 为状态，能否写出 A、B、C、D？",
      keywords: ["连续状态方程", "储能变量", "A矩阵", "输出方程"]
    },
    {
      id: "s8-1-2", no: "8.1.2", title: "离散时间系统状态方程的建立", pages: [360, 363],
      summary: "从差分方程或连续系统离散化得到 x(k+1)=Ax(k)+Bu(k)。",
      points: [
        "离散状态方程描述相邻采样时刻的状态转移，A 为状态转移矩阵。",
        "可由差分方程引入延迟变量构造状态，也可由连续系统采样离散化。",
        "输出方程 y(k)=Cx(k)+Du(k) 与连续形式对应。"
      ],
      formulas: [
        { label: "离散状态模型", expr: "x(k+1)=Ax(k)+Bu(k)", note: "一步状态转移。" },
        { label: "输出方程", expr: "y(k)=Cx(k)+Du(k)", note: "离散时刻输出。" }
      ],
      pitfall: "离散化时 A、B 不是简单把连续 A、B 抄过来；需用矩阵指数或零阶保持公式。",
      check: "二阶差分方程如何引入两个状态变量变成一阶方程组？",
      keywords: ["离散状态方程", "差分方程", "状态转移", "离散化"]
    },
    {
      id: "s8-2-1", no: "8.2.1", title: "连续时间系统状态方程的解法", pages: [363, 376],
      summary: "用矩阵指数 e<sup>At</sup> 求零输入响应，用卷积积分加入输入贡献。",
      points: [
        "齐次方程 ẋ=Ax 的解为 x(t)=e<sup>At</sup>x(0)。",
        "e<sup>At</sup> 称为状态转移矩阵，满足 Φ(0)=I、Φ(t₁+t₂)=Φ(t₁)Φ(t₂)。",
        "完全状态响应：x(t)=e<sup>At</sup>x(0)+∫<sub>0</sub><sup>t</sup>e<sup>A(t−τ)</sup>Bu(τ)dτ。"
      ],
      formulas: [
        { label: "状态转移矩阵", expr: "Φ(t)=e<sup>At</sup>=ℒ<sup>−1</sup>[(sI−A)<sup>−1</sup>]", note: "两种常用求法。" },
        { label: "完全状态响应", expr: "x(t)=Φ(t)x(0)+∫<sub>0</sub><sup>t</sup>Φ(t−τ)Bu(τ)dτ", note: "零输入 + 零状态。" }
      ],
      pitfall: "矩阵指数不能逐元素取指数；必须用级数、拉普拉斯或对角化方法计算。",
      check: "A=[[0,1],[0,0]]，求 e<sup>At</sup> 并解释其物理意义。",
      keywords: ["状态转移矩阵", "矩阵指数", "零输入", "卷积积分"]
    },
    {
      id: "s8-2-2", no: "8.2.2", title: "离散时间系统状态方程的解法", pages: [376, 380],
      summary: "离散状态方程通过 A<sup>k</sup> 迭代求解，输入贡献表现为离散卷积和。",
      points: [
        "齐次解 x(k)=A<sup>k</sup>x(0)，A<sup>k</sup> 为离散状态转移矩阵。",
        "完全解 x(k)=A<sup>k</sup>x(0)+Σ<sub>i=0</sub><sup>k−1</sup>A<sup>k−1−i</sup>Bu(i)。",
        "A 的特征值决定离散状态的自然演化；A 的幂可用对角化、Z 变换或迭代计算。"
      ],
      formulas: [
        { label: "离散状态解", expr: "x(k)=A<sup>k</sup>x(0)+Σ<sub>i=0</sub><sup>k−1</sup>A<sup>k−1−i</sup>Bu(i)", note: "k≥1；A<sup>0</sup>=I。" },
        { label: "Z 域形式", expr: "X(z)=(zI−A)<sup>−1</sup>[zx(0)+BU(z)]", note: "状态转移函数。" }
      ],
      pitfall: "离散卷积和的指数是 k−1−i，不是 k−i；边界 i=0 到 k−1 不能写错。",
      check: "A=0.5，x(0)=2，u(k)=1，求 x(k) 的闭式表达式。",
      keywords: ["离散状态解", "A^k", "状态转移", "Z变换"]
    },
    {
      id: "s8-3-1", no: "8.3.1", title: "系统的可控性", pages: [380, 385],
      summary: "可控性判断输入能否在有限时间内把状态从任意初值驱动到任意目标。",
      points: [
        "连续/离散 LTI 系统可控的充要条件是可控性矩阵满秩。",
        "可控性矩阵 C<sub>o</sub>=[B AB … A<sup>n−1</sup>B] 的秩为 n。",
        "PBH 判据：对所有特征值 λ<sub>i</sub>，[λ<sub>i</sub>I−A, B] 行满秩。"
      ],
      formulas: [
        { label: "可控性判据", expr: "rank[B&nbsp;AB&nbsp;…&nbsp;A<sup>n−1</sup>B]=n", note: "n 为状态维数。" },
        { label: "PBH 判据", expr: "rank[λ<sub>i</sub>I−A,&nbsp;B]=n", note: "对所有特征值成立。" }
      ],
      pitfall: "可控性不是“每个状态都能直接测量”，而是“输入能影响每个状态模态”。",
      check: "A=[[1,0],[0,2]]，B=[1,0]<sup>T</sup>，系统是否可控？哪个模态不可控？",
      keywords: ["可控性", "可控性矩阵", "秩", "PBH"]
    },
    {
      id: "s8-3-2", no: "8.3.2", title: "系统的可观测性", pages: [385, 387],
      summary: "可观测性判断能否由有限时间的输出和输入唯一确定初始状态。",
      points: [
        "可观测性矩阵 O=[C; CA; …; CA<sup>n−1</sup>] 的秩为 n 时系统完全可观测。",
        "PBH 判据：对所有特征值 λ<sub>i</sub>，[λ<sub>i</sub>I−A; C] 列满秩。",
        "可控性与可观测性存在对偶关系： (A,B) 可控 ⇔ (A<sup>T</sup>,B<sup>T</sup>) 可观测。"
      ],
      formulas: [
        { label: "可观测性判据", expr: "rank[C;CA;…;CA<sup>n−1</sup>]=n", note: "O 矩阵行满秩。" },
        { label: "对偶", expr: "(A,B) 可控 ⇔ (A<sup>T</sup>,B<sup>T</sup>) 可观测", note: "用于简化判断。" }
      ],
      pitfall: "可观测性不是“输出能直接看到所有状态”，而是“输出历史能反推出初始状态”。",
      check: "A=[[1,0],[0,2]]，C=[1,0]，系统是否可观测？哪个模态不可观测？",
      keywords: ["可观测性", "可观测矩阵", "秩", "对偶"]
    },
    {
      id: "s8-ex", no: "习题 8", title: "本章习题与复盘", pages: [387, 396],
      summary: "重点练习状态方程建立、矩阵指数、离散迭代、可控性和可观测性秩判据。",
      points: [
        "建方程时先明确状态变量，再逐个列写一阶关系并整理矩阵。",
        "矩阵指数题优先检查 A 的特殊结构（对角、幂零、可对角化）。",
        "可控/可观测题写出矩阵后算秩，注意维数与满秩条件。"
      ],
      formulas: [{ label: "复盘链", expr: "选状态 → 列方程 → 矩阵化 → 求解 → 判秩", note: "五步检查法。" }],
      pitfall: "本章计算量大，最容易在矩阵维数、行列方向和特征值上出错；每步写清维度。",
      check: "选一道 RLC 或机械系统题，从电路方程独立建出状态空间模型。",
      keywords: ["习题", "状态方程", "矩阵指数", "可控性", "可观测性"]
    }
  ]
});
