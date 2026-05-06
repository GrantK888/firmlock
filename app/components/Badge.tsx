import { ReactNode } from "react";

type Variant = "green" | "amber" | "red" | "blue" | "gray";

type Props = {
  children: ReactNode;
  variant?: Variant;
  withDot?: boolean;
  className?: string;
};

const variants: Record<Variant, { bg: string; text: string; dot: string }> = {
  green: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-brand-emerald" },
  amber: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-brand-amber" },
  red: { bg: "bg-red-50", text: "text-red-700", dot: "bg-brand-red" },
  blue: { bg: "bg-action-soft", text: "text-blue-700", dot: "bg-action" },
  gray: { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-accent" },
};

export default function Badge({
  children,
  variant = "gray",
  withDot = false,
  className = "",
}: Props) {
  const v = variants[variant];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${v.bg} ${v.text} ${className}`}
    >
      {withDot && <span className={`w-1.5 h-1.5 rounded-full ${v.dot}`} />}
      {children}
    </span>
  );
}
