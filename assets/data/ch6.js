window.SIGNAL_CHAPTERS = window.SIGNAL_CHAPTERS || [];
window.SIGNAL_CHAPTERS.push({
  id: "ch6",
  num: "06",
  title: "离散信号与系统的频域分析",
  tag: "离散频谱",
  accent: "#50769a",
  pages: [235, 283],
  overview: "从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。",
  core: "DTFT 在 2π 内周期重复；DFT 是 DTFT 的有限点采样",
  sections: [
    {
      id: "s6-0", no: "6.0", title: "引言", pages: [235, 235],
      summary: "建立离散频域分析路线：DTFS（周期序列）→ DTFT（非周期序列）→ DFT（有限长可计算）。",
      points: [
        "离散时间频率变量 Ω 是归一化角频率，DTFT 以 2π 为周期。",
        "周期序列用离散傅里叶级数，非周期序列用离散时间傅里叶变换。",
        "有限长序列用 DFT，便于计算机实现；FFT 是 DFT 的快速算法。"
      ],
      formulas: [{ label: "三种工具", expr: "DTFS / DTFT / DFT", note: "对应周期、非周期、有限长序列。" }],
      pitfall: "不要把连续频率 ω 与离散归一化频率 Ω 混用；Ω=ωT<sub>s</sub>。",
      check: "为什么离散时间傅里叶变换的频率响应天然是周期的？",
      keywords: ["DTFS", "DTFT", "DFT", "归一化频率"]
    },
    {
      id: "s6-1-1", no: "6.1.1", title: "周期信号的离散时间傅里叶级数", pages: [236, 237],
      summary: "周期为 N 的离散序列可展开为 N 个复指数分量，系数也以 N 为周期。",
      points: [
        "只有 N 个独立的复指数 e<sup>j(2π/N)nk</sup>，因此 DTFS 只有 N 个独立系数。",
        "系数 F<sub>n</sub> 是周期为 N 的序列，和原序列一样周期。",
        "DTFS 可看成 DTFT 在周期情况下的离散频域表示。"
      ],
      formulas: [
        { label: "DTFS 系数", expr: "F<sub>n</sub>=(1/N)Σ<sub>k=0</sub><sup>N−1</sup>f(k)e<sup>−j(2π/N)nk</sup>", note: "n 取 0…N−1 即可。" },
        { label: "合成", expr: "f(k)=Σ<sub>n=0</sub><sup>N−1</sup>F<sub>n</sub>e<sup>j(2π/N)nk</sup>", note: "周期延拓后成立。" }
      ],
      pitfall: "DTFS 系数不是唯一的无限序列，而是以 N 为周期重复；只有 N 个独立值。",
      check: "周期 N=4 的序列，DTFS 有几个独立系数？为什么不是无穷多个？",
      keywords: ["DTFS", "周期序列", "傅里叶级数", "独立系数"]
    },
    {
      id: "s6-1-2", no: "6.1.2", title: "离散时间周期信号的频谱", pages: [237, 239],
      summary: "周期序列的频谱是离散且周期的，谱线间隔为 2π/N，在频域每 2π 重复一次。",
      points: [
        "时域周期 N 对应频域谱线间隔 2π/N。",
        "与连续周期信号不同，离散周期信号的频谱本身也是周期的。",
        "幅度谱和相位谱都以 2π 为周期，只需观察一个主值区间。"
      ],
      formulas: [{ label: "谱线间隔", expr: "ΔΩ=2π/N", note: "N 为时域周期。" }],
      pitfall: "“周期信号的频谱离散”只说对了一半；离散时间周期信号的频谱还周期重复。",
      check: "N=8 的周期序列，其频谱在 0≤Ω<2π 内有多少根独立谱线？",
      keywords: ["周期序列频谱", "离散谱", "周期谱", "2π"]
    },
    {
      id: "s6-2-1", no: "6.2.1", title: "离散时间傅里叶变换", pages: [239, 242],
      summary: "非周期离散序列的 DTFT 是 Ω 的连续、周期函数，以 2π 为周期。",
      points: [
        "F(e<sup>jΩ</sup>)=Σf(k)e<sup>−jΩk</sup>，逆变换是在一个 2π 区间内积分。",
        "DTFT 对 Ω 连续、对 Ω 周期，这是离散时间采样导致的结果。",
        "绝对可和是 DTFT 存在的常用充分条件，广义函数可扩展。"
      ],
      formulas: [
        { label: "DTFT", expr: "F(e<sup>jΩ</sup>)=Σ<sub>k=−∞</sub><sup>∞</sup>f(k)e<sup>−jΩk</sup>", note: "Ω 为归一化角频率。" },
        { label: "逆 DTFT", expr: "f(k)=(1/2π)∫<sub>−π</sub><sup>π</sup>F(e<sup>jΩ</sup>)e<sup>jΩk</sup>dΩ", note: "积分区间长度 2π。" }
      ],
      pitfall: "离散时间信号的频谱是周期函数，因此带宽和频率只需在一个 2π 主值区间内讨论。",
      check: "DTFT 为什么满足 F(e<sup>j(Ω+2π)</sup>)=F(e<sup>jΩ</sup>)？",
      keywords: ["DTFT", "非周期序列", "周期频谱", "绝对可和"]
    },
    {
      id: "s6-2-2", no: "6.2.2", title: "常用信号的离散时间傅里叶变换", pages: [242, 246],
      summary: "熟记单位脉冲、阶跃、指数、矩形序列和正弦/余弦序列的 DTFT。",
      points: [
        "δ(k) ↔ 1；常数序列 ↔ 2π 周期冲激串。",
        "a<sup>k</sup>ε(k) ↔ 1/(1−ae<sup>−jΩ</sup>)（|a|<1）。",
        "有限长矩形序列的 DTFT 是 Dirichlet 核型函数，主瓣宽度与长度成反比。"
      ],
      formulas: [
        { label: "单位脉冲", expr: "δ(k) ↔ 1", note: "全频带等幅。" },
        { label: "单边指数", expr: "a<sup>k</sup>ε(k) ↔ 1/(1−ae<sup>−jΩ</sup>)", note: "|a|<1。" }
      ],
      pitfall: "连续与离散的阶跃变换形式不同；离散阶跃的 DTFT 含周期冲激和主值项。",
      check: "a=0.5 时，单边指数序列的 DTFT 在 Ω=0 处的值是多少？",
      keywords: ["DTFT变换对", "脉冲", "指数", "矩形序列", "Dirichlet核"]
    },
    {
      id: "s6-3", no: "6.3", title: "周期序列的离散时间傅里叶变换", pages: [246, 249],
      summary: "周期序列的 DTFT 是一串加权周期冲激，权重由 DTFS 系数决定。",
      points: [
        "周期为 N 的序列不满足绝对可和，但在广义函数意义下有 DTFT。",
        "频谱由间隔 2π/N 的冲激组成，并在 2π 上周期重复。",
        "这与连续周期信号的冲激谱类似，但离散频谱本身还周期。"
      ],
      formulas: [{ label: "周期序列 DTFT", expr: "F(e<sup>jΩ</sup>)=(2π/N)Σ<sub>n</sub>F<sub>n</sub>δ(Ω−2πn/N)", note: "按 2π 周期延拓。" }],
      pitfall: "周期冲激串的权重和间隔要与 DTFS 系数对应；2π/N 因子容易漏。",
      check: "N=4 的周期序列，其 DTFT 在 [0,2π) 内有几根冲激？",
      keywords: ["周期序列", "DTFT", "冲激串", "DTFS"]
    },
    {
      id: "s6-4", no: "6.4", title: "离散时间傅里叶变换的性质", pages: [249, 252],
      summary: "掌握离散时移、频移、反转、卷积、乘积、差分、累加和帕塞瓦尔性质。",
      points: [
        "时移 e<sup>−jΩk₀</sup> 只改变相位；频移对应时域乘 e<sup>jΩ₀k</sup>。",
        "时域卷积对应 DTFT 相乘，时域相乘对应频域周期卷积（带 1/2π）。",
        "差分对应 (1−e<sup>−jΩ</sup>)，累加涉及 1/(1−e<sup>−jΩ</sup>) 与周期冲激。",
        "帕塞瓦尔关系在 2π 主值区间内积分。"
      ],
      formulas: [
        { label: "时移", expr: "f(k−k₀) ↔ e<sup>−jΩk₀</sup>F(e<sup>jΩ</sup>)", note: "相位线性变化。" },
        { label: "卷积", expr: "f(k)*h(k) ↔ F(e<sup>jΩ</sup>)H(e<sup>jΩ</sup>)", note: "DTFT 乘法。" },
        { label: "帕塞瓦尔", expr: "Σ|f(k)|²=(1/2π)∫<sub>2π</sub>|F(e<sup>jΩ</sup>)|²dΩ", note: "一个周期积分。" }
      ],
      pitfall: "DTFT 的频域卷积是周期卷积，不是普通连续卷积；积分区间只需一个 2π。",
      check: "序列延迟 3 个样本，其幅度谱和相位谱分别如何变化？",
      keywords: ["DTFT性质", "时移", "频移", "卷积", "帕塞瓦尔"]
    },
    {
      id: "s6-5-1", no: "6.5.1", title: "离散傅里叶变换（DFT）的引入", pages: [253, 255],
      summary: "DFT 是对 DTFT 在一个周期内等间隔采样，把连续频率变成有限个可计算频点。",
      points: [
        "对 N 点有限长序列，取 Ω=2πn/N，得到 N 个 DFT 系数。",
        "DFT 隐含对时域序列做 N 点周期延拓，因此频域也是周期的。",
        "频率分辨率与观测时长/点数有关：ΔΩ=2π/N。"
      ],
      formulas: [
        { label: "DFT", expr: "F(n)=Σ<sub>k=0</sub><sup>N−1</sup>f(k)e<sup>−j2πnk/N</sup>", note: "n=0,…,N−1。" },
        { label: "频率采样", expr: "F(n)=F(e<sup>jΩ</sup>)|<sub>Ω=2πn/N</sub>", note: "DTFT 的 N 点等间隔采样。" }
      ],
      pitfall: "DFT 不是“新的傅里叶变换”，而是 DTFT 的有限点采样，并且隐含周期延拓。",
      check: "N=8 的 DFT，相邻频点的归一化频率间隔是多少？",
      keywords: ["DFT", "频率采样", "周期延拓", "分辨率"]
    },
    {
      id: "s6-5-2", no: "6.5.2", title: "DFT 的计算", pages: [255, 256],
      summary: "直接 DFT 计算量为 O(N²)，FFT 利用对称性降为 O(N log N)。",
      points: [
        "直接按定义计算需要 N² 次复数乘加，适合理解但不适合大规模数据。",
        "FFT 利用旋转因子的周期性和对称性分解计算，结果与 DFT 完全相同。",
        "FFT 点数通常取 2 的幂；补零只改变频率采样密度，不增加真实信息。"
      ],
      formulas: [
        { label: "旋转因子", expr: "W<sub>N</sub>=e<sup>−j2π/N</sup>", note: "DFT 的核。" },
        { label: "复杂度", expr: "DFT: O(N²) → FFT: O(N log N)", note: "加速来自分治。" }
      ],
      pitfall: "补零不会提高频率分辨率，只会在原频谱上插值；真实分辨率由有效观测长度决定。",
      check: "对 8 点序列补零到 16 点做 DFT，频谱形状和显示分辨率有什么变化？",
      keywords: ["DFT计算", "FFT", "复杂度", "补零", "分辨率"]
    },
    {
      id: "s6-5-3", no: "6.5.3", title: "DFT 的性质", pages: [256, 260],
      summary: "DFT 的移位、卷积和对称性都带有“循环”特征，需要在有限长序列语境下理解。",
      points: [
        "时域循环移位对应频域相位因子；频域循环移位对应时域调制。",
        "时域循环卷积对应频域逐点相乘；普通线性卷积需补零到足够长度。",
        "实序列 DFT 具有共轭对称性，可用于减少计算量和存储。"
      ],
      formulas: [
        { label: "循环卷积", expr: "f(k) ⊛ h(k) ↔ F(n)H(n)", note: "长度 N 的循环卷积。" },
        { label: "线性卷积条件", expr: "N ≥ N₁+N₂−1", note: "补零避免循环混叠。" }
      ],
      pitfall: "FFT 相乘默认是循环卷积；若不补零到足够长度，结果会首尾混叠。",
      check: "长度分别为 4 和 3 的序列，用 DFT 做线性卷积至少需要多少点？",
      keywords: ["DFT性质", "循环卷积", "循环移位", "补零", "共轭对称"]
    },
    {
      id: "s6-6-1", no: "6.6.1", title: "基本信号 e^{jΩk} 激励下的零状态响应", pages: [260, 262],
      summary: "离散 LTI 系统对复指数序列的稳态响应是 H(e<sup>jΩ</sup>) 加权后的同频序列。",
      points: [
        "e<sup>jΩk</sup> 是离散 LTI 系统的本征函数，输出为 H(e<sup>jΩ</sup>)e<sup>jΩk</sup>。",
        "H(e<sup>jΩ</sup>) 是 h(k) 的 DTFT，具有 2π 周期性。",
        "幅度响应决定各频率分量的增益，相位响应决定相移。"
      ],
      formulas: [{ label: "本征响应", expr: "e<sup>jΩk</sup> → H(e<sup>jΩ</sup>)e<sup>jΩk</sup>", note: "LTI、零状态。" }],
      pitfall: "离散频率响应以 2π 为周期，因此高频与低频的区分只在一个主值区间内有效。",
      check: "H(e<sup>jΩ</sup>)=1/[1−0.5e<sup>−jΩ</sup>]，在 Ω=0 处的增益是多少？",
      keywords: ["离散频率响应", "本征函数", "复指数", "DTFT"]
    },
    {
      id: "s6-6-2", no: "6.6.2", title: "一般信号 f(k) 激励下的零状态响应", pages: [262, 266],
      summary: "任意输入分解为复指数叠加，离散系统频域响应为 Y(e<sup>jΩ</sup>)=H(e<sup>jΩ</sup>)F(e<sup>jΩ</sup>)。",
      points: [
        "时域卷积和对应 DTFT 逐点相乘。",
        "频域方法适合求稳态响应和系统频率特性；瞬态与初始条件仍需 Z 变换或时域方法。",
        "DTFT 响应在频域周期重复，计算时只需一个 2π 区间。"
      ],
      formulas: [{ label: "频域响应", expr: "Y(e<sup>jΩ</sup>)=H(e<sup>jΩ</sup>)F(e<sup>jΩ</sup>)", note: "零状态。" }],
      pitfall: "Y=HF 默认零状态；离散系统有初始条件时，DTFT 不像单边 Z 变换那样方便纳入初值。",
      check: "已知 F(e<sup>jΩ</sup>) 与 H(e<sup>jΩ</sup>)，如何求 y(k)？",
      keywords: ["离散系统", "频域响应", "零状态", "卷积定理"]
    },
    {
      id: "s6-ex", no: "习题 6", title: "本章习题与复盘", pages: [266, 283],
      summary: "重点练习 DTFT 变换对、周期性、DFT 频率采样、循环卷积和离散频率响应。",
      points: [
        "先判断序列是周期、非周期还是有限长，再选择 DTFS/DTFT/DFT。",
        "DFT 题注意补零长度，循环卷积与线性卷积不能混用。",
        "答案页在教材 p.270–283，复盘时标出频率变量范围。"
      ],
      formulas: [{ label: "选择工具", expr: "周期 → DTFS；非周期 → DTFT；有限长 → DFT", note: "先分类再计算。" }],
      pitfall: "DTFT 与 DFT 的频率变量和周期范围不同，直接套公式最容易出错。",
      check: "同一有限长序列的 DTFT 和 DFT 有什么关系？画图说明。",
      keywords: ["习题", "DTFT", "DFT", "循环卷积", "频率响应"]
    }
  ]
});
