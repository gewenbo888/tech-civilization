"use client";

import { useState } from "react";
import { HUBS, INDEX_DIMS, Hub } from "./content";
import { useLang } from "./lang";

/** Per-city 9-axis radar — "City Operating System" comparison. Supports overlaying two cities. */
export default function CityRadar() {
  const { lang } = useLang();
  const [a, setA] = useState("svalley");
  const [b, setB] = useState("shenzhen");
  const dims = INDEX_DIMS;
  const n = dims.length;
  const cx = 220, cy = 220, R = 165;

  const hubA = HUBS.find((h) => h.key === a)!;
  const hubB = HUBS.find((h) => h.key === b)!;

  const pt = (i: number, val: number) => {
    const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
    const r = (val / 100) * R;
    return [cx + Math.cos(ang) * r, cy + Math.sin(ang) * r];
  };
  const poly = (h: Hub) => dims.map((d, i) => pt(i, h[d.key] as number).join(",")).join(" ");

  return (
    <div className="rounded-xl border border-cyan-500/12 bg-term-900/60 p-5 md:p-7">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: hubA.accent }} />
          <select value={a} onChange={(e) => setA(e.target.value)} className="rounded border border-cyan-500/20 bg-term-700 px-2 py-1 font-mono text-xs text-slatey-100">
            {HUBS.map((h) => <option key={h.key} value={h.key}>{h.name[lang]}</option>)}
          </select>
        </div>
        <span className="font-mono text-xs text-slatey-500">vs</span>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: hubB.accent }} />
          <select value={b} onChange={(e) => setB(e.target.value)} className="rounded border border-cyan-500/20 bg-term-700 px-2 py-1 font-mono text-xs text-slatey-100">
            {HUBS.map((h) => <option key={h.key} value={h.key}>{h.name[lang]}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[440px_1fr]">
        <svg viewBox="0 0 440 440" className="block w-full">
          {[0.25, 0.5, 0.75, 1].map((f, i) => (
            <polygon key={i} points={dims.map((_, j) => {
              const ang = (j / n) * Math.PI * 2 - Math.PI / 2;
              return [cx + Math.cos(ang) * R * f, cy + Math.sin(ang) * R * f].join(",");
            }).join(" ")} fill="none" stroke="#161d2e" strokeWidth="0.8" />
          ))}
          {dims.map((d, i) => {
            const ang = (i / n) * Math.PI * 2 - Math.PI / 2;
            const ex = cx + Math.cos(ang) * R, ey = cy + Math.sin(ang) * R;
            const lx = cx + Math.cos(ang) * (R + 22), ly = cy + Math.sin(ang) * (R + 22);
            return (
              <g key={i}>
                <line x1={cx} y1={cy} x2={ex} y2={ey} stroke="#0f1422" strokeWidth="0.8" />
                <text x={lx} y={ly} textAnchor={Math.abs(Math.cos(ang)) < 0.3 ? "middle" : Math.cos(ang) > 0 ? "start" : "end"} dominantBaseline="middle" fontFamily="JetBrains Mono" fontSize="8" fill="#6b7c95">
                  <tspan className={lang === "zh" ? "zh" : ""}>{d.label[lang]}</tspan>
                </text>
              </g>
            );
          })}
          <polygon points={poly(hubB)} fill={hubB.accent} fillOpacity="0.12" stroke={hubB.accent} strokeWidth="1.8" />
          <polygon points={poly(hubA)} fill={hubA.accent} fillOpacity="0.14" stroke={hubA.accent} strokeWidth="1.8" />
        </svg>

        <div>
          <div className="label-mono">{lang === "zh" ? "九维子系统对比" : "Nine-subsystem comparison"}</div>
          <div className="mt-4 space-y-1.5">
            {dims.map((d) => {
              const va = hubA[d.key] as number, vb = hubB[d.key] as number;
              return (
                <div key={String(d.key)} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-b border-cyan-500/8 pb-1">
                  <span className={`font-mono text-[0.62rem] text-slatey-300 ${lang === "zh" ? "zh" : ""}`}>{d.label[lang]}</span>
                  <span className="data-mono text-xs" style={{ color: hubA.accent }}>{va}</span>
                  <span className="data-mono text-xs" style={{ color: hubB.accent }}>{vb}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
