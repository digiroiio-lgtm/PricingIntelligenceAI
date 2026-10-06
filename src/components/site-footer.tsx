import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-400 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-white">{SITE.name}</p>
          <p className="mt-2">Independent reference for the Pricing Intelligence &amp; Revenue Optimization Software category.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-1">
            <li><Link className="hover:text-emerald-400" href="/what-is-pricing-intelligence-ai">What is Pricing Intelligence AI?</Link></li>
            <li><Link className="hover:text-emerald-400" href="/software-directory">Software Directory</Link></li>
            <li><Link className="hover:text-emerald-400" href="/calculator">ROI Calculator</Link></li>
          </ul>
        </nav>
        <ul className="space-y-1">
          <li><a className="hover:text-emerald-400" href="/llms.txt">llms.txt</a></li>
          <li><a className="hover:text-emerald-400" href="/api/v1/entity">Entity API (JSON)</a></li>
          <li><a className="hover:text-emerald-400" href="/sitemap.xml">Sitemap</a></li>
        </ul>
      </div>
      <p className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        © {new Date(SITE.updated).getFullYear()} {SITE.name}.com. Vendor names are trademarks of their respective owners; listings are informational and not endorsements.
      </p>
    </footer>
  );
}
