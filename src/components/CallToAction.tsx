"use client";
import { MoveRight } from 'lucide-react';
import ButtonLink from './ui/buttonlink';
import { MotionFade } from "@/components/MotionFade";

const CallToAction = () => {
  return (
    <section className="relative min-h-svh py-20 flex items-center justify-center overflow-hidden">

      <img
        src="/image-optimize/bg.webp"
        alt="Fundo"
        className="absolute rotate-180 inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-20 right-0 w-56 md:top-96 md:right-10 md:w-80 opacity-20">
        <img
          src="/image-optimize/icon_animated.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute w-56 left-10 bottom-20 md:bottom-56 md:left-10 md:w-96 opacity-15">
        <img
          src="/image-optimize/icon_animated.webp"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">

          <MotionFade delay={0.1} className="mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Pronto para avançar com inovação estratégica?
            </h2>
          </MotionFade>

          <MotionFade delay={0.2} className="mb-8">
            <p className="text-xl font-thin md:text-2xl text-white/80 max-w-2xl mx-auto">
              Damos o próximo passo ao seu lado, com mentalidade, método e resultados reais.
            </p>
          </MotionFade>

          <MotionFade delay={0.4}>
            <ButtonLink
              to="/contactus"
              className="bg-white font-thin text-brand-gray-dark px-8 py-4 text-lg"
            >
              Inove Conosco <MoveRight className="h-4 w-4 ml-2" />
            </ButtonLink>
          </MotionFade>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;
