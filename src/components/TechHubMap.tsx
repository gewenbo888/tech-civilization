"use client";

import { useState } from "react";
import { HUBS, FLOWS } from "./content";
import { useLang } from "./lang";

/** Planetary tech-hub map: graticule + hub nodes (sized by composite score) + flow arcs. */
export default function TechHubMap() {
  const { lang } = useLang();
  const [hover, setHover] = useState<string | null>(null);
  const byId = Object.fromEntries(HUBS.map((hb) => [hb.key, hb]));
  const score = (h: typeof HUBS[number]) =>
    (h.talent + h.capital + h.science + h.manufacturing + h.energy + h.compute + h.education + h.stability + h.info) / 9;

  const arc = (ax: number, ay: number, bx: number, by: number) => {
    const mx = (ax + bx) / 2, my = (ay + by) / 2 - Math.hypot(bx - ax, by - ay) * 0.24;
    return `M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`;
  };

  return (
    <div className="grid-bg overflow-hidden rounded-xl border border-cyan-500/12 bg-term-900/60 p-3 md:p-5">
      <svg viewBox="0 0 900 460" className="block w-full">
        <g stroke="#161d2e" strokeWidth="0.6" opacity="0.7">
          {Array.from({ length: 10 }).map((_, i) => <line key={`v${i}`} x1={(i + 1) * 82} y1="0" x2={(i + 1) * 82} y2="460" />)}
          {Array.from({ length: 6 }).map((_, i) => <line key={`h${i}`} x1="0" y1={(i + 1) * 66} x2="900" y2={(i + 1) * 66} />)}
        </g>

        {FLOWS.map((f, i) => {
          const a = byId[f.from], b = byId[f.to];
          if (!a || !b) return null;
          const on = hover === f.from || hover === f.to;
          return <path key={i} d={arc(a.x, a.y, b.x, b.y)} fill="none" stroke={f.accent} strokeWidth={on ? 2.2 : 1} opacity={on ? 0.95 : 0.38} className="flow" />;
        })}

        {HUBS.map((hb) => {
          const on = hover === hb.key;
          const s = score(hb);
          const r = 4 + (s / 100) * 7;
          return (
            <g key={hb.key} onMouseEnter={() => setHover(hb.key)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer" }}>
              <circle cx={hb.x} cy={hb.y} r={on ? r + 10 : r + 4} fill={hb.accent} opacity="0.14" />
              <circle cx={hb.x} cy={hb.y} r={on ? r + 2 : r} fill={hb.accent}>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <text x={hb.x} y={hb.y - r - 7} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9.5" fill="#d2dcea" opacity={on ? 1 : 0.72}>
                {hb.name[lang]}
              </text>
              {on && (
                <text x={hb.x} y={hb.y + r + 14} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8.5" fill={hb.accent}>
                  {(lang === "zh" ? "指数 " : "INDEX ") + Math.round(s)}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 px-1 font-mono text-[0.6rem] text-slatey-300">
        {FLOWS.map((f, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: f.accent }} />
            {f.label[lang]}
          </span>
        ))}
      </div>
    </div>
  );
}
