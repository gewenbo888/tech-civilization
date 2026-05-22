"use client";

import { TIMELINE } from "./content";
import { useLang } from "./lang";

export default function Timeline() {
  const { lang } = useLang();
  return (
    <div className="relative">
      <div className="absolute left-[60px] top-1 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-500 via-viol-500 to-mag-500 opacity-50 md:left-[72px]" />
      <div className="space-y-7">
        {TIMELINE.map((e, i) => (
          <div key={i} className="grid grid-cols-[52px_24px_1fr] items-start gap-3 md:grid-cols-[64px_24px_1fr] md:gap-4">
            <div className="text-right data-mono text-xs text-cyan-400">{e.year}</div>
            <div className="relative mt-1.5 h-3 w-3">
              <div className="absolute inset-0 rounded-full bg-cyan-500 pulse" />
              <div className="absolute inset-[3px] rounded-full bg-slatey-50" />
            </div>
            <div key={lang} className="lang-fade">
              <div className={`display text-lg text-slatey-50 ${lang === "zh" ? "zh" : ""}`}>{e.title[lang]}</div>
              <div className={`mt-0.5 text-sm leading-relaxed text-slatey-300 ${lang === "zh" ? "zh" : ""}`}>{e.note[lang]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
