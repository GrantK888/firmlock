import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md backdrop-saturate-150 border-b border-slate-200">
      <div className="container-x flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif font-bold text-[20px] text-navy-900 tracking-tight"
        >
          <Logo variant="navy" className="w-8 h-8" />
          FirmLock
        </Link>

        <div className="hidden md:flex gap-9 text-sm font-medium text-slate-700">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-navy-900 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button href="https://firmlock.app/" variant="ghost" size="md">
            Sign in
          </Button>
          <Button href="https://firmlock.app/onboarding" variant="primary" size="md">
            Start free
          </Button>
        </div>
      </div>
    </nav>
  );
}