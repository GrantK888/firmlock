import { X, Check } from "lucide-react";
import SectionIntro from "../components/SectionIntro";

type Column = {
  label: string;
  title: string;
  items: string[];
  variant: "muted" | "featured";
  iconVariant: "x" | "check";
};

const columns: Column[] = [
  {
    label: "What you're using now",
    title: "Free & unprofessional",
    variant: "muted",
    iconVariant: "x",
    items: [
      "Shared Google Drive folders",
      "Email threads with attachments",
      "Venmo, Zelle, or paper invoices",
      "No retainer tracking",
      "Undermines your rate",
    ],
  },
  {
    label: "FirmLock",
    title: "Premium & complete",
    variant: "featured",
    iconVariant: "check",
    items: [
      "Your logo, colors, and tagline throughout",
      "Proposals through payments in one tool",
      "AI drafts reports, proposals, and invoices",
      "Five billing models, recurring or one-off",
      "Mobile-first portal your clients install",
    ],
  },
  {
    label: "What the big firms use",
    title: "Overbuilt & expensive",
    variant: "muted",
    iconVariant: "x",
    items: [
      "$400+ per user, per month",
      "Weeks of onboarding",
      "Built for 50-person teams",
      "Resource planning you don't need",
      "Feels like enterprise software",
    ],
  },
];

export default function Positioning() {
  return (
    <section className="py-24 md:py-[96px]">
      <div className="container-x">
        <SectionIntro
          overline="The gap in the market"
          title="You've outgrown the free stuff. You don't need enterprise."
          lead="Most consultants cobble together Google Drive, Gmail, and Venmo — or pay $400/month for platforms built for 50-person agencies. There's been nothing in between. Until now."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <Column key={col.title} {...col} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Column({ label, title, items, variant, iconVariant }: Column) {
  const isFeatured = variant === "featured";
  const Icon = iconVariant === "check" ? Check : X;

  return (
    <div
      className={
        isFeatured
          ? "p-10 px-8 rounded-card bg-gradient-to-b from-navy-900 to-navy-800 border border-navy-700 shadow-card-dark text-white"
          : "p-10 px-8 rounded-card bg-slate-50 border border-slate-200 opacity-70"
      }
    >
      <div
        className={`text-xs font-semibold uppercase tracking-[0.08em] mb-2 ${
          isFeatured ? "text-action-light" : "text-slate-500"
        }`}
      >
        {label}
      </div>
      <h3
        className={`font-serif font-bold text-[22px] mb-4 tracking-tight ${
          isFeatured ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h3>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className={`flex items-start gap-2.5 text-sm leading-relaxed ${
              isFeatured ? "text-silver" : "text-slate-600"
            }`}
          >
            <Icon
              className={`flex-shrink-0 mt-0.5 w-4 h-4 ${
                iconVariant === "check" ? "text-action-light" : "text-brand-red"
              }`}
              strokeWidth={2.2}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
