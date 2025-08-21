"use client";
import { MoveRight } from 'lucide-react';
import ButtonLink from './ui/buttonlink';
import { MotionFade } from "@/components/MotionFade";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-lvh flex items-center justify-center overflow-hidden">
      
      <img
        src="/background/bg.png"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 right-0 w-64 md:top-10 md:right-10 md:w-96 md:h-96 opacity-20">
        <img
          src="/background/icon_animated.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute w-56 left-10 bottom-20 md:bottom-56 md:left-10 md:w-72 md:h-80 opacity-15">
        <img
          src="/background/icon_animated.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">

          <MotionFade delay={0.1} className="mb-4">
            <h1 className="font-extrabold leading-tight text-[clamp(3rem,4vw,4rem)]">
              <span className="block sm:hidden">Inove como</span>
              <span className="block sm:hidden">uma startup.</span>
              <span className="block sm:hidden">Cresça como</span>
              <span className="block sm:hidden">uma gigante.</span>

              <span className="hidden sm:block">
                Inove como uma startup.<br />
                Cresça como uma gigante.
              </span>
            </h1>
          </MotionFade>

          <MotionFade delay={0.2} className="mt-2">
            <p className="font-light leading-snug text-[clamp(1rem,4vw,1.25rem)]">
              <span className="block sm:hidden">Laboratório de inovação que leva</span>
              <span className="block sm:hidden">agilidade às grandes empresas.</span>
              <span className="block sm:hidden">Unindo método, criatividade e</span>
              <span className="block sm:hidden">resultados reais.</span>

              <span className="hidden sm:block">
                Laboratório de inovação que leva agilidade às grandes empresas.<br />
                Unindo método, criatividade e resultados reais.
              </span>
            </p>
          </MotionFade>

          <MotionFade delay={0.4} className="mt-12 inline-block">
            <ButtonLink
              to="/contactus"
              className="bg-brand-white font-thin text-brand-dark px-8 py-4 text-lg"
            >
              Inove Conosco <MoveRight className="h-4 w-4 ml-2" />
            </ButtonLink> 
          </MotionFade>

        </div>
      </div>

    </section>
  );
};

export default Hero;
