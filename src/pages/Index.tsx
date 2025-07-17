
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueSection from '@/components/ValueSection';
import Manifest from '@/components/Manifest';
import Method from '@/components/Method';
import Clients from '@/components/Clients';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Initiation from '@/components/Initiation';

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Initiation />
      <Header />
      <Hero />
      <ValueSection />
      <Manifest />
      <Method />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
