import Link from "next/link";
import Logo from "../components/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "https://firmlock.app/about", label: "About" },
      { href: "https://firmlock.app/contact", label: "Contact" },
      { href: "mailto:hello@firmlock.app", label: "Email us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-10 border-t border-slate-200">
      <div className="container-x">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-2 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 font-serif font-bold text-[20px] text-navy-900 tracking-tight"
            >
              <Logo variant="navy" className="w-8 h-8" />
              FirmLock
            </Link>
            <p className="text-sm text-slate-500 mt-4 max-w-[280px] leading-[1.55]">
              The client portal for independent consultants, fractional
              executives, and small agencies.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="text-xs font-semibold text-navy-900 uppercase tracking-[0.1em] mb-4">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-600 hover:text-navy-900 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center pt-8 border-t border-slate-200 text-[13px] text-slate-500 flex-wrap gap-4">
          <div>© 2026 FirmLock, Inc. All rights reserved.</div>
          <div className="flex gap-6">
  <Link href="/privacy" className="hover:text-navy-900 transition-colors">
    Privacy
  </Link>
  <Link href="/terms" className="hover:text-navy-900 transition-colors">
    Terms
  </Link>
</div>
        </div>
      </div>
    </footer>
  );
}
