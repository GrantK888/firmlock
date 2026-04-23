import {
  LayoutDashboard, Timer, FileSignature,
  CreditCard, FolderLock, BellRing,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import styles from './Features.module.css';

interface Feature {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const FEATURES: Feature[] = [
  { Icon: LayoutDashboard, title: 'Client portals',      desc: "Each client gets a private, branded workspace on your own domain. No FirmLock logo. No 'powered by.' Just your firm." },
  { Icon: Timer,           title: 'Retainer tracking',   desc: 'Log hours against each engagement. Clients see burn-down in real time. No more awkward "we\'re almost over" emails.' },
  { Icon: FileSignature,   title: 'Contracts & SOWs',    desc: 'Upload once, send for e-signature, store forever. Renewals and amendments live in the same thread as the original.' },
  { Icon: CreditCard,      title: 'Stripe payments',     desc: 'Connect your own Stripe account in two minutes. Invoice clients, accept ACH or card, get paid directly. FirmLock never holds your funds.' },
  { Icon: FolderLock,      title: 'Secure deliverables', desc: 'Drop final memos, models, and reports in the portal. Version-controlled, permission-gated, audit-logged. Ready for the board.' },
  { Icon: BellRing,        title: 'Quiet automation',    desc: 'Renewal reminders, invoice chasers, retainer alerts — all on autopilot. You focus on the work. FirmLock handles the follow-through.' },
];

export default function Features() {
  return (
    <section className={`section section-paper`} id="features">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="overline">What&rsquo;s inside</span>
          <h2 className="serif">Everything a practice needs. Nothing it doesn&rsquo;t.</h2>
          <p className="lead">Six capabilities, designed for how independent consultants actually work.</p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className={styles.card}
              data-reveal
              data-reveal-delay={String(((i % 3) * 100)) as any}
            >
              <div className={styles.iconWrap}>
                <Icon size={22} strokeWidth={1.8} color="var(--blue-500)" />
              </div>
              <h3 className={`${styles.title} serif`}>{title}</h3>
              <p className={styles.desc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
