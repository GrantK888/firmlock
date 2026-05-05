import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "outline-dark";
type Size = "sm" | "md" | "lg";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-action text-white shadow-btn-primary hover:bg-blue-600 hover:shadow-btn-primary-hover hover:-translate-y-px",
  secondary:
    "bg-white text-slate-700 border border-slate-300 hover:border-slate-500 hover:text-slate-900",
  ghost: "text-action hover:bg-action-soft",
  dark: "bg-navy-900 text-white hover:bg-navy-700",
  "outline-dark":
    "bg-transparent text-white border border-navy-500 hover:bg-navy-800",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[15px]",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: Props) {
  const classes = `inline-flex items-center gap-2 rounded-btn font-semibold whitespace-nowrap transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
