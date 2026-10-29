window.SIGNAL_INTEGRATED_CONTENT = 
{
  "ch1": {
    "s1-0": {
      "concept": "\n        <p>先别把“信号”和“系统”当成两个抽象名词。<mark>信号是承载变化与信息的量，系统是加工这个量的规则。</mark>麦克风把声压变成电压，放大器改变电压幅度，扬声器再把电压还原成声音，这一整条链路里，信号在不断变化，系统在不断“处理”它。</p>\n        <p>本课程要解决两个方向的问题：给定输入和系统，求输出；或者通过输入输出关系，反过来判断系统具有什么性质。日常做电路、通信、音频处理，本质上都在回答这两个问题。</p>\n      ",
      "advanced": [
        {
          "title": "四种观察坐标",
          "html": "<p>同一个信号可以从<mark>时域、频域、复频域、状态空间</mark>观察。时域看“怎么随时间变化”；频域看“由哪些频率组成”；复频域适合处理衰减、增长和初始条件；状态空间关注系统内部储能。换一种表示不是换一个信号，而是换一副眼镜。</p>"
        },
        {
          "title": "课程主线",
          "html": "<p><span class=\"math\">输入 f(t) → 系统 T[·] → 输出 y(t)</span>。后续的卷积、傅里叶变换、拉普拉斯变换、Z 变换，都在为这个映射寻找更方便的计算方式。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>信号承载信息，系统完成输入到输出的映射。</li>\n          <li>分析信号看“自身结构”，分析系统看“变换规律”。</li>\n          <li><mark>时域—频域—复频域—状态空间</mark>是四条互相连接的主线。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把“信号分析”和“系统分析”混为一谈。</span></p>\n      ",
      "questionIds": []
    },
    "s1-1-1": {
      "concept": "\n        <p>描述信号就像描述一条山路：可以写出高度随时间变化的函数，也可以直接画海拔曲线。<mark>解析式、波形图、频谱是同一对象的三种描述方式。</mark></p>\n        <p>例如手机计步器记录的是离散序列，心电图既有连续波形又会被采样；从连续时间到离散时间，关键是自变量从实数变成了整数序号。</p>\n      <p>描述和分类信号时，先分清“定义域、幅度取值、确定性与能量性质”四个彼此独立的维度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=114\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 01:54，打开 Bilibili 对应讲解\">第 1 集 · 01:54 ↗</a></p>",
      "advanced": [
        {
          "title": "连续时间与离散时间",
          "html": "<p>连续时间信号写成 <span class=\"math\">f(t)</span>，定义域是连续时间；离散时间信号写成 <span class=\"math\">f(k)</span>，只在整数点有定义。若采样周期为 <span class=\"math\">T<sub>s</sub></span>，原始序列是 <span class=\"math\">f(kT<sub>s</sub>)</span>，等间隔时可简写为 <span class=\"math\">f(k)</span>。</p>"
        },
        {
          "title": "“连续”指定义域",
          "html": "<p><mark>连续时间信号不要求波形连续。</mark>一个方波在跳变处断开了，但它的时间轴仍然连续，所以依旧是连续时间信号。反过来，离散序列的每个样本幅度可以取任意实数，也不能因为幅度连续就称它为连续时间信号。</p>"
        },
        {
          "title": "模拟与数字",
          "html": "<p>模拟信号：时间连续、幅度连续。数字信号：时间离散、幅度离散。<mark>“数字化”通常同时包含采样和量化。</mark>采样解决“什么时候取值”，量化解决“取值能精确到多少”。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>波形在跳变点不连续，并不等于时间变量离散；离散功率平均的分母是样本点数 2N+1。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>解析式适合计算，波形适合观察，频谱适合分析组成。</li>\n          <li>连续/离散看时间定义域，模拟/数字同时看时间和幅度。</li>\n          <li>均匀采样时常用 <span class=\"math\">f(k)</span> 省略固定采样间隔。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：看到波形有跳变就判定为离散信号。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>连续/离散首先看时间自变量：连续时间信号的波形可以有跳变，阶跃仍是连续时间信号。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=114\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 01:54，打开 Bilibili 对应讲解\">第 1 集 · 01:54 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "连续/离散首先看时间自变量：连续时间信号的波形可以有跳变，阶跃仍是连续时间信号。"
      ],
      "extraFormulas": [],
      "finalPitfall": "解析式、波形、频谱是同一信号的三种“视图”，不是三个不同信号；做题时应主动在三种视图之间切换。 波形在跳变点不连续，并不等于时间变量离散；离散功率平均的分母是样本点数 2N+1。"
    },
    "s1-1-2": {
      "concept": "\n        <p>分类不是给信号贴唯一标签，而是换不同问题去看它。天气预报既是确定的历史曲线，也是预测意义下的随机过程；一段音乐有大音量段落，也有局部静音。</p>\n        <p><mark>一个信号可以同时属于多个类别。</mark>例如“连续时间、实值、周期、功率信号”可以同时成立。</p>\n      <p>描述和分类信号时，先分清“定义域、幅度取值、确定性与能量性质”四个彼此独立的维度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=372\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 06:12，打开 Bilibili 对应讲解\">第 1 集 · 06:12 ↗</a></p>",
      "advanced": [
        {
          "title": "确定与随机",
          "html": "<p>确定信号能用解析式或波形准确描述；随机信号无法预知每个具体取值，只能用概率密度、相关函数、功率谱等统计工具刻画。随机不等于完全无规律。</p>"
        },
        {
          "title": "周期性的本质",
          "html": "<p>连续周期信号满足 <span class=\"math\">f(t)=f(t+mT)</span>，离散周期序列满足 <span class=\"math\">f(k)=f(k+mN)</span>。两个正弦分量相加时，<mark>周期比是有理数，和信号才周期</mark>；周期为二者周期的最小公倍数。</p>"
        },
        {
          "title": "其他分类",
          "html": "<p>能量/功率、因果/非因果、实/复、有限长/无限长，分别回答“强不强”“是否依赖未来”“是否带相位”“持续多久”。分类维度可以叠加使用。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>模拟/数字再叠加幅度维度：模拟是时间连续且幅度连续，数字是时间离散且幅度离散。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=372\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 06:12，打开 Bilibili 对应讲解\">第 1 集 · 06:12 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">周期和信号</span>\n          <span class=\"formula\">T<sub>1</sub>/T<sub>2</sub>=P/Q ⇒ T=QT<sub>1</sub>=PT<sub>2</sub></span>\n          <span class=\"formula-note\">第 1 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>波形在跳变点不连续，并不等于时间变量离散；离散功率平均的分母是样本点数 2N+1。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>连续/离散按自变量分，模拟/数字再叠加幅度维度。</li>\n          <li><mark>两个周期信号之和不一定是周期信号。</mark></li>\n          <li>周期信号通常是功率信号，有限时长信号通常是能量信号。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：只凭“看起来重复”判断周期，忘记检查严格的最小周期和离散整数条件。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>两个连续周期正弦相加，只有周期比是有理数时和信号才周期；周期取二者周期的最小公倍数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=617\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 10:17，打开 Bilibili 对应讲解\">第 1 集 · 10:17 ↗</a></p>",
      "questionIds": [
        "q-periodicity"
      ],
      "integrated": true,
      "extraPoints": [
        "模拟/数字再叠加幅度维度：模拟是时间连续且幅度连续，数字是时间离散且幅度离散。",
        "两个连续周期正弦相加，只有周期比是有理数时和信号才周期；周期取二者周期的最小公倍数。"
      ],
      "extraFormulas": [
        {
          "label": "周期和信号",
          "expr": "T<sub>1</sub>/T<sub>2</sub>=P/Q ⇒ T=QT<sub>1</sub>=PT<sub>2</sub>",
          "note": "第 1 集讲解"
        }
      ],
      "finalPitfall": "一个信号可以同时属于多个类别，例如“实值、连续时间、周期、功率信号”；分类不是互斥单选题。 波形在跳变点不连续，并不等于时间变量离散；离散功率平均的分母是样本点数 2N+1。"
    },
    "s1-2-1": {
      "concept": "\n        <p>时间特性回答“变化快不快、持续多久、什么时候突变”。这像看城市交通曲线：早高峰上升得快，持续时间长，周期是一天；单个堵车脉冲的宽度和整天交通周期并不是同一概念。</p>\n      <p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=507\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 08:27，打开 Bilibili 对应讲解\">第 2 集 · 08:27 ↗</a></p>",
      "advanced": [
        {
          "title": "脉冲参数",
          "html": "<p><mark>脉宽描述单个脉冲持续多久，周期描述重复间隔。</mark>上升时间、下降时间描述边沿陡不陡；突变越陡，通常含有越多高频成分。</p>"
        },
        {
          "title": "从波形读信息",
          "html": "<p>指数信号看增长/衰减速度；正弦信号看周期、幅度、初相；抽样信号看零点间距和主瓣宽度。日常分析中，先画关键点和边界，再写公式，比直接套公式更稳。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>时间轴上的四个关键词：起点、终点、周期、变化率。</li>\n          <li><mark>脉宽变窄不等于周期变小。</mark></li>\n          <li>跳变点会产生高频成分，并可能在导数中形成冲激。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把单次脉冲宽度和重复周期混为一谈。</span></p>\n      ",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "脉宽变窄不等于周期变小：脉宽描述单个脉冲持续时间，周期描述重复间隔。"
    },
    "s1-2-2": {
      "concept": "\n        <p>频率特性回答“信号由哪些音高或振荡成分组成”。耳机均衡器把低频、中频、高频分别增强或衰减，本质上就是改变不同频率分量的权重。</p>\n      ",
      "advanced": [
        {
          "title": "正弦三参数",
          "html": "<p><span class=\"math\">f(t)=A cos(Ωt+φ)</span> 中，<mark>A 控制强弱，Ω 控制振荡快慢，φ 控制波形左右位置</mark>，且 <span class=\"math\">Ω=2πf=2π/T</span>。</p>"
        },
        {
          "title": "时域与频域的直觉",
          "html": "<p>时域变化越快，通常需要更高频率分量来描述。一个很窄的脉冲，频谱往往很宽；一个缓慢变化的包络，主要能量集中在低频。<mark>频域不是把波形换坐标轴，而是把信号拆成不同频率的正弦基。</mark></p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>幅度谱看强弱，相位谱看时间位置。</li>\n          <li>周期信号通常对应离散谱，非周期信号通常对应连续谱。</li>\n          <li>变化快慢与频率高低存在直观联系。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把“频率高”误解为“振幅大”。</span></p>\n      ",
      "questionIds": []
    },
    "s1-2-3": {
      "concept": "\n        <p>能量是“总共做了多少”，功率是“长期平均做得多快”。相机闪光灯一次释放固定能量，电饭煲持续工作则要看平均功率。这里的“功率”不是热功率的物理单位，而是信号平方的长期平均。</p>\n      <p>描述和分类信号时，先分清“定义域、幅度取值、确定性与能量性质”四个彼此独立的维度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=766\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 12:46，打开 Bilibili 对应讲解\">第 1 集 · 12:46 ↗</a></p>",
      "advanced": [
        {
          "title": "连续与离散定义",
          "html": "<p>连续能量与功率：<span class=\"math\">E=∫|f(t)|<sup>2</sup>dt</span>，<span class=\"math\">P=lim(1/T)∫|f(t)|<sup>2</sup>dt</span>。离散序列把积分换成求和，平均时样本点数是 <span class=\"math\">2N+1</span>。</p>"
        },
        {
          "title": "两类信号",
          "html": "<p><mark>能量信号：0&lt;E&lt;∞，P=0；功率信号：0&lt;P&lt;∞，E=∞。</mark>周期正弦通常是功率信号，有限时长脉冲通常是能量信号，单边衰减指数通常是能量信号。</p>"
        },
        {
          "title": "正弦捷径",
          "html": "<p>峰值幅度为 A 的正弦/余弦信号，平均功率为 <span class=\"math\">P=A<sup>2</sup>/2</span>。这不是死记：它等价于有效值 <span class=\"math\">A/√2</span> 的平方。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">连续能量</span>\n          <span class=\"formula\">E=∫<sub>−∞</sub><sup>∞</sup>|f(t)|²dt</span>\n          <span class=\"formula-note\">第 1 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">正弦功率</span>\n          <span class=\"formula\">P=A²/2</span>\n          <span class=\"formula-note\">第 1 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>波形在跳变点不连续，并不等于时间变量离散；离散功率平均的分母是样本点数 2N+1。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li><mark>先平方再积分/求和</mark>，避免正负面积抵消。</li>\n          <li>有限时长通常能量有限；持续周期通常功率有限。</li>\n          <li>也有信号既不是能量信号也不是功率信号。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：计算离散功率时把分母写成 2N，正确是 2N+1。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>能量、功率必须先平方再积分或求和。周期信号通常是功率信号，有限时长信号通常是能量信号。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=1&amp;t=766\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 1 集 · 12:46，打开 Bilibili 对应讲解\">第 1 集 · 12:46 ↗</a></p>",
      "questionIds": [
        "q-energy-power"
      ],
      "integrated": true,
      "extraPoints": [
        "能量、功率必须先平方再积分或求和。周期信号通常是功率信号，有限时长信号通常是能量信号。"
      ],
      "extraFormulas": [
        {
          "label": "连续能量",
          "expr": "E=∫<sub>−∞</sub><sup>∞</sup>|f(t)|²dt",
          "note": "第 1 集讲解"
        },
        {
          "label": "正弦功率",
          "expr": "P=A²/2",
          "note": "第 1 集讲解"
        }
      ],
      "finalPitfall": "能量信号的平均功率为 0，功率信号的能量为 ∞；不要用“能量大”代替“功率大”。 波形在跳变点不连续，并不等于时间变量离散；离散功率平均的分母是样本点数 2N+1。"
    },
    "s1-2-4": {
      "concept": "\n        <p>信息量与“不可预测程度”有关。每天固定收到的“1”几乎不提供新信息；抛硬币的结果、突然出现的报警才更能消除不确定性。</p>\n      ",
      "advanced": [
        {
          "title": "信号与信息",
          "html": "<p>信号是信息的载体，信息是接收者不确定性被消除的部分。<mark>幅度大不等于信息多</mark>，一个很强但完全可预测的常量信号信息量很低。</p>"
        },
        {
          "title": "带宽与分辨率",
          "html": "<p>快速变化需要更宽带宽；长时间观测更容易分辨细频差。采样、量化、编码把连续物理量变成可存储和传输的信息。视频压缩就是利用人眼不敏感成分，减少冗余描述。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>信息量取决于不确定性，而不是单纯的幅度。</li>\n          <li>时间和频率分辨率存在相互制约。</li>\n          <li>采样解决时间离散，量化解决幅度离散。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把“信息量”等同于“信号能量”。</span></p>\n      ",
      "questionIds": []
    },
    "s1-3-1": {
      "concept": "\n        <p>相加是叠加，相乘是“逐时刻把关”。主动降噪耳机把反相声波相加来抵消噪声；视频剪辑中乘一个矩形窗，就是在指定时间段保留画面、其余时间清零。</p>\n      <p>信号运算始终作用在独立时间变量上；复合变换最稳的方法是跟踪关键点和冲激面积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=13\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 00:13，打开 Bilibili 对应讲解\">第 3 集 · 00:13 ↗</a></p>",
      "advanced": [
        {
          "title": "同一时刻运算",
          "html": "<p>两个信号相加或相乘时，必须对同一时间点逐点处理：<span class=\"math\">y(t)=f<sub>1</sub>(t)+f<sub>2</sub>(t)</span> 或 <span class=\"math\">y(t)=f<sub>1</sub>(t)f<sub>2</sub>(t)</span>。离散情况同理。</p>"
        },
        {
          "title": "相乘的工程意义",
          "html": "<p>乘以门函数可以截取区间；乘以载波可以调制；乘以 0 可以静音。<mark>相乘不是把频率简单相加</mark>，两个正弦相乘会产生和频与差频。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>相加负责合成，相乘负责门控、调制和加权。</li>\n          <li>运算前先统一两个信号的定义域。</li>\n          <li>逐点作图是最可靠的结果检查方法。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把乘法当作“两个波形整体拼接”。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>相加、相乘都在同一时刻逐点进行；相乘可以表示门控、截取和调制。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=13\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 00:13，打开 Bilibili 对应讲解\">第 3 集 · 00:13 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "相加、相乘都在同一时刻逐点进行；相乘可以表示门控、截取和调制。"
      ],
      "extraFormulas": [],
      "finalPitfall": "相乘不是“频率相加”；两个正弦相乘会产生和频与差频，需要三角恒等式展开。 离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。"
    },
    "s1-3-2": {
      "concept": "\n        <p>平移、翻转、压缩就像处理照片：左右移动是平移，照镜子是翻转，把时间轴缩短会让变化显得更快。关键是所有操作都作用在<mark>独立变量 t</mark>上。</p>\n      <p>信号运算始终作用在独立时间变量上；复合变换最稳的方法是跟踪关键点和冲激面积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=126\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 02:06，打开 Bilibili 对应讲解\">第 3 集 · 02:06 ↗</a></p>",
      "advanced": [
        {
          "title": "三个基本公式",
          "html": "<p><span class=\"math\">f(t-t<sub>0</sub>)</span> 右移，<span class=\"math\">f(t+t<sub>0</sub>)</span> 左移；<span class=\"math\">f(-t)</span> 翻转；<span class=\"math\">f(at)</span> 中 |a|&gt;1 压缩、|a|&lt;1 扩展。</p>"
        },
        {
          "title": "复合变换不要背死顺序",
          "html": "<p>推荐跟踪特征点：设新变量为 <span class=\"math\">u=at+b</span>，则旧时刻 <span class=\"math\">t=(u-b)/a</span>。把一个端点、折点或冲激位置代进去，点移动到哪里就画到哪里。<mark>这比“先平移还是先压缩”的口诀更抗错。</mark></p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>f(t−t₀) 右移，f(t+t₀) 左移；尺度变换压缩或扩展时间轴，负尺度同时包含翻转。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=126\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 02:06，打开 Bilibili 对应讲解\">第 3 集 · 02:06 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">平移</span>\n          <span class=\"formula\">f(t−t₀) 右移 t₀；f(t+t₀) 左移 t₀</span>\n          <span class=\"formula-note\">第 3 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">尺度</span>\n          <span class=\"formula\">f(at) 的时间宽度变为原来的 1/|a|</span>\n          <span class=\"formula-note\">第 3 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>左加右减只对独立变量成立。</li>\n          <li>压缩改变横坐标，不改变普通函数值。</li>\n          <li><mark>冲激在尺度变换时强度要除以 |a|。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把 f(2t-4) 平移量看成 4，正确应提取 2(t-2)，右移 2。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>遇到 f(at+b) 不要死记“先移还是先缩”，把特征点代入 u=at+b 逐个搬运。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=501\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 08:21，打开 Bilibili 对应讲解\">第 3 集 · 08:21 ↗</a></p>",
      "questionIds": [
        "q-transform-forward",
        "q-transform-inverse"
      ],
      "integrated": true,
      "extraPoints": [
        "f(t−t₀) 右移，f(t+t₀) 左移；尺度变换压缩或扩展时间轴，负尺度同时包含翻转。",
        "遇到 f(at+b) 不要死记“先移还是先缩”，把特征点代入 u=at+b 逐个搬运。"
      ],
      "extraFormulas": [
        {
          "label": "平移",
          "expr": "f(t−t₀) 右移 t₀；f(t+t₀) 左移 t₀",
          "note": "第 3 集讲解"
        },
        {
          "label": "尺度",
          "expr": "f(at) 的时间宽度变为原来的 1/|a|",
          "note": "第 3 集讲解"
        }
      ],
      "finalPitfall": "f(2t−4) 不是简单右移 4，而是右移 2；平移量要除以展缩系数。 离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。"
    },
    "s1-3-3": {
      "concept": "\n        <p>导数像汽车速度表，积分像里程表。速度描述某一瞬间变化多快，里程累计过去走了多远；图像中边缘对应变化，积分会把尖锐边缘变平滑。</p>\n      <p>信号运算始终作用在独立时间变量上；复合变换最稳的方法是跟踪关键点和冲激面积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=526\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 08:46，打开 Bilibili 对应讲解\">第 3 集 · 08:46 ↗</a></p>",
      "advanced": [
        {
          "title": "广义导数",
          "html": "<p>普通函数在跳变点没有导数，但信号分析会补一个冲激，强度等于跳变量：<span class=\"math\">跳变量 · δ(t-t<sub>0</sub>)</span>。阶跃的导数是冲激，冲激的积分是阶跃。</p>"
        },
        {
          "title": "含门函数的求导",
          "html": "<p>先写 <span class=\"math\">f(t)=g(t)[ε(t-a)-ε(t-b)]</span>，再用乘积法则。两个阶跃求导会在起止边界产生冲激；如果该点函数值恰为零，对应的冲激可能被乘为零。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">跳变导数</span>\n          <span class=\"formula\">Δf·δ(t−t₀)</span>\n          <span class=\"formula-note\">第 3 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>导数看斜率与跳变，积分看累积面积。</li>\n          <li><span class=\"math\">ε'(t)=δ(t)</span>，<span class=\"math\">δ</span> 的变上限积分是 <span class=\"math\">ε</span>。</li>\n          <li>分段函数求导前先找所有跳变点。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：只对斜线部分求导，漏掉边界处的冲激项。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>微分突出斜率与跳变，积分积累面积；跳变量 Δ 会在广义导数中产生 Δδ(t−t₀)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=526\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 08:46，打开 Bilibili 对应讲解\">第 3 集 · 08:46 ↗</a></p>",
      "questionIds": [
        "q-derivative-gate"
      ],
      "integrated": true,
      "extraPoints": [
        "微分突出斜率与跳变，积分积累面积；跳变量 Δ 会在广义导数中产生 Δδ(t−t₀)。"
      ],
      "extraFormulas": [
        {
          "label": "跳变导数",
          "expr": "Δf·δ(t−t₀)",
          "note": "第 3 集讲解"
        }
      ],
      "finalPitfall": "在跳变点直接使用普通导数会得到未定义值；应补充跳变量乘以 δ(t−t₀)。 离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。"
    },
    "s1-3-4": {
      "concept": "\n        <p>差分相当于查看“今天比昨天变化多少”，累加相当于把每天的收支一直加下去。银行流水适合看差分，账户余额适合看累加。</p>\n      <p>信号运算始终作用在独立时间变量上；复合变换最稳的方法是跟踪关键点和冲激面积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=526\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 08:46，打开 Bilibili 对应讲解\">第 3 集 · 08:46 ↗</a></p>",
      "advanced": [
        {
          "title": "前后向差分",
          "html": "<p>前向差分 <span class=\"math\">Δf(k)=f(k+1)-f(k)</span>，后向差分 <span class=\"math\">∇f(k)=f(k)-f(k-1)</span>。<mark>因果系统常使用后向差分，因为它只依赖当前与过去。</mark></p>"
        },
        {
          "title": "离散微积分关系",
          "html": "<p><span class=\"math\">δ(k)=ε(k)-ε(k-1)</span>，<span class=\"math\">ε(k)=Σ<sub>i=-∞</sub><sup>k</sup>δ(i)</span>。边界样本不能漏算。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>差分对应连续微分，累加对应连续积分。</li>\n          <li><mark>后向差分常与 Z 变换的 (1-z<sup>-1</sup>) 对应。</mark></li>\n          <li>结果序列的起点和长度会因差分改变。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：忽略 k=0 边界，导致离散阶跃/脉冲关系差一位。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>差分与累加是离散版的微分与积分；后向差分更适合因果递推分析。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=526\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 08:46，打开 Bilibili 对应讲解\">第 3 集 · 08:46 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "差分与累加是离散版的微分与积分；后向差分更适合因果递推分析。"
      ],
      "extraFormulas": [],
      "finalPitfall": "差分结果比原序列少一个样本或整体前移/后移，边界处理是离散题的高频失分点。 离散序列做尺度变换可能丢样本，不能把连续时间尺度公式机械照搬。"
    },
    "s1-3-5": {
      "concept": "\n        <p>复杂信号可以拆成简单成分，像把混合果汁分成不同口味。拆分的价值在于：复杂对象一旦变成简单基的线性组合，就能分别计算再叠加。</p>\n      <p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=3&amp;t=4\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 3 集 · 00:04，打开 Bilibili 对应讲解\">第 3 集 · 00:04 ↗</a></p>",
      "advanced": [
        {
          "title": "偶奇分解",
          "html": "<p><span class=\"math\">f<sub>e</sub>(t)=[f(t)+f(-t)]/2</span>，<span class=\"math\">f<sub>o</sub>(t)=[f(t)-f(-t)]/2</span>。偶部像左右对称的影子，奇部像反对称的残差。</p>"
        },
        {
          "title": "冲激分解",
          "html": "<p><span class=\"math\">f(t)=∫f(τ)δ(t-τ)dτ</span>。这表示任何连续信号都可看成无数移位冲激的叠加，是卷积和 LTI 响应分析的根源。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>偶部 + 奇部可以重构原信号。</li>\n          <li>任意信号都可以用移位冲激表示。</li>\n          <li><mark>分解不是近似，而是换一组基描述。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：信号平移后仍按原点划分偶奇部。</span></p>\n      ",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "偶部与奇部都是相对原点定义的；平移后信号的偶奇性会改变。"
    },
    "s1-4-1": {
      "concept": "\n        <p>阶跃像电灯开关：某一刻之前是 0，之后变成 1。斜坡像水龙头缓慢打开，时间越长水流累积越多。门函数是“开一段时间再关”，符号函数则像方向开关，只取 ±1。</p>\n      <p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=715\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 11:55，打开 Bilibili 对应讲解\">第 2 集 · 11:55 ↗</a></p>",
      "advanced": [
        {
          "title": "阶跃与斜坡",
          "html": "<p><span class=\"math\">ε(t)</span> 在 t&gt;0 为 1，t&lt;0 为 0；<span class=\"math\">r(t)=tε(t)</span> 从 0 开始线性增长。<mark>斜坡导数是阶跃，阶跃积分是斜坡。</mark></p>"
        },
        {
          "title": "截取区间",
          "html": "<p><span class=\"math\">g<sub>τ</sub>(t)=ε(t+τ/2)-ε(t-τ/2)</span> 是宽度 τ 的居中门。任意分段信号都可以先写完整表达式，再乘门函数限定区间。</p>"
        },
        {
          "title": "生活例子",
          "html": "<p>电梯门打开是阶跃式“状态切换”；水桶逐渐装满更接近斜坡；摄像头一段时间录像可以看成门函数截取；温度高于设定值报警可以用阶跃表示。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>阶跃表示接入/截断，斜坡表示线性累积。</li>\n          <li>门函数由两个移位阶跃相减。</li>\n          <li><mark>符号函数在负半轴是 -1，不是 0。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把 f(t)ε(t) 写成对 f(t) 整体求值后再截取；实际是先逐时刻相乘。</span></p>\n      ",
      "questionIds": [
        "q-waveform-construction"
      ],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "ε(t) 与符号函数 sgn(t) 不同：sgn(t) 在 t<0 时为 −1，而 ε(t) 为 0。"
    },
    "s1-4-2": {
      "concept": "\n        <p>冲激可以想象成锤子瞬间敲一下：作用时间几乎为零，但总冲量不为零。手机摔到桌面的瞬时冲击、静电放电、理想开关的瞬间切换，都适合用冲激建模。</p>\n      <p>基本连续信号要同时掌握代数式、波形和微积分关系，奇异冲激的本质是“单位面积”而不是某个点的普通函数值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=1950\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 32:30，打开 Bilibili 对应讲解\">第 2 集 · 32:30 ↗</a></p>",
      "advanced": [
        {
          "title": "面积而非高度",
          "html": "<p>狄拉克冲激满足 <span class=\"math\">δ(t)=0(t≠0)</span>，但 <span class=\"math\">∫δ(t)dt=1</span>。它没有普通有限点值，<mark>冲激的“强度”是面积</mark>。</p>"
        },
        {
          "title": "三种定义",
          "html": "<p>物理定义：面积恒为 1 的窄门脉冲极限；狄拉克定义：除原点外为零、全轴面积为 1；广义函数定义：对连续检验函数 φ，<span class=\"math\">∫φ(t)δ(t-t<sub>0</sub>)dt=φ(t<sub>0</sub>)</span>。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激取样</span>\n          <span class=\"formula\">∫f(t)δ(t−t₀)dt=f(t₀)</span>\n          <span class=\"formula-note\">第 2 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>冲激是理想化的瞬时作用，不是普通函数。</li>\n          <li>判断强度看面积/积分，不看“峰值高度”。</li>\n          <li>冲激与某个时刻的函数值相乘，会把该值“冻结”成系数。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：试图把 δ(0) 当成普通有限数计算。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>单位冲激满足取样性质：普通函数乘 δ(t−t₀) 后只在 t₀ 留下函数值，冲激本身仍保留。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=1950\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 32:30，打开 Bilibili 对应讲解\">第 2 集 · 32:30 ↗</a></p>",
      "questionIds": [
        "q-impulse-root"
      ],
      "integrated": true,
      "extraPoints": [
        "单位冲激满足取样性质：普通函数乘 δ(t−t₀) 后只在 t₀ 留下函数值，冲激本身仍保留。"
      ],
      "extraFormulas": [
        {
          "label": "冲激取样",
          "expr": "∫f(t)δ(t−t₀)dt=f(t₀)",
          "note": "第 2 集讲解"
        }
      ],
      "finalPitfall": "不能把 δ(0) 当作一个有限的普通数值；应通过积分、面积和广义函数性质运算。 δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。"
    },
    "s1-4-3": {
      "concept": "\n        <p>冲激具有一组“筛选”和“搬运”性质：乘普通函数只保留冲激位置的函数值；积分后得到该点的函数值；尺度变换要调整面积。</p>\n      <p>基本连续信号要同时掌握代数式、波形和微积分关系，奇异冲激的本质是“单位面积”而不是某个点的普通函数值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=940\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 15:40，打开 Bilibili 对应讲解\">第 2 集 · 15:40 ↗</a></p>",
      "advanced": [
        {
          "title": "乘积与取样",
          "html": "<p><mark><span class=\"math\">f(t)δ(t-t<sub>0</sub>)=f(t<sub>0</sub>)δ(t-t<sub>0</sub>)</span></mark>，<mark><span class=\"math\">∫f(t)δ(t-t<sub>0</sub>)dt=f(t<sub>0</sub>)</span></mark>。前者仍是冲激，后者得到普通数值。</p>"
        },
        {
          "title": "尺度变换",
          "html": "<p><span class=\"math\">δ(at)=δ(t)/|a|</span>，<span class=\"math\">δ(at-b)=δ(t-b/a)/|a|</span>。时间压缩后冲激面积不变，因此强度要反向调整。</p>"
        },
        {
          "title": "冲激偶",
          "html": "<p><span class=\"math\">δ'(t)</span> 是奇函数；<span class=\"math\">∫f(t)δ'(t-t<sub>0</sub>)dt=-f'(t<sub>0</sub>)</span>；<span class=\"math\">δ'(at)=δ'(t)/(a|a|)</span>。<mark>负号是分部积分产生的，不能漏。</mark></p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激尺度</span>\n          <span class=\"formula\">δ(at)=δ(t)/|a|</span>\n          <span class=\"formula-note\">第 2 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激偶取样</span>\n          <span class=\"formula\">∫f(t)δ′(t−t₀)dt=−f′(t₀)</span>\n          <span class=\"formula-note\">第 2 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>先判断“是否还有积分”：有积分才能消掉冲激。</li>\n          <li>有限区间积分先检查冲激位置是否落在区间内。</li>\n          <li><mark>δ 的取样取函数值，δ′ 的取样取负导数。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把 δ(2t+4) 直接当成 δ(t+4)，忘记除以 2。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>冲激偶 δ′(t) 是冲激的广义导数，取样时多一个负号和原函数的一阶导数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=940\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 15:40，打开 Bilibili 对应讲解\">第 2 集 · 15:40 ↗</a></p>",
      "questionIds": [
        "q-impulse-calc"
      ],
      "integrated": true,
      "extraPoints": [
        "冲激偶 δ′(t) 是冲激的广义导数，取样时多一个负号和原函数的一阶导数。"
      ],
      "extraFormulas": [
        {
          "label": "冲激尺度",
          "expr": "δ(at)=δ(t)/|a|",
          "note": "第 2 集讲解"
        },
        {
          "label": "冲激偶取样",
          "expr": "∫f(t)δ′(t−t₀)dt=−f′(t₀)",
          "note": "第 2 集讲解"
        }
      ],
      "finalPitfall": "δ(t−t₀) 的尺度变换要注意括号内系数；δ(2t−4)=½δ(t−2)，不是 δ(t−2)。 δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。"
    },
    "s1-4-4": {
      "concept": "\n        <p>离散脉冲和阶跃像点名表：脉冲只在某一天记 1，阶跃从某天开始一直记 1。数字设备内部处理的是离散样本，因此这两个符号极其常见。</p>\n      <p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=3766\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 62:46，打开 Bilibili 对应讲解\">第 2 集 · 62:46 ↗</a></p>",
      "advanced": [
        {
          "title": "离散基本关系",
          "html": "<p><span class=\"math\">δ(k)=ε(k)-ε(k-1)</span>，<span class=\"math\">ε(k)=Σδ(i)</span>。乘法取样变成求和取样：<span class=\"math\">Σf(k)δ(k-k<sub>0</sub>)=f(k<sub>0</sub>)</span>。</p>"
        },
        {
          "title": "边界差异",
          "html": "<p><mark>ε(k) 在 k=0 明确取 1；连续 ε(t) 在 t=0 通常不定义或取 1/2。</mark>离散 δ(k) 的值就是 1，而连续 δ(t) 是面积意义上的广义函数。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>离散脉冲是普通序列，连续冲激是广义函数。</li>\n          <li>差分与累加互相对应。</li>\n          <li><mark>离散计算要特别关注 k=0 和求和上下限。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：照搬连续边界值，把 ε(0) 也当成 1/2。</span></p>\n      ",
      "questionIds": [
        "q-discrete-basics"
      ],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "ε(k) 在 k=0 处取 1，而连续 ε(t) 在 t=0 处通常可约定为 1/2；边界值不可混用。"
    },
    "s1-5-1": {
      "concept": "\n        <p>系统模型像一份菜谱：可以只写“输入食材→输出菜肴”，也可以记录每一步火候、锅内状态。前者是输入输出模型，后者接近状态模型。</p>\n      <p>基本连续信号要同时掌握代数式、波形和微积分关系，奇异冲激的本质是“单位面积”而不是某个点的普通函数值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=3766\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 62:46，打开 Bilibili 对应讲解\">第 2 集 · 62:46 ↗</a></p>",
      "advanced": [
        {
          "title": "两类模型",
          "html": "<p><mark>输入输出模型把系统看作黑箱，适合单输入单输出；状态变量模型关注内部状态，适合多输入多输出和初态。</mark>连续系统常用微分方程，离散系统常用差分方程。</p>"
        },
        {
          "title": "框图语言",
          "html": "<p>加法器、乘法器、积分器/延时器组成系统。连续系统数积分器定阶数，离散系统数单位延时器定阶数。框图是可计算的结构图，不只是示意图。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>连续系统图中积分器个数等于微分方程阶数，离散系统图中单位延时器个数等于差分方程阶数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=3766\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 62:46，打开 Bilibili 对应讲解\">第 2 集 · 62:46 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">框图阶数</span>\n          <span class=\"formula\">连续：积分器数；离散：单位延时器数</span>\n          <span class=\"formula-note\">第 4 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>同一系统可以有多套模型。</li>\n          <li>模型选择取决于问题，不是越复杂越好。</li>\n          <li><mark>积分器/延时器数量给出系统阶数。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把框图中的信号线方向当装饰；反向读积分器对应求导。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>框图转方程时，数积分器或单位延时器的个数即可判断系统阶数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=247\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 04:07，打开 Bilibili 对应讲解\">第 4 集 · 04:07 ↗</a></p>",
      "questionIds": [
        "q-block-equations"
      ],
      "integrated": true,
      "extraPoints": [
        "连续系统图中积分器个数等于微分方程阶数，离散系统图中单位延时器个数等于差分方程阶数。",
        "框图转方程时，数积分器或单位延时器的个数即可判断系统阶数。"
      ],
      "extraFormulas": [
        {
          "label": "框图阶数",
          "expr": "连续：积分器数；离散：单位延时器数",
          "note": "第 4 集讲解"
        }
      ],
      "finalPitfall": "同一个系统可以有多种模型；模型不是系统本身，选择取决于要分析的问题。 δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。 参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。"
    },
    "s1-5-2": {
      "concept": "\n        <p>输入输出描述像看黑箱的进出口，不打开内部。它只关心“输入什么、输出什么”，适合求响应和系统辨识。</p>\n      <p>系统既可用输入输出黑箱模型描述，也可用内部状态模型描述；方程阶数由图中的独立储能元件或延时器决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=54\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 00:54，打开 Bilibili 对应讲解\">第 4 集 · 00:54 ↗</a></p>",
      "advanced": [
        {
          "title": "算子与冲激响应",
          "html": "<p>系统是映射 <span class=\"math\">y=T[f]</span>。对 LTI 系统，零状态响应可以写成卷积 <span class=\"math\">y<sub>zs</sub>=f*h</span>，因此<mark>冲激响应 h(t) 完全刻画了零状态输入输出关系。</mark></p>"
        },
        {
          "title": "黑箱的局限",
          "html": "<p>黑箱模型无法直接说明内部储能、子模块故障或多变量耦合；但对外部可观测关系，它非常高效。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">输入输出模型</span>\n          <span class=\"formula\">y=T[e]</span>\n          <span class=\"formula-note\">第 4 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>输入输出模型只研究外部关系。</li>\n          <li>LTI 系统可由 h(t) 或 H(s) 完整描述零状态响应。</li>\n          <li>初态问题不能由普通传递函数单独解释。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把 h(t) 对所有系统都当成完备描述；它只对 LTI 系统成立。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>输入输出模型适合单输入单输出，连续系统常用微分方程，离散系统常用差分方程。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=54\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 00:54，打开 Bilibili 对应讲解\">第 4 集 · 00:54 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "输入输出模型适合单输入单输出，连续系统常用微分方程，离散系统常用差分方程。"
      ],
      "extraFormulas": [
        {
          "label": "输入输出模型",
          "expr": "y=T[e]",
          "note": "第 4 集讲解"
        }
      ],
      "finalPitfall": "h(t) 只对 LTI 系统具有“完全表征”的意义；非线性或时变系统不能只靠一个冲激响应描述。 参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。"
    },
    "s1-5-3": {
      "concept": "\n        <p>状态变量像游戏存档：不必知道整段历史，只要保存足够的状态，就能继续往后计算。电容电压、电感电流都是经典状态变量。</p>\n      <p>系统既可用输入输出黑箱模型描述，也可用内部状态模型描述；方程阶数由图中的独立储能元件或延时器决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=94\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 01:34，打开 Bilibili 对应讲解\">第 4 集 · 01:34 ↗</a></p>",
      "advanced": [
        {
          "title": "状态方程",
          "html": "<p>连续：<span class=\"math\">ẋ=Ax+Bu</span>，<span class=\"math\">y=Cx+Du</span>；离散：<span class=\"math\">x(k+1)=Ax(k)+Bu(k)</span>。状态 x 记忆过去，输入 u 推动未来。</p>"
        },
        {
          "title": "不唯一但不随意",
          "html": "<p><mark>状态变量选取不唯一，但维数必须等于系统阶数。</mark>状态太少无法完整记忆，太多会引入依赖关系。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">状态模型</span>\n          <span class=\"formula\">状态方程 + 输出方程</span>\n          <span class=\"formula-note\">第 4 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>状态是最小的历史记忆集合。</li>\n          <li>状态方程描述演化，输出方程描述可观测结果。</li>\n          <li>适合 MIMO、初始状态和内部控制。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：只选电容电压却漏掉独立电感电流，导致状态不完整。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>状态变量模型保留内部状态，便于初始条件、多输入多输出和最优控制。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=94\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 01:34，打开 Bilibili 对应讲解\">第 4 集 · 01:34 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "状态变量模型保留内部状态，便于初始条件、多输入多输出和最优控制。"
      ],
      "extraFormulas": [
        {
          "label": "状态模型",
          "expr": "状态方程 + 输出方程",
          "note": "第 4 集讲解"
        }
      ],
      "finalPitfall": "状态变量的选取不唯一，但维数应等于系统阶数；不要漏掉独立储能元件的初始状态。 参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。"
    },
    "s1-6-1": {
      "concept": "\n        <p>系统是规则，不是一定指实物。一个算法、一个电路、一个机械减震器，都可以抽象成输入集合到输出集合的映射。</p>\n      <p>系统既可用输入输出黑箱模型描述，也可用内部状态模型描述；方程阶数由图中的独立储能元件或延时器决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=1212\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 20:12，打开 Bilibili 对应讲解\">第 4 集 · 20:12 ↗</a></p>",
      "advanced": [
        {
          "title": "表示与实现",
          "html": "<p>同一个系统可用方程、框图、冲激响应、系统函数表示。<mark>表示方式不等于物理实现。</mark>同一个传递函数可由不同电路或程序结构实现。</p>"
        },
        {
          "title": "连续与离散",
          "html": "<p>连续系统的时间变量连续，典型数学工具是微分方程；离散系统只在整数时刻工作，典型工具是差分方程。混合系统同时包含两者。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>系统本质是输入到输出的映射。</li>\n          <li>一个系统可以有多种等价表示。</li>\n          <li>表示选择由分析目标决定。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把“框图相同”误认为“物理实现相同”。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>无记忆系统只依赖当前输入；动态系统还依赖历史状态，通常含微分或差分关系。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=1212\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 20:12，打开 Bilibili 对应讲解\">第 4 集 · 20:12 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "无记忆系统只依赖当前输入；动态系统还依赖历史状态，通常含微分或差分关系。"
      ],
      "extraFormulas": [],
      "finalPitfall": "系统的“表示”不等于“实现”：同一个传递函数可以用多种电路或程序结构实现。 参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。"
    },
    "s1-6-2": {
      "concept": "\n        <p>系统性质像人的工作习惯：是否按比例响应（线性）、是否受时间段影响（时不变）、是否会提前反应（因果）、是否容易失控（稳定）。这些性质要分别判断。</p>\n      <p>LTI 系统的价值在于：线性允许分解，时不变允许把冲激响应平移，从而用 h 统一描述零状态响应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=51\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 00:51，打开 Bilibili 对应讲解\">第 5 集 · 00:51 ↗</a></p>",
      "advanced": [
        {
          "title": "线性与分解",
          "html": "<p>线性 = 均匀性 + 叠加性。对含初态系统，还要能分解为 <span class=\"math\">y=y<sub>zi</sub>+y<sub>zs</sub></span>，并分别满足线性。<mark>“能分解”是整体线性的一项门槛。</mark></p>"
        },
        {
          "title": "时不变",
          "html": "<p>输入平移后，零状态响应只平移、不改变形状：<span class=\"math\">e(t-t<sub>0</sub>)→y<sub>zs</sub>(t-t<sub>0</sub>)</span>。显含变系数、翻转、尺度压缩常导致时变。</p>"
        },
        {
          "title": "因果与稳定",
          "html": "<p>因果看是否依赖未来输入；稳定看有界输入是否一定产生有界输出。两者互不蕴含。<mark>理想低通可以稳定但非因果。</mark></p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>因果性看输入自变量是否依赖未来；稳定性看是否所有有界输入都产生有界输出。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=39\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 00:39，打开 Bilibili 对应讲解\">第 5 集 · 00:39 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">线性</span>\n          <span class=\"formula\">T[ae₁+be₂]=aT[e₁]+bT[e₂]</span>\n          <span class=\"formula-note\">第 5 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>y=e(t)x₀+… 含有输入与初态的乘积，不满足分解；y=e(t)sin(t+1) 的输入仍是当前 e(t)，所以仍可因果。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>先线性，再时不变，再因果与稳定，分项验证。</li>\n          <li>含常数项、绝对值、平方通常要警惕非线性。</li>\n          <li>变系数不一定非线性，但通常导致时变。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：看到 t²e(t) 就判非线性；它对 e 仍线性，只是时变。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>线性要求对任意常数和输入都满足 T[a e₁+b e₂]=aT[e₁]+bT[e₂]，不能只验证一个例子。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=51\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 00:51，打开 Bilibili 对应讲解\">第 5 集 · 00:51 ↗</a></p>",
      "questionIds": [
        "q-linearity",
        "q-time-invariance",
        "q-response-superposition"
      ],
      "integrated": true,
      "extraPoints": [
        "因果性看输入自变量是否依赖未来；稳定性看是否所有有界输入都产生有界输出。",
        "线性要求对任意常数和输入都满足 T[a e₁+b e₂]=aT[e₁]+bT[e₂]，不能只验证一个例子。"
      ],
      "extraFormulas": [
        {
          "label": "线性",
          "expr": "T[ae₁+be₂]=aT[e₁]+bT[e₂]",
          "note": "第 5 集讲解"
        }
      ],
      "finalPitfall": "先判断线性再判断时不变；含有 f²、|f|、t f(t) 等项的通常是线性或时不变的反例来源。 y=e(t)x₀+… 含有输入与初态的乘积，不满足分解；y=e(t)sin(t+1) 的输入仍是当前 e(t)，所以仍可因果。"
    },
    "s1-6-3": {
      "concept": "\n        <p>系统分类不是单选题。一个音频压缩器可以同时是离散、非线性、时不变、因果、稳定系统。不同维度描述不同问题。</p>\n      <p>系统既可用输入输出黑箱模型描述，也可用内部状态模型描述；方程阶数由图中的独立储能元件或延时器决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=136\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 02:16，打开 Bilibili 对应讲解\">第 4 集 · 02:16 ↗</a></p>",
      "advanced": [
        {
          "title": "维度独立",
          "html": "<p>连续/离散、即时/动态、线性/非线性、时不变/时变、因果/非因果、稳定/不稳定分别回答不同维度。<mark>一个系统可以因果但时变，也可以时不变但非因果。</mark></p>"
        },
        {
          "title": "判断顺序",
          "html": "<p>结构表达式先看线性；涉及时间变量再看时不变；涉及未来输入看因果；涉及长期增长看稳定。不要让名词互相替代。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>分类维度独立，不能用一个性质推另一个。</li>\n          <li>LTI = 线性且时不变。</li>\n          <li>稳定、因果、线性是三个不同问题。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：把“非因果”理解为“不稳定”，两者没有必然关系。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>线性、时不变、因果和稳定是四个不同维度，一个系统可以同时满足其中几项，不能互相替代。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=4&amp;t=136\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 4 集 · 02:16，打开 Bilibili 对应讲解\">第 4 集 · 02:16 ↗</a></p>",
      "questionIds": [
        "q-causality-stability"
      ],
      "integrated": true,
      "extraPoints": [
        "线性、时不变、因果和稳定是四个不同维度，一个系统可以同时满足其中几项，不能互相替代。"
      ],
      "extraFormulas": [],
      "finalPitfall": "“稳定”与“因果”不是同一概念；理想低通滤波器稳定但非因果。 参数随时间变化不必然意味着非线性；例如 y=t²e(t) 对输入仍然是线性的，只是时变。"
    },
    "s1-7-1": {
      "concept": "\n        <p>分析信号像检查一栋建筑：时域看外观，频率域看材料组成，复频域看随时间增长的模态，状态空间看内部承重结构。选工具取决于问题。</p>\n      ",
      "advanced": [
        {
          "title": "变换是换基",
          "html": "<p>傅里叶、拉普拉斯、Z 变换都是把信号投影到不同基函数上。<mark>变换不是“捷径”，而是改变观察角度。</mark>每种变换都有自己的收敛条件和适用对象。</p>"
        },
        {
          "title": "选择原则",
          "html": "<p>稳态频率响应用傅里叶；含初始条件和增长信号用拉普拉斯；离散递推系统和初态用 Z；多变量内部状态用状态空间。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>时域、频域、复频域、状态空间互相连接。</li>\n          <li>选方法先看有没有初态、是否离散、是否需要多变量。</li>\n          <li><mark>同一问题可在不同域得到等价答案。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：忽略变换收敛域，直接做代数化简。</span></p>\n      ",
      "questionIds": []
    },
    "s1-7-2": {
      "concept": "\n        <p>系统分析有两条路：从外部输入输出出发，或者从内部状态出发。前者像只看财务报表，后者像查看公司内部每个部门的状态。</p>\n      <p>LTI 系统的价值在于：线性允许分解，时不变允许把冲激响应平移，从而用 h 统一描述零状态响应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=1689\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 28:09，打开 Bilibili 对应讲解\">第 5 集 · 28:09 ↗</a></p>",
      "advanced": [
        {
          "title": "响应分解与叠加",
          "html": "<p>LTI 系统全响应 <span class=\"math\">y=y<sub>zi</sub>+y<sub>zs</sub></span>。零输入由初态决定，零状态由输入决定。<mark>线性允许把多个输入响应、多个初态响应分别叠加。</mark></p>"
        },
        {
          "title": "时域与变换域",
          "html": "<p>时域用卷积，频域/复频域把卷积变乘法。冲激响应 h 是 LTI 系统的“指纹”。会用输入输出的对应关系，往往比完整解方程更快。</p>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>对 LTI 系统，输入阶跃的响应可微得冲激响应，冲激响应积分得阶跃响应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=51\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 00:51，打开 Bilibili 对应讲解\">第 5 集 · 00:51 ↗</a></li><li>时不变性只看零状态响应：输入延迟 t₀，输出必须同样延迟 t₀；输入变量前的尺度或翻转通常会破坏时不变。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=1363\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 22:43，打开 Bilibili 对应讲解\">第 5 集 · 22:43 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">分解</span>\n          <span class=\"formula\">y=y<sub>zi</sub>+y<sub>zs</sub></span>\n          <span class=\"formula-note\">第 5 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">阶跃与冲激</span>\n          <span class=\"formula\">h(t)=dg(t)/dt，g(t)=∫h(τ)dτ</span>\n          <span class=\"formula-note\">第 5 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>y=e(t)x₀+… 含有输入与初态的乘积，不满足分解；y=e(t)sin(t+1) 的输入仍是当前 e(t)，所以仍可因果。</p>\n          "
        }
      ],
      "summary": "\n        <ul>\n          <li>先问系统是否线性、是否时不变。</li>\n          <li>有初态先分解零输入与零状态。</li>\n          <li><mark>时域卷积 ⇄ 变换域乘法。</mark></li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：使用 Y(s)=H(s)F(s) 时忘记它默认零初始状态。</span></p>\n      \n      <p><mark>迁移到题目时：</mark>含初始状态的系统应先检查全响应能否拆成零输入和零状态，再分别检查两部分是否线性。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=5&amp;t=1689\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 5 集 · 28:09，打开 Bilibili 对应讲解\">第 5 集 · 28:09 ↗</a></p>",
      "questionIds": [
        "q-response-superposition"
      ],
      "integrated": true,
      "extraPoints": [
        "对 LTI 系统，输入阶跃的响应可微得冲激响应，冲激响应积分得阶跃响应。",
        "时不变性只看零状态响应：输入延迟 t₀，输出必须同样延迟 t₀；输入变量前的尺度或翻转通常会破坏时不变。",
        "含初始状态的系统应先检查全响应能否拆成零输入和零状态，再分别检查两部分是否线性。"
      ],
      "extraFormulas": [
        {
          "label": "分解",
          "expr": "y=y<sub>zi</sub>+y<sub>zs</sub>",
          "note": "第 5 集讲解"
        },
        {
          "label": "阶跃与冲激",
          "expr": "h(t)=dg(t)/dt，g(t)=∫h(τ)dτ",
          "note": "第 5 集讲解"
        }
      ],
      "finalPitfall": "Y(s)=H(s)F(s) 默认零初始状态；若系统有初始储能，必须把初始条件产生的项加入。 y=e(t)x₀+… 含有输入与初态的乘积，不满足分解；y=e(t)sin(t+1) 的输入仍是当前 e(t)，所以仍可因果。"
    },
    "s1-ex": {
      "concept": "\n        <p>这一节不再引入新概念，而是把第 1 章当作一个完整工具包复盘：分类判断、波形变换、冲激运算、系统性质与响应分解。</p>\n      ",
      "advanced": [
        {
          "title": "复盘顺序",
          "html": "<p>先做概念判断（连续/离散、能量/功率、因果/稳定），再做坐标变换，最后做含冲激和初态的综合题。<mark>错题要记录“错在概念、边界还是运算”，不要只抄答案。</mark></p>"
        },
        {
          "title": "建议训练",
          "html": "<p>限时 60 分钟完成下列题目分类库中的第 1、2、4、6、8、12 题；再对照思路复述解题步骤，最后闭卷重做。</p>"
        }
      ],
      "summary": "\n        <ul>\n          <li>第 1 章的主线是“描述→运算→奇异信号→系统性质”。</li>\n          <li>重点公式集中在周期、能量功率、冲激性质和 LTI 叠加。</li>\n          <li>所有易错点都要回到具体边界条件复核。</li>\n        </ul>\n        <p><span class=\"hl-red\">易错点：只背结论，不检查定义域、初态、因果与收敛条件。</span></p>\n      ",
      "questionIds": [
        "q-periodicity",
        "q-energy-power",
        "q-transform-inverse",
        "q-impulse-calc",
        "q-linearity",
        "q-causality-stability"
      ]
    }
  },
  "ch2": {
    "s2-1-1": {
      "concept": "\n      <p><mark>复习冲激、冲激导数与阶跃的微积分关系，为卷积和系统冲激响应打基础。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：计算 ∫(t²+2)δ′(t−1)dt，并说明负号来源。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>奇异信号包括 δ(t)、δ′(t)、ε(t) 及其移位组合，是描述突变和理想激励的工具。</li><li>δ(t) 与 ε(t) 互为微积分关系；δ′(t) 可理解为正负相邻冲激的极限。</li><li>含奇异信号的表达式要关注“面积”和“位置”，而不是逐点函数值。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">微积分关系</span>\n      <span class=\"formula\">ε′(t)=δ(t),&nbsp; ∫<sub>−∞</sub><sup>t</sup>δ(τ)dτ=ε(t)</span>\n      <span class=\"formula-note\">广义函数意义。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">冲激导数</span>\n      <span class=\"formula\">∫f(t)δ′(t−t₀)dt = −f′(t₀)</span>\n      <span class=\"formula-note\">分部积分并利用冲激采样。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>复习冲激、冲激导数与阶跃的微积分关系，为卷积和系统冲激响应打基础。</p>\n      <p><mark>自检问题：</mark>计算 ∫(t²+2)δ′(t−1)dt，并说明负号来源。</p>\n      <p><span class=\"hl-red\">易错点：</span>δ′(t) 的积分通过分部积分产生负号，不要直接套用 δ(t) 的采样公式。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "δ′(t) 的积分通过分部积分产生负号，不要直接套用 δ(t) 的采样公式。"
    },
    "s2-1-2": {
      "concept": "\n      <p><mark>掌握幅度、角频率、初相与周期的关系，并能用复指数表示正弦信号。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：把 3sin(4t−π/6) 化为标准余弦形式，并写出周期。</p><p>基本连续信号要同时掌握代数式、波形和微积分关系，奇异冲激的本质是“单位面积”而不是某个点的普通函数值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=89\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 01:29，打开 Bilibili 对应讲解\">第 2 集 · 01:29 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>连续正弦信号 f(t)=A cos(ωt+φ) 是周期信号，周期 T=2π/ω，频率 f=ω/(2π)。</li><li>相位决定波形在时间轴上的左右移动；负号可通过相位加 π 转换。</li><li>正弦与余弦只差 π/2 相位，统一写成余弦标准形式便于比较和画频谱。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">标准形式</span>\n      <span class=\"formula\">f(t)=A cos(ωt+φ)</span>\n      <span class=\"formula-note\">A&gt;0；ω 为角频率，φ 为初相。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">欧拉关系</span>\n      <span class=\"formula\">cos θ=(e<sup>jθ</sup>+e<sup>−jθ</sup>)/2</span>\n      <span class=\"formula-note\">把实正弦拆成一对共轭复指数。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握幅度、角频率、初相与周期的关系，并能用复指数表示正弦信号。</p>\n      <p><mark>自检问题：</mark>把 3sin(4t−π/6) 化为标准余弦形式，并写出周期。</p>\n      <p><span class=\"hl-red\">易错点：</span>sin(ωt) 化成余弦时要减 π/2，而不是加 π/2；相位符号错误会直接导致频谱相位错。</p>\n      <p><mark>迁移到题目时：</mark>正弦信号由振幅、角频率、初相三参数确定，ω=2π/T；正弦与余弦只差 π/2 相位。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=89\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 01:29，打开 Bilibili 对应讲解\">第 2 集 · 01:29 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "正弦信号由振幅、角频率、初相三参数确定，ω=2π/T；正弦与余弦只差 π/2 相位。"
      ],
      "extraFormulas": [],
      "finalPitfall": "sin(ωt) 化成余弦时要减 π/2，而不是加 π/2；相位符号错误会直接导致频谱相位错。 δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。"
    },
    "s2-1-3": {
      "concept": "\n      <p><mark>实指数描述增长/衰减，复指数统一描述正弦振荡与包络，是变换分析的核心基函数。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：e&lt;sup&gt;(−1+j3)t&lt;/sup&gt;ε(t) 的包络、振荡角频率和实部各是什么？</p><p>基本连续信号要同时掌握代数式、波形和微积分关系，奇异冲激的本质是“单位面积”而不是某个点的普通函数值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=53\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 00:53，打开 Bilibili 对应讲解\">第 2 集 · 00:53 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>实指数 e<sup>at</sup>：a>0 增长，a<0 衰减，a=0 为常数；乘以 ε(t) 后成为单边信号。</li><li>复指数 e<sup>(σ+jω)t</sup>=e<sup>σt</sup>(cos ωt+j sin ωt)，同时包含包络和振荡。</li><li>LTI 系统对复指数输入的响应仍是同频复指数，只改变复幅度，这引出频率响应。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复指数分解</span>\n      <span class=\"formula\">e<sup>(σ+jω)t</sup>=e<sup>σt</sup>[cos(ωt)+j sin(ωt)]</span>\n      <span class=\"formula-note\">σ 控制包络，ω 控制振荡。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">本征函数性质</span>\n      <span class=\"formula\">T[e<sup>st</sup>]=H(s)e<sup>st</sup></span>\n      <span class=\"formula-note\">连续 LTI 系统；H(s) 为系统函数。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>实指数描述增长/衰减，复指数统一描述正弦振荡与包络，是变换分析的核心基函数。</p>\n      <p><mark>自检问题：</mark>e&lt;sup&gt;(−1+j3)t&lt;/sup&gt;ε(t) 的包络、振荡角频率和实部各是什么？</p>\n      <p><span class=\"hl-red\">易错点：</span>e&lt;sup&gt;−2t&lt;/sup&gt; 本身不是能量信号；只有乘 ε(t) 变成单边衰减信号后，能量才有限。</p>\n      <p><mark>迁移到题目时：</mark>实指数 K e^{αt} 对时间求导或积分后仍是指数型；α 的正负决定增长或衰减。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=53\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 00:53，打开 Bilibili 对应讲解\">第 2 集 · 00:53 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "实指数 K e^{αt} 对时间求导或积分后仍是指数型；α 的正负决定增长或衰减。"
      ],
      "extraFormulas": [],
      "finalPitfall": "e<sup>−2t</sup> 本身不是能量信号；只有乘 ε(t) 变成单边衰减信号后，能量才有限。 δ(t) 与 δ′(t) 不能按普通函数逐点代入；冲激偶积分公式中的负号来自分部积分。"
    },
    "s2-1-4": {
      "concept": "\n      <p><mark>掌握 Sa(t)=sin t/t 的零点、峰值、积分与对称性，它是矩形脉冲频谱的包络。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：矩形脉冲越窄，其频谱主瓣越宽还是越窄？用 Sa 的尺度关系解释。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>Sa(t)=sin t/t，t=0 时按极限取 1；它是偶函数，在 t=±nπ（n≠0）处过零。</li><li>∫<sub>−∞</sub><sup>∞</sup>Sa(t)dt=π；常用归一化 sinc 函数定义为 sinc(t)=sin(πt)/(πt)。</li><li>矩形脉冲的傅里叶变换是 Sa 型函数，因此 Sa 的零点和旁瓣决定频谱形状。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">抽样函数</span>\n      <span class=\"formula\">Sa(t)=sin t / t</span>\n      <span class=\"formula-note\">t=0 处连续延拓为 1。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">零点</span>\n      <span class=\"formula\">t=±nπ,&nbsp; n=1,2,…</span>\n      <span class=\"formula-note\">第一对零点决定主瓣宽度。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握 Sa(t)=sin t/t 的零点、峰值、积分与对称性，它是矩形脉冲频谱的包络。</p>\n      <p><mark>自检问题：</mark>矩形脉冲越窄，其频谱主瓣越宽还是越窄？用 Sa 的尺度关系解释。</p>\n      <p><span class=\"hl-red\">易错点：</span>Sa(t) 与归一化 sinc(t) 的零点不同：Sa 的零点是 nπ，sinc 的零点是整数。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "Sa(t) 与归一化 sinc(t) 的零点不同：Sa 的零点是 nπ，sinc 的零点是整数。"
    },
    "s2-1-5": {
      "concept": "\n      <p><mark>门信号（矩形脉冲）用于截取、开关和构造有限长信号，是频域分析的典型对象。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：用两个移位阶跃表示从 t=1 到 t=4、幅度为 2 的矩形脉冲。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>宽度为 τ、幅度为 1 的门信号 G<sub>τ</sub>(t) 在 |t|<τ/2 时为 1，其余为 0。</li><li>门信号可由两个阶跃相减构成，也可用符号函数构造。</li><li>门信号的傅里叶变换为 τSa(ωτ/2)，时宽 τ 与频带宽度成反比。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">门信号</span>\n      <span class=\"formula\">G<sub>τ</sub>(t)=ε(t+τ/2)−ε(t−τ/2)</span>\n      <span class=\"formula-note\">宽度 τ 的居中矩形。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频谱</span>\n      <span class=\"formula\">G<sub>τ</sub>(t) ↔ τ Sa(ωτ/2)</span>\n      <span class=\"formula-note\">后续傅里叶变换章节会证明。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>门信号（矩形脉冲）用于截取、开关和构造有限长信号，是频域分析的典型对象。</p>\n      <p><mark>自检问题：</mark>用两个移位阶跃表示从 t=1 到 t=4、幅度为 2 的矩形脉冲。</p>\n      <p><span class=\"hl-red\">易错点：</span>门信号的宽度是 τ，但积分面积是 τ（幅度为 1）；不要把宽度当作面积。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "门信号的宽度是 τ，但积分面积是 τ（幅度为 1）；不要把宽度当作面积。"
    },
    "s2-1-6": {
      "concept": "\n      <p><mark>三角脉冲是门信号与自身卷积的结果，常用于卷积定理和线性插值示例。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：宽度均为 2 的两个门信号卷积，结果的底宽、峰值和面积各是多少？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>居中三角脉冲 Λ(t) 在 t=0 处取最大，向两侧线性降至 0；底宽和高度决定其表达式。</li><li>两个相同门信号卷积得到三角脉冲，底宽等于两个门宽之和。</li><li>三角信号的频谱是 Sa² 型，旁瓣衰减比矩形脉冲更快。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">卷积关系</span>\n      <span class=\"formula\">G<sub>τ</sub>(t)*G<sub>τ</sub>(t)=τΛ(t/τ)</span>\n      <span class=\"formula-note\">形状为三角形，具体归一化随定义略异。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频谱直觉</span>\n      <span class=\"formula\">三角脉冲 ↔ Sa²(·)</span>\n      <span class=\"formula-note\">时域越平滑，高频衰减越快。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>三角脉冲是门信号与自身卷积的结果，常用于卷积定理和线性插值示例。</p>\n      <p><mark>自检问题：</mark>宽度均为 2 的两个门信号卷积，结果的底宽、峰值和面积各是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>三角脉冲的底宽不是 τ，而是两个门宽之和 2τ；画图时先确定支撑区间。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "三角脉冲的底宽不是 τ，而是两个门宽之和 2τ；画图时先确定支撑区间。"
    },
    "s2-1-7": {
      "concept": "\n      <p><mark>sgn(t) 在正半轴为 +1、负半轴为 −1，用于表示极性反转和构造阶跃。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：用 sgn(t) 表示一个在 t=0 从 −2 跳到 +2 的信号。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>sgn(t)=1（t>0），−1（t<0），t=0 处通常取 0。</li><li>sgn(t)=2ε(t)−1，ε(t)=[1+sgn(t)]/2。</li><li>符号信号是奇函数，其傅里叶变换含 1/(jω) 项，适合表示直流跳变。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">与阶跃关系</span>\n      <span class=\"formula\">sgn(t)=2ε(t)−1</span>\n      <span class=\"formula-note\">在 t=0 处按约定处理。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>sgn(t) 在正半轴为 +1、负半轴为 −1，用于表示极性反转和构造阶跃。</p>\n      <p><mark>自检问题：</mark>用 sgn(t) 表示一个在 t=0 从 −2 跳到 +2 的信号。</p>\n      <p><span class=\"hl-red\">易错点：</span>sgn(t) 的负半轴是 −1，而不是 0；这是与 ε(t) 最直观的区别。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "sgn(t) 的负半轴是 −1，而不是 0；这是与 ε(t) 最直观的区别。"
    },
    "s2-1-8": {
      "concept": "\n      <p><mark>单位斜坡 r(t)=tε(t) 描述线性增长过程，是阶跃的积分、冲激的二重积分。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：写出从 t=2 开始、斜率为 3 的斜坡信号表达式。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>r(t)=tε(t)：t<0 为 0，t≥0 后线性增长。</li><li>斜坡的导数是阶跃，阶跃的积分是斜坡；斜坡的二是冲激。</li><li>移位斜坡 r(t−t₀) 表示从 t₀ 开始线性增长。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">定义</span>\n      <span class=\"formula\">r(t)=tε(t)</span>\n      <span class=\"formula-note\">斜率 1，起点 0。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">微积分链</span>\n      <span class=\"formula\">r′(t)=ε(t),&nbsp; r″(t)=δ(t)</span>\n      <span class=\"formula-note\">广义函数意义。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>单位斜坡 r(t)=tε(t) 描述线性增长过程，是阶跃的积分、冲激的二重积分。</p>\n      <p><mark>自检问题：</mark>写出从 t=2 开始、斜率为 3 的斜坡信号表达式。</p>\n      <p><span class=\"hl-red\">易错点：</span>斜坡信号不是“周期锯齿波”；它只增长一次，没有重复周期。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "斜坡信号不是“周期锯齿波”；它只增长一次，没有重复周期。"
    },
    "s2-2-1": {
      "concept": "\n      <p><mark>连续卷积是“翻转—平移—相乘—积分”的运算，描述 LTI 系统零状态响应。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：若 f(t)=ε(t)，h(t)=e&lt;sup&gt;−t&lt;/sup&gt;ε(t)，写出卷积积分并确定积分上下限。</p><p>卷积积分先做变量置换与波形翻转，再用重叠区间确定上下限；结果始终是关于 t 的新函数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=11\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 00:11，打开 Bilibili 对应讲解\">第 9 集 · 00:11 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>定义 y(t)=∫f(τ)h(t−τ)dτ；也可写成 ∫h(τ)f(t−τ)dτ。</li><li>卷积存在的充分条件通常要求信号绝对可积或能量有限；实际题中先检查支撑区间。</li><li>LTI 系统的零状态响应等于输入与冲激响应的卷积。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">连续卷积</span>\n      <span class=\"formula\">y(t)=f(t)*h(t)=∫<sub>−∞</sub><sup>∞</sup>f(τ)h(t−τ)dτ</span>\n      <span class=\"formula-note\">积分变量 τ 被“消去”，结果仍是 t 的函数。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>定义 y(t)=∫f₁(τ)f₂(t−τ)dτ，τ 是虚设积分变量，积分后只剩 t。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=11\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 00:11，打开 Bilibili 对应讲解\">第 9 集 · 00:11 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积定义</span>\n          <span class=\"formula\">y(t)=∫<sub>−∞</sub><sup>∞</sup>f₁(τ)f₂(t−τ)dτ</span>\n          <span class=\"formula-note\">第 9 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>上下限不随 t 变化、把 f₂(t−τ) 误写成 f₂(t) 乘积、翻转后方向写反，都会导致整道题错误。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>连续卷积是“翻转—平移—相乘—积分”的运算，描述 LTI 系统零状态响应。</p>\n      <p><mark>自检问题：</mark>若 f(t)=ε(t)，h(t)=e&lt;sup&gt;−t&lt;/sup&gt;ε(t)，写出卷积积分并确定积分上下限。</p>\n      <p><span class=\"hl-red\">易错点：</span>卷积不是普通乘积；括号内是 h(t−τ)，不是 h(t)h(τ)。</p>\n      <p><mark>迁移到题目时：</mark>冲激卷积是恒等运算：f(t)*δ(t−t₀)=f(t−t₀)，可用来快速处理移位与线性系统。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=1058\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 17:38，打开 Bilibili 对应讲解\">第 9 集 · 17:38 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "定义 y(t)=∫f₁(τ)f₂(t−τ)dτ，τ 是虚设积分变量，积分后只剩 t。",
        "冲激卷积是恒等运算：f(t)*δ(t−t₀)=f(t−t₀)，可用来快速处理移位与线性系统。"
      ],
      "extraFormulas": [
        {
          "label": "卷积定义",
          "expr": "y(t)=∫<sub>−∞</sub><sup>∞</sup>f₁(τ)f₂(t−τ)dτ",
          "note": "第 9 集讲解"
        }
      ],
      "finalPitfall": "卷积不是普通乘积；括号内是 h(t−τ)，不是 h(t)h(τ)。 上下限不随 t 变化、把 f₂(t−τ) 误写成 f₂(t) 乘积、翻转后方向写反，都会导致整道题错误。"
    },
    "s2-2-2": {
      "concept": "\n      <p><mark>通过翻转、平移、重叠相乘和积分，分段确定卷积结果，尤其适用于有限长脉冲。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：两个宽度分别为 2 和 3 的矩形脉冲卷积，结果支撑区间多长？何时达到峰值？</p><p>卷积积分先做变量置换与波形翻转，再用重叠区间确定上下限；结果始终是关于 t 的新函数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=1061\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 17:41，打开 Bilibili 对应讲解\">第 9 集 · 17:41 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>步骤：选一个信号翻转 → 平移 t → 与另一信号相乘 → 对重叠区间积分。</li><li>随着 t 变化，重叠区间分段改变；必须按临界点划分 t 的区间。</li><li>有限长信号卷积的结果支撑长度为两信号支撑长度之和（连续情形为区间长度相加）。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">重叠区间</span>\n      <span class=\"formula\">y(t)=∫<sub>max(a,t−b)</sub><sup>min(b,t−a)</sub> f(τ)h(t−τ)dτ</span>\n      <span class=\"formula-note\">a、b 为 h 的支撑端点，具体上下限随翻转对象调整。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>有限长信号的卷积支撑长度为两者支撑长度之和，峰值位置对应最大重叠区间。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=123\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 02:03，打开 Bilibili 对应讲解\">第 9 集 · 02:03 ↗</a></li><li>解析法适合公式简单的情形，图解法适合门函数、分段脉冲；先画支撑区间再代上下限。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=123\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 02:03，打开 Bilibili 对应讲解\">第 9 集 · 02:03 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激卷积</span>\n          <span class=\"formula\">f(t)*δ(t−t₀)=f(t−t₀)</span>\n          <span class=\"formula-note\">第 9 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">支撑长度</span>\n          <span class=\"formula\">L=L₁+L₂（连续区间长度相加）</span>\n          <span class=\"formula-note\">第 9 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>上下限不随 t 变化、把 f₂(t−τ) 误写成 f₂(t) 乘积、翻转后方向写反，都会导致整道题错误。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-00.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 00:00\"\n            aria-label=\"查看第 9 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-00.jpg\" alt=\"第 9 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-01.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 05:00\"\n            aria-label=\"查看第 9 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-01.jpg\" alt=\"第 9 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-02.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 10:00\"\n            aria-label=\"查看第 9 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-02.jpg\" alt=\"第 9 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-03.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 15:00\"\n            aria-label=\"查看第 9 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-03.jpg\" alt=\"第 9 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-04.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 20:00\"\n            aria-label=\"查看第 9 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-04.jpg\" alt=\"第 9 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-05.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 25:00\"\n            aria-label=\"查看第 9 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-05.jpg\" alt=\"第 9 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-06.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 30:00\"\n            aria-label=\"查看第 9 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-06.jpg\" alt=\"第 9 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep09/frame-07.jpg\"\n            data-image-title=\"2.4 卷积积分I\"\n            data-image-label=\"第 9 集 · 35:00\"\n            aria-label=\"查看第 9 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep09/frame-07.jpg\" alt=\"第 9 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>通过翻转、平移、重叠相乘和积分，分段确定卷积结果，尤其适用于有限长脉冲。</p>\n      <p><mark>自检问题：</mark>两个宽度分别为 2 和 3 的矩形脉冲卷积，结果支撑区间多长？何时达到峰值？</p>\n      <p><span class=\"hl-red\">易错点：</span>最常见错误是积分限不随 t 分段，或把翻转后的区间方向写反。</p>\n      <p><mark>迁移到题目时：</mark>图解顺序：选一个波形翻转→平移 t→找重叠区间→逐段相乘积分。翻转哪一个信号都可以。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=9&amp;t=1061\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 9 集 · 17:41，打开 Bilibili 对应讲解\">第 9 集 · 17:41 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "有限长信号的卷积支撑长度为两者支撑长度之和，峰值位置对应最大重叠区间。",
        "解析法适合公式简单的情形，图解法适合门函数、分段脉冲；先画支撑区间再代上下限。",
        "图解顺序：选一个波形翻转→平移 t→找重叠区间→逐段相乘积分。翻转哪一个信号都可以。"
      ],
      "extraFormulas": [
        {
          "label": "冲激卷积",
          "expr": "f(t)*δ(t−t₀)=f(t−t₀)",
          "note": "第 9 集讲解"
        },
        {
          "label": "支撑长度",
          "expr": "L=L₁+L₂（连续区间长度相加）",
          "note": "第 9 集讲解"
        }
      ],
      "finalPitfall": "最常见错误是积分限不随 t 分段，或把翻转后的区间方向写反。 上下限不随 t 变化、把 f₂(t−τ) 误写成 f₂(t) 乘积、翻转后方向写反，都会导致整道题错误。"
    },
    "s2-2-3": {
      "concept": "\n      <p><mark>掌握交换律、结合律、分配律、移位性质以及微分/积分性质，能简化复杂卷积。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：如何利用 δ(t−2)*δ(t−3)=δ(t−5) 快速写出两个移位系统的级联响应？</p><p>卷积的三律、移位和微积分性质把复杂积分变成结构运算；任意信号也可看成一串冲激或阶跃的叠加。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=396\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 06:36，打开 Bilibili 对应讲解\">第 10 集 · 06:36 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>交换律：f*h=h*f；结合律：(f*g)*h=f*(g*h)；分配律：f*(g+h)=f*g+f*h。</li><li>移位：f(t−t₁)*h(t−t₂)=y(t−t₁−t₂)。</li><li>微分/积分：f′*h=(f*h)′；∫f*h=(∫f)*h（在适当条件下）。</li><li>与 δ 卷积是恒等运算：f(t)*δ(t−t₀)=f(t−t₀)。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">交换与结合</span>\n      <span class=\"formula\">f*h=h*f,&nbsp; (f*g)*h=f*(g*h)</span>\n      <span class=\"formula-note\">简化级联系统与积分顺序。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">移位</span>\n      <span class=\"formula\">f(t−t₁)*h(t−t₂)=y(t−t₁−t₂)</span>\n      <span class=\"formula-note\">两个时移相加。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>与 δ 卷积是平移，与 ε 卷积是积分：f(t)*ε(t)=∫_{-∞}^t f(τ)dτ。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=254\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 04:14，打开 Bilibili 对应讲解\">第 10 集 · 04:14 ↗</a></li><li>卷积满足交换律、结合律和分配律；级联系统总 h 为各级 h 的卷积，并联系统总 h 为各级 h 相加。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=396\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 06:36，打开 Bilibili 对应讲解\">第 10 集 · 06:36 ↗</a></li><li>移位性质：f(t−t₁)*g(t−t₂)=y(t−t₁−t₂)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=596\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 09:56，打开 Bilibili 对应讲解\">第 10 集 · 09:56 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积三律</span>\n          <span class=\"formula\">f*g=g*f，(f*g)*h=f*(g*h)，f*(g+h)=f*g+f*h</span>\n          <span class=\"formula-note\">第 10 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">阶跃卷积</span>\n          <span class=\"formula\">f*ε(t)=∫<sub>−∞</sub><sup>t</sup>f(τ)dτ</span>\n          <span class=\"formula-note\">第 10 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">移位相加</span>\n          <span class=\"formula\">f(t−t₁)*g(t−t₂)=y(t−t₁−t₂)</span>\n          <span class=\"formula-note\">第 10 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>卷积结果不是 f(t)g(t)；微分与积分性质必须成对补偿，不能只对一边操作。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-00.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 00:00\"\n            aria-label=\"查看第 10 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-00.jpg\" alt=\"第 10 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-01.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 05:00\"\n            aria-label=\"查看第 10 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-01.jpg\" alt=\"第 10 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-02.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 10:00\"\n            aria-label=\"查看第 10 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-02.jpg\" alt=\"第 10 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-03.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 15:00\"\n            aria-label=\"查看第 10 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-03.jpg\" alt=\"第 10 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-04.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 20:00\"\n            aria-label=\"查看第 10 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-04.jpg\" alt=\"第 10 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-05.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 25:00\"\n            aria-label=\"查看第 10 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-05.jpg\" alt=\"第 10 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-06.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 30:00\"\n            aria-label=\"查看第 10 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-06.jpg\" alt=\"第 10 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-07.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 35:00\"\n            aria-label=\"查看第 10 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-07.jpg\" alt=\"第 10 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-08.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 40:00\"\n            aria-label=\"查看第 10 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-08.jpg\" alt=\"第 10 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-09.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 45:00\"\n            aria-label=\"查看第 10 集 · 45:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-09.jpg\" alt=\"第 10 集 · 45:00课堂板书截图\" loading=\"lazy\">\n            <span>45:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep10/frame-10.jpg\"\n            data-image-title=\"2.4 卷积积分II\"\n            data-image-label=\"第 10 集 · 50:00\"\n            aria-label=\"查看第 10 集 · 50:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep10/frame-10.jpg\" alt=\"第 10 集 · 50:00课堂板书截图\" loading=\"lazy\">\n            <span>50:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握交换律、结合律、分配律、移位性质以及微分/积分性质，能简化复杂卷积。</p>\n      <p><mark>自检问题：</mark>如何利用 δ(t−2)*δ(t−3)=δ(t−5) 快速写出两个移位系统的级联响应？</p>\n      <p><span class=\"hl-red\">易错点：</span>分配律对卷积成立，但卷积不满足普通乘法的“幂次”直觉；不要随意交换微分与积分顺序而不检查条件。</p>\n      <p><mark>迁移到题目时：</mark>微分/积分性质可转移到一个因子上，常用来避开高阶奇异项，但必须检查收敛和初始边界。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=1167\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 19:27，打开 Bilibili 对应讲解\">第 10 集 · 19:27 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "与 δ 卷积是平移，与 ε 卷积是积分：f(t)*ε(t)=∫_{-∞}^t f(τ)dτ。",
        "卷积满足交换律、结合律和分配律；级联系统总 h 为各级 h 的卷积，并联系统总 h 为各级 h 相加。",
        "移位性质：f(t−t₁)*g(t−t₂)=y(t−t₁−t₂)。",
        "微分/积分性质可转移到一个因子上，常用来避开高阶奇异项，但必须检查收敛和初始边界。"
      ],
      "extraFormulas": [
        {
          "label": "卷积三律",
          "expr": "f*g=g*f，(f*g)*h=f*(g*h)，f*(g+h)=f*g+f*h",
          "note": "第 10 集讲解"
        },
        {
          "label": "阶跃卷积",
          "expr": "f*ε(t)=∫<sub>−∞</sub><sup>t</sup>f(τ)dτ",
          "note": "第 10 集讲解"
        },
        {
          "label": "移位相加",
          "expr": "f(t−t₁)*g(t−t₂)=y(t−t₁−t₂)",
          "note": "第 10 集讲解"
        }
      ],
      "finalPitfall": "分配律对卷积成立，但卷积不满足普通乘法的“幂次”直觉；不要随意交换微分与积分顺序而不检查条件。 卷积结果不是 f(t)g(t)；微分与积分性质必须成对补偿，不能只对一边操作。"
    },
    "s2-2-4": {
      "concept": "\n      <p><mark>记住门-门、阶跃-指数、指数-指数等常用结果，减少重复积分。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：计算 e&lt;sup&gt;−2t&lt;/sup&gt;ε(t)*e&lt;sup&gt;−5t&lt;/sup&gt;ε(t)，并验证 t=0 处结果是否为 0。</p><p>卷积的三律、移位和微积分性质把复杂积分变成结构运算；任意信号也可看成一串冲激或阶跃的叠加。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=363\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 06:03，打开 Bilibili 对应讲解\">第 10 集 · 06:03 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>两个相同门信号卷积得到三角脉冲，底宽相加、峰值等于重叠面积。</li><li>ε(t)*ε(t)=tε(t)，即单位斜坡。</li><li>e<sup>−at</sup>ε(t)*e<sup>−bt</sup>ε(t)（a≠b）结果为两个指数项之差除以 (b−a)。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">阶跃卷积</span>\n      <span class=\"formula\">ε(t)*ε(t)=tε(t)</span>\n      <span class=\"formula-note\">相当于二重积分。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">指数卷积</span>\n      <span class=\"formula\">e<sup>−at</sup>ε(t)*e<sup>−bt</sup>ε(t)=[e<sup>−at</sup>−e<sup>−bt</sup>]/(b−a)·ε(t)</span>\n      <span class=\"formula-note\">a≠b，t≥0。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>卷积结果不是 f(t)g(t)；微分与积分性质必须成对补偿，不能只对一边操作。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>记住门-门、阶跃-指数、指数-指数等常用结果，减少重复积分。</p>\n      <p><mark>自检问题：</mark>计算 e&lt;sup&gt;−2t&lt;/sup&gt;ε(t)*e&lt;sup&gt;−5t&lt;/sup&gt;ε(t)，并验证 t=0 处结果是否为 0。</p>\n      <p><span class=\"hl-red\">易错点：</span>指数卷积公式中的分母是 b−a，符号写反会导致整体符号错误；a=b 时需改用 t e&lt;sup&gt;−at&lt;/sup&gt; 形式。</p>\n      <p><mark>迁移到题目时：</mark>任意信号可分解为冲激叠加，因而 LTI 零状态响应就是输入与 h 的卷积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=10&amp;t=363\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 10 集 · 06:03，打开 Bilibili 对应讲解\">第 10 集 · 06:03 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "任意信号可分解为冲激叠加，因而 LTI 零状态响应就是输入与 h 的卷积。"
      ],
      "extraFormulas": [],
      "finalPitfall": "指数卷积公式中的分母是 b−a，符号写反会导致整体符号错误；a=b 时需改用 t e<sup>−at</sup> 形式。 卷积结果不是 f(t)g(t)；微分与积分性质必须成对补偿，不能只对一边操作。"
    },
    "s2-3-1": {
      "concept": "\n      <p><mark>用归一化内积衡量两个信号的相似程度，取值范围为 [−1,1]。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：f₁(t)=cos ωt 与 f₂(t)=sin ωt 在一个周期内的相关系数是多少？</p><p>相关函数衡量“平移多少时两个信号最像”，它与卷积相似但不翻转其中一个波形。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=387\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 06:27，打开 Bilibili 对应讲解\">第 11 集 · 06:27 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>相关系数把两信号的内积除以各自能量平方根，消除幅度尺度影响。</li><li>ρ=1 表示完全同相相似，ρ=−1 表示完全反相相似，ρ=0 表示正交/不相关（在均值为零意义下）。</li><li>相关系数只描述线性相似性，不能说明因果或系统关系。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">相关系数</span>\n      <span class=\"formula\">ρ<sub>12</sub>=⟨f₁,f₂⟩/(‖f₁‖‖f₂‖)</span>\n      <span class=\"formula-note\">实信号内积为 ∫f₁(t)f₂(t)dt。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>把相关直接当卷积会多翻转一次；互相关一般不对称，自相关才保证偶对称。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用归一化内积衡量两个信号的相似程度，取值范围为 [−1,1]。</p>\n      <p><mark>自检问题：</mark>f₁(t)=cos ωt 与 f₂(t)=sin ωt 在一个周期内的相关系数是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>相关系数高不等于“一个信号由另一个产生”；它只是波形相似度的统计/几何度量。</p>\n      <p><mark>迁移到题目时：</mark>相关与卷积的关键差别是卷积有波形翻转，而相关只移位、相乘、积分。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=387\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 06:27，打开 Bilibili 对应讲解\">第 11 集 · 06:27 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "相关与卷积的关键差别是卷积有波形翻转，而相关只移位、相乘、积分。"
      ],
      "extraFormulas": [],
      "finalPitfall": "相关系数高不等于“一个信号由另一个产生”；它只是波形相似度的统计/几何度量。 把相关直接当卷积会多翻转一次；互相关一般不对称，自相关才保证偶对称。"
    },
    "s2-3-2": {
      "concept": "\n      <p><mark>相关函数描述信号在不同时移下的相似程度，自相关反映自身重复性，互相关反映两信号的时间对应关系。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：为什么自相关在 τ=0 处最大？用柯西—施瓦茨不等式说明。</p><p>相关函数衡量“平移多少时两个信号最像”，它与卷积相似但不翻转其中一个波形。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=22\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 00:22，打开 Bilibili 对应讲解\">第 11 集 · 00:22 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>互相关 R₁₂(τ)=∫f₁(t)f₂(t−τ)dt；自相关 R(τ)=∫f(t)f(t−τ)dt。</li><li>实能量信号的自相关是偶函数，并在 τ=0 处取得最大值，最大值等于信号能量。</li><li>互相关一般不满足交换律：R₁₂(τ)=R₂₁(−τ)。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">互相关</span>\n      <span class=\"formula\">R<sub>12</sub>(τ)=∫<sub>−∞</sub><sup>∞</sup>f₁(t)f₂(t−τ)dt</span>\n      <span class=\"formula-note\">τ 为相对时移。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">自相关</span>\n      <span class=\"formula\">R(τ)=∫f(t)f(t−τ)dt,&nbsp; R(0)=E</span>\n      <span class=\"formula-note\">实能量信号。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>互相关 R₁₂(τ)=∫f₁(t)f₂(t−τ)dt，表示信号 1 相对于信号 2 的时移相似度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=22\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 00:22，打开 Bilibili 对应讲解\">第 11 集 · 00:22 ↗</a></li><li>R₁₂(τ)=R₂₁(−τ)，下标顺序和时移符号必须一起看。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=105\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 01:45，打开 Bilibili 对应讲解\">第 11 集 · 01:45 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">互相关</span>\n          <span class=\"formula\">R<sub>12</sub>(τ)=∫f₁(t)f₂(t−τ)dt</span>\n          <span class=\"formula-note\">第 11 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">顺序关系</span>\n          <span class=\"formula\">R<sub>12</sub>(τ)=R<sub>21</sub>(−τ)</span>\n          <span class=\"formula-note\">第 11 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">自相关峰值</span>\n          <span class=\"formula\">R(0)=E，R(τ)=R(−τ)</span>\n          <span class=\"formula-note\">第 11 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>把相关直接当卷积会多翻转一次；互相关一般不对称，自相关才保证偶对称。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep11/frame-00.jpg\"\n            data-image-title=\"2.4 补充：互相关函数与自相关函数\"\n            data-image-label=\"第 11 集 · 00:00\"\n            aria-label=\"查看第 11 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep11/frame-00.jpg\" alt=\"第 11 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep11/frame-01.jpg\"\n            data-image-title=\"2.4 补充：互相关函数与自相关函数\"\n            data-image-label=\"第 11 集 · 05:00\"\n            aria-label=\"查看第 11 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep11/frame-01.jpg\" alt=\"第 11 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>相关函数描述信号在不同时移下的相似程度，自相关反映自身重复性，互相关反映两信号的时间对应关系。</p>\n      <p><mark>自检问题：</mark>为什么自相关在 τ=0 处最大？用柯西—施瓦茨不等式说明。</p>\n      <p><span class=\"hl-red\">易错点：</span>相关与卷积形式相似，但相关不做翻转（或翻转方向不同）；R₁₂ 与 R₂₁ 的时移符号要对应。</p>\n      <p><mark>迁移到题目时：</mark>自相关 R(τ)=∫f(t)f(t−τ)dt 是偶函数；实能量信号在 τ=0 取最大值，R(0)=E。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=275\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 04:35，打开 Bilibili 对应讲解\">第 11 集 · 04:35 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "互相关 R₁₂(τ)=∫f₁(t)f₂(t−τ)dt，表示信号 1 相对于信号 2 的时移相似度。",
        "R₁₂(τ)=R₂₁(−τ)，下标顺序和时移符号必须一起看。",
        "自相关 R(τ)=∫f(t)f(t−τ)dt 是偶函数；实能量信号在 τ=0 取最大值，R(0)=E。"
      ],
      "extraFormulas": [
        {
          "label": "互相关",
          "expr": "R<sub>12</sub>(τ)=∫f₁(t)f₂(t−τ)dt",
          "note": "第 11 集讲解"
        },
        {
          "label": "顺序关系",
          "expr": "R<sub>12</sub>(τ)=R<sub>21</sub>(−τ)",
          "note": "第 11 集讲解"
        },
        {
          "label": "自相关峰值",
          "expr": "R(0)=E，R(τ)=R(−τ)",
          "note": "第 11 集讲解"
        }
      ],
      "finalPitfall": "相关与卷积形式相似，但相关不做翻转（或翻转方向不同）；R₁₂ 与 R₂₁ 的时移符号要对应。 把相关直接当卷积会多翻转一次；互相关一般不对称，自相关才保证偶对称。"
    },
    "s2-3-3": {
      "concept": "\n      <p><mark>把相关运算转为频域乘法，并引出能量谱密度与功率谱密度。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：若 f(t) 是实偶信号，其自相关和 |F(ω)|² 各有什么对称性？</p><p>相关函数衡量“平移多少时两个信号最像”，它与卷积相似但不翻转其中一个波形。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=304\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 05:04，打开 Bilibili 对应讲解\">第 11 集 · 05:04 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>互相关的傅里叶变换等于一个信号频谱乘以另一个信号频谱的共轭。</li><li>自相关的傅里叶变换等于 |F(ω)|²，即能量谱密度。</li><li>相关定理把“时移相似度”与“频域相位关系”联系起来。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">相关定理</span>\n      <span class=\"formula\">ℱ{R<sub>12</sub>(τ)}=F₁(ω)F₂*(ω)</span>\n      <span class=\"formula-note\">注意共轭位置与定义中的时移方向。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">能量谱</span>\n      <span class=\"formula\">ℱ{R(τ)}=|F(ω)|²</span>\n      <span class=\"formula-note\">自相关与能量谱是一对傅里叶变换。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>把相关直接当卷积会多翻转一次；互相关一般不对称，自相关才保证偶对称。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把相关运算转为频域乘法，并引出能量谱密度与功率谱密度。</p>\n      <p><mark>自检问题：</mark>若 f(t) 是实偶信号，其自相关和 |F(ω)|² 各有什么对称性？</p>\n      <p><span class=\"hl-red\">易错点：</span>共轭符号易漏；实信号时 F₂* 仍可能影响相位，不能直接当作普通乘法。</p>\n      <p><mark>迁移到题目时：</mark>相关定理把时域相关与频域共轭乘积、能量谱/功率谱联系起来。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=11&amp;t=304\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 11 集 · 05:04，打开 Bilibili 对应讲解\">第 11 集 · 05:04 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "相关定理把时域相关与频域共轭乘积、能量谱/功率谱联系起来。"
      ],
      "extraFormulas": [],
      "finalPitfall": "共轭符号易漏；实信号时 F₂* 仍可能影响相位，不能直接当作普通乘法。 把相关直接当卷积会多翻转一次；互相关一般不对称，自相关才保证偶对称。"
    },
    "s2-4-1": {
      "concept": "\n      <p><mark>区分 0&lt;sup&gt;−&lt;/sup&gt; 与 0&lt;sup&gt;+&lt;/sup&gt; 状态，理解跳变对初始储能和响应初值的影响。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：为什么电容电压和电感电流通常不能突变？从能量连续性角度解释。</p><p>零输入响应和零状态响应虽然都调用齐次模态，但系数来源完全不同：前者来自 0⁻ 初态，后者来自激励接入后的 0⁺ 初态。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=7&amp;t=186\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 7 集 · 03:06，打开 Bilibili 对应讲解\">第 7 集 · 03:06 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>0<sup>−</sup> 表示激励接入前的瞬间，0<sup>+</sup> 表示接入后的瞬间；电容电压、电感电流通常不能突变。</li><li>若激励含冲激或系统含冲激，状态可能在 t=0 发生跳变，需要先求 0<sup>+</sup> 初始条件。</li><li>零输入响应用 0<sup>+</sup> 初始条件；微分方程求解时要与激励的奇异项匹配。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">连续状态连续性</span>\n      <span class=\"formula\">v<sub>C</sub>(0<sup>+</sup>)=v<sub>C</sub>(0<sup>−</sup>),&nbsp; i<sub>L</sub>(0<sup>+</sup>)=i<sub>L</sub>(0<sup>−</sup>)</span>\n      <span class=\"formula-note\">无冲激电压/电流时成立。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>若已知 0⁻ 状态而激励在 0 时刻接入，先用冲激平衡或电路连续性求 0⁻→0⁺ 的跳变量。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=128\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 02:08，打开 Bilibili 对应讲解\">第 6 集 · 02:08 ↗</a></li><li>用全响应反求分量时，可把初态项和激励项看作可分离的两路线性贡献。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=7&amp;t=24\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 7 集 · 00:24，打开 Bilibili 对应讲解\">第 7 集 · 00:24 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>看到齐次形式相同就误以为系数相同；零状态响应也不能只写特解。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>区分 0&lt;sup&gt;−&lt;/sup&gt; 与 0&lt;sup&gt;+&lt;/sup&gt; 状态，理解跳变对初始储能和响应初值的影响。</p>\n      <p><mark>自检问题：</mark>为什么电容电压和电感电流通常不能突变？从能量连续性角度解释。</p>\n      <p><span class=\"hl-red\">易错点：</span>不要默认所有变量在 t=0 连续；含冲激激励时，某些导出量可能跳变。</p>\n      <p><mark>迁移到题目时：</mark>若方程右端没有 δ 及其导数，零状态初值通常为零；若有 δ/δ′，要先求跳变量。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=7&amp;t=186\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 7 集 · 03:06，打开 Bilibili 对应讲解\">第 7 集 · 03:06 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "若已知 0⁻ 状态而激励在 0 时刻接入，先用冲激平衡或电路连续性求 0⁻→0⁺ 的跳变量。",
        "用全响应反求分量时，可把初态项和激励项看作可分离的两路线性贡献。",
        "若方程右端没有 δ 及其导数，零状态初值通常为零；若有 δ/δ′，要先求跳变量。"
      ],
      "extraFormulas": [],
      "finalPitfall": "不要默认所有变量在 t=0 连续；含冲激激励时，某些导出量可能跳变。 0⁺ 初始条件与 0⁻ 历史状态不是同一个对象；特解与特征根重合时忘记乘 t 是最常见的失分。 看到齐次形式相同就误以为系数相同；零状态响应也不能只写特解。"
    },
    "s2-4-2": {
      "concept": "\n      <p><mark>零输入响应由系统固有模态和初始状态决定，是齐次微分方程的解。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：特征根为 −1、−2，初始条件 y(0)=1、y′(0)=0，能否写出零输入响应？</p><p>微分方程的经典解不是把齐次解和特解随意相加，而是先定齐次/特解形式，再用 0⁺ 条件合成全解。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=44\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 00:44，打开 Bilibili 对应讲解\">第 6 集 · 00:44 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>设输入为零，解齐次方程 Σa<sub>i</sub>y<sup>(i)</sup>=0，得到特征根决定的形式。</li><li>单实根给出 e<sup>λt</sup>，重根给出 t<sup>m</sup>e<sup>λt</sup>，共轭复根给出衰减/等幅正弦。</li><li>利用 0<sup>+</sup> 初始条件确定待定系数；零输入响应与输入无关。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">特征方程</span>\n      <span class=\"formula\">Σ<sub>i=0</sub><sup>n</sup>a<sub>i</sub>λ<sup>i</sup>=0</span>\n      <span class=\"formula-note\">根决定固有模态。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单实根形式</span>\n      <span class=\"formula\">y<sub>zi</sub>(t)=ΣC<sub>i</sub>e<sup>λ<sub>i</sub>t</sup></span>\n      <span class=\"formula-note\">重根与复根需相应改写。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>N 阶常系数线性微分方程的齐次解由特征根决定；重根要多乘 t 的幂，复根配成衰减/增长的正弦项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=44\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 00:44，打开 Bilibili 对应讲解\">第 6 集 · 00:44 ↗</a></li><li>特解按右端激励选形式；激励 e^{αt} 与特征单根重合时，试解必须额外乘一次 t，否则会丢失共振项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=566\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 09:26，打开 Bilibili 对应讲解\">第 6 集 · 09:26 ↗</a></li><li>待定系数必须代回完整解并用 y(0⁺), y′(0⁺)… 确定，不能只代齐次解。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=788\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 13:08，打开 Bilibili 对应讲解\">第 6 集 · 13:08 ↗</a></li><li>全响应可再分为自由响应与强迫响应，也可分为暂态与稳态；名称不同但计算链条要一致。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=1405\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 23:25，打开 Bilibili 对应讲解\">第 6 集 · 23:25 ↗</a></li><li>y_zs 不是单纯的特解，它由特解和一部分齐次解组成，齐次部分由激励引起的跳变量确定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=7&amp;t=9\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 7 集 · 00:09，打开 Bilibili 对应讲解\">第 7 集 · 00:09 ↗</a></li><li>y_zi 满足齐次方程，系数由 0⁻ 初始状态决定；无外部激励时 0⁺=0⁻。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=7&amp;t=27\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 7 集 · 00:27，打开 Bilibili 对应讲解\">第 7 集 · 00:27 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">特征方程</span>\n          <span class=\"formula\">a<sub>n</sub>λ<sup>n</sup>+…+a<sub>1</sub>λ+a<sub>0</sub>=0</span>\n          <span class=\"formula-note\">第 6 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">全解</span>\n          <span class=\"formula\">y=y<sub>h</sub>+y<sub>p</sub></span>\n          <span class=\"formula-note\">第 6 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">跳变量</span>\n          <span class=\"formula\">y<sup>(j)</sup>(0<sup>+</sup>)=y<sup>(j)</sup>(0<sup>−</sup>)+Δy<sup>(j)</sup></span>\n          <span class=\"formula-note\">第 6 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">分解</span>\n          <span class=\"formula\">y(t)=y<sub>zi</sub>(t)+y<sub>zs</sub>(t)</span>\n          <span class=\"formula-note\">第 7 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单根零输入</span>\n          <span class=\"formula\">y<sub>zi</sub>=ΣC<sub>xi</sub>e<sup>λ<sub>i</sub>t</sup></span>\n          <span class=\"formula-note\">第 7 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">系数分担</span>\n          <span class=\"formula\">C<sub>i</sub>=C<sub>xi</sub>+C<sub>si</sub></span>\n          <span class=\"formula-note\">第 7 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>0⁺ 初始条件与 0⁻ 历史状态不是同一个对象；特解与特征根重合时忘记乘 t 是最常见的失分。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-00.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 00:00\"\n            aria-label=\"查看第 6 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-00.jpg\" alt=\"第 6 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-01.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 05:00\"\n            aria-label=\"查看第 6 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-01.jpg\" alt=\"第 6 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-02.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 10:00\"\n            aria-label=\"查看第 6 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-02.jpg\" alt=\"第 6 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-03.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 15:00\"\n            aria-label=\"查看第 6 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-03.jpg\" alt=\"第 6 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-04.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 20:00\"\n            aria-label=\"查看第 6 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-04.jpg\" alt=\"第 6 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-05.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 25:00\"\n            aria-label=\"查看第 6 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-05.jpg\" alt=\"第 6 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-06.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 30:00\"\n            aria-label=\"查看第 6 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-06.jpg\" alt=\"第 6 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-07.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 35:00\"\n            aria-label=\"查看第 6 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-07.jpg\" alt=\"第 6 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep06/frame-08.jpg\"\n            data-image-title=\"2.1 系统微分方程的经典解\"\n            data-image-label=\"第 6 集 · 40:00\"\n            aria-label=\"查看第 6 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep06/frame-08.jpg\" alt=\"第 6 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep07/frame-00.jpg\"\n            data-image-title=\"2.2 零输入响应与零状态响应\"\n            data-image-label=\"第 7 集 · 00:00\"\n            aria-label=\"查看第 7 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep07/frame-00.jpg\" alt=\"第 7 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep07/frame-01.jpg\"\n            data-image-title=\"2.2 零输入响应与零状态响应\"\n            data-image-label=\"第 7 集 · 05:00\"\n            aria-label=\"查看第 7 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep07/frame-01.jpg\" alt=\"第 7 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep07/frame-02.jpg\"\n            data-image-title=\"2.2 零输入响应与零状态响应\"\n            data-image-label=\"第 7 集 · 10:00\"\n            aria-label=\"查看第 7 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep07/frame-02.jpg\" alt=\"第 7 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep07/frame-03.jpg\"\n            data-image-title=\"2.2 零输入响应与零状态响应\"\n            data-image-label=\"第 7 集 · 15:00\"\n            aria-label=\"查看第 7 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep07/frame-03.jpg\" alt=\"第 7 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep07/frame-04.jpg\"\n            data-image-title=\"2.2 零输入响应与零状态响应\"\n            data-image-label=\"第 7 集 · 20:00\"\n            aria-label=\"查看第 7 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep07/frame-04.jpg\" alt=\"第 7 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>零输入响应由系统固有模态和初始状态决定，是齐次微分方程的解。</p>\n      <p><mark>自检问题：</mark>特征根为 −1、−2，初始条件 y(0)=1、y′(0)=0，能否写出零输入响应？</p>\n      <p><span class=\"hl-red\">易错点：</span>零输入响应不是“输入为零时的总响应”之外的东西；它完全由初始储能驱动，不能把输入项混入。</p>\n      <p><mark>迁移到题目时：</mark>经典解的齐次系数 Cᵢ=C_xi+C_si，不能把 C_xi 或 C_si 直接当成经典解的 Cᵢ。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=7&amp;t=64\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 7 集 · 01:04，打开 Bilibili 对应讲解\">第 7 集 · 01:04 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "N 阶常系数线性微分方程的齐次解由特征根决定；重根要多乘 t 的幂，复根配成衰减/增长的正弦项。",
        "特解按右端激励选形式；激励 e^{αt} 与特征单根重合时，试解必须额外乘一次 t，否则会丢失共振项。",
        "待定系数必须代回完整解并用 y(0⁺), y′(0⁺)… 确定，不能只代齐次解。",
        "全响应可再分为自由响应与强迫响应，也可分为暂态与稳态；名称不同但计算链条要一致。",
        "y_zs 不是单纯的特解，它由特解和一部分齐次解组成，齐次部分由激励引起的跳变量确定。",
        "y_zi 满足齐次方程，系数由 0⁻ 初始状态决定；无外部激励时 0⁺=0⁻。",
        "经典解的齐次系数 Cᵢ=C_xi+C_si，不能把 C_xi 或 C_si 直接当成经典解的 Cᵢ。"
      ],
      "extraFormulas": [
        {
          "label": "特征方程",
          "expr": "a<sub>n</sub>λ<sup>n</sup>+…+a<sub>1</sub>λ+a<sub>0</sub>=0",
          "note": "第 6 集讲解"
        },
        {
          "label": "全解",
          "expr": "y=y<sub>h</sub>+y<sub>p</sub>",
          "note": "第 6 集讲解"
        },
        {
          "label": "跳变量",
          "expr": "y<sup>(j)</sup>(0<sup>+</sup>)=y<sup>(j)</sup>(0<sup>−</sup>)+Δy<sup>(j)</sup>",
          "note": "第 6 集讲解"
        },
        {
          "label": "分解",
          "expr": "y(t)=y<sub>zi</sub>(t)+y<sub>zs</sub>(t)",
          "note": "第 7 集讲解"
        },
        {
          "label": "单根零输入",
          "expr": "y<sub>zi</sub>=ΣC<sub>xi</sub>e<sup>λ<sub>i</sub>t</sup>",
          "note": "第 7 集讲解"
        },
        {
          "label": "系数分担",
          "expr": "C<sub>i</sub>=C<sub>xi</sub>+C<sub>si</sub>",
          "note": "第 7 集讲解"
        }
      ],
      "finalPitfall": "零输入响应不是“输入为零时的总响应”之外的东西；它完全由初始储能驱动，不能把输入项混入。 0⁺ 初始条件与 0⁻ 历史状态不是同一个对象；特解与特征根重合时忘记乘 t 是最常见的失分。 看到齐次形式相同就误以为系数相同；零状态响应也不能只写特解。"
    },
    "s2-5-1": {
      "concept": "\n      <p><mark>把任意输入表示为冲激的连续叠加，为 LTI 系统零状态响应的卷积公式提供依据。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：用一句话解释“为什么 LTI 系统的零状态响应是卷积”。</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=6&amp;t=13\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 6 集 · 00:13，打开 Bilibili 对应讲解\">第 6 集 · 00:13 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>f(t)=∫f(τ)δ(t−τ)dτ，把每个时刻 τ 的样本 f(τ) 看成冲激强度。</li><li>LTI 系统对 δ(t−τ) 的响应是 h(t−τ)，由线性与时不变性可叠加得到总响应。</li><li>这一分解是连续卷积的物理来源，不只是数学技巧。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">冲激分解</span>\n      <span class=\"formula\">f(t)=∫<sub>−∞</sub><sup>∞</sup>f(τ)δ(t−τ)dτ</span>\n      <span class=\"formula-note\">任意连续信号都可写成冲激叠加。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把任意输入表示为冲激的连续叠加，为 LTI 系统零状态响应的卷积公式提供依据。</p>\n      <p><mark>自检问题：</mark>用一句话解释“为什么 LTI 系统的零状态响应是卷积”。</p>\n      <p><span class=\"hl-red\">易错点：</span>冲激强度是 f(τ)dτ，不是 f(τ) 本身；积分变量与输出时间 t 要区分。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "冲激强度是 f(τ)dτ，不是 f(τ) 本身；积分变量与输出时间 t 要区分。"
    },
    "s2-5-2": {
      "concept": "\n      <p><mark>冲激响应 h(t) 是 LTI 系统的“指纹”，由系统本身决定，与具体输入无关。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：一阶系统 y′+2y=f(t)，能否求其冲激响应并判断稳定性？</p><p>h(t) 是 LTI 系统对 δ(t) 的零状态响应，g(t) 是对 ε(t) 的零状态响应；一个描述系统指纹，另一个只是 h 的积分。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=206\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 03:26，打开 Bilibili 对应讲解\">第 8 集 · 03:26 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>h(t) 是系统在零初始状态下对 δ(t) 的响应。</li><li>因果系统的 h(t)=0（t<0）；稳定系统的 h(t) 绝对可积。</li><li>h(t) 可由微分方程、系统函数 H(s) 的拉普拉斯逆变换或实验测量得到。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">定义</span>\n      <span class=\"formula\">h(t)=T[δ(t)]<sub>零状态</sub></span>\n      <span class=\"formula-note\">系统对单位冲激的响应。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">稳定性条件</span>\n      <span class=\"formula\">∫<sub>−∞</sub><sup>∞</sup>|h(t)|dt<∞</span>\n      <span class=\"formula-note\">连续 LTI 系统 BIBO 稳定的充分必要条件。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>零状态 h(0⁻)=h′(0⁻)=0，0⁺ 的跳变量用冲激平衡求。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=24\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 00:24，打开 Bilibili 对应讲解\">第 8 集 · 00:24 ↗</a></li><li>n&gt;m 时 h(t) 通常只含齐次项；n=m 时会出现 δ(t)；n&lt;m 时还会出现 δ′(t) 等高阶冲激。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=122\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 02:02，打开 Bilibili 对应讲解\">第 8 集 · 02:02 ↗</a></li><li>求 h(t) 时把激励换成 δ(t) 及其导数，比较方程左右最高奇异阶次。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=206\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 03:26，打开 Bilibili 对应讲解\">第 8 集 · 03:26 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">定义</span>\n          <span class=\"formula\">h=T[δ]|初态为零，g=T[ε]|初态为零</span>\n          <span class=\"formula-note\">第 8 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">微积分关系</span>\n          <span class=\"formula\">h(t)=g′(t)，g(t)=∫<sub>−∞</sub><sup>t</sup>h(τ)dτ</span>\n          <span class=\"formula-note\">第 8 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积表示</span>\n          <span class=\"formula\">g(t)=h(t)*ε(t)</span>\n          <span class=\"formula-note\">第 8 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>g(t) 不是“把 ε(t) 代入 h 表达式”；冲激响应的 δ 项和阶跃响应的特解容易混淆。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep08/frame-00.jpg\"\n            data-image-title=\"2.3 单位冲激响应与单位阶跃响应\"\n            data-image-label=\"第 8 集 · 00:00\"\n            aria-label=\"查看第 8 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep08/frame-00.jpg\" alt=\"第 8 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep08/frame-01.jpg\"\n            data-image-title=\"2.3 单位冲激响应与单位阶跃响应\"\n            data-image-label=\"第 8 集 · 05:00\"\n            aria-label=\"查看第 8 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep08/frame-01.jpg\" alt=\"第 8 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep08/frame-02.jpg\"\n            data-image-title=\"2.3 单位冲激响应与单位阶跃响应\"\n            data-image-label=\"第 8 集 · 10:00\"\n            aria-label=\"查看第 8 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep08/frame-02.jpg\" alt=\"第 8 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep08/frame-03.jpg\"\n            data-image-title=\"2.3 单位冲激响应与单位阶跃响应\"\n            data-image-label=\"第 8 集 · 15:00\"\n            aria-label=\"查看第 8 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep08/frame-03.jpg\" alt=\"第 8 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep08/frame-04.jpg\"\n            data-image-title=\"2.3 单位冲激响应与单位阶跃响应\"\n            data-image-label=\"第 8 集 · 20:00\"\n            aria-label=\"查看第 8 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep08/frame-04.jpg\" alt=\"第 8 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep08/frame-05.jpg\"\n            data-image-title=\"2.3 单位冲激响应与单位阶跃响应\"\n            data-image-label=\"第 8 集 · 25:00\"\n            aria-label=\"查看第 8 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep08/frame-05.jpg\" alt=\"第 8 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>冲激响应 h(t) 是 LTI 系统的“指纹”，由系统本身决定，与具体输入无关。</p>\n      <p><mark>自检问题：</mark>一阶系统 y′+2y=f(t)，能否求其冲激响应并判断稳定性？</p>\n      <p><span class=\"hl-red\">易错点：</span>求 h(t) 时必须强调零初始状态；若系统有初始储能，冲激响应不再是单纯的系统指纹。</p>\n      <p><mark>迁移到题目时：</mark>h、g 可互相转换：h=g′，g=∫_{-∞}^t h(τ)dτ。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=1230\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 20:30，打开 Bilibili 对应讲解\">第 8 集 · 20:30 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "零状态 h(0⁻)=h′(0⁻)=0，0⁺ 的跳变量用冲激平衡求。",
        "n>m 时 h(t) 通常只含齐次项；n=m 时会出现 δ(t)；n<m 时还会出现 δ′(t) 等高阶冲激。",
        "求 h(t) 时把激励换成 δ(t) 及其导数，比较方程左右最高奇异阶次。",
        "h、g 可互相转换：h=g′，g=∫_{-∞}^t h(τ)dτ。"
      ],
      "extraFormulas": [
        {
          "label": "定义",
          "expr": "h=T[δ]|初态为零，g=T[ε]|初态为零",
          "note": "第 8 集讲解"
        },
        {
          "label": "微积分关系",
          "expr": "h(t)=g′(t)，g(t)=∫<sub>−∞</sub><sup>t</sup>h(τ)dτ",
          "note": "第 8 集讲解"
        },
        {
          "label": "卷积表示",
          "expr": "g(t)=h(t)*ε(t)",
          "note": "第 8 集讲解"
        }
      ],
      "finalPitfall": "求 h(t) 时必须强调零初始状态；若系统有初始储能，冲激响应不再是单纯的系统指纹。 g(t) 不是“把 ε(t) 代入 h 表达式”；冲激响应的 δ 项和阶跃响应的特解容易混淆。"
    },
    "s2-5-3": {
      "concept": "\n      <p><mark>利用线性与时不变性，把冲激响应的叠加推广为输入与 h(t) 的卷积。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：输入为门信号、h(t)=e&lt;sup&gt;−t&lt;/sup&gt;ε(t)，响应在 t&lt;0 时为什么必为零？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=59\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 00:59，打开 Bilibili 对应讲解\">第 8 集 · 00:59 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>零状态响应 y<sub>zs</sub>(t)=f(t)*h(t)，这是 LTI 时域分析的核心公式。</li><li>若输入是移位冲激 f(t)=δ(t−t₀)，则响应直接是 h(t−t₀)。</li><li>计算时可利用卷积性质、图解分段或变换域方法。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">零状态响应</span>\n      <span class=\"formula\">y<sub>zs</sub>(t)=∫f(τ)h(t−τ)dτ</span>\n      <span class=\"formula-note\">输入与冲激响应卷积。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>利用线性与时不变性，把冲激响应的叠加推广为输入与 h(t) 的卷积。</p>\n      <p><mark>自检问题：</mark>输入为门信号、h(t)=e&lt;sup&gt;−t&lt;/sup&gt;ε(t)，响应在 t&lt;0 时为什么必为零？</p>\n      <p><span class=\"hl-red\">易错点：</span>零状态响应不等于完全响应；若有初始储能，还要加上零输入响应。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "零状态响应不等于完全响应；若有初始储能，还要加上零输入响应。"
    },
    "s2-5-4": {
      "concept": "\n      <p><mark>阶跃响应 g(t) 是系统对 ε(t) 的零状态响应，与冲激响应互为微积分。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：已知 g(t)=(1−e&lt;sup&gt;−2t&lt;/sup&gt;)ε(t)，求 h(t) 并判断系统是否稳定。</p><p>h(t) 是 LTI 系统对 δ(t) 的零状态响应，g(t) 是对 ε(t) 的零状态响应；一个描述系统指纹，另一个只是 h 的积分。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=4\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 00:04，打开 Bilibili 对应讲解\">第 8 集 · 00:04 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>g(t)=h(t)*ε(t)=∫<sub>−∞</sub><sup>t</sup>h(τ)dτ；h(t)=g′(t)（广义函数意义）。</li><li>因果系统的阶跃响应在 t<0 时为 0；稳定系统的阶跃响应趋于有限稳态值。</li><li>阶跃响应便于实验测量，也可用于判断系统是否含有积分环节。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">阶跃响应</span>\n      <span class=\"formula\">g(t)=∫<sub>−∞</sub><sup>t</sup>h(τ)dτ</span>\n      <span class=\"formula-note\">零状态、输入 ε(t)。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">反求冲激响应</span>\n      <span class=\"formula\">h(t)=dg(t)/dt</span>\n      <span class=\"formula-note\">跳变处需加冲激项。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>g(t) 不是“把 ε(t) 代入 h 表达式”；冲激响应的 δ 项和阶跃响应的特解容易混淆。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>阶跃响应 g(t) 是系统对 ε(t) 的零状态响应，与冲激响应互为微积分。</p>\n      <p><mark>自检问题：</mark>已知 g(t)=(1−e&lt;sup&gt;−2t&lt;/sup&gt;)ε(t)，求 h(t) 并判断系统是否稳定。</p>\n      <p><span class=\"hl-red\">易错点：</span>若 g(t) 在 t=0 有跳变，h(t) 中必含冲激；只对平滑段求导会漏项。</p>\n      <p><mark>迁移到题目时：</mark>阶跃响应 g(t) 满足非齐次方程，可能有常数或稳态特解，不能直接照抄 h 的形式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=8&amp;t=4\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 8 集 · 00:04，打开 Bilibili 对应讲解\">第 8 集 · 00:04 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "阶跃响应 g(t) 满足非齐次方程，可能有常数或稳态特解，不能直接照抄 h 的形式。"
      ],
      "extraFormulas": [],
      "finalPitfall": "若 g(t) 在 t=0 有跳变，h(t) 中必含冲激；只对平滑段求导会漏项。 g(t) 不是“把 ε(t) 代入 h 表达式”；冲激响应的 δ 项和阶跃响应的特解容易混淆。"
    },
    "s2-ex": {
      "concept": "\n      <p><mark>重点训练卷积分段、相关函数、零输入/零状态分解和阶跃响应反求冲激响应。</mark></p>\n      <p>先熟悉连续时间基本信号，再把任意输入拆成冲激的叠加，通过卷积得到零状态响应；同时用微分方程和初始条件处理零输入响应。</p>\n      <p>本节要解决的具体问题：本章哪类题最容易漏掉分段区间？把典型错题抄进对应小节笔记。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>卷积题先画支撑区间，再写分段积分限；不要一上来硬积。</li><li>零输入与零状态分开算，最后相加；检查初始条件与因果性。</li><li>答案页在教材 p.70–79，复盘时把错题映射回对应小节。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">完全响应</span>\n      <span class=\"formula\">y(t)=y<sub>zi</sub>(t)+y<sub>zs</sub>(t)</span>\n      <span class=\"formula-note\">线性系统响应分解。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点训练卷积分段、相关函数、零输入/零状态分解和阶跃响应反求冲激响应。</p>\n      <p><mark>自检问题：</mark>本章哪类题最容易漏掉分段区间？把典型错题抄进对应小节笔记。</p>\n      <p><span class=\"hl-red\">易错点：</span>卷积结果的长度、起点和分段临界点是最容易出错的地方，应画图核对。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "卷积结果的长度、起点和分段临界点是最容易出错的地方，应画图核对。"
    }
  },
  "ch3": {
    "s3-0": {
      "concept": "\n      <p><mark>从“信号由哪些频率成分组成”出发，建立傅里叶分析的总体框架。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么周期信号的频谱离散，而非周期信号通常连续？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>频域分析把信号表示成不同频率复指数或正弦分量的叠加。</li><li>周期信号用傅里叶级数得到离散谱；非周期信号用傅里叶变换得到连续谱。</li><li>系统在频域中表现为乘性加权：H(ω) 决定各频率分量的幅度和相位如何改变。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">本章主线</span>\n      <span class=\"formula\">信号分解 → 频谱 → 频域响应 → 采样与滤波</span>\n      <span class=\"formula-note\">四条主线彼此衔接。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>从“信号由哪些频率成分组成”出发，建立傅里叶分析的总体框架。</p>\n      <p><mark>自检问题：</mark>为什么周期信号的频谱离散，而非周期信号通常连续？</p>\n      <p><span class=\"hl-red\">易错点：</span>频域不是“只研究频率、不研究时间”；频谱本身仍完整描述原信号，只是换了一组坐标。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "频域不是“只研究频率、不研究时间”；频谱本身仍完整描述原信号，只是换了一组坐标。"
    },
    "s3-1-1": {
      "concept": "\n      <p><mark>用内积和投影把向量分解到正交基上，理解傅里叶系数的几何来源。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么正交基下的投影系数可以逐个独立计算？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=92\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 01:32，打开 Bilibili 对应讲解\">第 12 集 · 01:32 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>两个向量正交当且仅当内积为零；正交基之间互不“泄漏”。</li><li>向量在基方向上的投影系数等于内积除以基向量长度的平方。</li><li>完备正交基可以无误差表示空间中的任意向量；帕塞瓦尔关系说明能量守恒。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">投影系数</span>\n      <span class=\"formula\">c<sub>i</sub>=⟨x,e<sub>i</sub>⟩/⟨e<sub>i</sub>,e<sub>i</sub>⟩</span>\n      <span class=\"formula-note\">正交基下的最佳系数。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">帕塞瓦尔</span>\n      <span class=\"formula\">‖x‖²=Σ|c<sub>i</sub>|²‖e<sub>i</sub>‖²</span>\n      <span class=\"formula-note\">能量在正交基下分解。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用内积和投影把向量分解到正交基上，理解傅里叶系数的几何来源。</p>\n      <p><mark>自检问题：</mark>为什么正交基下的投影系数可以逐个独立计算？</p>\n      <p><span class=\"hl-red\">易错点：</span>内积中的共轭位置要与所用定义一致；复向量的投影系数通常需要共轭。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "内积中的共轭位置要与所用定义一致；复向量的投影系数通常需要共轭。"
    },
    "s3-1-2": {
      "concept": "\n      <p><mark>把函数看成无穷维向量，用正交函数族展开，最小化均方误差。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么截断傅里叶级数的均方误差随项数增加而单调减小？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=118\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 01:58，打开 Bilibili 对应讲解\">第 12 集 · 01:58 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>信号内积定义为 ∫f(t)g*(t)dt；正交即内积为零。</li><li>傅里叶系数是信号在基函数上的投影；截断展开在均方误差意义下最优。</li><li>完备正交基可表示任意平方可积信号，帕塞瓦尔关系连接时域能量与系数能量。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">信号内积</span>\n      <span class=\"formula\">⟨f,g⟩=∫<sub>T</sub>f(t)g*(t)dt</span>\n      <span class=\"formula-note\">周期信号在一个周期内积分。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">正交展开</span>\n      <span class=\"formula\">f(t)=Σc<sub>n</sub>φ<sub>n</sub>(t)</span>\n      <span class=\"formula-note\">c&lt;sub&gt;n&lt;/sub&gt;=⟨f,φ&lt;sub&gt;n&lt;/sub&gt;⟩/⟨φ&lt;sub&gt;n&lt;/sub&gt;,φ&lt;sub&gt;n&lt;/sub&gt;⟩。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把函数看成无穷维向量，用正交函数族展开，最小化均方误差。</p>\n      <p><mark>自检问题：</mark>为什么截断傅里叶级数的均方误差随项数增加而单调减小？</p>\n      <p><span class=\"hl-red\">易错点：</span>正交与线性无关不同：正交一定线性无关，但线性无关不一定正交。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "正交与线性无关不同：正交一定线性无关，但线性无关不一定正交。"
    },
    "s3-2-1": {
      "concept": "\n      <p><mark>周期信号分解为直流、基波和各次谐波余弦/正弦分量，得到单边频谱。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：周期矩形脉冲的三角级数中，哪些谐波为零？为什么？</p><p>傅里叶级数把周期信号拆成直流、基波和各次谐波；三角形式与复指数形式只是同一组频率分量在不同基下的表示。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=517\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 08:37，打开 Bilibili 对应讲解\">第 12 集 · 08:37 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>满足狄利克雷条件的周期信号可展开为三角级数，系数由正交性积分得到。</li><li>直流项为 a₀/2；n 次谐波频率为 nΩ，Ω=2π/T。</li><li>也可写成标准余弦形式，直接得到单边幅度谱 A<sub>n</sub> 和相位谱 φ<sub>n</sub>。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">三角级数</span>\n      <span class=\"formula\">f(t)=a₀/2+Σ<sub>n=1</sub><sup>∞</sup>[a<sub>n</sub>cos nΩt+b<sub>n</sub>sin nΩt]</span>\n      <span class=\"formula-note\">Ω=2π/T。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">系数</span>\n      <span class=\"formula\">a<sub>n</sub>=2/T∫<sub>T</sub>f(t)cos nΩt dt,&nbsp; b<sub>n</sub>=2/T∫<sub>T</sub>f(t)sin nΩt dt</span>\n      <span class=\"formula-note\">a₀ 的定义中通常不含系数 2。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>满足狄利克雷条件的周期信号可展开为三角级数；直流项为 A₀/2，基波角频率 Ω=2π/T。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=517\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 08:37，打开 Bilibili 对应讲解\">第 12 集 · 08:37 ↗</a></li><li>方波低次谐波决定主体，高次谐波修复陡边；截断时间断点仍有约 9% 的吉布斯过冲。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=1250\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 20:50，打开 Bilibili 对应讲解\">第 12 集 · 20:50 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">三角级数</span>\n          <span class=\"formula\">f(t)=A<sub>0</sub>/2+ΣA<sub>n</sub>cos(nΩt+φ<sub>n</sub>)</span>\n          <span class=\"formula-note\">第 12 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">系数</span>\n          <span class=\"formula\">F<sub>n</sub>=(1/T)∫<sub>T</sub>f(t)e<sup>−jnΩt</sup>dt</span>\n          <span class=\"formula-note\">第 12 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>正负频率不是两个物理振荡方向的简单相加；Fₙ 的共轭项合起来才对应实信号的余弦或正弦。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-00.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 00:00\"\n            aria-label=\"查看第 12 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-00.jpg\" alt=\"第 12 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-01.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 05:00\"\n            aria-label=\"查看第 12 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-01.jpg\" alt=\"第 12 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-02.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 10:00\"\n            aria-label=\"查看第 12 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-02.jpg\" alt=\"第 12 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-03.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 15:00\"\n            aria-label=\"查看第 12 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-03.jpg\" alt=\"第 12 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-04.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 20:00\"\n            aria-label=\"查看第 12 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-04.jpg\" alt=\"第 12 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-05.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 25:00\"\n            aria-label=\"查看第 12 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-05.jpg\" alt=\"第 12 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-06.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 30:00\"\n            aria-label=\"查看第 12 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-06.jpg\" alt=\"第 12 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-07.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 35:00\"\n            aria-label=\"查看第 12 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-07.jpg\" alt=\"第 12 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-08.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 40:00\"\n            aria-label=\"查看第 12 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-08.jpg\" alt=\"第 12 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-09.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 45:00\"\n            aria-label=\"查看第 12 集 · 45:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-09.jpg\" alt=\"第 12 集 · 45:00课堂板书截图\" loading=\"lazy\">\n            <span>45:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep12/frame-10.jpg\"\n            data-image-title=\"3.1 连续时间周期信号的傅里叶级数\"\n            data-image-label=\"第 12 集 · 50:00\"\n            aria-label=\"查看第 12 集 · 50:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep12/frame-10.jpg\" alt=\"第 12 集 · 50:00课堂板书截图\" loading=\"lazy\">\n            <span>50:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>周期信号分解为直流、基波和各次谐波余弦/正弦分量，得到单边频谱。</p>\n      <p><mark>自检问题：</mark>周期矩形脉冲的三角级数中，哪些谐波为零？为什么？</p>\n      <p><span class=\"hl-red\">易错点：</span>a₀ 项有时写成 a₀/2，有时直接把直流项记为 A₀；系数定义不同会导致倍率错误。</p>\n      <p><mark>迁移到题目时：</mark>偶信号只含直流与余弦，奇信号只含正弦；半波对称可让一半谐波为零。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=1492\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 24:52，打开 Bilibili 对应讲解\">第 12 集 · 24:52 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "满足狄利克雷条件的周期信号可展开为三角级数；直流项为 A₀/2，基波角频率 Ω=2π/T。",
        "方波低次谐波决定主体，高次谐波修复陡边；截断时间断点仍有约 9% 的吉布斯过冲。",
        "偶信号只含直流与余弦，奇信号只含正弦；半波对称可让一半谐波为零。"
      ],
      "extraFormulas": [
        {
          "label": "三角级数",
          "expr": "f(t)=A<sub>0</sub>/2+ΣA<sub>n</sub>cos(nΩt+φ<sub>n</sub>)",
          "note": "第 12 集讲解"
        },
        {
          "label": "系数",
          "expr": "F<sub>n</sub>=(1/T)∫<sub>T</sub>f(t)e<sup>−jnΩt</sup>dt",
          "note": "第 12 集讲解"
        }
      ],
      "finalPitfall": "a₀ 项有时写成 a₀/2，有时直接把直流项记为 A₀；系数定义不同会导致倍率错误。 正负频率不是两个物理振荡方向的简单相加；Fₙ 的共轭项合起来才对应实信号的余弦或正弦。"
    },
    "s3-2-2": {
      "concept": "\n      <p><mark>用复指数基表示周期信号，得到双边系数 F&lt;sub&gt;n&lt;/sub&gt;，为频谱和傅里叶变换铺路。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：实周期信号的 F&lt;sub&gt;n&lt;/sub&gt; 为什么满足共轭对称？</p><p>傅里叶级数把周期信号拆成直流、基波和各次谐波；三角形式与复指数形式只是同一组频率分量在不同基下的表示。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=95\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 01:35，打开 Bilibili 对应讲解\">第 12 集 · 01:35 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>指数级数把正负频率统一起来，数学形式最简洁，卷积和微分性质也更自然。</li><li>实信号的 F<sub>n</sub> 满足共轭对称：F<sub>−n</sub>=F<sub>n</sub>*。</li><li>三角系数与指数系数通过 F<sub>n</sub>=½(a<sub>n</sub>−jb<sub>n</sub>) 等关系互换。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">指数级数</span>\n      <span class=\"formula\">f(t)=Σ<sub>n=−∞</sub><sup>∞</sup>F<sub>n</sub>e<sup>jnΩt</sup></span>\n      <span class=\"formula-note\">n 取全体整数。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">系数</span>\n      <span class=\"formula\">F<sub>n</sub>=(1/T)∫<sub>T</sub>f(t)e<sup>−jnΩt</sup>dt</span>\n      <span class=\"formula-note\">一个周期内积分。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>复指数形式把 n 扩展到负整数，Fₙ=(1/T)∫_T f(t)e^{−jnΩt}dt。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=95\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 01:35，打开 Bilibili 对应讲解\">第 12 集 · 01:35 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">指数级数</span>\n          <span class=\"formula\">f(t)=ΣF<sub>n</sub>e<sup>jnΩt</sup></span>\n          <span class=\"formula-note\">第 12 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>正负频率不是两个物理振荡方向的简单相加；Fₙ 的共轭项合起来才对应实信号的余弦或正弦。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用复指数基表示周期信号，得到双边系数 F&lt;sub&gt;n&lt;/sub&gt;，为频谱和傅里叶变换铺路。</p>\n      <p><mark>自检问题：</mark>实周期信号的 F&lt;sub&gt;n&lt;/sub&gt; 为什么满足共轭对称？</p>\n      <p><span class=\"hl-red\">易错点：</span>指数级数中负频率不是“负的物理频率”，而是复指数分解的数学共轭分量。</p>\n      <p><mark>迁移到题目时：</mark>实信号的复系数共轭对称：F₋ₙ=Fₙ*，因此正负频率项成对合成实际正频率分量。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=12&amp;t=2334\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 12 集 · 38:54，打开 Bilibili 对应讲解\">第 12 集 · 38:54 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "复指数形式把 n 扩展到负整数，Fₙ=(1/T)∫_T f(t)e^{−jnΩt}dt。",
        "实信号的复系数共轭对称：F₋ₙ=Fₙ*，因此正负频率项成对合成实际正频率分量。"
      ],
      "extraFormulas": [
        {
          "label": "指数级数",
          "expr": "f(t)=ΣF<sub>n</sub>e<sup>jnΩt</sup>",
          "note": "第 12 集讲解"
        }
      ],
      "finalPitfall": "指数级数中负频率不是“负的物理频率”，而是复指数分解的数学共轭分量。 正负频率不是两个物理振荡方向的简单相加；Fₙ 的共轭项合起来才对应实信号的余弦或正弦。"
    },
    "s3-3-1": {
      "concept": "\n      <p><mark>用幅度谱、相位谱描述各次谐波，区分单边谱与双边谱。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：单边谱中某谐波幅度为 4，相位为 30°；双边谱对应两条谱线如何写？</p><p>频谱是“每个频率分量的幅度与相位”；单边谱、双边谱和功率谱必须连同作图规范一起掌握。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=10\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 00:10，打开 Bilibili 对应讲解\">第 13 集 · 00:10 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>单边谱只画正频率，幅度为 A<sub>n</sub>；双边谱画正负频率，幅度为 |F<sub>n</sub>|。</li><li>除直流外，单边幅度是双边幅度的 2 倍：A<sub>n</sub>=2|F<sub>n</sub>|。</li><li>相位谱也需对应换算：双边相位关于纵轴奇对称，单边只保留正频率相位。</li><li>画单边谱前必须把所有谐波整理成 A<sub>n</sub>cos(nΩt+φ<sub>n</sub>) 的标准形式，且各分量为相加；正弦和负余弦先改写成正余弦。</li><li>若复指数系数 F<sub>n</sub> 是非零实数，|F<sub>n</sub>| 谱线本身的正负号即可表示相位：正系数相位为 0，负系数相位为 π。</li><li>求基波前先由各余弦、正弦分量的周期求信号周期 T，再令 Ω=2π/T；第 n 次谐波满足 n=ω<sub>n</sub>/Ω。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单双边关系</span>\n      <span class=\"formula\">|F<sub>n</sub>|=A<sub>n</sub>/2&nbsp;(n≠0),&nbsp; F₀=A₀/2</span>\n      <span class=\"formula-note\">直流不翻倍。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">谱线间隔</span>\n      <span class=\"formula\">Δω=Ω=2π/T</span>\n      <span class=\"formula-note\">由周期决定。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">系数与相位</span>\n      <span class=\"formula\">F<sub>n</sub>=½A<sub>n</sub>e<sup>jφ<sub>n</sub></sup></span>\n      <span class=\"formula-note\">实信号的幅度谱为偶函数，相位谱为奇函数。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>单边谱对应三角级数，双边谱对应指数级数；除直流外双边幅度是单边的一半，相位作奇对称。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=10\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 00:10，打开 Bilibili 对应讲解\">第 13 集 · 00:10 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单双边幅度</span>\n          <span class=\"formula\">|F<sub>n</sub>|=A<sub>n</sub>/2 (n≠0)</span>\n          <span class=\"formula-note\">第 13 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>直流不遵循谐波减半规则；把 −cos 或 sin 直接当标准余弦读相位，是最常见的作图错误。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用幅度谱、相位谱描述各次谐波，区分单边谱与双边谱。</p>\n      <p><mark>自检问题：</mark>单边谱中某谐波幅度为 4，相位为 30°；双边谱对应两条谱线如何写？</p>\n      <p><span class=\"hl-red\">易错点：</span>直流分量在单双边谱中不遵循“减半”规则；另外，未化成余弦相加的标准形式就直接读相位，是最常见的作图错误。</p>\n      <p><mark>迁移到题目时：</mark>画单边谱前必须把各分量整理成 Aₙcos(nΩt+φₙ) 的标准余弦形式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=377\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 06:17，打开 Bilibili 对应讲解\">第 13 集 · 06:17 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "单边谱对应三角级数，双边谱对应指数级数；除直流外双边幅度是单边的一半，相位作奇对称。",
        "画单边谱前必须把各分量整理成 Aₙcos(nΩt+φₙ) 的标准余弦形式。"
      ],
      "extraFormulas": [
        {
          "label": "单双边幅度",
          "expr": "|F<sub>n</sub>|=A<sub>n</sub>/2 (n≠0)",
          "note": "第 13 集讲解"
        }
      ],
      "finalPitfall": "直流分量在单双边谱中不遵循“减半”规则；另外，未化成余弦相加的标准形式就直接读相位，是最常见的作图错误。 直流不遵循谐波减半规则；把 −cos 或 sin 直接当标准余弦读相位，是最常见的作图错误。"
    },
    "s3-3-2": {
      "concept": "\n      <p><mark>掌握离散性、谐波性、收敛性，以及周期矩形脉冲的 Sa 包络和带宽。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：T=10 ms、τ=2 ms 的周期矩形脉冲，谱线间隔和有效带宽分别是多少？</p><p>频谱是“每个频率分量的幅度与相位”；单边谱、双边谱和功率谱必须连同作图规范一起掌握。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 00:00，打开 Bilibili 对应讲解\">第 13 集 · 00:00 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>离散性：谱线只出现在 nΩ；谐波性：频率必须是基波整数倍；收敛性：n→∞ 时幅度趋于 0。</li><li>周期矩形脉冲的谱线包络为 Sa 函数，零点位置由脉宽 τ 决定。</li><li>有效带宽通常取第一过零点：B<sub>ω</sub>=2π/τ，B<sub>f</sub>=1/τ；周期决定谱线间隔，脉宽决定带宽。</li><li>第一零点满足 nΩτ/2=mπ。当 T=3τ 时，零点落在 ±3Ω、±6Ω 等位置，因此相邻零点之间相隔 3 个谱线间隔。</li><li>周期 T 不变而脉宽 τ 变窄：谱线间隔不变、包络展宽、第一零点外推、各谱线幅度降低；τ 不变而 T 增大：谱线变密且幅度降低，包络和有效带宽不变。</li><li>取第一过零点作带宽，是因为其内集中了大部分谐波能量；脉宽越窄，信号变化越快，但传输所需带宽也越大。</li><li>当 T→∞ 时，Ω→0，谱线无限密集且 F<sub>n</sub>→0；此时不能继续用离散系数 F<sub>n</sub> 描述频谱，必须转向频谱密度和傅里叶变换。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">矩形脉冲系数</span>\n      <span class=\"formula\">F<sub>n</sub>=(τ/T)Sa(nΩτ/2)</span>\n      <span class=\"formula-note\">τ 为脉宽，T 为周期。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">第一零点</span>\n      <span class=\"formula\">nΩ=2π/τ ⇒ B<sub>ω</sub>=2π/τ</span>\n      <span class=\"formula-note\">有效带宽由脉宽决定。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">两种频率表示</span>\n      <span class=\"formula\">B<sub>ω</sub>=2π/τ (rad/s)，B<sub>f</sub>=1/τ (Hz)</span>\n      <span class=\"formula-note\">频率表示与角频率表示相差 2π。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>傅里叶级数只允许 nΩ 这些离散频率，所以周期信号的频谱必为离散谱；T 决定谱线间隔，τ 在矩形脉冲中决定包络带宽。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 00:00，打开 Bilibili 对应讲解\">第 13 集 · 00:00 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">矩形脉冲频谱</span>\n          <span class=\"formula\">F<sub>n</sub>=(τ/T)Sa(nΩτ/2)</span>\n          <span class=\"formula-note\">第 13 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>直流不遵循谐波减半规则；把 −cos 或 sin 直接当标准余弦读相位，是最常见的作图错误。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-00.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 00:00\"\n            aria-label=\"查看第 13 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-00.jpg\" alt=\"第 13 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-01.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 05:00\"\n            aria-label=\"查看第 13 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-01.jpg\" alt=\"第 13 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-02.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 10:00\"\n            aria-label=\"查看第 13 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-02.jpg\" alt=\"第 13 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-03.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 15:00\"\n            aria-label=\"查看第 13 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-03.jpg\" alt=\"第 13 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-04.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 20:00\"\n            aria-label=\"查看第 13 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-04.jpg\" alt=\"第 13 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-05.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 25:00\"\n            aria-label=\"查看第 13 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-05.jpg\" alt=\"第 13 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-06.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 30:00\"\n            aria-label=\"查看第 13 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-06.jpg\" alt=\"第 13 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-07.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 35:00\"\n            aria-label=\"查看第 13 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-07.jpg\" alt=\"第 13 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-08.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 40:00\"\n            aria-label=\"查看第 13 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-08.jpg\" alt=\"第 13 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep13/frame-09.jpg\"\n            data-image-title=\"3.2 连续时间周期信号的频谱分析\"\n            data-image-label=\"第 13 集 · 45:00\"\n            aria-label=\"查看第 13 集 · 45:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep13/frame-09.jpg\" alt=\"第 13 集 · 45:00课堂板书截图\" loading=\"lazy\">\n            <span>45:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握离散性、谐波性、收敛性，以及周期矩形脉冲的 Sa 包络和带宽。</p>\n      <p><mark>自检问题：</mark>T=10 ms、τ=2 ms 的周期矩形脉冲，谱线间隔和有效带宽分别是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>T 变大只让谱线更密并降低各谱线幅度，不改变 Sa 包络的第一零点；τ 变小才让有效带宽变宽。</p>\n      <p><mark>迁移到题目时：</mark>周期矩形脉冲 Fₙ=(τ/T)Sa(nΩτ/2)，零点满足 nΩτ/2=mπ；有效带宽取 Bω=2π/τ。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=1620\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 27:00，打开 Bilibili 对应讲解\">第 13 集 · 27:00 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "傅里叶级数只允许 nΩ 这些离散频率，所以周期信号的频谱必为离散谱；T 决定谱线间隔，τ 在矩形脉冲中决定包络带宽。",
        "周期矩形脉冲 Fₙ=(τ/T)Sa(nΩτ/2)，零点满足 nΩτ/2=mπ；有效带宽取 Bω=2π/τ。"
      ],
      "extraFormulas": [
        {
          "label": "矩形脉冲频谱",
          "expr": "F<sub>n</sub>=(τ/T)Sa(nΩτ/2)",
          "note": "第 13 集讲解"
        }
      ],
      "finalPitfall": "T 变大只让谱线更密并降低各谱线幅度，不改变 Sa 包络的第一零点；τ 变小才让有效带宽变宽。 直流不遵循谐波减半规则；把 −cos 或 sin 直接当标准余弦读相位，是最常见的作图错误。"
    },
    "s3-3-3": {
      "concept": "\n      <p><mark>用帕塞瓦尔恒等式把周期信号平均功率表示为各谐波功率之和。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：F₀=2，F&lt;sub&gt;±1&lt;/sub&gt;=1，其余为 0，求平均功率。</p><p>频谱是“每个频率分量的幅度与相位”；单边谱、双边谱和功率谱必须连同作图规范一起掌握。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=2312\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 38:32，打开 Bilibili 对应讲解\">第 13 集 · 38:32 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>周期信号是功率信号，平均功率可在时域一个周期内计算。</li><li>频域中总功率等于各次谐波功率之和，体现能量守恒。</li><li>功率谱通常画 |F<sub>n</sub>|² 随离散频率 nΩ 的分布；谱线高度表示该复指数分量的平均功率。</li><li>双边谱中正、负频率成对出现但功率不能重复记两次；指数形式直接累加所有 n 的 |F<sub>n</sub>|²，三角形式则直流取 (A₀/2)²、每个正频率谐波取 A<sub>n</sub>²/2。</li><li>由双边谱写三角级数时，先合并 F<sub>n</sub>e<sup>jnΩt</sup> 与共轭项，再用欧拉公式；合并后的余弦幅度是 |F<sub>n</sub>| 的 2 倍。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">帕塞瓦尔</span>\n      <span class=\"formula\">P=Σ<sub>n=−∞</sub><sup>∞</sup>|F<sub>n</sub>|²</span>\n      <span class=\"formula-note\">双边系数。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">三角形式</span>\n      <span class=\"formula\">P=A₀²/4+Σ<sub>n=1</sub><sup>∞</sup>A<sub>n</sub>²/2</span>\n      <span class=\"formula-note\">与上式等价。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">余弦合并</span>\n      <span class=\"formula\">F<sub>n</sub>e<sup>jnΩt</sup>+F<sub>−n</sub>e<sup>−jnΩt</sup>=2|F<sub>n</sub>|cos(nΩt+φ<sub>n</sub>)</span>\n      <span class=\"formula-note\">实信号满足 F&lt;sub&gt;−n&lt;/sub&gt;=F&lt;sub&gt;n&lt;/sub&gt;*。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">帕塞瓦尔</span>\n          <span class=\"formula\">P=Σ<sub>n</sub>|F<sub>n</sub>|²</span>\n          <span class=\"formula-note\">第 13 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>直流不遵循谐波减半规则；把 −cos 或 sin 直接当标准余弦读相位，是最常见的作图错误。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用帕塞瓦尔恒等式把周期信号平均功率表示为各谐波功率之和。</p>\n      <p><mark>自检问题：</mark>F₀=2，F&lt;sub&gt;±1&lt;/sub&gt;=1，其余为 0，求平均功率。</p>\n      <p><span class=\"hl-red\">易错点：</span>正弦分量的平均功率是 A²/2，不是 A²；直流的功率是 A₀²/4（在 a₀/2 记法下）。从双边谱读功率时也不要漏掉负频率处的 |Fₙ|²。</p>\n      <p><mark>迁移到题目时：</mark>周期信号的平均功率可用帕塞瓦尔关系 P=Σ|Fₙ|²；从双边谱读三角幅值时要合并共轭项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=13&amp;t=2312\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 13 集 · 38:32，打开 Bilibili 对应讲解\">第 13 集 · 38:32 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "周期信号的平均功率可用帕塞瓦尔关系 P=Σ|Fₙ|²；从双边谱读三角幅值时要合并共轭项。"
      ],
      "extraFormulas": [
        {
          "label": "帕塞瓦尔",
          "expr": "P=Σ<sub>n</sub>|F<sub>n</sub>|²",
          "note": "第 13 集讲解"
        }
      ],
      "finalPitfall": "正弦分量的平均功率是 A²/2，不是 A²；直流的功率是 A₀²/4（在 a₀/2 记法下）。从双边谱读功率时也不要漏掉负频率处的 |Fₙ|²。 直流不遵循谐波减半规则；把 −cos 或 sin 直接当标准余弦读相位，是最常见的作图错误。"
    },
    "s3-4-1": {
      "concept": "\n      <p><mark>令周期趋于无穷，傅里叶级数过渡为傅里叶变换，得到非周期信号的连续频谱。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么周期信号的傅里叶系数 F&lt;sub&gt;n&lt;/sub&gt; 在 T→∞ 时趋于 0，却仍能描述信号？</p><p>傅里叶变换把周期极限下的离散谱变成频谱密度；F(jΩ) 描述单位频率上的复幅度，不再是一根根谱线的高度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=25\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 00:25，打开 Bilibili 对应讲解\">第 14 集 · 00:25 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>周期 T→∞ 时，谱线间隔趋于 0，离散谱变为连续谱，系数 F<sub>n</sub> 趋于无穷小。</li><li>为保留有限信息，引入频谱密度 F(ω)，其定义为信号的傅里叶变换。</li><li>傅里叶变换存在需要绝对可积等条件；广义函数可扩展其适用范围。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">正变换</span>\n      <span class=\"formula\">F(ω)=∫<sub>−∞</sub><sup>∞</sup>f(t)e<sup>−jωt</sup>dt</span>\n      <span class=\"formula-note\">频谱密度。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">逆变换</span>\n      <span class=\"formula\">f(t)=(1/2π)∫<sub>−∞</sub><sup>∞</sup>F(ω)e<sup>jωt</sup>dω</span>\n      <span class=\"formula-note\">连续频率叠加。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>T→∞ 时谱线间隔 Ω→0、谱线无限密集，同时 Fₙ→0，必须引入频谱密度 F(jΩ)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=25\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 00:25，打开 Bilibili 对应讲解\">第 14 集 · 00:25 ↗</a></li><li>逆变换中的 1/(2π) 是定义的一部分；F(0)=∫f(t)dt，f(0)=(1/2π)∫F(jΩ)dΩ。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=524\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 08:44，打开 Bilibili 对应讲解\">第 14 集 · 08:44 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">正变换</span>\n          <span class=\"formula\">F(jΩ)=∫f(t)e<sup>−jΩt</sup>dt</span>\n          <span class=\"formula-note\">第 14 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">逆变换</span>\n          <span class=\"formula\">f(t)=(1/2π)∫F(jΩ)e<sup>jΩt</sup>dΩ</span>\n          <span class=\"formula-note\">第 14 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">门脉冲</span>\n          <span class=\"formula\">g<sub>τ</sub>(t) ↔ τSa(Ωτ/2)</span>\n          <span class=\"formula-note\">第 14 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>频谱密度的单位与信号本身不同；连续谱不能按离散谱线的“高度”直接比较。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-00.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 00:00\"\n            aria-label=\"查看第 14 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-00.jpg\" alt=\"第 14 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-01.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 05:00\"\n            aria-label=\"查看第 14 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-01.jpg\" alt=\"第 14 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-02.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 10:00\"\n            aria-label=\"查看第 14 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-02.jpg\" alt=\"第 14 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-03.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 15:00\"\n            aria-label=\"查看第 14 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-03.jpg\" alt=\"第 14 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-04.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 20:00\"\n            aria-label=\"查看第 14 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-04.jpg\" alt=\"第 14 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-05.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 25:00\"\n            aria-label=\"查看第 14 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-05.jpg\" alt=\"第 14 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-06.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 30:00\"\n            aria-label=\"查看第 14 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-06.jpg\" alt=\"第 14 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep14/frame-07.jpg\"\n            data-image-title=\"3.3 连续时间信号的傅里叶变换\"\n            data-image-label=\"第 14 集 · 35:00\"\n            aria-label=\"查看第 14 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep14/frame-07.jpg\" alt=\"第 14 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>令周期趋于无穷，傅里叶级数过渡为傅里叶变换，得到非周期信号的连续频谱。</p>\n      <p><mark>自检问题：</mark>为什么周期信号的傅里叶系数 F&lt;sub&gt;n&lt;/sub&gt; 在 T→∞ 时趋于 0，却仍能描述信号？</p>\n      <p><span class=\"hl-red\">易错点：</span>F(ω) 的量纲是“幅度/频率”，不是普通幅度；连续谱不能直接当作离散谱线高度来读。</p>\n      <p><mark>迁移到题目时：</mark>绝对可积是普通傅里叶变换存在的充分条件，不是必要条件；奇异信号常借助广义函数处理。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=539\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 08:59，打开 Bilibili 对应讲解\">第 14 集 · 08:59 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "T→∞ 时谱线间隔 Ω→0、谱线无限密集，同时 Fₙ→0，必须引入频谱密度 F(jΩ)。",
        "逆变换中的 1/(2π) 是定义的一部分；F(0)=∫f(t)dt，f(0)=(1/2π)∫F(jΩ)dΩ。",
        "绝对可积是普通傅里叶变换存在的充分条件，不是必要条件；奇异信号常借助广义函数处理。"
      ],
      "extraFormulas": [
        {
          "label": "正变换",
          "expr": "F(jΩ)=∫f(t)e<sup>−jΩt</sup>dt",
          "note": "第 14 集讲解"
        },
        {
          "label": "逆变换",
          "expr": "f(t)=(1/2π)∫F(jΩ)e<sup>jΩt</sup>dΩ",
          "note": "第 14 集讲解"
        },
        {
          "label": "门脉冲",
          "expr": "g<sub>τ</sub>(t) ↔ τSa(Ωτ/2)",
          "note": "第 14 集讲解"
        }
      ],
      "finalPitfall": "F(ω) 的量纲是“幅度/频率”，不是普通幅度；连续谱不能直接当作离散谱线高度来读。 频谱密度的单位与信号本身不同；连续谱不能按离散谱线的“高度”直接比较。"
    },
    "s3-4-2": {
      "concept": "\n      <p><mark>从幅度谱与相位谱理解非周期信号的频域结构，掌握频谱函数的对称性。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：实偶信号的傅里叶变换为什么是实偶函数？</p><p>傅里叶变换把周期极限下的离散谱变成频谱密度；F(jΩ) 描述单位频率上的复幅度，不再是一根根谱线的高度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=57\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 00:57，打开 Bilibili 对应讲解\">第 14 集 · 00:57 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>F(ω)=|F(ω)|e<sup>jφ(ω)</sup>，幅度谱为偶函数、相位谱为奇函数（实信号）。</li><li>非周期信号频谱连续，通常不能只用有限根谱线表示。</li><li>频谱的集中程度对应带宽；时域越窄，频域越宽。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">幅度相位</span>\n      <span class=\"formula\">F(ω)=|F(ω)|e<sup>jφ(ω)</sup></span>\n      <span class=\"formula-note\">复频谱的极坐标表示。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">实信号对称性</span>\n      <span class=\"formula\">|F(−ω)|=|F(ω)|,&nbsp; φ(−ω)=−φ(ω)</span>\n      <span class=\"formula-note\">共轭对称。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>频谱密度的单位与信号本身不同；连续谱不能按离散谱线的“高度”直接比较。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>从幅度谱与相位谱理解非周期信号的频域结构，掌握频谱函数的对称性。</p>\n      <p><mark>自检问题：</mark>实偶信号的傅里叶变换为什么是实偶函数？</p>\n      <p><span class=\"hl-red\">易错点：</span>相位谱的跳变可能来自 ±π 分支，不一定是物理相位突变；画图时需注意主值范围。</p>\n      <p><mark>迁移到题目时：</mark>实信号满足共轭对称，实部偶、虚部奇、幅度偶、相位奇；实偶函数的频谱也实偶。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=57\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 00:57，打开 Bilibili 对应讲解\">第 14 集 · 00:57 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "实信号满足共轭对称，实部偶、虚部奇、幅度偶、相位奇；实偶函数的频谱也实偶。"
      ],
      "extraFormulas": [],
      "finalPitfall": "相位谱的跳变可能来自 ±π 分支，不一定是物理相位突变；画图时需注意主值范围。 频谱密度的单位与信号本身不同；连续谱不能按离散谱线的“高度”直接比较。"
    },
    "s3-4-3": {
      "concept": "\n      <p><mark>熟记门、冲激、常数、复指数、正弦、阶跃和单边指数等基本变换对。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：写出 cos(ω₀t) 的傅里叶变换，并解释正负频率冲激的来源。</p><p>傅里叶变换把周期极限下的离散谱变成频谱密度；F(jΩ) 描述单位频率上的复幅度，不再是一根根谱线的高度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=1435\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 23:55，打开 Bilibili 对应讲解\">第 14 集 · 23:55 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>门信号 ↔ Sa 型频谱；冲激 ↔ 常数；常数 ↔ 冲激频谱（乘 2π）。</li><li>复指数 ↔ 频移冲激；正弦/余弦 ↔ 一对共轭冲激。</li><li>单边指数 e<sup>−at</sup>ε(t) ↔ 1/(a+jω)，是系统分析中最常用的变换对之一。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">门信号</span>\n      <span class=\"formula\">G<sub>τ</sub>(t) ↔ τSa(ωτ/2)</span>\n      <span class=\"formula-note\">矩形脉冲的频谱包络。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">冲激</span>\n      <span class=\"formula\">δ(t) ↔ 1,&nbsp; 1 ↔ 2πδ(ω)</span>\n      <span class=\"formula-note\">时频对偶。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单边指数</span>\n      <span class=\"formula\">e<sup>−at</sup>ε(t) ↔ 1/(a+jω),&nbsp; a>0</span>\n      <span class=\"formula-note\">常见低通型频谱。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>频谱密度的单位与信号本身不同；连续谱不能按离散谱线的“高度”直接比较。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>熟记门、冲激、常数、复指数、正弦、阶跃和单边指数等基本变换对。</p>\n      <p><mark>自检问题：</mark>写出 cos(ω₀t) 的傅里叶变换，并解释正负频率冲激的来源。</p>\n      <p><span class=\"hl-red\">易错点：</span>常数 1 的变换是 2πδ(ω)，不是 δ(ω)；系数 2π 是傅里叶变换定义带来的。</p>\n      <p><mark>迁移到题目时：</mark>常见对：门脉冲 ↔ τSa(Ωτ/2)，单边指数 ↔ 1/(α+jΩ)，偶双边指数 ↔ 2α/(α²+Ω²)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=14&amp;t=1435\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 14 集 · 23:55，打开 Bilibili 对应讲解\">第 14 集 · 23:55 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "常见对：门脉冲 ↔ τSa(Ωτ/2)，单边指数 ↔ 1/(α+jΩ)，偶双边指数 ↔ 2α/(α²+Ω²)。"
      ],
      "extraFormulas": [],
      "finalPitfall": "常数 1 的变换是 2πδ(ω)，不是 δ(ω)；系数 2π 是傅里叶变换定义带来的。 频谱密度的单位与信号本身不同；连续谱不能按离散谱线的“高度”直接比较。"
    },
    "s3-5": {
      "concept": "\n      <p><mark>系统掌握线性、时移、频移、尺度、卷积、微分、积分、对偶和帕塞瓦尔性质。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：已知 f(t) ↔ F(ω)，写出 f(2t−4) 的频谱，并说明每一步用了什么性质。</p><p>傅里叶性质是时域操作与频域操作的双向词典，先识别“平移、尺度、共轭、乘除”再选公式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=15&amp;t=21\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 15 集 · 00:21，打开 Bilibili 对应讲解\">第 15 集 · 00:21 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>时移只改变相位，不改变幅度；频移把频谱整体搬移，对应时域乘复指数。</li><li>时域卷积对应频域乘法，时域乘法对应频域卷积（带 1/2π 系数）。</li><li>尺度变换体现时宽—带宽反比：时域压缩，频域扩展且幅度缩小。</li><li>微分乘 jω，积分除 jω 并可能附加冲激项；对偶性可把已知变换对翻转使用。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">时移</span>\n      <span class=\"formula\">f(t−t₀) ↔ F(ω)e<sup>−jωt₀</sup></span>\n      <span class=\"formula-note\">只改变相位。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频移</span>\n      <span class=\"formula\">f(t)e<sup>jω₀t</sup> ↔ F(ω−ω₀)</span>\n      <span class=\"formula-note\">调制与搬移频谱。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">卷积</span>\n      <span class=\"formula\">f(t)*h(t) ↔ F(ω)H(ω)</span>\n      <span class=\"formula-note\">频域乘法。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">尺度</span>\n      <span class=\"formula\">f(at) ↔ (1/|a|)F(ω/a)</span>\n      <span class=\"formula-note\">a≠0。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>时移只改变相位，尺度改变频谱宽度并乘 1/|a|；时间翻转会使频率翻转。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=15&amp;t=12\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 15 集 · 00:12，打开 Bilibili 对应讲解\">第 15 集 · 00:12 ↗</a></li><li>频移对应时域乘复指数，是调制和频谱搬移的基本操作。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=15&amp;t=12\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 15 集 · 00:12，打开 Bilibili 对应讲解\">第 15 集 · 00:12 ↗</a></li><li>时间反转、奇偶分解和频谱共轭结合使用，常能把陌生变换对化成熟知变换对。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=15&amp;t=12\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 15 集 · 00:12，打开 Bilibili 对应讲解\">第 15 集 · 00:12 ↗</a></li><li>线性性质允许分解复杂信号；实信号的频谱满足共轭对称，因此正负频率处的信息成对出现。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=15&amp;t=21\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 15 集 · 00:21，打开 Bilibili 对应讲解\">第 15 集 · 00:21 ↗</a></li><li>时域卷积对应频域相乘；时域相乘对应频域卷积，并带 1/(2π) 系数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=15&amp;t=922\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 15 集 · 15:22，打开 Bilibili 对应讲解\">第 15 集 · 15:22 ↗</a></li><li>尺度、时移、频移、时域微积分组合时，必须把频率变量、相位和冲激修正一起改写。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=16&amp;t=15\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 16 集 · 00:15，打开 Bilibili 对应讲解\">第 16 集 · 00:15 ↗</a></li><li>时域门脉冲的频谱是 Sa，利用对偶可把 Sa 的频域形状反推到时域。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=16&amp;t=32\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 16 集 · 00:32，打开 Bilibili 对应讲解\">第 16 集 · 00:32 ↗</a></li><li>使用卷积定理时，等式两边要统一定义；很多错误来自把 2π 放在正变换还是反变换。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=16&amp;t=252\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 16 集 · 04:12，打开 Bilibili 对应讲解\">第 16 集 · 04:12 ↗</a></li><li>时域卷积对应频域乘法，是 LTI 系统频域分析的核心；时域乘法对应频域卷积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=16&amp;t=620\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 16 集 · 10:20，打开 Bilibili 对应讲解\">第 16 集 · 10:20 ↗</a></li><li>时域积分通常对应除以 jΩ，但全轴积分非零时会附加冲激项 πF(0)δ(Ω)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=16&amp;t=968\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 16 集 · 16:08，打开 Bilibili 对应讲解\">第 16 集 · 16:08 ↗</a></li><li>时域乘 t 对应频谱对频率求导并乘 j；频域求导对应时域乘 −jt。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=17&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 17 集 · 00:00，打开 Bilibili 对应讲解\">第 17 集 · 00:00 ↗</a></li><li>先判断信号奇偶、连续性和边界值，再选频率微分/积分性质，往往比硬积分省时。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=17&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 17 集 · 00:00，打开 Bilibili 对应讲解\">第 17 集 · 00:00 ↗</a></li><li>时域除以 t 与频域积分相关，但边界和 1/(2π) 系数不能漏；f(0) 可由频域积分快速求。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=17&amp;t=857\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 17 集 · 14:17，打开 Bilibili 对应讲解\">第 17 集 · 14:17 ↗</a></li><li>能量信号满足帕塞瓦尔：时域总能量等于 (1/2π)∫|F(jΩ)|²dΩ。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=17&amp;t=881\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 17 集 · 14:41，打开 Bilibili 对应讲解\">第 17 集 · 14:41 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">时移</span>\n          <span class=\"formula\">f(t−t₀) ↔ F(jΩ)e<sup>−jΩt₀</sup></span>\n          <span class=\"formula-note\">第 15 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">尺度</span>\n          <span class=\"formula\">f(at) ↔ F(jΩ/a)/|a|</span>\n          <span class=\"formula-note\">第 15 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">频移</span>\n          <span class=\"formula\">f(t)e<sup>jΩ₀t</sup> ↔ F[j(Ω−Ω₀)]</span>\n          <span class=\"formula-note\">第 15 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">对偶</span>\n          <span class=\"formula\">若 f(t)↔F(jΩ)，则 F(jt)↔2πf(−Ω)</span>\n          <span class=\"formula-note\">第 16 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积定理</span>\n          <span class=\"formula\">f(t)*g(t) ↔ F(jΩ)G(jΩ)</span>\n          <span class=\"formula-note\">第 16 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">积分修正</span>\n          <span class=\"formula\">∫<sub>−∞</sub><sup>t</sup>f(τ)dτ ↔ F(jΩ)/(jΩ)+πF(0)δ(Ω)</span>\n          <span class=\"formula-note\">第 16 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">频率微分</span>\n          <span class=\"formula\">−jt f(t) ↔ dF(jΩ)/dΩ</span>\n          <span class=\"formula-note\">第 17 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">帕塞瓦尔</span>\n          <span class=\"formula\">E=(1/2π)∫|F(jΩ)|²dΩ</span>\n          <span class=\"formula-note\">第 17 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">中心值</span>\n          <span class=\"formula\">f(0)=(1/2π)∫F(jΩ)dΩ</span>\n          <span class=\"formula-note\">第 17 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>尺度因子必须取绝对值；时域乘法的频域卷积前不要漏 1/(2π)。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-00.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 00:00\"\n            aria-label=\"查看第 15 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-00.jpg\" alt=\"第 15 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-01.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 05:00\"\n            aria-label=\"查看第 15 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-01.jpg\" alt=\"第 15 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-02.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 10:00\"\n            aria-label=\"查看第 15 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-02.jpg\" alt=\"第 15 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-03.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 15:00\"\n            aria-label=\"查看第 15 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-03.jpg\" alt=\"第 15 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-04.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 20:00\"\n            aria-label=\"查看第 15 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-04.jpg\" alt=\"第 15 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-05.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 25:00\"\n            aria-label=\"查看第 15 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-05.jpg\" alt=\"第 15 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-06.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 30:00\"\n            aria-label=\"查看第 15 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-06.jpg\" alt=\"第 15 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep15/frame-07.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质I\"\n            data-image-label=\"第 15 集 · 35:00\"\n            aria-label=\"查看第 15 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep15/frame-07.jpg\" alt=\"第 15 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-00.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 00:00\"\n            aria-label=\"查看第 16 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-00.jpg\" alt=\"第 16 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-01.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 05:00\"\n            aria-label=\"查看第 16 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-01.jpg\" alt=\"第 16 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-02.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 10:00\"\n            aria-label=\"查看第 16 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-02.jpg\" alt=\"第 16 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-03.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 15:00\"\n            aria-label=\"查看第 16 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-03.jpg\" alt=\"第 16 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-04.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 20:00\"\n            aria-label=\"查看第 16 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-04.jpg\" alt=\"第 16 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-05.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 25:00\"\n            aria-label=\"查看第 16 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-05.jpg\" alt=\"第 16 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-06.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 30:00\"\n            aria-label=\"查看第 16 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-06.jpg\" alt=\"第 16 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-07.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 35:00\"\n            aria-label=\"查看第 16 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-07.jpg\" alt=\"第 16 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep16/frame-08.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质II\"\n            data-image-label=\"第 16 集 · 40:00\"\n            aria-label=\"查看第 16 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep16/frame-08.jpg\" alt=\"第 16 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-00.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 00:00\"\n            aria-label=\"查看第 17 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-00.jpg\" alt=\"第 17 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-01.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 05:00\"\n            aria-label=\"查看第 17 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-01.jpg\" alt=\"第 17 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-02.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 10:00\"\n            aria-label=\"查看第 17 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-02.jpg\" alt=\"第 17 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-03.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 15:00\"\n            aria-label=\"查看第 17 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-03.jpg\" alt=\"第 17 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-04.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 20:00\"\n            aria-label=\"查看第 17 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-04.jpg\" alt=\"第 17 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-05.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 25:00\"\n            aria-label=\"查看第 17 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-05.jpg\" alt=\"第 17 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep17/frame-06.jpg\"\n            data-image-title=\"3.4 傅里叶变换的性质III\"\n            data-image-label=\"第 17 集 · 30:00\"\n            aria-label=\"查看第 17 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep17/frame-06.jpg\" alt=\"第 17 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>系统掌握线性、时移、频移、尺度、卷积、微分、积分、对偶和帕塞瓦尔性质。</p>\n      <p><mark>自检问题：</mark>已知 f(t) ↔ F(ω)，写出 f(2t−4) 的频谱，并说明每一步用了什么性质。</p>\n      <p><span class=\"hl-red\">易错点：</span>时域乘法的频域卷积要乘 1/2π；尺度变换的幅度因子是 1/|a|，不能漏绝对值。</p>\n      <p><mark>迁移到题目时：</mark>利用偶双边指数等已知变换对可快速求 t=0 附近或频域面积型积分。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=17&amp;t=1043\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 17 集 · 17:23，打开 Bilibili 对应讲解\">第 17 集 · 17:23 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "时移只改变相位，尺度改变频谱宽度并乘 1/|a|；时间翻转会使频率翻转。",
        "频移对应时域乘复指数，是调制和频谱搬移的基本操作。",
        "时间反转、奇偶分解和频谱共轭结合使用，常能把陌生变换对化成熟知变换对。",
        "线性性质允许分解复杂信号；实信号的频谱满足共轭对称，因此正负频率处的信息成对出现。",
        "时域卷积对应频域相乘；时域相乘对应频域卷积，并带 1/(2π) 系数。",
        "尺度、时移、频移、时域微积分组合时，必须把频率变量、相位和冲激修正一起改写。",
        "时域门脉冲的频谱是 Sa，利用对偶可把 Sa 的频域形状反推到时域。",
        "使用卷积定理时，等式两边要统一定义；很多错误来自把 2π 放在正变换还是反变换。",
        "时域卷积对应频域乘法，是 LTI 系统频域分析的核心；时域乘法对应频域卷积。",
        "时域积分通常对应除以 jΩ，但全轴积分非零时会附加冲激项 πF(0)δ(Ω)。",
        "时域乘 t 对应频谱对频率求导并乘 j；频域求导对应时域乘 −jt。",
        "先判断信号奇偶、连续性和边界值，再选频率微分/积分性质，往往比硬积分省时。",
        "时域除以 t 与频域积分相关，但边界和 1/(2π) 系数不能漏；f(0) 可由频域积分快速求。",
        "能量信号满足帕塞瓦尔：时域总能量等于 (1/2π)∫|F(jΩ)|²dΩ。",
        "利用偶双边指数等已知变换对可快速求 t=0 附近或频域面积型积分。"
      ],
      "extraFormulas": [
        {
          "label": "时移",
          "expr": "f(t−t₀) ↔ F(jΩ)e<sup>−jΩt₀</sup>",
          "note": "第 15 集讲解"
        },
        {
          "label": "尺度",
          "expr": "f(at) ↔ F(jΩ/a)/|a|",
          "note": "第 15 集讲解"
        },
        {
          "label": "频移",
          "expr": "f(t)e<sup>jΩ₀t</sup> ↔ F[j(Ω−Ω₀)]",
          "note": "第 15 集讲解"
        },
        {
          "label": "对偶",
          "expr": "若 f(t)↔F(jΩ)，则 F(jt)↔2πf(−Ω)",
          "note": "第 16 集讲解"
        },
        {
          "label": "卷积定理",
          "expr": "f(t)*g(t) ↔ F(jΩ)G(jΩ)",
          "note": "第 16 集讲解"
        },
        {
          "label": "积分修正",
          "expr": "∫<sub>−∞</sub><sup>t</sup>f(τ)dτ ↔ F(jΩ)/(jΩ)+πF(0)δ(Ω)",
          "note": "第 16 集讲解"
        },
        {
          "label": "频率微分",
          "expr": "−jt f(t) ↔ dF(jΩ)/dΩ",
          "note": "第 17 集讲解"
        },
        {
          "label": "帕塞瓦尔",
          "expr": "E=(1/2π)∫|F(jΩ)|²dΩ",
          "note": "第 17 集讲解"
        },
        {
          "label": "中心值",
          "expr": "f(0)=(1/2π)∫F(jΩ)dΩ",
          "note": "第 17 集讲解"
        }
      ],
      "finalPitfall": "时域乘法的频域卷积要乘 1/2π；尺度变换的幅度因子是 1/|a|，不能漏绝对值。 尺度因子必须取绝对值；时域乘法的频域卷积前不要漏 1/(2π)。 门函数与 Sa 的尺度参数方向容易写反；积分性质不是无条件除以 jΩ。 频域导数式和时域导数式方向相反，负号和 j 都不能丢。"
    },
    "s3-6": {
      "concept": "\n      <p><mark>把周期信号统一纳入傅里叶变换框架：其频谱是一串加权冲激。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：周期为 T 的余弦信号，其傅里叶变换由哪几根冲激组成？</p><p>周期信号也能做傅里叶变换，只是频谱变成加权冲激串；权重 2πFₙ 与指数级数完全一致。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=19&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 19 集 · 00:00，打开 Bilibili 对应讲解\">第 19 集 · 00:00 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>周期信号的傅里叶变换由各次谐波对应的频移冲激组成。</li><li>冲激权重为 2πF<sub>n</sub>，位置为 nΩ；这保持了与指数级数的一致性。</li><li>周期信号不满足普通绝对可积条件，需在广义函数意义下理解其变换。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">周期信号变换</span>\n      <span class=\"formula\">F(ω)=2πΣ<sub>n=−∞</sub><sup>∞</sup>F<sub>n</sub>δ(ω−nΩ)</span>\n      <span class=\"formula-note\">Ω=2π/T。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>周期信号傅里叶变换为 F(jΩ)=2πΣFₙδ(Ω−nΩ₀)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=19&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 19 集 · 00:00，打开 Bilibili 对应讲解\">第 19 集 · 00:00 ↗</a></li><li>利用周期冲激串的变换可把周期信号看作“一个周期波形与冲激串卷积”，从而统一到傅里叶变换框架。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=19&amp;t=66\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 19 集 · 01:06，打开 Bilibili 对应讲解\">第 19 集 · 01:06 ↗</a></li><li>周期信号的傅里叶系数也可由一个周期的 F₀(jΩ) 在 nΩ₀ 处取值得到：Fₙ=(Ω₀/2π)F₀(jnΩ₀)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=19&amp;t=66\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 19 集 · 01:06，打开 Bilibili 对应讲解\">第 19 集 · 01:06 ↗</a></li><li>解题顺序：取一个周期波形→求该波形傅里叶变换→代入 nΩ₀→写成冲激串。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=19&amp;t=66\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 19 集 · 01:06，打开 Bilibili 对应讲解\">第 19 集 · 01:06 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激串</span>\n          <span class=\"formula\">F(jΩ)=2πΣF<sub>n</sub>δ(Ω−nΩ<sub>0</sub>)</span>\n          <span class=\"formula-note\">第 19 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">系数关系</span>\n          <span class=\"formula\">F<sub>n</sub>=(Ω<sub>0</sub>/2π)F<sub>0</sub>(jnΩ<sub>0</sub>)</span>\n          <span class=\"formula-note\">第 19 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">基频</span>\n          <span class=\"formula\">Ω<sub>0</sub>=2π/T</span>\n          <span class=\"formula-note\">第 19 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>2π 系数和正负冲激位置最容易错；冲激代表离散频谱线，不是普通函数值。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep19/frame-00.jpg\"\n            data-image-title=\"3.5 周期信号的傅里叶变换\"\n            data-image-label=\"第 19 集 · 00:00\"\n            aria-label=\"查看第 19 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep19/frame-00.jpg\" alt=\"第 19 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep19/frame-01.jpg\"\n            data-image-title=\"3.5 周期信号的傅里叶变换\"\n            data-image-label=\"第 19 集 · 05:00\"\n            aria-label=\"查看第 19 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep19/frame-01.jpg\" alt=\"第 19 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep19/frame-02.jpg\"\n            data-image-title=\"3.5 周期信号的傅里叶变换\"\n            data-image-label=\"第 19 集 · 10:00\"\n            aria-label=\"查看第 19 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep19/frame-02.jpg\" alt=\"第 19 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep19/frame-03.jpg\"\n            data-image-title=\"3.5 周期信号的傅里叶变换\"\n            data-image-label=\"第 19 集 · 15:00\"\n            aria-label=\"查看第 19 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep19/frame-03.jpg\" alt=\"第 19 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把周期信号统一纳入傅里叶变换框架：其频谱是一串加权冲激。</p>\n      <p><mark>自检问题：</mark>周期为 T 的余弦信号，其傅里叶变换由哪几根冲激组成？</p>\n      <p><span class=\"hl-red\">易错点：</span>周期信号的傅里叶变换不是普通连续函数，而是冲激串；不能直接画成光滑曲线。</p>\n      <p><mark>迁移到题目时：</mark>冲激位置是 nΩ₀，权重是 2πFₙ；不能把冲激串误画成普通连续曲线。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=19&amp;t=185\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 19 集 · 03:05，打开 Bilibili 对应讲解\">第 19 集 · 03:05 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "周期信号傅里叶变换为 F(jΩ)=2πΣFₙδ(Ω−nΩ₀)。",
        "利用周期冲激串的变换可把周期信号看作“一个周期波形与冲激串卷积”，从而统一到傅里叶变换框架。",
        "周期信号的傅里叶系数也可由一个周期的 F₀(jΩ) 在 nΩ₀ 处取值得到：Fₙ=(Ω₀/2π)F₀(jnΩ₀)。",
        "解题顺序：取一个周期波形→求该波形傅里叶变换→代入 nΩ₀→写成冲激串。",
        "冲激位置是 nΩ₀，权重是 2πFₙ；不能把冲激串误画成普通连续曲线。"
      ],
      "extraFormulas": [
        {
          "label": "冲激串",
          "expr": "F(jΩ)=2πΣF<sub>n</sub>δ(Ω−nΩ<sub>0</sub>)",
          "note": "第 19 集讲解"
        },
        {
          "label": "系数关系",
          "expr": "F<sub>n</sub>=(Ω<sub>0</sub>/2π)F<sub>0</sub>(jnΩ<sub>0</sub>)",
          "note": "第 19 集讲解"
        },
        {
          "label": "基频",
          "expr": "Ω<sub>0</sub>=2π/T",
          "note": "第 19 集讲解"
        }
      ],
      "finalPitfall": "周期信号的傅里叶变换不是普通连续函数，而是冲激串；不能直接画成光滑曲线。 2π 系数和正负冲激位置最容易错；冲激代表离散频谱线，不是普通函数值。"
    },
    "s3-7-1": {
      "concept": "\n      <p><mark>带限信号以高于奈奎斯特率的频率采样，可由样本无失真恢复。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：最高频率 3 kHz 的信号，理论最低采样率是多少？若用 5 kHz 会怎样？</p><p>抽样定理的核心不是“每隔一段时间取点”这么简单，而是采样后原频谱以 fs 为周期复制；只有复制谱不重叠才能无失真恢复。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=6\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 00:06，打开 Bilibili 对应讲解\">第 20 集 · 00:06 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>若信号最高频率为 f<sub>m</sub>，采样频率必须满足 f<sub>s</sub>>2f<sub>m</sub>（临界情况需额外条件）。</li><li>采样后频谱是原频谱以 f<sub>s</sub> 为周期复制；条件不满足时复制谱重叠，产生混叠。</li><li>理想重建用截止频率 f<sub>s</sub>/2 的低通滤波器。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">奈奎斯特条件</span>\n      <span class=\"formula\">f<sub>s</sub>≥2f<sub>m</sub></span>\n      <span class=\"formula-note\">工程上常取严格大于。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">重建</span>\n      <span class=\"formula\">f(t)=Σf(kT<sub>s</sub>)Sa[π(t−kT<sub>s</sub>)/T<sub>s</sub>]</span>\n      <span class=\"formula-note\">理想带限插值。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>理想抽样是 f(t) 乘冲激串，采样信号频谱为原频谱以 Ωs 为周期复制，幅度尺度为 1/Ts。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=6\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 00:06，打开 Bilibili 对应讲解\">第 20 集 · 00:06 ↗</a></li><li>fs&lt;2f_m 时相邻频谱副本重叠产生混叠，重叠后的高频无法由样本唯一恢复。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=527\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 08:47，打开 Bilibili 对应讲解\">第 20 集 · 08:47 ↗</a></li><li>若最高频率为 f_m，必须满足 fs≥2f_m；工程上通常取严格大于并留抗混叠余量。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=562\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 09:22，打开 Bilibili 对应讲解\">第 20 集 · 09:22 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">奈奎斯特</span>\n          <span class=\"formula\">f<sub>s</sub>≥2f<sub>m</sub></span>\n          <span class=\"formula-note\">第 20 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">复制谱</span>\n          <span class=\"formula\">F<sub>s</sub>(jΩ)=(1/T<sub>s</sub>)ΣF[j(Ω−kΩ<sub>s</sub>)]</span>\n          <span class=\"formula-note\">第 20 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">重建插值</span>\n          <span class=\"formula\">f(t)=Σf(kT<sub>s</sub>)Sa[π(t−kT<sub>s</sub>)/T<sub>s</sub>]</span>\n          <span class=\"formula-note\">第 20 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>采样频率大于最高频率并不会自动无混叠，条件是至少为该最高频率的两倍；实际系统要加抗混叠预滤波。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-00.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 00:00\"\n            aria-label=\"查看第 20 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-00.jpg\" alt=\"第 20 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-01.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 05:00\"\n            aria-label=\"查看第 20 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-01.jpg\" alt=\"第 20 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-02.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 10:00\"\n            aria-label=\"查看第 20 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-02.jpg\" alt=\"第 20 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-03.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 15:00\"\n            aria-label=\"查看第 20 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-03.jpg\" alt=\"第 20 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-04.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 20:00\"\n            aria-label=\"查看第 20 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-04.jpg\" alt=\"第 20 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-05.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 25:00\"\n            aria-label=\"查看第 20 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-05.jpg\" alt=\"第 20 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-06.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 30:00\"\n            aria-label=\"查看第 20 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-06.jpg\" alt=\"第 20 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-07.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 35:00\"\n            aria-label=\"查看第 20 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-07.jpg\" alt=\"第 20 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep20/frame-08.jpg\"\n            data-image-title=\"3.6 抽样定理\"\n            data-image-label=\"第 20 集 · 40:00\"\n            aria-label=\"查看第 20 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep20/frame-08.jpg\" alt=\"第 20 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>带限信号以高于奈奎斯特率的频率采样，可由样本无失真恢复。</p>\n      <p><mark>自检问题：</mark>最高频率 3 kHz 的信号，理论最低采样率是多少？若用 5 kHz 会怎样？</p>\n      <p><span class=\"hl-red\">易错点：</span>采样定理要求信号严格带限；实际信号总有高频成分，因此需要预滤波。</p>\n      <p><mark>迁移到题目时：</mark>理想重建用截止频率位于信号带宽与第一复制带之间的低通滤波器；时域对应 Sa 插值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=1300\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 21:40，打开 Bilibili 对应讲解\">第 20 集 · 21:40 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "理想抽样是 f(t) 乘冲激串，采样信号频谱为原频谱以 Ωs 为周期复制，幅度尺度为 1/Ts。",
        "fs<2f_m 时相邻频谱副本重叠产生混叠，重叠后的高频无法由样本唯一恢复。",
        "若最高频率为 f_m，必须满足 fs≥2f_m；工程上通常取严格大于并留抗混叠余量。",
        "理想重建用截止频率位于信号带宽与第一复制带之间的低通滤波器；时域对应 Sa 插值。"
      ],
      "extraFormulas": [
        {
          "label": "奈奎斯特",
          "expr": "f<sub>s</sub>≥2f<sub>m</sub>",
          "note": "第 20 集讲解"
        },
        {
          "label": "复制谱",
          "expr": "F<sub>s</sub>(jΩ)=(1/T<sub>s</sub>)ΣF[j(Ω−kΩ<sub>s</sub>)]",
          "note": "第 20 集讲解"
        },
        {
          "label": "重建插值",
          "expr": "f(t)=Σf(kT<sub>s</sub>)Sa[π(t−kT<sub>s</sub>)/T<sub>s</sub>]",
          "note": "第 20 集讲解"
        }
      ],
      "finalPitfall": "采样定理要求信号严格带限；实际信号总有高频成分，因此需要预滤波。 采样频率大于最高频率并不会自动无混叠，条件是至少为该最高频率的两倍；实际系统要加抗混叠预滤波。"
    },
    "s3-7-2": {
      "concept": "\n      <p><mark>用有限宽脉冲串采样时，频谱复制会乘以脉冲频谱包络，产生幅度加权。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么零阶保持电路的频率响应不是理想低通？</p><p>抽样定理的核心不是“每隔一段时间取点”这么简单，而是采样后原频谱以 fs 为周期复制；只有复制谱不重叠才能无失真恢复。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=333\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 05:33，打开 Bilibili 对应讲解\">第 20 集 · 05:33 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>理想采样用冲激串；实际采样用有限宽脉冲串，等效为原信号乘周期脉冲。</li><li>采样信号频谱是原频谱的周期复制，并受采样脉冲频谱（Sa 包络）加权。</li><li>零阶保持会引入 sinc 型幅度失真和相位延迟，需要后续补偿。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">采样信号</span>\n      <span class=\"formula\">f<sub>s</sub>(t)=f(t)·p(t)</span>\n      <span class=\"formula-note\">p(t) 为周期采样脉冲串。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>采样频率大于最高频率并不会自动无混叠，条件是至少为该最高频率的两倍；实际系统要加抗混叠预滤波。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用有限宽脉冲串采样时，频谱复制会乘以脉冲频谱包络，产生幅度加权。</p>\n      <p><mark>自检问题：</mark>为什么零阶保持电路的频率响应不是理想低通？</p>\n      <p><span class=\"hl-red\">易错点：</span>实际采样并非只产生理想复制的频谱；脉冲宽度会带来包络衰减。</p>\n      <p><mark>迁移到题目时：</mark>实际采样、零阶保持还会乘采样脉冲频谱包络，产生幅度失真和群延迟，需要补偿。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=333\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 05:33，打开 Bilibili 对应讲解\">第 20 集 · 05:33 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "实际采样、零阶保持还会乘采样脉冲频谱包络，产生幅度失真和群延迟，需要补偿。"
      ],
      "extraFormulas": [],
      "finalPitfall": "实际采样并非只产生理想复制的频谱；脉冲宽度会带来包络衰减。 采样频率大于最高频率并不会自动无混叠，条件是至少为该最高频率的两倍；实际系统要加抗混叠预滤波。"
    },
    "s3-7-3": {
      "concept": "\n      <p><mark>对频谱采样对应时域周期延拓；频域采样间隔决定时域周期。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：若希望时域周期延拓不重叠，信号持续时间应满足什么条件？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=20&amp;t=90\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 20 集 · 01:30，打开 Bilibili 对应讲解\">第 20 集 · 01:30 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>在频域以 Δω 间隔采样，等效于在时域以 2π/Δω 为周期重复。</li><li>若时域信号持续时间超过该周期，延拓部分会重叠，导致无法由频域样本恢复。</li><li>频域抽样定理与时域抽样定理呈对偶关系。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">时域周期</span>\n      <span class=\"formula\">T<sub>p</sub>=2π/Δω</span>\n      <span class=\"formula-note\">频域采样间隔越大，时域周期越小。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>对频谱采样对应时域周期延拓；频域采样间隔决定时域周期。</p>\n      <p><mark>自检问题：</mark>若希望时域周期延拓不重叠，信号持续时间应满足什么条件？</p>\n      <p><span class=\"hl-red\">易错点：</span>频域采样不是“多采几个频率点就更精确”；间隔过大会造成时域混叠。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "频域采样不是“多采几个频率点就更精确”；间隔过大会造成时域混叠。"
    },
    "s3-8-1": {
      "concept": "\n      <p><mark>复指数是 LTI 系统的本征函数，输出仅被复常数 H(ω) 加权。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：输入 cos(ω₀t) 通过 H(ω) 后，输出幅度和相位如何变化？</p><p>复指数 e^{jΩt} 是 LTI 系统的本征函数：输出仍是同频复指数，只被 H(jΩ) 缩放和相移。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=22&amp;t=16\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 22 集 · 00:16，打开 Bilibili 对应讲解\">第 22 集 · 00:16 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>输入 e<sup>jωt</sup> 时，零状态输出为 H(ω)e<sup>jωt</sup>。</li><li>H(ω) 是冲激响应的傅里叶变换，称为频率响应。</li><li>幅度响应改变各频率分量的相对大小，相位响应改变相对时延。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">本征响应</span>\n      <span class=\"formula\">e<sup>jωt</sup> → H(ω)e<sup>jωt</sup></span>\n      <span class=\"formula-note\">零状态、LTI。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频率响应</span>\n      <span class=\"formula\">H(ω)=∫<sub>−∞</sub><sup>∞</sup>h(t)e<sup>−jωt</sup>dt</span>\n      <span class=\"formula-note\">h(t) 的傅里叶变换。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>H(jΩ) 的存在以 h(t) 的傅里叶变换存在为前提，不能无条件把任何 h 都当作频率响应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=21&amp;t=29\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 21 集 · 00:29，打开 Bilibili 对应讲解\">第 21 集 · 00:29 ↗</a></li><li>系统频率响应 H(jΩ) 的幅度决定各频率增益，相位决定各频率相移。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=21&amp;t=70\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 21 集 · 01:10，打开 Bilibili 对应讲解\">第 21 集 · 01:10 ↗</a></li><li>周期信号可用离散复指数组合；非周期信号可用连续频率积分的复指数组合。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=22&amp;t=16\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 22 集 · 00:16，打开 Bilibili 对应讲解\">第 22 集 · 00:16 ↗</a></li><li>周期信号和傅里叶变换使用的是同一套本征函数思想，只是频率离散与连续不同。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=22&amp;t=16\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 22 集 · 00:16，打开 Bilibili 对应讲解\">第 22 集 · 00:16 ↗</a></li><li>对实正弦输入，输出频率不变，振幅乘 |H(jΩ)|，相位加 ∠H(jΩ)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=22&amp;t=198\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 22 集 · 03:18，打开 Bilibili 对应讲解\">第 22 集 · 03:18 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">频域乘法</span>\n          <span class=\"formula\">Y(jΩ)=H(jΩ)E(jΩ)</span>\n          <span class=\"formula-note\">第 21 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">定义</span>\n          <span class=\"formula\">H(jΩ)=∫h(t)e<sup>−jΩt</sup>dt</span>\n          <span class=\"formula-note\">第 21 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">本征响应</span>\n          <span class=\"formula\">T[e<sup>jΩt</sup>]=H(jΩ)e<sup>jΩt</sup></span>\n          <span class=\"formula-note\">第 22 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">正弦输入</span>\n          <span class=\"formula\">A cos(Ωt+φ) → A|H(jΩ)|cos[Ωt+φ+∠H(jΩ)]</span>\n          <span class=\"formula-note\">第 22 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">周期响应</span>\n          <span class=\"formula\">y(t)=ΣH(jnΩ<sub>0</sub>)F<sub>n</sub>e<sup>jnΩ<sub>0</sub>t</sup></span>\n          <span class=\"formula-note\">第 22 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>频率不变只适用于 LTI 系统；相位角要按输入相位加上去，不能只乘幅度。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-00.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 00:00\"\n            aria-label=\"查看第 22 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-00.jpg\" alt=\"第 22 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-01.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 05:00\"\n            aria-label=\"查看第 22 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-01.jpg\" alt=\"第 22 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-02.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 10:00\"\n            aria-label=\"查看第 22 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-02.jpg\" alt=\"第 22 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-03.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 15:00\"\n            aria-label=\"查看第 22 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-03.jpg\" alt=\"第 22 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-04.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 20:00\"\n            aria-label=\"查看第 22 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-04.jpg\" alt=\"第 22 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-05.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 25:00\"\n            aria-label=\"查看第 22 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-05.jpg\" alt=\"第 22 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-06.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 30:00\"\n            aria-label=\"查看第 22 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-06.jpg\" alt=\"第 22 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep22/frame-07.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析II\"\n            data-image-label=\"第 22 集 · 35:00\"\n            aria-label=\"查看第 22 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep22/frame-07.jpg\" alt=\"第 22 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>复指数是 LTI 系统的本征函数，输出仅被复常数 H(ω) 加权。</p>\n      <p><mark>自检问题：</mark>输入 cos(ω₀t) 通过 H(ω) 后，输出幅度和相位如何变化？</p>\n      <p><span class=\"hl-red\">易错点：</span>H(ω) 是复数，既有幅度也有相位；只看幅频特性会遗漏波形时移。</p>\n      <p><mark>迁移到题目时：</mark>输入 e^{jΩt} 的系统零状态响应是 H(jΩ)e^{jΩt}，因此同一频率不会被系统“改变频率”。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=22&amp;t=1447\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 22 集 · 24:07，打开 Bilibili 对应讲解\">第 22 集 · 24:07 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "H(jΩ) 的存在以 h(t) 的傅里叶变换存在为前提，不能无条件把任何 h 都当作频率响应。",
        "系统频率响应 H(jΩ) 的幅度决定各频率增益，相位决定各频率相移。",
        "周期信号可用离散复指数组合；非周期信号可用连续频率积分的复指数组合。",
        "周期信号和傅里叶变换使用的是同一套本征函数思想，只是频率离散与连续不同。",
        "对实正弦输入，输出频率不变，振幅乘 |H(jΩ)|，相位加 ∠H(jΩ)。",
        "输入 e^{jΩt} 的系统零状态响应是 H(jΩ)e^{jΩt}，因此同一频率不会被系统“改变频率”。"
      ],
      "extraFormulas": [
        {
          "label": "频域乘法",
          "expr": "Y(jΩ)=H(jΩ)E(jΩ)",
          "note": "第 21 集讲解"
        },
        {
          "label": "定义",
          "expr": "H(jΩ)=∫h(t)e<sup>−jΩt</sup>dt",
          "note": "第 21 集讲解"
        },
        {
          "label": "本征响应",
          "expr": "T[e<sup>jΩt</sup>]=H(jΩ)e<sup>jΩt</sup>",
          "note": "第 22 集讲解"
        },
        {
          "label": "正弦输入",
          "expr": "A cos(Ωt+φ) → A|H(jΩ)|cos[Ωt+φ+∠H(jΩ)]",
          "note": "第 22 集讲解"
        },
        {
          "label": "周期响应",
          "expr": "y(t)=ΣH(jnΩ<sub>0</sub>)F<sub>n</sub>e<sup>jnΩ<sub>0</sub>t</sup>",
          "note": "第 22 集讲解"
        }
      ],
      "finalPitfall": "H(ω) 是复数，既有幅度也有相位；只看幅频特性会遗漏波形时移。 H(jΩ)=Y/E 只在零状态成立；含初态时还要叠加零输入响应。 频率不变只适用于 LTI 系统；相位角要按输入相位加上去，不能只乘幅度。"
    },
    "s3-8-2": {
      "concept": "\n      <p><mark>任意输入可分解为复指数叠加，系统响应对应频域乘法 Y(ω)=H(ω)F(ω)。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：已知 F(ω) 与 H(ω)，如何用傅里叶逆变换写出 y(t)？</p><p>连续 LTI 系统在频域把卷积变为乘法：Y(jΩ)=H(jΩ)E(jΩ)，H(jΩ) 是 h(t) 的傅里叶变换。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=21&amp;t=89\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 21 集 · 01:29，打开 Bilibili 对应讲解\">第 21 集 · 01:29 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>频域分析把时域卷积转换为逐频率乘法，计算更直接。</li><li>H(ω)F(ω) 是零状态响应的频谱，逆变换得到时域响应。</li><li>频率响应可解释滤波、失真、相位延迟等现象。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频域乘法</span>\n      <span class=\"formula\">Y(ω)=H(ω)F(ω)</span>\n      <span class=\"formula-note\">零状态响应的频谱关系。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>频域分析的本质是“把输入分解成复指数，系统逐个频率加权，再合成输出”。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=21&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 21 集 · 00:00，打开 Bilibili 对应讲解\">第 21 集 · 00:00 ↗</a></li><li>方框图化简和冲激响应求解都可用来得到 H(jΩ)，频域直接相除只适用于零状态关系。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=21&amp;t=41\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 21 集 · 00:41，打开 Bilibili 对应讲解\">第 21 集 · 00:41 ↗</a></li><li>零状态响应在频域是输入频谱乘系统频率响应；回到时域就是输入与冲激响应卷积。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=21&amp;t=89\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 21 集 · 01:29，打开 Bilibili 对应讲解\">第 21 集 · 01:29 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积</span>\n          <span class=\"formula\">y(t)=h(t)*e(t)</span>\n          <span class=\"formula-note\">第 21 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>H(jΩ)=Y/E 只在零状态成立；含初态时还要叠加零输入响应。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-00.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 00:00\"\n            aria-label=\"查看第 21 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-00.jpg\" alt=\"第 21 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-01.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 05:00\"\n            aria-label=\"查看第 21 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-01.jpg\" alt=\"第 21 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-02.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 10:00\"\n            aria-label=\"查看第 21 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-02.jpg\" alt=\"第 21 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-03.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 15:00\"\n            aria-label=\"查看第 21 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-03.jpg\" alt=\"第 21 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-04.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 20:00\"\n            aria-label=\"查看第 21 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-04.jpg\" alt=\"第 21 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-05.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 25:00\"\n            aria-label=\"查看第 21 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-05.jpg\" alt=\"第 21 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep21/frame-06.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析I\"\n            data-image-label=\"第 21 集 · 30:00\"\n            aria-label=\"查看第 21 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep21/frame-06.jpg\" alt=\"第 21 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>任意输入可分解为复指数叠加，系统响应对应频域乘法 Y(ω)=H(ω)F(ω)。</p>\n      <p><mark>自检问题：</mark>已知 F(ω) 与 H(ω)，如何用傅里叶逆变换写出 y(t)？</p>\n      <p><span class=\"hl-red\">易错点：</span>Y=HF 只给出零状态响应；有初始条件时应转入拉普拉斯域处理。</p>\n      <p><mark>迁移到题目时：</mark>多个频率输入按线性性质分别求响应再相加；这是频域稳态分析的主流程。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=22&amp;t=1428\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 22 集 · 23:48，打开 Bilibili 对应讲解\">第 22 集 · 23:48 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "频域分析的本质是“把输入分解成复指数，系统逐个频率加权，再合成输出”。",
        "方框图化简和冲激响应求解都可用来得到 H(jΩ)，频域直接相除只适用于零状态关系。",
        "零状态响应在频域是输入频谱乘系统频率响应；回到时域就是输入与冲激响应卷积。",
        "多个频率输入按线性性质分别求响应再相加；这是频域稳态分析的主流程。"
      ],
      "extraFormulas": [
        {
          "label": "卷积",
          "expr": "y(t)=h(t)*e(t)",
          "note": "第 21 集讲解"
        }
      ],
      "finalPitfall": "Y=HF 只给出零状态响应；有初始条件时应转入拉普拉斯域处理。 H(jΩ)=Y/E 只在零状态成立；含初态时还要叠加零输入响应。 频率不变只适用于 LTI 系统；相位角要按输入相位加上去，不能只乘幅度。"
    },
    "s3-8-3": {
      "concept": "\n      <p><mark>系统对所有频率只做统一缩放和统一时延，才能保持波形形状不变。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：H(ω)=2e&lt;sup&gt;−j3ω&lt;/sup&gt; 是否无失真？输出相对输入如何变化？</p><p>无失真传输要求所有频率分量的幅度增益相同、时延相同；失真不是“波形看起来不同”这么模糊，而是频率分量的比例和相位关系被改变。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=121\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 02:01，打开 Bilibili 对应讲解\">第 23 集 · 02:01 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>幅频特性必须为常数，相频特性必须是过原点的直线（线性相位）。</li><li>H(ω)=Ke<sup>−jωt<sub>d</sub></sup> 对应增益 K、时延 t<sub>d</sub>。</li><li>相位非线性会导致不同频率分量时延不同，形成相位失真（色散）。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">无失真条件</span>\n      <span class=\"formula\">|H(ω)|=K,&nbsp; φ(ω)=−ωt<sub>d</sub></span>\n      <span class=\"formula-note\">K&gt;0，t&lt;sub&gt;d&lt;/sub&gt; 为常数。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>理想无失真系统满足 |H(jΩ)|=K 且群时延恒定，等价于相位为 −Ωt₀（可叠加常数相移）。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 00:00，打开 Bilibili 对应讲解\">第 23 集 · 00:00 ↗</a></li><li>线性失真由幅频或相频不一致造成，不会产生新的频率；非线性失真会产生新的频率分量。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=121\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 02:01，打开 Bilibili 对应讲解\">第 23 集 · 02:01 ↗</a></li><li>线性相位不是“相位为常数”，而是相位随频率线性变化；常数相位只会改变波形位置/极性关系。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=844\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 14:04，打开 Bilibili 对应讲解\">第 23 集 · 14:04 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">无失真</span>\n          <span class=\"formula\">|H(jΩ)|=K，∠H(jΩ)=−Ωt<sub>0</sub></span>\n          <span class=\"formula-note\">第 23 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激响应</span>\n          <span class=\"formula\">h(t) ↔ K e<sup>−jΩt<sub>0</sub></sup></span>\n          <span class=\"formula-note\">第 23 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">群时延</span>\n          <span class=\"formula\">τ<sub>g</sub>=−d∠H(jΩ)/dΩ</span>\n          <span class=\"formula-note\">第 23 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>常数相位不是无失真；非线性失真的标志是输出出现输入中没有的新频率。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep23/frame-00.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析III\"\n            data-image-label=\"第 23 集 · 00:00\"\n            aria-label=\"查看第 23 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep23/frame-00.jpg\" alt=\"第 23 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep23/frame-01.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析III\"\n            data-image-label=\"第 23 集 · 05:00\"\n            aria-label=\"查看第 23 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep23/frame-01.jpg\" alt=\"第 23 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep23/frame-02.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析III\"\n            data-image-label=\"第 23 集 · 10:00\"\n            aria-label=\"查看第 23 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep23/frame-02.jpg\" alt=\"第 23 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep23/frame-03.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析III\"\n            data-image-label=\"第 23 集 · 15:00\"\n            aria-label=\"查看第 23 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep23/frame-03.jpg\" alt=\"第 23 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep23/frame-04.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析III\"\n            data-image-label=\"第 23 集 · 20:00\"\n            aria-label=\"查看第 23 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep23/frame-04.jpg\" alt=\"第 23 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep23/frame-05.jpg\"\n            data-image-title=\"3.7 连续时间系统的频域分析III\"\n            data-image-label=\"第 23 集 · 25:00\"\n            aria-label=\"查看第 23 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep23/frame-05.jpg\" alt=\"第 23 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>系统对所有频率只做统一缩放和统一时延，才能保持波形形状不变。</p>\n      <p><mark>自检问题：</mark>H(ω)=2e&lt;sup&gt;−j3ω&lt;/sup&gt; 是否无失真？输出相对输入如何变化？</p>\n      <p><span class=\"hl-red\">易错点：</span>幅度恒定但相位非线性仍会失真；线性相位不是“相位为常数”。</p>\n      <p><mark>迁移到题目时：</mark>因果实现的无失真系统需要延迟，不能要求零时延的理想系统物理可实现。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=1599\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 26:39，打开 Bilibili 对应讲解\">第 23 集 · 26:39 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "理想无失真系统满足 |H(jΩ)|=K 且群时延恒定，等价于相位为 −Ωt₀（可叠加常数相移）。",
        "线性失真由幅频或相频不一致造成，不会产生新的频率；非线性失真会产生新的频率分量。",
        "线性相位不是“相位为常数”，而是相位随频率线性变化；常数相位只会改变波形位置/极性关系。",
        "因果实现的无失真系统需要延迟，不能要求零时延的理想系统物理可实现。"
      ],
      "extraFormulas": [
        {
          "label": "无失真",
          "expr": "|H(jΩ)|=K，∠H(jΩ)=−Ωt<sub>0</sub>",
          "note": "第 23 集讲解"
        },
        {
          "label": "冲激响应",
          "expr": "h(t) ↔ K e<sup>−jΩt<sub>0</sub></sup>",
          "note": "第 23 集讲解"
        },
        {
          "label": "群时延",
          "expr": "τ<sub>g</sub>=−d∠H(jΩ)/dΩ",
          "note": "第 23 集讲解"
        }
      ],
      "finalPitfall": "幅度恒定但相位非线性仍会失真；线性相位不是“相位为常数”。 常数相位不是无失真；非线性失真的标志是输出出现输入中没有的新频率。"
    },
    "s3-8-4": {
      "concept": "\n      <p><mark>理想低通在截止频率内幅度恒定、相位线性，但其冲激响应非因果。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么理想低通滤波器的阶跃响应会出现吉布斯振铃？</p><p>无失真传输要求所有频率分量的幅度增益相同、时延相同；失真不是“波形看起来不同”这么模糊，而是频率分量的比例和相位关系被改变。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=208\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 03:28，打开 Bilibili 对应讲解\">第 23 集 · 03:28 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>H(ω)=Ke<sup>−jωt<sub>d</sub></sup>（|ω|<ω<sub>c</sub>），其余为 0，是矩形频窗。</li><li>冲激响应为 Sa 型函数，向 t<0 延伸，因此理想低通物理不可实现。</li><li>截止频率越低，输出越平滑，但响应建立时间越长。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">理想低通</span>\n      <span class=\"formula\">H(ω)=Ke<sup>−jωt<sub>d</sub></sup>[ε(ω+ω<sub>c</sub>)−ε(ω−ω<sub>c</sub>)]</span>\n      <span class=\"formula-note\">理想矩形通带。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">冲激响应</span>\n      <span class=\"formula\">h(t)=(Kω<sub>c</sub>/π)Sa[ω<sub>c</sub>(t−t<sub>d</sub>)]</span>\n      <span class=\"formula-note\">非因果，t→−∞ 仍有值。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>常数相位不是无失真；非线性失真的标志是输出出现输入中没有的新频率。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>理想低通在截止频率内幅度恒定、相位线性，但其冲激响应非因果。</p>\n      <p><mark>自检问题：</mark>为什么理想低通滤波器的阶跃响应会出现吉布斯振铃？</p>\n      <p><span class=\"hl-red\">易错点：</span>理想低通不是“更好的低通”；它的非因果性和无限时延使其只能作为理论基准。</p>\n      <p><mark>迁移到题目时：</mark>滤波器对信号的影响应从幅度和相位两个维度同时看。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=23&amp;t=208\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 23 集 · 03:28，打开 Bilibili 对应讲解\">第 23 集 · 03:28 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "滤波器对信号的影响应从幅度和相位两个维度同时看。"
      ],
      "extraFormulas": [],
      "finalPitfall": "理想低通不是“更好的低通”；它的非因果性和无限时延使其只能作为理论基准。 常数相位不是无失真；非线性失真的标志是输出出现输入中没有的新频率。"
    },
    "s3-9": {
      "concept": "\n      <p><mark>用能量谱密度描述能量在频域的分布，并通过相关定理连接时域相关与频域乘积。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：为什么 |F(ω)|² 不能携带原信号的相位信息？</p><p>相关定理把时域相关积转换成频域乘积；自相关变换是能量谱，功率信号则要先截取再除以时长取极限。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=18&amp;t=100\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 18 集 · 01:40，打开 Bilibili 对应讲解\">第 18 集 · 01:40 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>能量谱密度 |F(ω)|² 描述单位频率内的能量分布，本身是非负实偶函数。</li><li>时域总能量等于频域能量谱积分（带 1/2π 系数）。</li><li>自相关与能量谱是一对傅里叶变换，可用于检测信号重复性和时延估计。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">能量谱</span>\n      <span class=\"formula\">E(ω)=|F(ω)|²</span>\n      <span class=\"formula-note\">能量谱密度。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">帕塞瓦尔</span>\n      <span class=\"formula\">E=(1/2π)∫|F(ω)|²dω</span>\n      <span class=\"formula-note\">时频能量守恒。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>功率信号没有总能量，需截取长度 T 的信号，先算能量谱，再除以 T 并令 T→∞ 得功率谱密度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=18&amp;t=3\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 18 集 · 00:03，打开 Bilibili 对应讲解\">第 18 集 · 00:03 ↗</a></li><li>相关运算比卷积少一次波形翻转，因此相关定理中的共轭位置要按定义核对。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=18&amp;t=10\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 18 集 · 00:10，打开 Bilibili 对应讲解\">第 18 集 · 00:10 ↗</a></li><li>能量信号的互相关满足 R₁₂(τ)=∫f₁(t)f₂(t−τ)dt，其傅里叶变换是 F₁(jΩ)F₂*(jΩ)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=18&amp;t=100\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 18 集 · 01:40，打开 Bilibili 对应讲解\">第 18 集 · 01:40 ↗</a></li><li>功率信号自相关与功率谱密度构成维纳—辛钦关系；能量信号与功率信号不能混用同一谱定义。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=18&amp;t=137\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 18 集 · 02:17，打开 Bilibili 对应讲解\">第 18 集 · 02:17 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">相关定理</span>\n          <span class=\"formula\">R<sub>12</sub>(τ) ↔ F₁(jΩ)F₂*(jΩ)</span>\n          <span class=\"formula-note\">第 18 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">能量谱</span>\n          <span class=\"formula\">R(τ) ↔ |F(jΩ)|²</span>\n          <span class=\"formula-note\">第 18 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">功率谱</span>\n          <span class=\"formula\">S(Ω)=lim<sub>T→∞</sub>|F<sub>T</sub>(jΩ)|²/T</span>\n          <span class=\"formula-note\">第 18 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>自相关 R(0)=E 只对能量信号成立；功率信号对应的是平均功率与功率谱密度。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep18/frame-00.jpg\"\n            data-image-title=\"3.4 补充：信号的能量谱与功率谱\"\n            data-image-label=\"第 18 集 · 00:00\"\n            aria-label=\"查看第 18 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep18/frame-00.jpg\" alt=\"第 18 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep18/frame-01.jpg\"\n            data-image-title=\"3.4 补充：信号的能量谱与功率谱\"\n            data-image-label=\"第 18 集 · 05:00\"\n            aria-label=\"查看第 18 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep18/frame-01.jpg\" alt=\"第 18 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep18/frame-02.jpg\"\n            data-image-title=\"3.4 补充：信号的能量谱与功率谱\"\n            data-image-label=\"第 18 集 · 10:00\"\n            aria-label=\"查看第 18 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep18/frame-02.jpg\" alt=\"第 18 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用能量谱密度描述能量在频域的分布，并通过相关定理连接时域相关与频域乘积。</p>\n      <p><mark>自检问题：</mark>为什么 |F(ω)|² 不能携带原信号的相位信息？</p>\n      <p><span class=\"hl-red\">易错点：</span>能量谱不等于功率谱；功率信号的总能量无限，需要改用功率谱密度。</p>\n      <p><mark>迁移到题目时：</mark>能量信号自相关 R(τ) 的傅里叶变换是 |F(jΩ)|²，R(0) 等于总能量。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=18&amp;t=594\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 18 集 · 09:54，打开 Bilibili 对应讲解\">第 18 集 · 09:54 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "功率信号没有总能量，需截取长度 T 的信号，先算能量谱，再除以 T 并令 T→∞ 得功率谱密度。",
        "相关运算比卷积少一次波形翻转，因此相关定理中的共轭位置要按定义核对。",
        "能量信号的互相关满足 R₁₂(τ)=∫f₁(t)f₂(t−τ)dt，其傅里叶变换是 F₁(jΩ)F₂*(jΩ)。",
        "功率信号自相关与功率谱密度构成维纳—辛钦关系；能量信号与功率信号不能混用同一谱定义。",
        "能量信号自相关 R(τ) 的傅里叶变换是 |F(jΩ)|²，R(0) 等于总能量。"
      ],
      "extraFormulas": [
        {
          "label": "相关定理",
          "expr": "R<sub>12</sub>(τ) ↔ F₁(jΩ)F₂*(jΩ)",
          "note": "第 18 集讲解"
        },
        {
          "label": "能量谱",
          "expr": "R(τ) ↔ |F(jΩ)|²",
          "note": "第 18 集讲解"
        },
        {
          "label": "功率谱",
          "expr": "S(Ω)=lim<sub>T→∞</sub>|F<sub>T</sub>(jΩ)|²/T",
          "note": "第 18 集讲解"
        }
      ],
      "finalPitfall": "能量谱不等于功率谱；功率信号的总能量无限，需要改用功率谱密度。 自相关 R(0)=E 只对能量信号成立；功率信号对应的是平均功率与功率谱密度。"
    },
    "s3-ex": {
      "concept": "\n      <p><mark>集中训练级数展开、频谱换算、傅里叶性质、采样定理和频域响应。</mark></p>\n      <p>以正交分解为入口，从傅里叶级数走向傅里叶变换，建立周期/非周期信号的频谱描述；再把系统响应转化为频域乘法，讨论采样定理、无失真传输与理想滤波器。</p>\n      <p>本节要解决的具体问题：选一道综合题，分别用级数和傅里叶变换两种方法验证结果。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>先画时域波形和频谱草图，再代公式；单双边谱换算注意直流与倍率。</li><li>采样题先找最高频率与采样频率，再判断是否混叠。</li><li>无失真、理想低通和能量谱是综合题高频组合点。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复盘重点</span>\n      <span class=\"formula\">性质 → 变换对 → 频谱图 → 系统响应</span>\n      <span class=\"formula-note\">按链路检查每一步条件。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>集中训练级数展开、频谱换算、傅里叶性质、采样定理和频域响应。</p>\n      <p><mark>自检问题：</mark>选一道综合题，分别用级数和傅里叶变换两种方法验证结果。</p>\n      <p><span class=\"hl-red\">易错点：</span>傅里叶性质题最容易漏掉时移相位因子、尺度因子和 1/2π 系数。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "傅里叶性质题最容易漏掉时移相位因子、尺度因子和 1/2π 系数。"
    }
  },
  "ch4": {
    "s4-0": {
      "concept": "\n      <p><mark>说明引入拉普拉斯变换的两个理由：处理增长型信号，并自然纳入非零初始条件。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：为什么 e&lt;sup&gt;2t&lt;/sup&gt;ε(t) 没有普通傅里叶变换，却可以有拉普拉斯变换？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>傅里叶变换要求信号绝对可积，许多增长信号不满足；乘以衰减因子 e<sup>−σt</sup> 可扩大适用范围。</li><li>拉普拉斯变换同时包含稳态和瞬态信息，适合分析含初始储能的系统。</li><li>s 域把微分、积分和卷积转换为代数运算，是连续系统分析的主力工具。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复频率</span>\n      <span class=\"formula\">s=σ+jω</span>\n      <span class=\"formula-note\">σ 控制指数包络，ω 控制振荡。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>说明引入拉普拉斯变换的两个理由：处理增长型信号，并自然纳入非零初始条件。</p>\n      <p><mark>自检问题：</mark>为什么 e&lt;sup&gt;2t&lt;/sup&gt;ε(t) 没有普通傅里叶变换，却可以有拉普拉斯变换？</p>\n      <p><span class=\"hl-red\">易错点：</span>拉普拉斯变换不是傅里叶变换的简单替代；两者的收敛条件和能描述的信号范围不同。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "拉普拉斯变换不是傅里叶变换的简单替代；两者的收敛条件和能描述的信号范围不同。"
    },
    "s4-1-1": {
      "concept": "\n      <p><mark>对信号乘 e&lt;sup&gt;−σt&lt;/sup&gt; 后再做傅里叶变换，得到复频率 s=σ+jω 的拉普拉斯变换。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：若 F(s)=1/(s+2)，ROC 为 Re(s)&gt;−2，能否直接令 s=jω 得到傅里叶变换？</p><p>拉普拉斯变换把傅里叶变换推广到复频率，用收敛域把增长信号和初始条件纳入同一个代数框架。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=42\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 00:42，打开 Bilibili 对应讲解\">第 24 集 · 00:42 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>选择适当的 σ，使 f(t)e<sup>−σt</sup> 绝对可积，即可定义拉普拉斯变换。</li><li>F(s)=∫f(t)e<sup>−st</sup>dt，把傅里叶变换中的 jω 推广为复变量 s。</li><li>当收敛域包含虚轴时，令 s=jω 可得到傅里叶变换。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">定义来源</span>\n      <span class=\"formula\">ℒ{f(t)}=ℱ{f(t)e<sup>−σt</sup>}|<sub>ω→s/j</sub></span>\n      <span class=\"formula-note\">直观理解为带衰减因子的傅里叶变换。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">复频率</span>\n          <span class=\"formula\">s=σ+jω</span>\n          <span class=\"formula-note\">第 24 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>对信号乘 e&lt;sup&gt;−σt&lt;/sup&gt; 后再做傅里叶变换，得到复频率 s=σ+jω 的拉普拉斯变换。</p>\n      <p><mark>自检问题：</mark>若 F(s)=1/(s+2)，ROC 为 Re(s)&gt;−2，能否直接令 s=jω 得到傅里叶变换？</p>\n      <p><span class=\"hl-red\">易错点：</span>不能无条件用 s=jω 互换两种变换；必须检查 jω 是否在收敛域内。</p>\n      <p><mark>迁移到题目时：</mark>定义 s=σ+jω，F(s)=∫f(t)e^{−st}dt；傅里叶变换是它在虚轴上的特殊取值，前提是虚轴在收敛域内。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=42\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 00:42，打开 Bilibili 对应讲解\">第 24 集 · 00:42 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "定义 s=σ+jω，F(s)=∫f(t)e^{−st}dt；傅里叶变换是它在虚轴上的特殊取值，前提是虚轴在收敛域内。"
      ],
      "extraFormulas": [
        {
          "label": "复频率",
          "expr": "s=σ+jω",
          "note": "第 24 集讲解"
        }
      ],
      "finalPitfall": "不能无条件用 s=jω 互换两种变换；必须检查 jω 是否在收敛域内。 s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。"
    },
    "s4-1-2": {
      "concept": "\n      <p><mark>收敛域是使积分收敛的 s 平面区域；不同 ROC 对应不同时间信号。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：F(s)=1/[(s+1)(s−2)] 若 ROC 为 −1&lt;Re(s)&lt;2，对应左边、右边还是双边信号？</p><p>拉普拉斯变换把傅里叶变换推广到复频率，用收敛域把增长信号和初始条件纳入同一个代数框架。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=1132\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 18:52，打开 Bilibili 对应讲解\">第 24 集 · 18:52 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>双边变换 ℒ<sub>b</sub>{f(t)}=∫<sub>−∞</sub><sup>∞</sup>f(t)e<sup>−st</sup>dt，收敛域通常由若干条平行于虚轴的边界围成。</li><li>右边信号的 ROC 在最右极点右侧，左边信号在最左极点左侧，双边信号可能是竖直带状。</li><li>同一个 F(s) 配不同 ROC 可对应不同信号；ROC 是变换的一部分。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">右边信号</span>\n      <span class=\"formula\">ROC: Re(s)>σ<sub>max</sub></span>\n      <span class=\"formula-note\">因果型信号常见。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">双边信号</span>\n      <span class=\"formula\">ROC: σ₁<Re(s)<σ₂</span>\n      <span class=\"formula-note\">带状收敛域。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>同一个 F(s) 搭配不同 ROC 可对应不同时间信号，因此只写 F(s) 不写 ROC 是不完整的。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=3\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 00:03，打开 Bilibili 对应讲解\">第 24 集 · 00:03 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">双边变换</span>\n          <span class=\"formula\">F(s)=∫<sub>−∞</sub><sup>∞</sup>f(t)e<sup>−st</sup>dt</span>\n          <span class=\"formula-note\">第 24 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-00.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 00:00\"\n            aria-label=\"查看第 24 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-00.jpg\" alt=\"第 24 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-01.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 05:00\"\n            aria-label=\"查看第 24 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-01.jpg\" alt=\"第 24 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-02.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 10:00\"\n            aria-label=\"查看第 24 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-02.jpg\" alt=\"第 24 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-03.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 15:00\"\n            aria-label=\"查看第 24 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-03.jpg\" alt=\"第 24 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-04.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 20:00\"\n            aria-label=\"查看第 24 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-04.jpg\" alt=\"第 24 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-05.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 25:00\"\n            aria-label=\"查看第 24 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-05.jpg\" alt=\"第 24 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep24/frame-06.jpg\"\n            data-image-title=\"4.1 拉普拉斯变换\"\n            data-image-label=\"第 24 集 · 30:00\"\n            aria-label=\"查看第 24 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep24/frame-06.jpg\" alt=\"第 24 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>收敛域是使积分收敛的 s 平面区域；不同 ROC 对应不同时间信号。</p>\n      <p><mark>自检问题：</mark>F(s)=1/[(s+1)(s−2)] 若 ROC 为 −1&lt;Re(s)&lt;2，对应左边、右边还是双边信号？</p>\n      <p><span class=\"hl-red\">易错点：</span>只写 F(s) 不写 ROC 是不完整的；逆变换结果会因 ROC 不同而改变。</p>\n      <p><mark>迁移到题目时：</mark>右边信号的 ROC 在最右极点右侧，左边信号在最左极点左侧，双边信号可能在竖直带内。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=1132\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 18:52，打开 Bilibili 对应讲解\">第 24 集 · 18:52 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "同一个 F(s) 搭配不同 ROC 可对应不同时间信号，因此只写 F(s) 不写 ROC 是不完整的。",
        "右边信号的 ROC 在最右极点右侧，左边信号在最左极点左侧，双边信号可能在竖直带内。"
      ],
      "extraFormulas": [
        {
          "label": "双边变换",
          "expr": "F(s)=∫<sub>−∞</sub><sup>∞</sup>f(t)e<sup>−st</sup>dt",
          "note": "第 24 集讲解"
        }
      ],
      "finalPitfall": "只写 F(s) 不写 ROC 是不完整的；逆变换结果会因 ROC 不同而改变。 s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。"
    },
    "s4-1-3": {
      "concept": "\n      <p><mark>单边变换从 0&lt;sup&gt;−&lt;/sup&gt; 开始积分，专门处理因果信号和含初始条件的系统。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：为什么单边拉普拉斯变换适合解带初始条件的微分方程？</p><p>拉普拉斯变换把傅里叶变换推广到复频率，用收敛域把增长信号和初始条件纳入同一个代数框架。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=713\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 11:53，打开 Bilibili 对应讲解\">第 24 集 · 11:53 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>F(s)=∫<sub>0−</sub><sup>∞</sup>f(t)e<sup>−st</sup>dt，重点是 t≥0 的行为。</li><li>单边变换天然包含初始条件项，是求解微分方程初值问题的标准工具。</li><li>对因果信号，单边与双边变换可能一致，但 ROC 通常写为右半平面。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单边变换</span>\n      <span class=\"formula\">F(s)=∫<sub>0−</sub><sup>∞</sup>f(t)e<sup>−st</sup>dt</span>\n      <span class=\"formula-note\">下限取 0−，以纳入原点冲激。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单边变换</span>\n          <span class=\"formula\">F(s)=∫<sub>0<sup>−</sup></sub><sup>∞</sup>f(t)e<sup>−st</sup>dt</span>\n          <span class=\"formula-note\">第 24 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>单边变换从 0&lt;sup&gt;−&lt;/sup&gt; 开始积分，专门处理因果信号和含初始条件的系统。</p>\n      <p><mark>自检问题：</mark>为什么单边拉普拉斯变换适合解带初始条件的微分方程？</p>\n      <p><span class=\"hl-red\">易错点：</span>下限 0&lt;sup&gt;−&lt;/sup&gt; 与 0&lt;sup&gt;+&lt;/sup&gt; 会影响原点处冲激是否被计入；系统初始条件题必须统一约定。</p>\n      <p><mark>迁移到题目时：</mark>单边拉普拉斯变换从 0⁻ 开始，专门处理 t≥0 的因果信号和初值问题。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=713\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 11:53，打开 Bilibili 对应讲解\">第 24 集 · 11:53 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "单边拉普拉斯变换从 0⁻ 开始，专门处理 t≥0 的因果信号和初值问题。"
      ],
      "extraFormulas": [
        {
          "label": "单边变换",
          "expr": "F(s)=∫<sub>0<sup>−</sup></sub><sup>∞</sup>f(t)e<sup>−st</sup>dt",
          "note": "第 24 集讲解"
        }
      ],
      "finalPitfall": "下限 0<sup>−</sup> 与 0<sup>+</sup> 会影响原点处冲激是否被计入；系统初始条件题必须统一约定。 s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。"
    },
    "s4-1-4": {
      "concept": "\n      <p><mark>熟记冲激、阶跃、指数、幂函数和正弦类的单边变换对。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：写出 t²ε(t) 与 e&lt;sup&gt;−3t&lt;/sup&gt;cos(2t)ε(t) 的拉普拉斯变换。</p><p>拉普拉斯变换把傅里叶变换推广到复频率，用收敛域把增长信号和初始条件纳入同一个代数框架。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=49\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 00:49，打开 Bilibili 对应讲解\">第 24 集 · 00:49 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>δ(t) ↔ 1，ε(t) ↔ 1/s，t<sup>n</sup>ε(t) ↔ n!/s<sup>n+1</sup>。</li><li>e<sup>−at</sup>ε(t) ↔ 1/(s+a)，是部分分式展开的基本单元。</li><li>sin ωt ε(t)、cos ωt ε(t) 的变换可通过欧拉公式或指数变换对推出。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">基本对</span>\n      <span class=\"formula\">δ(t)↔1,&nbsp; ε(t)↔1/s,&nbsp; e<sup>−at</sup>ε(t)↔1/(s+a)</span>\n      <span class=\"formula-note\">单边、因果。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">正弦</span>\n      <span class=\"formula\">sin(ωt)ε(t)↔ω/(s²+ω²)</span>\n      <span class=\"formula-note\">余弦为 s/(s²+ω²)。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>熟记冲激、阶跃、指数、幂函数和正弦类的单边变换对。</p>\n      <p><mark>自检问题：</mark>写出 t²ε(t) 与 e&lt;sup&gt;−3t&lt;/sup&gt;cos(2t)ε(t) 的拉普拉斯变换。</p>\n      <p><span class=\"hl-red\">易错点：</span>这些变换对默认乘 ε(t)；若信号是双边指数，必须配合 ROC 重新判断。</p>\n      <p><mark>迁移到题目时：</mark>常见单边对：δ(t)↔1，ε(t)↔1/s，e^{−at}ε(t)↔1/(s+a)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=24&amp;t=49\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 24 集 · 00:49，打开 Bilibili 对应讲解\">第 24 集 · 00:49 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "常见单边对：δ(t)↔1，ε(t)↔1/s，e^{−at}ε(t)↔1/(s+a)。"
      ],
      "extraFormulas": [],
      "finalPitfall": "这些变换对默认乘 ε(t)；若信号是双边指数，必须配合 ROC 重新判断。 s=jω 的代入不是无条件的；jω 落在 ROC 外时，普通傅里叶变换可能不存在。"
    },
    "s4-2": {
      "concept": "\n      <p><mark>掌握线性、时移、s 域平移、微分、积分、卷积和初值/终值定理。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：用微分性质把 y′+2y=f(t) 转成 s 域方程，初始条件 y(0&lt;sup&gt;−&lt;/sup&gt;)=1 应出现在哪里？</p><p>单边拉普拉斯性质要为“初值问题”服务，移位、尺度、调制定理中的区间和初始条件不能照搬双边公式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=25&amp;t=43\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 25 集 · 00:43，打开 Bilibili 对应讲解\">第 25 集 · 00:43 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>微分性质把初始条件显式带入：ℒ{f′}=sF(s)−f(0<sup>−</sup>)。</li><li>时域卷积对应 s 域乘法；时域乘 e<sup>−at</sup> 对应 s 域平移。</li><li>初值定理和终值定理可在已知 F(s) 时快速估算时域边界值，但需满足条件。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">一阶微分</span>\n      <span class=\"formula\">ℒ{f′(t)}=sF(s)−f(0<sup>−</sup>)</span>\n      <span class=\"formula-note\">单边变换的核心公式。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">二阶微分</span>\n      <span class=\"formula\">ℒ{f″}=s²F(s)−sf(0<sup>−</sup>)−f′(0<sup>−</sup>)</span>\n      <span class=\"formula-note\">初始条件逐项扣除。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">卷积</span>\n      <span class=\"formula\">f(t)*h(t) ↔ F(s)H(s)</span>\n      <span class=\"formula-note\">零状态响应。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>这些性质把求未知信号变换变成已知变换对的组合，是后续部分分式逆变换的工具。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=25&amp;t=7\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 25 集 · 00:07，打开 Bilibili 对应讲解\">第 25 集 · 00:07 ↗</a></li><li>线性性质保持收敛域的公共部分；多个信号相加后不能自动扩大每一部分的 ROC。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=25&amp;t=43\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 25 集 · 00:43，打开 Bilibili 对应讲解\">第 25 集 · 00:43 ↗</a></li><li>乘以 e^{at} 对应 s 域平移；时间尺度变换则同时改变收敛域边界。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=25&amp;t=206\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 25 集 · 03:26，打开 Bilibili 对应讲解\">第 25 集 · 03:26 ↗</a></li><li>时域移位在单边变换中会改变 0 附近样本是否进入积分，不能随意写作 z/s 因子的简单乘除。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=25&amp;t=811\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 25 集 · 13:31，打开 Bilibili 对应讲解\">第 25 集 · 13:31 ↗</a></li><li>每个性质都要先问：单边还是双边？信号因果吗？初值为零吗？ <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=25&amp;t=950\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 25 集 · 15:50，打开 Bilibili 对应讲解\">第 25 集 · 15:50 ↗</a></li><li>一阶微分：L[f′]=sF(s)−f(0⁻)；二阶微分继续扣除 sf(0⁻) 和 f′(0⁻)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=26&amp;t=36\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 26 集 · 00:36，打开 Bilibili 对应讲解\">第 26 集 · 00:36 ↗</a></li><li>n 阶微分得到的初始条件项是 s 的多项式，不能简单当成一个常数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=26&amp;t=482\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 26 集 · 08:02，打开 Bilibili 对应讲解\">第 26 集 · 08:02 ↗</a></li><li>积分性质对应除以 s 并加入 0⁻ 积分值；做积分电路和阶跃响应时要特别小心。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=26&amp;t=1593\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 26 集 · 26:33，打开 Bilibili 对应讲解\">第 26 集 · 26:33 ↗</a></li><li>方程两边同时变换，把初始条件归入右侧，才能得到完整的 Y(s)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=26&amp;t=1693\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 26 集 · 28:13，打开 Bilibili 对应讲解\">第 26 集 · 28:13 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">线性</span>\n          <span class=\"formula\">L[af+bg]=aF(s)+bG(s)</span>\n          <span class=\"formula-note\">第 25 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">s 域平移</span>\n          <span class=\"formula\">L[e<sup>at</sup>f(t)]=F(s−a)</span>\n          <span class=\"formula-note\">第 25 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">尺度</span>\n          <span class=\"formula\">L[f(at)]=(1/a)F(s/a)，a>0</span>\n          <span class=\"formula-note\">第 25 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">一阶微分</span>\n          <span class=\"formula\">L[f′]=sF(s)−f(0<sup>−</sup>)</span>\n          <span class=\"formula-note\">第 26 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">二阶微分</span>\n          <span class=\"formula\">L[f″]=s²F(s)−sf(0<sup>−</sup>)−f′(0<sup>−</sup>)</span>\n          <span class=\"formula-note\">第 26 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">终值</span>\n          <span class=\"formula\">lim<sub>t→∞</sub>f(t)=lim<sub>s→0</sub>sF(s)（条件满足时）</span>\n          <span class=\"formula-note\">第 26 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>单边移位公式不是只有 z/s 因子，可能还带初始样本项；这和第 7 章单边 Z 变换的陷阱相同。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep25/frame-00.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质I\"\n            data-image-label=\"第 25 集 · 00:00\"\n            aria-label=\"查看第 25 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep25/frame-00.jpg\" alt=\"第 25 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep25/frame-01.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质I\"\n            data-image-label=\"第 25 集 · 05:00\"\n            aria-label=\"查看第 25 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep25/frame-01.jpg\" alt=\"第 25 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep25/frame-02.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质I\"\n            data-image-label=\"第 25 集 · 10:00\"\n            aria-label=\"查看第 25 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep25/frame-02.jpg\" alt=\"第 25 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep25/frame-03.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质I\"\n            data-image-label=\"第 25 集 · 15:00\"\n            aria-label=\"查看第 25 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep25/frame-03.jpg\" alt=\"第 25 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep25/frame-04.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质I\"\n            data-image-label=\"第 25 集 · 20:00\"\n            aria-label=\"查看第 25 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep25/frame-04.jpg\" alt=\"第 25 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep25/frame-05.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质I\"\n            data-image-label=\"第 25 集 · 25:00\"\n            aria-label=\"查看第 25 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep25/frame-05.jpg\" alt=\"第 25 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-00.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 00:00\"\n            aria-label=\"查看第 26 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-00.jpg\" alt=\"第 26 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-01.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 05:00\"\n            aria-label=\"查看第 26 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-01.jpg\" alt=\"第 26 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-02.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 10:00\"\n            aria-label=\"查看第 26 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-02.jpg\" alt=\"第 26 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-03.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 15:00\"\n            aria-label=\"查看第 26 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-03.jpg\" alt=\"第 26 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-04.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 20:00\"\n            aria-label=\"查看第 26 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-04.jpg\" alt=\"第 26 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-05.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 25:00\"\n            aria-label=\"查看第 26 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-05.jpg\" alt=\"第 26 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-06.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 30:00\"\n            aria-label=\"查看第 26 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-06.jpg\" alt=\"第 26 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-07.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 35:00\"\n            aria-label=\"查看第 26 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-07.jpg\" alt=\"第 26 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep26/frame-08.jpg\"\n            data-image-title=\"4.2 单边拉普拉斯变换的性质II\"\n            data-image-label=\"第 26 集 · 40:00\"\n            aria-label=\"查看第 26 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep26/frame-08.jpg\" alt=\"第 26 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握线性、时移、s 域平移、微分、积分、卷积和初值/终值定理。</p>\n      <p><mark>自检问题：</mark>用微分性质把 y′+2y=f(t) 转成 s 域方程，初始条件 y(0&lt;sup&gt;−&lt;/sup&gt;)=1 应出现在哪里？</p>\n      <p><span class=\"hl-red\">易错点：</span>微分性质中的初始条件项最易漏；终值定理只适用于终值存在的稳定系统。</p>\n      <p><mark>迁移到题目时：</mark>初值定理、终值定理可快速读时域端点，但终值定理要求极限存在，稳定性和极点位置必须先检查。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=26&amp;t=2407\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 26 集 · 40:07，打开 Bilibili 对应讲解\">第 26 集 · 40:07 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "这些性质把求未知信号变换变成已知变换对的组合，是后续部分分式逆变换的工具。",
        "线性性质保持收敛域的公共部分；多个信号相加后不能自动扩大每一部分的 ROC。",
        "乘以 e^{at} 对应 s 域平移；时间尺度变换则同时改变收敛域边界。",
        "时域移位在单边变换中会改变 0 附近样本是否进入积分，不能随意写作 z/s 因子的简单乘除。",
        "每个性质都要先问：单边还是双边？信号因果吗？初值为零吗？",
        "一阶微分：L[f′]=sF(s)−f(0⁻)；二阶微分继续扣除 sf(0⁻) 和 f′(0⁻)。",
        "n 阶微分得到的初始条件项是 s 的多项式，不能简单当成一个常数。",
        "积分性质对应除以 s 并加入 0⁻ 积分值；做积分电路和阶跃响应时要特别小心。",
        "方程两边同时变换，把初始条件归入右侧，才能得到完整的 Y(s)。",
        "初值定理、终值定理可快速读时域端点，但终值定理要求极限存在，稳定性和极点位置必须先检查。"
      ],
      "extraFormulas": [
        {
          "label": "线性",
          "expr": "L[af+bg]=aF(s)+bG(s)",
          "note": "第 25 集讲解"
        },
        {
          "label": "s 域平移",
          "expr": "L[e<sup>at</sup>f(t)]=F(s−a)",
          "note": "第 25 集讲解"
        },
        {
          "label": "尺度",
          "expr": "L[f(at)]=(1/a)F(s/a)，a>0",
          "note": "第 25 集讲解"
        },
        {
          "label": "一阶微分",
          "expr": "L[f′]=sF(s)−f(0<sup>−</sup>)",
          "note": "第 26 集讲解"
        },
        {
          "label": "二阶微分",
          "expr": "L[f″]=s²F(s)−sf(0<sup>−</sup>)−f′(0<sup>−</sup>)",
          "note": "第 26 集讲解"
        },
        {
          "label": "终值",
          "expr": "lim<sub>t→∞</sub>f(t)=lim<sub>s→0</sub>sF(s)（条件满足时）",
          "note": "第 26 集讲解"
        }
      ],
      "finalPitfall": "微分性质中的初始条件项最易漏；终值定理只适用于终值存在的稳定系统。 单边移位公式不是只有 z/s 因子，可能还带初始样本项；这和第 7 章单边 Z 变换的陷阱相同。 初值项漏 s 的幂、把 0⁻ 写成 0⁺、终值定理用于发散系统，是最常见错误。"
    },
    "s4-3-1": {
      "concept": "\n      <p><mark>由 F(s) 恢复 t≥0 的时域信号，结果通常是因果信号与指数/正弦模态的组合。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：为什么单边拉氏逆变换结果通常要乘 ε(t)？</p><p>遇到共轭复极点、重复极点或与基本变换对相近的有理函数时，配方法、留数和 s 域平移往往比硬积分更快。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=28&amp;t=23\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 28 集 · 00:23，打开 Bilibili 对应讲解\">第 28 集 · 00:23 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>逆变换由复平面积分给出，但实际题中主要使用部分分式和查表。</li><li>单边逆变换只关心 t≥0，通常默认结果乘以 ε(t)。</li><li>若 F(s) 为有理函数，极点决定时域模态类型。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单边逆变换</span>\n      <span class=\"formula\">f(t)=(1/2πj)∫<sub>c−j∞</sub><sup>c+j∞</sup>F(s)e<sup>st</sup>ds</span>\n      <span class=\"formula-note\">积分路径位于 ROC 内。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>展开后可用通分或取极限复核系数，并保留单边逆变换的 ε(t) 与 ROC 约定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=27&amp;t=14\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 27 集 · 00:14，打开 Bilibili 对应讲解\">第 27 集 · 00:14 ↗</a></li><li>共轭复极点可通过配成 (s+α)²+β² 后查指数正弦/余弦表。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=27&amp;t=1318\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 27 集 · 21:58，打开 Bilibili 对应讲解\">第 27 集 · 21:58 ↗</a></li><li>含 (s−a) 平移的复杂项，可先对已知 cos/sin 变换应用 s 域平移性质。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=28&amp;t=23\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 28 集 · 00:23，打开 Bilibili 对应讲解\">第 28 集 · 00:23 ↗</a></li><li>逆变换结果要结合单边/双边 ROC 判断是否乘 ε(t)，不能只看代数形式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=28&amp;t=599\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 28 集 · 09:59，打开 Bilibili 对应讲解\">第 28 集 · 09:59 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>共轭项的系数通常是复数共轭，直接取实部时不要漏 2 倍或相位偏移。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep28/frame-00.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换II\"\n            data-image-label=\"第 28 集 · 00:00\"\n            aria-label=\"查看第 28 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep28/frame-00.jpg\" alt=\"第 28 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep28/frame-01.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换II\"\n            data-image-label=\"第 28 集 · 05:00\"\n            aria-label=\"查看第 28 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep28/frame-01.jpg\" alt=\"第 28 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep28/frame-02.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换II\"\n            data-image-label=\"第 28 集 · 10:00\"\n            aria-label=\"查看第 28 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep28/frame-02.jpg\" alt=\"第 28 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep28/frame-03.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换II\"\n            data-image-label=\"第 28 集 · 15:00\"\n            aria-label=\"查看第 28 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep28/frame-03.jpg\" alt=\"第 28 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>由 F(s) 恢复 t≥0 的时域信号，结果通常是因果信号与指数/正弦模态的组合。</p>\n      <p><mark>自检问题：</mark>为什么单边拉氏逆变换结果通常要乘 ε(t)？</p>\n      <p><span class=\"hl-red\">易错点：</span>单边逆变换不自动告诉你 t&lt;0 的值；若要求完整双边信号，必须使用双边变换与 ROC。</p>\n      <p><mark>迁移到题目时：</mark>检查答案可以回代 F(s) 或验证 t=0、t→∞ 的边界行为。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=28&amp;t=897\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 28 集 · 14:57，打开 Bilibili 对应讲解\">第 28 集 · 14:57 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "展开后可用通分或取极限复核系数，并保留单边逆变换的 ε(t) 与 ROC 约定。",
        "共轭复极点可通过配成 (s+α)²+β² 后查指数正弦/余弦表。",
        "含 (s−a) 平移的复杂项，可先对已知 cos/sin 变换应用 s 域平移性质。",
        "逆变换结果要结合单边/双边 ROC 判断是否乘 ε(t)，不能只看代数形式。",
        "检查答案可以回代 F(s) 或验证 t=0、t→∞ 的边界行为。"
      ],
      "extraFormulas": [],
      "finalPitfall": "单边逆变换不自动告诉你 t<0 的值；若要求完整双边信号，必须使用双边变换与 ROC。 重极点不能只写一个一次项；复极点配平方时 α、β 的符号要与指数衰减方向一致。 共轭项的系数通常是复数共轭，直接取实部时不要漏 2 倍或相位偏移。"
    },
    "s4-3-2": {
      "concept": "\n      <p><mark>把有理 F(s) 拆成简单一阶/二阶项，再逐项查表逆变换。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：把 (s+3)/[(s+1)(s+2)] 展开并逆变换。</p><p>单边反变换的实用核心是有理函数部分分式：先判真/假分式，再按单极点、重极点、共轭极点分别拆项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=27&amp;t=50\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 27 集 · 00:50，打开 Bilibili 对应讲解\">第 27 集 · 00:50 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>先确保为真分式：分子次数不低于分母时先做多项式除法。</li><li>单实极点用 A/(s−p)；重极点用 A/(s−p)<sup>m</sup> 系列；共轭复极点合并为二阶项。</li><li>每个极点对应 e<sup>pt</sup> 型模态；系数由留数或待定系数法求。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单极点展开</span>\n      <span class=\"formula\">F(s)=ΣA<sub>i</sub>/(s−p<sub>i</sub>) ⇒ f(t)=ΣA<sub>i</sub>e<sup>p<sub>i</sub>t</sup>ε(t)</span>\n      <span class=\"formula-note\">单边、单极点。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">重极点</span>\n      <span class=\"formula\">1/(s−p)² ↔ t e<sup>pt</sup>ε(t)</span>\n      <span class=\"formula-note\">重数增加一个 t 因子。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>分子次数大于等于分母次数时先做多项式除法，否则直接展开会留下无法查表的真分式部分之外的项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=27&amp;t=50\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 27 集 · 00:50，打开 Bilibili 对应讲解\">第 27 集 · 00:50 ↗</a></li><li>单实极点 p 的项 A/(s−p) 对应 A e^{pt}ε(t)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=27&amp;t=440\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 27 集 · 07:20，打开 Bilibili 对应讲解\">第 27 集 · 07:20 ↗</a></li><li>重极点需保留 (s−p)^{-1},…,(s−p)^{-m} 全部项；重复求导求系数容易漏项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=27&amp;t=878\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 27 集 · 14:38，打开 Bilibili 对应讲解\">第 27 集 · 14:38 ↗</a></li><li>共轭极点项要按 (s+α)²+β² 组合，分别对应 e^{−αt}cosβt 与 e^{−αt}sinβt。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=28&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 28 集 · 00:00，打开 Bilibili 对应讲解\">第 28 集 · 00:00 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单极点</span>\n          <span class=\"formula\">A/(s−p) ↔ A e<sup>pt</sup>ε(t)</span>\n          <span class=\"formula-note\">第 27 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">二次重极点</span>\n          <span class=\"formula\">1/(s−p)² ↔ t e<sup>pt</sup>ε(t)</span>\n          <span class=\"formula-note\">第 27 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">复极点</span>\n          <span class=\"formula\">β/[(s+α)²+β²] ↔ e<sup>−αt</sup>sin βt ε(t)</span>\n          <span class=\"formula-note\">第 27 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">余弦</span>\n          <span class=\"formula\">s/[(s+α)²+β²] 给出衰减余弦项</span>\n          <span class=\"formula-note\">第 28 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">正弦</span>\n          <span class=\"formula\">β/[(s+α)²+β²] 给出衰减正弦项</span>\n          <span class=\"formula-note\">第 28 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">平移</span>\n          <span class=\"formula\">L[e<sup>at</sup>f(t)]=F(s−a)</span>\n          <span class=\"formula-note\">第 28 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>重极点不能只写一个一次项；复极点配平方时 α、β 的符号要与指数衰减方向一致。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-00.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 00:00\"\n            aria-label=\"查看第 27 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-00.jpg\" alt=\"第 27 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-01.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 05:00\"\n            aria-label=\"查看第 27 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-01.jpg\" alt=\"第 27 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-02.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 10:00\"\n            aria-label=\"查看第 27 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-02.jpg\" alt=\"第 27 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-03.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 15:00\"\n            aria-label=\"查看第 27 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-03.jpg\" alt=\"第 27 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-04.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 20:00\"\n            aria-label=\"查看第 27 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-04.jpg\" alt=\"第 27 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-05.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 25:00\"\n            aria-label=\"查看第 27 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-05.jpg\" alt=\"第 27 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-06.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 30:00\"\n            aria-label=\"查看第 27 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-06.jpg\" alt=\"第 27 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep27/frame-07.jpg\"\n            data-image-title=\"4.3 单边拉普拉斯反变换I\"\n            data-image-label=\"第 27 集 · 35:00\"\n            aria-label=\"查看第 27 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep27/frame-07.jpg\" alt=\"第 27 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把有理 F(s) 拆成简单一阶/二阶项，再逐项查表逆变换。</p>\n      <p><mark>自检问题：</mark>把 (s+3)/[(s+1)(s+2)] 展开并逆变换。</p>\n      <p><span class=\"hl-red\">易错点：</span>部分分式系数求错通常来自极点代入时漏乘或重极点展开不完整；求完可通分验算。</p>\n      <p><mark>迁移到题目时：</mark>重极点可先拆成一阶项后逆变换，再用 t e^{−at} 等标准对组合。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=28&amp;t=448\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 28 集 · 07:28，打开 Bilibili 对应讲解\">第 28 集 · 07:28 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "分子次数大于等于分母次数时先做多项式除法，否则直接展开会留下无法查表的真分式部分之外的项。",
        "单实极点 p 的项 A/(s−p) 对应 A e^{pt}ε(t)。",
        "重极点需保留 (s−p)^{-1},…,(s−p)^{-m} 全部项；重复求导求系数容易漏项。",
        "共轭极点项要按 (s+α)²+β² 组合，分别对应 e^{−αt}cosβt 与 e^{−αt}sinβt。",
        "重极点可先拆成一阶项后逆变换，再用 t e^{−at} 等标准对组合。"
      ],
      "extraFormulas": [
        {
          "label": "单极点",
          "expr": "A/(s−p) ↔ A e<sup>pt</sup>ε(t)",
          "note": "第 27 集讲解"
        },
        {
          "label": "二次重极点",
          "expr": "1/(s−p)² ↔ t e<sup>pt</sup>ε(t)",
          "note": "第 27 集讲解"
        },
        {
          "label": "复极点",
          "expr": "β/[(s+α)²+β²] ↔ e<sup>−αt</sup>sin βt ε(t)",
          "note": "第 27 集讲解"
        },
        {
          "label": "余弦",
          "expr": "s/[(s+α)²+β²] 给出衰减余弦项",
          "note": "第 28 集讲解"
        },
        {
          "label": "正弦",
          "expr": "β/[(s+α)²+β²] 给出衰减正弦项",
          "note": "第 28 集讲解"
        },
        {
          "label": "平移",
          "expr": "L[e<sup>at</sup>f(t)]=F(s−a)",
          "note": "第 28 集讲解"
        }
      ],
      "finalPitfall": "部分分式系数求错通常来自极点代入时漏乘或重极点展开不完整；求完可通分验算。 重极点不能只写一个一次项；复极点配平方时 α、β 的符号要与指数衰减方向一致。 共轭项的系数通常是复数共轭，直接取实部时不要漏 2 倍或相位偏移。"
    },
    "s4-4": {
      "concept": "\n      <p><mark>在 s 域用 Y(s)=H(s)F(s) 求零状态响应，用初始条件项叠加零输入响应。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：同一系统在零状态和非零初始状态下，Y(s)/F(s) 是否相同？为什么？</p><p>把连续系统微分方程整体变换到 s 域后，初值项和激励项分开处理；对零状态系统才有 Y(s)=H(s)E(s)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=269\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 04:29，打开 Bilibili 对应讲解\">第 29 集 · 04:29 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>系统函数 H(s) 是零状态条件下输出与输入的拉氏变换之比。</li><li>零状态响应由 H(s)F(s) 逆变换得到；初始条件产生额外项。</li><li>完全响应可在 s 域直接解出，也可分解为零输入与零状态分别计算。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">系统函数</span>\n      <span class=\"formula\">H(s)=Y(s)/F(s)|<sub>零状态</sub></span>\n      <span class=\"formula-note\">由系统本身决定。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">完全响应</span>\n      <span class=\"formula\">Y(s)=H(s)F(s)+Y<sub>zi</sub>(s)</span>\n      <span class=\"formula-note\">初始条件项不可漏。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>零状态响应可由 H(s)E(s) 求得，零输入响应由初值项对应的齐次系统求得。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=269\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 04:29，打开 Bilibili 对应讲解\">第 29 集 · 04:29 ↗</a></li><li>框图转 s 域时，连续系统基本元件是比例器、加法器和积分器 1/s。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=1039\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 17:19，打开 Bilibili 对应讲解\">第 29 集 · 17:19 ↗</a></li><li>系统函数与冲激响应构成拉普拉斯对，求 H(s) 也可从 h(t) 或方程直接得到。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=1255\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 20:55，打开 Bilibili 对应讲解\">第 29 集 · 20:55 ↗</a></li><li>系统函数 H(s)=Y(s)/E(s) 只在零状态下等于系统外部特征，不包含历史储能。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=2039\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 33:59，打开 Bilibili 对应讲解\">第 29 集 · 33:59 ↗</a></li><li>零状态分析可去掉初始条件源；零输入分析则令外部激励为零，只保留储能等效源。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=314\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 05:14，打开 Bilibili 对应讲解\">第 30 集 · 05:14 ↗</a></li><li>求零输入响应时输入源置零，只保留电容/电感的初值等效源。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=31&amp;t=18\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 31 集 · 00:18，打开 Bilibili 对应讲解\">第 31 集 · 00:18 ↗</a></li><li>求零状态响应时初值源置零，再用输入源和系统函数或网络方程求解。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=31&amp;t=651\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 31 集 · 10:51，打开 Bilibili 对应讲解\">第 31 集 · 10:51 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">完全响应</span>\n          <span class=\"formula\">Y(s)=H(s)E(s)+Y<sub>zi</sub>(s)</span>\n          <span class=\"formula-note\">第 29 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">系统函数</span>\n          <span class=\"formula\">H(s)=Y<sub>zs</sub>(s)/E(s)</span>\n          <span class=\"formula-note\">第 29 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激对</span>\n          <span class=\"formula\">h(t) ↔ H(s)</span>\n          <span class=\"formula-note\">第 29 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">零输入</span>\n          <span class=\"formula\">Y<sub>zi</sub>(s)=由初始条件等效源产生的网络响应</span>\n          <span class=\"formula-note\">第 31 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">零状态</span>\n          <span class=\"formula\">Y<sub>zs</sub>(s)=H(s)E(s)</span>\n          <span class=\"formula-note\">第 31 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">全响应</span>\n          <span class=\"formula\">y(t)=L<sup>−1</sup>{Y<sub>zi</sub>(s)+H(s)E(s)}</span>\n          <span class=\"formula-note\">第 31 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>非零初态时直接用 Y(s)/E(s) 当 H(s) 会把储能误当系统特性；只有在零状态前提下去除初值项后才成立。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-00.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 00:00\"\n            aria-label=\"查看第 29 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-00.jpg\" alt=\"第 29 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-01.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 05:00\"\n            aria-label=\"查看第 29 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-01.jpg\" alt=\"第 29 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-02.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 10:00\"\n            aria-label=\"查看第 29 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-02.jpg\" alt=\"第 29 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-03.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 15:00\"\n            aria-label=\"查看第 29 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-03.jpg\" alt=\"第 29 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-04.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 20:00\"\n            aria-label=\"查看第 29 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-04.jpg\" alt=\"第 29 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-05.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 25:00\"\n            aria-label=\"查看第 29 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-05.jpg\" alt=\"第 29 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep29/frame-06.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析I\"\n            data-image-label=\"第 29 集 · 30:00\"\n            aria-label=\"查看第 29 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep29/frame-06.jpg\" alt=\"第 29 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-00.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 00:00\"\n            aria-label=\"查看第 31 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-00.jpg\" alt=\"第 31 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-01.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 05:00\"\n            aria-label=\"查看第 31 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-01.jpg\" alt=\"第 31 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-02.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 10:00\"\n            aria-label=\"查看第 31 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-02.jpg\" alt=\"第 31 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-03.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 15:00\"\n            aria-label=\"查看第 31 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-03.jpg\" alt=\"第 31 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-04.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 20:00\"\n            aria-label=\"查看第 31 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-04.jpg\" alt=\"第 31 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-05.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 25:00\"\n            aria-label=\"查看第 31 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-05.jpg\" alt=\"第 31 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep31/frame-06.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析III\"\n            data-image-label=\"第 31 集 · 30:00\"\n            aria-label=\"查看第 31 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep31/frame-06.jpg\" alt=\"第 31 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>在 s 域用 Y(s)=H(s)F(s) 求零状态响应，用初始条件项叠加零输入响应。</p>\n      <p><mark>自检问题：</mark>同一系统在零状态和非零初始状态下，Y(s)/F(s) 是否相同？为什么？</p>\n      <p><span class=\"hl-red\">易错点：</span>H(s)=Y/F 只在零状态下成立；直接拿含初始条件的 Y/F 当系统函数会得到错误结果。</p>\n      <p><mark>迁移到题目时：</mark>求冲激响应本质上是先求零状态系统函数 H(s)，再做拉普拉斯反变换。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=31&amp;t=1040\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 31 集 · 17:20，打开 Bilibili 对应讲解\">第 31 集 · 17:20 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "零状态响应可由 H(s)E(s) 求得，零输入响应由初值项对应的齐次系统求得。",
        "框图转 s 域时，连续系统基本元件是比例器、加法器和积分器 1/s。",
        "系统函数与冲激响应构成拉普拉斯对，求 H(s) 也可从 h(t) 或方程直接得到。",
        "系统函数 H(s)=Y(s)/E(s) 只在零状态下等于系统外部特征，不包含历史储能。",
        "零状态分析可去掉初始条件源；零输入分析则令外部激励为零，只保留储能等效源。",
        "求零输入响应时输入源置零，只保留电容/电感的初值等效源。",
        "求零状态响应时初值源置零，再用输入源和系统函数或网络方程求解。",
        "求冲激响应本质上是先求零状态系统函数 H(s)，再做拉普拉斯反变换。"
      ],
      "extraFormulas": [
        {
          "label": "完全响应",
          "expr": "Y(s)=H(s)E(s)+Y<sub>zi</sub>(s)",
          "note": "第 29 集讲解"
        },
        {
          "label": "系统函数",
          "expr": "H(s)=Y<sub>zs</sub>(s)/E(s)",
          "note": "第 29 集讲解"
        },
        {
          "label": "冲激对",
          "expr": "h(t) ↔ H(s)",
          "note": "第 29 集讲解"
        },
        {
          "label": "零输入",
          "expr": "Y<sub>zi</sub>(s)=由初始条件等效源产生的网络响应",
          "note": "第 31 集讲解"
        },
        {
          "label": "零状态",
          "expr": "Y<sub>zs</sub>(s)=H(s)E(s)",
          "note": "第 31 集讲解"
        },
        {
          "label": "全响应",
          "expr": "y(t)=L<sup>−1</sup>{Y<sub>zi</sub>(s)+H(s)E(s)}",
          "note": "第 31 集讲解"
        }
      ],
      "finalPitfall": "H(s)=Y/F 只在零状态下成立；直接拿含初始条件的 Y/F 当系统函数会得到错误结果。 非零初态时直接用 Y(s)/E(s) 当 H(s) 会把储能误当系统特性；只有在零状态前提下去除初值项后才成立。 s 域阻抗与正弦相量法不能混用：s 域保留瞬态和初始条件，相量法只处理正弦稳态。 初值源的极性和电容/电感模型形式容易错；不要把零输入响应当成系统函数的零状态响应。"
    },
    "s4-5": {
      "concept": "\n      <p><mark>对微分方程两边取单边拉氏变换，利用微分性质把初始条件转化为代数项，再解出 Y(s)。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：解 y″+3y′+2y=f(t)，y(0)=1、y′(0)=0，写出 Y(s) 的完整表达式。</p><p>把连续系统微分方程整体变换到 s 域后，初值项和激励项分开处理；对零状态系统才有 Y(s)=H(s)E(s)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=8\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 00:08，打开 Bilibili 对应讲解\">第 29 集 · 00:08 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>逐项变换后得到关于 Y(s) 的线性代数方程，输入项和初始项分别归并。</li><li>解出 Y(s) 后做部分分式分解，逆变换得到完全响应。</li><li>特征多项式对应系统函数的极点，决定固有模态和稳定性。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">一般形式</span>\n      <span class=\"formula\">A(s)Y(s)=B(s)F(s)+C(s)</span>\n      <span class=\"formula-note\">C(s) 汇总初始条件；A(s) 为特征多项式。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>微分方程逐项变换，系统阶数决定出现多少个初始条件项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=29&amp;t=8\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 29 集 · 00:08，打开 Bilibili 对应讲解\">第 29 集 · 00:08 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>非零初态时直接用 Y(s)/E(s) 当 H(s) 会把储能误当系统特性；只有在零状态前提下去除初值项后才成立。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>对微分方程两边取单边拉氏变换，利用微分性质把初始条件转化为代数项，再解出 Y(s)。</p>\n      <p><mark>自检问题：</mark>解 y″+3y′+2y=f(t)，y(0)=1、y′(0)=0，写出 Y(s) 的完整表达式。</p>\n      <p><span class=\"hl-red\">易错点：</span>初始条件项不是“额外加一个常数”，而是 s 的多项式，阶数与微分阶数有关。</p>\n      <p><mark>迁移到题目时：</mark>结果要同时检查初值、稳态和极点决定的响应模态，防止部分分式系数正确但方向/边界错误。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=31&amp;t=1818\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 31 集 · 30:18，打开 Bilibili 对应讲解\">第 31 集 · 30:18 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "微分方程逐项变换，系统阶数决定出现多少个初始条件项。",
        "结果要同时检查初值、稳态和极点决定的响应模态，防止部分分式系数正确但方向/边界错误。"
      ],
      "extraFormulas": [],
      "finalPitfall": "初始条件项不是“额外加一个常数”，而是 s 的多项式，阶数与微分阶数有关。 非零初态时直接用 Y(s)/E(s) 当 H(s) 会把储能误当系统特性；只有在零状态前提下去除初值项后才成立。 初值源的极性和电容/电感模型形式容易错；不要把零输入响应当成系统函数的零状态响应。"
    },
    "s4-6-1": {
      "concept": "\n      <p><mark>把电路变量和元件关系变换到 s 域，使用节点/回路法求解动态电路。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：电容初始电压 v&lt;sub&gt;C&lt;/sub&gt;(0) 在 s 域模型中对应串联电压源还是并联电流源？</p><p>s 域电路分析的关键不是新电路定律，而是把 R、L、C 和初始条件一起换成阻抗与受控/独立源模型。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=56\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 00:56，打开 Bilibili 对应讲解\">第 30 集 · 00:56 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>KCL、KVL 在 s 域保持代数形式；各支路电流/电压用拉氏变换表示。</li><li>动态元件用 s 域阻抗和初始条件电源建模。</li><li>节点电压法、网孔电流法与电阻电路类似，只是阻抗变为 s 的函数。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">s域 KCL/KVL</span>\n      <span class=\"formula\">ΣI(s)=0,&nbsp; ΣU(s)=0</span>\n      <span class=\"formula-note\">对每个独立节点/回路成立。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>KCL、KVL 在 s 域仍成立，只是电流、电压、阻抗都变为 s 的函数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=56\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 00:56，打开 Bilibili 对应讲解\">第 30 集 · 00:56 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>s 域阻抗与正弦相量法不能混用：s 域保留瞬态和初始条件，相量法只处理正弦稳态。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把电路变量和元件关系变换到 s 域，使用节点/回路法求解动态电路。</p>\n      <p><mark>自检问题：</mark>电容初始电压 v&lt;sub&gt;C&lt;/sub&gt;(0) 在 s 域模型中对应串联电压源还是并联电流源？</p>\n      <p><span class=\"hl-red\">易错点：</span>初始条件电源的方向容易画反；必须先统一元件电压电流参考方向。</p>\n      <p><mark>迁移到题目时：</mark>复杂电路可先设节点电压或回路电流，利用串并联阻抗和 KCL/KVL 消元，最后再回到 h(t)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=31&amp;t=154\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 31 集 · 02:34，打开 Bilibili 对应讲解\">第 31 集 · 02:34 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "KCL、KVL 在 s 域仍成立，只是电流、电压、阻抗都变为 s 的函数。",
        "复杂电路可先设节点电压或回路电流，利用串并联阻抗和 KCL/KVL 消元，最后再回到 h(t)。"
      ],
      "extraFormulas": [],
      "finalPitfall": "初始条件电源的方向容易画反；必须先统一元件电压电流参考方向。 s 域阻抗与正弦相量法不能混用：s 域保留瞬态和初始条件，相量法只处理正弦稳态。 初值源的极性和电容/电感模型形式容易错；不要把零输入响应当成系统函数的零状态响应。"
    },
    "s4-6-2": {
      "concept": "\n      <p><mark>掌握 R、L、C 的 s 域阻抗及初始条件等效源，能直接列写 s 域电路方程。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：RLC 串联电路的 s 域总阻抗如何写？初始条件如何体现？</p><p>s 域电路分析的关键不是新电路定律，而是把 R、L、C 和初始条件一起换成阻抗与受控/独立源模型。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=1044\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 17:24，打开 Bilibili 对应讲解\">第 30 集 · 17:24 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>R → R；L → sL，串联初始电流源 Li(0<sup>−</sup>)；C → 1/(sC)，串联初始电压源 v(0<sup>−</sup>)/s。</li><li>零初始条件下，L、C 的 s 域阻抗分别为 sL、1/(sC)，与分析稳态交流电路相似。</li><li>s 域网络函数可由阻抗分压、节点法或系统函数直接得到。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">s域阻抗</span>\n      <span class=\"formula\">Z<sub>R</sub>=R,&nbsp; Z<sub>L</sub>=sL,&nbsp; Z<sub>C</sub>=1/(sC)</span>\n      <span class=\"formula-note\">零初始条件。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">电容初始条件</span>\n      <span class=\"formula\">V<sub>C</sub>(s)=I<sub>C</sub>(s)/(sC)+v<sub>C</sub>(0<sup>−</sup>)/s</span>\n      <span class=\"formula-note\">串联电压源模型。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>初始条件的等效源极性与定义必须和原电路参考方向绑定，不能只记大小。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=207\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 03:27，打开 Bilibili 对应讲解\">第 30 集 · 03:27 ↗</a></li><li>网络函数 H(s) 可由 s 域节点/回路方程直接求输入输出比得到。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=888\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 14:48，打开 Bilibili 对应讲解\">第 30 集 · 14:48 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">s 域阻抗</span>\n          <span class=\"formula\">Z<sub>R</sub>=R，Z<sub>L</sub>=sL，Z<sub>C</sub>=1/(sC)</span>\n          <span class=\"formula-note\">第 30 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">电感关系</span>\n          <span class=\"formula\">V<sub>L</sub>(s)=sL I<sub>L</sub>(s)−L i<sub>L</sub>(0<sup>−</sup>)</span>\n          <span class=\"formula-note\">第 30 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">电容关系</span>\n          <span class=\"formula\">V<sub>C</sub>(s)=I<sub>C</sub>(s)/(sC)+v<sub>C</sub>(0<sup>−</sup>)/s</span>\n          <span class=\"formula-note\">第 30 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>s 域阻抗与正弦相量法不能混用：s 域保留瞬态和初始条件，相量法只处理正弦稳态。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep30/frame-00.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析II\"\n            data-image-label=\"第 30 集 · 00:00\"\n            aria-label=\"查看第 30 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep30/frame-00.jpg\" alt=\"第 30 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep30/frame-01.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析II\"\n            data-image-label=\"第 30 集 · 05:00\"\n            aria-label=\"查看第 30 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep30/frame-01.jpg\" alt=\"第 30 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep30/frame-02.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析II\"\n            data-image-label=\"第 30 集 · 10:00\"\n            aria-label=\"查看第 30 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep30/frame-02.jpg\" alt=\"第 30 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep30/frame-03.jpg\"\n            data-image-title=\"4.4 连续时间系统的复频域分析II\"\n            data-image-label=\"第 30 集 · 15:00\"\n            aria-label=\"查看第 30 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep30/frame-03.jpg\" alt=\"第 30 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握 R、L、C 的 s 域阻抗及初始条件等效源，能直接列写 s 域电路方程。</p>\n      <p><mark>自检问题：</mark>RLC 串联电路的 s 域总阻抗如何写？初始条件如何体现？</p>\n      <p><span class=\"hl-red\">易错点：</span>不要把 s 域阻抗与相量法混淆：s 域包含瞬态，相量法只适用于正弦稳态。</p>\n      <p><mark>迁移到题目时：</mark>电感的 s 域模型含 sL 和串/并联初始电流源；电容模型含 1/(sC) 和初始电压源。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=30&amp;t=1044\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 30 集 · 17:24，打开 Bilibili 对应讲解\">第 30 集 · 17:24 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "初始条件的等效源极性与定义必须和原电路参考方向绑定，不能只记大小。",
        "网络函数 H(s) 可由 s 域节点/回路方程直接求输入输出比得到。",
        "电感的 s 域模型含 sL 和串/并联初始电流源；电容模型含 1/(sC) 和初始电压源。"
      ],
      "extraFormulas": [
        {
          "label": "s 域阻抗",
          "expr": "Z<sub>R</sub>=R，Z<sub>L</sub>=sL，Z<sub>C</sub>=1/(sC)",
          "note": "第 30 集讲解"
        },
        {
          "label": "电感关系",
          "expr": "V<sub>L</sub>(s)=sL I<sub>L</sub>(s)−L i<sub>L</sub>(0<sup>−</sup>)",
          "note": "第 30 集讲解"
        },
        {
          "label": "电容关系",
          "expr": "V<sub>C</sub>(s)=I<sub>C</sub>(s)/(sC)+v<sub>C</sub>(0<sup>−</sup>)/s",
          "note": "第 30 集讲解"
        }
      ],
      "finalPitfall": "不要把 s 域阻抗与相量法混淆：s 域包含瞬态，相量法只适用于正弦稳态。 s 域阻抗与正弦相量法不能混用：s 域保留瞬态和初始条件，相量法只处理正弦稳态。"
    },
    "s4-7-1": {
      "concept": "\n      <p><mark>用积分器、加法器和比例器搭建系统，直观表示微分方程的实现结构。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：如何用两个积分器和若干比例/加法器实现二阶系统？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=328\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 05:28，打开 Bilibili 对应讲解\">第 49 集 · 05:28 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>积分器是连续系统的基本记忆元件，对应 1/s；延迟/微分在实现中通常通过积分器构造。</li><li>直接型、级联型、并联型对应不同的方程整理方式，数值稳定性和系数灵敏度不同。</li><li>方框图可逐步化简为系统函数，也可由 H(s) 反向搭建。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">积分器传输</span>\n      <span class=\"formula\">Y(s)=F(s)/s</span>\n      <span class=\"formula-note\">零初始条件下。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用积分器、加法器和比例器搭建系统，直观表示微分方程的实现结构。</p>\n      <p><mark>自检问题：</mark>如何用两个积分器和若干比例/加法器实现二阶系统？</p>\n      <p><span class=\"hl-red\">易错点：</span>方框图中的积分器方向决定状态变量定义；不要把微分器当作物理可实现的基本模块。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "方框图中的积分器方向决定状态变量定义；不要把微分器当作物理可实现的基本模块。"
    },
    "s4-7-2": {
      "concept": "\n      <p><mark>用节点和有向支路表示信号传递关系，并用梅森增益公式求系统函数。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：单反馈环路的系统函数为什么可写成前向增益/(1−环路增益)？</p><p>系统模拟的核心是把 H(s) 或 H(z) 化为积分器/延时器、比例器和加法器的网络；直接型用最少记忆，级联/并联便于调参。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=191\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 03:11，打开 Bilibili 对应讲解\">第 49 集 · 03:11 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>信号流图与方框图等价，但更紧凑，适合复杂反馈系统。</li><li>梅森公式：H=ΣP<sub>k</sub>Δ<sub>k</sub>/Δ，其中 Δ 为图行列式，Δ<sub>k</sub> 为去掉第 k 条前向通路后的余子式。</li><li>反馈回路增益、回路互不接触情况决定分母结构，对应系统极点。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">梅森增益公式</span>\n      <span class=\"formula\">H=ΣP<sub>k</sub>Δ<sub>k</sub>/Δ</span>\n      <span class=\"formula-note\">P&lt;sub&gt;k&lt;/sub&gt; 为前向通路增益。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">图行列式</span>\n      <span class=\"formula\">Δ=1−ΣL<sub>i</sub>+ΣL<sub>i</sub>L<sub>j</sub>−…</span>\n      <span class=\"formula-note\">取所有互不接触回路组合。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>求等效系统函数时，先标节点/支路/回路，再套梅森公式，不要直接按普通代数相加。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=90\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 01:30，打开 Bilibili 对应讲解\">第 49 集 · 01:30 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">梅森公式</span>\n          <span class=\"formula\">H=ΣP<sub>k</sub>Δ<sub>k</sub>/Δ</span>\n          <span class=\"formula-note\">第 49 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">图行列式</span>\n          <span class=\"formula\">Δ=1−ΣL<sub>i</sub>+ΣL<sub>i</sub>L<sub>j</sub>−…</span>\n          <span class=\"formula-note\">第 49 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>反馈回路不是只看一条；互不接触回路的高阶组合也要加入 Δ。级联/并联结构在理论上等价，但不代表有限精度性能相同。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用节点和有向支路表示信号传递关系，并用梅森增益公式求系统函数。</p>\n      <p><mark>自检问题：</mark>单反馈环路的系统函数为什么可写成前向增益/(1−环路增益)？</p>\n      <p><span class=\"hl-red\">易错点：</span>梅森公式的分母不是简单的 1−环路增益；多回路时必须考虑互不接触项。</p>\n      <p><mark>迁移到题目时：</mark>信号流图与方框图等价；梅森增益公式的分子是所有前向通路乘余子式，分母是 1−Σ回路+Σ互不接触回路组合−…。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=191\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 03:11，打开 Bilibili 对应讲解\">第 49 集 · 03:11 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "求等效系统函数时，先标节点/支路/回路，再套梅森公式，不要直接按普通代数相加。",
        "信号流图与方框图等价；梅森增益公式的分子是所有前向通路乘余子式，分母是 1−Σ回路+Σ互不接触回路组合−…。"
      ],
      "extraFormulas": [
        {
          "label": "梅森公式",
          "expr": "H=ΣP<sub>k</sub>Δ<sub>k</sub>/Δ",
          "note": "第 49 集讲解"
        },
        {
          "label": "图行列式",
          "expr": "Δ=1−ΣL<sub>i</sub>+ΣL<sub>i</sub>L<sub>j</sub>−…",
          "note": "第 49 集讲解"
        }
      ],
      "finalPitfall": "梅森公式的分母不是简单的 1−环路增益；多回路时必须考虑互不接触项。 反馈回路不是只看一条；互不接触回路的高阶组合也要加入 Δ。级联/并联结构在理论上等价，但不代表有限精度性能相同。"
    },
    "s4-7-3": {
      "concept": "\n      <p><mark>用积分器、乘法器和加法器组成的模拟结构实现 H(s)，并比较不同实现形式的特性。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：一个四阶系统为何通常拆成两个二阶节实现，而不是直接型一阶到四阶？</p><p>系统模拟的核心是把 H(s) 或 H(z) 化为积分器/延时器、比例器和加法器的网络；直接型用最少记忆，级联/并联便于调参。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=442\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 07:22，打开 Bilibili 对应讲解\">第 49 集 · 07:22 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>直接型实现系数直接对应 H(s) 分子分母，结构简单但高阶级数时数值敏感。</li><li>级联型把 H(s) 分解为低阶节串联，便于调节零极点，数值稳定性较好。</li><li>并联型按部分分式分解，各节并行相加，适合模块化实现。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">实现形式</span>\n      <span class=\"formula\">H(s)=H₁(s)H₂(s)=H₁(s)+H₂(s)</span>\n      <span class=\"formula-note\">分别对应级联与并联分解。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>并联型按极点的部分分式相加，适合模块化实现，但零点受整体相加约束。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=24\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 00:24，打开 Bilibili 对应讲解\">第 49 集 · 00:24 ↗</a></li><li>直接型直接按 H(s) 的分子分母系数搭建，所需积分器最少，但高阶时系数敏感、动态范围大。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=442\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 07:22，打开 Bilibili 对应讲解\">第 49 集 · 07:22 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">连续直接型</span>\n          <span class=\"formula\">每阶对应一个 1/s 积分器</span>\n          <span class=\"formula-note\">第 49 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>反馈回路不是只看一条；互不接触回路的高阶组合也要加入 Δ。级联/并联结构在理论上等价，但不代表有限精度性能相同。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-00.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 00:00\"\n            aria-label=\"查看第 49 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-00.jpg\" alt=\"第 49 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-01.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 05:00\"\n            aria-label=\"查看第 49 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-01.jpg\" alt=\"第 49 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-02.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 10:00\"\n            aria-label=\"查看第 49 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-02.jpg\" alt=\"第 49 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-03.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 15:00\"\n            aria-label=\"查看第 49 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-03.jpg\" alt=\"第 49 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-04.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 20:00\"\n            aria-label=\"查看第 49 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-04.jpg\" alt=\"第 49 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-05.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 25:00\"\n            aria-label=\"查看第 49 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-05.jpg\" alt=\"第 49 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-06.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 30:00\"\n            aria-label=\"查看第 49 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-06.jpg\" alt=\"第 49 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-07.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 35:00\"\n            aria-label=\"查看第 49 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-07.jpg\" alt=\"第 49 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-08.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 40:00\"\n            aria-label=\"查看第 49 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-08.jpg\" alt=\"第 49 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-09.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 45:00\"\n            aria-label=\"查看第 49 集 · 45:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-09.jpg\" alt=\"第 49 集 · 45:00课堂板书截图\" loading=\"lazy\">\n            <span>45:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-10.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 50:00\"\n            aria-label=\"查看第 49 集 · 50:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-10.jpg\" alt=\"第 49 集 · 50:00课堂板书截图\" loading=\"lazy\">\n            <span>50:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-11.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 55:00\"\n            aria-label=\"查看第 49 集 · 55:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-11.jpg\" alt=\"第 49 集 · 55:00课堂板书截图\" loading=\"lazy\">\n            <span>55:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-12.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 60:00\"\n            aria-label=\"查看第 49 集 · 60:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-12.jpg\" alt=\"第 49 集 · 60:00课堂板书截图\" loading=\"lazy\">\n            <span>60:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-13.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 65:00\"\n            aria-label=\"查看第 49 集 · 65:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-13.jpg\" alt=\"第 49 集 · 65:00课堂板书截图\" loading=\"lazy\">\n            <span>65:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep49/frame-14.jpg\"\n            data-image-title=\"7 系统模拟\"\n            data-image-label=\"第 49 集 · 70:00\"\n            aria-label=\"查看第 49 集 · 70:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep49/frame-14.jpg\" alt=\"第 49 集 · 70:00课堂板书截图\" loading=\"lazy\">\n            <span>70:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用积分器、乘法器和加法器组成的模拟结构实现 H(s)，并比较不同实现形式的特性。</p>\n      <p><mark>自检问题：</mark>一个四阶系统为何通常拆成两个二阶节实现，而不是直接型一阶到四阶？</p>\n      <p><span class=\"hl-red\">易错点：</span>不同实现形式在理论上等价，但有限精度下的系数灵敏度、动态范围不同。</p>\n      <p><mark>迁移到题目时：</mark>级联型把 H 分解为多个低阶节乘积，零点极点可相对独立调整，数值稳定性更好。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=953\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 15:53，打开 Bilibili 对应讲解\">第 49 集 · 15:53 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "并联型按极点的部分分式相加，适合模块化实现，但零点受整体相加约束。",
        "直接型直接按 H(s) 的分子分母系数搭建，所需积分器最少，但高阶时系数敏感、动态范围大。",
        "级联型把 H 分解为多个低阶节乘积，零点极点可相对独立调整，数值稳定性更好。"
      ],
      "extraFormulas": [
        {
          "label": "连续直接型",
          "expr": "每阶对应一个 1/s 积分器",
          "note": "第 49 集讲解"
        }
      ],
      "finalPitfall": "不同实现形式在理论上等价，但有限精度下的系数灵敏度、动态范围不同。 反馈回路不是只看一条；互不接触回路的高阶组合也要加入 Δ。级联/并联结构在理论上等价，但不代表有限精度性能相同。"
    },
    "s4-8-1": {
      "concept": "\n      <p><mark>把 H(s) 因式分解，零点使响应为零，极点决定系统固有模态。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：H(s)=(s+2)/[(s+1)(s+3)] 的零点、极点分别在哪里？</p><p>系统函数的零点改变各模态权重和频响峰谷，极点决定系统固有模态的衰减、增长与振荡。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=87\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 01:27，打开 Bilibili 对应讲解\">第 32 集 · 01:27 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>H(s)=K∏(s−z<sub>i</sub>)/∏(s−p<sub>j</sub>)，z<sub>i</sub> 为零点，p<sub>j</sub> 为极点。</li><li>极点位置决定时域指数/振荡模态的衰减或增长；零点影响各模态权重和频率响应形状。</li><li>零极点图是系统分析的视觉语言，后续稳定性与频率响应都从它出发。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">零极点形式</span>\n      <span class=\"formula\">H(s)=K∏(s−z<sub>i</sub>)/∏(s−p<sub>j</sub>)</span>\n      <span class=\"formula-note\">K 为增益常数。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>H(s)=K∏(s−z_i)/∏(s−p_i)，分母根为极点，分子根为零点。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=87\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 01:27，打开 Bilibili 对应讲解\">第 32 集 · 01:27 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">零极点形式</span>\n          <span class=\"formula\">H(s)=K∏(s−z<sub>i</sub>)/∏(s−p<sub>i</sub>)</span>\n          <span class=\"formula-note\">第 32 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">初值</span>\n          <span class=\"formula\">h(0<sup>+</sup>)=lim<sub>s→∞</sub>sH(s)（真分式）</span>\n          <span class=\"formula-note\">第 32 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>不要把零点当成稳定性判据；零点会改变频响和模态权重，但固有稳定性由极点与 ROC 决定。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep32/frame-00.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性I\"\n            data-image-label=\"第 32 集 · 00:00\"\n            aria-label=\"查看第 32 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep32/frame-00.jpg\" alt=\"第 32 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep32/frame-01.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性I\"\n            data-image-label=\"第 32 集 · 05:00\"\n            aria-label=\"查看第 32 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep32/frame-01.jpg\" alt=\"第 32 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep32/frame-02.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性I\"\n            data-image-label=\"第 32 集 · 10:00\"\n            aria-label=\"查看第 32 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep32/frame-02.jpg\" alt=\"第 32 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep32/frame-03.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性I\"\n            data-image-label=\"第 32 集 · 15:00\"\n            aria-label=\"查看第 32 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep32/frame-03.jpg\" alt=\"第 32 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep32/frame-04.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性I\"\n            data-image-label=\"第 32 集 · 20:00\"\n            aria-label=\"查看第 32 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep32/frame-04.jpg\" alt=\"第 32 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把 H(s) 因式分解，零点使响应为零，极点决定系统固有模态。</p>\n      <p><mark>自检问题：</mark>H(s)=(s+2)/[(s+1)(s+3)] 的零点、极点分别在哪里？</p>\n      <p><span class=\"hl-red\">易错点：</span>零点不影响稳定性判据，但会显著改变幅频响应和相位；不能只看极点位置。</p>\n      <p><mark>迁移到题目时：</mark>实数重极点形成 t^{r−1}e^{pt} 型项；高阶虚轴极点会使响应增长。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=481\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 08:01，打开 Bilibili 对应讲解\">第 32 集 · 08:01 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "H(s)=K∏(s−z_i)/∏(s−p_i)，分母根为极点，分子根为零点。",
        "实数重极点形成 t^{r−1}e^{pt} 型项；高阶虚轴极点会使响应增长。"
      ],
      "extraFormulas": [
        {
          "label": "零极点形式",
          "expr": "H(s)=K∏(s−z<sub>i</sub>)/∏(s−p<sub>i</sub>)",
          "note": "第 32 集讲解"
        },
        {
          "label": "初值",
          "expr": "h(0<sup>+</sup>)=lim<sub>s→∞</sub>sH(s)（真分式）",
          "note": "第 32 集讲解"
        }
      ],
      "finalPitfall": "零点不影响稳定性判据，但会显著改变幅频响应和相位；不能只看极点位置。 不要把零点当成稳定性判据；零点会改变频响和模态权重，但固有稳定性由极点与 ROC 决定。"
    },
    "s4-8-2": {
      "concept": "\n      <p><mark>极点位置决定响应包络与振荡，零点影响各模态的幅度和相位组合。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：极点在 −1±j3 时，响应的衰减速度和振荡频率如何读？</p><p>系统函数的零点改变各模态权重和频响峰谷，极点决定系统固有模态的衰减、增长与振荡。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=450\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 07:30，打开 Bilibili 对应讲解\">第 32 集 · 07:30 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>左半平面极点对应衰减模态；右半平面对应增长；虚轴上共轭极点对应等幅振荡。</li><li>极点离虚轴越近，衰减越慢；虚部越大，振荡频率越高。</li><li>零点可通过抵消或增强某些模态改变波形，但不改变系统固有极点。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">共轭极点</span>\n      <span class=\"formula\">p=σ±jω<sub>d</sub> ⇒ e<sup>σt</sup>cos(ω<sub>d</sub>t+φ)</span>\n      <span class=\"formula-note\">σ&lt;0 为衰减振荡。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>零点不影响极点位置，但会改变各模态的系数、波形组合和频响中的“凹陷”。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=6\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 00:06，打开 Bilibili 对应讲解\">第 32 集 · 00:06 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">复极点</span>\n          <span class=\"formula\">p=σ±jβ ⇒ e<sup>σt</sup>cos(βt+φ)</span>\n          <span class=\"formula-note\">第 32 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>不要把零点当成稳定性判据；零点会改变频响和模态权重，但固有稳定性由极点与 ROC 决定。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>极点位置决定响应包络与振荡，零点影响各模态的幅度和相位组合。</p>\n      <p><mark>自检问题：</mark>极点在 −1±j3 时，响应的衰减速度和振荡频率如何读？</p>\n      <p><span class=\"hl-red\">易错点：</span>极点虚部不是“响应频率”的全部；有零点时输出波形可能被整形，需结合 H(jω)。</p>\n      <p><mark>迁移到题目时：</mark>左半平面一阶极点给衰减指数；右半平面给增长；虚轴上共轭极点给等幅振荡。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=450\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 07:30，打开 Bilibili 对应讲解\">第 32 集 · 07:30 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "零点不影响极点位置，但会改变各模态的系数、波形组合和频响中的“凹陷”。",
        "左半平面一阶极点给衰减指数；右半平面给增长；虚轴上共轭极点给等幅振荡。"
      ],
      "extraFormulas": [
        {
          "label": "复极点",
          "expr": "p=σ±jβ ⇒ e<sup>σt</sup>cos(βt+φ)",
          "note": "第 32 集讲解"
        }
      ],
      "finalPitfall": "极点虚部不是“响应频率”的全部；有零点时输出波形可能被整形，需结合 H(jω)。 不要把零点当成稳定性判据；零点会改变频响和模态权重，但固有稳定性由极点与 ROC 决定。"
    },
    "s4-8-3": {
      "concept": "\n      <p><mark>当 ROC 包含虚轴时，令 s=jω 得到频率响应，描述系统对正弦输入的稳态作用。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：H(s)=1/(s+1) 的幅频响应在 ω=0 和 ω→∞ 时分别趋近多少？</p><p>频率响应可由零极点图的几何向量计算，也可对正弦输入读幅频和相频；前提是系统稳定、ROC 包含虚轴。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=34&amp;t=320\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 34 集 · 05:20，打开 Bilibili 对应讲解\">第 34 集 · 05:20 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>H(jω)=H(s)|<sub>s=jω</sub>，前提是系统稳定且虚轴在 ROC 内。</li><li>幅频响应 |H(jω)| 决定各频率增益，相频响应 ∠H(jω) 决定相移。</li><li>零极点图中的几何距离可直观解释幅频峰谷和相位变化。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频率响应</span>\n      <span class=\"formula\">H(jω)=H(s)|<sub>s=jω</sub></span>\n      <span class=\"formula-note\">ROC 必须包含虚轴。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>由零极点图反求 H(s) 时，常结合 h(0⁺) 或初值定理确定增益常数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=32&amp;t=962\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 32 集 · 16:02，打开 Bilibili 对应讲解\">第 32 集 · 16:02 ↗</a></li><li>极点靠近虚轴会在对应频率附近形成幅频峰值；零点靠近虚轴会形成谷值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=34&amp;t=76\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 34 集 · 01:16，打开 Bilibili 对应讲解\">第 34 集 · 01:16 ↗</a></li><li>周期/正弦稳态输入保持频率不变，输出幅度乘 |H(jΩ)|、相位加 ∠H(jΩ)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=34&amp;t=256\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 34 集 · 04:16，打开 Bilibili 对应讲解\">第 34 集 · 04:16 ↗</a></li><li>H(jΩ) 的幅度是各零点/极点到 jΩ 点距离的乘积比，相位是各向量角度的代数和。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=34&amp;t=320\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 34 集 · 05:20，打开 Bilibili 对应讲解\">第 34 集 · 05:20 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">频率响应</span>\n          <span class=\"formula\">H(jΩ)=H(s)|<sub>s=jΩ</sub>（jΩ∈ROC）</span>\n          <span class=\"formula-note\">第 34 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">稳态正弦</span>\n          <span class=\"formula\">A cos(Ωt+φ) → A|H(jΩ)|cos(Ωt+φ+∠H(jΩ))</span>\n          <span class=\"formula-note\">第 34 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">极点距离</span>\n          <span class=\"formula\">|H| 随极点离 jΩ 点越近而增大</span>\n          <span class=\"formula-note\">第 34 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>频率响应不是只把所有极点相乘；零点也会改变幅度和相位，且不稳定系统没有通常意义上的稳态响应。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep34/frame-00.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性III\"\n            data-image-label=\"第 34 集 · 00:00\"\n            aria-label=\"查看第 34 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep34/frame-00.jpg\" alt=\"第 34 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep34/frame-01.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性III\"\n            data-image-label=\"第 34 集 · 05:00\"\n            aria-label=\"查看第 34 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep34/frame-01.jpg\" alt=\"第 34 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep34/frame-02.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性III\"\n            data-image-label=\"第 34 集 · 10:00\"\n            aria-label=\"查看第 34 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep34/frame-02.jpg\" alt=\"第 34 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep34/frame-03.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性III\"\n            data-image-label=\"第 34 集 · 15:00\"\n            aria-label=\"查看第 34 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep34/frame-03.jpg\" alt=\"第 34 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep34/frame-04.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性III\"\n            data-image-label=\"第 34 集 · 20:00\"\n            aria-label=\"查看第 34 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep34/frame-04.jpg\" alt=\"第 34 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep34/frame-05.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性III\"\n            data-image-label=\"第 34 集 · 25:00\"\n            aria-label=\"查看第 34 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep34/frame-05.jpg\" alt=\"第 34 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>当 ROC 包含虚轴时，令 s=jω 得到频率响应，描述系统对正弦输入的稳态作用。</p>\n      <p><mark>自检问题：</mark>H(s)=1/(s+1) 的幅频响应在 ω=0 和 ω→∞ 时分别趋近多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>不稳定系统的 H(jω) 不能直接解释为稳态正弦响应；此时系统没有有界稳态输出。</p>\n      <p><mark>迁移到题目时：</mark>低频、拐点、高频三个区段要分别看极限；阶次决定高频衰减斜率。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=34&amp;t=662\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 34 集 · 11:02，打开 Bilibili 对应讲解\">第 34 集 · 11:02 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "由零极点图反求 H(s) 时，常结合 h(0⁺) 或初值定理确定增益常数。",
        "极点靠近虚轴会在对应频率附近形成幅频峰值；零点靠近虚轴会形成谷值。",
        "周期/正弦稳态输入保持频率不变，输出幅度乘 |H(jΩ)|、相位加 ∠H(jΩ)。",
        "H(jΩ) 的幅度是各零点/极点到 jΩ 点距离的乘积比，相位是各向量角度的代数和。",
        "低频、拐点、高频三个区段要分别看极限；阶次决定高频衰减斜率。"
      ],
      "extraFormulas": [
        {
          "label": "频率响应",
          "expr": "H(jΩ)=H(s)|<sub>s=jΩ</sub>（jΩ∈ROC）",
          "note": "第 34 集讲解"
        },
        {
          "label": "稳态正弦",
          "expr": "A cos(Ωt+φ) → A|H(jΩ)|cos(Ωt+φ+∠H(jΩ))",
          "note": "第 34 集讲解"
        },
        {
          "label": "极点距离",
          "expr": "|H| 随极点离 jΩ 点越近而增大",
          "note": "第 34 集讲解"
        }
      ],
      "finalPitfall": "不稳定系统的 H(jω) 不能直接解释为稳态正弦响应；此时系统没有有界稳态输出。 不要把零点当成稳定性判据；零点会改变频响和模态权重，但固有稳定性由极点与 ROC 决定。 频率响应不是只把所有极点相乘；零点也会改变幅度和相位，且不稳定系统没有通常意义上的稳态响应。"
    },
    "s4-8-4": {
      "concept": "\n      <p><mark>连续因果 LTI 系统 BIBO 稳定当且仅当 H(s) 的全部极点位于左半平面。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：H(s)=1/(s²+1) 的极点在哪里？它是否 BIBO 稳定？</p><p>连续系统因果性看 h(t) 或 ROC 的右侧性，稳定性看 h 的绝对可积或 ROC 是否包含虚轴；因果稳定要求全部极点严格在左半平面。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=33&amp;t=234\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 33 集 · 03:54，打开 Bilibili 对应讲解\">第 33 集 · 03:54 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>稳定性等价于冲激响应绝对可积，也等价于 ROC 包含虚轴。</li><li>因果系统 ROC 在最右极点右侧；要包含虚轴，所有极点必须 Re(p)<0。</li><li>虚轴上的单极点对应临界稳定（不满足 BIBO），右半平面极点对应不稳定。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">因果稳定判据</span>\n      <span class=\"formula\">Re(p<sub>j</sub>)<0,&nbsp; ∀j</span>\n      <span class=\"formula-note\">连续因果 LTI 系统。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>临界稳定不等于 BIBO 稳定；多输入或多频率下等幅振荡仍可能使某些有界输入产生无界输出。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=33&amp;t=139\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 33 集 · 02:19，打开 Bilibili 对应讲解\">第 33 集 · 02:19 ↗</a></li><li>稳定系统的 h(t) 绝对可积，ROC 包含虚轴；因果稳定则要求最右极点严格左移。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=33&amp;t=184\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 33 集 · 03:04，打开 Bilibili 对应讲解\">第 33 集 · 03:04 ↗</a></li><li>因果系统的 h(t)=0（t&lt;0），其 ROC 在最右极点右侧。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=33&amp;t=234\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 33 集 · 03:54，打开 Bilibili 对应讲解\">第 33 集 · 03:54 ↗</a></li><li>劳斯阵列可避免解高次多项式，第一列符号变化次数等于右半平面极点个数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=33&amp;t=638\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 33 集 · 10:38，打开 Bilibili 对应讲解\">第 33 集 · 10:38 ↗</a></li><li>第一列出现零时做小扰动或特殊处理；出现全零行时用上一行构造辅助多项式，能识别虚轴极点。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=33&amp;t=1563\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 33 集 · 26:03，打开 Bilibili 对应讲解\">第 33 集 · 26:03 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">因果</span>\n          <span class=\"formula\">h(t)=0 (t<0) ⇔ ROC 在最右极点右侧</span>\n          <span class=\"formula-note\">第 33 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">BIBO</span>\n          <span class=\"formula\">∫|h(t)|dt<∞ ⇔ ROC 包含 jΩ 轴</span>\n          <span class=\"formula-note\">第 33 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">因果稳定</span>\n          <span class=\"formula\">Re(p<sub>i</sub>)<0，∀i</span>\n          <span class=\"formula-note\">第 33 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>ROC 包含虚轴只说稳定，不保证因果；因果和稳定必须同时检查。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-00.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 00:00\"\n            aria-label=\"查看第 33 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-00.jpg\" alt=\"第 33 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-01.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 05:00\"\n            aria-label=\"查看第 33 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-01.jpg\" alt=\"第 33 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-02.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 10:00\"\n            aria-label=\"查看第 33 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-02.jpg\" alt=\"第 33 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-03.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 15:00\"\n            aria-label=\"查看第 33 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-03.jpg\" alt=\"第 33 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-04.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 20:00\"\n            aria-label=\"查看第 33 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-04.jpg\" alt=\"第 33 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-05.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 25:00\"\n            aria-label=\"查看第 33 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-05.jpg\" alt=\"第 33 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep33/frame-06.jpg\"\n            data-image-title=\"4.5 系统函数与系统特性II\"\n            data-image-label=\"第 33 集 · 30:00\"\n            aria-label=\"查看第 33 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep33/frame-06.jpg\" alt=\"第 33 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>连续因果 LTI 系统 BIBO 稳定当且仅当 H(s) 的全部极点位于左半平面。</p>\n      <p><mark>自检问题：</mark>H(s)=1/(s²+1) 的极点在哪里？它是否 BIBO 稳定？</p>\n      <p><span class=\"hl-red\">易错点：</span>“临界稳定”不是 BIBO 稳定；等幅振荡系统对某些有界输入仍可能输出无界。</p>\n      <p><mark>迁移到题目时：</mark>不稳定的 H(s) 不能在实频率上直接解释为稳态频率响应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=34&amp;t=7\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 34 集 · 00:07，打开 Bilibili 对应讲解\">第 34 集 · 00:07 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "临界稳定不等于 BIBO 稳定；多输入或多频率下等幅振荡仍可能使某些有界输入产生无界输出。",
        "稳定系统的 h(t) 绝对可积，ROC 包含虚轴；因果稳定则要求最右极点严格左移。",
        "因果系统的 h(t)=0（t<0），其 ROC 在最右极点右侧。",
        "劳斯阵列可避免解高次多项式，第一列符号变化次数等于右半平面极点个数。",
        "第一列出现零时做小扰动或特殊处理；出现全零行时用上一行构造辅助多项式，能识别虚轴极点。",
        "不稳定的 H(s) 不能在实频率上直接解释为稳态频率响应。"
      ],
      "extraFormulas": [
        {
          "label": "因果",
          "expr": "h(t)=0 (t<0) ⇔ ROC 在最右极点右侧",
          "note": "第 33 集讲解"
        },
        {
          "label": "BIBO",
          "expr": "∫|h(t)|dt<∞ ⇔ ROC 包含 jΩ 轴",
          "note": "第 33 集讲解"
        },
        {
          "label": "因果稳定",
          "expr": "Re(p<sub>i</sub>)<0，∀i",
          "note": "第 33 集讲解"
        }
      ],
      "finalPitfall": "“临界稳定”不是 BIBO 稳定；等幅振荡系统对某些有界输入仍可能输出无界。 ROC 包含虚轴只说稳定，不保证因果；因果和稳定必须同时检查。 频率响应不是只把所有极点相乘；零点也会改变幅度和相位，且不稳定系统没有通常意义上的稳态响应。"
    },
    "s4-8-5": {
      "concept": "\n      <p><mark>傅里叶变换是拉普拉斯变换在虚轴上的取值（当虚轴属于 ROC）。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：因果系统 H(s)=1/(s−1) 是否能用 s=jω 求频率响应？为什么？</p><p>拉氏变换与傅里叶变换的关系由 ROC 决定：虚轴在 ROC 内才可直接代入，边界极点还要额外加入冲激项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=35&amp;t=88\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 35 集 · 01:28，打开 Bilibili 对应讲解\">第 35 集 · 01:28 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>若 ROC 包含 jω 轴，则 F(ω)=F(s)|<sub>s=jω</sub>。</li><li>稳定系统的 ROC 含虚轴，因此可由 H(s) 直接得到频率响应。</li><li>不满足条件时，不能简单代入；冲激项和边界极点需单独处理。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">关系</span>\n      <span class=\"formula\">F(ω)=F(s)|<sub>s=jω</sub>,&nbsp; jω∈ROC</span>\n      <span class=\"formula-note\">关键前提是虚轴在收敛域内。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>复指数、阶跃、常数等不绝对可积信号正是通过 ROC/广义函数联系起来的。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=35&amp;t=28\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 35 集 · 00:28，打开 Bilibili 对应讲解\">第 35 集 · 00:28 ↗</a></li><li>若 ROC 包含虚轴，则 F(jΩ)=F(s)|_{s=jΩ}，这是稳定信号/系统最常用情形。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=35&amp;t=88\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 35 集 · 01:28，打开 Bilibili 对应讲解\">第 35 集 · 01:28 ↗</a></li><li>若收敛边界在最右极点右侧，虚轴不在 ROC，普通傅里叶变换可能不存在。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=35&amp;t=160\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 35 集 · 02:40，打开 Bilibili 对应讲解\">第 35 集 · 02:40 ↗</a></li><li>若虚轴上只有单极点，不能直接代入；结果要在主值项之外加上 π 倍的冲激项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=35&amp;t=208\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 35 集 · 03:28，打开 Bilibili 对应讲解\">第 35 集 · 03:28 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">直接关系</span>\n          <span class=\"formula\">F(jΩ)=F(s)|<sub>s=jΩ</sub>，jΩ∈ROC</span>\n          <span class=\"formula-note\">第 35 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">边界极点</span>\n          <span class=\"formula\">F(jΩ)=F(jΩ)<sub>主值</sub>+πΣK<sub>i</sub>δ(Ω−Ω<sub>i</sub>)</span>\n          <span class=\"formula-note\">第 35 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">因果指数</span>\n          <span class=\"formula\">e<sup>at</sup>ε(t)，ROC：Re(s)>a</span>\n          <span class=\"formula-note\">第 35 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>不能漏 ROC；仅凭 F(s)=1/(s−a) 无法判断对应的是右边、左边还是双边信号。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep35/frame-00.jpg\"\n            data-image-title=\"4.6 拉普拉斯变换与傅里叶变换的关系\"\n            data-image-label=\"第 35 集 · 00:00\"\n            aria-label=\"查看第 35 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep35/frame-00.jpg\" alt=\"第 35 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep35/frame-01.jpg\"\n            data-image-title=\"4.6 拉普拉斯变换与傅里叶变换的关系\"\n            data-image-label=\"第 35 集 · 05:00\"\n            aria-label=\"查看第 35 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep35/frame-01.jpg\" alt=\"第 35 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep35/frame-02.jpg\"\n            data-image-title=\"4.6 拉普拉斯变换与傅里叶变换的关系\"\n            data-image-label=\"第 35 集 · 10:00\"\n            aria-label=\"查看第 35 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep35/frame-02.jpg\" alt=\"第 35 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>傅里叶变换是拉普拉斯变换在虚轴上的取值（当虚轴属于 ROC）。</p>\n      <p><mark>自检问题：</mark>因果系统 H(s)=1/(s−1) 是否能用 s=jω 求频率响应？为什么？</p>\n      <p><span class=\"hl-red\">易错点：</span>仅知道 F(s) 的表达式还不够，必须同时知道 ROC 才能判断能否取 s=jω。</p>\n      <p><mark>迁移到题目时：</mark>判断顺序是先求极点和 ROC，再决定能否取 s=jΩ，而不是只看代数式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=35&amp;t=362\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 35 集 · 06:02，打开 Bilibili 对应讲解\">第 35 集 · 06:02 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "复指数、阶跃、常数等不绝对可积信号正是通过 ROC/广义函数联系起来的。",
        "若 ROC 包含虚轴，则 F(jΩ)=F(s)|_{s=jΩ}，这是稳定信号/系统最常用情形。",
        "若收敛边界在最右极点右侧，虚轴不在 ROC，普通傅里叶变换可能不存在。",
        "若虚轴上只有单极点，不能直接代入；结果要在主值项之外加上 π 倍的冲激项。",
        "判断顺序是先求极点和 ROC，再决定能否取 s=jΩ，而不是只看代数式。"
      ],
      "extraFormulas": [
        {
          "label": "直接关系",
          "expr": "F(jΩ)=F(s)|<sub>s=jΩ</sub>，jΩ∈ROC",
          "note": "第 35 集讲解"
        },
        {
          "label": "边界极点",
          "expr": "F(jΩ)=F(jΩ)<sub>主值</sub>+πΣK<sub>i</sub>δ(Ω−Ω<sub>i</sub>)",
          "note": "第 35 集讲解"
        },
        {
          "label": "因果指数",
          "expr": "e<sup>at</sup>ε(t)，ROC：Re(s)>a",
          "note": "第 35 集讲解"
        }
      ],
      "finalPitfall": "仅知道 F(s) 的表达式还不够，必须同时知道 ROC 才能判断能否取 s=jω。 不能漏 ROC；仅凭 F(s)=1/(s−a) 无法判断对应的是右边、左边还是双边信号。"
    },
    "s4-ex": {
      "concept": "\n      <p><mark>重点练习 ROC 判断、部分分式逆变换、微分方程初值问题、s 域电路和稳定性。</mark></p>\n      <p>用拉普拉斯变换把微分方程、初始条件和卷积统一到 s 域。重点掌握收敛域、单边变换、部分分式逆变换，以及系统函数 H(s) 的零极点、频率响应和稳定性。</p>\n      <p>本节要解决的具体问题：挑一道 RLC 题，用 s 域模型和微分方程两种方法对照结果。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>先判断信号类型与 ROC，再决定逆变换的因果/反因果形式。</li><li>解微分方程时把初始条件项单独核对，避免与输入项混在一起。</li><li>稳定性题先求极点，再结合因果性和 ROC 判断。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复盘链</span>\n      <span class=\"formula\">F(s) → ROC → 极点 → 时域模态 → 稳定性</span>\n      <span class=\"formula-note\">沿链路逐项确认。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点练习 ROC 判断、部分分式逆变换、微分方程初值问题、s 域电路和稳定性。</p>\n      <p><mark>自检问题：</mark>挑一道 RLC 题，用 s 域模型和微分方程两种方法对照结果。</p>\n      <p><span class=\"hl-red\">易错点：</span>本章综合题常把 ROC、零状态和初始条件混在一起；每一步都要写清前提。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "本章综合题常把 ROC、零状态和初始条件混在一起；每一步都要写清前提。"
    }
  },
  "ch5": {
    "s5-0": {
      "concept": "\n      <p><mark>离散时间信号是采样或本来就离散的序列；离散系统用差分方程和卷积和描述。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：连续卷积中的积分在离散情形下变成什么运算？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>离散时间变量 k 取整数，f(k) 是一列样本值，不一定来自连续信号采样。</li><li>离散系统的输入输出关系由差分方程或单位脉冲响应 h(k) 描述。</li><li>时域分析主线与连续系统平行：分解成脉冲 → 叠加 → 卷积和。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">离散 LTI 响应</span>\n      <span class=\"formula\">y(k)=f(k)*h(k)</span>\n      <span class=\"formula-note\">零状态响应。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>离散时间信号是采样或本来就离散的序列；离散系统用差分方程和卷积和描述。</p>\n      <p><mark>自检问题：</mark>连续卷积中的积分在离散情形下变成什么运算？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散信号不是“连续信号把 t 换成 k”那么简单；采样间隔、周期性和频率混叠都要重新判断。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散信号不是“连续信号把 t 换成 k”那么简单；采样间隔、周期性和频率混叠都要重新判断。"
    },
    "s5-1-1": {
      "concept": "\n      <p><mark>用序列表示法、波形图和表达式描述离散信号，并判断周期性与能量/功率。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：f(k)=cos(0.2πk) 的周期是多少？f(k)=cos(k) 是否周期？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=5\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 00:05，打开 Bilibili 对应讲解\">第 2 集 · 00:05 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>序列可写作 {f(k)}，常用箭头标出 k=0 的位置；移位和反转都相对于原点。</li><li>离散周期信号需满足 f(k)=f(k+N)，N 为正整数；连续周期的有理数倍不一定对应离散周期。</li><li>离散能量为 Σ|f(k)|²，平均功率为有限区间平均的极限。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">离散周期</span>\n      <span class=\"formula\">f(k)=f(k+N),&nbsp; N∈ℤ<sub>+</sub></span>\n      <span class=\"formula-note\">最小 N 为周期。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">能量与功率</span>\n      <span class=\"formula\">E=Σ|f(k)|²,&nbsp; P=lim<sub>N→∞</sub>(1/(2N+1))Σ<sub>−N</sub><sup>N</sup>|f(k)|²</span>\n      <span class=\"formula-note\">离散求和。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用序列表示法、波形图和表达式描述离散信号，并判断周期性与能量/功率。</p>\n      <p><mark>自检问题：</mark>f(k)=cos(0.2πk) 的周期是多少？f(k)=cos(k) 是否周期？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散正弦的周期不一定等于 2π/Ω；只有当 2π/Ω 为有理数时才周期。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散正弦的周期不一定等于 2π/Ω；只有当 2π/Ω 为有理数时才周期。"
    },
    "s5-1-2": {
      "concept": "\n      <p><mark>掌握单位脉冲、阶跃、斜坡、指数和复指数序列，以及它们之间的关系。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：e&lt;sup&gt;j0.3πk&lt;/sup&gt; 的周期是多少？e&lt;sup&gt;jk&lt;/sup&gt; 为什么不是周期序列？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=2&amp;t=139\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 2 集 · 02:19，打开 Bilibili 对应讲解\">第 2 集 · 02:19 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>δ(k) 只在 k=0 取 1；ε(k) 在 k≥0 取 1；斜坡 kε(k) 线性增长。</li><li>指数序列 a<sup>k</sup> 的收敛性由 |a| 决定；复指数 e<sup>jΩk</sup> 以 2π 为周期。</li><li>离散复指数不是一一对应频率：Ω 与 Ω+2π 表示同一序列，产生频率混叠。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">基本关系</span>\n      <span class=\"formula\">δ(k)=ε(k)−ε(k−1),&nbsp; ε(k)=Σ<sub>m=−∞</sub><sup>k</sup>δ(m)</span>\n      <span class=\"formula-note\">离散微积分关系。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复指数周期</span>\n      <span class=\"formula\">e<sup>jΩ(k+N)</sup>=e<sup>jΩk</sup> ⇒ ΩN=2πm</span>\n      <span class=\"formula-note\">周期存在需 Ω/(2π) 为有理数。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握单位脉冲、阶跃、斜坡、指数和复指数序列，以及它们之间的关系。</p>\n      <p><mark>自检问题：</mark>e&lt;sup&gt;j0.3πk&lt;/sup&gt; 的周期是多少？e&lt;sup&gt;jk&lt;/sup&gt; 为什么不是周期序列？</p>\n      <p><span class=\"hl-red\">易错点：</span>连续复指数频率唯一，离散复指数频率以 2π 为周期；这是离散频域分析的重要差异。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "连续复指数频率唯一，离散复指数频率以 2π 为周期；这是离散频域分析的重要差异。"
    },
    "s5-2-1": {
      "concept": "\n      <p><mark>离散卷积和是加权求和，描述 LTI 离散系统的零状态响应。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：f(k)=ε(k)，h(k)=a&lt;sup&gt;k&lt;/sup&gt;ε(k)，写出 y(k) 的求和式并确定范围。</p><p>离散卷积和是加权求和，而不是积分；求和的整数范围由两个序列的支撑集交集决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=116\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 01:56，打开 Bilibili 对应讲解\">第 39 集 · 01:56 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>y(k)=Σ<sub>m=−∞</sub><sup>∞</sup>f(m)h(k−m)，也等于 Σh(m)f(k−m)。</li><li>卷积和是连续卷积的离散对应，把积分换成求和。</li><li>对因果序列和因果系统，求和下限/上限可大幅简化。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">卷积和</span>\n      <span class=\"formula\">y(k)=Σ<sub>m=−∞</sub><sup>∞</sup>f(m)h(k−m)</span>\n      <span class=\"formula-note\">LTI 零状态响应。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>y(k)=Σf₁(n)f₂(k−n)，n 是虚设求和变量，结果是关于 k 的新序列。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=116\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 01:56，打开 Bilibili 对应讲解\">第 39 集 · 01:56 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积和</span>\n          <span class=\"formula\">y(k)=Σ<sub>n</sub>f₁(n)f₂(k−n)</span>\n          <span class=\"formula-note\">第 39 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">阶跃卷积</span>\n          <span class=\"formula\">f(k)*ε(k)=Σ<sub>i=−∞</sub><sup>k</sup>f(i)</span>\n          <span class=\"formula-note\">第 39 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">系统响应</span>\n          <span class=\"formula\">y<sub>zs</sub>(k)=e(k)*h(k)</span>\n          <span class=\"formula-note\">第 39 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-00.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 00:00\"\n            aria-label=\"查看第 39 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-00.jpg\" alt=\"第 39 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-01.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 05:00\"\n            aria-label=\"查看第 39 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-01.jpg\" alt=\"第 39 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-02.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 10:00\"\n            aria-label=\"查看第 39 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-02.jpg\" alt=\"第 39 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-03.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 15:00\"\n            aria-label=\"查看第 39 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-03.jpg\" alt=\"第 39 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-04.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 20:00\"\n            aria-label=\"查看第 39 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-04.jpg\" alt=\"第 39 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-05.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 25:00\"\n            aria-label=\"查看第 39 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-05.jpg\" alt=\"第 39 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-06.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 30:00\"\n            aria-label=\"查看第 39 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-06.jpg\" alt=\"第 39 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-07.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 35:00\"\n            aria-label=\"查看第 39 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-07.jpg\" alt=\"第 39 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep39/frame-08.jpg\"\n            data-image-title=\"5.4 卷积和\"\n            data-image-label=\"第 39 集 · 40:00\"\n            aria-label=\"查看第 39 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep39/frame-08.jpg\" alt=\"第 39 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>离散卷积和是加权求和，描述 LTI 离散系统的零状态响应。</p>\n      <p><mark>自检问题：</mark>f(k)=ε(k)，h(k)=a&lt;sup&gt;k&lt;/sup&gt;ε(k)，写出 y(k) 的求和式并确定范围。</p>\n      <p><span class=\"hl-red\">易错点：</span>卷积和的指标是 k−m，不是 k+m；移位方向写错会导致结果整体偏移。</p>\n      <p><mark>迁移到题目时：</mark>LTI 离散系统零状态响应 y_zs(k)=e(k)*h(k)，这是后续 Z 域乘法的时间域对应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=1580\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 26:20，打开 Bilibili 对应讲解\">第 39 集 · 26:20 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "y(k)=Σf₁(n)f₂(k−n)，n 是虚设求和变量，结果是关于 k 的新序列。",
        "LTI 离散系统零状态响应 y_zs(k)=e(k)*h(k)，这是后续 Z 域乘法的时间域对应。"
      ],
      "extraFormulas": [
        {
          "label": "卷积和",
          "expr": "y(k)=Σ<sub>n</sub>f₁(n)f₂(k−n)",
          "note": "第 39 集讲解"
        },
        {
          "label": "阶跃卷积",
          "expr": "f(k)*ε(k)=Σ<sub>i=−∞</sub><sup>k</sup>f(i)",
          "note": "第 39 集讲解"
        },
        {
          "label": "系统响应",
          "expr": "y<sub>zs</sub>(k)=e(k)*h(k)",
          "note": "第 39 集讲解"
        }
      ],
      "finalPitfall": "卷积和的指标是 k−m，不是 k+m；移位方向写错会导致结果整体偏移。 离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。"
    },
    "s5-2-2": {
      "concept": "\n      <p><mark>通过翻转、平移、对应相乘和求和，分段计算离散卷积。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：f(k)={1,2}、h(k)={3,4}（从 k=0 开始），用图解法求卷积结果。</p><p>离散卷积和是加权求和，而不是积分；求和的整数范围由两个序列的支撑集交集决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=94\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 01:34，打开 Bilibili 对应讲解\">第 39 集 · 01:34 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>固定 k，把 h(m) 翻转成 h(−m)，再平移 k 得到 h(k−m)。</li><li>对每个 k，求两序列重叠位置的乘积之和；重叠区间随 k 分段变化。</li><li>有限长序列卷积结果长度为 N₁+N₂−1。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">有限长结果长度</span>\n      <span class=\"formula\">L=N₁+N₂−1</span>\n      <span class=\"formula-note\">两个有限长序列。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>通过翻转、平移、对应相乘和求和，分段计算离散卷积。</p>\n      <p><mark>自检问题：</mark>f(k)={1,2}、h(k)={3,4}（从 k=0 开始），用图解法求卷积结果。</p>\n      <p><span class=\"hl-red\">易错点：</span>离散图解不需要积分，但必须逐个 k 核对重叠索引；漏掉端点会造成最后一个样本错误。</p>\n      <p><mark>迁移到题目时：</mark>图解法和连续卷积一样翻转、平移、相乘、求和；区间端点要随 k 分段。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=94\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 01:34，打开 Bilibili 对应讲解\">第 39 集 · 01:34 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "图解法和连续卷积一样翻转、平移、相乘、求和；区间端点要随 k 分段。"
      ],
      "extraFormulas": [],
      "finalPitfall": "离散图解不需要积分，但必须逐个 k 核对重叠索引；漏掉端点会造成最后一个样本错误。 离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。"
    },
    "s5-2-3": {
      "concept": "\n      <p><mark>把卷积表示为 Toeplitz 矩阵与向量相乘，适合有限长序列和编程实现。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：把 [1,2,1] 与 [1,−1] 的卷积写成矩阵乘法并核对结果。</p><p>离散卷积和是加权求和，而不是积分；求和的整数范围由两个序列的支撑集交集决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=1346\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 22:26，打开 Bilibili 对应讲解\">第 39 集 · 22:26 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>把 h(k) 的移位版本排成矩阵，每一列对应一次移位，再与 f 向量相乘。</li><li>矩阵法等价于多项式乘法：序列系数相乘后按幂次合并。</li><li>结果长度仍为 N₁+N₂−1，边界可用零填充。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">矩阵形式</span>\n      <span class=\"formula\">y=H f</span>\n      <span class=\"formula-note\">H 为 Toeplitz 卷积矩阵。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把卷积表示为 Toeplitz 矩阵与向量相乘，适合有限长序列和编程实现。</p>\n      <p><mark>自检问题：</mark>把 [1,2,1] 与 [1,−1] 的卷积写成矩阵乘法并核对结果。</p>\n      <p><span class=\"hl-red\">易错点：</span>矩阵的行列顺序与序列箭头位置必须一致；忽略 k=0 的起点会整体错位。</p>\n      <p><mark>迁移到题目时：</mark>矩阵法把两个有限长序列写成乘加表，可快速计算有限点卷积并检查边界。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=1346\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 22:26，打开 Bilibili 对应讲解\">第 39 集 · 22:26 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "矩阵法把两个有限长序列写成乘加表，可快速计算有限点卷积并检查边界。"
      ],
      "extraFormulas": [],
      "finalPitfall": "矩阵的行列顺序与序列箭头位置必须一致；忽略 k=0 的起点会整体错位。 离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。"
    },
    "s5-2-4": {
      "concept": "\n      <p><mark>离散卷积同样满足交换、结合、分配和移位性质，并与差分/累加相互作用。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：两个因果序列卷积后仍是因果序列吗？为什么？</p><p>离散卷积和是加权求和，而不是积分；求和的整数范围由两个序列的支撑集交集决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=1729\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 28:49，打开 Bilibili 对应讲解\">第 39 集 · 28:49 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>交换律、结合律、分配律与连续卷积一致，可用于化简级联和并联系统。</li><li>f(k)*δ(k−k₀)=f(k−k₀)；δ(k) 是离散卷积的单位元。</li><li>差分与卷积可交换：Δ[f*h]=(Δf)*h=f*(Δh)。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单位元</span>\n      <span class=\"formula\">f(k)*δ(k−k₀)=f(k−k₀)</span>\n      <span class=\"formula-note\">移位冲激。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">差分性质</span>\n      <span class=\"formula\">Δ[f(k)*h(k)]=(Δf(k))*h(k)</span>\n      <span class=\"formula-note\">在序列范围内成立。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>离散卷积同样满足交换、结合、分配和移位性质，并与差分/累加相互作用。</p>\n      <p><mark>自检问题：</mark>两个因果序列卷积后仍是因果序列吗？为什么？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散差分对应连续微分，但边界项处理不同；不要直接照搬连续公式。</p>\n      <p><mark>迁移到题目时：</mark>卷积和满足交换、结合、分配、移位性质；与 δ(k−n) 卷积就是平移，与 ε(k) 卷积就是累加。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=1729\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 28:49，打开 Bilibili 对应讲解\">第 39 集 · 28:49 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "卷积和满足交换、结合、分配、移位性质；与 δ(k−n) 卷积就是平移，与 ε(k) 卷积就是累加。"
      ],
      "extraFormulas": [],
      "finalPitfall": "离散差分对应连续微分，但边界项处理不同；不要直接照搬连续公式。 离散卷积不是逐项相乘；边界索引漏一个会导致整段结果错位，最后要检查 y(k) 的起始索引。"
    },
    "s5-2-5": {
      "concept": "\n      <p><mark>熟记阶跃、指数和有限长序列的卷积结果，特别是几何级数求和。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：计算 a&lt;sup&gt;k&lt;/sup&gt;ε(k) 与 δ(k−2) 的卷积，并说明结果起点。</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=39&amp;t=1346\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 39 集 · 22:26，打开 Bilibili 对应讲解\">第 39 集 · 22:26 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>ε(k)*ε(k)=(k+1)ε(k)，因为离散累加每次多一个样本。</li><li>a<sup>k</sup>ε(k)*ε(k)=[(1−a<sup>k+1</sup>)/(1−a)]ε(k)（a≠1）。</li><li>a<sup>k</sup>ε(k)*b<sup>k</sup>ε(k) 也可用几何级数求和，注意 a=b 的特殊情况。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">阶跃卷积</span>\n      <span class=\"formula\">ε(k)*ε(k)=(k+1)ε(k)</span>\n      <span class=\"formula-note\">离散与连续不同：连续为 tε(t)。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">指数与阶跃</span>\n      <span class=\"formula\">a<sup>k</sup>ε(k)*ε(k)=[(1−a<sup>k+1</sup>)/(1−a)]ε(k)</span>\n      <span class=\"formula-note\">a≠1。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>熟记阶跃、指数和有限长序列的卷积结果，特别是几何级数求和。</p>\n      <p><mark>自检问题：</mark>计算 a&lt;sup&gt;k&lt;/sup&gt;ε(k) 与 δ(k−2) 的卷积，并说明结果起点。</p>\n      <p><span class=\"hl-red\">易错点：</span>离散阶跃卷积得到 (k+1)，不是 k；端点 k=0 的样本不能忘记。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散阶跃卷积得到 (k+1)，不是 k；端点 k=0 的样本不能忘记。"
    },
    "s5-3": {
      "concept": "\n      <p><mark>离散系统是序列到序列的映射，LTI 离散系统由单位脉冲响应 h(k) 完全表征。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：y(k)=k f(k) 是否线性？是否时不变？</p><p>离散系统差分方程的阶数不是最高索引本身，而是最高索引与最低索引的差；初值和初态要分别对应 k≥0 与 k&lt;0。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=130\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 02:10，打开 Bilibili 对应讲解\">第 36 集 · 02:10 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>线性与时不变性的定义与连续系统相同，只是变量换成整数 k。</li><li>因果离散系统的 h(k)=0（k<0）；稳定系统满足 Σ|h(k)|<∞。</li><li>差分方程、方框图、单位脉冲响应和系统函数是离散系统的不同描述。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">LTI 描述</span>\n      <span class=\"formula\">y(k)=f(k)*h(k)</span>\n      <span class=\"formula-note\">零状态响应。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">BIBO 稳定</span>\n      <span class=\"formula\">Σ<sub>k=−∞</sub><sup>∞</sup>|h(k)|<∞</span>\n      <span class=\"formula-note\">离散 LTI 系统判据。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">阶数</span>\n          <span class=\"formula\">N=k<sub>max</sub>−k<sub>min</sub></span>\n          <span class=\"formula-note\">第 36 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">齐次形式</span>\n          <span class=\"formula\">y<sub>h</sub>(k)=ΣC<sub>i</sub>λ<sub>i</sub><sup>k</sup></span>\n          <span class=\"formula-note\">第 36 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>不要用连续时间的微分阶数判断；离散重根多乘的是 k 的幂，不是 e^{λt}t 的幂。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>离散系统是序列到序列的映射，LTI 离散系统由单位脉冲响应 h(k) 完全表征。</p>\n      <p><mark>自检问题：</mark>y(k)=k f(k) 是否线性？是否时不变？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散系统的“时不变”是序列整体移位不变，不是每个样本值不随时间变化。</p>\n      <p><mark>迁移到题目时：</mark>N 阶差分方程通常需要 N 个初始条件；y(0),y(1),… 是激励接入后的条件，y(−1),… 是激励接入前的状态。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=130\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 02:10，打开 Bilibili 对应讲解\">第 36 集 · 02:10 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "N 阶差分方程通常需要 N 个初始条件；y(0),y(1),… 是激励接入后的条件，y(−1),… 是激励接入前的状态。"
      ],
      "extraFormulas": [
        {
          "label": "阶数",
          "expr": "N=k<sub>max</sub>−k<sub>min</sub>",
          "note": "第 36 集讲解"
        },
        {
          "label": "齐次形式",
          "expr": "y<sub>h</sub>(k)=ΣC<sub>i</sub>λ<sub>i</sub><sup>k</sup>",
          "note": "第 36 集讲解"
        }
      ],
      "finalPitfall": "离散系统的“时不变”是序列整体移位不变，不是每个样本值不随时间变化。 不要用连续时间的微分阶数判断；离散重根多乘的是 k 的幂，不是 e^{λt}t 的幂。"
    },
    "s5-4-1": {
      "concept": "\n      <p><mark>零输入响应由系统固有模态和初始状态决定，是齐次差分方程的解。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：y(k)−3y(k−1)+2y(k−2)=0，y(−1)=1、y(−2)=0，求 y&lt;sub&gt;x&lt;/sub&gt;(k)。</p><p>离散系统差分方程的阶数不是最高索引本身，而是最高索引与最低索引的差；初值和初态要分别对应 k≥0 与 k&lt;0。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=205\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 03:25，打开 Bilibili 对应讲解\">第 36 集 · 03:25 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>令输入为零，解齐次差分方程；特征根决定 a<sup>k</sup>、k a<sup>k</sup> 等形式。</li><li>单实根给出 Cλ<sup>k</sup>；共轭复根给出衰减/等幅正弦序列。</li><li>初始条件应使用 y(−1)、y(−2) 等激励接入前的状态。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">特征方程</span>\n      <span class=\"formula\">Σ<sub>i=0</sub><sup>n</sup>a<sub>i</sub>λ<sup>n−i</sup>=0</span>\n      <span class=\"formula-note\">差分方程对应特征根。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单根形式</span>\n      <span class=\"formula\">y<sub>x</sub>(k)=ΣC<sub>i</sub>λ<sub>i</sub><sup>k</sup></span>\n      <span class=\"formula-note\">重根需乘 k 的幂。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>特征根决定零输入/齐次模态；实根给幂次，重根多乘 k 的幂，共轭根配成衰减振荡的极坐标形式。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=205\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 03:25，打开 Bilibili 对应讲解\">第 36 集 · 03:25 ↗</a></li><li>经典解要先求齐次解，再求特解，最后用给定初始条件确定系数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=843\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 14:03，打开 Bilibili 对应讲解\">第 36 集 · 14:03 ↗</a></li><li>零状态响应仍可能包含齐次解，因为输入接入瞬间会改变状态；不能只写特解。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=37&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 37 集 · 00:00，打开 Bilibili 对应讲解\">第 37 集 · 00:00 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">共轭根</span>\n          <span class=\"formula\">λ=re<sup>±jθ</sup> ⇒ r<sup>k</sup>(C<sub>1</sub>cos kθ+C<sub>2</sub>sin kθ)</span>\n          <span class=\"formula-note\">第 36 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">零输入</span>\n          <span class=\"formula\">y<sub>zi</sub>(k)=ΣC<sub>xi</sub>λ<sub>i</sub><sup>k</sup></span>\n          <span class=\"formula-note\">第 37 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单根系数</span>\n          <span class=\"formula\">C<sub>i</sub>=C<sub>xi</sub>+C<sub>si</sub></span>\n          <span class=\"formula-note\">第 37 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>不要用连续时间的微分阶数判断；离散重根多乘的是 k 的幂，不是 e^{λt}t 的幂。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep36/frame-00.jpg\"\n            data-image-title=\"5.1 系统差分方程的经典解\"\n            data-image-label=\"第 36 集 · 00:00\"\n            aria-label=\"查看第 36 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep36/frame-00.jpg\" alt=\"第 36 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep36/frame-01.jpg\"\n            data-image-title=\"5.1 系统差分方程的经典解\"\n            data-image-label=\"第 36 集 · 05:00\"\n            aria-label=\"查看第 36 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep36/frame-01.jpg\" alt=\"第 36 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep36/frame-02.jpg\"\n            data-image-title=\"5.1 系统差分方程的经典解\"\n            data-image-label=\"第 36 集 · 10:00\"\n            aria-label=\"查看第 36 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep36/frame-02.jpg\" alt=\"第 36 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep36/frame-03.jpg\"\n            data-image-title=\"5.1 系统差分方程的经典解\"\n            data-image-label=\"第 36 集 · 15:00\"\n            aria-label=\"查看第 36 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep36/frame-03.jpg\" alt=\"第 36 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep36/frame-04.jpg\"\n            data-image-title=\"5.1 系统差分方程的经典解\"\n            data-image-label=\"第 36 集 · 20:00\"\n            aria-label=\"查看第 36 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep36/frame-04.jpg\" alt=\"第 36 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>零输入响应由系统固有模态和初始状态决定，是齐次差分方程的解。</p>\n      <p><mark>自检问题：</mark>y(k)−3y(k−1)+2y(k−2)=0，y(−1)=1、y(−2)=0，求 y&lt;sub&gt;x&lt;/sub&gt;(k)。</p>\n      <p><span class=\"hl-red\">易错点：</span>离散初始条件通常是 y(−1)、y(−2)，不是 y(0)；直接用 y(0) 会混淆零输入与输入贡献。</p>\n      <p><mark>迁移到题目时：</mark>y_zi(k) 满足齐次差分方程，指数根的系数由 y(−1),…,y(−N) 或等价迭代条件确定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=37&amp;t=175\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 37 集 · 02:55，打开 Bilibili 对应讲解\">第 37 集 · 02:55 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "特征根决定零输入/齐次模态；实根给幂次，重根多乘 k 的幂，共轭根配成衰减振荡的极坐标形式。",
        "经典解要先求齐次解，再求特解，最后用给定初始条件确定系数。",
        "零状态响应仍可能包含齐次解，因为输入接入瞬间会改变状态；不能只写特解。",
        "y_zi(k) 满足齐次差分方程，指数根的系数由 y(−1),…,y(−N) 或等价迭代条件确定。"
      ],
      "extraFormulas": [
        {
          "label": "共轭根",
          "expr": "λ=re<sup>±jθ</sup> ⇒ r<sup>k</sup>(C<sub>1</sub>cos kθ+C<sub>2</sub>sin kθ)",
          "note": "第 36 集讲解"
        },
        {
          "label": "零输入",
          "expr": "y<sub>zi</sub>(k)=ΣC<sub>xi</sub>λ<sub>i</sub><sup>k</sup>",
          "note": "第 37 集讲解"
        },
        {
          "label": "单根系数",
          "expr": "C<sub>i</sub>=C<sub>xi</sub>+C<sub>si</sub>",
          "note": "第 37 集讲解"
        }
      ],
      "finalPitfall": "离散初始条件通常是 y(−1)、y(−2)，不是 y(0)；直接用 y(0) 会混淆零输入与输入贡献。 不要用连续时间的微分阶数判断；离散重根多乘的是 k 的幂，不是 e^{λt}t 的幂。 零状态响应的负索引初值为 0，不等于 0⁺ 响应为 0；有前向激励时需先迭代出当前时刻的值。"
    },
    "s5-4-2": {
      "concept": "\n      <p><mark>零状态响应是输入与单位脉冲响应的卷积和，也可由差分方程递推求解。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：y(k)=0.5y(k−1)+f(k)，f(k)=ε(k)，零状态下求 y(k) 并识别 h(k)。</p><p>离散系统的 h(k) 是对 δ(k) 的零状态响应，g(k) 是对 ε(k) 的零状态响应；级联/并联和卷积和都由 h 表征。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=38&amp;t=140\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 38 集 · 02:20，打开 Bilibili 对应讲解\">第 38 集 · 02:20 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>y<sub>f</sub>(k)=f(k)*h(k)；h(k) 是零状态下对 δ(k) 的响应。</li><li>因果系统的输出在输入接入前为零；有限长输入与 h(k) 的卷积可按区间求和。</li><li>递推法适合计算机计算，卷积法更适合解析和系统性质分析。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">零状态响应</span>\n      <span class=\"formula\">y<sub>f</sub>(k)=Σ<sub>m=−∞</sub><sup>∞</sup>f(m)h(k−m)</span>\n      <span class=\"formula-note\">离散卷积和。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>特解按输入形式设置；输入为常数、幂、指数或正弦时不能沿用连续时间的试解表。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=4\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 00:04，打开 Bilibili 对应讲解\">第 36 集 · 00:04 ↗</a></li><li>离散系统全响应同样可分解为零输入和零状态，而且零状态部分仍可能含齐次项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=36&amp;t=11\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 36 集 · 00:11，打开 Bilibili 对应讲解\">第 36 集 · 00:11 ↗</a></li><li>零状态响应先令所有负索引状态为零，再用输入和移位差分关系求 y_zs(0),…。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=37&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 37 集 · 00:00，打开 Bilibili 对应讲解\">第 37 集 · 00:00 ↗</a></li><li>求完后用 y(k)=y_zi(k)+y_zs(k) 和原差分方程逐项验证。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=37&amp;t=4\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 37 集 · 00:04，打开 Bilibili 对应讲解\">第 37 集 · 00:04 ↗</a></li><li>C_xi 与 C_si 以及经典解的总 C_i 要区分清楚，分别来源不同。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=37&amp;t=291\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 37 集 · 04:51，打开 Bilibili 对应讲解\">第 37 集 · 04:51 ↗</a></li><li>单位序列响应能表征离散 LTI 系统的因果性、稳定性及后续 Z 域系统函数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=38&amp;t=2\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 38 集 · 00:02，打开 Bilibili 对应讲解\">第 38 集 · 00:02 ↗</a></li><li>阶跃响应 g(k) 是非齐次零状态响应，通常含特解，再积分/累加就得到 h。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=38&amp;t=4\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 38 集 · 00:04，打开 Bilibili 对应讲解\">第 38 集 · 00:04 ↗</a></li><li>若差分方程右端是 δ(k) 的线性组合，先用线性/时不变分别求各基本响应，再合并。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=38&amp;t=125\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 38 集 · 02:05，打开 Bilibili 对应讲解\">第 38 集 · 02:05 ↗</a></li><li>求 h(k) 时右端换成 δ(k) 及其移位；k&gt;0 后很多项变为齐次差分，按特征根写响应。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=38&amp;t=140\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 38 集 · 02:20，打开 Bilibili 对应讲解\">第 38 集 · 02:20 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">分解</span>\n          <span class=\"formula\">y(k)=y<sub>zi</sub>(k)+y<sub>zs</sub>(k)</span>\n          <span class=\"formula-note\">第 37 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单位响应</span>\n          <span class=\"formula\">h(k)=T[δ(k)]|初态为零</span>\n          <span class=\"formula-note\">第 38 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">累加关系</span>\n          <span class=\"formula\">g(k)=Σ<sub>i=−∞</sub><sup>k</sup>h(i)</span>\n          <span class=\"formula-note\">第 38 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">差分关系</span>\n          <span class=\"formula\">h(k)=g(k)−g(k−1)</span>\n          <span class=\"formula-note\">第 38 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>g(k) 不能直接令 h(k) 中的 k 取阶跃；阶跃响应可能带常数或衰减特解。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep37/frame-00.jpg\"\n            data-image-title=\"5.2 零输入响应与零状态响应\"\n            data-image-label=\"第 37 集 · 00:00\"\n            aria-label=\"查看第 37 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep37/frame-00.jpg\" alt=\"第 37 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep37/frame-01.jpg\"\n            data-image-title=\"5.2 零输入响应与零状态响应\"\n            data-image-label=\"第 37 集 · 05:00\"\n            aria-label=\"查看第 37 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep37/frame-01.jpg\" alt=\"第 37 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep37/frame-02.jpg\"\n            data-image-title=\"5.2 零输入响应与零状态响应\"\n            data-image-label=\"第 37 集 · 10:00\"\n            aria-label=\"查看第 37 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep37/frame-02.jpg\" alt=\"第 37 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep37/frame-03.jpg\"\n            data-image-title=\"5.2 零输入响应与零状态响应\"\n            data-image-label=\"第 37 集 · 15:00\"\n            aria-label=\"查看第 37 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep37/frame-03.jpg\" alt=\"第 37 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep37/frame-04.jpg\"\n            data-image-title=\"5.2 零输入响应与零状态响应\"\n            data-image-label=\"第 37 集 · 20:00\"\n            aria-label=\"查看第 37 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep37/frame-04.jpg\" alt=\"第 37 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep38/frame-00.jpg\"\n            data-image-title=\"5.3 单位序列响应与单位阶跃响应\"\n            data-image-label=\"第 38 集 · 00:00\"\n            aria-label=\"查看第 38 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep38/frame-00.jpg\" alt=\"第 38 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep38/frame-01.jpg\"\n            data-image-title=\"5.3 单位序列响应与单位阶跃响应\"\n            data-image-label=\"第 38 集 · 05:00\"\n            aria-label=\"查看第 38 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep38/frame-01.jpg\" alt=\"第 38 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep38/frame-02.jpg\"\n            data-image-title=\"5.3 单位序列响应与单位阶跃响应\"\n            data-image-label=\"第 38 集 · 10:00\"\n            aria-label=\"查看第 38 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep38/frame-02.jpg\" alt=\"第 38 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep38/frame-03.jpg\"\n            data-image-title=\"5.3 单位序列响应与单位阶跃响应\"\n            data-image-label=\"第 38 集 · 15:00\"\n            aria-label=\"查看第 38 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep38/frame-03.jpg\" alt=\"第 38 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep38/frame-04.jpg\"\n            data-image-title=\"5.3 单位序列响应与单位阶跃响应\"\n            data-image-label=\"第 38 集 · 20:00\"\n            aria-label=\"查看第 38 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep38/frame-04.jpg\" alt=\"第 38 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep38/frame-05.jpg\"\n            data-image-title=\"5.3 单位序列响应与单位阶跃响应\"\n            data-image-label=\"第 38 集 · 25:00\"\n            aria-label=\"查看第 38 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep38/frame-05.jpg\" alt=\"第 38 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>零状态响应是输入与单位脉冲响应的卷积和，也可由差分方程递推求解。</p>\n      <p><mark>自检问题：</mark>y(k)=0.5y(k−1)+f(k)，f(k)=ε(k)，零状态下求 y(k) 并识别 h(k)。</p>\n      <p><span class=\"hl-red\">易错点：</span>递推时初始条件为零状态，不代表初始输出全为零；差分方程中的历史项仍可能产生非零初值。</p>\n      <p><mark>迁移到题目时：</mark>h(k)=g(k)−g(k−1)；g(k)=Σ_{i=−∞}^k h(i)，对应连续系统的导数和积分关系。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=38&amp;t=967\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 38 集 · 16:07，打开 Bilibili 对应讲解\">第 38 集 · 16:07 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "特解按输入形式设置；输入为常数、幂、指数或正弦时不能沿用连续时间的试解表。",
        "离散系统全响应同样可分解为零输入和零状态，而且零状态部分仍可能含齐次项。",
        "零状态响应先令所有负索引状态为零，再用输入和移位差分关系求 y_zs(0),…。",
        "求完后用 y(k)=y_zi(k)+y_zs(k) 和原差分方程逐项验证。",
        "C_xi 与 C_si 以及经典解的总 C_i 要区分清楚，分别来源不同。",
        "单位序列响应能表征离散 LTI 系统的因果性、稳定性及后续 Z 域系统函数。",
        "阶跃响应 g(k) 是非齐次零状态响应，通常含特解，再积分/累加就得到 h。",
        "若差分方程右端是 δ(k) 的线性组合，先用线性/时不变分别求各基本响应，再合并。",
        "求 h(k) 时右端换成 δ(k) 及其移位；k>0 后很多项变为齐次差分，按特征根写响应。",
        "h(k)=g(k)−g(k−1)；g(k)=Σ_{i=−∞}^k h(i)，对应连续系统的导数和积分关系。"
      ],
      "extraFormulas": [
        {
          "label": "分解",
          "expr": "y(k)=y<sub>zi</sub>(k)+y<sub>zs</sub>(k)",
          "note": "第 37 集讲解"
        },
        {
          "label": "单位响应",
          "expr": "h(k)=T[δ(k)]|初态为零",
          "note": "第 38 集讲解"
        },
        {
          "label": "累加关系",
          "expr": "g(k)=Σ<sub>i=−∞</sub><sup>k</sup>h(i)",
          "note": "第 38 集讲解"
        },
        {
          "label": "差分关系",
          "expr": "h(k)=g(k)−g(k−1)",
          "note": "第 38 集讲解"
        }
      ],
      "finalPitfall": "递推时初始条件为零状态，不代表初始输出全为零；差分方程中的历史项仍可能产生非零初值。 不要用连续时间的微分阶数判断；离散重根多乘的是 k 的幂，不是 e^{λt}t 的幂。 零状态响应的负索引初值为 0，不等于 0⁺ 响应为 0；有前向激励时需先迭代出当前时刻的值。 g(k) 不能直接令 h(k) 中的 k 取阶跃；阶跃响应可能带常数或衰减特解。"
    },
    "s5-ex": {
      "concept": "\n      <p><mark>重点练习离散周期判断、卷积和分段、矩阵法和零输入/零状态分解。</mark></p>\n      <p>把连续时间卷积换成离散卷积和，把微分方程换成差分方程。掌握基本序列、卷积和的分段/矩阵计算，以及零输入与零状态响应的分解。</p>\n      <p>本节要解决的具体问题：用矩阵法和图解法各算一遍同一道卷积题，结果是否一致？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>卷积和题先标出序列起点和长度，再画重叠表或列矩阵。</li><li>零输入响应用 y(−1) 类历史状态，零状态响应用零历史状态。</li><li>答案页在教材 p.230–234，错题要回到对应小节。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复盘检查</span>\n      <span class=\"formula\">起点 → 长度 → 重叠 → 求和</span>\n      <span class=\"formula-note\">离散卷积四步法。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点练习离散周期判断、卷积和分段、矩阵法和零输入/零状态分解。</p>\n      <p><mark>自检问题：</mark>用矩阵法和图解法各算一遍同一道卷积题，结果是否一致？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散题的索引偏移比连续题更隐蔽，建议在草稿上写出每个序列的 k 轴。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散题的索引偏移比连续题更隐蔽，建议在草稿上写出每个序列的 k 轴。"
    }
  },
  "ch6": {
    "s6-0": {
      "concept": "\n      <p><mark>建立离散频域分析路线：DTFS（周期序列）→ DTFT（非周期序列）→ DFT（有限长可计算）。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：为什么离散时间傅里叶变换的频率响应天然是周期的？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>离散时间频率变量 Ω 是归一化角频率，DTFT 以 2π 为周期。</li><li>周期序列用离散傅里叶级数，非周期序列用离散时间傅里叶变换。</li><li>有限长序列用 DFT，便于计算机实现；FFT 是 DFT 的快速算法。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">三种工具</span>\n      <span class=\"formula\">DTFS / DTFT / DFT</span>\n      <span class=\"formula-note\">对应周期、非周期、有限长序列。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>建立离散频域分析路线：DTFS（周期序列）→ DTFT（非周期序列）→ DFT（有限长可计算）。</p>\n      <p><mark>自检问题：</mark>为什么离散时间傅里叶变换的频率响应天然是周期的？</p>\n      <p><span class=\"hl-red\">易错点：</span>不要把连续频率 ω 与离散归一化频率 Ω 混用；Ω=ωT&lt;sub&gt;s&lt;/sub&gt;。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "不要把连续频率 ω 与离散归一化频率 Ω 混用；Ω=ωT<sub>s</sub>。"
    },
    "s6-1-1": {
      "concept": "\n      <p><mark>周期为 N 的离散序列可展开为 N 个复指数分量，系数也以 N 为周期。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：周期 N=4 的序列，DTFS 有几个独立系数？为什么不是无穷多个？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>只有 N 个独立的复指数 e<sup>j(2π/N)nk</sup>，因此 DTFS 只有 N 个独立系数。</li><li>系数 F<sub>n</sub> 是周期为 N 的序列，和原序列一样周期。</li><li>DTFS 可看成 DTFT 在周期情况下的离散频域表示。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">DTFS 系数</span>\n      <span class=\"formula\">F<sub>n</sub>=(1/N)Σ<sub>k=0</sub><sup>N−1</sup>f(k)e<sup>−j(2π/N)nk</sup></span>\n      <span class=\"formula-note\">n 取 0…N−1 即可。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">合成</span>\n      <span class=\"formula\">f(k)=Σ<sub>n=0</sub><sup>N−1</sup>F<sub>n</sub>e<sup>j(2π/N)nk</sup></span>\n      <span class=\"formula-note\">周期延拓后成立。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>周期为 N 的离散序列可展开为 N 个复指数分量，系数也以 N 为周期。</p>\n      <p><mark>自检问题：</mark>周期 N=4 的序列，DTFS 有几个独立系数？为什么不是无穷多个？</p>\n      <p><span class=\"hl-red\">易错点：</span>DTFS 系数不是唯一的无限序列，而是以 N 为周期重复；只有 N 个独立值。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "DTFS 系数不是唯一的无限序列，而是以 N 为周期重复；只有 N 个独立值。"
    },
    "s6-1-2": {
      "concept": "\n      <p><mark>周期序列的频谱是离散且周期的，谱线间隔为 2π/N，在频域每 2π 重复一次。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：N=8 的周期序列，其频谱在 0≤Ω&lt;2π 内有多少根独立谱线？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>时域周期 N 对应频域谱线间隔 2π/N。</li><li>与连续周期信号不同，离散周期信号的频谱本身也是周期的。</li><li>幅度谱和相位谱都以 2π 为周期，只需观察一个主值区间。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">谱线间隔</span>\n      <span class=\"formula\">ΔΩ=2π/N</span>\n      <span class=\"formula-note\">N 为时域周期。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>周期序列的频谱是离散且周期的，谱线间隔为 2π/N，在频域每 2π 重复一次。</p>\n      <p><mark>自检问题：</mark>N=8 的周期序列，其频谱在 0≤Ω&lt;2π 内有多少根独立谱线？</p>\n      <p><span class=\"hl-red\">易错点：</span>“周期信号的频谱离散”只说对了一半；离散时间周期信号的频谱还周期重复。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "“周期信号的频谱离散”只说对了一半；离散时间周期信号的频谱还周期重复。"
    },
    "s6-2-1": {
      "concept": "\n      <p><mark>非周期离散序列的 DTFT 是 Ω 的连续、周期函数，以 2π 为周期。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：DTFT 为什么满足 F(e&lt;sup&gt;j(Ω+2π)&lt;/sup&gt;)=F(e&lt;sup&gt;jΩ&lt;/sup&gt;)？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>F(e<sup>jΩ</sup>)=Σf(k)e<sup>−jΩk</sup>，逆变换是在一个 2π 区间内积分。</li><li>DTFT 对 Ω 连续、对 Ω 周期，这是离散时间采样导致的结果。</li><li>绝对可和是 DTFT 存在的常用充分条件，广义函数可扩展。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">DTFT</span>\n      <span class=\"formula\">F(e<sup>jΩ</sup>)=Σ<sub>k=−∞</sub><sup>∞</sup>f(k)e<sup>−jΩk</sup></span>\n      <span class=\"formula-note\">Ω 为归一化角频率。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">逆 DTFT</span>\n      <span class=\"formula\">f(k)=(1/2π)∫<sub>−π</sub><sup>π</sup>F(e<sup>jΩ</sup>)e<sup>jΩk</sup>dΩ</span>\n      <span class=\"formula-note\">积分区间长度 2π。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>非周期离散序列的 DTFT 是 Ω 的连续、周期函数，以 2π 为周期。</p>\n      <p><mark>自检问题：</mark>DTFT 为什么满足 F(e&lt;sup&gt;j(Ω+2π)&lt;/sup&gt;)=F(e&lt;sup&gt;jΩ&lt;/sup&gt;)？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散时间信号的频谱是周期函数，因此带宽和频率只需在一个 2π 主值区间内讨论。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散时间信号的频谱是周期函数，因此带宽和频率只需在一个 2π 主值区间内讨论。"
    },
    "s6-2-2": {
      "concept": "\n      <p><mark>熟记单位脉冲、阶跃、指数、矩形序列和正弦/余弦序列的 DTFT。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：a=0.5 时，单边指数序列的 DTFT 在 Ω=0 处的值是多少？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>δ(k) ↔ 1；常数序列 ↔ 2π 周期冲激串。</li><li>a<sup>k</sup>ε(k) ↔ 1/(1−ae<sup>−jΩ</sup>)（|a|<1）。</li><li>有限长矩形序列的 DTFT 是 Dirichlet 核型函数，主瓣宽度与长度成反比。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单位脉冲</span>\n      <span class=\"formula\">δ(k) ↔ 1</span>\n      <span class=\"formula-note\">全频带等幅。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单边指数</span>\n      <span class=\"formula\">a<sup>k</sup>ε(k) ↔ 1/(1−ae<sup>−jΩ</sup>)</span>\n      <span class=\"formula-note\">|a|&lt;1。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>熟记单位脉冲、阶跃、指数、矩形序列和正弦/余弦序列的 DTFT。</p>\n      <p><mark>自检问题：</mark>a=0.5 时，单边指数序列的 DTFT 在 Ω=0 处的值是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>连续与离散的阶跃变换形式不同；离散阶跃的 DTFT 含周期冲激和主值项。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "连续与离散的阶跃变换形式不同；离散阶跃的 DTFT 含周期冲激和主值项。"
    },
    "s6-3": {
      "concept": "\n      <p><mark>周期序列的 DTFT 是一串加权周期冲激，权重由 DTFS 系数决定。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：N=4 的周期序列，其 DTFT 在 [0,2π) 内有几根冲激？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>周期为 N 的序列不满足绝对可和，但在广义函数意义下有 DTFT。</li><li>频谱由间隔 2π/N 的冲激组成，并在 2π 上周期重复。</li><li>这与连续周期信号的冲激谱类似，但离散频谱本身还周期。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">周期序列 DTFT</span>\n      <span class=\"formula\">F(e<sup>jΩ</sup>)=(2π/N)Σ<sub>n</sub>F<sub>n</sub>δ(Ω−2πn/N)</span>\n      <span class=\"formula-note\">按 2π 周期延拓。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>周期序列的 DTFT 是一串加权周期冲激，权重由 DTFS 系数决定。</p>\n      <p><mark>自检问题：</mark>N=4 的周期序列，其 DTFT 在 [0,2π) 内有几根冲激？</p>\n      <p><span class=\"hl-red\">易错点：</span>周期冲激串的权重和间隔要与 DTFS 系数对应；2π/N 因子容易漏。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "周期冲激串的权重和间隔要与 DTFS 系数对应；2π/N 因子容易漏。"
    },
    "s6-4": {
      "concept": "\n      <p><mark>掌握离散时移、频移、反转、卷积、乘积、差分、累加和帕塞瓦尔性质。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：序列延迟 3 个样本，其幅度谱和相位谱分别如何变化？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>时移 e<sup>−jΩk₀</sup> 只改变相位；频移对应时域乘 e<sup>jΩ₀k</sup>。</li><li>时域卷积对应 DTFT 相乘，时域相乘对应频域周期卷积（带 1/2π）。</li><li>差分对应 (1−e<sup>−jΩ</sup>)，累加涉及 1/(1−e<sup>−jΩ</sup>) 与周期冲激。</li><li>帕塞瓦尔关系在 2π 主值区间内积分。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">时移</span>\n      <span class=\"formula\">f(k−k₀) ↔ e<sup>−jΩk₀</sup>F(e<sup>jΩ</sup>)</span>\n      <span class=\"formula-note\">相位线性变化。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">卷积</span>\n      <span class=\"formula\">f(k)*h(k) ↔ F(e<sup>jΩ</sup>)H(e<sup>jΩ</sup>)</span>\n      <span class=\"formula-note\">DTFT 乘法。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">帕塞瓦尔</span>\n      <span class=\"formula\">Σ|f(k)|²=(1/2π)∫<sub>2π</sub>|F(e<sup>jΩ</sup>)|²dΩ</span>\n      <span class=\"formula-note\">一个周期积分。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握离散时移、频移、反转、卷积、乘积、差分、累加和帕塞瓦尔性质。</p>\n      <p><mark>自检问题：</mark>序列延迟 3 个样本，其幅度谱和相位谱分别如何变化？</p>\n      <p><span class=\"hl-red\">易错点：</span>DTFT 的频域卷积是周期卷积，不是普通连续卷积；积分区间只需一个 2π。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "DTFT 的频域卷积是周期卷积，不是普通连续卷积；积分区间只需一个 2π。"
    },
    "s6-5-1": {
      "concept": "\n      <p><mark>DFT 是对 DTFT 在一个周期内等间隔采样，把连续频率变成有限个可计算频点。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：N=8 的 DFT，相邻频点的归一化频率间隔是多少？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>对 N 点有限长序列，取 Ω=2πn/N，得到 N 个 DFT 系数。</li><li>DFT 隐含对时域序列做 N 点周期延拓，因此频域也是周期的。</li><li>频率分辨率与观测时长/点数有关：ΔΩ=2π/N。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">DFT</span>\n      <span class=\"formula\">F(n)=Σ<sub>k=0</sub><sup>N−1</sup>f(k)e<sup>−j2πnk/N</sup></span>\n      <span class=\"formula-note\">n=0,…,N−1。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频率采样</span>\n      <span class=\"formula\">F(n)=F(e<sup>jΩ</sup>)|<sub>Ω=2πn/N</sub></span>\n      <span class=\"formula-note\">DTFT 的 N 点等间隔采样。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>DFT 是对 DTFT 在一个周期内等间隔采样，把连续频率变成有限个可计算频点。</p>\n      <p><mark>自检问题：</mark>N=8 的 DFT，相邻频点的归一化频率间隔是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>DFT 不是“新的傅里叶变换”，而是 DTFT 的有限点采样，并且隐含周期延拓。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "DFT 不是“新的傅里叶变换”，而是 DTFT 的有限点采样，并且隐含周期延拓。"
    },
    "s6-5-2": {
      "concept": "\n      <p><mark>直接 DFT 计算量为 O(N²)，FFT 利用对称性降为 O(N log N)。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：对 8 点序列补零到 16 点做 DFT，频谱形状和显示分辨率有什么变化？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>直接按定义计算需要 N² 次复数乘加，适合理解但不适合大规模数据。</li><li>FFT 利用旋转因子的周期性和对称性分解计算，结果与 DFT 完全相同。</li><li>FFT 点数通常取 2 的幂；补零只改变频率采样密度，不增加真实信息。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">旋转因子</span>\n      <span class=\"formula\">W<sub>N</sub>=e<sup>−j2π/N</sup></span>\n      <span class=\"formula-note\">DFT 的核。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复杂度</span>\n      <span class=\"formula\">DFT: O(N²) → FFT: O(N log N)</span>\n      <span class=\"formula-note\">加速来自分治。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>直接 DFT 计算量为 O(N²)，FFT 利用对称性降为 O(N log N)。</p>\n      <p><mark>自检问题：</mark>对 8 点序列补零到 16 点做 DFT，频谱形状和显示分辨率有什么变化？</p>\n      <p><span class=\"hl-red\">易错点：</span>补零不会提高频率分辨率，只会在原频谱上插值；真实分辨率由有效观测长度决定。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "补零不会提高频率分辨率，只会在原频谱上插值；真实分辨率由有效观测长度决定。"
    },
    "s6-5-3": {
      "concept": "\n      <p><mark>DFT 的移位、卷积和对称性都带有“循环”特征，需要在有限长序列语境下理解。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：长度分别为 4 和 3 的序列，用 DFT 做线性卷积至少需要多少点？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>时域循环移位对应频域相位因子；频域循环移位对应时域调制。</li><li>时域循环卷积对应频域逐点相乘；普通线性卷积需补零到足够长度。</li><li>实序列 DFT 具有共轭对称性，可用于减少计算量和存储。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">循环卷积</span>\n      <span class=\"formula\">f(k) ⊛ h(k) ↔ F(n)H(n)</span>\n      <span class=\"formula-note\">长度 N 的循环卷积。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">线性卷积条件</span>\n      <span class=\"formula\">N ≥ N₁+N₂−1</span>\n      <span class=\"formula-note\">补零避免循环混叠。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>DFT 的移位、卷积和对称性都带有“循环”特征，需要在有限长序列语境下理解。</p>\n      <p><mark>自检问题：</mark>长度分别为 4 和 3 的序列，用 DFT 做线性卷积至少需要多少点？</p>\n      <p><span class=\"hl-red\">易错点：</span>FFT 相乘默认是循环卷积；若不补零到足够长度，结果会首尾混叠。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "FFT 相乘默认是循环卷积；若不补零到足够长度，结果会首尾混叠。"
    },
    "s6-6-1": {
      "concept": "\n      <p><mark>离散 LTI 系统对复指数序列的稳态响应是 H(e&lt;sup&gt;jΩ&lt;/sup&gt;) 加权后的同频序列。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：H(e&lt;sup&gt;jΩ&lt;/sup&gt;)=1/[1−0.5e&lt;sup&gt;−jΩ&lt;/sup&gt;]，在 Ω=0 处的增益是多少？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>e<sup>jΩk</sup> 是离散 LTI 系统的本征函数，输出为 H(e<sup>jΩ</sup>)e<sup>jΩk</sup>。</li><li>H(e<sup>jΩ</sup>) 是 h(k) 的 DTFT，具有 2π 周期性。</li><li>幅度响应决定各频率分量的增益，相位响应决定相移。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">本征响应</span>\n      <span class=\"formula\">e<sup>jΩk</sup> → H(e<sup>jΩ</sup>)e<sup>jΩk</sup></span>\n      <span class=\"formula-note\">LTI、零状态。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>离散 LTI 系统对复指数序列的稳态响应是 H(e&lt;sup&gt;jΩ&lt;/sup&gt;) 加权后的同频序列。</p>\n      <p><mark>自检问题：</mark>H(e&lt;sup&gt;jΩ&lt;/sup&gt;)=1/[1−0.5e&lt;sup&gt;−jΩ&lt;/sup&gt;]，在 Ω=0 处的增益是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散频率响应以 2π 为周期，因此高频与低频的区分只在一个主值区间内有效。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散频率响应以 2π 为周期，因此高频与低频的区分只在一个主值区间内有效。"
    },
    "s6-6-2": {
      "concept": "\n      <p><mark>任意输入分解为复指数叠加，离散系统频域响应为 Y(e&lt;sup&gt;jΩ&lt;/sup&gt;)=H(e&lt;sup&gt;jΩ&lt;/sup&gt;)F(e&lt;sup&gt;jΩ&lt;/sup&gt;)。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：已知 F(e&lt;sup&gt;jΩ&lt;/sup&gt;) 与 H(e&lt;sup&gt;jΩ&lt;/sup&gt;)，如何求 y(k)？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>时域卷积和对应 DTFT 逐点相乘。</li><li>频域方法适合求稳态响应和系统频率特性；瞬态与初始条件仍需 Z 变换或时域方法。</li><li>DTFT 响应在频域周期重复，计算时只需一个 2π 区间。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">频域响应</span>\n      <span class=\"formula\">Y(e<sup>jΩ</sup>)=H(e<sup>jΩ</sup>)F(e<sup>jΩ</sup>)</span>\n      <span class=\"formula-note\">零状态。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>任意输入分解为复指数叠加，离散系统频域响应为 Y(e&lt;sup&gt;jΩ&lt;/sup&gt;)=H(e&lt;sup&gt;jΩ&lt;/sup&gt;)F(e&lt;sup&gt;jΩ&lt;/sup&gt;)。</p>\n      <p><mark>自检问题：</mark>已知 F(e&lt;sup&gt;jΩ&lt;/sup&gt;) 与 H(e&lt;sup&gt;jΩ&lt;/sup&gt;)，如何求 y(k)？</p>\n      <p><span class=\"hl-red\">易错点：</span>Y=HF 默认零状态；离散系统有初始条件时，DTFT 不像单边 Z 变换那样方便纳入初值。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "Y=HF 默认零状态；离散系统有初始条件时，DTFT 不像单边 Z 变换那样方便纳入初值。"
    },
    "s6-ex": {
      "concept": "\n      <p><mark>重点练习 DTFT 变换对、周期性、DFT 频率采样、循环卷积和离散频率响应。</mark></p>\n      <p>从离散傅里叶级数到 DTFT，再到可计算的 DFT。关键差异是离散频率以 2π 为周期，DFT 的频率采样带来周期性和循环卷积。</p>\n      <p>本节要解决的具体问题：同一有限长序列的 DTFT 和 DFT 有什么关系？画图说明。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>先判断序列是周期、非周期还是有限长，再选择 DTFS/DTFT/DFT。</li><li>DFT 题注意补零长度，循环卷积与线性卷积不能混用。</li><li>答案页在教材 p.270–283，复盘时标出频率变量范围。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">选择工具</span>\n      <span class=\"formula\">周期 → DTFS；非周期 → DTFT；有限长 → DFT</span>\n      <span class=\"formula-note\">先分类再计算。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点练习 DTFT 变换对、周期性、DFT 频率采样、循环卷积和离散频率响应。</p>\n      <p><mark>自检问题：</mark>同一有限长序列的 DTFT 和 DFT 有什么关系？画图说明。</p>\n      <p><span class=\"hl-red\">易错点：</span>DTFT 与 DFT 的频率变量和周期范围不同，直接套公式最容易出错。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "DTFT 与 DFT 的频率变量和周期范围不同，直接套公式最容易出错。"
    }
  },
  "ch7": {
    "s7-0": {
      "concept": "\n      <p><mark>Z 变换是离散系统的复频域工具，地位相当于连续系统的拉普拉斯变换。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：为什么离散系统的稳定性判据看单位圆，而连续系统看虚轴？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>Z 变换把离散序列映射为复变量 z 的函数，把卷积和变成乘法。</li><li>单边 Z 变换适合差分方程初值问题；双边 Z 变换适合描述非因果序列。</li><li>Z 平面单位圆对应离散频率响应，收敛域与稳定性密切相关。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">映射关系</span>\n      <span class=\"formula\">z=e<sup>sT</sup></span>\n      <span class=\"formula-note\">s 平面映射到 z 平面。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>Z 变换是离散系统的复频域工具，地位相当于连续系统的拉普拉斯变换。</p>\n      <p><mark>自检问题：</mark>为什么离散系统的稳定性判据看单位圆，而连续系统看虚轴？</p>\n      <p><span class=\"hl-red\">易错点：</span>Z 变换不是简单把 s 替换成 z；两者的收敛域形状和稳定性区域不同。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "Z 变换不是简单把 s 替换成 z；两者的收敛域形状和稳定性区域不同。"
    },
    "s7-1-1": {
      "concept": "\n      <p><mark>对采样序列做拉普拉斯变换并令 z=e&lt;sup&gt;sT&lt;/sup&gt;，得到 Z 变换。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：s=−1+j2 且 T=0.5，对应的 z 在哪里？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=67\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 01:07，打开 Bilibili 对应讲解\">第 40 集 · 01:07 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>采样信号的拉普拉斯变换包含 e<sup>sT</sup> 因子，令 z=e<sup>sT</sup> 可化为 z<sup>−k</sup>。</li><li>s 左半平面映射到单位圆内，虚轴映射到单位圆上，右半平面映射到单位圆外。</li><li>映射多值：s 平面每增加 j2π/T，对应同一个 z，产生频率混叠。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">采样映射</span>\n      <span class=\"formula\">z=e<sup>sT</sup>=e<sup>σT</sup>e<sup>jωT</sup></span>\n      <span class=\"formula-note\">模长 e&lt;sup&gt;σT&lt;/sup&gt;，角度 ωT。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>对采样序列做拉普拉斯变换并令 z=e&lt;sup&gt;sT&lt;/sup&gt;，得到 Z 变换。</p>\n      <p><mark>自检问题：</mark>s=−1+j2 且 T=0.5，对应的 z 在哪里？</p>\n      <p><span class=\"hl-red\">易错点：</span>z→s 的逆映射不是单值；分析离散频率时只能在一个 2π/T 区间内讨论。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "z→s 的逆映射不是单值；分析离散频率时只能在一个 2π/T 区间内讨论。"
    },
    "s7-1-2": {
      "concept": "\n      <p><mark>双边 Z 变换对 k 从 −∞ 到 ∞ 求和，收敛域通常是 z 平面上的圆环。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：因果序列的 ROC 在最大极点圆外，反因果序列的 ROC 在哪里？</p><p>Z 变换由采样信号的拉普拉斯变换引入，z=e^{sT} 把离散时间序列变成复变量 z 的幂级数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=1313\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 21:53，打开 Bilibili 对应讲解\">第 40 集 · 21:53 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>F(z)=Σ<sub>k=−∞</sub><sup>∞</sup>f(k)z<sup>−k</sup>，z 为复数。</li><li>右边序列的 ROC 在某个圆外，左边序列在某个圆内，双边序列可能为圆环。</li><li>ROC 不包含极点；同一 F(z) 配合不同 ROC 对应不同序列。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">双边 Z 变换</span>\n      <span class=\"formula\">F(z)=Σ<sub>k=−∞</sub><sup>∞</sup>f(k)z<sup>−k</sup></span>\n      <span class=\"formula-note\">求和必须收敛。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">ROC</span>\n      <span class=\"formula\">R<sub>1</sub><|z|<R<sub>2</sub></span>\n      <span class=\"formula-note\">一般为圆环。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>计算 Z 变换时同时记录 ROC；只看 F(z) 的代数式无法唯一还原序列。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=55\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 00:55，打开 Bilibili 对应讲解\">第 40 集 · 00:55 ↗</a></li><li>Z 变换存在需要满足收敛条件，ROC 由序列左右边范围和极点半径决定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=313\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 05:13，打开 Bilibili 对应讲解\">第 40 集 · 05:13 ↗</a></li><li>有限长序列的 ROC 通常是环带/去掉原点的区域；右边序列的 ROC 在某圆外，左边序列在某圆内。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=989\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 16:29，打开 Bilibili 对应讲解\">第 40 集 · 16:29 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">双边定义</span>\n          <span class=\"formula\">F(z)=Σ<sub>k=−∞</sub><sup>∞</sup>f(k)z<sup>−k</sup></span>\n          <span class=\"formula-note\">第 40 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>有限长序列也可能与无限序列同形；没有 ROC 不能唯一确定逆变换。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep40/frame-00.jpg\"\n            data-image-title=\"6.1 z变换\"\n            data-image-label=\"第 40 集 · 00:00\"\n            aria-label=\"查看第 40 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep40/frame-00.jpg\" alt=\"第 40 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep40/frame-01.jpg\"\n            data-image-title=\"6.1 z变换\"\n            data-image-label=\"第 40 集 · 05:00\"\n            aria-label=\"查看第 40 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep40/frame-01.jpg\" alt=\"第 40 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep40/frame-02.jpg\"\n            data-image-title=\"6.1 z变换\"\n            data-image-label=\"第 40 集 · 10:00\"\n            aria-label=\"查看第 40 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep40/frame-02.jpg\" alt=\"第 40 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep40/frame-03.jpg\"\n            data-image-title=\"6.1 z变换\"\n            data-image-label=\"第 40 集 · 15:00\"\n            aria-label=\"查看第 40 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep40/frame-03.jpg\" alt=\"第 40 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep40/frame-04.jpg\"\n            data-image-title=\"6.1 z变换\"\n            data-image-label=\"第 40 集 · 20:00\"\n            aria-label=\"查看第 40 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep40/frame-04.jpg\" alt=\"第 40 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>双边 Z 变换对 k 从 −∞ 到 ∞ 求和，收敛域通常是 z 平面上的圆环。</p>\n      <p><mark>自检问题：</mark>因果序列的 ROC 在最大极点圆外，反因果序列的 ROC 在哪里？</p>\n      <p><span class=\"hl-red\">易错点：</span>只给出 F(z) 而不给出 ROC，序列无法唯一确定；这是 Z 变换题的高频陷阱。</p>\n      <p><mark>迁移到题目时：</mark>双边 Z 变换 F(z)=Σf(k)z^{−k}，单边形式只从 k=0 开始，适合初值递推。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=1313\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 21:53，打开 Bilibili 对应讲解\">第 40 集 · 21:53 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "计算 Z 变换时同时记录 ROC；只看 F(z) 的代数式无法唯一还原序列。",
        "Z 变换存在需要满足收敛条件，ROC 由序列左右边范围和极点半径决定。",
        "有限长序列的 ROC 通常是环带/去掉原点的区域；右边序列的 ROC 在某圆外，左边序列在某圆内。",
        "双边 Z 变换 F(z)=Σf(k)z^{−k}，单边形式只从 k=0 开始，适合初值递推。"
      ],
      "extraFormulas": [
        {
          "label": "双边定义",
          "expr": "F(z)=Σ<sub>k=−∞</sub><sup>∞</sup>f(k)z<sup>−k</sup>",
          "note": "第 40 集讲解"
        }
      ],
      "finalPitfall": "只给出 F(z) 而不给出 ROC，序列无法唯一确定；这是 Z 变换题的高频陷阱。 有限长序列也可能与无限序列同形；没有 ROC 不能唯一确定逆变换。"
    },
    "s7-1-3": {
      "concept": "\n      <p><mark>熟记单位脉冲、阶跃、指数序列及其 ROC，作为逆变换和系统分析的基本积木。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：写出 2&lt;sup&gt;k&lt;/sup&gt;ε(k) 与 −2&lt;sup&gt;k&lt;/sup&gt;ε(−k−1) 的 Z 变换及 ROC。</p><p>Z 变换由采样信号的拉普拉斯变换引入，z=e^{sT} 把离散时间序列变成复变量 z 的幂级数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=798\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 13:18，打开 Bilibili 对应讲解\">第 40 集 · 13:18 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>δ(k) ↔ 1，ROC 为整个 z 平面；ε(k) ↔ z/(z−1)，ROC |z|>1。</li><li>a<sup>k</sup>ε(k) ↔ z/(z−a)，ROC |z|>|a|。</li><li>反因果序列的变换形式相似，但 ROC 变为 |z|<|a|。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">阶跃</span>\n      <span class=\"formula\">ε(k) ↔ z/(z−1),&nbsp; |z|>1</span>\n      <span class=\"formula-note\">因果阶跃。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">指数</span>\n      <span class=\"formula\">a<sup>k</sup>ε(k) ↔ z/(z−a),&nbsp; |z|>|a|</span>\n      <span class=\"formula-note\">极点 z=a。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">基本对</span>\n          <span class=\"formula\">a<sup>k</sup>ε(k) ↔ z/(z−a)，|z|>|a|</span>\n          <span class=\"formula-note\">第 40 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>有限长序列也可能与无限序列同形；没有 ROC 不能唯一确定逆变换。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>熟记单位脉冲、阶跃、指数序列及其 ROC，作为逆变换和系统分析的基本积木。</p>\n      <p><mark>自检问题：</mark>写出 2&lt;sup&gt;k&lt;/sup&gt;ε(k) 与 −2&lt;sup&gt;k&lt;/sup&gt;ε(−k−1) 的 Z 变换及 ROC。</p>\n      <p><span class=\"hl-red\">易错点：</span>同一个 z/(z−a) 在 |z|&gt;|a| 与 |z|&lt;|a| 下对应完全不同的时间序列。</p>\n      <p><mark>迁移到题目时：</mark>常用对：δ(k)↔1，ε(k)↔z/(z−1)，a^kε(k)↔z/(z−a)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=40&amp;t=798\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 40 集 · 13:18，打开 Bilibili 对应讲解\">第 40 集 · 13:18 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "常用对：δ(k)↔1，ε(k)↔z/(z−1)，a^kε(k)↔z/(z−a)。"
      ],
      "extraFormulas": [
        {
          "label": "基本对",
          "expr": "a<sup>k</sup>ε(k) ↔ z/(z−a)，|z|>|a|",
          "note": "第 40 集讲解"
        }
      ],
      "finalPitfall": "同一个 z/(z−a) 在 |z|>|a| 与 |z|<|a| 下对应完全不同的时间序列。 有限长序列也可能与无限序列同形；没有 ROC 不能唯一确定逆变换。"
    },
    "s7-2": {
      "concept": "\n      <p><mark>掌握线性、移位、尺度、反转、卷积、累加和 z 域微分性质。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：f(k−2) 的 Z 变换与单边 f(k+2) 的 Z 变换，初始条件项有何不同？</p><p>单边 Z 变换的移位性质包含初始样本项；卷积、累加和 z 域微分性质则是差分方程求解的核心工具。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=116\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 01:56，打开 Bilibili 对应讲解\">第 41 集 · 01:56 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>移位性质带 z<sup>−k₀</sup> 因子，双边变换不涉及初始条件。</li><li>时域乘 a<sup>k</sup> 对应 z 域尺度变换 F(z/a)，ROC 也随之缩放。</li><li>卷积和对应乘法：f(k)*h(k) ↔ F(z)H(z)，ROC 至少为交集。</li><li>累加对应乘 z/(z−1)，z 域微分对应时域乘 k。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">移位</span>\n      <span class=\"formula\">f(k−k₀) ↔ z<sup>−k₀</sup>F(z)</span>\n      <span class=\"formula-note\">双边变换。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">卷积</span>\n      <span class=\"formula\">f(k)*h(k) ↔ F(z)H(z)</span>\n      <span class=\"formula-note\">Z 域乘法。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">累加</span>\n      <span class=\"formula\">Σ<sub>m=−∞</sub><sup>k</sup>f(m) ↔ zF(z)/(z−1)</span>\n      <span class=\"formula-note\">可能增加 z=1 极点。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>线性性质要求两部分 ROC 的公共区域；公共区域可能比单项 ROC 更小。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=116\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 01:56，打开 Bilibili 对应讲解\">第 41 集 · 01:56 ↗</a></li><li>移位性质必须先写清单边还是双边、因果还是非因果；不能无条件套 z^{-m}。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=188\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 03:08，打开 Bilibili 对应讲解\">第 41 集 · 03:08 ↗</a></li><li>累加对应 F(z)/(1−z^{−1})，卷积对应 F(z)H(z)，z 域微分对应时域乘 −k 或 k。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=372\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 06:12，打开 Bilibili 对应讲解\">第 41 集 · 06:12 ↗</a></li><li>单边右移 f(k−m) 不只有 z^{−m}F(z)，还会多出 f(−1)…f(−m) 的初始项；因果序列这些项为零。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=490\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 08:10，打开 Bilibili 对应讲解\">第 41 集 · 08:10 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">卷积</span>\n          <span class=\"formula\">f(k)*h(k) ↔ F(z)H(z)</span>\n          <span class=\"formula-note\">第 41 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>单边移位漏初始项是离散系统题的主要失分点；ROC 取交集后还要检查 z=0 或 ∞。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-00.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 00:00\"\n            aria-label=\"查看第 41 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-00.jpg\" alt=\"第 41 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-01.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 05:00\"\n            aria-label=\"查看第 41 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-01.jpg\" alt=\"第 41 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-02.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 10:00\"\n            aria-label=\"查看第 41 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-02.jpg\" alt=\"第 41 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-03.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 15:00\"\n            aria-label=\"查看第 41 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-03.jpg\" alt=\"第 41 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-04.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 20:00\"\n            aria-label=\"查看第 41 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-04.jpg\" alt=\"第 41 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-05.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 25:00\"\n            aria-label=\"查看第 41 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-05.jpg\" alt=\"第 41 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-06.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 30:00\"\n            aria-label=\"查看第 41 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-06.jpg\" alt=\"第 41 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-07.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 35:00\"\n            aria-label=\"查看第 41 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-07.jpg\" alt=\"第 41 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-08.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 40:00\"\n            aria-label=\"查看第 41 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-08.jpg\" alt=\"第 41 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep41/frame-09.jpg\"\n            data-image-title=\"6.2 z变换的性质\"\n            data-image-label=\"第 41 集 · 45:00\"\n            aria-label=\"查看第 41 集 · 45:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep41/frame-09.jpg\" alt=\"第 41 集 · 45:00课堂板书截图\" loading=\"lazy\">\n            <span>45:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>掌握线性、移位、尺度、反转、卷积、累加和 z 域微分性质。</p>\n      <p><mark>自检问题：</mark>f(k−2) 的 Z 变换与单边 f(k+2) 的 Z 变换，初始条件项有何不同？</p>\n      <p><span class=\"hl-red\">易错点：</span>双边移位不产生初始条件项，单边移位会产生；两者不能混用。</p>\n      <p><mark>迁移到题目时：</mark>左移会把本来在 k≥0 范围外的未来样本带进来，同样需要对单边序列补项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=490\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 08:10，打开 Bilibili 对应讲解\">第 41 集 · 08:10 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "线性性质要求两部分 ROC 的公共区域；公共区域可能比单项 ROC 更小。",
        "移位性质必须先写清单边还是双边、因果还是非因果；不能无条件套 z^{-m}。",
        "累加对应 F(z)/(1−z^{−1})，卷积对应 F(z)H(z)，z 域微分对应时域乘 −k 或 k。",
        "单边右移 f(k−m) 不只有 z^{−m}F(z)，还会多出 f(−1)…f(−m) 的初始项；因果序列这些项为零。",
        "左移会把本来在 k≥0 范围外的未来样本带进来，同样需要对单边序列补项。"
      ],
      "extraFormulas": [
        {
          "label": "卷积",
          "expr": "f(k)*h(k) ↔ F(z)H(z)",
          "note": "第 41 集讲解"
        }
      ],
      "finalPitfall": "双边移位不产生初始条件项，单边移位会产生；两者不能混用。 单边移位漏初始项是离散系统题的主要失分点；ROC 取交集后还要检查 z=0 或 ∞。"
    },
    "s7-3-1": {
      "concept": "\n      <p><mark>逆 Z 变换是复平面上的围线积分，实际计算主要依靠 ROC、部分分式和查表。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：已知 F(z)=1/(z−a)，ROC 为 |z|&gt;|a|，序列是什么？若 ROC 为 |z|&lt;|a| 呢？</p><p>逆 Z 变换要同时读 F(z) 和 ROC；部分分式、幂级数展开和已知性质是三条主路。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=998\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 16:38，打开 Bilibili 对应讲解\">第 42 集 · 16:38 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>f(k)=(1/2πj)∮F(z)z<sup>k−1</sup>dz，围线位于 ROC 内。</li><li>极点位置和 ROC 共同决定序列是左边、右边还是双边。</li><li>逆变换不唯一，除非 ROC 已确定。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">逆变换</span>\n      <span class=\"formula\">f(k)=(1/2πj)∮<sub>C</sub>F(z)z<sup>k−1</sup>dz</span>\n      <span class=\"formula-note\">C 位于 ROC 内并包围原点。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>ROC 在极点外侧且包含 ∞ 通常对应右边序列；在极点内侧则可能对应左边或反因果序列。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=998\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 16:38，打开 Bilibili 对应讲解\">第 42 集 · 16:38 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>ROC 不是装饰项；漏掉它会同时得到错方向、错符号的序列。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>逆 Z 变换是复平面上的围线积分，实际计算主要依靠 ROC、部分分式和查表。</p>\n      <p><mark>自检问题：</mark>已知 F(z)=1/(z−a)，ROC 为 |z|&gt;|a|，序列是什么？若 ROC 为 |z|&lt;|a| 呢？</p>\n      <p><span class=\"hl-red\">易错点：</span>部分分式求出后，若只看表达式不看 ROC，常会把因果项写成反因果项。</p>\n      <p><mark>迁移到题目时：</mark>分母出现 z²−mz+1 时可先判断 m 是否为 2cosθ 的形式，再按余弦/正弦项分解。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=43&amp;t=241\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 43 集 · 04:01，打开 Bilibili 对应讲解\">第 43 集 · 04:01 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "ROC 在极点外侧且包含 ∞ 通常对应右边序列；在极点内侧则可能对应左边或反因果序列。",
        "分母出现 z²−mz+1 时可先判断 m 是否为 2cosθ 的形式，再按余弦/正弦项分解。"
      ],
      "extraFormulas": [],
      "finalPitfall": "部分分式求出后，若只看表达式不看 ROC，常会把因果项写成反因果项。 ROC 不是装饰项；漏掉它会同时得到错方向、错符号的序列。 cos/sin 标准对中的 z 因子不能随意约掉；约分后结果会丢掉 k=0 时刻的项。"
    },
    "s7-3-2": {
      "concept": "\n      <p><mark>用部分分式、幂级数展开或留数法求逆变换，并结合 ROC 选择左右序列。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：F(z)=z/[(z−1)(z−2)]，ROC 为 1&lt;|z|&lt;2，求 f(k)。</p><p>共轭极点和特殊标准对可以把复杂 Z 反变换化成余弦/正弦序列，幂级数和 Z 变换性质则用于非标准题。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=43&amp;t=97\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 43 集 · 01:37，打开 Bilibili 对应讲解\">第 43 集 · 01:37 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>部分分式通常先展开 F(z)/z，再乘回 z，便于使用 z/(z−a) 标准对。</li><li>幂级数法按 z 的负幂展开，系数直接对应序列样本。</li><li>留数法对围线内极点求和，适合有理函数。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">部分分式技巧</span>\n      <span class=\"formula\">F(z)/z=ΣA<sub>i</sub>/(z−p<sub>i</sub>)</span>\n      <span class=\"formula-note\">再乘 z 得到标准项。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>幂级数展开适合有限长或特殊递推序列，可直接读每一项的系数。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=93\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 01:33，打开 Bilibili 对应讲解\">第 42 集 · 01:33 ↗</a></li><li>有理 F(z) 先做多项式除法得到真分式，再按极点展开；极点对应序列的指数/多项式模态。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=229\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 03:49，打开 Bilibili 对应讲解\">第 42 集 · 03:49 ↗</a></li><li>同一 F(z) 的不同 ROC 必须分别求逆，不能只凭展开形式判断序列方向。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=1528\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 25:28，打开 Bilibili 对应讲解\">第 42 集 · 25:28 ↗</a></li><li>部分分式法与幂级数法应交叉验证，尤其要检查 k=0 项和 ROC 决定的边界。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=43&amp;t=0\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 43 集 · 00:00，打开 Bilibili 对应讲解\">第 43 集 · 00:00 ↗</a></li><li>cos(θk)u(k) 与 sin(θk)u(k) 的标准 Z 变换分母为 z²−2z cosθ+1，可用于配凑共轭极点。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=43&amp;t=97\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 43 集 · 01:37，打开 Bilibili 对应讲解\">第 43 集 · 01:37 ↗</a></li><li>缩放性质 z 替换为 z/a 对应时域乘 a^k，常用于处理非单位半径的极点。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=43&amp;t=273\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 43 集 · 04:33，打开 Bilibili 对应讲解\">第 43 集 · 04:33 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单极点</span>\n          <span class=\"formula\">z/(z−a) ↔ a<sup>k</sup>ε(k)，|z|>|a|</span>\n          <span class=\"formula-note\">第 42 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">反因果</span>\n          <span class=\"formula\">z/(z−a) ↔ −a<sup>k</sup>ε(−k−1)，|z|<|a|</span>\n          <span class=\"formula-note\">第 42 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">重极点</span>\n          <span class=\"formula\">z/(z−a)² ↔ k a<sup>k−1</sup>ε(k)</span>\n          <span class=\"formula-note\">第 42 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">余弦</span>\n          <span class=\"formula\">cos(θk)u(k) ↔ z(z−cosθ)/(z²−2z cosθ+1)</span>\n          <span class=\"formula-note\">第 43 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">正弦</span>\n          <span class=\"formula\">sin(θk)u(k) ↔ z sinθ/(z²−2z cosθ+1)</span>\n          <span class=\"formula-note\">第 43 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">缩放</span>\n          <span class=\"formula\">a<sup>k</sup>f(k) ↔ F(z/a)</span>\n          <span class=\"formula-note\">第 43 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>cos/sin 标准对中的 z 因子不能随意约掉；约分后结果会丢掉 k=0 时刻的项。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-00.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 00:00\"\n            aria-label=\"查看第 42 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-00.jpg\" alt=\"第 42 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-01.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 05:00\"\n            aria-label=\"查看第 42 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-01.jpg\" alt=\"第 42 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-02.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 10:00\"\n            aria-label=\"查看第 42 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-02.jpg\" alt=\"第 42 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-03.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 15:00\"\n            aria-label=\"查看第 42 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-03.jpg\" alt=\"第 42 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-04.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 20:00\"\n            aria-label=\"查看第 42 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-04.jpg\" alt=\"第 42 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-05.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 25:00\"\n            aria-label=\"查看第 42 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-05.jpg\" alt=\"第 42 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep42/frame-06.jpg\"\n            data-image-title=\"6.3 逆z变换I\"\n            data-image-label=\"第 42 集 · 30:00\"\n            aria-label=\"查看第 42 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep42/frame-06.jpg\" alt=\"第 42 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button>\n      </div>\n    </div>\n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep43/frame-00.jpg\"\n            data-image-title=\"6.3 逆z变换II\"\n            data-image-label=\"第 43 集 · 00:00\"\n            aria-label=\"查看第 43 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep43/frame-00.jpg\" alt=\"第 43 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep43/frame-01.jpg\"\n            data-image-title=\"6.3 逆z变换II\"\n            data-image-label=\"第 43 集 · 05:00\"\n            aria-label=\"查看第 43 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep43/frame-01.jpg\" alt=\"第 43 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep43/frame-02.jpg\"\n            data-image-title=\"6.3 逆z变换II\"\n            data-image-label=\"第 43 集 · 10:00\"\n            aria-label=\"查看第 43 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep43/frame-02.jpg\" alt=\"第 43 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep43/frame-03.jpg\"\n            data-image-title=\"6.3 逆z变换II\"\n            data-image-label=\"第 43 集 · 15:00\"\n            aria-label=\"查看第 43 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep43/frame-03.jpg\" alt=\"第 43 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep43/frame-04.jpg\"\n            data-image-title=\"6.3 逆z变换II\"\n            data-image-label=\"第 43 集 · 20:00\"\n            aria-label=\"查看第 43 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep43/frame-04.jpg\" alt=\"第 43 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用部分分式、幂级数展开或留数法求逆变换，并结合 ROC 选择左右序列。</p>\n      <p><mark>自检问题：</mark>F(z)=z/[(z−1)(z−2)]，ROC 为 1&lt;|z|&lt;2，求 f(k)。</p>\n      <p><span class=\"hl-red\">易错点：</span>直接对 F(z) 展开容易把 z 因子漏掉；先处理 F(z)/z 更稳妥。</p>\n      <p><mark>迁移到题目时：</mark>复杂 F(z) 先提出 z 或 z^{-1} 因子，使分母与标准 cos/sin 对完全匹配。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=43&amp;t=609\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 43 集 · 10:09，打开 Bilibili 对应讲解\">第 43 集 · 10:09 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "幂级数展开适合有限长或特殊递推序列，可直接读每一项的系数。",
        "有理 F(z) 先做多项式除法得到真分式，再按极点展开；极点对应序列的指数/多项式模态。",
        "同一 F(z) 的不同 ROC 必须分别求逆，不能只凭展开形式判断序列方向。",
        "部分分式法与幂级数法应交叉验证，尤其要检查 k=0 项和 ROC 决定的边界。",
        "cos(θk)u(k) 与 sin(θk)u(k) 的标准 Z 变换分母为 z²−2z cosθ+1，可用于配凑共轭极点。",
        "缩放性质 z 替换为 z/a 对应时域乘 a^k，常用于处理非单位半径的极点。",
        "复杂 F(z) 先提出 z 或 z^{-1} 因子，使分母与标准 cos/sin 对完全匹配。"
      ],
      "extraFormulas": [
        {
          "label": "单极点",
          "expr": "z/(z−a) ↔ a<sup>k</sup>ε(k)，|z|>|a|",
          "note": "第 42 集讲解"
        },
        {
          "label": "反因果",
          "expr": "z/(z−a) ↔ −a<sup>k</sup>ε(−k−1)，|z|<|a|",
          "note": "第 42 集讲解"
        },
        {
          "label": "重极点",
          "expr": "z/(z−a)² ↔ k a<sup>k−1</sup>ε(k)",
          "note": "第 42 集讲解"
        },
        {
          "label": "余弦",
          "expr": "cos(θk)u(k) ↔ z(z−cosθ)/(z²−2z cosθ+1)",
          "note": "第 43 集讲解"
        },
        {
          "label": "正弦",
          "expr": "sin(θk)u(k) ↔ z sinθ/(z²−2z cosθ+1)",
          "note": "第 43 集讲解"
        },
        {
          "label": "缩放",
          "expr": "a<sup>k</sup>f(k) ↔ F(z/a)",
          "note": "第 43 集讲解"
        }
      ],
      "finalPitfall": "直接对 F(z) 展开容易把 z 因子漏掉；先处理 F(z)/z 更稳妥。 ROC 不是装饰项；漏掉它会同时得到错方向、错符号的序列。 cos/sin 标准对中的 z 因子不能随意约掉；约分后结果会丢掉 k=0 时刻的项。"
    },
    "s7-4-1": {
      "concept": "\n      <p><mark>单边 Z 变换从 k=0 开始，适合因果序列和差分方程初值问题。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：为什么单边 Z 变换适合处理因果系统的初始条件？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>F(z)=Σ<sub>k=0</sub><sup>∞</sup>f(k)z<sup>−k</sup>，只关心 k≥0。</li><li>对因果序列，单边与双边变换可能相同；ROC 通常为某圆外区域。</li><li>单边变换的移位性质会显式包含初始值，是解差分方程的關鍵。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单边 Z 变换</span>\n      <span class=\"formula\">F(z)=Σ<sub>k=0</sub><sup>∞</sup>f(k)z<sup>−k</sup></span>\n      <span class=\"formula-note\">从 k=0 起。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>单边 Z 变换从 k=0 开始，适合因果序列和差分方程初值问题。</p>\n      <p><mark>自检问题：</mark>为什么单边 Z 变换适合处理因果系统的初始条件？</p>\n      <p><span class=\"hl-red\">易错点：</span>单边变换忽略 k&lt;0 的信息，因此不能用于恢复完整的双边序列。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "单边变换忽略 k<0 的信息，因此不能用于恢复完整的双边序列。"
    },
    "s7-4-2": {
      "concept": "\n      <p><mark>熟记 δ(k)、ε(k)、a&lt;sup&gt;k&lt;/sup&gt;、k a&lt;sup&gt;k&lt;/sup&gt; 等单边变换对。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：写出 kε(k) 与 2&lt;sup&gt;k&lt;/sup&gt;cos(πk/3)ε(k) 的 Z 变换。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>δ(k) ↔ 1；ε(k) ↔ z/(z−1)；a<sup>k</sup>ε(k) ↔ z/(z−a)。</li><li>k a<sup>k</sup>ε(k) ↔ az/(z−a)²，重极点对应 k 因子。</li><li>余弦、正弦序列可用欧拉公式从指数变换对推出。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">重极点对</span>\n      <span class=\"formula\">k a<sup>k</sup>ε(k) ↔ az/(z−a)²</span>\n      <span class=\"formula-note\">|z|&gt;|a|。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">余弦</span>\n      <span class=\"formula\">cos(Ω₀k)ε(k) ↔ z(z−cosΩ₀)/(z²−2z cosΩ₀+1)</span>\n      <span class=\"formula-note\">|z|&gt;1。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>熟记 δ(k)、ε(k)、a&lt;sup&gt;k&lt;/sup&gt;、k a&lt;sup&gt;k&lt;/sup&gt; 等单边变换对。</p>\n      <p><mark>自检问题：</mark>写出 kε(k) 与 2&lt;sup&gt;k&lt;/sup&gt;cos(πk/3)ε(k) 的 Z 变换。</p>\n      <p><span class=\"hl-red\">易错点：</span>重极点项的 z 因子位置容易写错，建议用 F(z)/z 展开核对。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "重极点项的 z 因子位置容易写错，建议用 F(z)/z 展开核对。"
    },
    "s7-4-3": {
      "concept": "\n      <p><mark>重点掌握单边移位性质，它把初始条件带入代数方程。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：用单边 Z 变换把 y(k)−0.5y(k−1)=f(k)、y(−1)=2 转成代数方程。</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=41&amp;t=593\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 41 集 · 09:53，打开 Bilibili 对应讲解\">第 41 集 · 09:53 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>延迟：ℒ{f(k−1)}=z<sup>−1</sup>F(z)+f(−1)。</li><li>超前：ℒ{f(k+1)}=zF(z)−zf(0)。</li><li>线性、卷积、累加和 z 域微分性质与双边情形形式相近，但移位项含初值。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">延迟</span>\n      <span class=\"formula\">f(k−1) ↔ z<sup>−1</sup>F(z)+f(−1)</span>\n      <span class=\"formula-note\">单边变换。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">超前</span>\n      <span class=\"formula\">f(k+1) ↔ zF(z)−zf(0)</span>\n      <span class=\"formula-note\">高阶需继续扣除初值。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点掌握单边移位性质，它把初始条件带入代数方程。</p>\n      <p><mark>自检问题：</mark>用单边 Z 变换把 y(k)−0.5y(k−1)=f(k)、y(−1)=2 转成代数方程。</p>\n      <p><span class=\"hl-red\">易错点：</span>延迟性质的初始项是 f(−1) 而不是 f(0)；超前性质则扣 f(0)。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "延迟性质的初始项是 f(−1) 而不是 f(0)；超前性质则扣 f(0)。"
    },
    "s7-4-4": {
      "concept": "\n      <p><mark>对单边有理函数做部分分式展开，结果默认乘以 ε(k)。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：F(z)=z/(z−0.5)，求单边逆变换并写出前三个样本。</p><p>逆 Z 变换要同时读 F(z) 和 ROC；部分分式、幂级数展开和已知性质是三条主路。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=1769\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 29:29，打开 Bilibili 对应讲解\">第 42 集 · 29:29 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>单边逆变换通常只求 k≥0 的序列，因此结果乘 ε(k)。</li><li>仍建议先展开 F(z)/z，再利用 z/(z−a) 和 az/(z−a)² 标准对。</li><li>若 F(z) 有常数项或多项式项，直接对应 δ(k) 及其移位。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">常用逆变换</span>\n      <span class=\"formula\">z/(z−a) ↔ a<sup>k</sup>ε(k)</span>\n      <span class=\"formula-note\">|z|&gt;|a|。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>ROC 不是装饰项；漏掉它会同时得到错方向、错符号的序列。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>对单边有理函数做部分分式展开，结果默认乘以 ε(k)。</p>\n      <p><mark>自检问题：</mark>F(z)=z/(z−0.5)，求单边逆变换并写出前三个样本。</p>\n      <p><span class=\"hl-red\">易错点：</span>单边逆变换不需要考虑 ROC 的左半部分，但仍要检查是否隐含因果假设。</p>\n      <p><mark>迁移到题目时：</mark>共振/重极点会引入 k 的多项式因子；共轭极点会产生衰减或增长的振荡。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=42&amp;t=1769\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 42 集 · 29:29，打开 Bilibili 对应讲解\">第 42 集 · 29:29 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "共振/重极点会引入 k 的多项式因子；共轭极点会产生衰减或增长的振荡。"
      ],
      "extraFormulas": [],
      "finalPitfall": "单边逆变换不需要考虑 ROC 的左半部分，但仍要检查是否隐含因果假设。 ROC 不是装饰项；漏掉它会同时得到错方向、错符号的序列。"
    },
    "s7-5-1": {
      "concept": "\n      <p><mark>把响应分成零输入与零状态两部分，在 Z 域分别对应初始条件项与 H(z)F(z)。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：若 y(−1)=1，Y(z) 中哪部分来自初始状态？哪部分来自输入？</p><p>Z 域解差分方程时，移位性质把初值和输入一起转成代数项；零状态系统函数 H(z) 只保留输入项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=225\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:45，打开 Bilibili 对应讲解\">第 44 集 · 03:45 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>完全响应 Y(z)=Y<sub>zi</sub>(z)+Y<sub>zs</sub>(z)。</li><li>零状态部分等于 H(z)F(z)；零输入部分由初始状态和系统极点决定。</li><li>这种分解让“系统固有模态”和“输入强迫模态”清晰分离。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">Z 域分解</span>\n      <span class=\"formula\">Y(z)=Y<sub>zi</sub>(z)+H(z)F(z)</span>\n      <span class=\"formula-note\">线性离散系统。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>把响应分成零输入与零状态两部分，在 Z 域分别对应初始条件项与 H(z)F(z)。</p>\n      <p><mark>自检问题：</mark>若 y(−1)=1，Y(z) 中哪部分来自初始状态？哪部分来自输入？</p>\n      <p><span class=\"hl-red\">易错点：</span>Y(z)/F(z) 只有在零输入部分为零时才等于 H(z)。</p>\n      <p><mark>迁移到题目时：</mark>解出 Y(z) 后拆成零输入部分和零状态部分，零状态部分可写成 H(z)E(z)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=225\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:45，打开 Bilibili 对应讲解\">第 44 集 · 03:45 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "解出 Y(z) 后拆成零输入部分和零状态部分，零状态部分可写成 H(z)E(z)。"
      ],
      "extraFormulas": [],
      "finalPitfall": "Y(z)/F(z) 只有在零输入部分为零时才等于 H(z)。 差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。"
    },
    "s7-5-2": {
      "concept": "\n      <p><mark>z&lt;sup&gt;k&lt;/sup&gt; 是离散 LTI 系统的本征序列，输出为 H(z)z&lt;sup&gt;k&lt;/sup&gt;。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：为什么 H(e&lt;sup&gt;jΩ&lt;/sup&gt;) 是 H(z) 在单位圆上的取值？</p><p>Z 域解差分方程时，移位性质把初值和输入一起转成代数项；零状态系统函数 H(z) 只保留输入项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=225\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:45，打开 Bilibili 对应讲解\">第 44 集 · 03:45 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>H(z) 是 h(k) 的 Z 变换，称为系统函数。</li><li>对固定 z，系统只改变复幅度，不改变指数序列形式。</li><li>当 z 位于单位圆上，z=e<sup>jΩ</sup> 即得到频率响应。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">本征响应</span>\n      <span class=\"formula\">z<sup>k</sup> → H(z)z<sup>k</sup></span>\n      <span class=\"formula-note\">零状态、LTI。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">系统函数</span>\n          <span class=\"formula\">H(z)=Y<sub>zs</sub>(z)/E(z)</span>\n          <span class=\"formula-note\">第 44 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">冲激对</span>\n          <span class=\"formula\">h(k) ↔ H(z)</span>\n          <span class=\"formula-note\">第 44 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>z&lt;sup&gt;k&lt;/sup&gt; 是离散 LTI 系统的本征序列，输出为 H(z)z&lt;sup&gt;k&lt;/sup&gt;。</p>\n      <p><mark>自检问题：</mark>为什么 H(e&lt;sup&gt;jΩ&lt;/sup&gt;) 是 H(z) 在单位圆上的取值？</p>\n      <p><span class=\"hl-red\">易错点：</span>z&lt;sup&gt;k&lt;/sup&gt; 是复指数序列，不是普通实指数；z 可以为复数。</p>\n      <p><mark>迁移到题目时：</mark>系统函数 H(z) 是零状态输出与输入的 Z 变换比，冲激响应 h(k) 是 H(z) 的逆变换。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=225\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:45，打开 Bilibili 对应讲解\">第 44 集 · 03:45 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "系统函数 H(z) 是零状态输出与输入的 Z 变换比，冲激响应 h(k) 是 H(z) 的逆变换。"
      ],
      "extraFormulas": [
        {
          "label": "系统函数",
          "expr": "H(z)=Y<sub>zs</sub>(z)/E(z)",
          "note": "第 44 集讲解"
        },
        {
          "label": "冲激对",
          "expr": "h(k) ↔ H(z)",
          "note": "第 44 集讲解"
        }
      ],
      "finalPitfall": "z<sup>k</sup> 是复指数序列，不是普通实指数；z 可以为复数。 差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。"
    },
    "s7-5-3": {
      "concept": "\n      <p><mark>通过 Y(z)=H(z)F(z) 求零状态响应，再逆变换回时域。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：H(z)=1/(1−0.5z&lt;sup&gt;−1&lt;/sup&gt;)，F(z)=1/(1−z&lt;sup&gt;−1&lt;/sup&gt;)，求单位阶跃响应。</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=214\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:34，打开 Bilibili 对应讲解\">第 44 集 · 03:34 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>Z 域把卷积和转为乘法，是离散系统分析最常用的路径。</li><li>求出 Y(z) 后结合 ROC 做逆变换，得到因果或双边响应。</li><li>因果系统的零状态响应在输入接入前为零。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">零状态响应</span>\n      <span class=\"formula\">Y(z)=H(z)F(z)</span>\n      <span class=\"formula-note\">Z 域乘法。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>通过 Y(z)=H(z)F(z) 求零状态响应，再逆变换回时域。</p>\n      <p><mark>自检问题：</mark>H(z)=1/(1−0.5z&lt;sup&gt;−1&lt;/sup&gt;)，F(z)=1/(1−z&lt;sup&gt;−1&lt;/sup&gt;)，求单位阶跃响应。</p>\n      <p><span class=\"hl-red\">易错点：</span>若 H(z)F(z) 的部分分式含重极点，逆变换会出现 k 因子，不能只写指数项。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "若 H(z)F(z) 的部分分式含重极点，逆变换会出现 k 因子，不能只写指数项。"
    },
    "s7-6-1": {
      "concept": "\n      <p><mark>对差分方程两边取单边 Z 变换，利用移位性质带入初始条件，解出 Y(z)。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：y(k)−y(k−1)=f(k)，y(−1)=1，写出 Y(z) 的完整表达式。</p><p>Z 域解差分方程时，移位性质把初值和输入一起转成代数项；零状态系统函数 H(z) 只保留输入项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=362\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 06:02，打开 Bilibili 对应讲解\">第 44 集 · 06:02 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>把 y(k−i)、f(k−j) 的变换写成 z 的多项式，初始条件项单独归并。</li><li>解出 Y(z) 后部分分式逆变换，得到完全响应。</li><li>系统特征多项式对应 H(z) 的分母，极点决定固有模态。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">一般形式</span>\n      <span class=\"formula\">A(z)Y(z)=B(z)F(z)+C(z)</span>\n      <span class=\"formula-note\">C(z) 汇总初始条件。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>差分方程两边做单边 Z 变换，k&lt;0 的初始项会被移位性质带入 Y(z)。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=362\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 06:02，打开 Bilibili 对应讲解\">第 44 集 · 06:02 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">完全响应</span>\n          <span class=\"formula\">Y(z)=Y<sub>zi</sub>(z)+H(z)E(z)</span>\n          <span class=\"formula-note\">第 44 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-00.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 00:00\"\n            aria-label=\"查看第 44 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-00.jpg\" alt=\"第 44 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-01.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 05:00\"\n            aria-label=\"查看第 44 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-01.jpg\" alt=\"第 44 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-02.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 10:00\"\n            aria-label=\"查看第 44 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-02.jpg\" alt=\"第 44 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-03.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 15:00\"\n            aria-label=\"查看第 44 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-03.jpg\" alt=\"第 44 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-04.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 20:00\"\n            aria-label=\"查看第 44 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-04.jpg\" alt=\"第 44 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-05.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 25:00\"\n            aria-label=\"查看第 44 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-05.jpg\" alt=\"第 44 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-06.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 30:00\"\n            aria-label=\"查看第 44 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-06.jpg\" alt=\"第 44 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep44/frame-07.jpg\"\n            data-image-title=\"6.4 离散时间系统的z域分析\"\n            data-image-label=\"第 44 集 · 35:00\"\n            aria-label=\"查看第 44 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep44/frame-07.jpg\" alt=\"第 44 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>对差分方程两边取单边 Z 变换，利用移位性质带入初始条件，解出 Y(z)。</p>\n      <p><mark>自检问题：</mark>y(k)−y(k−1)=f(k)，y(−1)=1，写出 Y(z) 的完整表达式。</p>\n      <p><span class=\"hl-red\">易错点：</span>初始条件项可能含 z 的幂，不能当作常数直接移到右边。</p>\n      <p><mark>迁移到题目时：</mark>求响应前先统一初始条件约定；有初值时不能直接把 H(z) 乘 E(z) 就结束。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=1822\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 30:22，打开 Bilibili 对应讲解\">第 44 集 · 30:22 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "差分方程两边做单边 Z 变换，k<0 的初始项会被移位性质带入 Y(z)。",
        "求响应前先统一初始条件约定；有初值时不能直接把 H(z) 乘 E(z) 就结束。"
      ],
      "extraFormulas": [
        {
          "label": "完全响应",
          "expr": "Y(z)=Y<sub>zi</sub>(z)+H(z)E(z)",
          "note": "第 44 集讲解"
        }
      ],
      "finalPitfall": "初始条件项可能含 z 的幂，不能当作常数直接移到右边。 差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。"
    },
    "s7-6-2": {
      "concept": "\n      <p><mark>稳定离散系统的频率响应由 H(z) 在单位圆上取值得到，描述正弦序列的稳态响应。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：H(z)=1/(1−0.9z&lt;sup&gt;−1&lt;/sup&gt;)，在 Ω=0 处的增益是多少？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=830\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 13:50，打开 Bilibili 对应讲解\">第 44 集 · 13:50 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>H(e<sup>jΩ</sup>)=H(z)|<sub>z=e<sup>jΩ</sup></sub>，要求单位圆在 ROC 内。</li><li>幅频响应以 2π 为周期；只需观察 [−π,π] 主值区间。</li><li>极点靠近单位圆会产生谐振峰，零点靠近单位圆会产生陷波。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">离散频率响应</span>\n      <span class=\"formula\">H(e<sup>jΩ</sup>)=H(z)|<sub>z=e<sup>jΩ</sup></sub></span>\n      <span class=\"formula-note\">稳定系统、单位圆在 ROC 内。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>稳定离散系统的频率响应由 H(z) 在单位圆上取值得到，描述正弦序列的稳态响应。</p>\n      <p><mark>自检问题：</mark>H(z)=1/(1−0.9z&lt;sup&gt;−1&lt;/sup&gt;)，在 Ω=0 处的增益是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>单位圆上的极点会使频率响应发散，不能直接解释为稳定稳态响应。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "单位圆上的极点会使频率响应发散，不能直接解释为稳定稳态响应。"
    },
    "s7-7-1": {
      "concept": "\n      <p><mark>用延迟器、乘法器和加法器实现差分方程，延迟器对应 z&lt;sup&gt;−1&lt;/sup&gt;。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：如何用一个延迟器和两个加法器实现 y(k)=f(k)+0.5y(k−1)？</p><p>Z 域解差分方程时，移位性质把初值和输入一起转成代数项；零状态系统函数 H(z) 只保留输入项。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=196\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:16，打开 Bilibili 对应讲解\">第 44 集 · 03:16 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>延迟器是离散系统的基本记忆元件，传输函数为 z<sup>−1</sup>。</li><li>直接型、级联型、并联型对应不同的差分方程实现结构。</li><li>方框图可逐级化简求系统函数，也可由 H(z) 反向搭建。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">延迟器</span>\n      <span class=\"formula\">Y(z)=z<sup>−1</sup>F(z)</span>\n      <span class=\"formula-note\">输出比输入延迟一个样本。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          \n          <p><span class=\"hl-red\">注意：</span>差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用延迟器、乘法器和加法器实现差分方程，延迟器对应 z&lt;sup&gt;−1&lt;/sup&gt;。</p>\n      <p><mark>自检问题：</mark>如何用一个延迟器和两个加法器实现 y(k)=f(k)+0.5y(k−1)？</p>\n      <p><span class=\"hl-red\">易错点：</span>z&lt;sup&gt;−1&lt;/sup&gt; 是延迟，不是 z 的倒数频率；不要把 z 域符号与频率变量混淆。</p>\n      <p><mark>迁移到题目时：</mark>方框图中的延时器 z^{-1} 对应状态记忆，直接型、级联型、并联型实现对应不同 H(z) 分解。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=44&amp;t=196\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 44 集 · 03:16，打开 Bilibili 对应讲解\">第 44 集 · 03:16 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "方框图中的延时器 z^{-1} 对应状态记忆，直接型、级联型、并联型实现对应不同 H(z) 分解。"
      ],
      "extraFormulas": [],
      "finalPitfall": "z<sup>−1</sup> 是延迟，不是 z 的倒数频率；不要把 z 域符号与频率变量混淆。 差分方程的移位初始项与普通乘 z^{-1} 不同；初态非零时不能直接使用零状态 H(z)E(z)。"
    },
    "s7-7-2": {
      "concept": "\n      <p><mark>用信号流图和梅森公式求离散系统函数，方法与连续系统一致。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：单反馈环路的离散系统，H(z) 的分母如何由环路增益写出？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=90\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 01:30，打开 Bilibili 对应讲解\">第 49 集 · 01:30 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>节点表示信号，支路表示增益或延迟；环路对应反馈。</li><li>梅森公式 H=ΣP<sub>k</sub>Δ<sub>k</sub>/Δ 同样适用于离散系统。</li><li>反馈系统的极点由分母 1−环路增益决定。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">梅森公式</span>\n      <span class=\"formula\">H(z)=ΣP<sub>k</sub>Δ<sub>k</sub>/Δ</span>\n      <span class=\"formula-note\">图增益与 z 有关。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用信号流图和梅森公式求离散系统函数，方法与连续系统一致。</p>\n      <p><mark>自检问题：</mark>单反馈环路的离散系统，H(z) 的分母如何由环路增益写出？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散流图中的延迟支路增益是 z&lt;sup&gt;−1&lt;/sup&gt;，不要写成 s&lt;sup&gt;−1&lt;/sup&gt;。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散流图中的延迟支路增益是 z<sup>−1</sup>，不要写成 s<sup>−1</sup>。"
    },
    "s7-7-3": {
      "concept": "\n      <p><mark>用延迟器、乘法器和加法器实现离散系统，比较直接型、级联型和并联型。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：为什么高阶 IIR 滤波器常拆成多个二阶节，而不是直接型？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=49&amp;t=328\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 49 集 · 05:28，打开 Bilibili 对应讲解\">第 49 集 · 05:28 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>直接型系数直接对应差分方程；高阶时对系数误差敏感。</li><li>级联型分解为零极点节，便于调零极点与稳定性。</li><li>并联型按部分分式分解，适合并行处理和模块化实现。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">实现关系</span>\n      <span class=\"formula\">H(z)=∏H<sub>i</sub>(z)=ΣH<sub>j</sub>(z)</span>\n      <span class=\"formula-note\">级联与并联。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用延迟器、乘法器和加法器实现离散系统，比较直接型、级联型和并联型。</p>\n      <p><mark>自检问题：</mark>为什么高阶 IIR 滤波器常拆成多个二阶节，而不是直接型？</p>\n      <p><span class=\"hl-red\">易错点：</span>有限字长实现时，不同结构的量化噪声和溢出特性差异很大；理论等价不等于工程等价。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "有限字长实现时，不同结构的量化噪声和溢出特性差异很大；理论等价不等于工程等价。"
    },
    "s7-8-1": {
      "concept": "\n      <p><mark>将 H(z) 因式分解，零点与极点决定系统响应的形态和频率特性。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：H(z)=z/(z−0.5)，零点、极点和 ROC 分别是什么？</p><p>离散系统函数 H(z) 的零点和极点决定时域模态与频响；单位圆上的几何位置尤其重要。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=45&amp;t=782\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 45 集 · 13:02，打开 Bilibili 对应讲解\">第 45 集 · 13:02 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>H(z)=K∏(z−z<sub>i</sub>)/∏(z−p<sub>j</sub>)，零点使 H(z)=0，极点使 H(z)→∞。</li><li>极点半径决定衰减速度，极点角度决定振荡频率。</li><li>零极点图配合单位圆可快速判断幅频峰谷。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">零极点形式</span>\n      <span class=\"formula\">H(z)=K∏(z−z<sub>i</sub>)/∏(z−p<sub>j</sub>)</span>\n      <span class=\"formula-note\">K 为增益。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>H(z) 的零极点图可与因果性、稳定性、幅频响应和系统模拟联系起来。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=45&amp;t=18\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 45 集 · 00:18，打开 Bilibili 对应讲解\">第 45 集 · 00:18 ↗</a></li><li>零点的重数和极点重数都会改变频率响应的峰谷形状与过渡速度。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=45&amp;t=22\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 45 集 · 00:22，打开 Bilibili 对应讲解\">第 45 集 · 00:22 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">零极点形式</span>\n          <span class=\"formula\">H(z)=G∏(z−z<sub>i</sub>)/∏(z−p<sub>i</sub>)</span>\n          <span class=\"formula-note\">第 45 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">单位圆极点</span>\n          <span class=\"formula\">p=re<sup>jθ</sup> ⇒ r<sup>k</sup> 型包络</span>\n          <span class=\"formula-note\">第 45 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">频率响应</span>\n          <span class=\"formula\">H(e<sup>jΩ</sup>)=H(z)|<sub>z=e<sup>jΩ</sup></sub></span>\n          <span class=\"formula-note\">第 45 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>离散稳定性看单位圆，不是看右半平面；连续和离散的稳定判据不能互相替代。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep45/frame-00.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性I\"\n            data-image-label=\"第 45 集 · 00:00\"\n            aria-label=\"查看第 45 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep45/frame-00.jpg\" alt=\"第 45 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep45/frame-01.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性I\"\n            data-image-label=\"第 45 集 · 05:00\"\n            aria-label=\"查看第 45 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep45/frame-01.jpg\" alt=\"第 45 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep45/frame-02.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性I\"\n            data-image-label=\"第 45 集 · 10:00\"\n            aria-label=\"查看第 45 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep45/frame-02.jpg\" alt=\"第 45 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>将 H(z) 因式分解，零点与极点决定系统响应的形态和频率特性。</p>\n      <p><mark>自检问题：</mark>H(z)=z/(z−0.5)，零点、极点和 ROC 分别是什么？</p>\n      <p><span class=\"hl-red\">易错点：</span>z=0 和 z=∞ 也可能贡献零极点，因式分解时不要只看有限位置的根。</p>\n      <p><mark>迁移到题目时：</mark>零点使某个频率或某个输入模态无法通过；极点决定指数包络和振荡。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=45&amp;t=782\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 45 集 · 13:02，打开 Bilibili 对应讲解\">第 45 集 · 13:02 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "H(z) 的零极点图可与因果性、稳定性、幅频响应和系统模拟联系起来。",
        "零点的重数和极点重数都会改变频率响应的峰谷形状与过渡速度。",
        "零点使某个频率或某个输入模态无法通过；极点决定指数包络和振荡。"
      ],
      "extraFormulas": [
        {
          "label": "零极点形式",
          "expr": "H(z)=G∏(z−z<sub>i</sub>)/∏(z−p<sub>i</sub>)",
          "note": "第 45 集讲解"
        },
        {
          "label": "单位圆极点",
          "expr": "p=re<sup>jθ</sup> ⇒ r<sup>k</sup> 型包络",
          "note": "第 45 集讲解"
        },
        {
          "label": "频率响应",
          "expr": "H(e<sup>jΩ</sup>)=H(z)|<sub>z=e<sup>jΩ</sup></sub>",
          "note": "第 45 集讲解"
        }
      ],
      "finalPitfall": "z=0 和 z=∞ 也可能贡献零极点，因式分解时不要只看有限位置的根。 离散稳定性看单位圆，不是看右半平面；连续和离散的稳定判据不能互相替代。"
    },
    "s7-8-2": {
      "concept": "\n      <p><mark>极点半径控制衰减/增长，角度控制振荡；零点影响各模态权重。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：极点在 0.8e&lt;sup&gt;±jπ/4&lt;/sup&gt;，响应的衰减速度和每样本相移是多少？</p><p>H(e^{jΩ}) 是离散系统对数字正弦的稳态响应；它在单位圆上取值，并天然以 2π 为周期。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=496\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 08:16，打开 Bilibili 对应讲解\">第 47 集 · 08:16 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>|p|<1 对应衰减，|p|>1 对应增长，|p|=1 对应等幅/临界。</li><li>共轭极点 p=re<sup>±jθ</sup> 对应 r<sup>k</sup>cos(θk+φ)。</li><li>零点可改变某些频率的幅度，甚至抵消极点模态。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">共轭极点响应</span>\n      <span class=\"formula\">r<sup>k</sup>cos(θk+φ)</span>\n      <span class=\"formula-note\">r&lt;1 衰减，r=1 等幅。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>由图形反求 H(z) 时要补充增益常数，并用一个已知时域值或频域边界条件确定。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=45&amp;t=52\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 45 集 · 00:52，打开 Bilibili 对应讲解\">第 45 集 · 00:52 ↗</a></li><li>实正弦输入输出幅度乘 |H(e^{jΩ})|，初相加 ∠H(e^{jΩ})。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=496\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 08:16，打开 Bilibili 对应讲解\">第 47 集 · 08:16 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>数字角频率 Ω 与连续角频率不同；不能把 Ω 和 ωT 混用，离散频响也不是任意频率都可物理独立。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>极点半径控制衰减/增长，角度控制振荡；零点影响各模态权重。</p>\n      <p><mark>自检问题：</mark>极点在 0.8e&lt;sup&gt;±jπ/4&lt;/sup&gt;，响应的衰减速度和每样本相移是多少？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散极点角度 θ 对应的振荡频率是 θ（rad/sample），不是 θ/T 之外的另一个量。</p>\n      <p><mark>迁移到题目时：</mark>抽样的周期谱是数字频率频谱周期性的根源，Ω 与连续频率 Ωc 的关系受采样率影响。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=653\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 10:53，打开 Bilibili 对应讲解\">第 47 集 · 10:53 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "由图形反求 H(z) 时要补充增益常数，并用一个已知时域值或频域边界条件确定。",
        "实正弦输入输出幅度乘 |H(e^{jΩ})|，初相加 ∠H(e^{jΩ})。",
        "抽样的周期谱是数字频率频谱周期性的根源，Ω 与连续频率 Ωc 的关系受采样率影响。"
      ],
      "extraFormulas": [],
      "finalPitfall": "离散极点角度 θ 对应的振荡频率是 θ（rad/sample），不是 θ/T 之外的另一个量。 离散稳定性看单位圆，不是看右半平面；连续和离散的稳定判据不能互相替代。 数字角频率 Ω 与连续角频率不同；不能把 Ω 和 ωT 混用，离散频响也不是任意频率都可物理独立。"
    },
    "s7-8-3": {
      "concept": "\n      <p><mark>沿单位圆观察 H(z) 的模和相位，得到离散系统的幅频与相频响应。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：零点在 z=1 时，系统对 Ω=0（直流）有什么作用？</p><p>H(e^{jΩ}) 是离散系统对数字正弦的稳态响应；它在单位圆上取值，并天然以 2π 为周期。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=9\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 00:09，打开 Bilibili 对应讲解\">第 47 集 · 00:09 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>频率响应 H(e<sup>jΩ</sup>) 是 H(z) 在单位圆上的取值。</li><li>极点靠近单位圆某角度会产生谐振峰；零点靠近单位圆会产生陷波。</li><li>幅频响应以 2π 为周期，主值区间通常取 [−π,π]。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">单位圆取样</span>\n      <span class=\"formula\">z=e<sup>jΩ</sup>,&nbsp; Ω∈[−π,π]</span>\n      <span class=\"formula-note\">一个主值区间。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>输入 e^{jΩk} 输出 H(e^{jΩ})e^{jΩk}；离散 LTI 系统同样不改变数字频率。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=9\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 00:09，打开 Bilibili 对应讲解\">第 47 集 · 00:09 ↗</a></li><li>极点靠近单位圆对应峰值；零点靠近单位圆对应谷值。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=1774\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 29:34，打开 Bilibili 对应讲解\">第 47 集 · 29:34 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">本征响应</span>\n          <span class=\"formula\">e<sup>jΩk</sup> → H(e<sup>jΩ</sup>)e<sup>jΩk</sup></span>\n          <span class=\"formula-note\">第 47 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">正弦响应</span>\n          <span class=\"formula\">A cos(Ωk+φ) → A|H(e<sup>jΩ</sup>)|cos[Ωk+φ+∠H(e<sup>jΩ</sup>)]</span>\n          <span class=\"formula-note\">第 47 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">周期</span>\n          <span class=\"formula\">H(e<sup>j(Ω+2π)</sup>)=H(e<sup>jΩ</sup>)</span>\n          <span class=\"formula-note\">第 47 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>数字角频率 Ω 与连续角频率不同；不能把 Ω 和 ωT 混用，离散频响也不是任意频率都可物理独立。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-00.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 00:00\"\n            aria-label=\"查看第 47 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-00.jpg\" alt=\"第 47 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-01.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 05:00\"\n            aria-label=\"查看第 47 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-01.jpg\" alt=\"第 47 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-02.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 10:00\"\n            aria-label=\"查看第 47 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-02.jpg\" alt=\"第 47 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-03.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 15:00\"\n            aria-label=\"查看第 47 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-03.jpg\" alt=\"第 47 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-04.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 20:00\"\n            aria-label=\"查看第 47 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-04.jpg\" alt=\"第 47 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-05.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 25:00\"\n            aria-label=\"查看第 47 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-05.jpg\" alt=\"第 47 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-06.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 30:00\"\n            aria-label=\"查看第 47 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-06.jpg\" alt=\"第 47 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-07.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 35:00\"\n            aria-label=\"查看第 47 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-07.jpg\" alt=\"第 47 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep47/frame-08.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性III\"\n            data-image-label=\"第 47 集 · 40:00\"\n            aria-label=\"查看第 47 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep47/frame-08.jpg\" alt=\"第 47 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>沿单位圆观察 H(z) 的模和相位，得到离散系统的幅频与相频响应。</p>\n      <p><mark>自检问题：</mark>零点在 z=1 时，系统对 Ω=0（直流）有什么作用？</p>\n      <p><span class=\"hl-red\">易错点：</span>极点越靠近单位圆，峰值越尖锐但系统越接近不稳定，瞬态衰减越慢。</p>\n      <p><mark>迁移到题目时：</mark>H(e^{jΩ}) 随 Ω 每 2π 重复，因此只需画一个周期，常见区间 [−π,π]。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=47&amp;t=2027\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 47 集 · 33:47，打开 Bilibili 对应讲解\">第 47 集 · 33:47 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "输入 e^{jΩk} 输出 H(e^{jΩ})e^{jΩk}；离散 LTI 系统同样不改变数字频率。",
        "极点靠近单位圆对应峰值；零点靠近单位圆对应谷值。",
        "H(e^{jΩ}) 随 Ω 每 2π 重复，因此只需画一个周期，常见区间 [−π,π]。"
      ],
      "extraFormulas": [
        {
          "label": "本征响应",
          "expr": "e<sup>jΩk</sup> → H(e<sup>jΩ</sup>)e<sup>jΩk</sup>",
          "note": "第 47 集讲解"
        },
        {
          "label": "正弦响应",
          "expr": "A cos(Ωk+φ) → A|H(e<sup>jΩ</sup>)|cos[Ωk+φ+∠H(e<sup>jΩ</sup>)]",
          "note": "第 47 集讲解"
        },
        {
          "label": "周期",
          "expr": "H(e<sup>j(Ω+2π)</sup>)=H(e<sup>jΩ</sup>)",
          "note": "第 47 集讲解"
        }
      ],
      "finalPitfall": "极点越靠近单位圆，峰值越尖锐但系统越接近不稳定，瞬态衰减越慢。 数字角频率 Ω 与连续角频率不同；不能把 Ω 和 ωT 混用，离散频响也不是任意频率都可物理独立。"
    },
    "s7-8-4": {
      "concept": "\n      <p><mark>因果离散 LTI 系统 BIBO 稳定当且仅当 H(z) 的全部极点位于单位圆内。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：H(z)=1/(z−0.5) 与 H(z)=1/(z−2) 分别是否稳定？</p><p>离散因果稳定系统的判据可概括为：h(k) 因果、ROC 包含单位圆、全部极点严格在单位圆内。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=46&amp;t=56\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 46 集 · 00:56，打开 Bilibili 对应讲解\">第 46 集 · 00:56 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>稳定性等价于 h(k) 绝对可和，也等价于 ROC 包含单位圆。</li><li>因果系统 ROC 在最大极点圆外；要包含单位圆，所有极点必须在圆内。</li><li>单位圆上的单极点对应临界稳定，圆外极点对应不稳定。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">因果稳定判据</span>\n      <span class=\"formula\">|p<sub>j</sub>|<1,&nbsp; ∀j</span>\n      <span class=\"formula-note\">离散因果 LTI 系统。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>单位圆内极点对应衰减，单位圆上极点对应等幅/增长，单位圆外极点对应发散。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=45&amp;t=735\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 45 集 · 12:15，打开 Bilibili 对应讲解\">第 45 集 · 12:15 ↗</a></li><li>因果离散系统的 h(k)=0（k&lt;0），于是 H(z) 的 ROC 在最外极点半径之外。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=46&amp;t=56\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 46 集 · 00:56，打开 Bilibili 对应讲解\">第 46 集 · 00:56 ↗</a></li><li>只满足 ROC 含单位圆不等于因果；只满足极点在内也不自动说明选用的 ROC 方向。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=46&amp;t=93\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 46 集 · 01:33，打开 Bilibili 对应讲解\">第 46 集 · 01:33 ↗</a></li><li>临界稳定对应单位圆上的极点，不属于 BIBO 稳定；实际系统要考虑数值误差导致越界。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=46&amp;t=290\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 46 集 · 04:50，打开 Bilibili 对应讲解\">第 46 集 · 04:50 ↗</a></li><li>稳定要求 ROC 包含单位圆 |z|=1；因果稳定进一步要求最外极点半径小于 1。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=46&amp;t=485\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 46 集 · 08:05，打开 Bilibili 对应讲解\">第 46 集 · 08:05 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">因果</span>\n          <span class=\"formula\">h(k)=0 (k<0) ⇒ ROC 在最外极点外</span>\n          <span class=\"formula-note\">第 46 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">稳定</span>\n          <span class=\"formula\">ROC 包含 |z|=1</span>\n          <span class=\"formula-note\">第 46 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">因果稳定</span>\n          <span class=\"formula\">|p<sub>i</sub>|<1，∀i</span>\n          <span class=\"formula-note\">第 46 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>连续系统的左半平面判据不能换成 z 平面左半平面；离散系统看单位圆内。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-00.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 00:00\"\n            aria-label=\"查看第 46 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-00.jpg\" alt=\"第 46 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-01.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 05:00\"\n            aria-label=\"查看第 46 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-01.jpg\" alt=\"第 46 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-02.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 10:00\"\n            aria-label=\"查看第 46 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-02.jpg\" alt=\"第 46 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-03.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 15:00\"\n            aria-label=\"查看第 46 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-03.jpg\" alt=\"第 46 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-04.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 20:00\"\n            aria-label=\"查看第 46 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-04.jpg\" alt=\"第 46 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-05.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 25:00\"\n            aria-label=\"查看第 46 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-05.jpg\" alt=\"第 46 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-06.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 30:00\"\n            aria-label=\"查看第 46 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-06.jpg\" alt=\"第 46 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep46/frame-07.jpg\"\n            data-image-title=\"6.5 系统函数与系统特性II\"\n            data-image-label=\"第 46 集 · 35:00\"\n            aria-label=\"查看第 46 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep46/frame-07.jpg\" alt=\"第 46 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>因果离散 LTI 系统 BIBO 稳定当且仅当 H(z) 的全部极点位于单位圆内。</p>\n      <p><mark>自检问题：</mark>H(z)=1/(z−0.5) 与 H(z)=1/(z−2) 分别是否稳定？</p>\n      <p><span class=\"hl-red\">易错点：</span>与连续系统不同，离散稳定性看单位圆内，不是左半平面。</p>\n      <p><mark>迁移到题目时：</mark>高阶多项式可用 Schur-Cohn/朱里表判断所有根是否在单位圆内。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=46&amp;t=565\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 46 集 · 09:25，打开 Bilibili 对应讲解\">第 46 集 · 09:25 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "单位圆内极点对应衰减，单位圆上极点对应等幅/增长，单位圆外极点对应发散。",
        "因果离散系统的 h(k)=0（k<0），于是 H(z) 的 ROC 在最外极点半径之外。",
        "只满足 ROC 含单位圆不等于因果；只满足极点在内也不自动说明选用的 ROC 方向。",
        "临界稳定对应单位圆上的极点，不属于 BIBO 稳定；实际系统要考虑数值误差导致越界。",
        "稳定要求 ROC 包含单位圆 |z|=1；因果稳定进一步要求最外极点半径小于 1。",
        "高阶多项式可用 Schur-Cohn/朱里表判断所有根是否在单位圆内。"
      ],
      "extraFormulas": [
        {
          "label": "因果",
          "expr": "h(k)=0 (k<0) ⇒ ROC 在最外极点外",
          "note": "第 46 集讲解"
        },
        {
          "label": "稳定",
          "expr": "ROC 包含 |z|=1",
          "note": "第 46 集讲解"
        },
        {
          "label": "因果稳定",
          "expr": "|p<sub>i</sub>|<1，∀i",
          "note": "第 46 集讲解"
        }
      ],
      "finalPitfall": "与连续系统不同，离散稳定性看单位圆内，不是左半平面。 离散稳定性看单位圆，不是看右半平面；连续和离散的稳定判据不能互相替代。 连续系统的左半平面判据不能换成 z 平面左半平面；离散系统看单位圆内。"
    },
    "s7-8-5": {
      "concept": "\n      <p><mark>通过 z=e&lt;sup&gt;sT&lt;/sup&gt; 理解连续与离散系统极点的对应关系，以及频率混叠。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：连续极点 s=−2 在 T=0.5 时映射到哪个 z 位置？是否在单位圆内？</p><p>z=e^{sT} 建立了 s 平面和 z 平面的映射：左半 s 平面进入单位圆内，虚轴映射到单位圆，频率副本在上折叠。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=48&amp;t=303\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 48 集 · 05:03，打开 Bilibili 对应讲解\">第 48 集 · 05:03 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>s 左半平面 → z 单位圆内；虚轴 → 单位圆；右半平面 → 单位圆外。</li><li>s 平面上的等阻尼线映射为 z 平面上的对数螺旋；等频率线映射为射线。</li><li>映射是周期的，连续频率相差 2π/T 会落到同一个离散频率。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">映射</span>\n      <span class=\"formula\">z=e<sup>sT</sup>=e<sup>σT</sup>e<sup>jωT</sup></span>\n      <span class=\"formula-note\">模长与角度分别由 σ、ω 决定。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>反变换时先检查 2π/Ts 个频率副本是否重叠，避免把混叠误认为离散系统本身的问题。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=48&amp;t=49\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 48 集 · 00:49，打开 Bilibili 对应讲解\">第 48 集 · 00:49 ↗</a></li><li>s 平面沿虚轴每移动 2π/Ts 就映射到同一 z 点，因此连续高频会折叠为数字频率。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=48&amp;t=130\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 48 集 · 02:10，打开 Bilibili 对应讲解\">第 48 集 · 02:10 ↗</a></li><li>s 平面虚轴 σ=0 映射到 z 平面单位圆；s 左半平面映射到单位圆内，右半平面映射到单位圆外。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=48&amp;t=303\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 48 集 · 05:03，打开 Bilibili 对应讲解\">第 48 集 · 05:03 ↗</a></li><li>极点的映射决定离散系统的响应包络和振荡频率；连续稳定性可转化为单位圆内判据。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=48&amp;t=303\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 48 集 · 05:03，打开 Bilibili 对应讲解\">第 48 集 · 05:03 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">映射</span>\n          <span class=\"formula\">z=e<sup>sT<sub>s</sub></sup>=r e<sup>jθ</sup></span>\n          <span class=\"formula-note\">第 48 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">半径</span>\n          <span class=\"formula\">r=e<sup>σT<sub>s</sub></sup></span>\n          <span class=\"formula-note\">第 48 集讲解</span>\n        </div>\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">数字角频率</span>\n          <span class=\"formula\">θ=ωT<sub>s</sub>=2πω/ω<sub>s</sub></span>\n          <span class=\"formula-note\">第 48 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>同一 z 点对应无数个 s 点，不能仅由 z 反推出唯一的连续频率；采样混叠必须由结构或先验带限排除。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep48/frame-00.jpg\"\n            data-image-title=\"6.6 z变换与拉普拉斯变换的关系\"\n            data-image-label=\"第 48 集 · 00:00\"\n            aria-label=\"查看第 48 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep48/frame-00.jpg\" alt=\"第 48 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep48/frame-01.jpg\"\n            data-image-title=\"6.6 z变换与拉普拉斯变换的关系\"\n            data-image-label=\"第 48 集 · 05:00\"\n            aria-label=\"查看第 48 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep48/frame-01.jpg\" alt=\"第 48 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep48/frame-02.jpg\"\n            data-image-title=\"6.6 z变换与拉普拉斯变换的关系\"\n            data-image-label=\"第 48 集 · 10:00\"\n            aria-label=\"查看第 48 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep48/frame-02.jpg\" alt=\"第 48 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep48/frame-03.jpg\"\n            data-image-title=\"6.6 z变换与拉普拉斯变换的关系\"\n            data-image-label=\"第 48 集 · 15:00\"\n            aria-label=\"查看第 48 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep48/frame-03.jpg\" alt=\"第 48 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>通过 z=e&lt;sup&gt;sT&lt;/sup&gt; 理解连续与离散系统极点的对应关系，以及频率混叠。</p>\n      <p><mark>自检问题：</mark>连续极点 s=−2 在 T=0.5 时映射到哪个 z 位置？是否在单位圆内？</p>\n      <p><span class=\"hl-red\">易错点：</span>连续系统稳定极点映射后一定在单位圆内；但离散设计不能简单逐点映射所有指标，需考虑混叠与频率畸变。</p>\n      <p><mark>迁移到题目时：</mark>s 平面中与实轴平行的线映射为 z 平面圆；与虚轴平行的线映射为从原点出发的射线。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=48&amp;t=651\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 48 集 · 10:51，打开 Bilibili 对应讲解\">第 48 集 · 10:51 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "反变换时先检查 2π/Ts 个频率副本是否重叠，避免把混叠误认为离散系统本身的问题。",
        "s 平面沿虚轴每移动 2π/Ts 就映射到同一 z 点，因此连续高频会折叠为数字频率。",
        "s 平面虚轴 σ=0 映射到 z 平面单位圆；s 左半平面映射到单位圆内，右半平面映射到单位圆外。",
        "极点的映射决定离散系统的响应包络和振荡频率；连续稳定性可转化为单位圆内判据。",
        "s 平面中与实轴平行的线映射为 z 平面圆；与虚轴平行的线映射为从原点出发的射线。"
      ],
      "extraFormulas": [
        {
          "label": "映射",
          "expr": "z=e<sup>sT<sub>s</sub></sup>=r e<sup>jθ</sup>",
          "note": "第 48 集讲解"
        },
        {
          "label": "半径",
          "expr": "r=e<sup>σT<sub>s</sub></sup>",
          "note": "第 48 集讲解"
        },
        {
          "label": "数字角频率",
          "expr": "θ=ωT<sub>s</sub>=2πω/ω<sub>s</sub>",
          "note": "第 48 集讲解"
        }
      ],
      "finalPitfall": "连续系统稳定极点映射后一定在单位圆内；但离散设计不能简单逐点映射所有指标，需考虑混叠与频率畸变。 同一 z 点对应无数个 s 点，不能仅由 z 反推出唯一的连续频率；采样混叠必须由结构或先验带限排除。"
    },
    "s7-ex": {
      "concept": "\n      <p><mark>重点练习 ROC、双边/单边逆变换、差分方程初值问题和 H(z) 稳定性。</mark></p>\n      <p>用 Z 变换处理离散差分方程、初始条件和卷积和。掌握双边/单边 Z 变换、ROC、逆变换、系统函数 H(z) 的零极点、频率响应与稳定性。</p>\n      <p>本节要解决的具体问题：选一道题分别用双边和单边 Z 变换计算，比较适用条件与结果。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>先确定变换类型（双边/单边）和 ROC，再做部分分式。</li><li>差分方程题用单边 Z 变换带入初始条件，逐项核对移位项。</li><li>稳定性题先求极点，再结合因果性与单位圆判断。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复盘链</span>\n      <span class=\"formula\">F(z) → ROC → 极点 → 序列类型 → 稳定性</span>\n      <span class=\"formula-note\">每一步都要写前提。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点练习 ROC、双边/单边逆变换、差分方程初值问题和 H(z) 稳定性。</p>\n      <p><mark>自检问题：</mark>选一道题分别用双边和单边 Z 变换计算，比较适用条件与结果。</p>\n      <p><span class=\"hl-red\">易错点：</span>本章最容易混淆：双边移位无初值项、单边移位有初值项；ROC 决定逆变换。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "本章最容易混淆：双边移位无初值项、单边移位有初值项；ROC 决定逆变换。"
    }
  },
  "ch8": {
    "s8-0": {
      "concept": "\n      <p><mark>状态空间方法从系统内部状态出发，用一组一阶方程统一描述连续、离散和多输入多输出系统。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：为什么仅知道当前输入不足以预测系统未来输出？状态变量补足了什么信息？</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>状态变量完整记忆系统过去对未来的影响；知道当前状态和未来输入，就能确定未来输出。</li><li>状态方程描述状态演化，输出方程描述可观测输出。</li><li>状态空间法自然处理初始条件、多变量耦合和内部结构，是经典输入输出法的补充。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">标准结构</span>\n      <span class=\"formula\">状态方程 + 输出方程</span>\n      <span class=\"formula-note\">内部状态 x 与外部输入输出 u、y 的桥梁。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>状态空间方法从系统内部状态出发，用一组一阶方程统一描述连续、离散和多输入多输出系统。</p>\n      <p><mark>自检问题：</mark>为什么仅知道当前输入不足以预测系统未来输出？状态变量补足了什么信息？</p>\n      <p><span class=\"hl-red\">易错点：</span>状态变量选取不唯一，但状态维数等于系统阶数；多选或少选都会破坏模型完整性。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "状态变量选取不唯一，但状态维数等于系统阶数；多选或少选都会破坏模型完整性。"
    },
    "s8-1-1": {
      "concept": "\n      <p><mark>选择独立储能变量作为状态，列写一阶微分方程组并整理为标准矩阵形式。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：RLC 串联电路选 i&lt;sub&gt;L&lt;/sub&gt;、v&lt;sub&gt;C&lt;/sub&gt; 为状态，能否写出 A、B、C、D？</p><p>状态空间法描述系统内部演化；建立模型靠选独立状态，求解靠矩阵指数或 z 域矩阵求逆，可控/可观测靠秩判据。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=2115\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 35:15，打开 Bilibili 对应讲解\">第 50 集 · 35:15 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>常用状态：电容电压、电感电流、机械系统的位置/速度等独立储能变量。</li><li>对每个储能元件列写含一阶导数的方程，消去非状态变量，得到 ẋ=Ax+Bu。</li><li>输出方程 y=Cx+Du 把所需输出表示为状态和输入的线性组合。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">连续状态模型</span>\n      <span class=\"formula\">ẋ(t)=Ax(t)+Bu(t)</span>\n      <span class=\"formula-note\">x 为 n×1 状态向量。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">输出方程</span>\n      <span class=\"formula\">y(t)=Cx(t)+Du(t)</span>\n      <span class=\"formula-note\">D 为直通矩阵。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>由高阶微分/差分方程建状态方程时，常取 y 及其低阶导数或中间变量 x 的连续状态链。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=122\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 02:02，打开 Bilibili 对应讲解\">第 50 集 · 02:02 ↗</a></li></ul>\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">连续状态空间</span>\n          <span class=\"formula\">ẋ=Ax+Bu，y=Cx+Du</span>\n          <span class=\"formula-note\">第 50 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>状态变量选取不唯一，但必须独立且个数等于系统阶数；可控不等于可直接控制每个输出，可观测也不等于每个状态都能直接测量。</p>\n          \n    <div class=\"integrated-image-set\">\n      <div class=\"integrated-image-grid\">\n        <button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-00.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 00:00\"\n            aria-label=\"查看第 50 集 · 00:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-00.jpg\" alt=\"第 50 集 · 00:00课堂板书截图\" loading=\"lazy\">\n            <span>00:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-01.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 05:00\"\n            aria-label=\"查看第 50 集 · 05:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-01.jpg\" alt=\"第 50 集 · 05:00课堂板书截图\" loading=\"lazy\">\n            <span>05:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-02.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 10:00\"\n            aria-label=\"查看第 50 集 · 10:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-02.jpg\" alt=\"第 50 集 · 10:00课堂板书截图\" loading=\"lazy\">\n            <span>10:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-03.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 15:00\"\n            aria-label=\"查看第 50 集 · 15:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-03.jpg\" alt=\"第 50 集 · 15:00课堂板书截图\" loading=\"lazy\">\n            <span>15:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-04.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 20:00\"\n            aria-label=\"查看第 50 集 · 20:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-04.jpg\" alt=\"第 50 集 · 20:00课堂板书截图\" loading=\"lazy\">\n            <span>20:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-05.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 25:00\"\n            aria-label=\"查看第 50 集 · 25:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-05.jpg\" alt=\"第 50 集 · 25:00课堂板书截图\" loading=\"lazy\">\n            <span>25:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-06.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 30:00\"\n            aria-label=\"查看第 50 集 · 30:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-06.jpg\" alt=\"第 50 集 · 30:00课堂板书截图\" loading=\"lazy\">\n            <span>30:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-07.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 35:00\"\n            aria-label=\"查看第 50 集 · 35:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-07.jpg\" alt=\"第 50 集 · 35:00课堂板书截图\" loading=\"lazy\">\n            <span>35:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-08.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 40:00\"\n            aria-label=\"查看第 50 集 · 40:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-08.jpg\" alt=\"第 50 集 · 40:00课堂板书截图\" loading=\"lazy\">\n            <span>40:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-09.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 45:00\"\n            aria-label=\"查看第 50 集 · 45:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-09.jpg\" alt=\"第 50 集 · 45:00课堂板书截图\" loading=\"lazy\">\n            <span>45:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-10.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 50:00\"\n            aria-label=\"查看第 50 集 · 50:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-10.jpg\" alt=\"第 50 集 · 50:00课堂板书截图\" loading=\"lazy\">\n            <span>50:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-11.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 55:00\"\n            aria-label=\"查看第 50 集 · 55:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-11.jpg\" alt=\"第 50 集 · 55:00课堂板书截图\" loading=\"lazy\">\n            <span>55:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-12.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 60:00\"\n            aria-label=\"查看第 50 集 · 60:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-12.jpg\" alt=\"第 50 集 · 60:00课堂板书截图\" loading=\"lazy\">\n            <span>60:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-13.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 65:00\"\n            aria-label=\"查看第 50 集 · 65:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-13.jpg\" alt=\"第 50 集 · 65:00课堂板书截图\" loading=\"lazy\">\n            <span>65:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-14.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 70:00\"\n            aria-label=\"查看第 50 集 · 70:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-14.jpg\" alt=\"第 50 集 · 70:00课堂板书截图\" loading=\"lazy\">\n            <span>70:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-15.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 75:00\"\n            aria-label=\"查看第 50 集 · 75:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-15.jpg\" alt=\"第 50 集 · 75:00课堂板书截图\" loading=\"lazy\">\n            <span>75:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-16.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 80:00\"\n            aria-label=\"查看第 50 集 · 80:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-16.jpg\" alt=\"第 50 集 · 80:00课堂板书截图\" loading=\"lazy\">\n            <span>80:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-17.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 85:00\"\n            aria-label=\"查看第 50 集 · 85:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-17.jpg\" alt=\"第 50 集 · 85:00课堂板书截图\" loading=\"lazy\">\n            <span>85:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-18.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 90:00\"\n            aria-label=\"查看第 50 集 · 90:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-18.jpg\" alt=\"第 50 集 · 90:00课堂板书截图\" loading=\"lazy\">\n            <span>90:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-19.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 95:00\"\n            aria-label=\"查看第 50 集 · 95:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-19.jpg\" alt=\"第 50 集 · 95:00课堂板书截图\" loading=\"lazy\">\n            <span>95:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-20.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 100:00\"\n            aria-label=\"查看第 50 集 · 100:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-20.jpg\" alt=\"第 50 集 · 100:00课堂板书截图\" loading=\"lazy\">\n            <span>100:00</span>\n          </button><button class=\"integrated-image-card\" type=\"button\"\n            data-image-src=\"assets/images/video/boards/frames-hd/ep50/frame-21.jpg\"\n            data-image-title=\"8 系统的状态变量分析\"\n            data-image-label=\"第 50 集 · 105:00\"\n            aria-label=\"查看第 50 集 · 105:00课堂画面\">\n            <img src=\"assets/images/video/boards/frames-hd/ep50/frame-21.jpg\" alt=\"第 50 集 · 105:00课堂板书截图\" loading=\"lazy\">\n            <span>105:00</span>\n          </button>\n      </div>\n    </div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>选择独立储能变量作为状态，列写一阶微分方程组并整理为标准矩阵形式。</p>\n      <p><mark>自检问题：</mark>RLC 串联电路选 i&lt;sub&gt;L&lt;/sub&gt;、v&lt;sub&gt;C&lt;/sub&gt; 为状态，能否写出 A、B、C、D？</p>\n      <p><span class=\"hl-red\">易错点：</span>状态变量必须相互独立；若选了相关变量，A 矩阵会失去正确维数或方程不独立。</p>\n      <p><mark>迁移到题目时：</mark>连续状态方程 ẋ=Ax+Be，离散状态方程 x(k+1)=Ax(k)+Be(k)，输出统一写作 y=Cx+De。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=2115\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 35:15，打开 Bilibili 对应讲解\">第 50 集 · 35:15 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "由高阶微分/差分方程建状态方程时，常取 y 及其低阶导数或中间变量 x 的连续状态链。",
        "连续状态方程 ẋ=Ax+Be，离散状态方程 x(k+1)=Ax(k)+Be(k)，输出统一写作 y=Cx+De。"
      ],
      "extraFormulas": [
        {
          "label": "连续状态空间",
          "expr": "ẋ=Ax+Bu，y=Cx+Du",
          "note": "第 50 集讲解"
        }
      ],
      "finalPitfall": "状态变量必须相互独立；若选了相关变量，A 矩阵会失去正确维数或方程不独立。 状态变量选取不唯一，但必须独立且个数等于系统阶数；可控不等于可直接控制每个输出，可观测也不等于每个状态都能直接测量。"
    },
    "s8-1-2": {
      "concept": "\n      <p><mark>从差分方程或连续系统离散化得到 x(k+1)=Ax(k)+Bu(k)。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：二阶差分方程如何引入两个状态变量变成一阶方程组？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=785\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 13:05，打开 Bilibili 对应讲解\">第 50 集 · 13:05 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>离散状态方程描述相邻采样时刻的状态转移，A 为状态转移矩阵。</li><li>可由差分方程引入延迟变量构造状态，也可由连续系统采样离散化。</li><li>输出方程 y(k)=Cx(k)+Du(k) 与连续形式对应。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">离散状态模型</span>\n      <span class=\"formula\">x(k+1)=Ax(k)+Bu(k)</span>\n      <span class=\"formula-note\">一步状态转移。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">输出方程</span>\n      <span class=\"formula\">y(k)=Cx(k)+Du(k)</span>\n      <span class=\"formula-note\">离散时刻输出。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>从差分方程或连续系统离散化得到 x(k+1)=Ax(k)+Bu(k)。</p>\n      <p><mark>自检问题：</mark>二阶差分方程如何引入两个状态变量变成一阶方程组？</p>\n      <p><span class=\"hl-red\">易错点：</span>离散化时 A、B 不是简单把连续 A、B 抄过来；需用矩阵指数或零阶保持公式。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散化时 A、B 不是简单把连续 A、B 抄过来；需用矩阵指数或零阶保持公式。"
    },
    "s8-2-1": {
      "concept": "\n      <p><mark>用矩阵指数 e&lt;sup&gt;At&lt;/sup&gt; 求零输入响应，用卷积积分加入输入贡献。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：A=[[0,1],[0,0]]，求 e&lt;sup&gt;At&lt;/sup&gt; 并解释其物理意义。</p><p>状态空间法描述系统内部演化；建立模型靠选独立状态，求解靠矩阵指数或 z 域矩阵求逆，可控/可观测靠秩判据。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=2115\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 35:15，打开 Bilibili 对应讲解\">第 50 集 · 35:15 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>齐次方程 ẋ=Ax 的解为 x(t)=e<sup>At</sup>x(0)。</li><li>e<sup>At</sup> 称为状态转移矩阵，满足 Φ(0)=I、Φ(t₁+t₂)=Φ(t₁)Φ(t₂)。</li><li>完全状态响应：x(t)=e<sup>At</sup>x(0)+∫<sub>0</sub><sup>t</sup>e<sup>A(t−τ)</sup>Bu(τ)dτ。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">状态转移矩阵</span>\n      <span class=\"formula\">Φ(t)=e<sup>At</sup>=ℒ<sup>−1</sup>[(sI−A)<sup>−1</sup>]</span>\n      <span class=\"formula-note\">两种常用求法。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">完全状态响应</span>\n      <span class=\"formula\">x(t)=Φ(t)x(0)+∫<sub>0</sub><sup>t</sup>Φ(t−τ)Bu(τ)dτ</span>\n      <span class=\"formula-note\">零输入 + 零状态。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "<ul class=\"integrated-point-list\"><li>连续解含 e^{At}x(0) 和输入卷积，离散解含 A^k x(0) 和离散卷积和。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=2115\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 35:15，打开 Bilibili 对应讲解\">第 50 集 · 35:15 ↗</a></li></ul>\n          \n          <p><span class=\"hl-red\">注意：</span>状态变量选取不唯一，但必须独立且个数等于系统阶数；可控不等于可直接控制每个输出，可观测也不等于每个状态都能直接测量。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>用矩阵指数 e&lt;sup&gt;At&lt;/sup&gt; 求零输入响应，用卷积积分加入输入贡献。</p>\n      <p><mark>自检问题：</mark>A=[[0,1],[0,0]]，求 e&lt;sup&gt;At&lt;/sup&gt; 并解释其物理意义。</p>\n      <p><span class=\"hl-red\">易错点：</span>矩阵指数不能逐元素取指数；必须用级数、拉普拉斯或对角化方法计算。</p>\n      <p><mark>迁移到题目时：</mark>系统函数矩阵 H=C(sI−A)^{-1}B+D；左边矩阵求逆时不要把单位矩阵漏成标量 1。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=3606\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 60:06，打开 Bilibili 对应讲解\">第 50 集 · 60:06 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "连续解含 e^{At}x(0) 和输入卷积，离散解含 A^k x(0) 和离散卷积和。",
        "系统函数矩阵 H=C(sI−A)^{-1}B+D；左边矩阵求逆时不要把单位矩阵漏成标量 1。"
      ],
      "extraFormulas": [],
      "finalPitfall": "矩阵指数不能逐元素取指数；必须用级数、拉普拉斯或对角化方法计算。 状态变量选取不唯一，但必须独立且个数等于系统阶数；可控不等于可直接控制每个输出，可观测也不等于每个状态都能直接测量。"
    },
    "s8-2-2": {
      "concept": "\n      <p><mark>离散状态方程通过 A&lt;sup&gt;k&lt;/sup&gt; 迭代求解，输入贡献表现为离散卷积和。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：A=0.5，x(0)=2，u(k)=1，求 x(k) 的闭式表达式。</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=231\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 03:51，打开 Bilibili 对应讲解\">第 50 集 · 03:51 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>齐次解 x(k)=A<sup>k</sup>x(0)，A<sup>k</sup> 为离散状态转移矩阵。</li><li>完全解 x(k)=A<sup>k</sup>x(0)+Σ<sub>i=0</sub><sup>k−1</sup>A<sup>k−1−i</sup>Bu(i)。</li><li>A 的特征值决定离散状态的自然演化；A 的幂可用对角化、Z 变换或迭代计算。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">离散状态解</span>\n      <span class=\"formula\">x(k)=A<sup>k</sup>x(0)+Σ<sub>i=0</sub><sup>k−1</sup>A<sup>k−1−i</sup>Bu(i)</span>\n      <span class=\"formula-note\">k≥1；A&lt;sup&gt;0&lt;/sup&gt;=I。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">Z 域形式</span>\n      <span class=\"formula\">X(z)=(zI−A)<sup>−1</sup>[zx(0)+BU(z)]</span>\n      <span class=\"formula-note\">状态转移函数。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>离散状态方程通过 A&lt;sup&gt;k&lt;/sup&gt; 迭代求解，输入贡献表现为离散卷积和。</p>\n      <p><mark>自检问题：</mark>A=0.5，x(0)=2，u(k)=1，求 x(k) 的闭式表达式。</p>\n      <p><span class=\"hl-red\">易错点：</span>离散卷积和的指数是 k−1−i，不是 k−i；边界 i=0 到 k−1 不能写错。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "离散卷积和的指数是 k−1−i，不是 k−i；边界 i=0 到 k−1 不能写错。"
    },
    "s8-3-1": {
      "concept": "\n      <p><mark>可控性判断输入能否在有限时间内把状态从任意初值驱动到任意目标。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：A=[[1,0],[0,2]]，B=[1,0]&lt;sup&gt;T&lt;/sup&gt;，系统是否可控？哪个模态不可控？</p><p>状态空间法描述系统内部演化；建立模型靠选独立状态，求解靠矩阵指数或 z 域矩阵求逆，可控/可观测靠秩判据。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=245\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 04:05，打开 Bilibili 对应讲解\">第 50 集 · 04:05 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>连续/离散 LTI 系统可控的充要条件是可控性矩阵满秩。</li><li>可控性矩阵 C<sub>o</sub>=[B AB … A<sup>n−1</sup>B] 的秩为 n。</li><li>PBH 判据：对所有特征值 λ<sub>i</sub>，[λ<sub>i</sub>I−A, B] 行满秩。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">可控性判据</span>\n      <span class=\"formula\">rank[B&nbsp;AB&nbsp;…&nbsp;A<sup>n−1</sup>B]=n</span>\n      <span class=\"formula-note\">n 为状态维数。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">PBH 判据</span>\n      <span class=\"formula\">rank[λ<sub>i</sub>I−A,&nbsp;B]=n</span>\n      <span class=\"formula-note\">对所有特征值成立。</span>\n    </div></div>"
        },
        {
          "title": "判断线索与计算边界",
          "html": "\n          <div class=\"formula-list\">\n        <div class=\"formula-item\">\n          <span class=\"formula-label\">可控矩阵</span>\n          <span class=\"formula\">C<sub>o</sub>=[B AB … A<sup>n−1</sup>B]</span>\n          <span class=\"formula-note\">第 50 集讲解</span>\n        </div></div>\n          <p><span class=\"hl-red\">注意：</span>状态变量选取不唯一，但必须独立且个数等于系统阶数；可控不等于可直接控制每个输出，可观测也不等于每个状态都能直接测量。</p>\n          "
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>可控性判断输入能否在有限时间内把状态从任意初值驱动到任意目标。</p>\n      <p><mark>自检问题：</mark>A=[[1,0],[0,2]]，B=[1,0]&lt;sup&gt;T&lt;/sup&gt;，系统是否可控？哪个模态不可控？</p>\n      <p><span class=\"hl-red\">易错点：</span>可控性不是“每个状态都能直接测量”，而是“输入能影响每个状态模态”。</p>\n      <p><mark>迁移到题目时：</mark>可控性看 [B,AB,…,A^{n−1}B] 是否满秩，可观测性看 [C;CA;…;CA^{n−1}] 是否满秩；秩不足说明对应模态失控或不可见。 <a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=245\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 04:05，打开 Bilibili 对应讲解\">第 50 集 · 04:05 ↗</a></p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [
        "可控性看 [B,AB,…,A^{n−1}B] 是否满秩，可观测性看 [C;CA;…;CA^{n−1}] 是否满秩；秩不足说明对应模态失控或不可见。"
      ],
      "extraFormulas": [
        {
          "label": "可控矩阵",
          "expr": "C<sub>o</sub>=[B AB … A<sup>n−1</sup>B]",
          "note": "第 50 集讲解"
        }
      ],
      "finalPitfall": "可控性不是“每个状态都能直接测量”，而是“输入能影响每个状态模态”。 状态变量选取不唯一，但必须独立且个数等于系统阶数；可控不等于可直接控制每个输出，可观测也不等于每个状态都能直接测量。"
    },
    "s8-3-2": {
      "concept": "\n      <p><mark>可观测性判断能否由有限时间的输出和输入唯一确定初始状态。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：A=[[1,0],[0,2]]，C=[1,0]，系统是否可观测？哪个模态不可观测？</p><p><a class=\"inline-video-source\" href=\"https://www.bilibili.com/video/BV1qM411a7N2/?p=50&amp;t=140\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"第 50 集 · 02:20，打开 Bilibili 对应讲解\">第 50 集 · 02:20 ↗</a></p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>可观测性矩阵 O=[C; CA; …; CA<sup>n−1</sup>] 的秩为 n 时系统完全可观测。</li><li>PBH 判据：对所有特征值 λ<sub>i</sub>，[λ<sub>i</sub>I−A; C] 列满秩。</li><li>可控性与可观测性存在对偶关系： (A,B) 可控 ⇔ (A<sup>T</sup>,B<sup>T</sup>) 可观测。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">可观测性判据</span>\n      <span class=\"formula\">rank[C;CA;…;CA<sup>n−1</sup>]=n</span>\n      <span class=\"formula-note\">O 矩阵行满秩。</span>\n    </div>\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">对偶</span>\n      <span class=\"formula\">(A,B) 可控 ⇔ (A<sup>T</sup>,B<sup>T</sup>) 可观测</span>\n      <span class=\"formula-note\">用于简化判断。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>可观测性判断能否由有限时间的输出和输入唯一确定初始状态。</p>\n      <p><mark>自检问题：</mark>A=[[1,0],[0,2]]，C=[1,0]，系统是否可观测？哪个模态不可观测？</p>\n      <p><span class=\"hl-red\">易错点：</span>可观测性不是“输出能直接看到所有状态”，而是“输出历史能反推出初始状态”。</p>",
      "questionIds": [],
      "integrated": true,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "可观测性不是“输出能直接看到所有状态”，而是“输出历史能反推出初始状态”。"
    },
    "s8-ex": {
      "concept": "\n      <p><mark>重点练习状态方程建立、矩阵指数、离散迭代、可控性和可观测性秩判据。</mark></p>\n      <p>把高阶系统化为一阶状态方程组，用状态转移矩阵描述内部演化。除输入输出关系外，还能分析多变量系统、初始状态、可控性与可观性。</p>\n      <p>本节要解决的具体问题：选一道 RLC 或机械系统题，从电路方程独立建出状态空间模型。</p>",
      "advanced": [
        {
          "title": "定义、公式与适用条件",
          "html": "<ul><li>建方程时先明确状态变量，再逐个列写一阶关系并整理矩阵。</li><li>矩阵指数题优先检查 A 的特殊结构（对角、幂零、可对角化）。</li><li>可控/可观测题写出矩阵后算秩，注意维数与满秩条件。</li></ul>\n        <div class=\"formula-list\">\n    <div class=\"formula-item\">\n      <span class=\"formula-label\">复盘链</span>\n      <span class=\"formula\">选状态 → 列方程 → 矩阵化 → 求解 → 判秩</span>\n      <span class=\"formula-note\">五步检查法。</span>\n    </div></div>"
        }
      ],
      "summary": "\n      <p><mark>核心结论：</mark>重点练习状态方程建立、矩阵指数、离散迭代、可控性和可观测性秩判据。</p>\n      <p><mark>自检问题：</mark>选一道 RLC 或机械系统题，从电路方程独立建出状态空间模型。</p>\n      <p><span class=\"hl-red\">易错点：</span>本章计算量大，最容易在矩阵维数、行列方向和特征值上出错；每步写清维度。</p>",
      "questionIds": [],
      "integrated": false,
      "extraPoints": [],
      "extraFormulas": [],
      "finalPitfall": "本章计算量大，最容易在矩阵维数、行列方向和特征值上出错；每步写清维度。"
    }
  }
}
;

window.SIGNAL_INTEGRATED_COVERAGE_IDS = [
  "ep1-point-1",
  "ep1-point-2",
  "ep1-point-3",
  "ep1-point-4",
  "ep2-point-1",
  "ep2-point-2",
  "ep2-point-3",
  "ep2-point-4",
  "ep2-point-5",
  "ep3-point-1",
  "ep3-point-2",
  "ep3-point-3",
  "ep3-point-4",
  "ep3-point-5",
  "ep4-point-1",
  "ep4-point-2",
  "ep4-point-3",
  "ep4-point-4",
  "ep4-point-5",
  "ep5-point-1",
  "ep5-point-2",
  "ep5-point-3",
  "ep5-point-4",
  "ep5-point-5",
  "ep6-point-1",
  "ep6-point-2",
  "ep6-point-3",
  "ep6-point-4",
  "ep6-point-5",
  "ep7-point-1",
  "ep7-point-2",
  "ep7-point-3",
  "ep7-point-4",
  "ep7-point-5",
  "ep8-point-1",
  "ep8-point-2",
  "ep8-point-3",
  "ep8-point-4",
  "ep8-point-5",
  "ep9-point-1",
  "ep9-point-2",
  "ep9-point-3",
  "ep9-point-4",
  "ep9-point-5",
  "ep10-point-1",
  "ep10-point-2",
  "ep10-point-3",
  "ep10-point-4",
  "ep10-point-5",
  "ep11-point-1",
  "ep11-point-2",
  "ep11-point-3",
  "ep11-point-4",
  "ep11-point-5",
  "ep12-point-1",
  "ep12-point-2",
  "ep12-point-3",
  "ep12-point-4",
  "ep12-point-5",
  "ep13-point-1",
  "ep13-point-2",
  "ep13-point-3",
  "ep13-point-4",
  "ep13-point-5",
  "ep14-point-1",
  "ep14-point-2",
  "ep14-point-3",
  "ep14-point-4",
  "ep14-point-5",
  "ep15-point-1",
  "ep15-point-2",
  "ep15-point-3",
  "ep15-point-4",
  "ep15-point-5",
  "ep16-point-1",
  "ep16-point-2",
  "ep16-point-3",
  "ep16-point-4",
  "ep16-point-5",
  "ep17-point-1",
  "ep17-point-2",
  "ep17-point-3",
  "ep17-point-4",
  "ep17-point-5",
  "ep18-point-1",
  "ep18-point-2",
  "ep18-point-3",
  "ep18-point-4",
  "ep18-point-5",
  "ep19-point-1",
  "ep19-point-2",
  "ep19-point-3",
  "ep19-point-4",
  "ep19-point-5",
  "ep20-point-1",
  "ep20-point-2",
  "ep20-point-3",
  "ep20-point-4",
  "ep20-point-5",
  "ep21-point-1",
  "ep21-point-2",
  "ep21-point-3",
  "ep21-point-4",
  "ep21-point-5",
  "ep22-point-1",
  "ep22-point-2",
  "ep22-point-3",
  "ep22-point-4",
  "ep22-point-5",
  "ep23-point-1",
  "ep23-point-2",
  "ep23-point-3",
  "ep23-point-4",
  "ep23-point-5",
  "ep24-point-1",
  "ep24-point-2",
  "ep24-point-3",
  "ep24-point-4",
  "ep24-point-5",
  "ep25-point-1",
  "ep25-point-2",
  "ep25-point-3",
  "ep25-point-4",
  "ep25-point-5",
  "ep26-point-1",
  "ep26-point-2",
  "ep26-point-3",
  "ep26-point-4",
  "ep26-point-5",
  "ep27-point-1",
  "ep27-point-2",
  "ep27-point-3",
  "ep27-point-4",
  "ep27-point-5",
  "ep28-point-1",
  "ep28-point-2",
  "ep28-point-3",
  "ep28-point-4",
  "ep28-point-5",
  "ep29-point-1",
  "ep29-point-2",
  "ep29-point-3",
  "ep29-point-4",
  "ep29-point-5",
  "ep30-point-1",
  "ep30-point-2",
  "ep30-point-3",
  "ep30-point-4",
  "ep30-point-5",
  "ep31-point-1",
  "ep31-point-2",
  "ep31-point-3",
  "ep31-point-4",
  "ep31-point-5",
  "ep32-point-1",
  "ep32-point-2",
  "ep32-point-3",
  "ep32-point-4",
  "ep32-point-5",
  "ep33-point-1",
  "ep33-point-2",
  "ep33-point-3",
  "ep33-point-4",
  "ep33-point-5",
  "ep34-point-1",
  "ep34-point-2",
  "ep34-point-3",
  "ep34-point-4",
  "ep34-point-5",
  "ep35-point-1",
  "ep35-point-2",
  "ep35-point-3",
  "ep35-point-4",
  "ep35-point-5",
  "ep36-point-1",
  "ep36-point-2",
  "ep36-point-3",
  "ep36-point-4",
  "ep36-point-5",
  "ep37-point-1",
  "ep37-point-2",
  "ep37-point-3",
  "ep37-point-4",
  "ep37-point-5",
  "ep38-point-1",
  "ep38-point-2",
  "ep38-point-3",
  "ep38-point-4",
  "ep38-point-5",
  "ep39-point-1",
  "ep39-point-2",
  "ep39-point-3",
  "ep39-point-4",
  "ep39-point-5",
  "ep40-point-1",
  "ep40-point-2",
  "ep40-point-3",
  "ep40-point-4",
  "ep40-point-5",
  "ep41-point-1",
  "ep41-point-2",
  "ep41-point-3",
  "ep41-point-4",
  "ep41-point-5",
  "ep42-point-1",
  "ep42-point-2",
  "ep42-point-3",
  "ep42-point-4",
  "ep42-point-5",
  "ep43-point-1",
  "ep43-point-2",
  "ep43-point-3",
  "ep43-point-4",
  "ep43-point-5",
  "ep44-point-1",
  "ep44-point-2",
  "ep44-point-3",
  "ep44-point-4",
  "ep44-point-5",
  "ep45-point-1",
  "ep45-point-2",
  "ep45-point-3",
  "ep45-point-4",
  "ep45-point-5",
  "ep46-point-1",
  "ep46-point-2",
  "ep46-point-3",
  "ep46-point-4",
  "ep46-point-5",
  "ep47-point-1",
  "ep47-point-2",
  "ep47-point-3",
  "ep47-point-4",
  "ep47-point-5",
  "ep48-point-1",
  "ep48-point-2",
  "ep48-point-3",
  "ep48-point-4",
  "ep48-point-5",
  "ep49-point-1",
  "ep49-point-2",
  "ep49-point-3",
  "ep49-point-4",
  "ep49-point-5",
  "ep50-point-1",
  "ep50-point-2",
  "ep50-point-3",
  "ep50-point-4",
  "ep50-point-5"
];
