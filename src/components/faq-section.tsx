import type { Faq } from "@/lib/faq";

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-slate-800 rounded-xl border border-slate-800 bg-slate-900/60">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5" itemScope itemType="https://schema.org/Question">
          <summary className="cursor-pointer list-none font-semibold text-slate-100 marker:hidden" itemProp="name">
            {f.q}
          </summary>
          <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
            <p className="mt-3 text-slate-300" itemProp="text">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
