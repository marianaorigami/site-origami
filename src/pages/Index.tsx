
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Value from '@/components/Value';
import Manifest from '@/components/Manifest';
import Method from '@/components/Method';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import Innovation from '@/components/Innovation';
import Services from '@/components/Services';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <Hero />
      <Innovation />
      <Value />
      <Method />
      <Manifest />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
};

export default Index;
