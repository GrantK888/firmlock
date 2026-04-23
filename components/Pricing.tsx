import { CheckCircle2 } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import styles from './Pricing.module.css';

interface PricingTier {
  id: string;
  tier: string;
  name: string;
  price: string;
  per: string;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

const TIERS: PricingTier[] = [
  {
    id: 'solo',
    tier: 'Solo',
    name: 'Free',
    price: '$0',
    per: '/month forever',
    desc: 'For consultants testing the waters with one or two clients.',
    features: [
      'Up to 2 active clients',
      'Full portal & deliverables',
      'Stripe Connect payments',
      '3% platform fee on invoices',
      'FirmLock subdomain',
    ],
    cta: 'Start free',
  },
  {
    id: 'practice',
    tier: 'Practice',
    name: '$49',
    price: '$49',
    per: 'per month, billed annually',
    desc: 'For established solo consultants with a steady book of business.',
    features: [
      'Up to 15 active clients',
      'Your own custom domain',
      'White-label branding',
      '0% platform fee on invoices',
      'Retainer & time tracking',
      'Contract e-signature',
      'Priority email support',
    ],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    id: 'firm',
    tier: 'Firm',
    name: '$99',
    price: '$99',
    per: 'per month, billed annually',
    desc: 'For fractional executives and small agencies with multiple practitioners.',
    features: [
      'Unlimited clients',
      'Up to 5 team seats',
      'Role-based permissions',
      'Shared document library',
      'Advanced reporting',
      'Custom email domain',
      'Dedicated onboarding',
    ],
    cta: 'Start 14-day trial',
  },
];

export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="overline">Pricing</span>
          <h2 className="serif">Priced for a solo practice. Built for a small firm.</h2>
          <p className="lead">Start free. Upgrade when it pays for itself — usually after one billing cycle.</p>
        </div>

        <div className={styles.grid}>
          {TIERS.map((t, i) => (
            <div
              key={t.id}
              className={`${styles.card} ${t.featured ? styles.featured : ''}`}
              data-reveal
              data-reveal-delay={String(i * 100) as any}
            >
              {t.featured && <span className={styles.popularBadge}>Most popular</span>}
              <div className={styles.tier}>{t.tier}</div>
              <div className={`${styles.priceName} serif`}>{t.name}</div>
              <p className={styles.desc}>{t.desc}</p>
              <div className={`${styles.priceRow} ${t.featured ? styles.priceRowDark : ''}`}>
                <span className={`${styles.priceNum} serif`}>{t.price}</span>
                <span className={styles.pricePer}>{t.per}</span>
              </div>
              <ul className={styles.features}>
                {t.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.8}
                      color={t.featured ? 'var(--blue-400)' : 'var(--emerald)'}
                      style={{ flexShrink: 0, marginTop: 1 }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <LinkButton
                href="#"
                variant={t.featured ? 'primary' : 'secondary'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {t.cta}
              </LinkButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
