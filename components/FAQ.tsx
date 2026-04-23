'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import styles from './FAQ.module.css';

const QUESTIONS = [
  {
    q: 'Does FirmLock hold my money?',
    a: "Never. We use Stripe Connect Standard, which means funds flow from your client directly to your own Stripe account. We don't sit in the middle, don't escrow, and don't delay payouts.",
  },
  {
    q: 'Can I use my own domain?',
    a: 'Yes, on Practice and Firm plans. Point a subdomain like clients.yourfirm.com at FirmLock, upload your logo, and the portal is fully white-labeled. Clients never see our brand.',
  },
  {
    q: 'How is this different from Dubsado, HoneyBook, or Accelo?',
    a: "Dubsado and HoneyBook are built for creative freelancers — photographers, wedding planners, coaches. Accelo is built for 20+ person agencies. FirmLock sits in the middle: consultants, fractional executives, and boutique firms who charge professional-services rates.",
  },
  {
    q: 'What happens after the 14-day trial?',
    a: 'Your account downgrades to the free Solo tier automatically. No charge, no surprise bill. Your data stays intact, but you\'ll be limited to 2 active clients until you upgrade.',
  },
  {
    q: 'Is there a long-term contract?',
    a: 'No. Monthly plans cancel anytime. Annual plans save you about two months and are refundable pro-rata in the first 30 days.',
  },
  {
    q: 'Can I import my existing clients?',
    a: 'Yes. CSV import for clients and contacts is built in. Historical invoices and contracts can be uploaded and backdated. For Firm plans, our team handles the migration.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={`section section-gray`} id="faq">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="overline">Questions</span>
          <h2 className="serif">The answers that actually matter.</h2>
        </div>

        <div className={styles.list} data-reveal>
          {QUESTIONS.map(({ q, a }, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {q}
                <Plus size={18} color="var(--g500)" className={styles.icon} strokeWidth={2} />
              </button>
              <div className={styles.answer} aria-hidden={open !== i}>
                <p>{a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
