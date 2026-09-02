import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  structuredData?: object | object[];
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
}

const SITE_NAME = "Xvesting";
const BASE_URL = "https://xvesting.ai";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION =
  "Xvesting is an AI-powered investing intelligence platform offering real-time market analysis, portfolio insights, automated workflows, and a secure private dataroom.";
const DEFAULT_KEYWORDS =
  "Xvesting, AI investing, market analysis, fintech, portfolio analytics, investing AI, market intelligence, dataroom, workflows, financial insights, trading analysis";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonicalPath = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  structuredData,
  keywords = DEFAULT_KEYWORDS,
  publishedTime,
  modifiedTime,
  author = "Xvesting",
  section,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME} — AI‑Powered Investing Analysis & Market Intelligence`
    : `${SITE_NAME} — AI‑Powered Investing Analysis & Market Intelligence`;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title ? `${SITE_NAME} — ${title}` : `${SITE_NAME} — AI Investing Intelligence`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — AI Investing Platform`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific Open Graph */}
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === "article" && section && (
        <meta property="article:section" content={section} />
      )}

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@xvesting" />
      <meta name="twitter:creator" content="@xvesting" />
      <meta name="twitter:title" content={title ? `${SITE_NAME} — ${title}` : `${SITE_NAME} — AI Investing Intelligence`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — AI Investing Platform`} />

      {/* Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema, null, 0)}
        </script>
      ))}
    </Helmet>
  );
}
