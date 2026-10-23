window.SIGNAL_QUESTION_BANK = [
  {
    id: "q-periodicity",
    category: "信号分类与周期",
    title: "两个正弦分量相加，是否仍为周期信号？",
    sectionIds: ["s1-1-2"],
    source: "视频第 1 集 08:49–12:35；教材 1.1.2",
    difficulty: "基础",
    prompt: `
      <p>判断下列信号是否周期。若周期，求最小正周期：</p>
      <p>（1）<span class="math">f<sub>1</sub>(t)=sin(πt)+2cos(2t)</span></p>
      <p>（2）<span class="math">f<sub>2</sub>(t)=sin(2t)+cos(3t)</span></p>
    `,
    analysis: `
      <p>先分别求每个正弦分量的周期，再比较 <span class="math">T<sub>1</sub>/T<sub>2</sub></span>。<mark>周期比是有理数时，和信号才周期；周期取两个分量的最小公倍数。</mark></p>
    `,
    steps: [
      `第一题：sin(πt) 的 Ω<sub>1</sub>=π，所以 T<sub>1</sub>=2π/π=2；2cos(2t) 的 T<sub>2</sub>=2π/2=π。`,
      `第一题周期比 T<sub>1</sub>/T<sub>2</sub>=2/π。π 是无理数，因此比值无理，f<sub>1</sub> 非周期。`,
      `第二题：sin(2t) 的 T<sub>1</sub>=π；cos(3t) 的 T<sub>2</sub>=2π/3。`,
      `第二题周期比 T<sub>1</sub>/T<sub>2</sub>=3/2，为有理数。取 T=2T<sub>1</sub>=3T<sub>2</sub>=2π。`
    ],
    answer: `<p>（1）非周期；（2）周期，最小正周期为 <span class="math">2π</span>。</p>`,
    technique: `<p>把每个正弦分量化成标准形式，只读角频率 Ω；不要先把角频率相加。算出周期比后，用互质整数 P/Q 写出来，周期就是 Q·T<sub>1</sub>=P·T<sub>2</sub>。</p>`,
    pitfalls: [
      "看到两个周期信号相加就默认整体周期。",
      "把 T1/T2 中的 π 当成可约去的符号。",
      "求出的是公倍数，却没有检查是否最小。"
    ]
  },
  {
    id: "q-energy-power",
    category: "信号分类与周期",
    title: "一组连续/离散信号的能量与功率判断",
    sectionIds: ["s1-2-3"],
    source: "视频第 1 集 18:31–30:57；教材 1.2.3",
    difficulty: "重点",
    prompt: `
      <p>判断下列信号是能量信号还是功率信号，并求对应能量或平均功率：</p>
      <ol>
        <li><span class="math">f(t)=10cos(3t-θ)</span></li>
        <li><span class="math">f(t)=10e<sup>-5t</sup>ε(t)</span></li>
        <li><span class="math">f(t)=t，0≤t≤2</span>，其余为零</li>
        <li><span class="math">f(k)=k，k=0,1,2,3,4</span>，其余为零</li>
        <li><span class="math">f(k)=2，k≥0</span>，其余为零</li>
        <li><span class="math">f(k)=(-0.5)<sup>k</sup>，k≥0</span>，其余为零</li>
      </ol>
    `,
    analysis: `
      <p>先判断持续范围：有限时长的通常先试能量；周期或无限持续非衰减的通常试功率。<mark>能量公式必须先平方再积分/求和。</mark></p>
    `,
    steps: [
      `第 1 题是周期余弦，为功率信号。峰值 A=10，P=A²/2=50。`,
      `第 2 题 E=∫<sub>0</sub><sup>∞</sup>100e<sup>-10t</sup>dt=10，为能量信号。`,
      `第 3 题 E=∫<sub>0</sub><sup>2</sup>t²dt=8/3，为能量信号。`,
      `第 4 题 E=0²+1²+2²+3²+4²=30，为能量信号。`,
      `第 5 题能量发散；P=lim<sub>N→∞</sub> 4(N+1)/(N+1)=4，为功率信号。`,
      `第 6 题 E=Σ<sub>k=0</sub><sup>∞</sup>0.25<sup>k</sup>=1/(1-0.25)=4/3，为能量信号。`
    ],
    answer: `
      <p>（1）功率信号，P=50；（2）能量信号，E=10；（3）能量信号，E=8/3；（4）能量信号，E=30；（5）功率信号，P=4；（6）能量信号，E=4/3。</p>
    `,
    technique: `<p>周期正弦直接使用 P=A²/2；单边指数衰减直接积分；离散有限序列按样本平方求和；常数无限序列用长度 N+1 平均。</p>`,
    pitfalls: [
      "把 f(t) 直接积分，导致正负抵消，忘记算 |f(t)|²。",
      "离散平均分母用 2N，正确是 2N+1。",
      "把“能量大”与“功率大”混为一谈。",
      "单边指数信号忘记 ε(t)，把区间写成整个实轴。"
    ]
  },
  {
    id: "q-transform-forward",
    category: "波形运算",
    title: "从 f(t) 画 f(-2t+1)",
    sectionIds: ["s1-3-2"],
    source: "视频第 3 集 13:40–17:05；教材 1.3.2",
    difficulty: "重点",
    prompt: `
      <p>设 <span class="math">f(t)=(1-|t|)[ε(t+1)-ε(t-1)]</span>，求并画出 <span class="math">g(t)=f(-2t+1)</span> 的表达式与波形。</p>
    `,
    analysis: `
      <p>不要凭口诀顺序。设新变量 <span class="math">u=-2t+1</span>，把它代入原函数，并重新求支撑区间。</p>
    `,
    steps: [
      `原信号只在 -1≤u≤1 时非零。令 -1≤-2t+1≤1。`,
      `左边不等式 -1≤-2t+1 得 t≤1；右边 -2t+1≤1 得 t≥0。所以新信号支撑为 0≤t≤1。`,
      `代入绝对值：|u|=|-2t+1|=|1-2t|。因此 g(t)=[1-|1-2t|]·[ε(t)-ε(t-1)]。`,
      `分段：当 0≤t≤1/2，1-2t≥0，g(t)=1-(1-2t)=2t。`,
      `当 1/2<t≤1，1-2t<0，g(t)=1-(2t-1)=2-2t。`,
      `峰值为 g(1/2)=1，两端为零，形成一个底宽 1、中心在 t=1/2、高度 1 的三角脉冲。`
    ],
    answer: `
      <p><span class="math">g(t)=2t</span>（0≤t≤1/2），<span class="math">g(t)=2-2t</span>（1/2≤t≤1），其余为零。</p>
    `,
    technique: `<p>端点法：把原信号端点、折点、冲激点分别代入 u=-2t+1，反解 t=(1-u)/2，标出新位置，再判断幅度是否因尺度而变化。</p>`,
    pitfalls: [
      "只做平移，忘记把 t 替换成 -2t+1。",
      "平移量取错：应对独立变量 t 操作。",
      "看到压缩就把普通函数幅度乘 2；普通幅度不变，冲激强度才受尺度影响。"
    ]
  },
  {
    id: "q-transform-inverse",
    category: "波形运算",
    title: "已知 f(3-2t)，反求 f(t) 与 f′(t)",
    sectionIds: ["s1-3-2", "s1-3-3"],
    source: "视频第 3 集 17:08–20:50；教材 1.3.2–1.3.3",
    difficulty: "进阶",
    prompt: `
      <p>已知 <span class="math">h(t)=f(3-2t)</span> 的波形是中心在 t=3/2、底宽为 1、高度为 1 的三角脉冲。求 f(t) 的表达式，并说明 f′(t) 的斜率与冲激位置。</p>
    `,
    analysis: `<p>反演变换的核心是设 u=3-2t，反解原变量。振幅维度没有变化，时间位置按映射反推。</p>`,
    steps: [
      `h(t) 的非零区间为 1≤t≤2，因为中心 3/2、半宽 1/2。`,
      `令 u=3-2t，则 t=(3-u)/2。由 1≤(3-u)/2≤2，得 -1≤u≤1。`,
      `h(t)=1-|2t-3|。代入 t=(3-u)/2，得到 2t-3=-u，所以 h((3-u)/2)=1-|u|。`,
      `因此 f(u)=1-|u|，即 f(t)=1-|t|（-1≤t≤1）。`,
      `f 在 (-1,0) 斜率为 1，在 (0,1) 斜率为 -1。`,
      `在各端点无跳变，因此 f′(t) 在这些区间就是普通斜率；若函数在端点带阶跃截断且端点值非零，则导数中还要补相应冲激。`
    ],
    answer: `<p><span class="math">f(t)=(1-|t|)[ε(t+1)-ε(t-1)]</span>；f′ 在 -1&lt;t&lt;0 为 1，在 0&lt;t&lt;1 为 -1。</p>`,
    technique: `<p>不要正着猜“先翻转还是先平移”。设 u=at+b，反解 t=(u-b)/a；对区间、端点、跳变逐一代入。</p>`,
    pitfalls: [
      "把 f(3-2t) 的中心当作 f(t) 的中心。",
      "反求时只取绝对值，不检查原区间如何映射。",
      "分段函数求导漏掉跳变冲激，或把冲激强度当斜率。"
    ]
  },
  {
    id: "q-derivative-gate",
    category: "波形运算",
    title: "含阶跃门函数的导数与积分",
    sectionIds: ["s1-3-3"],
    source: "视频第 3 集 04:00–09:00；教材 1.3.3",
    difficulty: "进阶",
    prompt: `
      <p>设 <span class="math">f(t)=(1-t)[ε(t)-ε(t-1)]</span>。求 f(t) 的广义导数 f′(t)，并写出 <span class="math">f<sup>(-1)</sup>(t)=∫<sub>-∞</sub><sup>t</sup>f(τ)dτ</span> 的分段表达式。</p>
    `,
    analysis: `<p>先把它看成“函数 g(t)=1-t 乘门函数”，再用乘积法则。<mark>阶跃求导会出现冲激，冲激位置必须乘上该点函数值。</mark></p>`,
    steps: [
      `f(t)=(1-t)ε(t)-(1-t)ε(t-1)。`,
      `求导：f′=-[ε(t)-ε(t-1)]+(1-t)[δ(t)-δ(t-1)]。`,
      `代入冲激位置：t=0 时 1-t=1，留下 δ(t)；t=1 时 1-t=0，δ(t-1) 项消失。`,
      `所以 f′(t)=δ(t)-[ε(t)-ε(t-1)]。`,
      `积分：t&lt;0 时，f=0，f<sup>(-1)</sup>=0。`,
      `0≤t&lt;1 时，∫<sub>0</sub><sup>t</sup>(1-τ)dτ=t-t²/2。`,
      `t≥1 时，积分面积固定为 ∫<sub>0</sub><sup>1</sup>(1-τ)dτ=1/2。`
    ],
    answer: `
      <p><span class="math">f′(t)=δ(t)-[ε(t)-ε(t-1)]</span>；积分为 0（t&lt;0）、t-t²/2（0≤t&lt;1）、1/2（t≥1）。</p>
    `,
    technique: `<p>遇到“函数×阶跃”先展开成两个单边项；求导后逐项检查冲激点函数值。积分则分段累加面积，先算单脉冲总面积。</p>`,
    pitfalls: [
      "只写 -[ε(t)-ε(t-1)]，漏掉 t=0 的 δ(t)。",
      "误以为 t=1 也产生 δ(t-1)，忘记乘以 1-t=0。",
      "积分到 t&gt;1 后仍继续使用 t-t²/2，而没有在 t=1 锁定面积。"
    ]
  },
  {
    id: "q-waveform-construction",
    category: "波形运算",
    title: "用阶跃、斜坡和符号函数构造波形",
    sectionIds: ["s1-4-1"],
    source: "视频第 2 集 15:28–24:32；教材 1.4.1",
    difficulty: "基础",
    prompt: `
      <p>直接画出下列信号的波形，并说明由哪种基本信号限定而成：</p>
      <ol>
        <li><span class="math">f(t)=r(sin t)=sin t·ε(sin t)</span></li>
        <li><span class="math">f(t)=ε(cos(πt/2))</span></li>
        <li><span class="math">f(t)=sgn(t²-4)</span></li>
        <li><span class="math">f(t)=r(2-t)ε(t)</span></li>
      </ol>
    `,
    analysis: `<p>遇到复合阶跃/符号函数，先解内部表达式大于零或小于零的区间，再决定取 0、1 或 -1。</p>`,
    steps: [
      `第 1 题：ε(sin t) 只在 sin t&gt;0 时为 1，所以只保留 sin t 的正半周，负半周清零，幅度不超过 1。`,
      `第 2 题：cos(πt/2)&gt;0 时取 1，否则取 0。以周期 4 重复，得到正半周方波。`,
      `第 3 题：t²-4=(t-2)(t+2)。|t|&gt;2 时取 1，|t|&lt;2 时取 -1，在 ±2 处跳变。`,
      `第 4 题：r(2-t)=(2-t)ε(2-t)，再乘 ε(t)，只在 0≤t&lt;2 保留斜率为 -1 的直线，从 (0,2) 到 (2,0)。`
    ],
    answer: `<p>核心是先确定“非零/取正”的时间区间，再在区间内画原来的函数；复合阶跃并不会改变内部函数形状，只负责开关。</p>`,
    technique: `<p>三问法：内部表达式何时为正？何时为零？何时为负？先画内部函数，再用门函数截取。</p>`,
    pitfalls: [
      "把 ε(g(t)) 当成 ε(t) 的简单平移。",
      "符号函数负半轴写成 0，正确是 -1。",
      "r(2-t)ε(t) 忽略 ε(t)，把负时间部分也画出来。"
    ]
  },
  {
    id: "q-impulse-root",
    category: "奇异信号与冲激",
    title: "为什么冲激没有普通点值，却能用面积表示？",
    sectionIds: ["s1-4-2"],
    source: "视频第 2 集 24:36–32:37；教材 1.4.2",
    difficulty: "概念",
    prompt: `<p>用面积恒为 1 的窄矩形脉冲解释 δ(t) 的物理意义，并说明 <span class="math">δ(0)</span> 为什么不能按普通函数取值。</p>`,
    analysis: `<p>冲激来自“冲量”模型：作用时间趋于零，但作用效果（面积）保持有限。</p>`,
    steps: [
      `设宽度 τ、高度 1/τ 的矩形脉冲 g<sub>τ</sub>(t) 面积恒为 1。`,
      `τ→0 时，非零区间缩成一个点，而高度 1/τ→∞；若强行取点值，会出现无穷大。`,
      `保留面积信息：∫δ(t)dt=1。做积分时冲激抽取函数值，因此不需要 δ(0) 的普通数值。`,
      `物理上类似极短时间的大力作用，关键量是冲量而不是某一瞬间的力。`
    ],
    answer: `<p>把 δ(t) 看成一个“面积 1、宽度趋零、高度趋无穷”的理想脉冲；运算依赖积分和检验函数，不能按普通函数读点值。</p>`,
    technique: `<p>看到 δ，先问它是否与函数相乘、是否被积分、位置在哪里。只在积分或广义函数作用中处理它。</p>`,
    pitfalls: [
      "直接令 δ(0)=∞ 后参与普通四则运算。",
      "认为冲激的强度等于画出来的箭头高度。",
      "忽略冲激面积在尺度变换中的调整。"
    ]
  },
  {
    id: "q-impulse-calc",
    category: "奇异信号与冲激",
    title: "冲激与冲激偶的综合计算",
    sectionIds: ["s1-4-2", "s1-4-3"],
    source: "视频第 2 集 45:23–53:20；教材 1.4.2–1.4.3",
    difficulty: "重点",
    prompt: `
      <ol>
        <li>化简 <span class="math">e<sup>-2t</sup>δ(2t+4)</span></li>
        <li>化简 <span class="math">e<sup>-3t</sup>δ′(t)</span></li>
        <li>求 <span class="math">∫<sub>-∞</sub><sup>∞</sup>[sin(πt)/t]δ(t)dt</span></li>
        <li>求 <span class="math">∫<sub>-∞</sub><sup>∞</sup>(2t-3)δ′(t)dt</span></li>
        <li>求 <span class="math">∫<sub>-2</sub><sup>2</sup>cos(πt/2)[δ′(t-1)+δ(t+5)]dt</span></li>
      </ol>
    `,
    analysis: `<p>先统一冲激位置和尺度，再选择乘积、取样或冲激偶取样公式。<mark>δ′ 的积分取样带负号，并要求对被取样函数求导。</mark></p>`,
    steps: [
      `第 1 题：δ(2t+4)=δ(2(t+2))=δ(t+2)/2；在 t=-2 代入 e<sup>-2t</sup>=e⁴，结果为 (1/2)e⁴δ(t+2)。`,
      `第 2 题：f(t)δ′(t)=f(0)δ′(t)-f′(0)δ(t)。取 f=e<sup>-3t</sup>，f(0)=1，f′(0)=-3，得 δ′(t)+3δ(t)。`,
      `第 3 题：冲激抽 t=0 的极限。sin(πt)/t→π，结果为 π。`,
      `第 4 题：∫f(t)δ′(t)dt=-f′(0)。f′(t)=2，所以结果为 -2。`,
      `第 5 题：δ(t+5) 在积分区间外，贡献 0；δ′(t-1) 的贡献为 -[cos(πt/2)]′|<sub>t=1</sub>。`,
      `cos(πt/2) 的导数为 -(π/2)sin(πt/2)，在 t=1 为 -π/2；再取负号得 π/2。`
    ],
    answer: `<p>（1）(1/2)e⁴δ(t+2)；（2）δ′(t)+3δ(t)；（3）π；（4）-2；（5）π/2。</p>`,
    technique: `<p>标准化位置→检查区间→判断是否求导取样。冲激偶题先写通用公式，不必每次分部积分。</p>`,
    pitfalls: [
      "δ(2t+4) 忘记尺度因子 1/2。",
      "δ′ 取样公式漏负号或忘记先求导。",
      "有限积分区间不检查冲激点是否在区间内。",
      "对函数平方、取绝对值等结构也直接套冲激线性公式。"
    ]
  },
  {
    id: "q-discrete-basics",
    category: "奇异信号与冲激",
    title: "离散脉冲、阶跃与周期序列",
    sectionIds: ["s1-4-4"],
    source: "视频第 2 集 53:22–70:55；教材 1.4.4、5.1",
    difficulty: "基础",
    prompt: `
      <p>（1）证明 <span class="math">δ(k)=ε(k)-ε(k-1)</span>。</p>
      <p>（2）判断 <span class="math">5cos(4k)</span> 是否周期。</p>
      <p>（3）判断 <span class="math">cos(3πk/4)+cos(2πk/3)</span> 是否周期，并求最小周期。</p>
    `,
    analysis: `<p>离散序列的周期必须是整数，判断周期时看 <span class="math">2π/ω</span> 是否为有理数，以及各分量周期的最小公倍数。</p>`,
    steps: [
      `对 δ(k)=ε(k)-ε(k-1)：k=0 时 1-0=1；k≠0 时两项相同，差为 0。`,
      `5cos(4k) 的 ω=4，2π/ω=π/2 为无理数，所以非周期。`,
      `cos(3πk/4) 的 2π/(3π/4)=8/3，最小周期 N<sub>1</sub>=8。`,
      `cos(2πk/3) 的 2π/(2π/3)=3，N<sub>2</sub>=3。`,
      `整体周期 N=lcm(8,3)=24。`
    ],
    answer: `<p>（1）成立；（2）非周期；（3）周期，最小周期为 24。</p>`,
    technique: `<p>有理周期先写成 P/Q，离散最小周期取分子 P；多个分量相加取周期的最小公倍数。</p>`,
    pitfalls: [
      "把离散周期当成连续周期的小数倍。",
      "连续/离散边界值混用：ε(k) 在 0 取 1。",
      "最小公倍数算成乘积，未检查是否已有公因子。"
    ]
  },
  {
    id: "q-block-equations",
    category: "系统模型与性质",
    title: "由系统框图建立微分/差分方程",
    sectionIds: ["s1-5-1"],
    source: "视频第 4 集 04:31–19:35；教材 1.5.1",
    difficulty: "重点",
    prompt: `
      <p>某连续二阶系统有两个积分器。左加法器关系为 <span class="math">x″+3x′+2x=e</span>，右加法器为 <span class="math">y=x″-2x′-x</span>。求系统关于 e、y 的微分方程。</p>
      <p>某离散二阶系统满足 <span class="math">x(k)-3x(k-1)+2x(k-2)=e(k)</span>，<span class="math">y(k)=4x(k-1)-x(k-2)</span>。求差分方程。</p>
    `,
    analysis: `<p>消去中间变量 x。连续系统对 y 方程施加与左式相同的微分算子；离散系统施加与左式相同的移位算子。</p>`,
    steps: [
      `连续左式写成算子形式 P(D)x=e，其中 P(D)=D²+3D+2。`,
      `右式 y=(D²-2D-1)x。两边同时作用 P(D)：P(D)y=P(D)(D²-2D-1)x。`,
      `由于 (D²-2D-1)P(D)x=(D²-2D-1)e，所以 y″+3y′+2y=e″-2e′-e。`,
      `离散部分令移位算子 L 表示 k→k-1，则 (1-3L+2L²)x=e。`,
      `右式 y=(4L-L²)x。两边施加 P(L)：y(k)-3y(k-1)+2y(k-2)=4e(k-1)-e(k-2)。`
    ],
    answer: `
      <p>连续：<span class="math">y″+3y′+2y=e″-2e′-e</span>；离散：<span class="math">y(k)-3y(k-1)+2y(k-2)=4e(k-1)-e(k-2)</span>。</p>
    `,
    technique: `<p>左式整理成 P·x=e，右式 y=Q·x；同时施加 P 得 P·y=Q·e。阶数看积分器/延时器数量。</p>`,
    pitfalls: [
      "只把 x 替换一次，忽略高阶导数/移位。",
      "连续系统反向读积分器时忘记得到求导。",
      "离散系统的 k、k-1、k-2 序号方向写反。"
    ]
  },
  {
    id: "q-linearity",
    category: "系统模型与性质",
    title: "线性与非线性系统判断",
    sectionIds: ["s1-6-2"],
    source: "视频第 5 集 05:04–13:35；教材 1.6.2",
    difficulty: "基础",
    prompt: `
      <p>判断下列系统是否线性：</p>
      <ol>
        <li><span class="math">y(t)=2e(t)</span></li>
        <li><span class="math">y(t)=2e(t)+3</span></li>
        <li><span class="math">y(t)=t²e(t)</span></li>
        <li><span class="math">y(t)=4e′(t)</span></li>
        <li><span class="math">y(t)=Im[e(t)]</span>，其中 e 可为复信号</li>
      </ol>
    `,
    analysis: `<p>检验 <span class="math">T[ae<sub>1</sub>+be<sub>2</sub>]</span> 是否等于 <span class="math">aT[e<sub>1</sub>]+bT[e<sub>2</sub>]</span>。注意系数可以随 t 变化，只要对输入是线性的。</p>`,
    steps: [
      `第 1 题直接保持系数，满足线性。`,
      `第 2 题 T[ae<sub>1</sub>+be<sub>2</sub>]=2(ae<sub>1</sub>+be<sub>2</sub>)+3，而 aT[e<sub>1</sub>]+bT[e<sub>2</sub>]=2ae<sub>1</sub>+2be<sub>2</sub>+3a+3b，不相等。`,
      `第 3 题 t² 是时间函数，但 T[ae<sub>1</sub>+be<sub>2</sub>]=t²(ae<sub>1</sub>+be<sub>2</sub>)，仍可分配，所以线性。`,
      `第 4 题求导是线性运算。`,
      `第 5 题取虚部不保持复系数线性。例如 e=e<sub>r</sub>+je<sub>i</sub>，Im[e]=e<sub>i</sub>；乘 j 后 Im[je]=e<sub>r</sub>，不等于 j e<sub>i</sub>。`
    ],
    answer: `<p>（1）线性；（2）非线性；（3）线性；（4）线性；（5）非线性。</p>`,
    technique: `<p>含独立常数项、平方、绝对值、取实/虚部先警惕；变系数 t² 只说明可能时变，不说明非线性。</p>`,
    pitfalls: [
      "把时变误判成非线性。",
      "只验证可加性，不验证齐次性。",
      "复信号伸缩没考虑复系数。"
    ]
  },
  {
    id: "q-time-invariance",
    category: "系统模型与性质",
    title: "时不变与时变系统判断",
    sectionIds: ["s1-6-2"],
    source: "视频第 5 集 28:22–37:03；教材 1.6.2",
    difficulty: "重点",
    prompt: `
      <p>判断下列系统是否时不变：</p>
      <ol>
        <li><span class="math">y(t)=sin[e(t)]+2e(t)</span></li>
        <li><span class="math">y(k)=k e(k)</span></li>
        <li><span class="math">y(t)=e(2t)</span></li>
        <li><span class="math">y(t)=e(-t)</span></li>
      </ol>
    `,
    analysis: `<p>比较“先平移输入，再过系统”和“先过系统，再平移输出”。</p>`,
    steps: [
      `第 1 题对 e(t-t<sub>0</sub>) 得到 sin[e(t-t<sub>0</sub>)]+2e(t-t<sub>0</sub>)，正好是 y(t-t<sub>0</sub>)。`,
      `第 2 题输入移位得 k e(k-k<sub>0</sub>)，原输出移位得 (k-k<sub>0</sub>)e(k-k<sub>0</sub>)，不相等。`,
      `第 3 题输入移位得 e(2t-t<sub>0</sub>)，原输出移位得 e(2t-2t<sub>0</sub>)，不相等。`,
      `第 4 题输入移位得 e(-t-t<sub>0</sub>)，原输出移位得 e(-(t-t<sub>0</sub>))=e(-t+t<sub>0</sub>)，不相等。`
    ],
    answer: `<p>（1）时不变；（2）时变；（3）时变；（4）时变。</p>`,
    technique: `<p>先求 y<sub>1</sub>=T[e(t-t<sub>0</sub>)]，再求 y(t-t<sub>0</sub>)；两者完全相同才时不变。</p>`,
    pitfalls: [
      "只观察表达式有没有 t，忽略系统规则本身是否随时移。",
      "把 y=e(t)sin(t+1) 判为时变；乘数依赖 t 但输入没有未来移位，可能仍时不变。",
      "压缩、翻转系统直接默认时不变。"
    ]
  },
  {
    id: "q-response-superposition",
    category: "系统模型与性质",
    title: "从两次全响应反求零输入、零状态与未知输入响应",
    sectionIds: ["s1-6-2", "s1-7-2"],
    source: "视频第 5 集 40:08–47:22；教材 1.6.2、1.7.2",
    difficulty: "重点",
    prompt: `
      <p>某 LTI 系统在同一初态 x<sub>0</sub> 下：</p>
      <p><span class="math">y<sub>1</sub>(t)=2e<sup>-t</sup>+cos(πt)</span>（输入 e(t)）</p>
      <p><span class="math">y<sub>2</sub>(t)=3e<sup>-t</sup>+2cos(πt)</span>（输入 2e(t)）</p>
      <p>求零输入、零状态响应；再求初态 2x<sub>0</sub>、输入 5e(t-2) 时的响应。</p>
    `,
    analysis: `<p>设 y<sub>1</sub>=y<sub>zi</sub>+y<sub>zs</sub>，y<sub>2</sub>=y<sub>zi</sub>+2y<sub>zs</sub>。初态不变时，零输入部分不变。</p>`,
    steps: [
      `两式相减得 y<sub>zs</sub>=y<sub>2</sub>-y<sub>1</sub>=e<sup>-t</sup>+cos(πt)。`,
      `代回第一式：y<sub>zi</sub>=y<sub>1</sub>-y<sub>zs</sub>=e<sup>-t</sup>。`,
      `新初态 2x<sub>0</sub> 对应 2y<sub>zi</sub>；输入 5e(t-2) 对应 5y<sub>zs</sub>(t-2)。`,
      `因此 y<sub>new</sub>=2e<sup>-t</sup>+5[e<sup>-(t-2)</sup>+cos(π(t-2))]。`
    ],
    answer: `<p><span class="math">y<sub>zi</sub>=e<sup>-t</sup></span>，<span class="math">y<sub>zs</sub>=e<sup>-t</sup>+cos(πt)</span>；<span class="math">y<sub>new</sub>=2e<sup>-t</sup>+5e<sup>-(t-2)</sup>+5cos(π(t-2))</span>。</p>`,
    technique: `<p>把初态和输入视作两个“输入源”。初态缩放按零输入线性，输入平移按时不变，最后相加。</p>`,
    pitfalls: [
      "直接把两个全响应相加，导致初态贡献翻倍。",
      "输入平移时忘记对零状态响应整体平移。",
      "把初态改变误当成输入改变，套用时不变平移。"
    ]
  },
  {
    id: "q-causality-stability",
    category: "系统模型与性质",
    title: "因果性与 BIBO 稳定性判断",
    sectionIds: ["s1-6-2", "s1-6-3"],
    source: "视频第 5 集 48:30–53:14；教材 1.6.2–1.6.3",
    difficulty: "重点",
    prompt: `
      <p>判断因果性：</p>
      <ol>
        <li><span class="math">y(t)=3e(t-1)</span></li>
        <li><span class="math">y(k)=e(k+1)</span></li>
        <li><span class="math">y(t)=e(2t)</span></li>
        <li><span class="math">y(t)=e(t)sin(t+1)</span></li>
      </ol>
      <p>判断稳定性：</p>
      <ol>
        <li><span class="math">y<sub>zs</sub>(k)=e(k)+e(k+1)</span></li>
        <li><span class="math">y<sub>zs</sub>(t)=∫<sub>-∞</sub><sup>t</sup>e(τ)dτ</span></li>
        <li><span class="math">y<sub>zs</sub>(k)=(k-2)e(k)</span></li>
      </ol>
    `,
    analysis: `<p>因果性只看输入的自变量是否取未来时刻；稳定性要构造一个具体有界输入，检查输出是否会无限增长。</p>`,
    steps: [
      `因果第 1 题用 t-1，过去输入，因果。`,
      `因果第 2 题 k+1 是未来输入，非因果。`,
      `因果第 3 题 t&gt;0 时 2t&gt;t，非因果。`,
      `因果第 4 题输入仍是 e(t)，sin(t+1)只是乘数，因果。`,
      `稳定第 1 题若 |e|≤M，则和幅度≤2M，稳定。`,
      `稳定第 2 题取 e(t)=ε(t)，则 t&gt;0 时 y<sub>zs</sub>=t，无界，不稳定。`,
      `稳定第 3 题取 e(k)=1，则 y<sub>zs</sub>(k)=k-2，k→∞时无界，不稳定。`
    ],
    answer: `<p>因果性：第 1、4 因果；第 2、3 非因果。稳定性：第 1 稳定；第 2、3 不稳定。</p>`,
    technique: `<p>因果用“时刻特值法”最快；稳定性用“有界输入反例法”，优先试阶跃、恒定序列。</p>`,
    pitfalls: [
      "看到 sin(t+1) 就判非因果，混淆乘数与输入时刻。",
      "把非因果等同不稳定。",
      "只看输出表达式有 k 或 t 就判因果，忽略输入是否未来时刻。"
    ]
  }
];
