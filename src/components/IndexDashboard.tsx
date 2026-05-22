"use client";

import { useState } from "react";
import { HUBS, INDEX_DIMS, Hub } from "./content";
import { useLang } from "./lang";

/** Bloomberg-terminal-style sortable leaderboard. Composite = mean of 9 dims. */
export default function IndexDashboard() {
  const { lang } = useLang();
  const [sort, setSort] = useState<keyof Hub | "composite">("composite");

  const composite = (h: Hub) =>
    INDEX_DIMS.reduce((s, d) => s + (h[d.key] as number), 0) / INDEX_DIMS.length;

  const rows = [...HUBS].sort((a, b) => {
    if (sort === "composite") return composite(b) - composite(a);
    return (b[sort] as number) - (a[sort] as number);
  });
  const max = sort === "composite" ? 100 : 100;

  return (
    <div className="overflow-hidden rounded-xl border border-cyan-500/12 bg-term-900/70">
      {/* terminal header */}
      <div className="flex items-center justify-between border-b border-cyan-500/12 px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-[0.62rem] text-slatey-500">
          <span className="h-2 w-2 rounded-full bg-sig-500 blink" />
          {lang === "zh" ? "文明科技指数 · 综合估算（编辑性，非实时数据）" : "CIV-TECH INDEX · composite estimates (editorial, not live data)"}
        </div>
        <div className="data-mono text-[0.62rem] text-cyan-400">{rows.length} HUBS</div>
      </div>

      {/* sort chips */}
      <div className="flex flex-wrap gap-1.5 border-b border-cyan-500/10 px-4 py-3">
        <button
          onClick={() => setSort("composite")}
          className={`rounded px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider transition ${sort === "composite" ? "bg-cyan-500 text-term-900" : "bg-term-700 text-slatey-300 hover:text-cyan-300"}`}
        >
          {lang === "zh" ? "综合" : "Composite"}
        </button>
        {INDEX_DIMS.map((d) => (
          <button
            key={String(d.key)}
            onClick={() => setSort(d.key)}
            title={d.label[lang]}
            className={`rounded px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider transition ${sort === d.key ? "bg-cyan-500 text-term-900" : "bg-term-700 text-slatey-300 hover:text-cyan-300"}`}
          >
            {d.short}
          </button>
        ))}
      </div>

      {/* rows */}
      <div className="divide-y divide-cyan-500/8">
        {rows.map((h, i) => {
          const v = sort === "composite" ? composite(h) : (h[sort] as number);
          return (
            <div key={h.key} className="grid grid-cols-[28px_1.4fr_3fr_56px] items-center gap-3 px-4 py-2.5 transition hover:bg-term-700/40">
              <span className="data-mono text-xs text-slatey-500">{String(i + 1).padStart(2, "0")}</span>
              <div className="min-w-0">
                <span key={lang} className={`block truncate text-sm text-slatey-50 lang-fade ${lang === "zh" ? "zh" : ""}`}>{h.name[lang]}</span>
                <span key={`r-${lang}`} className={`block truncate font-mono text-[0.58rem] text-slatey-500 ${lang === "zh" ? "zh" : ""}`}>{h.region[lang]}</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-sm bg-term-600">
                <div className="h-full rounded-sm" style={{ width: `${(v / max) * 100}%`, background: `linear-gradient(90deg, ${h.accent}55, ${h.accent})`, boxShadow: `0 0 10px ${h.accent}66` }} />
              </div>
              <span className="data-mono text-right text-sm" style={{ color: h.accent }}>{v.toFixed(1)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
