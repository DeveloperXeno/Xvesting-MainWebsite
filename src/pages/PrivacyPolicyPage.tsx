import { NavBar, Footer, Eyebrow } from "../components/layout";
import SEO from "../components/SEO";

const SECTIONS = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, as well as data generated automatically when you use our platform.

• **Account Information:** Name, email address, password, and optional profile details.
• **Contact Information:** Information submitted through forms or direct communication.
• **Usage Data:** IP address, browser type, device information, pages visited, time spent, and diagnostic logs.
• **Financial Workflow Data:** Documents, files, and data you upload to Xvesting for processing, including research, financial models, and internal notes.
• **Communication Data:** Support tickets, onboarding conversations, and other correspondence.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use collected information to:

• **Service Delivery:** Operate, maintain, and improve the Xvesting platform.
• **Account Management:** Authenticate your identity and manage your account.
• **Communications:** Send transactional emails, updates, and security alerts.
• **Analytics:** Understand usage patterns and improve platform performance.
• **Security:** Detect, prevent, and respond to fraud, abuse, and security incidents.
• **Business Operations:** Billing, auditing, and enforcing our Terms of Service.`,
  },
  {
    title: "3. How We Share Your Information",
    content: `Xvesting does not sell your personal information. We may share information only in these limited cases:

• **Service Providers:** Cloud hosting, analytics, and operational vendors under strict data processing agreements.
• **Legal Requirements:** When required by law or to protect safety and security.
• **Business Transfers:** If Xvesting undergoes a merger or acquisition.
• **With Your Consent:** Only when you explicitly approve additional sharing.

We never share your uploaded financial documents except as required to operate the infrastructure that processes your requests.`,
  },
  {
    title: "4. Data Security",
    content: `We implement enterprise-grade security measures:

• **Encryption:** TLS 1.2+ in transit, AES-256 at rest.
• **Access Controls:** Strict role-based access and multi-factor authentication.
• **Audit Logging:** Monitoring for unauthorized or anomalous activity.
• **No Model Training:** Your uploaded data is never used to train or fine-tune any AI model.
• **Infrastructure Hardening:** Regular internal reviews and third-party assessments.

Despite these protections, no system is completely impenetrable. Please use strong passwords and notify us at security@xvesting.co if you suspect unauthorized access.`,
  },
  {
    title: "5. Data Retention",
    content: `• **Account Data:** Retained while your account is active and up to 90 days after termination.
• **Uploaded Documents:** Deleted within 30 days after account termination unless legally required otherwise.
• **Usage Logs:** Retained for up to 12 months.
• **Support Communications:** Retained for up to 3 years.

You may request deletion at any time by contacting privacy@xvesting.co.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your region, you may have rights to:

• Access your personal data.
• Correct inaccurate information.
• Delete your data.
• Request portability of your data.
• Object to certain processing.
• Withdraw consent where applicable.

We respond to verified requests within 30 days.`,
  },
  {
    title: "7. Cookies and Tracking",
    content: `Xvesting uses:

• **Essential Cookies:** Required for login and core functionality.
• **Analytics Cookies:** For usage insights (optional).
• **Performance Cookies:** For speed and optimization.

We do not use advertising cookies or sell browsing data.`,
  },
  {
    title: "8. International Data Transfers",
    content: `Xvesting is operated from the United States. If you access the platform from outside the U.S., your data may be processed there. We use Standard Contractual Clauses where required by applicable law.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Xvesting is not intended for individuals under 18. We do not knowingly collect data from minors.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy as needed. When changes occur, we will:

• Notify you via email
• Display a notice within the platform
• Update the "Last Updated" date

Continued use of Xvesting means you accept the updated policy.`,
  },
  {
    title: "11. Contact Us",
    content: `For privacy questions or requests: privacy@xvesting.co
For security concerns: security@xvesting.co
For DPO or compliance inquiries: dpo@xvesting.co`,
  },
];

function renderContent(text: string) {
  return text.split("\n\n").map((para, pi) => (
    <p key={pi} className="text-body-S text-white-80 leading-relaxed">
      {para.split("\n").map((line, li) => {
        const bold = line.replace(/\*\*(.*?)\*\*/g, (_, m) => `__BOLD__${m}__BOLD__`);
        const parts = bold.split(/(__|BOLD__.*?__BOLD__)/);
        return (
          <span key={li}>
            {line.startsWith("•") ? (
              <span className="flex gap-3 mt-2">
                <span className="text-zest shrink-0 mt-0.5">—</span>
                <span>
                  {line.slice(2).split(/\*\*(.*?)\*\*/).map((seg, si) =>
                    si % 2 === 1 ? <strong key={si} className="text-white font-medium">{seg}</strong> : seg
                  )}
                </span>
              </span>
            ) : (
              <>
                {line.split(/\*\*(.*?)\*\*/).map((seg, si) =>
                  si % 2 === 1 ? <strong key={si} className="text-white font-medium">{seg}</strong> : seg
                )}
                {li < para.split("\n").length - 1 && <br />}
              </>
            )}
          </span>
        );
      })}
    </p>
  ));
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <SEO
        title="Privacy Policy"
        description="Read Xvesting's privacy policy to understand how we collect, use, and protect your personal information and investment data."
        canonicalPath="/privacy-policy"
        noIndex
      />
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-32">
          <div className="container container-max-w-1360">
            <div className="space-y-8 max-w-[52rem]">
              <Eyebrow corners={["tl", "br"]}>Legal</Eyebrow>
              <h1 className="text-h1">Xvesting Privacy Policy</h1>
              <p className="text-body-M text-white-80 max-w-[38rem]">
                Xvesting ("we", "our", "us") provides AI-powered financial research and workflow tools. This Privacy Policy explains how we collect, use, store, and protect your information when you use Xvesting.co.
              </p>
              <div className="text-body-XS text-white-80 border-t border-grey-5 pt-6">
                Last Updated: August 2026 &nbsp;·&nbsp; Domain: Xvesting.co
              </div>
            </div>
          </div>
        </section>

        {/* Policy body */}
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
                      href={`#section-${i}`}
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
                  <div key={i} id={`section-${i}`} className="scroll-mt-32 border-t border-grey-5 pt-10 space-y-5">
                    <h2 className="text-h6 text-white">{s.title}</h2>
                    <div className="space-y-4">
                      {renderContent(s.content)}
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
              <h2 className="text-h3">Questions about your data?</h2>
              <p className="text-body-S text-white-80">
                Our Privacy Team is available to answer any questions about how we handle your information, fulfill data subject requests, or discuss our security posture.
              </p>
              <a
                href="mailto:privacy@xvesting.co"
                className="inline-flex items-center text-btn-link group text-white pt-2"
              >
                <div className="border-grey-3 mr-2.5 grid shrink-0 overflow-hidden border-y size-5">
                  <div className="col-start-1 row-start-1 flex items-center justify-center size-5 transition duration-[400ms] will-change-transform group-hover:translate-x-full">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M0.286 7L12.286 7" stroke="currentColor" strokeWidth="1.5"/><path d="M6.62 1L12.62 7L6.62 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel"/></svg>
                  </div>
                  <div className="col-start-1 row-start-1 flex items-center justify-center size-5 transition duration-[400ms] will-change-transform -translate-x-full group-hover:translate-x-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M0.286 7L12.286 7" stroke="currentColor" strokeWidth="1.5"/><path d="M6.62 1L12.62 7L6.62 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel"/></svg>
                  </div>
                </div>
                <span className="transition duration-[400ms] group-hover:opacity-70">Contact privacy@xvesting.co</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
