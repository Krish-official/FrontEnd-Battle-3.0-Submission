import { SEOHead } from './components/layout/SEOHead';
import { PageLoader } from './components/PageLoader';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/hero/HeroSection';
import { BentoGrid } from './components/features/BentoGrid';
import { PricingMatrix } from './components/pricing/PricingMatrix';
import { CaseStudies } from './components/social-proof/CaseStudies';
import { NewsletterCTA } from './components/newsletter/NewsletterCTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <>
      <SEOHead />
      <PageLoader />
      <Header />
      
      <main className="page-enter">
        <HeroSection />
        
        <section id="features" aria-label="Platform Features">
          <BentoGrid />
        </section>
        
        <section id="pricing" aria-label="Pricing Plans">
          <PricingMatrix />
        </section>
        
        <section id="case-studies" aria-label="Case Studies">
          <CaseStudies />
        </section>
        
        <section id="newsletter" aria-label="Newsletter Signup">
          <NewsletterCTA />
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default App;