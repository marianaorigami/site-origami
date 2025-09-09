"use client";
import { MoveRight } from 'lucide-react';
import ButtonLink from './ui/buttonlink';
import { MotionFade } from "@/components/MotionFade";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-lvh flex items-center justify-center overflow-hidden">
      
      <img
        src="/image-optimize/bg.webp"
        alt="Fundo"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 right-0 w-64 md:top-10 md:right-10 md:w-96 md:h-96 opacity-20">
        <img
          src="/image-optimize/icon_animated.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute w-56 left-10 bottom-20 md:bottom-56 md:left-10 md:w-72 md:h-80 opacity-15">
        <img
          src="/image-optimize/icon_animated.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">

          <MotionFade delay={0.1} className="mb-4">
            <h1 className="font-extrabold leading-tight text-[clamp(2.8rem,4vw,4rem)]">
              <span className="block sm:hidden">Sua empresa</span>
              <span className="block sm:hidden">com agilidade</span>
              <span className="block sm:hidden">de uma startup</span>

              <span className="hidden sm:block">
                Sua empresa com<br />
                agilidade de uma startup.
              </span>
            </h1>
          </MotionFade>

          <MotionFade delay={0.2} className="mt-2">
            <p className="font-light leading-snug text-[clamp(1rem,4vw,1.25rem)]">
              <span className="block sm:hidden">Somos o seu laboratório de</span>
              <span className="block sm:hidden">inovação fora da sua empresa.</span>
              <span className="block sm:hidden">Unindo mentalidade, método e</span>
              <span className="block sm:hidden">resultados reais.</span>

              <span className="hidden sm:block">
                Somos o seu laboratório de inovação fora da sua empresa.<br />
                Unindo mentalidade, método e resultados reais.
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
