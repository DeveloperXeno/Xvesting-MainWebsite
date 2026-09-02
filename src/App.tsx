import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer, ArrowBtn, ArrowLink, Corner, Eyebrow } from "./components/layout";
import useCasesImage from "./imports/image.png";
import ApisPage from "./pages/ApisPage";
import SecurityPage from "./pages/SecurityPage";
import ResearchPage from "./pages/ResearchPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";


// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white pt-14 md:pt-16 lg:pt-24 pb-20 md:pb-24 lg:pb-36">
        <div className="container container-max-w-1360">
          <div className="mx-auto flex w-full max-w-[56rem] flex-col items-center text-center">
            <h1 className="text-hero">
              AI analysis for<br />high&#8209;stakes investing
            </h1>
            <h2 className="text-body-XL mt-3 w-full font-normal opacity-80 md:mt-5">
              Real-time market data, powerful research tools, and smart portfolios — plus an AI agent that analyzes the markets for you, all in one investing app.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── "Billions in alpha" quote section ────────────────────────────────────────
function AlphaSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white pt-8 md:pt-10 lg:pt-14 pb-14 md:pb-16 lg:pb-24">
        <div className="container container-max-w-1360">
          <div className="flex w-full flex-col gap-y-5 text-center items-center justify-center">
            <h2
              className="text-h4"
              style={{ maxWidth: "690px", width: "100%", marginLeft: "auto", marginRight: "auto" }}
            >
              <span className="opacity-60">
                Your unstructured private data holds billions in untapped alpha.
              </span>{" "}
              Xvesting turns that raw intelligence into a decisive edge.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 100x + Scale of a Model ───────────────────────────────────────────────────
function LeverageSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white">
        <div className="container container-max-w-1360 space-y-14 md:space-y-16 lg:space-y-24">
          {/* Eyebrow */}
          <div className="flex w-full flex-col gap-y-5 text-center items-center justify-center">
            <Eyebrow corners={["tl", "tr", "bl", "br"]}>
              Amplify Proprietary Data. 100x.
            </Eyebrow>
          </div>

          {/* Scale of a model */}
          <div className="flex flex-col gap-10 md:gap-7 lg:gap-6 md:flex-row">
            <div className="border-grey-5 flex w-full items-center justify-center border-t pt-9 md:w-2/5 md:border-b md:py-10">
              <div className="w-full space-y-4 md:max-w-[21.75rem]">
                <h3 className="text-h6 w-full font-normal max-sm:text-balance md:max-w-[19.125rem]">
                  Model-scale processing. Analyst-grade thinking.
                </h3>
                <div className="text-body-S text-white-80">
                  Built to work the way analysts do, Xvesting draws on your internal data and converts dense, investment-specific research into sharp, actionable insight delivered in a clear, tailored format.
                </div>
              </div>
            </div>
            <div className="bg-grey-6 relative my-auto flex-1 min-h-[14rem] md:min-h-[28.75rem]">
              {/* Placeholder for animated visual */}
              <div className="w-full h-full flex items-center justify-center p-8">
                <img src="/feature-01.svg" alt="Scale of a model visual" className="w-full max-w-[36rem] opacity-90" />
              </div>
              <Corner pos="bl" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Scan thousands of sources ─────────────────────────────────────────────────
function ScanSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white pt-16 md:pt-24 lg:pt-36">
        <div className="container container-max-w-1360 space-y-14 md:space-y-16 lg:space-y-24">
          {/* Heading */}
          <div className="flex w-full flex-col gap-y-4 md:text-center items-center justify-center max-md:text-left max-md:items-start max-md:justify-start">
            <h2 className="text-h6">Cover thousands of sources — in moments</h2>
            <div
              className="opacity-80 text-body-S"
              style={{ maxWidth: "602px", width: "100%", marginLeft: "auto", marginRight: "auto" }}
            >
              Instantly surface results across more than 100,000 sources — spanning public and private research, regulatory filings, news, and social media signals.
            </div>
          </div>

          {/* 3-col card */}
          <div className="bg-grey-6 relative flex flex-col items-center justify-between gap-10 px-6 py-[3.125rem] sm:px-8 sm:py-14 md:min-h-[23.75rem] md:flex-row md:gap-8 md:py-0 lg:min-h-[28.125rem] lg:px-12 xl:min-h-[35rem]">
            <div className="space-y-2.5 w-full shrink-0 md:w-[26.18%]">
              <div className="text-body-M font-medium">Open & restricted sources</div>
              <div className="text-body-XS text-white-80">
                SEC filings, earnings transcripts, investor presentations, financial supplements — Xvesting consolidates the full spectrum of sources analysts depend on.
              </div>
            </div>
            <div className="w-full max-w-[28.625rem] flex-1 flex items-center justify-center">
              <img src="/feature-02.svg" alt="Search sources visual" className="w-full" style={{ aspectRatio: "458/560" }} />
            </div>
            <div className="space-y-2.5 w-full shrink-0 md:w-[26.18%]">
              <div className="text-body-M font-medium">Your internal intelligence</div>
              <div className="text-body-XS text-white-80">
                From time-series data to Excel models and bespoke frameworks, Xvesting structures even the most unruly internal content into something actionable.
              </div>
            </div>
            <Corner pos="tr" size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Centralize your data ──────────────────────────────────────────────────────
function CentralizeSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white pt-16 md:pt-24 lg:pt-36 pb-20 md:pb-24 lg:pb-40">
        <div className="container container-max-w-1360 space-y-16 md:space-y-24 lg:space-y-36">
          {/* Main row — reversed */}
          <div className="flex flex-col gap-10 md:gap-7 lg:gap-6 md:flex-row-reverse">
            <div className="border-grey-5 flex w-full items-center justify-center border-t pt-9 md:w-2/5 md:border-b md:py-10">
              <div className="w-full space-y-4 md:max-w-[21.75rem]">
                <h3 className="text-h6 w-full font-normal max-sm:text-balance md:max-w-[19.125rem]">
                  One place for all your data
                </h3>
                <div className="text-body-S text-white-80">
                  Xvesting indexes at cell and sentence level — Excel models, emails, memos, and 100M+ external sources. No more switching between portals and shared drives. One search, answers from everywhere.
                </div>
              </div>
            </div>
            <div className="bg-grey-6 relative my-auto flex-1 min-h-[14rem] md:min-h-[28.75rem]">
              <img src="/feature-03.svg" alt="Centralize data visual" className="w-full p-4" style={{ aspectRatio: "737/460" }} />
              <Corner pos="tl" size="lg" />
            </div>
          </div>

          {/* 2-col sub-section */}
          <div className="grid gap-16 md:grid-cols-2 md:gap-7 lg:gap-5">
            {/* Complete auditability */}
            <div className="bg-grey-6 border-grey-5 relative flex flex-col md:border-t">
              <Corner pos="tl" size="lg" />
              <div className="relative flex flex-1 flex-col justify-between space-y-8 sm:space-y-12">
                <div className="space-y-4 p-6 !pb-0 sm:p-8 xl:p-12">
                  <div className="text-h6 max-sm:text-balance">Full transparency, always</div>
                  <div className="text-body-S text-white-80">
                    Every result is traceable. Comprehensive, auditable search gives you the context to build out your answer and sharpen your investment thesis.
                  </div>
                </div>
                <div className="w-full">
                  <img src="/feature-04.svg" alt="Complete auditability visual" className="w-full" style={{ aspectRatio: "630/508" }} />
                </div>
              </div>
            </div>

            {/* Make smarter investment calls */}
            <div className="flex justify-end lg:pl-7">
              <div className="border-grey-5 flex w-full shrink-0 flex-col-reverse gap-y-8 border-t pt-9 md:max-w-[32.875rem] md:flex-col md:border-t-0 md:border-b md:pt-0 md:pb-8 xl:gap-y-12 xl:pb-12">
                <div className="relative w-full">
                  <img src="/feature-05.svg" alt="Build reports visual" className="w-full" style={{ aspectRatio: "526/480" }} />
                  <Corner pos="bl" size="lg" />
                </div>
                <div className="space-y-4">
                  <div className="text-h6 w-full md:max-w-[21.25rem]">
                    Better calls. <span className="opacity-80">In less time.</span>
                  </div>
                  <div className="text-body-S text-white-80 w-full md:max-w-[25.75rem]">
                    Every hour spent on preparation is an hour lost to analysis. Xvesting cuts research time so teams can focus on the decisions that generate alpha.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why Xvesting (WHITE background, sticky scroll) ─────────────────────────
const FEATURES = [
  {
    num: "01",
    title: "Build your firm's AI knowledge hub",
    desc: "Establish a unified data network that compounds into your firm's Proprietary Intelligence with every file and datapoint added to Xvesting.",
    img: "/feature-01.svg",
    alt: "Deploy your firm's AI Dashboard Visual",
  },
  {
    num: "02",
    title: "Query every source that drives your workflow",
    desc: "Live broker research, SEC filings, call transcripts, and internal decks — unified in a single searchable stream.",
    img: "/feature-02.svg",
    alt: "Search Sources Product Visual",
  },
  {
    num: "03",
    title: "Rise above the noise, immediately",
    desc: "A proprietary scoring engine ranks every document by relevance, recency, and insight quality — so the market-moving signals always surface first.",
    img: "/feature-03.svg",
    alt: "Signals List Visual",
  },
  {
    num: "04",
    title: "Follow the market live, with full context",
    desc: "Macro shifts and ticker-level moves side by side in one dashboard — connect breaking news to portfolio impact the moment it happens.",
    img: "/feature-04.svg",
    alt: "Live Market Tracking Dashboard Visual",
  },
  {
    num: "05",
    title: "Create and distribute tailored reports",
    desc: "Investment memos, market summaries, or Q&A prep — generated in seconds with complete traceability and ready to share.",
    img: "/feature-05.svg",
    alt: "Build Custom Reports Visual",
  },
  {
    num: "06",
    title: "AI capabilities tailored to your firm",
    desc: "Dedicated support and bespoke feature development that grows with your firm's needs. AI that works around your process, not the other way around.",
    img: "/feature-06.svg",
    alt: "Custom AI features Visual",
  },
];

function WhySection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const items = sectionRef.current.querySelectorAll("[data-feature-item]");
      let closest = 0;
      let minDist = Infinity;
      items.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - window.innerHeight * 0.3);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveFeature(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="">
      <div className="relative bg-white text-black pt-20 md:pt-28 lg:pt-36 xl:pt-44 pb-20 md:pb-28 lg:pb-36 xl:pb-44">
        <div className="container container-max-w-1360 space-y-14 md:space-y-16 lg:space-y-28">
          {/* Header */}
          <div className="flex w-full flex-col gap-y-6 text-center items-center justify-center">
            <Eyebrow corners={["tl", "bl"]}>The Xvesting Advantage</Eyebrow>
            <h2
              className="text-h3"
              style={{ maxWidth: "600px", width: "100%", marginLeft: "auto", marginRight: "auto" }}
            >
              Every capability built around how investment professionals actually work.{" "}
            </h2>
          </div>

          {/* Two-col layout */}
          <div className="flex flex-col items-start gap-x-6 md:flex-row" ref={sectionRef}>
            {/* Sticky left panel (desktop only) */}
            <div className="sticky top-28 flex w-6/12 max-w-[46.125rem] gap-x-10 max-md:hidden lg:w-7/12 lg:gap-x-14">
              {/* Vertical number indicator */}
              <div className="relative w-8 shrink-0 pt-4 max-lg:hidden">
                <div className="text-eyebrow text-center whitespace-nowrap">
                  {String(activeFeature + 1).padStart(2, "0")}
                </div>
              </div>
              {/* Feature image */}
              <div className="bg-grey-0 relative flex flex-1 flex-col items-center overflow-hidden xl:min-h-[36.25rem]">
                <div className="w-full">
                  <img
                    src={FEATURES[activeFeature].img}
                    alt={FEATURES[activeFeature].alt}
                    className="w-full transition-opacity duration-300"
                  />
                </div>
                <Corner pos="tr" size="lg" />
              </div>
            </div>

            {/* Scrolling right list */}
            <div className="border-grey-2 w-full flex-1 md:border-y md:px-6 md:py-20 lg:px-8 lg:py-24 xl:py-[11.25rem]">
              <div className="mx-auto w-full space-y-16 md:max-w-[21.5rem] md:space-y-40 lg:space-y-48 xl:space-y-[22.5rem]">
                {FEATURES.map((f, i) => (
                  <div key={f.num} className="border-grey-2 flex flex-col gap-y-10 max-md:border-b max-md:pb-10" data-feature-item>
                    {/* Mobile image */}
                    <div className="bg-grey-0 relative flex min-h-[19.0625rem] items-center justify-center md:hidden">
                      <Corner pos="br" size="lg" />
                      <div className="w-full">
                        <img src={f.img} alt={f.alt} className="w-full" />
                      </div>
                    </div>
                    <div className="space-y-4 lg:space-y-5">
                      <div className="text-h6 max-sm:text-balance">{f.title}</div>
                      <div className="text-body-S text-grey-5">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Security ──────────────────────────────────────────────────────────────────
const SECURITY_ITEMS = [
  { img: "/soc2.svg", alt: "SOC 2 Accreditation Logo", label: "SOC 2 Type II audited" },
  { img: "/aes256.svg", alt: "AES-256 Encryption Logo", label: "AES‑256 encryption" },
  { img: "/no-models.svg", alt: "No models trained on data Visual", label: "No models trained on data" },
  { img: "/admin-gov.svg", alt: "Admin Governance & Permissions Visual", label: "Admin Governance & Permissions" },
];

function SecuritySection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white pb-16 md:pb-24 lg:pb-36">
        <div className="container container-max-w-1360 space-y-14 md:space-y-16 lg:space-y-24">
          <div className="pt-20 md:pt-24 lg:pt-40 relative space-y-14 md:space-y-16 lg:space-y-24">
            {/* Heading + link */}
            <div className="relative w-full max-w-[26rem] space-y-6 md:space-y-8">
              <h2 className="text-h3">Institutional-level security, built in</h2>
              <a href="/security">
                <ArrowLink label="Learn more" light />
              </a>
            </div>

            {/* 4-col grid */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 md:auto-cols-fr md:grid-flow-col md:grid-cols-none md:gap-x-6">
              {SECURITY_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="border-grey-5 relative space-y-8 border-t pb-7 md:space-y-20 md:border-b md:pb-[1.125rem]"
                >
                  <Corner pos="tl" size="lg" color="flare" />
                  <div className="w-full">
                    <img src={item.img} alt={item.alt} className="w-full" loading="lazy" />
                  </div>
                  <h3 className="text-body-S font-medium">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ── Use Cases ─────────────────────────────────────────────────────────────────
function UseCasesSection() {
  return (
    <section className="overflow-hidden">
      <div className="relative bg-black text-white pt-20 md:pt-28 lg:pt-36 pb-20 md:pb-28 lg:pb-36">
        <div className="container container-max-w-1360 space-y-14 md:space-y-16 lg:space-y-24">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-5">
              <Eyebrow corners={["tl", "br"]}>Use Cases</Eyebrow>
              <h2 className="text-h3 max-w-[38rem]">
                Intelligence built for every kind of investor
              </h2>
            </div>
            <p className="text-body-M max-w-[36rem] md:text-right" style={{ color: "rgba(255,255,255,0.75)" }}>
              Xvesting delivers real‑time intelligence across markets, crypto, and global trends, giving both investors and market trackers clear, instant insight. Its AI turns complex movements into simple, actionable signals so anyone can quickly understand risks and opportunities.
            </p>
          </div>

          {/* Product screenshot */}
          <div className="bg-grey-6 relative overflow-hidden">
            <Corner pos="tl" size="lg" />
            <Corner pos="br" size="lg" />
            <div className="p-4 sm:p-6 lg:p-10">
              <img
                src={useCasesImage}
                alt="Xvesting AI agent answering a market query with real-time stock data and sourced analysis"
                className="w-full rounded-sm"
                style={{ aspectRatio: "2535/1617", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* End-of-page CTA */}
          <div className="flex flex-col items-center text-center gap-10 pt-16 pb-4 md:pt-24 lg:pt-32">
            <div className="space-y-6 max-w-[52rem]">
              <h2 className="text-h2 text-white">
                Start Tracking &amp; Investing with Xvesting
              </h2>
              <p className="text-body-XL" style={{ color: "rgba(255,255,255,0.65)" }}>
                Investing Built for Serious Capital — get real-time market intelligence, AI-powered signals, and portfolio tracking in one platform built for investors who mean business.
              </p>
            </div>
            <a href="https://app.xvesting.co" target="_blank" rel="noopener noreferrer">
              <ArrowBtn label="Start Tracking the Market" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const HOME_STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://xvesting.ai/#organization",
    name: "Xvesting",
    url: "https://xvesting.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://xvesting.ai/xvesting-logo.png",
      width: 512,
      height: 512,
    },
    sameAs: [
      "https://twitter.com/xvesting",
      "https://www.linkedin.com/company/xvesting",
    ],
    description:
      "AI-powered investment intelligence platform delivering real-time market data, research tools, and smart portfolios for institutional and professional investors.",
    foundingDate: "2024",
    knowsAbout: [
      "Artificial Intelligence",
      "Investment Research",
      "Financial Technology",
      "Market Data",
      "Portfolio Management",
      "Natural Language Processing",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://app.xvesting.co",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://xvesting.ai/#website",
    name: "Xvesting",
    url: "https://xvesting.ai",
    publisher: { "@id": "https://xvesting.ai/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://xvesting.ai/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://xvesting.ai/#webpage",
    url: "https://xvesting.ai/",
    name: "Xvesting — AI Analysis for High-Stakes Investing",
    isPartOf: { "@id": "https://xvesting.ai/#website" },
    about: { "@id": "https://xvesting.ai/#organization" },
    description:
      "Real-time market data, powerful research tools, and smart portfolios — plus an AI agent that analyzes the markets for you, all in one investing app.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://xvesting.ai/",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://xvesting.ai/#application",
    name: "Xvesting",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Investment Intelligence",
    operatingSystem: "Web",
    url: "https://xvesting.ai",
    description:
      "Real-time market data, powerful research tools, and smart portfolios — plus an AI agent that analyzes the markets for you.",
    author: { "@id": "https://xvesting.ai/#organization" },
    offers: {
      "@type": "Offer",
      category: "subscription",
      url: "https://app.xvesting.co",
    },
    featureList: [
      "AI market analysis",
      "Real-time market data",
      "Portfolio tracking",
      "SEC filing search",
      "Investment research",
      "Custom report generation",
      "Multi-source document ingestion",
      "Citation-grounded AI answers",
      "Earnings call transcript analysis",
      "Agentic research workflows",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://xvesting.ai/#financial-service",
    name: "Xvesting",
    url: "https://xvesting.ai",
    description:
      "AI-driven market intelligence and investing analysis platform for institutional and professional investors.",
    serviceType: "Investing Analysis",
    provider: { "@id": "https://xvesting.ai/#organization" },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Institutional investors, professional traders, portfolio managers",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Xvesting Platform Features",
    description: "Core capabilities of the Xvesting investment intelligence platform",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Build your firm's AI knowledge hub",
        description:
          "Establish a unified data network that compounds into your firm's Proprietary Intelligence with every file and datapoint added to Xvesting.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Query every source that drives your workflow",
        description:
          "Live broker research, SEC filings, call transcripts, and internal decks — unified in a single searchable stream.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Rise above the noise, immediately",
        description:
          "A proprietary scoring engine ranks every document by relevance, recency, and insight quality — so the market-moving signals always surface first.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Follow the market live, with full context",
        description:
          "Macro shifts and ticker-level moves side by side in one dashboard — connect breaking news to portfolio impact the moment it happens.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Create and distribute tailored reports",
        description:
          "Investment memos, market summaries, or Q&A prep — generated in seconds with complete traceability and ready to share.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "AI capabilities tailored to your firm",
        description:
          "Dedicated support and bespoke feature development that grows with your firm's needs. AI that works around your process, not the other way around.",
      },
    ],
  },
];

// ── Homepage ──────────────────────────────────────────────────────────────────
function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        canonicalPath="/"
        description="Real-time market data, powerful research tools, and smart portfolios — plus an AI agent that analyzes the markets for you, all in one investing app."
        structuredData={HOME_STRUCTURED_DATA}
      />
      <NavBar />
      <main>
        <HeroSection />
        <AlphaSection />
        <LeverageSection />
        <ScanSection />
        <CentralizeSection />
        <WhySection />
        <SecuritySection />
        <UseCasesSection />
      </main>
      <Footer />
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apis" element={<ApisPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}
