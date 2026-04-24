import Link from 'next/link';
import styles from './Footer.module.css';

// We update the object to include the name AND the link
const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Dashboard', href: 'https://firmlock.app/dashboard' },
      { name: 'Proposals', href: 'https://firmlock.app/proposals' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Client Login', href: 'https://firmlock.app/client-login' },
      { name: "Consultant's Guide", href: '/guide' },
      { name: 'Blog', href: '/blog' },
      { name: 'Support', href: 'mailto:support@firmlock.app' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Security', href: 'https://firmlock.app/settings' },
      { name: 'Contact', href: '/contact' },
      { name: 'Status', href: 'https://status.firmlock.app' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLink}>
              <img 
                src="/logo.png" 
                alt="FirmLock Logo" 
                style={{ height: '32px', width: 'auto' }} 
              />
            </Link>
            <p className={styles.tagline}>
              The client portal for independent consultants, fractional
              executives, and small agencies.
            </p>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className={styles.col}>
              <h5 className={styles.colHeading}>{section.title}</h5>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.colLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© 2026 FirmLock, Inc. All rights reserved.</span>
          <div className={styles.legal}>
            {/* Standard legal routes (relative to getfirmlock.com) */}
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
            <Link href="/dpa" className={styles.legalLink}>DPA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}