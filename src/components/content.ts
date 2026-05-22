import { Bi } from "./lang";

export type Hub = {
  key: string;
  name: Bi;
  region: Bi;
  x: number; y: number; // map coords (equirectangular-ish, 900x460)
  specialties: Bi;
  anchors: Bi; // signature institutions / companies
  story: Bi;
  // 9 power dimensions, 0–100
  talent: number;
  capital: number;
  science: number;
  manufacturing: number;
  energy: number;
  compute: number;
  education: number;
  stability: number;
  info: number;
  accent: string;
};

export const HUBS: Hub[] = [
  {
    key: "svalley", name: { en: "Silicon Valley", zh: "硅谷" }, region: { en: "San Francisco Bay, USA", zh: "美国 旧金山湾区" },
    x: 150, y: 205,
    specialties: { en: "AI · software · venture capital · semiconductors", zh: "AI · 软件 · 风险投资 · 半导体" },
    anchors: { en: "Stanford · Google · NVIDIA · OpenAI · a16z", zh: "斯坦福 · 谷歌 · 英伟达 · OpenAI · a16z" },
    story: { en: "The template every other hub copies: Stanford spun out talent, defence money seeded the chips, and a self-reinforcing loop of founders, capital and re-investment made it the dominant cluster of the digital age.", zh: "其他每一个中心都在临摹的模板：斯坦福输出人才，国防经费孵化芯片，创始人、资本与再投资构成自我强化的回路，使其成为数字时代的主导集群。" },
    talent: 98, capital: 99, science: 92, manufacturing: 40, energy: 60, compute: 96, education: 95, stability: 80, info: 96, accent: "#38e1ff",
  },
  {
    key: "beijing", name: { en: "Beijing", zh: "北京" }, region: { en: "China", zh: "中国" },
    x: 740, y: 210,
    specialties: { en: "AI research · policy · internet · fundamental science", zh: "AI 研究 · 政策 · 互联网 · 基础科学" },
    anchors: { en: "Tsinghua · Peking U · Baidu · ByteDance · CAS", zh: "清华 · 北大 · 百度 · 字节跳动 · 中科院" },
    story: { en: "China's research-and-policy core: top universities, the Academy of Sciences, and the headquarters where national technology strategy is set. Zhongguancun was China's first answer to Silicon Valley.", zh: "中国的研究与政策核心：顶尖高校、中科院，以及制定国家科技战略的总部所在。中关村，是中国对硅谷的第一份回答。" },
    talent: 94, capital: 88, science: 93, manufacturing: 55, energy: 78, compute: 88, education: 94, stability: 78, info: 70, accent: "#ff5db1",
  },
  {
    key: "shenzhen", name: { en: "Shenzhen", zh: "深圳" }, region: { en: "China", zh: "中国" },
    x: 730, y: 268,
    specialties: { en: "hardware · manufacturing · drones · electronics", zh: "硬件 · 制造 · 无人机 · 电子" },
    anchors: { en: "Huawei · Tencent · DJI · BYD · Foxconn nearby", zh: "华为 · 腾讯 · 大疆 · 比亚迪 · 富士康（邻近）" },
    story: { en: "A fishing village turned planetary hardware capital in forty years. Shenzhen's superpower is the densest electronics supply chain on Earth — a prototype can become a product in days.", zh: "四十年间，从渔村变为行星级硬件之都。深圳的超能力，是地球上最密集的电子供应链——一个原型可在数日内变为产品。" },
    talent: 86, capital: 88, science: 72, manufacturing: 99, energy: 80, compute: 78, education: 70, stability: 80, info: 72, accent: "#4ade80",
  },
  {
    key: "shanghai", name: { en: "Shanghai", zh: "上海" }, region: { en: "China", zh: "中国" },
    x: 760, y: 240,
    specialties: { en: "finance · chips · biotech · automotive", zh: "金融 · 芯片 · 生物技术 · 汽车" },
    anchors: { en: "SMIC · Fudan · Jiao Tong · Tesla Gigafactory", zh: "中芯国际 · 复旦 · 交大 · 特斯拉超级工厂" },
    story: { en: "China's financial and advanced-manufacturing gateway: the mainland's leading chip foundry, deep capital markets, and the biotech and automotive industries clustered around the Yangtze delta.", zh: "中国的金融与先进制造门户：大陆领先的晶圆代工、深厚的资本市场，以及环长三角集聚的生物技术与汽车产业。" },
    talent: 88, capital: 92, science: 84, manufacturing: 86, energy: 78, compute: 80, education: 86, stability: 80, info: 72, accent: "#5fdcff",
  },
  {
    key: "hangzhou", name: { en: "Hangzhou", zh: "杭州" }, region: { en: "China", zh: "中国" },
    x: 758, y: 248,
    specialties: { en: "internet · cloud · e-commerce · digital economy", zh: "互联网 · 云 · 电商 · 数字经济" },
    anchors: { en: "Alibaba · Ant · NetEase · Zhejiang U · DeepSeek-era startups", zh: "阿里巴巴 · 蚂蚁 · 网易 · 浙大 · DeepSeek 时代创业潮" },
    story: { en: "Built around Alibaba, Hangzhou became China's digital-economy capital — cloud, payments, and a new generation of AI startups proving talent clusters can bloom outside the megacities.", zh: "围绕阿里巴巴成长，杭州成为中国数字经济之都——云、支付，以及新一代 AI 创业公司，证明人才集群能在超大城市之外绽放。" },
    talent: 82, capital: 84, science: 74, manufacturing: 66, energy: 72, compute: 82, education: 78, stability: 80, info: 74, accent: "#6ee7a8",
  },
  {
    key: "hefei", name: { en: "Hefei", zh: "合肥" }, region: { en: "China", zh: "中国" },
    x: 752, y: 244,
    specialties: { en: "quantum · fusion · displays · fundamental science", zh: "量子 · 聚变 · 显示面板 · 基础科学" },
    anchors: { en: "USTC · EAST tokamak · quantum labs · BOE", zh: "中科大 · EAST 托卡马克 · 量子实验室 · 京东方" },
    story: { en: "A surprise science powerhouse: home to a leading fusion experiment, world-class quantum research, and an aggressive state-investment model that turned a modest city into a deep-tech bet.", zh: "一座出人意料的科学重镇：拥有领先的聚变实验、世界级量子研究，以及一种激进的国资投资模式，把一座普通城市押成了硬科技赌注。" },
    talent: 76, capital: 70, science: 90, manufacturing: 72, energy: 76, compute: 70, education: 82, stability: 80, info: 60, accent: "#a99cff",
  },
  {
    key: "boston", name: { en: "Boston", zh: "波士顿" }, region: { en: "USA", zh: "美国" },
    x: 250, y: 195,
    specialties: { en: "biotech · robotics · academia · deep tech", zh: "生物技术 · 机器人 · 学术 · 硬科技" },
    anchors: { en: "MIT · Harvard · Moderna · Boston Dynamics", zh: "MIT · 哈佛 · Moderna · 波士顿动力" },
    story: { en: "The world's densest biotech and academic cluster. Where Silicon Valley owns software, Boston owns the harder sciences — life science, robotics, and the lab-to-startup pipeline around MIT.", zh: "全球最密集的生物技术与学术集群。硅谷主宰软件，波士顿则主宰更硬的科学——生命科学、机器人，以及环 MIT 的「实验室到创业」管线。" },
    talent: 90, capital: 86, science: 96, manufacturing: 45, energy: 58, compute: 80, education: 97, stability: 80, info: 88, accent: "#8b7cff",
  },
  {
    key: "tokyo", name: { en: "Tokyo", zh: "东京" }, region: { en: "Japan", zh: "日本" },
    x: 798, y: 220,
    specialties: { en: "robotics · precision · materials · gaming", zh: "机器人 · 精密制造 · 材料 · 游戏" },
    anchors: { en: "U-Tokyo · Sony · Toyota · Fanuc · Tokyo Electron", zh: "东京大学 · 索尼 · 丰田 · 发那科 · 东京电子" },
    story: { en: "A mature deep-manufacturing civilisation: industrial robots, precision components and the materials and equipment (like photoresist and TEL tools) that the whole chip world quietly depends on.", zh: "一座成熟的深度制造文明：工业机器人、精密零部件，以及整个芯片世界悄然依赖的材料与设备（如光刻胶与东京电子的工具）。" },
    talent: 84, capital: 82, science: 88, manufacturing: 90, energy: 64, compute: 74, education: 86, stability: 88, info: 80, accent: "#ff8acb",
  },
  {
    key: "seoul", name: { en: "Seoul", zh: "首尔" }, region: { en: "South Korea", zh: "韩国" },
    x: 778, y: 222,
    specialties: { en: "memory chips · displays · electronics · culture-tech", zh: "存储芯片 · 显示 · 电子 · 文化科技" },
    anchors: { en: "Samsung · SK Hynix · KAIST · Seoul National U", zh: "三星 · SK 海力士 · KAIST · 首尔大学" },
    story: { en: "A chaebol-driven hardware superpower: Samsung and SK Hynix together dominate the world's memory market, while a dense, hyper-connected society makes Korea a living lab for consumer tech.", zh: "由财阀驱动的硬件超级强国：三星与 SK 海力士共同主宰全球存储市场，而高度互联的密集社会，使韩国成为消费科技的活体实验室。" },
    talent: 82, capital: 80, science: 84, manufacturing: 94, energy: 66, compute: 80, education: 88, stability: 80, info: 86, accent: "#5fdcff",
  },
  {
    key: "taipei", name: { en: "Taipei · Hsinchu", zh: "台北 · 新竹" }, region: { en: "Taiwan", zh: "中国台湾" },
    x: 772, y: 262,
    specialties: { en: "advanced semiconductors · foundry · ODM", zh: "先进半导体 · 晶圆代工 · ODM" },
    anchors: { en: "TSMC · MediaTek · Hsinchu Science Park · NTU", zh: "台积电 · 联发科 · 新竹科学园 · 台大" },
    story: { en: "The single most strategically critical chip cluster on Earth. TSMC's most advanced fabs make the processors that power nearly all modern AI — a concentration that defines 21st-century geopolitics.", zh: "地球上战略上最关键的单一芯片集群。台积电最先进的晶圆厂，制造着驱动几乎所有现代 AI 的处理器——这一集中度，定义了 21 世纪的地缘政治。" },
    talent: 84, capital: 72, science: 86, manufacturing: 98, energy: 60, compute: 90, education: 84, stability: 62, info: 80, accent: "#38e1ff",
  },
  {
    key: "bangalore", name: { en: "Bangalore", zh: "班加罗尔" }, region: { en: "India", zh: "印度" },
    x: 690, y: 295,
    specialties: { en: "software services · SaaS · global R&D centres", zh: "软件服务 · SaaS · 全球研发中心" },
    anchors: { en: "Infosys · Flipkart · IISc · global GCC offices", zh: "Infosys · Flipkart · 印度科学院 · 跨国研发中心" },
    story: { en: "The world's IT-services and engineering-talent reservoir, increasingly a product-and-startup hub. Bangalore exports the engineers who run much of the planet's back-end software.", zh: "全球 IT 服务与工程人才的蓄水池，正日益转向产品与创业中心。班加罗尔输出着运行地球大半后端软件的工程师。" },
    talent: 88, capital: 70, science: 72, manufacturing: 48, energy: 50, compute: 70, education: 80, stability: 66, info: 78, accent: "#6ee7a8",
  },
  {
    key: "london", name: { en: "London", zh: "伦敦" }, region: { en: "UK", zh: "英国" },
    x: 470, y: 178,
    specialties: { en: "fintech · AI · capital markets · creative tech", zh: "金融科技 · AI · 资本市场 · 创意科技" },
    anchors: { en: "DeepMind · Imperial · UCL · Wayve · global VC", zh: "DeepMind · 帝国理工 · UCL · Wayve · 全球风投" },
    story: { en: "Europe's financial and AI capital: deep capital markets, world-class universities, and the home of DeepMind — proof that breakthrough AI research can grow outside the US.", zh: "欧洲的金融与 AI 之都：深厚的资本市场、世界级高校，以及 DeepMind 的故乡——证明突破性 AI 研究能在美国之外生长。" },
    talent: 88, capital: 92, science: 88, manufacturing: 38, energy: 56, compute: 78, education: 92, stability: 78, info: 92, accent: "#a99cff",
  },
  {
    key: "berlin", name: { en: "Berlin", zh: "柏林" }, region: { en: "Germany", zh: "德国" },
    x: 500, y: 172,
    specialties: { en: "startups · industrial AI · mobility · climate tech", zh: "创业 · 工业 AI · 出行 · 气候科技" },
    anchors: { en: "TU Berlin · Fraunhofer · SAP nearby · Mittelstand", zh: "柏林工大 · 弗劳恩霍夫 · 邻近 SAP · 隐形冠军企业" },
    story: { en: "Europe's startup playground, plugged into Germany's deep industrial and Mittelstand engineering base — strong in mobility, manufacturing software, and climate technology.", zh: "欧洲的创业游乐场，接入德国深厚的工业与「隐形冠军」工程基础——在出行、制造软件与气候科技上尤为强劲。" },
    talent: 80, capital: 72, science: 84, manufacturing: 78, energy: 60, compute: 66, education: 86, stability: 82, info: 82, accent: "#ffc35a",
  },
  {
    key: "singapore", name: { en: "Singapore", zh: "新加坡" }, region: { en: "Singapore", zh: "新加坡" },
    x: 728, y: 312,
    specialties: { en: "finance · fabs · biotech · regional HQ", zh: "金融 · 晶圆厂 · 生物技术 · 区域总部" },
    anchors: { en: "NUS · NTU · GlobalFoundries · A*STAR · sovereign funds", zh: "新国大 · 南洋理工 · 格芯 · A*STAR · 主权基金" },
    story: { en: "A city-state engineered as a hub: stable governance, sovereign capital, a major chip-fab presence, and the regional headquarters of choice for tech crossing into Asia.", zh: "一座被「设计」为枢纽的城邦：稳定治理、主权资本、重要的芯片制造布局，以及科技进入亚洲时首选的区域总部。" },
    talent: 82, capital: 90, science: 82, manufacturing: 74, energy: 60, compute: 78, education: 88, stability: 94, info: 90, accent: "#5fdcff",
  },
  {
    key: "telaviv", name: { en: "Tel Aviv", zh: "特拉维夫" }, region: { en: "Israel", zh: "以色列" },
    x: 560, y: 240,
    specialties: { en: "cybersecurity · defence tech · AI · chips", zh: "网络安全 · 国防科技 · AI · 芯片" },
    anchors: { en: "Technion · Weizmann · Mobileye · Unit 8200 alumni", zh: "以色列理工 · 魏茨曼 · Mobileye · 8200 部队校友" },
    story: { en: "The 'Startup Nation': an extraordinary density of founders per capita, fed by elite military intelligence units that act as a de-facto deep-tech academy in cyber, sensing and AI.", zh: "「创业之国」：人均创始人密度惊人，其源头是精英军事情报部队——它们在网络、传感与 AI 领域，事实上充当了一所硬科技学院。" },
    talent: 90, capital: 84, science: 88, manufacturing: 42, energy: 48, compute: 76, education: 88, stability: 58, info: 86, accent: "#ff5db1",
  },
  {
    key: "zurich", name: { en: "Zurich", zh: "苏黎世" }, region: { en: "Switzerland", zh: "瑞士" },
    x: 492, y: 188,
    specialties: { en: "robotics · AI research · precision · finance", zh: "机器人 · AI 研究 · 精密 · 金融" },
    anchors: { en: "ETH Zürich · Google Research · Disney Research · banks", zh: "苏黎世联邦理工 · 谷歌研究院 · 迪士尼研究 · 银行" },
    story: { en: "Small, rich, and scientifically dense: ETH Zürich anchors a cluster punching far above its size in robotics, computer vision and AI, backed by Swiss capital and stability.", zh: "小、富、且科学密集：苏黎世联邦理工锚定一个体量虽小却在机器人、计算机视觉与 AI 上远超其规模的集群，背靠瑞士的资本与稳定。" },
    talent: 86, capital: 84, science: 94, manufacturing: 56, energy: 62, compute: 74, education: 95, stability: 96, info: 84, accent: "#a99cff",
  },
];

/* ---------- Sections ---------- */
export type Section = { num: string; id: string; title: Bi; sub: Bi; body: Bi };
export const SECTIONS: Section[] = [
  { num: "01", id: "map", title: { en: "The Global Tech-Hub Map", zh: "全球科技中心地图" }, sub: { en: "Planetary innovation, as a network", zh: "行星级创新，作为一张网络" },
    body: { en: "Innovation is not spread evenly — it pools. A handful of city-regions concentrate the talent, capital, compute and supply chains of the entire species. Map them with their flows and the planet reveals a small number of glowing brains wired together by migration, money and silicon.", zh: "创新并非均匀铺开——它会汇聚。少数几个城市区域，集中了整个物种的人才、资本、算力与供应链。把它们连同流向一并绘出，地球便显现为少数几颗发光的大脑，由人才迁徙、资本与硅彼此连线。" } },
  { num: "02", id: "china", title: { en: "China's Multi-Core System", zh: "中国的多核系统" }, sub: { en: "Not one Silicon Valley, but a grid", zh: "不是一个硅谷，而是一张网格" },
    body: { en: "China did not build a single hub; it built a division of labour across cities. Beijing thinks, Shenzhen builds, Shanghai finances, Hangzhou connects, Hefei researches, Xi'an arms. The result is a multi-core technology civilisation that is resilient precisely because it is distributed.", zh: "中国没有建造单一的中心；它在城市之间建立了分工。北京思考，深圳制造，上海融资，杭州连接，合肥研究，西安铸器。其结果，是一种多核的科技文明——它之所以有韧性，恰因为它是分布式的。" } },
  { num: "03", id: "svalley", title: { en: "The Silicon Valley Civilisation", zh: "硅谷文明" }, sub: { en: "The cluster every hub copies", zh: "每个中心都在临摹的集群" },
    body: { en: "Stanford, defence money, venture capital, and a culture that celebrates the failed founder — Silicon Valley is less a place than an operating system for turning ideas into companies. Its real export is the playbook itself.", zh: "斯坦福、国防经费、风险投资，以及一种为失败创始人喝彩的文化——硅谷与其说是一个地方，不如说是把想法变成公司的一套操作系统。它真正的出口品，是这套打法本身。" } },
  { num: "04", id: "semiconductors", title: { en: "Semiconductor Geopolitics", zh: "半导体地缘政治" }, sub: { en: "The most contested supply chain on Earth", zh: "地球上争夺最激烈的供应链" },
    body: { en: "Modern civilisation runs on a chip supply chain so specialised that single companies hold choke-points: ASML for lithography, TSMC for advanced fabrication, NVIDIA for AI compute. To control the chip is to control the century.", zh: "现代文明运行于一条专业化到极致的芯片供应链之上，单个公司即扼住咽喉：光刻有 ASML，先进制造有台积电，AI 算力有英伟达。控制芯片，即控制这个世纪。" } },
  { num: "05", id: "universities", title: { en: "University & Talent Networks", zh: "大学与人才网络" }, sub: { en: "Civilisation's knowledge engines", zh: "文明的知识引擎" },
    body: { en: "Behind every hub is a small set of universities acting as talent reactors — recruiting the brightest, training them, and spinning them into founders and researchers. The map of elite universities is, with a lag, the map of future tech power.", zh: "每一个中心的背后，都有少数几所大学充当人才反应堆——招募最聪明的头脑、加以训练，再将他们裂变为创始人与研究者。精英大学的地图，滞后地，就是未来科技力量的地图。" } },
  { num: "06", id: "platforms", title: { en: "Internet & Platform Civilisation", zh: "互联网与平台文明" }, sub: { en: "When companies became infrastructure", zh: "当公司变成了基础设施" },
    body: { en: "Search, social, commerce, payments, compute — a handful of platforms now sit beneath daily life like roads and power once did. Google, Tencent, Alibaba, ByteDance, Meta, NVIDIA and OpenAI are no longer just companies; they are layers of civilisation's stack.", zh: "搜索、社交、电商、支付、算力——少数几个平台，如今像昔日的道路与电力一样，垫在日常生活之下。谷歌、腾讯、阿里、字节、Meta、英伟达与 OpenAI 已不再只是公司；它们是文明技术栈的层。" } },
  { num: "07", id: "military", title: { en: "Military & Technology", zh: "军事与技术" }, sub: { en: "How competition accelerates invention", zh: "竞争如何加速发明" },
    body: { en: "The internet, GPS, jet engines and much of modern computing began as defence projects. From DARPA to dual-use AI, geopolitical competition has always been one of the most powerful forcing functions in technological history — for better and worse.", zh: "互联网、GPS、喷气发动机，以及现代计算的大部分，都始于国防项目。从 DARPA 到军民两用 AI，地缘政治竞争始终是技术史上最强大的推力之一——亦祸亦福。" } },
  { num: "08", id: "cityos", title: { en: "City Operating Systems", zh: "城市操作系统" }, sub: { en: "A hub is an organism", zh: "中心，是一个有机体" },
    body: { en: "Read each hub as a machine: it ingests talent, processes it through universities and firms, exports products and patents, and dissipates as congestion and cost. Score the nine subsystems and the personality of each city becomes a shape you can compare.", zh: "把每个中心读作一台机器：它摄入人才，经由大学与企业加工，输出产品与专利，并以拥堵和成本耗散。给九个子系统打分，每座城市的性格便化为一个可比较的形状。" } },
  { num: "09", id: "future", title: { en: "Future Tech Centers", zh: "未来科技中心" }, sub: { en: "Who wins the next century", zh: "谁赢得下一个世纪" },
    body: { en: "The next hubs will be decided by who controls AI compute, clean energy, advanced manufacturing and the talent willing to move. Energy may become the binding constraint: a tech centre without gigawatts is a brain without blood.", zh: "下一批中心，将由谁掌控 AI 算力、清洁能源、先进制造，以及谁能吸引愿意迁徙的人才来决定。能源或将成为约束之绳：没有千兆瓦的科技中心，是一颗没有血液的大脑。" } },
  { num: "10", id: "index", title: { en: "The Civilisation Technology Index", zh: "文明科技指数" }, sub: { en: "A composite ranking of innovation power", zh: "创新力量的综合排名" },
    body: { en: "Combine the nine power dimensions into a single composite and the hubs sort into a planetary leaderboard. Sort by any dimension to see who leads on talent, who on manufacturing, who on raw compute — and how differently each civilisation concentrates its intelligence.", zh: "将九个力量维度合成单一综合分，各中心便排成一张行星级排行榜。按任意维度排序，便能看到谁在人才、谁在制造、谁在原始算力上领先——以及每种文明，如何以各异的方式集中其智能。" } },
];

/* ---------- Map flows ---------- */
export type Flow = { from: string; to: string; label: Bi; accent: string };
export const FLOWS: Flow[] = [
  { from: "taipei", to: "svalley", label: { en: "chips → AI compute", zh: "芯片 → AI 算力" }, accent: "#38e1ff" },
  { from: "shenzhen", to: "svalley", label: { en: "hardware supply", zh: "硬件供应" }, accent: "#4ade80" },
  { from: "bangalore", to: "svalley", label: { en: "engineering talent", zh: "工程人才" }, accent: "#6ee7a8" },
  { from: "beijing", to: "shenzhen", label: { en: "research → product", zh: "研究 → 产品" }, accent: "#ff5db1" },
  { from: "london", to: "svalley", label: { en: "AI research ties", zh: "AI 研究联系" }, accent: "#a99cff" },
  { from: "seoul", to: "taipei", label: { en: "memory ↔ logic", zh: "存储 ↔ 逻辑" }, accent: "#5fdcff" },
  { from: "tokyo", to: "taipei", label: { en: "materials & tools", zh: "材料与设备" }, accent: "#ff8acb" },
];

/* ---------- Index dimensions (meta-model) ---------- */
export const INDEX_DIMS: { key: keyof Hub; label: Bi; short: string }[] = [
  { key: "talent", label: { en: "Talent density", zh: "人才密度" }, short: "TAL" },
  { key: "capital", label: { en: "Capital concentration", zh: "资本集中" }, short: "CAP" },
  { key: "science", label: { en: "Scientific infrastructure", zh: "科研基础" }, short: "SCI" },
  { key: "manufacturing", label: { en: "Manufacturing capability", zh: "制造能力" }, short: "MFG" },
  { key: "energy", label: { en: "Energy systems", zh: "能源系统" }, short: "PWR" },
  { key: "compute", label: { en: "Compute power", zh: "算力" }, short: "CMP" },
  { key: "education", label: { en: "Education networks", zh: "教育网络" }, short: "EDU" },
  { key: "stability", label: { en: "Geopolitical stability", zh: "地缘稳定" }, short: "GEO" },
  { key: "info", label: { en: "Information flow", zh: "信息流通" }, short: "INF" },
];

/* ---------- Timeline ---------- */
export type Era = { year: string; title: Bi; note: Bi };
export const TIMELINE: Era[] = [
  { year: "1939", title: { en: "HP in a Palo Alto garage", zh: "惠普诞生于帕洛阿尔托车库" }, note: { en: "Stanford's Terman seeds the Valley's founder culture.", zh: "斯坦福的特曼播下硅谷的创始人文化。" } },
  { year: "1947", title: { en: "The transistor", zh: "晶体管" }, note: { en: "Bell Labs invents the switch all of modern tech is built on.", zh: "贝尔实验室发明了现代科技赖以构建的开关。" } },
  { year: "1958", title: { en: "DARPA founded", zh: "DARPA 成立" }, note: { en: "US defence research seeds the internet, GPS and more.", zh: "美国国防研究播下互联网、GPS 等的种子。" } },
  { year: "1980", title: { en: "Shenzhen SEZ", zh: "深圳经济特区" }, note: { en: "China opens a hardware lab the size of a city.", zh: "中国开辟出一座城市规模的硬件实验室。" } },
  { year: "1987", title: { en: "TSMC founded", zh: "台积电成立" }, note: { en: "The pure-play foundry model is born in Hsinchu.", zh: "纯代工模式诞生于新竹。" } },
  { year: "1998", title: { en: "Google · the platform era", zh: "谷歌 · 平台时代" }, note: { en: "Search, then social and commerce, become infrastructure.", zh: "搜索，继而社交与电商，成为基础设施。" } },
  { year: "2010", title: { en: "Mobile + cloud + China scale", zh: "移动 + 云 + 中国规模" }, note: { en: "Alibaba, Tencent and ByteDance build at population scale.", zh: "阿里、腾讯与字节，以人口规模建造。" } },
  { year: "2022", title: { en: "The AI compute era", zh: "AI 算力时代" }, note: { en: "NVIDIA GPUs + TSMC fabs become the contested core of power.", zh: "英伟达 GPU + 台积电晶圆厂，成为被争夺的权力核心。" } },
  { year: "2030 →", title: { en: "Energy-bound intelligence", zh: "受能源约束的智能" }, note: { en: "Gigawatts, not ideas, may set the pace of the next hubs.", zh: "决定下一批中心节奏的，或是千兆瓦，而非创意。" } },
];

/* ---------- Semiconductor supply chain ---------- */
export type ChainStep = { label: Bi; who: Bi; accent: string };
export const CHAIN: ChainStep[] = [
  { label: { en: "Silicon & materials", zh: "硅与材料" }, who: { en: "Japan · Germany — wafers, photoresist, gases", zh: "日本 · 德国——晶圆、光刻胶、特气" }, accent: "#ff8acb" },
  { label: { en: "Design (EDA + IP)", zh: "设计（EDA + IP）" }, who: { en: "USA · UK — Synopsys, Cadence, Arm, NVIDIA", zh: "美国 · 英国——新思、铿腾、Arm、英伟达" }, accent: "#38e1ff" },
  { label: { en: "Lithography", zh: "光刻" }, who: { en: "Netherlands — ASML EUV (a global monopoly)", zh: "荷兰——ASML 极紫外光刻（全球垄断）" }, accent: "#a99cff" },
  { label: { en: "Fabrication", zh: "制造" }, who: { en: "Taiwan · Korea — TSMC, Samsung advanced nodes", zh: "中国台湾 · 韩国——台积电、三星先进制程" }, accent: "#4ade80" },
  { label: { en: "Packaging & test", zh: "封装与测试" }, who: { en: "Taiwan · China · Malaysia — advanced packaging", zh: "中国台湾 · 中国大陆 · 马来西亚——先进封装" }, accent: "#ffc35a" },
  { label: { en: "AI compute clusters", zh: "AI 算力集群" }, who: { en: "USA · China · Gulf — hyperscale GPU datacentres", zh: "美国 · 中国 · 海湾——超大规模 GPU 数据中心" }, accent: "#5fdcff" },
];

/* ---------- Universities ---------- */
export type Uni = { name: Bi; hub: string; x: number; y: number; accent: string };
export const UNIS: Uni[] = [
  { name: { en: "Stanford", zh: "斯坦福" }, hub: "svalley", x: 90, y: 230, accent: "#38e1ff" },
  { name: { en: "MIT", zh: "麻省理工" }, hub: "boston", x: 200, y: 120, accent: "#8b7cff" },
  { name: { en: "Harvard", zh: "哈佛" }, hub: "boston", x: 270, y: 90, accent: "#8b7cff" },
  { name: { en: "Tsinghua", zh: "清华" }, hub: "beijing", x: 600, y: 110, accent: "#ff5db1" },
  { name: { en: "Peking U", zh: "北京大学" }, hub: "beijing", x: 660, y: 150, accent: "#ff5db1" },
  { name: { en: "USTC", zh: "中科大" }, hub: "hefei", x: 640, y: 250, accent: "#a99cff" },
  { name: { en: "U-Tokyo", zh: "东京大学" }, hub: "tokyo", x: 720, y: 130, accent: "#ff8acb" },
  { name: { en: "KAIST", zh: "KAIST" }, hub: "seoul", x: 700, y: 210, accent: "#5fdcff" },
  { name: { en: "NUS", zh: "新加坡国大" }, hub: "singapore", x: 560, y: 300, accent: "#5fdcff" },
  { name: { en: "ETH Zürich", zh: "苏黎世联邦理工" }, hub: "zurich", x: 380, y: 170, accent: "#a99cff" },
  { name: { en: "Cambridge", zh: "剑桥" }, hub: "london", x: 340, y: 110, accent: "#a99cff" },
  { name: { en: "Technion", zh: "以色列理工" }, hub: "telaviv", x: 470, y: 250, accent: "#ff5db1" },
];
