"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import SectionIntro from "../components/SectionIntro";

type BillingPeriod = "monthly" | "annual";

type Plan = {
  tier: string;
  price: number; // headline $/month, same for both views
  desc: string;
  features: string[];
  cta: string;
  ctaVariant: "primary" | "secondary";
  featured?: boolean;
  isFree?: boolean;
  // For annual subtext math
  annualTotal?: number;
  annualSavings?: number;
};

const plans: Plan[] = [
  {
    tier: "Free",
    price: 0,
    desc: "For consultants testing the waters with one or two clients.",
    features: [
      "Up to 2 active clients",
      "Branded portal & messaging",
      "Proposals & invoicing",
      "Stripe card payments",
      "FirmLock subdomain",
    ],
    cta: "Start free",
    ctaVariant: "secondary",
    isFree: true,
  },
  {
    tier: "Practice",
    price: 49,
    annualTotal: 490,
    annualSavings: 98,
    desc: "For established solo consultants running a steady book of business.",
    features: [
      "Up to 15 active clients",
      "Custom domain & full white-label",
      "All five AI workflows",
      "Recurring invoices & retainer tracking",
      "Monthly reports with read-receipts",
      "Automated email templates",
      "Mobile app & push notifications",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "primary",
    featured: true,
  },
  {
    tier: "Firm",
    price: 99,
    annualTotal: 990,
    annualSavings: 198,
    desc: "For fractional executives and boutique firms with multiple practitioners.",
    features: [
      "Unlimited clients",
      "Up to 5 team seats",
      "Role-based permissions",
      "Shared template library",
      "Weekly digests & satisfaction surveys",
      "Advanced reporting & insights",
      "Dedicated onboarding",
    ],
    cta: "Start 14-day trial",
    ctaVariant: "secondary",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<BillingPeriod>("annual");

  return (
    <section id="pricing" className="py-24 md:py-[96px]">
      <div className="container-x">
        <SectionIntro
          overline="Pricing"
          title="Priced for a solo practice. Built for a small firm."
          lead="Start free. Upgrade when it pays for itself. Cancel anytime."
        />

        <BillingToggle value={billing} onChange={setBilling} />

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <PlanCard key={plan.tier} plan={plan} billing={billing} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BillingToggle({
  value,
  onChange,
}: {
  value: BillingPeriod;
  onChange: (v: BillingPeriod) => void;
}) {
  return (
    <div className="flex justify-center mb-12">
      <div
        role="tablist"
        aria-label="Billing period"
        className="relative inline-flex items-center bg-slate-100 border border-slate-200 rounded-full p-1"
      >
        {/* Sliding pill */}
        <span
          aria-hidden="true"
          className={`absolute top-1 bottom-1 rounded-full bg-white shadow-sm border border-slate-200 transition-all duration-200 ease-out ${
            value === "monthly"
              ? "left-1 right-[calc(50%+2px)]"
              : "left-[calc(50%+2px)] right-1"
          }`}
        />

        <button
          type="button"
          role="tab"
          aria-selected={value === "monthly"}
          onClick={() => onChange("monthly")}
          className={`relative z-10 px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
            value === "monthly"
              ? "text-navy-900"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Monthly
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={value === "annual"}
          onClick={() => onChange("annual")}
          className={`relative z-10 inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
            value === "annual"
              ? "text-navy-900"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Annual
          <span
            className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase ${
              value === "annual"
                ? "bg-action-soft text-action"
                : "bg-slate-200 text-slate-500"
            }`}
          >
            Save 17%
          </span>
        </button>
      </div>
    </div>
  );
}

function PlanCard({ plan, billing }: { plan: Plan; billing: BillingPeriod }) {
  const featured = plan.featured;

  // Subtext under price
  let subtext: string;
  if (plan.isFree) {
    subtext = "forever";
  } else if (billing === "annual") {
    subtext = `billed annually ($${plan.annualTotal}/year) — save $${plan.annualSavings}`;
  } else {
    subtext = "billed monthly";
  }

  return (
    <div
      className={`relative rounded-card p-10 px-8 flex flex-col transition-colors ${
        featured
          ? "bg-navy-900 text-white border border-navy-900 shadow-card-dark"
          : "bg-white border border-slate-200 hover:border-slate-300"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-action text-white px-3.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em]">
          Most popular
        </span>
      )}

      <div
        className={`text-xs font-semibold uppercase tracking-[0.1em] mb-3 ${
          featured ? "text-action-light" : "text-action"
        }`}
      >
        {plan.tier}
      </div>

      <p
        className={`text-sm mb-7 min-h-[42px] leading-[1.55] ${
          featured ? "text-silver" : "text-slate-500"
        }`}
      >
        {plan.desc}
      </p>

      <div
        className={`mb-7 pb-7 border-b ${
          featured ? "border-navy-700" : "border-slate-200"
        }`}
      >
        <div className="flex items-baseline gap-1 mb-1.5">
          <span
            className={`font-serif font-bold text-[44px] tracking-tight leading-none ${
              featured ? "text-white" : "text-navy-900"
            }`}
          >
            ${plan.price}
          </span>
          <span
            className={`text-sm font-medium ${
              featured ? "text-silver" : "text-slate-500"
            }`}
          >
            /month
          </span>
        </div>
        <p
          className={`text-[13px] leading-[1.5] ${
            featured ? "text-silver" : "text-slate-500"
          }`}
        >
          {subtext}
        </p>
      </div>

      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className={`flex items-start gap-2.5 text-sm leading-[1.5] ${
              featured ? "text-silver" : "text-slate-700"
            }`}
          >
            <CheckCircle2
              className={`w-[18px] h-[18px] flex-shrink-0 mt-0.5 ${
                featured ? "text-action-light" : "text-brand-emerald"
              }`}
              strokeWidth={1.8}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Button
        href="https://firmlock.app/onboarding"
        variant={plan.ctaVariant}
        size="md"
        className="w-full justify-center"
      >
        {plan.cta}
      </Button>
    </div>
  );
}