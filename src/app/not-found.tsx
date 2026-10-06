import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-4 text-slate-300">
        Try the <Link className="text-emerald-400 underline" href="/what-is-pricing-intelligence-ai">Pricing Intelligence AI guide</Link> or the{" "}
        <Link className="text-emerald-400 underline" href="/software-directory">software directory</Link>.
      </p>
    </section>
  );
}
