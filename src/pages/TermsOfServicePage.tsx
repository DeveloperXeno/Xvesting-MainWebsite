import { NavBar, Footer, Eyebrow } from "../components/layout";
import SEO from "../components/SEO";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Xvesting platform, website, APIs, or related services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that entity. If you do not agree to these Terms, you may not use the Services.`,
  },
  {
    title: "2. Description of Services",
    content: `Xvesting provides an AI-powered financial research and intelligence platform designed for investment professionals. Features may include:

• AI-assisted document search and retrieval
• Natural-language query answering with citation-grounded responses
• Document ingestion, indexing, and knowledge base management
• Automated report generation and workflow tools
• API access for programmatic integration
• Custom AI agent deployment and financial domain expert support

Available features depend on your subscription plan or applicable order forms.`,
  },
  {
    title: "3. Eligibility and Account Registration",
    content: `You must be at least 18 years old and legally able to enter into these Terms. To access most features, you must create an account and provide accurate, current information. You are responsible for maintaining the confidentiality of your login credentials and all activity under your account.

If registering on behalf of an organization, you confirm you are authorized to do so and that all users within your organization are bound by these Terms.`,
  },
  {
    title: "4. Subscriptions, Fees, and Payment",
    content: `Access to the Services is subscription-based. Pricing and plan details are listed on Xvesting.co or in your order form.

• Fees are billed monthly or annually in advance.
• All fees are non-refundable unless required by law.
• Subscriptions automatically renew unless cancelled at least 30 days before renewal.
• Xvesting may adjust pricing with 30 days' notice.
• You are responsible for all applicable taxes.`,
  },
  {
    title: "5. Acceptable Use",
    content: `You agree not to:

• Violate any applicable laws or regulations
• Upload content that infringes third-party rights
• Attempt unauthorized access to the Services or related systems
• Use bots, scrapers, or automated tools beyond permitted API usage
• Reverse engineer or attempt to derive source code or underlying models
• Use the Services to build competing products
• Share account credentials with unauthorized parties
• Upload malware or harmful code

Xvesting may suspend or terminate accounts violating these rules.`,
  },
  {
    title: "6. Intellectual Property",
    content: `All software, models, algorithms, interfaces, and content produced by Xvesting (excluding your content) remain the exclusive property of Xvesting and its licensors.

You receive a limited, non-exclusive, non-transferable license to use the Services during your subscription term for internal business purposes.

You retain ownership of all documents and data you upload ("Customer Content"). Xvesting processes Customer Content solely to provide the Services and does not use it to train or improve any AI models.

Feedback you provide may be used by Xvesting without restriction.`,
  },
  {
    title: "7. Data Privacy and Security",
    content: `Xvesting processes personal data according to its Privacy Policy, incorporated by reference.

Security measures include:

• AES-256 encryption at rest and TLS 1.2+ in transit
• SOC 2 Type II audited infrastructure
• Role-based access controls
• Isolated tenant data environments
• No model training on Customer Content

You are responsible for ensuring your use of the Services complies with applicable regulations (SEC, FINRA, GDPR, CCPA, etc.).`,
  },
  {
    title: "8. Confidentiality",
    content: `Each party may disclose confidential information to the other. Both parties agree to protect such information with reasonable care, not disclose it to third parties, and use it only as necessary to perform obligations under these Terms.

Exceptions apply to information that is public, previously known, independently developed, or required to be disclosed by law.`,
  },
  {
    title: "9. Disclaimers and Limitations of Liability",
    content: `The Services provide research tools only. Nothing provided constitutes investment advice or a recommendation.

**Disclaimer:** The Services are provided "as is" without warranties of any kind, including merchantability, fitness for a particular purpose, or non-infringement.

**Limitation:** To the maximum extent permitted by law, Xvesting is not liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or goodwill. Xvesting's total liability will not exceed the fees paid by you in the 12 months preceding the claim.`,
  },
  {
    title: "10. Indemnification",
    content: `You agree to indemnify and hold harmless Xvesting from claims arising from:

• Your use of the Services
• Your Customer Content
• Your violation of laws or regulations
• Investment decisions made using outputs from the Services

Xvesting may assume control of the defense of any indemnified claim.`,
  },
  {
    title: "11. Term and Termination",
    content: `These Terms remain effective until terminated.

You may terminate your subscription with 30 days' written notice. Xvesting may suspend or terminate your access for material breach, insolvency, or legal requirements.

Upon termination, your license ends immediately. Customer Content will be deleted within 30 days. Sections 6, 8, 9, 10, and 12 survive termination.`,
  },
  {
    title: "12. Governing Law and Dispute Resolution",
    content: `These Terms are governed by the laws of the State of New York.

Disputes will be resolved through binding arbitration administered by the American Arbitration Association in New York, NY. Proceedings are conducted individually; class actions are waived.

Either party may seek injunctive relief in court for intellectual property or confidentiality violations.`,
  },
  {
    title: "13. Modifications to These Terms",
    content: `Xvesting may update these Terms at any time. Material changes will be communicated via email, platform notice, and updated "Last Updated" date. Continued use of the Services constitutes acceptance of updated Terms.`,
  },
  {
    title: "14. General Provisions",
    content: `These Terms, along with the Privacy Policy and applicable order forms, constitute the entire agreement.

If any provision is unenforceable, the remainder remains in effect. Failure to enforce a provision is not a waiver. You may not assign these Terms without consent; Xvesting may assign them in connection with a merger or acquisition. Neither party is liable for delays caused by events beyond reasonable control.

**Contact:** For legal questions: legal@xvesting.co`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Terms of Service"
        description="Read Xvesting's terms of service governing your use of the AI investment intelligence platform."
        canonicalPath="/terms-of-service"
        noIndex
      />
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
          <div className="container container-max-w-1360">
            <div className="space-y-8 max-w-[52rem]">
              <Eyebrow corners={["tl", "br"]}>Legal</Eyebrow>
              <h1 className="text-h1">Terms of Service</h1>
              <p className="text-body-M text-white-80 max-w-[38rem]">
                These Terms govern your access to and use of the Xvesting platform and services. Please read them carefully before using our products.
              </p>
              <div className="text-body-XS text-white-80 border-t border-grey-5 pt-6">
                Last Updated: August 2026 &nbsp;·&nbsp; Domain: Xvesting.co
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="bg-grey-6 text-white py-20 md:py-28">
          <div className="container container-max-w-1360">
            <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-16 lg:gap-20 xl:gap-28">
              {/* Sidebar TOC */}
              <nav className="hidden lg:block">
                <div className="sticky top-28 space-y-1">
                  <div className="text-eyebrow text-white-80 mb-5">Table of Contents</div>
                  {SECTIONS.map((s, i) => (
                    <a
                      key={i}
                      href={`#tos-${i}`}
                      className="block text-body-XS text-white-80 hover:text-white transition-colors duration-200 py-1.5 border-l border-grey-5 pl-4 hover:border-zest"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Sections */}
              <div className="space-y-14 md:space-y-16">
                {SECTIONS.map((s, i) => (
                  <div key={i} id={`tos-${i}`} className="scroll-mt-32 border-t border-grey-5 pt-10 space-y-5">
                    <h2 className="text-h6 text-white">{s.title}</h2>
                    <div className="space-y-4">
                      {s.content.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-body-S text-white-80 leading-relaxed">
                          {para.split("\n").map((line, li, arr) =>
                            line.startsWith("•") ? (
                              <span key={li} className="flex gap-3 mt-2">
                                <span className="text-zest shrink-0 mt-0.5">—</span>
                                <span>
                                  {line.slice(2).split(/\*\*(.*?)\*\*/).map((seg, si) =>
                                    si % 2 === 1
                                      ? <strong key={si} className="text-white font-medium">{seg}</strong>
                                      : seg
                                  )}
                                </span>
                              </span>
                            ) : (
                              <span key={li}>
                                {line.split(/\*\*(.*?)\*\*/).map((seg, si) =>
                                  si % 2 === 1
                                    ? <strong key={si} className="text-white font-medium">{seg}</strong>
                                    : seg
                                )}
                                {li < arr.length - 1 && <br />}
                              </span>
                            )
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-20 md:py-28">
          <div className="container container-max-w-1360">
            <div className="relative border border-grey-5 p-8 md:p-12 lg:p-16 space-y-5 max-w-[44rem]">
              <div className="absolute top-0 left-0 bg-zest aspect-[16/4] w-4" />
              <div className="absolute bottom-0 right-0 bg-flare aspect-[16/4] w-4" />
              <h2 className="text-h3">Questions about these Terms?</h2>
              <p className="text-body-S text-white-80">
                Our legal team is available to discuss any questions you have about our Terms of Service, data agreements, or compliance requirements.
              </p>
              <a
                href="mailto:legal@xvesting.co"
                className="inline-flex items-center text-btn-link group text-white pt-2"
              >
                <div className="border-grey-3 mr-2.5 grid shrink-0 overflow-hidden border-y size-5">
                  <div className="col-start-1 row-start-1 flex items-center justify-center size-5 transition duration-[400ms] will-change-transform group-hover:translate-x-full">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M0.286 7L12.286 7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6.62 1L12.62 7L6.62 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel"/>
                    </svg>
                  </div>
                  <div className="col-start-1 row-start-1 flex items-center justify-center size-5 transition duration-[400ms] will-change-transform -translate-x-full group-hover:translate-x-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M0.286 7L12.286 7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6.62 1L12.62 7L6.62 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel"/>
                    </svg>
                  </div>
                </div>
                <span className="transition duration-[400ms] group-hover:opacity-70">Contact legal@xvesting.co</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
