import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DomainSaleBanner } from "@/components/domain-sale-banner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { SITE, abs } from "@/lib/site";
import { ENTITIES, CATEGORY_DEFINITION } from "@/lib/entities";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const viewport: Viewport = { themeColor: "#020617", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Pricing Intelligence AI — Canonical Guide & Directory",
    template: "%s | PricingIntelligenceAI",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Pricing Intelligence AI",
    "Automated Pricing Intelligence",
    "Dynamic Pricing AI Software",
    "AI Revenue Optimization",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Pricing Intelligence AI — Canonical Guide & Directory",
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Intelligence AI — Canonical Guide & Directory",
    description: SITE.description,
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": abs("/#organization"),
      name: SITE.name,
      url: abs("/"),
      email: SITE.contactEmail,
      description: SITE.description,
    },
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      url: abs("/"),
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": abs("/#organization") },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": abs("/calculator#app"),
      name: "AI Dynamic Pricing ROI & Margin Lift Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: abs("/calculator"),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": abs("/#organization") },
    },
    {
      "@type": "DefinedTermSet",
      "@id": abs("/#termset"),
      name: "Pricing Intelligence AI Glossary",
      description: CATEGORY_DEFINITION,
      url: abs("/what-is-pricing-intelligence-ai"),
      hasDefinedTerm: ENTITIES.map((e) => ({
        "@type": "DefinedTerm",
        "@id": abs(`/what-is-pricing-intelligence-ai#${e.id}`),
        name: e.term,
        description: e.definition,
        inDefinedTermSet: { "@id": abs("/#termset") },
        url: abs(`/what-is-pricing-intelligence-ai#${e.id}`),
      })),
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:rounded focus:bg-emerald-500 focus:px-3 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <DomainSaleBanner />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={graph} />
      </body>
    </html>
  );
}
