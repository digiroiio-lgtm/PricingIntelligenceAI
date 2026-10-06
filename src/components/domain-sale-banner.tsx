"use client";

import { Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SITE } from "@/lib/site";

export function DomainSaleBanner() {
  const mailto = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
    `Corporate transfer inquiry: ${SITE.domain}`,
  )}&body=${encodeURIComponent(
    `Hello,\n\nI would like to inquire about acquiring ${SITE.domain}.\n\nCompany:\nName / title:\nTimeline:\n`,
  )}`;

  return (
    <aside
      aria-label="Domain acquisition notice"
      className="sticky top-0 z-50 border-b border-slate-700 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-2 text-sm sm:flex-row sm:justify-between">
        <p className="text-center sm:text-left">
          <span className="font-semibold text-emerald-400">Strategic Asset Notice:</span>{" "}
          {SITE.name}.com is available for corporate acquisition.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="sm">
            <a href={SITE.afternicUrl} target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
              Buy via Afternic ({SITE.salePriceLabel} BIN)
            </a>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" size="sm" className="h-8 px-1">
                Inquire Corporate Transfer
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle asChild>
                <p className="pr-6 text-lg font-semibold">Inquire about {SITE.domain}</p>
              </DialogTitle>
              <DialogDescription className="mt-2 text-sm text-slate-300">
                The domain and category asset are offered for strategic corporate acquisition at{" "}
                {SITE.salePriceLabel} {SITE.currency} Buy It Now via Afternic escrow. For a direct corporate transfer
                or purchase-order process, email us with your company details.
              </DialogDescription>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={mailto}>
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email {SITE.contactEmail}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.afternicUrl} target="_blank" rel="noopener noreferrer">
                    View Afternic listing
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </aside>
  );
}
