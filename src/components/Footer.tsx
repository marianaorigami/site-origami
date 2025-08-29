"use client";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { MotionFade } from "@/components/MotionFade";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <MotionFade delay={0.1} className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/img/logo_white.svg" alt="" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Sua empresa com agilidade de uma startup. Somos o seu laboratório de inovação fora da sua empresa. Unindo mentalidade, método e resultados reais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/binari-digital/posts/?feedView=all"
                className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/origamilab_br/"
                className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </MotionFade>

          <MotionFade delay={0.2}>
            <h3 className="text-xl font-bold mb-6 text-brand-green">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-green" />
                <span className="text-gray-300">(31) 99805-5189</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-green" />
                <span className="text-gray-300">contato@origamilab.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-green" />
                <span className="text-gray-300">Formiga, MG</span>
              </div>
            </div>
          </MotionFade>

          <MotionFade delay={0.3}>
            <h3 className="text-xl font-bold mb-6 text-brand-green">
              Endereço
            </h3>
            <div className="space-y-3">
              <p className="text-gray-300">
                Rua Monsenhor João Ivo, Nº 34
                <br />
                Sala 3, Formiga
                <br />
                Minas Gerais, 35570-104
                <br />
              </p>
            </div>
          </MotionFade>
        </div>

        <MotionFade
          delay={0.4}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Origami. Todos os direitos reservados.
          </p>
        </MotionFade>
      </div>
    </footer>
  );
};

export default Footer;
