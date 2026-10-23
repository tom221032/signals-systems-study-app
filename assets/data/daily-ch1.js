window.SIGNAL_DAILY_CONTENT = {
  ch1: {
    "s1-0": {
      concept: `
        <p>先别把“信号”和“系统”当成两个抽象名词。<mark>信号是承载变化与信息的量，系统是加工这个量的规则。</mark>麦克风把声压变成电压，放大器改变电压幅度，扬声器再把电压还原成声音，这一整条链路里，信号在不断变化，系统在不断“处理”它。</p>
        <p>本课程要解决两个方向的问题：给定输入和系统，求输出；或者通过输入输出关系，反过来判断系统具有什么性质。日常做电路、通信、音频处理，本质上都在回答这两个问题。</p>
      `,
      advanced: [
        {
          title: "四种观察坐标",
          html: `<p>同一个信号可以从<mark>时域、频域、复频域、状态空间</mark>观察。时域看“怎么随时间变化”；频域看“由哪些频率组成”；复频域适合处理衰减、增长和初始条件；状态空间关注系统内部储能。换一种表示不是换一个信号，而是换一副眼镜。</p>`
        },
        {
          title: "课程主线",
          html: `<p><span class="math">输入 f(t) → 系统 T[·] → 输出 y(t)</span>。后续的卷积、傅里叶变换、拉普拉斯变换、Z 变换，都在为这个映射寻找更方便的计算方式。</p>`
        }
      ],
      summary: `
        <ul>
          <li>信号承载信息，系统完成输入到输出的映射。</li>
          <li>分析信号看“自身结构”，分析系统看“变换规律”。</li>
          <li><mark>时域—频域—复频域—状态空间</mark>是四条互相连接的主线。</li>
        </ul>
        <p><span class="hl-red">易错点：把“信号分析”和“系统分析”混为一谈。</span></p>
      `,
      questionIds: []
    },
    "s1-1-1": {
      concept: `
        <p>描述信号就像描述一条山路：可以写出高度随时间变化的函数，也可以直接画海拔曲线。<mark>解析式、波形图、频谱是同一对象的三种描述方式。</mark></p>
        <p>例如手机计步器记录的是离散序列，心电图既有连续波形又会被采样；从连续时间到离散时间，关键是自变量从实数变成了整数序号。</p>
      `,
      advanced: [
        {
          title: "连续时间与离散时间",
          html: `<p>连续时间信号写成 <span class="math">f(t)</span>，定义域是连续时间；离散时间信号写成 <span class="math">f(k)</span>，只在整数点有定义。若采样周期为 <span class="math">T<sub>s</sub></span>，原始序列是 <span class="math">f(kT<sub>s</sub>)</span>，等间隔时可简写为 <span class="math">f(k)</span>。</p>`
        },
        {
          title: "“连续”指定义域",
          html: `<p><mark>连续时间信号不要求波形连续。</mark>一个方波在跳变处断开了，但它的时间轴仍然连续，所以依旧是连续时间信号。反过来，离散序列的每个样本幅度可以取任意实数，也不能因为幅度连续就称它为连续时间信号。</p>`
        },
        {
          title: "模拟与数字",
          html: `<p>模拟信号：时间连续、幅度连续。数字信号：时间离散、幅度离散。<mark>“数字化”通常同时包含采样和量化。</mark>采样解决“什么时候取值”，量化解决“取值能精确到多少”。</p>`
        }
      ],
      summary: `
        <ul>
          <li>解析式适合计算，波形适合观察，频谱适合分析组成。</li>
          <li>连续/离散看时间定义域，模拟/数字同时看时间和幅度。</li>
          <li>均匀采样时常用 <span class="math">f(k)</span> 省略固定采样间隔。</li>
        </ul>
        <p><span class="hl-red">易错点：看到波形有跳变就判定为离散信号。</span></p>
      `,
      questionIds: []
    },
    "s1-1-2": {
      concept: `
        <p>分类不是给信号贴唯一标签，而是换不同问题去看它。天气预报既是确定的历史曲线，也是预测意义下的随机过程；一段音乐有大音量段落，也有局部静音。</p>
        <p><mark>一个信号可以同时属于多个类别。</mark>例如“连续时间、实值、周期、功率信号”可以同时成立。</p>
      `,
      advanced: [
        {
          title: "确定与随机",
          html: `<p>确定信号能用解析式或波形准确描述；随机信号无法预知每个具体取值，只能用概率密度、相关函数、功率谱等统计工具刻画。随机不等于完全无规律。</p>`
        },
        {
          title: "周期性的本质",
          html: `<p>连续周期信号满足 <span class="math">f(t)=f(t+mT)</span>，离散周期序列满足 <span class="math">f(k)=f(k+mN)</span>。两个正弦分量相加时，<mark>周期比是有理数，和信号才周期</mark>；周期为二者周期的最小公倍数。</p>`
        },
        {
          title: "其他分类",
          html: `<p>能量/功率、因果/非因果、实/复、有限长/无限长，分别回答“强不强”“是否依赖未来”“是否带相位”“持续多久”。分类维度可以叠加使用。</p>`
        }
      ],
      summary: `
        <ul>
          <li>连续/离散按自变量分，模拟/数字再叠加幅度维度。</li>
          <li><mark>两个周期信号之和不一定是周期信号。</mark></li>
          <li>周期信号通常是功率信号，有限时长信号通常是能量信号。</li>
        </ul>
        <p><span class="hl-red">易错点：只凭“看起来重复”判断周期，忘记检查严格的最小周期和离散整数条件。</span></p>
      `,
      questionIds: ["q-periodicity"]
    },
    "s1-2-1": {
      concept: `
        <p>时间特性回答“变化快不快、持续多久、什么时候突变”。这像看城市交通曲线：早高峰上升得快，持续时间长，周期是一天；单个堵车脉冲的宽度和整天交通周期并不是同一概念。</p>
      `,
      advanced: [
        {
          title: "脉冲参数",
          html: `<p><mark>脉宽描述单个脉冲持续多久，周期描述重复间隔。</mark>上升时间、下降时间描述边沿陡不陡；突变越陡，通常含有越多高频成分。</p>`
        },
        {
          title: "从波形读信息",
          html: `<p>指数信号看增长/衰减速度；正弦信号看周期、幅度、初相；抽样信号看零点间距和主瓣宽度。日常分析中，先画关键点和边界，再写公式，比直接套公式更稳。</p>`
        }
      ],
      summary: `
        <ul>
          <li>时间轴上的四个关键词：起点、终点、周期、变化率。</li>
          <li><mark>脉宽变窄不等于周期变小。</mark></li>
          <li>跳变点会产生高频成分，并可能在导数中形成冲激。</li>
        </ul>
        <p><span class="hl-red">易错点：把单次脉冲宽度和重复周期混为一谈。</span></p>
      `,
      questionIds: []
    },
    "s1-2-2": {
      concept: `
        <p>频率特性回答“信号由哪些音高或振荡成分组成”。耳机均衡器把低频、中频、高频分别增强或衰减，本质上就是改变不同频率分量的权重。</p>
      `,
      advanced: [
        {
          title: "正弦三参数",
          html: `<p><span class="math">f(t)=A cos(Ωt+φ)</span> 中，<mark>A 控制强弱，Ω 控制振荡快慢，φ 控制波形左右位置</mark>，且 <span class="math">Ω=2πf=2π/T</span>。</p>`
        },
        {
          title: "时域与频域的直觉",
          html: `<p>时域变化越快，通常需要更高频率分量来描述。一个很窄的脉冲，频谱往往很宽；一个缓慢变化的包络，主要能量集中在低频。<mark>频域不是把波形换坐标轴，而是把信号拆成不同频率的正弦基。</mark></p>`
        }
      ],
      summary: `
        <ul>
          <li>幅度谱看强弱，相位谱看时间位置。</li>
          <li>周期信号通常对应离散谱，非周期信号通常对应连续谱。</li>
          <li>变化快慢与频率高低存在直观联系。</li>
        </ul>
        <p><span class="hl-red">易错点：把“频率高”误解为“振幅大”。</span></p>
      `,
      questionIds: []
    },
    "s1-2-3": {
      concept: `
        <p>能量是“总共做了多少”，功率是“长期平均做得多快”。相机闪光灯一次释放固定能量，电饭煲持续工作则要看平均功率。这里的“功率”不是热功率的物理单位，而是信号平方的长期平均。</p>
      `,
      advanced: [
        {
          title: "连续与离散定义",
          html: `<p>连续能量与功率：<span class="math">E=∫|f(t)|<sup>2</sup>dt</span>，<span class="math">P=lim(1/T)∫|f(t)|<sup>2</sup>dt</span>。离散序列把积分换成求和，平均时样本点数是 <span class="math">2N+1</span>。</p>`
        },
        {
          title: "两类信号",
          html: `<p><mark>能量信号：0&lt;E&lt;∞，P=0；功率信号：0&lt;P&lt;∞，E=∞。</mark>周期正弦通常是功率信号，有限时长脉冲通常是能量信号，单边衰减指数通常是能量信号。</p>`
        },
        {
          title: "正弦捷径",
          html: `<p>峰值幅度为 A 的正弦/余弦信号，平均功率为 <span class="math">P=A<sup>2</sup>/2</span>。这不是死记：它等价于有效值 <span class="math">A/√2</span> 的平方。</p>`
        }
      ],
      summary: `
        <ul>
          <li><mark>先平方再积分/求和</mark>，避免正负面积抵消。</li>
          <li>有限时长通常能量有限；持续周期通常功率有限。</li>
          <li>也有信号既不是能量信号也不是功率信号。</li>
        </ul>
        <p><span class="hl-red">易错点：计算离散功率时把分母写成 2N，正确是 2N+1。</span></p>
      `,
      questionIds: ["q-energy-power"]
    },
    "s1-2-4": {
      concept: `
        <p>信息量与“不可预测程度”有关。每天固定收到的“1”几乎不提供新信息；抛硬币的结果、突然出现的报警才更能消除不确定性。</p>
      `,
      advanced: [
        {
          title: "信号与信息",
          html: `<p>信号是信息的载体，信息是接收者不确定性被消除的部分。<mark>幅度大不等于信息多</mark>，一个很强但完全可预测的常量信号信息量很低。</p>`
        },
        {
          title: "带宽与分辨率",
          html: `<p>快速变化需要更宽带宽；长时间观测更容易分辨细频差。采样、量化、编码把连续物理量变成可存储和传输的信息。视频压缩就是利用人眼不敏感成分，减少冗余描述。</p>`
        }
      ],
      summary: `
        <ul>
          <li>信息量取决于不确定性，而不是单纯的幅度。</li>
          <li>时间和频率分辨率存在相互制约。</li>
          <li>采样解决时间离散，量化解决幅度离散。</li>
        </ul>
        <p><span class="hl-red">易错点：把“信息量”等同于“信号能量”。</span></p>
      `,
      questionIds: []
    },
    "s1-3-1": {
      concept: `
        <p>相加是叠加，相乘是“逐时刻把关”。主动降噪耳机把反相声波相加来抵消噪声；视频剪辑中乘一个矩形窗，就是在指定时间段保留画面、其余时间清零。</p>
      `,
      advanced: [
        {
          title: "同一时刻运算",
          html: `<p>两个信号相加或相乘时，必须对同一时间点逐点处理：<span class="math">y(t)=f<sub>1</sub>(t)+f<sub>2</sub>(t)</span> 或 <span class="math">y(t)=f<sub>1</sub>(t)f<sub>2</sub>(t)</span>。离散情况同理。</p>`
        },
        {
          title: "相乘的工程意义",
          html: `<p>乘以门函数可以截取区间；乘以载波可以调制；乘以 0 可以静音。<mark>相乘不是把频率简单相加</mark>，两个正弦相乘会产生和频与差频。</p>`
        }
      ],
      summary: `
        <ul>
          <li>相加负责合成，相乘负责门控、调制和加权。</li>
          <li>运算前先统一两个信号的定义域。</li>
          <li>逐点作图是最可靠的结果检查方法。</li>
        </ul>
        <p><span class="hl-red">易错点：把乘法当作“两个波形整体拼接”。</span></p>
      `,
      questionIds: []
    },
    "s1-3-2": {
      concept: `
        <p>平移、翻转、压缩就像处理照片：左右移动是平移，照镜子是翻转，把时间轴缩短会让变化显得更快。关键是所有操作都作用在<mark>独立变量 t</mark>上。</p>
      `,
      advanced: [
        {
          title: "三个基本公式",
          html: `<p><span class="math">f(t-t<sub>0</sub>)</span> 右移，<span class="math">f(t+t<sub>0</sub>)</span> 左移；<span class="math">f(-t)</span> 翻转；<span class="math">f(at)</span> 中 |a|&gt;1 压缩、|a|&lt;1 扩展。</p>`
        },
        {
          title: "复合变换不要背死顺序",
          html: `<p>推荐跟踪特征点：设新变量为 <span class="math">u=at+b</span>，则旧时刻 <span class="math">t=(u-b)/a</span>。把一个端点、折点或冲激位置代进去，点移动到哪里就画到哪里。<mark>这比“先平移还是先压缩”的口诀更抗错。</mark></p>`
        }
      ],
      summary: `
        <ul>
          <li>左加右减只对独立变量成立。</li>
          <li>压缩改变横坐标，不改变普通函数值。</li>
          <li><mark>冲激在尺度变换时强度要除以 |a|。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：把 f(2t-4) 平移量看成 4，正确应提取 2(t-2)，右移 2。</span></p>
      `,
      questionIds: ["q-transform-forward", "q-transform-inverse"]
    },
    "s1-3-3": {
      concept: `
        <p>导数像汽车速度表，积分像里程表。速度描述某一瞬间变化多快，里程累计过去走了多远；图像中边缘对应变化，积分会把尖锐边缘变平滑。</p>
      `,
      advanced: [
        {
          title: "广义导数",
          html: `<p>普通函数在跳变点没有导数，但信号分析会补一个冲激，强度等于跳变量：<span class="math">跳变量 · δ(t-t<sub>0</sub>)</span>。阶跃的导数是冲激，冲激的积分是阶跃。</p>`
        },
        {
          title: "含门函数的求导",
          html: `<p>先写 <span class="math">f(t)=g(t)[ε(t-a)-ε(t-b)]</span>，再用乘积法则。两个阶跃求导会在起止边界产生冲激；如果该点函数值恰为零，对应的冲激可能被乘为零。</p>`
        }
      ],
      summary: `
        <ul>
          <li>导数看斜率与跳变，积分看累积面积。</li>
          <li><span class="math">ε'(t)=δ(t)</span>，<span class="math">δ</span> 的变上限积分是 <span class="math">ε</span>。</li>
          <li>分段函数求导前先找所有跳变点。</li>
        </ul>
        <p><span class="hl-red">易错点：只对斜线部分求导，漏掉边界处的冲激项。</span></p>
      `,
      questionIds: ["q-derivative-gate"]
    },
    "s1-3-4": {
      concept: `
        <p>差分相当于查看“今天比昨天变化多少”，累加相当于把每天的收支一直加下去。银行流水适合看差分，账户余额适合看累加。</p>
      `,
      advanced: [
        {
          title: "前后向差分",
          html: `<p>前向差分 <span class="math">Δf(k)=f(k+1)-f(k)</span>，后向差分 <span class="math">∇f(k)=f(k)-f(k-1)</span>。<mark>因果系统常使用后向差分，因为它只依赖当前与过去。</mark></p>`
        },
        {
          title: "离散微积分关系",
          html: `<p><span class="math">δ(k)=ε(k)-ε(k-1)</span>，<span class="math">ε(k)=Σ<sub>i=-∞</sub><sup>k</sup>δ(i)</span>。边界样本不能漏算。</p>`
        }
      ],
      summary: `
        <ul>
          <li>差分对应连续微分，累加对应连续积分。</li>
          <li><mark>后向差分常与 Z 变换的 (1-z<sup>-1</sup>) 对应。</mark></li>
          <li>结果序列的起点和长度会因差分改变。</li>
        </ul>
        <p><span class="hl-red">易错点：忽略 k=0 边界，导致离散阶跃/脉冲关系差一位。</span></p>
      `,
      questionIds: []
    },
    "s1-3-5": {
      concept: `
        <p>复杂信号可以拆成简单成分，像把混合果汁分成不同口味。拆分的价值在于：复杂对象一旦变成简单基的线性组合，就能分别计算再叠加。</p>
      `,
      advanced: [
        {
          title: "偶奇分解",
          html: `<p><span class="math">f<sub>e</sub>(t)=[f(t)+f(-t)]/2</span>，<span class="math">f<sub>o</sub>(t)=[f(t)-f(-t)]/2</span>。偶部像左右对称的影子，奇部像反对称的残差。</p>`
        },
        {
          title: "冲激分解",
          html: `<p><span class="math">f(t)=∫f(τ)δ(t-τ)dτ</span>。这表示任何连续信号都可看成无数移位冲激的叠加，是卷积和 LTI 响应分析的根源。</p>`
        }
      ],
      summary: `
        <ul>
          <li>偶部 + 奇部可以重构原信号。</li>
          <li>任意信号都可以用移位冲激表示。</li>
          <li><mark>分解不是近似，而是换一组基描述。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：信号平移后仍按原点划分偶奇部。</span></p>
      `,
      questionIds: []
    },
    "s1-4-1": {
      concept: `
        <p>阶跃像电灯开关：某一刻之前是 0，之后变成 1。斜坡像水龙头缓慢打开，时间越长水流累积越多。门函数是“开一段时间再关”，符号函数则像方向开关，只取 ±1。</p>
      `,
      advanced: [
        {
          title: "阶跃与斜坡",
          html: `<p><span class="math">ε(t)</span> 在 t&gt;0 为 1，t&lt;0 为 0；<span class="math">r(t)=tε(t)</span> 从 0 开始线性增长。<mark>斜坡导数是阶跃，阶跃积分是斜坡。</mark></p>`
        },
        {
          title: "截取区间",
          html: `<p><span class="math">g<sub>τ</sub>(t)=ε(t+τ/2)-ε(t-τ/2)</span> 是宽度 τ 的居中门。任意分段信号都可以先写完整表达式，再乘门函数限定区间。</p>`
        },
        {
          title: "生活例子",
          html: `<p>电梯门打开是阶跃式“状态切换”；水桶逐渐装满更接近斜坡；摄像头一段时间录像可以看成门函数截取；温度高于设定值报警可以用阶跃表示。</p>`
        }
      ],
      summary: `
        <ul>
          <li>阶跃表示接入/截断，斜坡表示线性累积。</li>
          <li>门函数由两个移位阶跃相减。</li>
          <li><mark>符号函数在负半轴是 -1，不是 0。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：把 f(t)ε(t) 写成对 f(t) 整体求值后再截取；实际是先逐时刻相乘。</span></p>
      `,
      questionIds: ["q-waveform-construction"]
    },
    "s1-4-2": {
      concept: `
        <p>冲激可以想象成锤子瞬间敲一下：作用时间几乎为零，但总冲量不为零。手机摔到桌面的瞬时冲击、静电放电、理想开关的瞬间切换，都适合用冲激建模。</p>
      `,
      advanced: [
        {
          title: "面积而非高度",
          html: `<p>狄拉克冲激满足 <span class="math">δ(t)=0(t≠0)</span>，但 <span class="math">∫δ(t)dt=1</span>。它没有普通有限点值，<mark>冲激的“强度”是面积</mark>。</p>`
        },
        {
          title: "三种定义",
          html: `<p>物理定义：面积恒为 1 的窄门脉冲极限；狄拉克定义：除原点外为零、全轴面积为 1；广义函数定义：对连续检验函数 φ，<span class="math">∫φ(t)δ(t-t<sub>0</sub>)dt=φ(t<sub>0</sub>)</span>。</p>`
        }
      ],
      summary: `
        <ul>
          <li>冲激是理想化的瞬时作用，不是普通函数。</li>
          <li>判断强度看面积/积分，不看“峰值高度”。</li>
          <li>冲激与某个时刻的函数值相乘，会把该值“冻结”成系数。</li>
        </ul>
        <p><span class="hl-red">易错点：试图把 δ(0) 当成普通有限数计算。</span></p>
      `,
      questionIds: ["q-impulse-root"]
    },
    "s1-4-3": {
      concept: `
        <p>冲激具有一组“筛选”和“搬运”性质：乘普通函数只保留冲激位置的函数值；积分后得到该点的函数值；尺度变换要调整面积。</p>
      `,
      advanced: [
        {
          title: "乘积与取样",
          html: `<p><mark><span class="math">f(t)δ(t-t<sub>0</sub>)=f(t<sub>0</sub>)δ(t-t<sub>0</sub>)</span></mark>，<mark><span class="math">∫f(t)δ(t-t<sub>0</sub>)dt=f(t<sub>0</sub>)</span></mark>。前者仍是冲激，后者得到普通数值。</p>`
        },
        {
          title: "尺度变换",
          html: `<p><span class="math">δ(at)=δ(t)/|a|</span>，<span class="math">δ(at-b)=δ(t-b/a)/|a|</span>。时间压缩后冲激面积不变，因此强度要反向调整。</p>`
        },
        {
          title: "冲激偶",
          html: `<p><span class="math">δ'(t)</span> 是奇函数；<span class="math">∫f(t)δ'(t-t<sub>0</sub>)dt=-f'(t<sub>0</sub>)</span>；<span class="math">δ'(at)=δ'(t)/(a|a|)</span>。<mark>负号是分部积分产生的，不能漏。</mark></p>`
        }
      ],
      summary: `
        <ul>
          <li>先判断“是否还有积分”：有积分才能消掉冲激。</li>
          <li>有限区间积分先检查冲激位置是否落在区间内。</li>
          <li><mark>δ 的取样取函数值，δ′ 的取样取负导数。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：把 δ(2t+4) 直接当成 δ(t+4)，忘记除以 2。</span></p>
      `,
      questionIds: ["q-impulse-calc"]
    },
    "s1-4-4": {
      concept: `
        <p>离散脉冲和阶跃像点名表：脉冲只在某一天记 1，阶跃从某天开始一直记 1。数字设备内部处理的是离散样本，因此这两个符号极其常见。</p>
      `,
      advanced: [
        {
          title: "离散基本关系",
          html: `<p><span class="math">δ(k)=ε(k)-ε(k-1)</span>，<span class="math">ε(k)=Σδ(i)</span>。乘法取样变成求和取样：<span class="math">Σf(k)δ(k-k<sub>0</sub>)=f(k<sub>0</sub>)</span>。</p>`
        },
        {
          title: "边界差异",
          html: `<p><mark>ε(k) 在 k=0 明确取 1；连续 ε(t) 在 t=0 通常不定义或取 1/2。</mark>离散 δ(k) 的值就是 1，而连续 δ(t) 是面积意义上的广义函数。</p>`
        }
      ],
      summary: `
        <ul>
          <li>离散脉冲是普通序列，连续冲激是广义函数。</li>
          <li>差分与累加互相对应。</li>
          <li><mark>离散计算要特别关注 k=0 和求和上下限。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：照搬连续边界值，把 ε(0) 也当成 1/2。</span></p>
      `,
      questionIds: ["q-discrete-basics"]
    },
    "s1-5-1": {
      concept: `
        <p>系统模型像一份菜谱：可以只写“输入食材→输出菜肴”，也可以记录每一步火候、锅内状态。前者是输入输出模型，后者接近状态模型。</p>
      `,
      advanced: [
        {
          title: "两类模型",
          html: `<p><mark>输入输出模型把系统看作黑箱，适合单输入单输出；状态变量模型关注内部状态，适合多输入多输出和初态。</mark>连续系统常用微分方程，离散系统常用差分方程。</p>`
        },
        {
          title: "框图语言",
          html: `<p>加法器、乘法器、积分器/延时器组成系统。连续系统数积分器定阶数，离散系统数单位延时器定阶数。框图是可计算的结构图，不只是示意图。</p>`
        }
      ],
      summary: `
        <ul>
          <li>同一系统可以有多套模型。</li>
          <li>模型选择取决于问题，不是越复杂越好。</li>
          <li><mark>积分器/延时器数量给出系统阶数。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：把框图中的信号线方向当装饰；反向读积分器对应求导。</span></p>
      `,
      questionIds: ["q-block-equations"]
    },
    "s1-5-2": {
      concept: `
        <p>输入输出描述像看黑箱的进出口，不打开内部。它只关心“输入什么、输出什么”，适合求响应和系统辨识。</p>
      `,
      advanced: [
        {
          title: "算子与冲激响应",
          html: `<p>系统是映射 <span class="math">y=T[f]</span>。对 LTI 系统，零状态响应可以写成卷积 <span class="math">y<sub>zs</sub>=f*h</span>，因此<mark>冲激响应 h(t) 完全刻画了零状态输入输出关系。</mark></p>`
        },
        {
          title: "黑箱的局限",
          html: `<p>黑箱模型无法直接说明内部储能、子模块故障或多变量耦合；但对外部可观测关系，它非常高效。</p>`
        }
      ],
      summary: `
        <ul>
          <li>输入输出模型只研究外部关系。</li>
          <li>LTI 系统可由 h(t) 或 H(s) 完整描述零状态响应。</li>
          <li>初态问题不能由普通传递函数单独解释。</li>
        </ul>
        <p><span class="hl-red">易错点：把 h(t) 对所有系统都当成完备描述；它只对 LTI 系统成立。</span></p>
      `,
      questionIds: []
    },
    "s1-5-3": {
      concept: `
        <p>状态变量像游戏存档：不必知道整段历史，只要保存足够的状态，就能继续往后计算。电容电压、电感电流都是经典状态变量。</p>
      `,
      advanced: [
        {
          title: "状态方程",
          html: `<p>连续：<span class="math">ẋ=Ax+Bu</span>，<span class="math">y=Cx+Du</span>；离散：<span class="math">x(k+1)=Ax(k)+Bu(k)</span>。状态 x 记忆过去，输入 u 推动未来。</p>`
        },
        {
          title: "不唯一但不随意",
          html: `<p><mark>状态变量选取不唯一，但维数必须等于系统阶数。</mark>状态太少无法完整记忆，太多会引入依赖关系。</p>`
        }
      ],
      summary: `
        <ul>
          <li>状态是最小的历史记忆集合。</li>
          <li>状态方程描述演化，输出方程描述可观测结果。</li>
          <li>适合 MIMO、初始状态和内部控制。</li>
        </ul>
        <p><span class="hl-red">易错点：只选电容电压却漏掉独立电感电流，导致状态不完整。</span></p>
      `,
      questionIds: []
    },
    "s1-6-1": {
      concept: `
        <p>系统是规则，不是一定指实物。一个算法、一个电路、一个机械减震器，都可以抽象成输入集合到输出集合的映射。</p>
      `,
      advanced: [
        {
          title: "表示与实现",
          html: `<p>同一个系统可用方程、框图、冲激响应、系统函数表示。<mark>表示方式不等于物理实现。</mark>同一个传递函数可由不同电路或程序结构实现。</p>`
        },
        {
          title: "连续与离散",
          html: `<p>连续系统的时间变量连续，典型数学工具是微分方程；离散系统只在整数时刻工作，典型工具是差分方程。混合系统同时包含两者。</p>`
        }
      ],
      summary: `
        <ul>
          <li>系统本质是输入到输出的映射。</li>
          <li>一个系统可以有多种等价表示。</li>
          <li>表示选择由分析目标决定。</li>
        </ul>
        <p><span class="hl-red">易错点：把“框图相同”误认为“物理实现相同”。</span></p>
      `,
      questionIds: []
    },
    "s1-6-2": {
      concept: `
        <p>系统性质像人的工作习惯：是否按比例响应（线性）、是否受时间段影响（时不变）、是否会提前反应（因果）、是否容易失控（稳定）。这些性质要分别判断。</p>
      `,
      advanced: [
        {
          title: "线性与分解",
          html: `<p>线性 = 均匀性 + 叠加性。对含初态系统，还要能分解为 <span class="math">y=y<sub>zi</sub>+y<sub>zs</sub></span>，并分别满足线性。<mark>“能分解”是整体线性的一项门槛。</mark></p>`
        },
        {
          title: "时不变",
          html: `<p>输入平移后，零状态响应只平移、不改变形状：<span class="math">e(t-t<sub>0</sub>)→y<sub>zs</sub>(t-t<sub>0</sub>)</span>。显含变系数、翻转、尺度压缩常导致时变。</p>`
        },
        {
          title: "因果与稳定",
          html: `<p>因果看是否依赖未来输入；稳定看有界输入是否一定产生有界输出。两者互不蕴含。<mark>理想低通可以稳定但非因果。</mark></p>`
        }
      ],
      summary: `
        <ul>
          <li>先线性，再时不变，再因果与稳定，分项验证。</li>
          <li>含常数项、绝对值、平方通常要警惕非线性。</li>
          <li>变系数不一定非线性，但通常导致时变。</li>
        </ul>
        <p><span class="hl-red">易错点：看到 t²e(t) 就判非线性；它对 e 仍线性，只是时变。</span></p>
      `,
      questionIds: ["q-linearity", "q-time-invariance", "q-response-superposition"]
    },
    "s1-6-3": {
      concept: `
        <p>系统分类不是单选题。一个音频压缩器可以同时是离散、非线性、时不变、因果、稳定系统。不同维度描述不同问题。</p>
      `,
      advanced: [
        {
          title: "维度独立",
          html: `<p>连续/离散、即时/动态、线性/非线性、时不变/时变、因果/非因果、稳定/不稳定分别回答不同维度。<mark>一个系统可以因果但时变，也可以时不变但非因果。</mark></p>`
        },
        {
          title: "判断顺序",
          html: `<p>结构表达式先看线性；涉及时间变量再看时不变；涉及未来输入看因果；涉及长期增长看稳定。不要让名词互相替代。</p>`
        }
      ],
      summary: `
        <ul>
          <li>分类维度独立，不能用一个性质推另一个。</li>
          <li>LTI = 线性且时不变。</li>
          <li>稳定、因果、线性是三个不同问题。</li>
        </ul>
        <p><span class="hl-red">易错点：把“非因果”理解为“不稳定”，两者没有必然关系。</span></p>
      `,
      questionIds: ["q-causality-stability"]
    },
    "s1-7-1": {
      concept: `
        <p>分析信号像检查一栋建筑：时域看外观，频率域看材料组成，复频域看随时间增长的模态，状态空间看内部承重结构。选工具取决于问题。</p>
      `,
      advanced: [
        {
          title: "变换是换基",
          html: `<p>傅里叶、拉普拉斯、Z 变换都是把信号投影到不同基函数上。<mark>变换不是“捷径”，而是改变观察角度。</mark>每种变换都有自己的收敛条件和适用对象。</p>`
        },
        {
          title: "选择原则",
          html: `<p>稳态频率响应用傅里叶；含初始条件和增长信号用拉普拉斯；离散递推系统和初态用 Z；多变量内部状态用状态空间。</p>`
        }
      ],
      summary: `
        <ul>
          <li>时域、频域、复频域、状态空间互相连接。</li>
          <li>选方法先看有没有初态、是否离散、是否需要多变量。</li>
          <li><mark>同一问题可在不同域得到等价答案。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：忽略变换收敛域，直接做代数化简。</span></p>
      `,
      questionIds: []
    },
    "s1-7-2": {
      concept: `
        <p>系统分析有两条路：从外部输入输出出发，或者从内部状态出发。前者像只看财务报表，后者像查看公司内部每个部门的状态。</p>
      `,
      advanced: [
        {
          title: "响应分解与叠加",
          html: `<p>LTI 系统全响应 <span class="math">y=y<sub>zi</sub>+y<sub>zs</sub></span>。零输入由初态决定，零状态由输入决定。<mark>线性允许把多个输入响应、多个初态响应分别叠加。</mark></p>`
        },
        {
          title: "时域与变换域",
          html: `<p>时域用卷积，频域/复频域把卷积变乘法。冲激响应 h 是 LTI 系统的“指纹”。会用输入输出的对应关系，往往比完整解方程更快。</p>`
        }
      ],
      summary: `
        <ul>
          <li>先问系统是否线性、是否时不变。</li>
          <li>有初态先分解零输入与零状态。</li>
          <li><mark>时域卷积 ⇄ 变换域乘法。</mark></li>
        </ul>
        <p><span class="hl-red">易错点：使用 Y(s)=H(s)F(s) 时忘记它默认零初始状态。</span></p>
      `,
      questionIds: ["q-response-superposition"]
    },
    "s1-ex": {
      concept: `
        <p>这一节不再引入新概念，而是把第 1 章当作一个完整工具包复盘：分类判断、波形变换、冲激运算、系统性质与响应分解。</p>
      `,
      advanced: [
        {
          title: "复盘顺序",
          html: `<p>先做概念判断（连续/离散、能量/功率、因果/稳定），再做坐标变换，最后做含冲激和初态的综合题。<mark>错题要记录“错在概念、边界还是运算”，不要只抄答案。</mark></p>`
        },
        {
          title: "建议训练",
          html: `<p>限时 60 分钟完成下列题目分类库中的第 1、2、4、6、8、12 题；再对照思路复述解题步骤，最后闭卷重做。</p>`
        }
      ],
      summary: `
        <ul>
          <li>第 1 章的主线是“描述→运算→奇异信号→系统性质”。</li>
          <li>重点公式集中在周期、能量功率、冲激性质和 LTI 叠加。</li>
          <li>所有易错点都要回到具体边界条件复核。</li>
        </ul>
        <p><span class="hl-red">易错点：只背结论，不检查定义域、初态、因果与收敛条件。</span></p>
      `,
      questionIds: ["q-periodicity", "q-energy-power", "q-transform-inverse", "q-impulse-calc", "q-linearity", "q-causality-stability"]
    }
  }
};
