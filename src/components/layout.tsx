import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import xvestingLogo from "@/imports/image_2026-08-26_163147488-removebg-preview.png";

// ── Logo SVG ──────────────────────────────────────────────────────────────────
export function LogoSVG({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <img src={xvestingLogo} alt="Xvesting" style={{ height: "2.5rem", width: "auto", objectFit: "contain" }} />
      <span style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "0.06em", lineHeight: 1, color: "white" }}>Xvesting</span>
    </span>
  );
}

// ── Arrow button ──────────────────────────────────────────────────────────────
export function ArrowBtn({ label, dark = false }: { label: string; dark?: boolean }) {
  const base = dark
    ? "bg-grey-6 text-white hover:bg-grey-5"
    : "bg-white text-black hover:bg-grey-1";
  return (
    <div className={`inline-flex items-center justify-center text-btn-link group transition-colors duration-[400ms] h-9 sm:h-10 pl-4 pr-2 ${base}`}>
      {label}
      <div className="ml-1 grid shrink-0 overflow-hidden size-6">
        <div className="col-start-1 row-start-1 flex items-center justify-center size-6 transition duration-[400ms] will-change-transform group-hover:-translate-y-full">
          <ArrowUpIcon />
        </div>
        <div className="col-start-1 row-start-1 flex items-center justify-center size-6 transition duration-[400ms] will-change-transform translate-y-full group-hover:translate-y-0">
          <ArrowUpIcon />
        </div>
      </div>
    </div>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 16.625L12 7.625" stroke="currentColor" strokeWidth="1.25" />
      <path d="M7.5 11.875L12 7.375L16.5 11.875" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="bevel" />
    </svg>
  );
}

// ── Arrow link ────────────────────────────────────────────────────────────────
export function ArrowLink({ label, light = false }: { label: string; light?: boolean }) {
  const color = light ? "text-white" : "text-black";
  return (
    <div className={`inline-flex items-center text-btn-link group ${color}`}>
      <div className="border-grey-3 mr-2.5 grid shrink-0 overflow-hidden border-y size-5">
        <div className="col-start-1 row-start-1 flex items-center justify-center size-5 transition duration-[400ms] will-change-transform group-hover:translate-x-full">
          <RightArrowSmall />
        </div>
        <div className="col-start-1 row-start-1 flex items-center justify-center size-5 transition duration-[400ms] will-change-transform -translate-x-full group-hover:translate-x-0">
          <RightArrowSmall />
        </div>
      </div>
      <span className="transition duration-[400ms] group-hover:opacity-70">{label}</span>
    </div>
  );
}

function RightArrowSmall() {
  return (
    <div className="w-2.5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M0.286 7L12.286 7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.62 1L12.62 7L6.62 13" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel" />
      </svg>
    </div>
  );
}

// ── Corner accent ─────────────────────────────────────────────────────────────
export function Corner({
  pos,
  color = "zest",
  size = "sm",
}: {
  pos: "tl" | "tr" | "bl" | "br";
  color?: "zest" | "flare";
  size?: "sm" | "lg";
}) {
  const posMap = { tl: "top-0 left-0", tr: "top-0 right-0", bl: "bottom-0 left-0", br: "bottom-0 right-0" };
  const bg = color === "flare" ? "bg-flare" : "bg-zest";
  const dims = size === "lg" ? "aspect-[16/4] w-4" : "h-1 w-3";
  return <div className={`absolute ${posMap[pos]} ${bg} ${dims}`} />;
}

// ── Eyebrow ───────────────────────────────────────────────────────────────────
export function Eyebrow({
  children,
  corners = [],
  dimColor = false,
}: {
  children: React.ReactNode;
  corners?: Array<"tl" | "tr" | "bl" | "br">;
  dimColor?: boolean;
}) {
  return (
    <div className={`text-eyebrow relative inline-block px-5 ${dimColor ? "text-grey-4" : ""}`}>
      <span className="text-eyebrow">{children}</span>
      {corners.includes("tr") && <Corner pos="tr" size="sm" />}
      {corners.includes("br") && <Corner pos="br" size="sm" />}
      {corners.includes("bl") && <Corner pos="bl" size="sm" />}
      {corners.includes("tl") && <Corner pos="tl" size="sm" />}
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "APIs", href: "/apis" },
  { label: "Security", href: "/security" },
  { label: "Research", href: "/research" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header
        className="sticky inset-x-0 top-0 z-50 flex items-center justify-center transition-[background-color] duration-300 bg-black text-white"
        style={{ height: "var(--header-height, 4rem)" }}
      >
        <div className="!w-full px-4">
          <div className="flex items-center justify-between">
            <Link to="/" aria-label="Back to Home" className="block shrink-0 transition duration-300 hover:opacity-70">
              <LogoSVG />
            </Link>

            <nav className="absolute left-1/2 -translate-x-1/2 max-lg:hidden">
              <ul className="flex items-center gap-x-8">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link
                      className={`text-nav-link transition duration-300 hover:opacity-70 ${location.pathname === l.href ? "opacity-100" : "opacity-70"}`}
                      to={l.href}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="max-lg:hidden">
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://app.xvesting.co/" target="_blank" rel="noopener noreferrer">
                    <ArrowBtn label="Xvesting Login" dark />
                  </a>
                </li>
              </ul>
            </nav>

            <label
              htmlFor="mobile-nav-toggle"
              aria-label="Toggle Menu"
              className="grid size-6 cursor-pointer items-center justify-center lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {!open ? (
                <svg width="22" height="15" viewBox="0 0 22 15" fill="none">
                  <path d="M0 1.5H11" stroke="currentColor" strokeWidth="3" />
                  <path d="M11 1.5H22" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 7.5H11" stroke="currentColor" strokeWidth="3" />
                  <path d="M11 7.5H22" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M0 13.5H11" stroke="currentColor" strokeWidth="3" />
                  <path d="M11 13.5H22" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4.5 5L11.5 12H12.5L19.5 5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M4.5 19L11.5 12H12.5L19.5 19" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10.26 12H13.76" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="bevel" />
                </svg>
              )}
            </label>
          </div>
        </div>
      </header>

      {open && (
        <div className="bg-black text-white border-grey-5 fixed inset-x-0 z-50 flex h-[calc(100dvh-4rem)] gap-x-6 overflow-scroll border-t lg:hidden" style={{ top: "4rem" }}>
<div className="flex flex-1 flex-col gap-y-16 pt-14 pr-10 pb-10">
            <nav>
              <ul className="space-y-9">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <Link className="text-mobile-nav-link text-h6" to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="mt-auto">
              <a href="https://app.xvesting.co/" target="_blank" rel="noopener noreferrer" className="block">
                <ArrowBtn label="Xvesting Login" />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-max-w-1200 container">
        <div className="flex flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between md:gap-0">
          <Link to="/" className="shrink-0">
            <LogoSVG />
          </Link>
          <div className="text-colophon text-white/50">
            &copy; 2026 Xvesting. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex gap-5">
                <li>
                  <Link to="/terms-of-service" className="text-colophon text-white/50 hover:text-white/80 transition-colors duration-200">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-colophon text-white/50 hover:text-white/80 transition-colors duration-200">Privacy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
