"use client";

import { useState } from "react";
import { HUBS, INDEX_DIMS } from "./content";
import { useLang } from "./lang";

export default function HubGallery() {
  const { lang } = useLang();
  const [open, setOpen] = useState<string | null>(HUBS[0].key);
  const composite = (h: typeof HUBS[number]) => INDEX_DIMS.reduce((s, d) => s + (h[d.key] as number), 0) / INDEX_DIMS.length;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {HUBS.map((h) => {
        const isOpen = open === h.key;
        return (
          <article key={h.key} className="glass overflow-hidden rounded-xl transition-all" style={{ borderColor: isOpen ? `${h.accent}55` : undefined }}>
            <button onClick={() => setOpen(isOpen ? null : h.key)} className="flex w-full items-center gap-4 p-5 text-left">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border" style={{ borderColor: `${h.accent}44`, background: "radial-gradient(circle, rgba(15,20,34,0.9), rgba(6,9,15,1))" }}>
                <span className="data-mono text-xl" style={{ color: h.accent }}>{Math.round(composite(h))}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="display text-2xl text-slatey-50">
                    <span key={lang} className={lang === "zh" ? "zh" : ""}>{h.name[lang]}</span>
                  </h3>
                  <span key={`rg-${lang}`} className={`font-mono text-[0.6rem] text-slatey-500 ${lang === "zh" ? "zh" : ""}`}>{h.region[lang]}</span>
                </div>
                <div key={`s-${lang}`} className={`mt-0.5 text-sm text-slatey-300 ${lang === "zh" ? "zh" : ""}`}>{h.specialties[lang]}</div>
              </div>
              <span className="font-mono text-lg text-slatey-500">{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && (
              <div key={lang} className="lang-fade space-y-4 border-t border-cyan-500/10 px-5 pb-6 pt-4">
                <div>
                  <div className="label-mono" style={{ color: h.accent }}>{lang === "zh" ? "支柱机构 / 企业" : "Anchors"}</div>
                  <p className={`mt-1 text-sm text-slatey-100 ${lang === "zh" ? "zh" : ""}`}>{h.anchors[lang]}</p>
                </div>
                <div>
                  <div className="label-mono" style={{ color: h.accent }}>{lang === "zh" ? "为何重要" : "Why it matters"}</div>
                  <p className={`mt-1 text-sm leading-relaxed text-slatey-300 ${lang === "zh" ? "zh" : ""}`}>{h.story[lang]}</p>
                </div>
                {/* mini power bars */}
                <div className="grid grid-cols-3 gap-x-4 gap-y-1.5">
                  {INDEX_DIMS.map((d) => (
                    <div key={String(d.key)}>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-[0.55rem] uppercase text-slatey-500">{d.short}</span>
                        <span className="data-mono text-[0.6rem]" style={{ color: h.accent }}>{h[d.key] as number}</span>
                      </div>
                      <div className="mt-0.5 h-1 rounded-full bg-term-600">
                        <div className="h-1 rounded-full" style={{ width: `${h[d.key] as number}%`, background: h.accent }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
