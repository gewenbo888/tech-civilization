import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const TITLE_EN = "Tech Civilization Atlas · The Global Evolution of Technology Centers, Innovation Cities & Scientific Power";
const TITLE_ZH = "科技文明图谱 · 全球科技中心、创新城市与科学力量的演化";
const DESC =
  "A civilisation-scale, bilingual atlas of the world's technology centers — Silicon Valley, Beijing, Shenzhen, Shanghai, Hangzhou, Taipei, Seoul, Tokyo, Boston, London, Bangalore, Tel Aviv, Zurich, Singapore, Berlin — scored across talent, capital, semiconductors, compute, universities, energy and geopolitics. How civilisation concentrates intelligence into geographic form.";

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-civilization.psyverse.fun"),
  title: `${TITLE_EN} | ${TITLE_ZH}`,
  description: DESC,
  keywords: [
    "technology centers", "innovation hubs", "Silicon Valley", "Shenzhen", "Beijing", "Shanghai",
    "Hangzhou", "Taipei", "TSMC", "semiconductors", "chip geopolitics", "ASML", "NVIDIA",
    "venture capital", "AI compute", "GPU clusters", "universities", "talent migration",
    "startup ecosystems", "tech geopolitics", "innovation index", "city operating systems",
    "科技中心", "创新城市", "硅谷", "深圳", "半导体", "芯片", "台积电", "人才", "算力", "创新指数",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    title: TITLE_EN,
    description:
      "Innovation pools into a handful of glowing brains. A bilingual atlas of 16 tech hubs, the semiconductor supply chain, talent networks, and a 9-axis civilisation technology index.",
    url: "https://tech-civilization.psyverse.fun/",
    siteName: "Psyverse",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_EN,
    description: "Silicon Valley, Shenzhen, Taipei, Beijing… technology centers are modern civilisation's brains. A bilingual planetary innovation atlas.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#06090f" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: TITLE_EN,
              alternateName: TITLE_ZH,
              description: DESC,
              url: "https://tech-civilization.psyverse.fun/",
              inLanguage: ["en", "zh-CN"],
              author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
              publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
            }),
          }}
        />
      </head>
      <body className="bg-term-950 text-slatey-100 antialiased">
        {children}
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
