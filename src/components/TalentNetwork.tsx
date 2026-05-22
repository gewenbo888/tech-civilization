"use client";

import { useState } from "react";
import { UNIS } from "./content";
import { useLang } from "./lang";

/** University talent-reactor graph: nodes = elite universities, edges = talent/research ties. */
const EDGES: [number, number][] = [
  [0, 1], [0, 3], [1, 2], [1, 9], [3, 4], [3, 5], [3, 6], [6, 7], [4, 8], [9, 10], [0, 11], [11, 3], [1, 0], [10, 9], [7, 8],
];

export default function TalentNetwork() {
  const { lang } = useLang();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="grid-bg overflow-hidden rounded-xl border border-cyan-500/12 bg-term-900/60 p-3 md:p-5">
      <svg viewBox="0 0 760 380" className="block w-full">
        {EDGES.map(([i, j], k) => {
          const a = UNIS[i], b = UNIS[j];
          const on = hover === i || hover === j;
          return <line key={k} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={on ? "#5fdcff" : "#1f2940"} strokeWidth={on ? 1.6 : 0.9} opacity={on ? 0.9 : 0.6} className={on ? "flow" : ""} />;
        })}
        {UNIS.map((u, i) => {
          const on = hover === i;
          return (
            <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor: "pointer" }}>
              <circle cx={u.x} cy={u.y} r={on ? 16 : 9} fill={u.accent} opacity="0.16" />
              <circle cx={u.x} cy={u.y} r={on ? 6 : 4.5} fill={u.accent}>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
              </circle>
              <text x={u.x} y={u.y - 13} textAnchor="middle" fontFamily="JetBrains Mono" fontSize="9" fill="#d2dcea" opacity={on ? 1 : 0.78}>
                {u.name[lang]}
              </text>
            </g>
          );
        })}
      </svg>
      <p key={lang} className={`lang-fade mt-2 px-1 text-xs text-slatey-500 ${lang === "zh" ? "zh" : ""}`}>
        {lang === "zh"
          ? "节点为精英大学，连线为人才与研究的流动。每个科技中心背后，都站着少数几座「人才反应堆」。"
          : "Nodes are elite universities; edges are talent and research ties. Behind every hub stand a few 'talent reactors'."}
      </p>
    </div>
  );
}
