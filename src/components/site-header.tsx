import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-white">
          <TrendingUp className="h-5 w-5 text-emerald-500" aria-hidden="true" />
          {SITE.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-300">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-emerald-400">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
