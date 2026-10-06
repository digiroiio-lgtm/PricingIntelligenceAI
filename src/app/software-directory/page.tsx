import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { G2_CATEGORIES, VENDORS } from "@/lib/vendors";
import { abs } from "@/lib/site";

const title = "Pricing Intelligence & Dynamic Pricing Software Directory";
const description = `Comparison grid of ${VENDORS.length} pricing intelligence, dynamic pricing and revenue optimization vendors including Competera, Pricefx, Omnia Retail, PROS and Zilliant, grouped by G2 category.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/software-directory" },
  openGraph: { title, description, url: abs("/software-directory"), type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function DirectoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: title,
            numberOfItems: VENDORS.length,
            itemListElement: VENDORS.map((v, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "SoftwareApplication", name: v.name, url: v.url, applicationCategory: "BusinessApplication" },
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "Software Directory", item: abs("/software-directory") },
            ],
          },
        ]}
      />
      <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        An independent, informational overview of vendors in the Pricing Intelligence AI category. Descriptions are
        high-level and may not reflect current product capabilities; verify details on each vendor&apos;s website.
        Listings are not endorsements and no vendor has paid for placement.
      </p>

      <h2 className="mt-12 text-2xl font-semibold text-white">Vendors by G2 category</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {G2_CATEGORIES.map((c) => (
          <li key={c} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <h3 className="font-semibold text-emerald-400">{c}</h3>
            <p className="mt-1 text-sm text-slate-300">
              {VENDORS.filter((v) => v.categories.includes(c)).map((v) => v.name).join(", ")}
            </p>
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-semibold text-white">Comparison grid</h2>
      <div className="mt-4 overflow-x-auto rounded-xl border border-slate-800">
        <table className="w-full min-w-[720px] text-left text-sm">
          <caption className="sr-only">Pricing intelligence software vendors compared by category, segment and focus</caption>
          <thead className="bg-slate-900 text-slate-300">
            <tr>
              <th scope="col" className="p-3">Vendor</th>
              <th scope="col" className="p-3">G2 categories</th>
              <th scope="col" className="p-3">Typical segment</th>
              <th scope="col" className="p-3">Focus</th>
              <th scope="col" className="p-3">Deployment</th>
            </tr>
          </thead>
          <tbody>
            {VENDORS.map((v) => (
              <tr key={v.name} className="border-t border-slate-800 align-top">
                <th scope="row" className="p-3 font-semibold text-white">
                  <a href={v.url} target="_blank" rel="nofollow noopener noreferrer" className="text-emerald-400 hover:underline">
                    {v.name}
                  </a>
                </th>
                <td className="p-3">
                  <span className="flex flex-wrap gap-1">
                    {v.categories.map((c) => (
                      <Badge key={c}>{c}</Badge>
                    ))}
                  </span>
                </td>
                <td className="p-3 text-slate-300">{v.segment}</td>
                <td className="p-3 text-slate-300">{v.focus}</td>
                <td className="p-3 text-slate-300">{v.deployment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
