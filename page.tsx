import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import TrustStrip from "./sections/TrustStrip";
import Positioning from "./sections/Positioning";
import Features from "./sections/Features";
import Workflow from "./sections/Workflow";
import SplitFeature from "./sections/SplitFeature";
import Testimonial from "./sections/Testimonial";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Positioning />
        <Features />
        <Workflow />
        <SplitFeature />
        <Testimonial />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
