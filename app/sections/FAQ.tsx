"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionIntro from "../components/SectionIntro";

type Item = {
  q: string;
  a: React.ReactNode;
};

const items: Item[] = [
  {
    q: "How is this different from Dubsado, HoneyBook, or Accelo?",
    a: (
      <>
        Dubsado and HoneyBook are built for creative freelancers —
        photographers, wedding planners, coaches. Accelo is built for 20+
        person agencies with project managers and resource planning. FirmLock
        sits in the middle: independent consultants and boutique firms who
        charge professional-services rates and need the aesthetic, the
        workflows, and the AI tooling to match.
      </>
    ),
  },
  {
    q: "What can the AI tools actually do?",
    a: (
      <>
        Five things, all grounded in your real client data: draft monthly
        executive summaries, generate full proposals from a paragraph brief,
        suggest invoice line items from a work description, flag at-risk
        clients with health insights, and create branded email templates. AI
        handles the first draft — you stay in control of what goes out.
      </>
    ),
  },
  {
    q: "Can clients pay me online?",
    a: (
      <>
        Yes. Invoices include a one-click pay-by-card link powered by Stripe.
        Funds settle into your connected Stripe account. Recurring invoices
        run automatically on monthly or quarterly schedules, and overdue
        detection triggers reminder emails on your configured cadence.
      </>
    ),
  },
  {
    q: "What does the client portal look like?",
    a: (
      <>
        Each client sees a portal with your firm&apos;s logo, brand colors,
      and tagline — set up in minutes from your dashboard. The URL is
      hosted on firmlock.app with your firm&apos;s identifier (e.g.,{" "}
      <strong>firmlock.app/yourfirm</strong>). FirmLock branding doesn&apos;t
      appear to your clients. Per-consultant custom domains
      (clients.yourfirm.com) are on the roadmap.
      </>
    ),
  },
  {
    q: "Is there a mobile app?",
    a: (
      <>
        FirmLock is a Progressive Web App — installable on iOS and Android
        from the browser. You get push notifications, offline caching, a
        bottom tab bar, pull-to-refresh, and swipe navigation. No app store
        required.
      </>
    ),
  },
  {
    q: "What billing models are supported?",
    a: (
      <>
        Five: flat retainer, hourly, fixed project, milestone-based, and
        retainer-with-overage. Configure any combination per engagement. Time
        tracking and overage detection are built in.
      </>
    ),
  },
  {
    q: "What happens after the 14-day trial?",
    a: (
      <>
        Your account downgrades to the free tier automatically. No charge,
        no surprise bill. Your data stays intact, but you&apos;ll be limited
        to 2 active clients until you upgrade.
      </>
    ),
  },
  {
    q: "Can I import my existing clients?",
    a: (
      <>
        Yes. CSV import for clients and contacts is built in. Historical
        invoices and contracts can be uploaded and backdated. For Agency
        plans, our team handles the migration.
      </>
    ),
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-[96px] bg-slate-50">
      <div className="container-x">
        <SectionIntro
          overline="Questions"
          title="The answers that actually matter."
        />

        <div className="max-w-[760px] mx-auto">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-slate-200 py-6"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex justify-between items-center w-full text-left font-semibold text-[17px] text-navy-900"
                >
                  {item.q}
                  <Plus
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-45 text-action"
                        : "rotate-0 text-slate-500"
                    }`}
                    strokeWidth={1.8}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 text-slate-600 text-[15px] leading-[1.65] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
