
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Value from '@/components/Value';
import Manifest from '@/components/Manifest';
import Method from '@/components/Method';
import Clients from '@/components/Clients';
import Footer from '@/components/Footer';
import Innovation from '@/components/Innovation';
import CallToAction from '@/components/CallToAction';

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
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
