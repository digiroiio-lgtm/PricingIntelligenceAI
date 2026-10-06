export const SITE = {
  name: "PricingIntelligenceAI",
  domain: "pricingintelligenceai.com",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://pricingintelligenceai.com").replace(/\/$/, ""),
  tagline: "The Canonical Guide & Directory for AI-Driven Pricing Intelligence",
  description:
    "Definitions, architecture, vendor directory and ROI calculator for Pricing Intelligence AI: autonomous dynamic pricing, real-time competitor tracking and AI revenue optimization.",
  afternicUrl:
    process.env.NEXT_PUBLIC_AFTERNIC_URL || "https://www.afternic.com/domain/pricingintelligenceai.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "domains@pricingintelligenceai.com",
  salePrice: 10888,
  salePriceLabel: "$10,888",
  currency: "USD",
  updated: "2026-10-06",
} as const;

export const NAV = [
  { href: "/what-is-pricing-intelligence-ai", label: "What is Pricing Intelligence AI?" },
  { href: "/software-directory", label: "Software Directory" },
  { href: "/calculator", label: "ROI Calculator" },
] as const;

export function abs(path = "/") {
  return `${SITE.url}${path === "/" ? "" : path}`;
}
