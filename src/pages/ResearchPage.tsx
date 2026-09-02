import { useState } from "react";
import { NavBar, Footer, ArrowBtn, Corner, Eyebrow } from "../components/layout";
import SEO from "../components/SEO";

const TOPICS = ["All", "AI Architecture", "Financial NLP", "Market Microstructure", "Data Infrastructure"];

const PAPERS = [
  {
    id: 1,
    topic: "Financial NLP",
    date: "August 2026",
    dateISO: "2026-08-01",
    slug: "citation-grounded-retrieval",
    title: "Citation-Grounded Retrieval for Investment Research: A Framework for Auditable AI Answers",
    authors: "Xvesting Research Team",
    abstract: "We present a retrieval-augmented generation (RAG) architecture specifically designed for investment-grade query answering, where factual accuracy and regulatory accountability require a level of traceability that general-purpose language model deployments do not provide. Our framework introduces citation provenance enforcement at inference time: every factual claim emitted by the model is bound to a source document identifier, paragraph index, and character offset before the response is finalized. This mechanism allows downstream compliance systems, portfolio managers, and auditors to verify the evidentiary basis for any AI-generated investment conclusion without re-running the query.\n\nThe core technical contribution is a two-stage retrieval pipeline. In the first stage, a dense bi-encoder retrieves candidate passages from a corpus of SEC filings, earnings transcripts, sell-side research, and proprietary data feeds. In the second stage, a cross-encoder re-ranker scores passage relevance jointly with the query context, filtering to a citation-eligible candidate set. The language model then generates its response subject to a constrained decoding procedure that prohibits generation beyond what is directly entailed by the retrieved passages.\n\nWe evaluate the system on a curated benchmark of 1,840 investment research questions spanning earnings analysis, covenant compliance, sector rotation, and macro regime classification. Citation accuracy — defined as the fraction of model claims that map correctly to a retrievable source passage — reaches 94.7% under our framework, compared to 61.2% for an unconstrained RAG baseline. End-to-end query latency at the 95th percentile is 2.3 seconds, well within the threshold for analyst-interactive workflows.",
    type: "Technical Report",
  },
  {
    id: 2,
    topic: "AI Architecture",
    date: "July 2026",
    dateISO: "2026-07-01",
    slug: "hierarchical-document-indexing",
    title: "Hierarchical Document Indexing at Cell Granularity: Implications for Financial Data Retrieval",
    authors: "Xvesting Research Team",
    abstract: "Financial documents — income statements, balance sheets, footnote disclosures, covenant schedules — are inherently structured artifacts. Standard document chunking strategies used in general-purpose retrieval systems treat these documents as flat text, discarding the column headers, formula relationships, row labels, and temporal sequences that give individual data cells their meaning. A revenue figure extracted without its corresponding period label or reporting entity is, at best, ambiguous and, at worst, actively misleading when used as evidence in an AI-generated investment analysis.\n\nWe describe a cell-level indexing scheme that preserves tabular semantics throughout the retrieval pipeline. Each cell in a financial table is indexed as an independent unit carrying its full structural context: the document source, reporting period, row hierarchy path, column hierarchy path, and any footnote cross-references. Vector representations for cells are constructed by encoding both the numeric or textual content and the flattened structural path, enabling retrieval queries that naturally surface context-complete results.\n\nIn ablation studies across a corpus of 14,000 financial filings from the S&P 500 universe (fiscal years 2020–2025), cell-level indexing improves retrieval precision at rank-5 by 34% relative to paragraph-level chunking, and reduces hallucinated numeric citations by 58%. We also report the storage and indexing compute overhead of cell-level granularity, and describe a compression scheme that reduces index size by 2.1× with less than 1% precision degradation.",
    type: "Research Paper",
  },
  {
    id: 3,
    topic: "Market Microstructure",
    date: "June 2026",
    dateISO: "2026-06-01",
    slug: "latency-and-alpha",
    title: "Latency and Alpha: Measuring the Information Decay Rate of Earnings Call Transcripts",
    authors: "Xvesting Research Team",
    abstract: "Earnings call transcripts are among the richest sources of forward-looking information in public equity markets. Management tone, guidance revision language, analyst Q&A dynamics, and off-script qualifications routinely contain signals that move asset prices. Yet the relationship between processing latency and extractable alpha has not been rigorously characterized at transcript granularity — most empirical work treats transcripts as homogeneous documents rather than time-stamped sequences of disclosures.\n\nUsing a corpus of 4,200 earnings call transcripts from Q1 2023 to Q4 2025, covering companies across all GICS sectors and market capitalizations above $500M, we construct a granular alpha decay model. We define exploitable alpha as the excess return attributable to a trading signal derived from transcript content, measured against a matched control group that received only the quantitative earnings release. Signal quality is measured at extraction intervals ranging from 2 minutes to 6 hours post-transcript availability.\n\nOur key finding is that alpha decay is highly non-linear: signal extraction within 8 minutes of transcript availability captures 73% of maximum exploitable alpha, while the 30-minute window captures only 81% — indicating that the marginal value of speed is concentrated in the first eight minutes. We further decompose the alpha curve by content segment, finding that CEO prepared remarks and CFO guidance sections exhibit the steepest decay, while analyst Q&A dynamics remain informative up to approximately 45 minutes. These results have direct implications for the architecture of real-time transcript processing systems and the prioritization of NLP inference compute at time of call.",
    type: "Research Paper",
  },
  {
    id: 4,
    topic: "Data Infrastructure",
    date: "May 2026",
    dateISO: "2026-05-01",
    slug: "multi-tenant-vector-store",
    title: "Multi-Tenant Vector Store Isolation: Security and Performance Trade-offs at Scale",
    authors: "Xvesting Infrastructure Team",
    abstract: "Financial AI platforms handling sensitive client data face an isolation challenge that general-purpose vector database deployments are not designed to address: a single retrieval query must not surface documents belonging to a different client, even under adversarial prompt injection conditions or infrastructure failures. The vector search operation itself — nearest-neighbor lookup in a shared embedding space — does not have a native access control primitive, requiring the isolation boundary to be enforced at a higher level of the stack.\n\nWe evaluate three architectural patterns for multi-tenant vector database isolation: (1) shared namespace with ACL post-filtering, where all client embeddings coexist in a single index and results are filtered by client ID at query time; (2) namespace-per-tenant, where each client occupies a logically isolated segment of a shared index with hardware-enforced read boundaries; and (3) instance-per-tenant, where each client is allocated a dedicated vector database instance with no shared compute or storage.\n\nWe present empirical measurements across all three approaches on a production-scale synthetic workload representing 200 concurrent tenants with corpus sizes ranging from 50K to 2M vectors. Shared-namespace ACL achieves the lowest median query latency (18ms p50) but exhibits worst-case latency spikes under high cardinality ACL lists and cannot guarantee isolation under index corruption scenarios. Namespace-per-tenant offers a strong balance of latency (24ms p50), cost efficiency, and verifiable isolation. Instance-per-tenant provides the strongest security posture but at 4.7× the infrastructure cost and 3.2× the operational overhead. We provide a decision framework mapping client data sensitivity, corpus size, and query SLA requirements to the appropriate isolation tier.",
    type: "Technical Report",
  },
  {
    id: 5,
    topic: "Financial NLP",
    date: "April 2026",
    dateISO: "2026-04-01",
    slug: "domain-adaptation-llm",
    title: "Domain Adaptation of Large Language Models for Investment Research: A Benchmark Study",
    authors: "Xvesting Research Team",
    abstract: "General-purpose large language models exhibit well-documented limitations on tasks requiring specialized domain knowledge — accounting standards, regulatory language, market convention, and the implicit reasoning patterns that experienced analysts apply to financial disclosures. These limitations are not uniform: frontier models perform well on surface-level financial question answering but degrade sharply on tasks requiring multi-document synthesis, temporal consistency, or nuanced interpretation of forward-looking language under GAAP disclosure rules.\n\nWe present FinBench-TX, an evaluation suite of 2,400 investment-grade tasks across six categories: earnings quality assessment, covenant compliance analysis, cross-company comparisons using normalized accounting adjustments, management guidance credibility scoring, macro regime classification from central bank communications, and regulatory filing anomaly detection. Tasks were constructed in collaboration with former buy-side analysts and validated against documented analyst reasoning chains to ensure ecological validity.\n\nSeven frontier models were benchmarked against FinBench-TX: four general-purpose models and three that received domain-specific fine-tuning or retrieval augmentation with financial corpora. Human analyst baselines were established using a panel of ten CFA charterholders. Results indicate that the best-performing domain-adapted model closes 68% of the gap between the top general-purpose model and human analysts on reasoning-intensive tasks, but exhibits regression on tasks requiring precise numeric extraction from complex tables — suggesting that domain adaptation and structured data handling require distinct optimization strategies. Full task definitions, evaluation rubrics, and aggregate model scores are published alongside this report.",
    type: "Research Paper",
  },
  {
    id: 6,
    topic: "AI Architecture",
    date: "March 2026",
    dateISO: "2026-03-01",
    slug: "agentic-research-workflows",
    title: "Agentic Research Workflows: Decomposing Multi-Step Investment Diligence into Verifiable Subtasks",
    authors: "Xvesting Research Team",
    abstract: "Complex investment diligence — sector deep dives, credit assessments, M&A target analyses — cannot be handled by a single language model call. The information requirements span multiple documents, require intermediate reasoning steps, involve conditional logic based on retrieved values, and must produce conclusions that can be audited back to specific evidence. Single-turn LLM responses to diligence requests are prone to hallucination, omission, and inconsistency precisely because the task complexity exceeds what can be reliably encoded in one generation pass.\n\nWe propose a task decomposition framework that translates complex diligence requests into directed acyclic graphs of atomic subtasks. Each subtask has a defined input schema, output schema, and verifiability criterion: a predicate that can be evaluated over the subtask output without human review. Specialized agents — retrieval agents, computation agents, synthesis agents, and cross-reference agents — execute subtasks in dependency order, with intermediate outputs stored and versioned in a shared research context.\n\nWe evaluate the framework across six diligence workflow categories on a dataset of 340 real-world diligence requests sourced from institutional clients (anonymized). Compared to single-turn baselines, the decomposition framework reduces factual error rate from 23.4% to 6.1%, reduces hallucination rate from 18.7% to 2.9%, and increases analyst acceptance rate (the fraction of responses requiring no manual correction before use) from 34% to 79%. End-to-end latency increases by a factor of 2.8× relative to single-turn generation, a trade-off that analysts in our user study rated as consistently acceptable for diligence-class tasks. We also describe the failure modes most commonly encountered in the decomposition approach and the mitigation strategies currently deployed in production.",
    type: "Technical Report",
  },
];

const TOPIC_COLORS: Record<string, string> = {
  "AI Architecture": "text-zest",
  "Financial NLP": "text-[#4da6ff]",
  "Market Microstructure": "text-[#c084fc]",
  "Data Infrastructure": "text-white-80",
};

export default function ResearchPage() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  function handleNotify() {
    if (!email.trim()) return;
    setNotified(true);
    setEmail("");
    setTimeout(() => setNotified(false), 2000);
  }

  const filtered = activeTopic === "All"
    ? PAPERS
    : PAPERS.filter((p) => p.topic === activeTopic);

  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Research"
        description="Explore Xvesting's original research across AI architecture, financial NLP, market microstructure, and data infrastructure — advancing the frontier of AI-powered investing."
        canonicalPath="/research"
        keywords="investment AI research, financial NLP, market microstructure, LLM finance, RAG investment, AI benchmark study, earnings transcript analysis, vector store isolation"
        ogType="article"
        publishedTime="2026-03-01"
        modifiedTime="2026-09-01"
        section="Research"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://xvesting.ai/research#collectionpage",
            name: "Xvesting Research",
            description:
              "Original research papers from the Xvesting AI team covering financial NLP, market microstructure, and investment AI.",
            url: "https://xvesting.ai/research",
            publisher: {
              "@type": "Organization",
              "@id": "https://xvesting.ai/#organization",
              name: "Xvesting",
              url: "https://xvesting.ai",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://xvesting.ai/" },
                { "@type": "ListItem", position: 2, name: "Research", item: "https://xvesting.ai/research" },
              ],
            },
            hasPart: PAPERS.map((p) => ({
              "@type": "ScholarlyArticle",
              name: p.title,
              author: { "@type": "Organization", name: p.authors },
              datePublished: p.dateISO,
              abstract: p.abstract.slice(0, 300) + "…",
              url: `https://xvesting.ai/research#${p.slug}`,
              publisher: { "@type": "Organization", name: "Xvesting", url: "https://xvesting.ai" },
            })),
          },
          ...PAPERS.map((p) => ({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            "@id": `https://xvesting.ai/research#${p.slug}`,
            name: p.title,
            headline: p.title,
            description: p.abstract.slice(0, 300) + "…",
            abstract: p.abstract,
            author: { "@type": "Organization", name: p.authors, url: "https://xvesting.ai" },
            datePublished: p.dateISO,
            dateModified: p.dateISO,
            publisher: {
              "@type": "Organization",
              "@id": "https://xvesting.ai/#organization",
              name: "Xvesting",
              url: "https://xvesting.ai",
            },
            isPartOf: { "@id": "https://xvesting.ai/research#collectionpage" },
            about: p.topic,
            genre: p.type,
            url: `https://xvesting.ai/research#${p.slug}`,
            inLanguage: "en-US",
          })),
        ]}
      />
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-48 lg:pb-36 border-b border-grey-5">
          <div className="container container-max-w-1360">
            <div className="flex flex-col items-start gap-8 max-w-[56rem]">
              <Eyebrow corners={["tl"]}>Research</Eyebrow>
              <h1 className="text-display" style={{ fontFamily: "var(--font-display)" }}>
                The science behind institutional AI.
              </h1>
              <p className="text-body-L max-w-[38rem]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Technical papers, benchmark studies, and architectural reports from the Xvesting research team. Published to advance the field of AI-augmented investment management.
              </p>
              <div className="flex items-center gap-8 pt-2 border-t border-grey-5 w-full pt-6">
                <div>
                  <div className="text-stat text-white">6</div>
                  <div className="text-eyebrow text-white-80 mt-1">Papers in 2026</div>
                </div>
                <div className="w-px h-10 bg-grey-5" />
                <div>
                  <div className="text-stat text-white">4</div>
                  <div className="text-eyebrow text-white-80 mt-1">Research areas</div>
                </div>
                <div className="w-px h-10 bg-grey-5" />
                <div>
                  <div className="text-stat text-white">2</div>
                  <div className="text-eyebrow text-white-80 mt-1">Team groups</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Topic filter */}
        <section className="bg-black text-white border-t border-grey-5 sticky top-16 z-40">
          <div className="container container-max-w-1360">
            <div className="flex gap-0 overflow-x-auto [scrollbar-width:none]">
              {TOPICS.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setActiveTopic(topic)}
                  className={`text-eyebrow whitespace-nowrap px-5 py-4 border-b-2 transition-colors duration-200 ${activeTopic === topic ? "text-white border-zest" : "text-white-80 border-transparent hover:text-white"}`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Papers list */}
        <section className="bg-black text-white pt-10 pb-20 md:pt-14 md:pb-28">
          <div className="container container-max-w-1360">
            <div className="divide-y divide-grey-5 border-t border-b border-grey-5">
              {filtered.map((paper) => (
                <article key={paper.id} className="group">
                  <button
                    onClick={() => setExpanded(expanded === paper.id ? null : paper.id)}
                    className="w-full text-left py-8 md:py-10 space-y-4"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <span className={`text-eyebrow ${TOPIC_COLORS[paper.topic] ?? "text-white"}`}>{paper.topic}</span>
                      <span className="text-eyebrow text-white-80">{paper.date}</span>
                      <span className="text-eyebrow text-white-80">{paper.type}</span>
                    </div>
                    <div className="flex items-start justify-between gap-8">
                      <h2 className="text-h6 max-w-[52rem] group-hover:opacity-80 transition-opacity duration-200">{paper.title}</h2>
                      <div className={`shrink-0 mt-1 transition-transform duration-300 ${expanded === paper.id ? "rotate-45" : ""}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 4V16" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M4 10H16" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                    </div>
                    <div className="text-body-XS text-white-80">{paper.authors}</div>
                  </button>

                  {expanded === paper.id && (
                    <div className="pb-8 md:pb-10 space-y-6 border-t border-grey-5 pt-6">
                      <p className="text-body-S text-white-80 max-w-[52rem] whitespace-pre-line">{paper.abstract}</p>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="bg-grey-6 text-white pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
              <div className="space-y-5 max-w-[38rem]">
                <Eyebrow corners={["tl"]}>Collaborate</Eyebrow>
                <h2 className="text-h3">Research partnerships with leading institutions.</h2>
                <p className="text-body-S text-white-80">
                  Xvesting collaborates with university research groups and institutional quant teams on joint publications. If you're working on AI applications for finance and want to explore a partnership, reach out.
                </p>
              </div>
              <div className="shrink-0">
                <a href="https://app.xvesting.co/" target="_blank" rel="noopener noreferrer">
                  <ArrowBtn label="Propose collaboration" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Signal decoration */}
        <section className="bg-black text-white border-t border-grey-5 py-20 md:py-28">
          <div className="container container-max-w-1360 text-center space-y-6">
            <h2 className="text-h3 max-w-[32rem] mx-auto">Stay current with the research.</h2>
            <p className="text-body-M text-white-80 max-w-[28rem] mx-auto">
              New papers are published quarterly. Subscribe to get notified when new research drops.
            </p>
            <div className="relative flex justify-center gap-0 flex-col sm:flex-row max-w-[26rem] mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                placeholder="your@institution.edu"
                className="flex-1 bg-grey-6 border border-grey-5 border-r-0 px-4 py-3 text-body-S text-white placeholder:text-white-80 focus:outline-none focus:border-zest transition-colors duration-200"
              />
              <button
                onClick={handleNotify}
                className="bg-white text-black text-btn-link px-5 py-3 hover:bg-grey-1 transition-colors duration-300 shrink-0"
              >
                Notify me
              </button>
              <div
                className="pointer-events-none absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-white px-4 py-2 text-body-S font-medium text-black shadow-lg transition-opacity duration-500"
                style={{ opacity: notified ? 1 : 0 }}
              >
                You&rsquo;re signed up — we&rsquo;ll notify you when new research drops.
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
