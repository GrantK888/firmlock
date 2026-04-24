'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LinkButton } from '@/components/ui/Button';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <img src="/logo.png" alt="FirmLock Logo" style={{ height: '32px', width: 'auto' }} />
        </Link>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Main navigation">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#faq">FAQ</Link>
        </nav>

        {/* CTA */}
        <div className={styles.cta}>
          <LinkButton href="https://firmlock.app/dashboard" variant="ghost" size="sm">Sign in</LinkButton>
          <LinkButton href="https://firmlock.app/onboarding" variant="primary" size="sm">Start free</LinkButton>
        </div>
      </div>
    </header>
  );
}
