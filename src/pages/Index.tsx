
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueSection from '@/components/ValueSection';
import Manifest from '@/components/Manifest';
import Method from '@/components/Method';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Cta from '@/components/CTA';
import Services from '@/components/Services';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <Hero />
      <ValueSection />
      <Manifest />
      <Services />
      <Method />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
