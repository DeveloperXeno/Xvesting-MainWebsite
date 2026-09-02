import { useEffect, useRef } from "react";
import { NavBar, Footer, ArrowBtn, Corner, Eyebrow } from "../components/layout";
import SEO from "../components/SEO";

function SecurityHeroBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const GRID = 48;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Animated grid
      const offset = (t * 0.4) % GRID;
      ctx.strokeStyle = "rgba(255,255,255,0.045)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = -GRID + offset; x < w + GRID; x += GRID) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }
      for (let y = -GRID + offset; y < h + GRID; y += GRID) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();

      // Glowing nodes at intersections near center
      const cx = w / 2;
      const cy = h / 2;
      const cols = Math.floor(w / GRID) + 2;
      const rows = Math.floor(h / GRID) + 2;
      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const nx = col * GRID + (offset % GRID) - GRID;
          const ny = row * GRID + (offset % GRID) - GRID;
          const dist = Math.hypot(nx - cx, ny - cy);
          const maxDist = Math.hypot(cx, cy) * 0.7;
          if (dist > maxDist) continue;
          const fade = 1 - dist / maxDist;
          const pulse = 0.4 + 0.6 * Math.sin(t * 0.02 + col * 0.5 + row * 0.7);
          const alpha = fade * pulse * 0.5;
          ctx.beginPath();
          ctx.arc(nx, ny, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,200,5,${alpha})`;
          ctx.fill();
        }
      }

      // Central radial glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.55);
      grd.addColorStop(0, "rgba(0,200,5,0.07)");
      grd.addColorStop(0.5, "rgba(0,200,5,0.02)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      t++;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}

const CERTIFICATIONS = [
  {
    title: "SOC 2 Type II",
    desc: "Independently audited annually. Trust Services Criteria covering security, availability, and confidentiality.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="4" width="32" height="32" stroke="#00C805" strokeWidth="1.5"/>
        <path d="M13 20L18 25L27 15" stroke="#00C805" strokeWidth="1.5" strokeLinejoin="bevel"/>
      </svg>
    ),
  },
  {
    title: "AES-256 Encryption",
    desc: "All data encrypted at rest and in transit. Military-grade encryption standard used by global financial institutions.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="10" y="18" width="20" height="15" stroke="#00C805" strokeWidth="1.5"/>
        <path d="M14 18V14C14 10.686 16.686 8 20 8C23.314 8 26 10.686 26 14V18" stroke="#00C805" strokeWidth="1.5"/>
        <circle cx="20" cy="25" r="2" fill="#00C805"/>
      </svg>
    ),
  },
  {
    title: "Zero Data Training",
    desc: "Your proprietary data is never used to train external or shared models. Complete data sovereignty, always.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#00C805" strokeWidth="1.5"/>
        <path d="M12 12L28 28" stroke="#FF284E" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Admin Governance",
    desc: "Granular role-based access controls. Assign permissions at user, team, and document level with a full audit trail.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" stroke="#00C805" strokeWidth="1.5"/>
        <path d="M6 16H34" stroke="#00C805" strokeWidth="1.5"/>
        <circle cx="12" cy="11" r="2" fill="#00C805"/>
        <circle cx="20" cy="11" r="2" fill="#00C805"/>
      </svg>
    ),
  },
];

const CONTROLS = [
  {
    category: "Data Isolation",
    items: [
      "Dedicated cloud tenant per firm",
      "No cross-tenant data sharing",
      "Isolated vector database per workspace",
      "Private model inference endpoints",
    ],
  },
  {
    category: "Access & Identity",
    items: [
      "SSO via SAML 2.0 / OIDC",
      "Multi-factor authentication enforced",
      "Session timeout and idle lockout",
      "API key scoping and rotation",
    ],
  },
  {
    category: "Monitoring & Audit",
    items: [
      "Immutable audit logs, 7-year retention",
      "Real-time anomaly detection",
      "SIEM integration via webhook",
      "User activity dashboards",
    ],
  },
  {
    category: "Incident Response",
    items: [
      "24/7 security operations center",
      "< 1hr critical incident SLA",
      "Dedicated customer security contact",
      "Annual penetration testing",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Security"
        description="Xvesting is SOC 2 Type II audited with AES-256 encryption. Your data is never used to train models. Enterprise-grade security for institutional investment teams."
        canonicalPath="/security"
        keywords="SOC 2 Type II, AES-256 encryption, enterprise security, investment data security, financial AI security, zero data training, admin governance"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://xvesting.ai/security#webpage",
            name: "Xvesting Security",
            headline: "Institutional-level security for investment AI",
            description:
              "Enterprise-grade security architecture for the Xvesting investment intelligence platform. SOC 2 Type II audited, AES-256 encryption, zero model training on client data.",
            url: "https://xvesting.ai/security",
            dateModified: "2026-09-01",
            publisher: { "@type": "Organization", "@id": "https://xvesting.ai/#organization" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://xvesting.ai/" },
                { "@type": "ListItem", position: 2, name: "Security", item: "https://xvesting.ai/security" },
              ],
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Xvesting Security Certifications",
            itemListElement: CERTIFICATIONS.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.title,
              description: c.desc,
            })),
          },
        ]}
      />
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative bg-black text-white pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-48 lg:pb-36 border-b border-grey-5 overflow-hidden">
          <SecurityHeroBg />
          <div className="relative container container-max-w-1360">
            <div className="flex flex-col items-center text-center gap-8 max-w-[52rem] mx-auto">
              <Eyebrow corners={["tl", "tr", "bl", "br"]}>Security</Eyebrow>
              <h1 className="text-display">
                Enterprise Security For High Stakes Investing
              </h1>
              <p className="text-body-L max-w-[38rem]" style={{ color: "rgba(255,255,255,0.65)" }}>
                Every firm's data is isolated, encrypted, and governed from day one. Xvesting is built to meet the requirements of the most security-conscious institutions on Wall Street.
              </p>
              <div className="pt-2">
                <a href="mailto:support@xvesting.co">
                  <ArrowBtn label="Request security review" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications grid */}
        <section className="bg-black text-white border-t border-grey-5 pt-20 pb-16 md:pt-24 md:pb-24">
          <div className="container container-max-w-1360 space-y-12">
            <Eyebrow corners={["tl"]}>Certifications & Standards</Eyebrow>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CERTIFICATIONS.map((c) => (
                <div key={c.title} className="relative border-t border-grey-5 pt-8 pb-7 space-y-5">
                  <Corner pos="tl" size="lg" color="flare" />
                  <div>{c.icon}</div>
                  <h3 className="text-body-M font-medium">{c.title}</h3>
                  <p className="text-body-XS text-white-80">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture diagram placeholder */}
        <section className="bg-grey-6 text-white pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360">
            <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-24">
              <div className="md:w-5/12 space-y-6">
                <Eyebrow corners={["bl"]}>Architecture</Eyebrow>
                <h2 className="text-h3">Your data never leaves your tenant.</h2>
                <p className="text-body-S text-white-80">
                  Xvesting deploys a fully isolated cloud environment per firm. Your documents, indexes, queries, and outputs exist exclusively within your tenant boundary — no shared infrastructure, no cross-contamination risk.
                </p>
                <p className="text-body-S text-white-80">
                  Inference runs on private endpoints. Even the AI models processing your proprietary data operate in a siloed compute layer, inaccessible to other tenants or Xvesting staff by default.
                </p>
              </div>
              <div className="flex-1 relative bg-black min-h-[20rem] flex items-center justify-center overflow-hidden">
                <Corner pos="tr" size="lg" />
                <Corner pos="bl" size="lg" color="flare" />
                {/* Architecture diagram — styled SVG */}
                <svg width="100%" viewBox="0 0 520 320" fill="none" className="max-w-[520px] p-6 md:p-8">
                  {/* Firm boundary */}
                  <rect x="20" y="20" width="480" height="280" stroke="#2C3333" strokeWidth="1" rx="2"/>
                  <text x="32" y="40" fill="#545A51" fontSize="10" fontFamily="monospace">YOUR FIRM TENANT (ISOLATED)</text>

                  {/* Boxes */}
                  <rect x="40" y="60" width="120" height="60" stroke="#2C3333" strokeWidth="1"/>
                  <text x="100" y="87" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Document</text>
                  <text x="100" y="101" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Ingestion</text>

                  <rect x="200" y="60" width="120" height="60" stroke="#00C805" strokeWidth="1"/>
                  <text x="260" y="87" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Vector Index</text>
                  <text x="260" y="101" fill="#00C805" fontSize="9" textAnchor="middle" fontFamily="monospace">(AES-256)</text>

                  <rect x="360" y="60" width="120" height="60" stroke="#2C3333" strokeWidth="1"/>
                  <text x="420" y="87" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Private LLM</text>
                  <text x="420" y="101" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Endpoint</text>

                  {/* Arrows */}
                  <path d="M160 90H200" stroke="#545A51" strokeWidth="1"/>
                  <path d="M195 87L200 90L195 93" stroke="#545A51" strokeWidth="1"/>
                  <path d="M320 90H360" stroke="#545A51" strokeWidth="1"/>
                  <path d="M355 87L360 90L355 93" stroke="#545A51" strokeWidth="1"/>

                  {/* Query flow */}
                  <rect x="40" y="180" width="120" height="60" stroke="#2C3333" strokeWidth="1"/>
                  <text x="100" y="207" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Analyst</text>
                  <text x="100" y="221" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Query</text>

                  <rect x="200" y="180" width="120" height="60" stroke="#2C3333" strokeWidth="1"/>
                  <text x="260" y="207" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Retrieval</text>
                  <text x="260" y="221" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Engine</text>

                  <rect x="360" y="180" width="120" height="60" stroke="#00C805" strokeWidth="1"/>
                  <text x="420" y="207" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="monospace">Cited</text>
                  <text x="420" y="221" fill="#00C805" fontSize="10" textAnchor="middle" fontFamily="monospace">Response</text>

                  <path d="M160 210H200" stroke="#545A51" strokeWidth="1"/>
                  <path d="M195 207L200 210L195 213" stroke="#545A51" strokeWidth="1"/>
                  <path d="M320 210H360" stroke="#545A51" strokeWidth="1"/>
                  <path d="M355 207L360 210L355 213" stroke="#545A51" strokeWidth="1"/>

                  {/* Vertical connector */}
                  <path d="M260 120V180" stroke="#2C3333" strokeWidth="1" strokeDasharray="4 3"/>
                  <path d="M420 120V180" stroke="#2C3333" strokeWidth="1" strokeDasharray="4 3"/>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Controls grid */}
        <section className="bg-black text-white border-t border-grey-5 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360 space-y-12">
            <div className="space-y-4">
              <Eyebrow corners={["tl", "br"]}>Security Controls</Eyebrow>
              <h2 className="text-h3 max-w-[28rem]">Built for compliance from the ground up.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {CONTROLS.map((c) => (
                <div key={c.category} className="space-y-5">
                  <h3 className="text-body-M font-medium border-b border-grey-5 pb-3">{c.category}</h3>
                  <ul className="space-y-3">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="h-px w-4 bg-zest shrink-0" />
                        <span className="text-body-S text-white-80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust FAQ */}
        <section className="bg-grey-6 text-white pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="container container-max-w-1360">
            <div className="flex flex-col gap-12 md:flex-row md:gap-20">
              <div className="md:w-5/12 space-y-4">
                <Eyebrow corners={["tl"]}>Common Questions</Eyebrow>
                <h2 className="text-h3">Answers for your security team.</h2>
              </div>
              <div className="flex-1 divide-y divide-grey-5">
                {[
                  {
                    q: "Can Xvesting staff access our documents?",
                    a: "No. Access to customer tenants requires explicit, time-limited customer approval and is logged immutably. Staff cannot view document contents by default.",
                  },
                  {
                    q: "Where is data stored geographically?",
                    a: "By default, US-East (AWS). Firms requiring EU or APAC residency can request dedicated regional deployments during onboarding.",
                  },
                  {
                    q: "Is Xvesting trained on our proprietary data?",
                    a: "Never. Xvesting explicitly prohibits using customer data for any model training or fine-tuning, including for internal R&D purposes.",
                  },
                  {
                    q: "What happens to data upon termination?",
                    a: "All customer data, indexes, and derived artifacts are cryptographically purged within 30 days of contract termination, with a deletion certificate provided.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="py-6 space-y-2">
                    <div className="text-body-M font-medium">{faq.q}</div>
                    <p className="text-body-S text-white-80">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white border-t border-grey-5 py-20 md:py-28">
          <div className="container container-max-w-1360 text-center space-y-6">
            <h2 className="text-h3 max-w-[28rem] mx-auto">Get the full security documentation.</h2>
            <p className="text-body-M text-white-80 max-w-[28rem] mx-auto">
              Request our SOC 2 Type II report, penetration test summary, and custom security review for your compliance team.
            </p>
            <a href="mailto:support@xvesting.co" className="inline-block pt-2">
              <ArrowBtn label="Request security package" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
