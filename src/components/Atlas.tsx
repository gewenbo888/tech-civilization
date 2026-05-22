"use client";

import { ReactNode } from "react";
import { LangProvider, LangToggle, T, useLang } from "./lang";
import { SECTIONS } from "./content";
import NetworkCanvas from "./NetworkCanvas";
import TechHubMap from "./TechHubMap";
import HubGallery from "./HubGallery";
import IndexDashboard from "./IndexDashboard";
import CityRadar from "./CityRadar";
import SemiconductorChain from "./SemiconductorChain";
import TalentNetwork from "./TalentNetwork";
import Timeline from "./Timeline";

const VIS: Record<string, ReactNode> = {
  map: <TechHubMap />,
  semiconductors: <SemiconductorChain />,
  universities: <TalentNetwork />,
  cityos: <CityRadar />,
  index: <IndexDashboard />,
};

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-cyan-500/12 bg-term-950/80 px-5 py-3 backdrop-blur md:px-9">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-md border border-cyan-500/30 bg-term-800">
          <span className="display text-cyan-400">⌬</span>
        </div>
        <div className="leading-tight">
          <div className="display text-base text-slatey-50">Tech Civilization Atlas</div>
          <div className="zh text-[0.6rem] text-slatey-500">科技文明图谱</div>
        </div>
      </div>
      <nav className="hidden gap-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-slatey-500 lg:flex">
        <a href="#map" className="hover:text-cyan-300">Map</a>
        <a href="#china" className="hover:text-cyan-300">China</a>
        <a href="#semiconductors" className="hover:text-cyan-300">Chips</a>
        <a href="#universities" className="hover:text-cyan-300">Talent</a>
        <a href="#cityos" className="hover:text-cyan-300">City OS</a>
        <a href="#index" className="hover:text-cyan-300">Index</a>
      </nav>
      <div className="flex items-center gap-3">
        <LangToggle />
        <a href="https://psyverse.fun" className="hidden font-mono text-[0.6rem] uppercase tracking-[0.18em] text-viol-400 hover:text-cyan-300 sm:block">← Psyverse</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 z-0 opacity-90"><NetworkCanvas /></div>
      <div className="pointer-events-none absolute inset-0 z-10 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-term-950/30 via-transparent to-term-950" />
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 md:px-12">
        <div className="label-mono">Psyverse · Planetary innovation atlas</div>
        <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-slatey-500">
          EN · 中文 · cities × capital × semiconductors × talent × compute × geopolitics
        </div>
        <h1 className="display mt-6 text-5xl leading-[0.98] text-slatey-50 md:text-8xl">
          Tech Civilization <span className="hud-text">Atlas</span>
        </h1>
        <h2 className="zh mt-3 text-3xl text-slatey-200 md:text-5xl">科技文明图谱</h2>

        <p className="mt-9 max-w-2xl text-lg leading-relaxed text-slatey-100 md:text-xl">
          <T v={{
            en: "Innovation does not spread evenly — it pools. A handful of city-regions concentrate the talent, capital, compute and supply chains of an entire species into glowing brains, wired together by migration, money and silicon.",
            zh: "创新并非均匀铺开——它会汇聚。少数几个城市区域，把整个物种的人才、资本、算力与供应链，凝聚成一颗颗发光的大脑，再由人才迁徙、资本与硅彼此连线。",
          }} />
        </p>

        <div className="mt-10 max-w-2xl glass rounded-lg p-6">
          <div className="label-mono">Central thesis · 核心论点</div>
          <p className="mt-3 display text-xl leading-snug text-slatey-50 md:text-2xl">
            <T v={{
              en: "Technology centers are modern civilisation's brains — intelligence concentrated into geographic form.",
              zh: "科技中心，是现代文明的大脑——被压缩成地理形态的智能。",
            }} />
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-slatey-500">
          <span>10 systems · 十大系统</span>
          <span>16 hubs · 十六中心</span>
          <span>9-axis power index · 九维力量指数</span>
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ num, id, title, sub, body, vis }: { num: string; id: string; title: any; sub: any; body: any; vis?: ReactNode; }) {
  return (
    <section id={id} className="relative border-t border-cyan-500/8 px-6 py-24 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-baseline gap-4">
          <span className="display text-5xl text-cyan-500/25">{num}</span>
          <div>
            <h2 className="display text-3xl text-slatey-50 md:text-5xl"><T v={title} /></h2>
            <h3 className="mt-1 text-lg text-viol-400"><T v={sub} /></h3>
          </div>
        </div>
        <div className="mt-5 h-px rule-hud opacity-50" />
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slatey-200"><T v={body} /></p>
        {vis && <div className="mt-12">{vis}</div>}
      </div>
    </section>
  );
}

function ConceptPanels({ id }: { id: string }) {
  const { lang } = useLang();
  const SETS: Record<string, { t: [string, string]; d: [string, string] }[]> = {
    china: [
      { t: ["Beijing · brain", "北京 · 大脑"], d: ["AI research, policy and fundamental science set the national direction.", "AI 研究、政策与基础科学，确立国家方向。"] },
      { t: ["Shenzhen · hands", "深圳 · 双手"], d: ["The densest hardware supply chain on Earth turns ideas into products.", "地球上最密集的硬件供应链，把想法变成产品。"] },
      { t: ["Shanghai · heart", "上海 · 心脏"], d: ["Finance, chips and biotech pump capital through the system.", "金融、芯片与生物技术，向系统泵送资本。"] },
      { t: ["Hangzhou + Hefei", "杭州 + 合肥"], d: ["Digital economy and deep science — distributed cores, not one capital.", "数字经济与深度科学——多核分布，而非单一首都。"] },
    ],
    svalley: [
      { t: ["Stanford engine", "斯坦福引擎"], d: ["A university deliberately wired to spin faculty and students into companies.", "一所被刻意接线、把师生裂变为公司的大学。"] },
      { t: ["Venture capital", "风险投资"], d: ["Capital that prices risk on upside, not collateral — and re-invests exits.", "一种以上行潜力而非抵押物为风险定价、并把退出再投资的资本。"] },
      { t: ["Failure culture", "失败文化"], d: ["A social system that treats a failed startup as a credential, not a stain.", "一种把失败创业当作资历而非污点的社会系统。"] },
      { t: ["The exported playbook", "被输出的打法"], d: ["The Valley's real product is the operating system other hubs install.", "硅谷真正的产品，是其他中心安装的那套操作系统。"] },
    ],
    platforms: [
      { t: ["Search & social", "搜索与社交"], d: ["Google and Meta became the indexing and identity layers of daily life.", "谷歌与 Meta 成为日常生活的索引层与身份层。"] },
      { t: ["China super-apps", "中国超级应用"], d: ["Tencent and Alibaba fused chat, payments and commerce into one fabric.", "腾讯与阿里，把聊天、支付与电商熔为一张织物。"] },
      { t: ["Attention engines", "注意力引擎"], d: ["ByteDance turned recommendation into the most powerful media format yet.", "字节把推荐，变成了迄今最强大的媒体形态。"] },
      { t: ["The compute layer", "算力层"], d: ["NVIDIA and OpenAI now sit beneath the AI economy like a utility.", "英伟达与 OpenAI，如今像公用事业一样垫在 AI 经济之下。"] },
    ],
    military: [
      { t: ["DARPA model", "DARPA 模式"], d: ["High-risk public research seeded the internet, GPS and autonomy.", "高风险的公共研究，播下互联网、GPS 与自主系统的种子。"] },
      { t: ["Dual-use", "军民两用"], d: ["The line between civilian and defence AI, drones and chips has blurred.", "民用与国防的 AI、无人机与芯片之间的界线，已然模糊。"] },
      { t: ["Space & satellites", "太空与卫星"], d: ["Orbit became infrastructure: comms, sensing, navigation, and now compute.", "轨道成为基础设施：通信、传感、导航，乃至如今的算力。"] },
      { t: ["The forcing function", "强制函数"], d: ["Geopolitical rivalry remains one of history's strongest accelerants.", "地缘对抗，始终是历史上最强的加速剂之一。"] },
    ],
    future: [
      { t: ["Compute gravity", "算力引力"], d: ["Hubs will form around whoever can secure AI chips at scale.", "中心将围绕「谁能规模化锁定 AI 芯片」而形成。"] },
      { t: ["Energy as the limit", "能源即上限"], d: ["A data-centre needs gigawatts; power, not talent, may bind growth.", "数据中心需要千兆瓦；约束增长的，或是电力而非人才。"] },
      { t: ["New entrants", "新入局者"], d: ["Gulf capital, Indian scale, and climate-stable geographies are rising.", "海湾资本、印度规模与气候稳定的地理，正在崛起。"] },
      { t: ["Decline is real", "衰落是真实的"], d: ["Hubs can ossify — high cost, low risk-appetite, and brain drain undo them.", "中心也会僵化——高成本、低风险偏好与人才外流，足以瓦解它们。"] },
    ],
  };
  const set = SETS[id];
  if (!set) return null;
  return (
    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {set.map((c, i) => (
        <div key={i} className="glass rounded-xl p-5">
          <div key={lang} className={`display text-lg text-cyan-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.t[lang === "zh" ? 1 : 0]}</div>
          <p key={`d-${lang}`} className={`mt-2 text-sm leading-relaxed text-slatey-300 lang-fade ${lang === "zh" ? "zh" : ""}`}>{c.d[lang === "zh" ? 1 : 0]}</p>
        </div>
      ))}
    </div>
  );
}

function sectionProps(id: string) {
  const s = SECTIONS.find((x) => x.id === id)!;
  return { num: s.num, id: s.id, title: s.title, sub: s.sub, body: s.body };
}

function Body() {
  const { lang } = useLang();
  return (
    <main className="relative bg-term-950 text-slatey-100">
      <Header />
      <Hero />

      <div className="border-y border-cyan-500/12 bg-term-900/60 py-2.5 overflow-hidden">
        <div className="whitespace-nowrap data-mono text-[0.65rem] uppercase tracking-[0.3em] text-cyan-400/80">
          {(lang === "zh"
            ? "硅谷 · 北京 · 深圳 · 上海 · 杭州 · 台北 · 首尔 · 东京 · 波士顿 · 伦敦 · 班加罗尔 · 特拉维夫 · 苏黎世 · 新加坡 · 柏林 · 科技中心是文明的大脑 · "
            : "SILICON VALLEY · BEIJING · SHENZHEN · SHANGHAI · HANGZHOU · TAIPEI · SEOUL · TOKYO · BOSTON · LONDON · BANGALORE · TEL AVIV · ZURICH · SINGAPORE · BERLIN · TECH HUBS ARE CIVILISATION'S BRAINS · ").repeat(2)}
        </div>
      </div>

      {/* 01 map */}
      <SectionBlock {...sectionProps("map")} vis={VIS.map} />

      {/* hub gallery */}
      <section id="hubs" className="relative border-t border-cyan-500/8 px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="label-mono">The hubs · 中心档案</div>
          <h2 className="display mt-3 text-3xl text-slatey-50 md:text-5xl">
            <T v={{ en: "Sixteen brains of the technological world", zh: "技术世界的十六颗大脑" }} />
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slatey-200">
            <T v={{
              en: "Each hub carries a specialty, a set of anchor institutions, and a composite power score across nine dimensions. Open one to read why it matters.",
              zh: "每个中心都带着一项专长、一组支柱机构，以及横跨九个维度的综合力量分。展开任意一个，读懂它为何重要。",
            }} />
          </p>
          <div className="mt-12"><HubGallery /></div>
        </div>
      </section>

      {/* 02–10 */}
      {SECTIONS.filter((s) => s.id !== "map").map((s) => (
        <SectionBlock key={s.id} {...sectionProps(s.id)} vis={VIS[s.id] ?? <ConceptPanels id={s.id} />} />
      ))}

      {/* Closing */}
      <section className="relative border-t border-cyan-500/8 px-6 py-32 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="display text-3xl leading-snug text-slatey-50 md:text-6xl">
            <T v={{
              en: "The history of technology centers is the history of civilisation concentrating intelligence into geographic form.",
              zh: "科技中心的历史，就是文明把智能压缩成地理形态的历史。",
            }} />
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slatey-300">
            <T v={{
              en: "Technology centers are not random cities. They are concentrated intelligence systems where knowledge, capital, manufacturing, energy, computation and talent combine into engines capable of reshaping the future — and, when they ossify, of being overtaken.",
              zh: "科技中心并非随机的城市。它们是被集中的智能系统——知识、资本、制造、能源、计算与人才在此组合成足以重塑未来的引擎；而当它们僵化，也终将被超越。",
            }} />
          </p>
          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-viol-500/25 bg-term-900/60 p-5">
            <p className="text-xs leading-relaxed text-slatey-500">
              <T v={{
                en: "The Civilisation Technology Index is an editorial composite of public-domain knowledge — illustrative estimates for comparison, not live measurements or investment guidance.",
                zh: "「文明科技指数」是基于公共知识的编辑性综合估算——用于比较的示意值，并非实时测量或投资建议。",
              }} />
            </p>
          </div>
          <div className="mx-auto mt-12 h-px w-40 rule-hud" />
          <p className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-viol-400/70">
            Tech Civilization Atlas · 科技文明图谱 · Psyverse · 2026
          </p>
        </div>
      </section>

      <footer className="border-t border-cyan-500/12 bg-term-950 px-6 py-16 md:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <div className="display text-xl text-slatey-50">Tech Civilization Atlas</div>
            <div className="zh mt-1 text-sm text-slatey-300">科技文明图谱</div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slatey-500">
              <T v={{ en: "The global evolution of technology centers, innovation cities and scientific power.", zh: "全球科技中心、创新城市与科学力量的演化。" }} />
            </p>
          </div>
          <div>
            <div className="label-mono">Systems · 系统</div>
            <ul className="mt-4 space-y-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-slatey-500">
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.id}><a href={`#${s.id}`} className="hover:text-cyan-300">{s.num} · <T v={s.title} /></a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-mono">Companion archives</div>
            <ul className="mt-4 space-y-1.5 text-sm text-slatey-300">
              <li><a href="https://chip-war-atlas.psyverse.fun" className="hover:text-cyan-300">Chip War Atlas · 芯片战争</a></li>
              <li><a href="https://shenzhen-vs-seoul.psyverse.fun" className="hover:text-cyan-300">Shenzhen vs Seoul · 深圳vs首尔</a></li>
              <li><a href="https://innovation-engines.psyverse.fun" className="hover:text-cyan-300">Innovation Engines · 创新引擎</a></li>
              <li className="pt-3"><a href="https://psyverse.fun" className="text-viol-400 hover:text-cyan-300">↩ All Psyverse archives</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 h-px max-w-7xl rule-hud" />
        <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-[0.58rem] uppercase tracking-[0.3em] text-slatey-500">
          <div>© 2026 Gewenbo · Psyverse</div>
          <div>EN · 中文 · editorial composite</div>
        </div>
      </footer>
    </main>
  );
}

export default function Atlas() {
  return (
    <LangProvider>
      <Body />
    </LangProvider>
  );
}
