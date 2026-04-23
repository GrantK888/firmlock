import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Positioning from '@/components/Positioning';
import Features from '@/components/Features';
import PaymentsSplit from '@/components/PaymentsSplit';
import Testimonial from '@/components/Testimonial';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Positioning />
        <Features />
        <PaymentsSplit />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
