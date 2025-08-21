"use client";
import servicesWeb from "/img/services_web.svg";
import servicesMobile from "/img/services_mobile.svg";
import { MotionFade } from "@/components/MotionFade";

const Services = () => {
  return (
    <section className="pb-8 pt-40 overflow-x-hidden" id="Services">
      <div className="container mx-auto px-6 md:px-16">
        
        {/* Título */}
        <MotionFade className="text-center mb-16">
          <p className="text-brand-gray mb-4">
            Como realizamos a inovação na prática
          </p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">
            Fundamentos da Inovação
          </h2>
        </MotionFade>

        {/* Imagens responsivas */}
        <MotionFade delay={0.2} className="mb-12">
          <img src={servicesWeb} alt="Serviços Web" className="hidden md:block mx-auto" />
          <img src={servicesMobile} alt="Serviços Mobile" className="block md:hidden mx-auto" />
        </MotionFade>

      </div>
    </section>
  );
};

export default Services;