import { useState } from "react";
import { NavBar, Footer, ArrowBtn, Corner, Eyebrow } from "../components/layout";
import SEO from "../components/SEO";

const ENDPOINTS = [
  {
    method: "GET",
    path: "/v1/search",
    desc: "Full-text search across all indexed sources — public filings, internal docs, research, and news.",
  },
  {
    method: "POST",
    path: "/v1/query",
    desc: "Submit a natural-language investment query and receive a structured, cited response.",
  },
  {
    method: "POST",
    path: "/v1/documents/ingest",
    desc: "Upload proprietary documents (PDFs, Excel, DOCX) for immediate indexing and retrieval.",
  },
  {
    method: "GET",
    path: "/v1/documents/{id}",
    desc: "Retrieve metadata, parsed content, and citation references for a specific indexed document.",
  },
  {
    method: "POST",
    path: "/v1/reports/generate",
    desc: "Trigger automated report generation — investment memos, sector summaries, Q&A prep.",
  },
  {
    method: "GET",
    path: "/v1/signals",
    desc: "Stream real-time market signals ranked by relevance, recency, and alpha-impact scoring.",
  },
  {
    method: "GET",
    path: "/v1/watchlist",
    desc: "Retrieve the monitored entity list and configure automated alert thresholds.",
  },
  {
    method: "DELETE",
    path: "/v1/documents/{id}",
    desc: "Permanently remove a document from the firm's knowledge base and all derived indexes.",
  },
];

const CODE_EXAMPLE = `curl -X POST https://api.xvesting.co/v1/query \\
  -H "Authorization: Bearer txk_live_••••••••••••••••" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What are the key risks in NVDA Q3 2024 earnings?",
    "sources": ["sec_filings", "broker_research", "internal"],
    "max_results": 5,
    "cite": true
  }'`;

const RESPONSE_EXAMPLE = `{
  "id": "qry_01J9XVKMQ3NPHA5RB7TF",
  "query": "What are the key risks in NVDA Q3 2024 earnings?",
  "answer": "NVIDIA's Q3 2024 earnings highlighted three primary risk vectors: (1) export control headwinds on H100/A100 chips to China...",
  "citations": [
    {
      "source": "NVDA 10-Q Q3 2024",
      "excerpt": "Export control regulations...imposed significant uncertainty",
      "relevance": 0.97
    }
  ],
  "tokens_used": 1842,
  "latency_ms": 340
}`;

const METHOD_COLORS: Record<string, string> = {
  GET: "text-zest",
  POST: "text-[#4da6ff]",
  DELETE: "text-flare",
};

export default function ApisPage() {
  const [activeTab, setActiveTab] = useState<"request" | "response">("request");

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="API Reference"
        description="Integrate Xvesting's AI-powered investment intelligence into your own systems. Access real-time market data, document ingestion, natural-language queries, and automated report generation via REST API."
        canonicalPath="/apis"
        keywords="Xvesting API, investment data API, market intelligence API, REST API, financial data integration, AI query API"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "@id": "https://xvesting.ai/apis#article",
            name: "Xvesting API Reference",
            headline: "Xvesting REST API — Investment Intelligence Integration",
            description:
              "REST API documentation for the Xvesting investment intelligence platform. Endpoints for natural-language queries, document ingestion, real-time signals, and automated report generation.",
            url: "https://xvesting.ai/apis",
            datePublished: "2024-01-01",
            dateModified: "2026-09-01",
            author: { "@type": "Organization", "@id": "https://xvesting.ai/#organization" },
            publisher: { "@type": "Organization", "@id": "https://xvesting.ai/#organization" },
            about: "REST API for AI-powered investment intelligence",
            inLanguage: "en-US",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://xvesting.ai/" },
              { "@type": "ListItem", position: 2, name: "API Reference", item: "https://xvesting.ai/apis" },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Xvesting API Endpoints",
            description: "REST API endpoints available in the Xvesting investment intelligence platform",
            itemListElement: ENDPOINTS.map((ep, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${ep.method} ${ep.path}`,
              description: ep.desc,
            })),
          },
        ]}
      />
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
          <div className="container container-max-w-1360">
            <div className="max-w-[44rem] space-y-6">
              <Eyebrow corners={["tl", "br"]}>Xvesting API</Eyebrow>
              <h1 className="text-h1">
                Build on the infrastructure of institutional intelligence.
              </h1>
              <p className="text-body-M text-white-80 max-w-[36rem]">
                Programmatic access to Xvesting's full research stack — search, ingest, query, and report across 100M+ sources with a single API key.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:Trust@xvesting.co">
                  <ArrowBtn label="Get API Access" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick stats */}
        <section className="bg-grey-6 border-t border-grey-5">
          <div className="container container-max-w-1360">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-grey-5">
              {[
                { val: "<340ms", label: "Median latency" },
                { val: "99.9%", label: "Uptime SLA" },
                { val: "100M+", label: "Indexed sources" },
                { val: "REST", label: "Protocol" },
              ].map((s) => (
                <div key={s.label} className="px-6 py-8 md:px-10 space-y-1">
                  <div className="text-stat text-white">{s.val}</div>
                  <div className="text-body-XS text-white-80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentication */}
        <section className="bg-black text-white pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360">
            <div className="flex flex-col gap-10 md:flex-row md:gap-16 lg:gap-24">
              <div className="md:w-5/12 space-y-6">
                <Eyebrow corners={["tl"]}>Authentication</Eyebrow>
                <h2 className="text-h3">API keys with scoped permissions.</h2>
                <p className="text-body-S text-white-80">
                  Every request is authenticated with a Bearer token scoped to your firm's workspace. Keys can be restricted to specific endpoints, IP ranges, and rate tiers — managed from the admin console with full audit logs.
                </p>
                <div className="space-y-3 pt-2">
                  {["Per-key rate limits", "IP allowlisting", "Automatic key rotation", "Read-only vs. write scopes"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="h-px w-4 bg-zest shrink-0" />
                      <span className="text-body-S text-white-80">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-grey-6 relative overflow-hidden">
                <Corner pos="tr" size="lg" />
                <div className="p-6 md:p-8">
                  <div className="text-eyebrow text-white-80 mb-4">Authorization header</div>
                  <pre className="text-body-XS font-mono text-zest overflow-x-auto leading-relaxed">
{`Authorization: Bearer txk_live_••••••••••••••••

# Or via query param (not recommended for production)
GET /v1/search?api_key=txk_live_••••••••••••••••`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endpoints */}
        <section className="bg-black text-white border-t border-grey-5 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360 space-y-12">
            <div className="space-y-4">
              <Eyebrow corners={["tl", "br"]}>Endpoints</Eyebrow>
              <h2 className="text-h3 max-w-[28rem]">Everything you need to build investment tooling.</h2>
            </div>
            <div className="divide-y divide-grey-5 border-t border-b border-grey-5">
              {ENDPOINTS.map((ep) => (
                <div key={`${ep.method}-${ep.path}`} className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 py-5 hover:bg-grey-6 transition-colors duration-200 px-0 sm:px-4">
                  <div className="flex items-center gap-3 sm:w-[14rem] shrink-0">
                    <span className={`text-eyebrow w-10 shrink-0 ${METHOD_COLORS[ep.method] ?? "text-white"}`}>{ep.method}</span>
                    <code className="text-body-XS font-mono text-white-80 truncate">{ep.path}</code>
                  </div>
                  <p className="text-body-S text-white-80 flex-1">{ep.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Code example */}
        <section className="bg-grey-6 text-white pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360">
            <div className="flex flex-col gap-10 md:flex-row md:gap-12 lg:gap-20">
              <div className="md:w-5/12 space-y-6">
                <Eyebrow corners={["tl"]}>Example</Eyebrow>
                <h2 className="text-h3">Query the research stack in under a second.</h2>
                <p className="text-body-S text-white-80">
                  Submit a plain-English investment question and receive a structured, citation-backed answer drawn from your firm's entire indexed corpus — in milliseconds.
                </p>
              </div>
              <div className="flex-1 space-y-0">
                <div className="flex border-b border-grey-5">
                  {(["request", "response"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`text-eyebrow px-6 py-3 capitalize transition-colors duration-200 border-b-2 -mb-px ${activeTab === tab ? "text-white border-zest" : "text-white-80 border-transparent hover:text-white"}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="relative bg-black overflow-hidden">
                  <Corner pos="bl" size="lg" />
                  <pre className="p-6 md:p-8 text-body-XS font-mono text-white-80 overflow-x-auto leading-relaxed text-[0.8rem]">
                    {activeTab === "request" ? CODE_EXAMPLE : RESPONSE_EXAMPLE}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rate limits */}
        <section className="bg-black text-white border-t border-grey-5 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360 space-y-12">
            <div className="space-y-4">
              <Eyebrow corners={["bl"]}>Rate Limits</Eyebrow>
              <h2 className="text-h3 max-w-[24rem]">Plans scaled to institutional volume.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { plan: "Starter", rpm: "60 req/min", daily: "5,000 req/day", note: "For pilot deployments and prototyping" },
                { plan: "Professional", rpm: "300 req/min", daily: "100,000 req/day", note: "For active trading desks and research teams", highlight: true },
                { plan: "Enterprise", rpm: "Unlimited", daily: "Custom SLA", note: "Dedicated infrastructure with 99.9% uptime guarantee" },
              ].map((p) => (
                <div key={p.plan} className={`relative border border-grey-5 p-6 md:p-8 space-y-5 ${p.highlight ? "border-zest" : ""}`}>
                  {p.highlight && <Corner pos="tl" size="lg" />}
                  <div className="text-h6">{p.plan}</div>
                  <div className="space-y-2">
                    <div className="text-body-XS text-white-80 font-mono">{p.rpm}</div>
                    <div className="text-body-XS text-white-80 font-mono">{p.daily}</div>
                  </div>
                  <p className="text-body-XS text-white-80">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-grey-6 text-white py-20 md:py-28">
          <div className="container container-max-w-1360 text-center space-y-6">
            <h2 className="text-h3 max-w-[30rem] mx-auto">Ready to build on institutional data?</h2>
            <p className="text-body-M text-white-80 max-w-[28rem] mx-auto">
              Request API access and a Xvesting engineer will help you ship your first integration in under a day.
            </p>
            <a href="mailto:Trust@xvesting.co" className="inline-block pt-2">
              <ArrowBtn label="Request API Access" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
