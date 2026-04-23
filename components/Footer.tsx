import Link from 'next/link';
// Removed LogoMark import since we are using your image file
import styles from './Footer.module.css';

const LINKS = {
  Product:   ['Features', 'Pricing', 'Roadmap', 'Changelog'],
  Resources: ['Help center', "Consultant's guide", 'Blog', 'Stripe setup'],
  Company:   ['About', 'Security', 'Contact', 'Status'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLink}>
              {/* Using your logo image from the public folder */}
              <img 
                src="/logo.png" 
                alt="FirmLock Logo" 
                style={{ height: '32px', width: 'auto' }} 
              />
              {/* Removed the <span>FirmLock</span> line to avoid double-naming */}
            </Link>
            <p className={styles.tagline}>
              The client portal for independent consultants, fractional
              executives, and small agencies.
            </p>
          </div>

          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className={styles.col}>
              <h5 className={styles.colHeading}>{heading}</h5>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <Link href="#" className={styles.colLink}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© 2026 FirmLock, Inc. All rights reserved.</span>
          <div className={styles.legal}>
            {['Privacy', 'Terms', 'DPA'].map((l) => (
              <Link key={l} href="#" className={styles.legalLink}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}