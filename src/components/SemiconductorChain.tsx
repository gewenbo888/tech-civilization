"use client";

import { useState } from "react";
import { CHAIN } from "./content";
import { useLang } from "./lang";

/** Linear supply-chain flow: each stage a choke-point held by a few players. */
export default function SemiconductorChain() {
  const { lang } = useLang();
  const [active, setActive] = useState(2); // ASML lithography — the famous monopoly

  return (
    <div className="rounded-xl border border-cyan-500/12 bg-term-900/60 p-5 md:p-7">
      <svg viewBox="0 0 920 150" className="block w-full">
        {CHAIN.map((s, i) => {
          const x = 30 + i * 148;
          const on = i === active;
          return (
            <g key={i} onMouseEnter={() => setActive(i)} style={{ cursor: "pointer" }}>
              {i < CHAIN.length - 1 && (
                <line x1={x + 110} y1="60" x2={x + 148} y2="60" stroke={s.accent} strokeWidth="2" className="flow" />
              )}
              <rect x={x} y="30" width="110" height="60" rx="8" fill={on ? `${s.accent}22` : "#0f1422"} stroke={s.accent} strokeWidth={on ? 2 : 1} />
              <text x={x + 55} y="56" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill={s.accent}>
                {String(i + 1).padStart(2, "0")}
              </text>
              <text x={x + 55} y="74" textAnchor="middle" fontFamily="Space Grotesk" fontSize="10" fill="#d2dcea">
                <tspan className={lang === "zh" ? "zh" : ""}>{s.label[lang].length > 11 ? s.label[lang].slice(0, 10) + "…" : s.label[lang]}</tspan>
              </text>
            </g>
          );
        })}
      </svg>

      <div key={`${active}-${lang}`} className="lang-fade mt-4 rounded-lg border border-cyan-500/10 bg-term-800/60 p-4">
        <div className="label-mono" style={{ color: CHAIN[active].accent }}>
          {String(active + 1).padStart(2, "0")} · <span className={lang === "zh" ? "zh" : ""}>{CHAIN[active].label[lang]}</span>
        </div>
        <p className={`mt-1 text-sm text-slatey-200 ${lang === "zh" ? "zh" : ""}`}>{CHAIN[active].who[lang]}</p>
      </div>

      <p key={`note-${lang}`} className={`lang-fade mt-3 text-xs text-slatey-500 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "每个环节都是一处咽喉：少数公司或地区掌握着不可替代的能力。这条链的脆弱，正是 21 世纪地缘政治的核心。"
          : "Every stage is a choke-point: a few firms or regions hold irreplaceable capability. The fragility of this chain is the core of 21st-century geopolitics."}
      </p>
    </div>
  );
}
