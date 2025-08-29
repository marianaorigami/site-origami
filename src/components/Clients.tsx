"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MotionFade } from "@/components/MotionFade";

import 'swiper/css';

const Clients = () => {
  const clients = [
    { name: 'Avante', image: "/clients/logo_avante.png", type_service: "Tecnologia" },
    { name: 'Prumo', image: "/clients/logo_prumo.png", type_service: "Engenharia" },
    { name: 'Transportado Cabral', image: "/clients/logo_tccabral.png", type_service: "Transporte" },
    { name: 'Amep', image: "/clients/logo_amep.png", type_service: "Industria" },
    { name: 'Alterosa', image: "/clients/logo_alterosa.png", type_service: "Indústria" },
    { name: 'Bry', image: "/clients/logo_bry.png", type_service: "Tecnologia" },
    { name: 'Hayann', image: "/clients/logo_hayann.png", type_service: "Confecções" },
    { name: 'Syngular', image: "/clients/logo_syngular.png", type_service: "Tecnologia" },
    { name: 'Certifica', image: "/clients/logo_certifica.png", type_service: "Certificação" }
  ];

  return (
    <section className="py-20 overflow-x-hidden" id='clients'>
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-24">
          <p className="text-brand-gray mb-4">
            Empresas que já confiam na nossa experiência
          </p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">
            Nossos Clientes
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 }
          }}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="!overflow-visible"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <MotionFade delay={index * 0.1} className="flex flex-col items-center justify-between h-36 w-48">
                {client.image === "" ? (
                  <span className="font-black text-center flex items-center justify-center h-16">
                    {client.name}
                  </span>
                ) : (
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-20 max-w-full object-contain"
                  />
                )}
                <div>
                  <div className="text-sm font-black text-brand-gray text-center mt-6">{client.name}</div>
                  <div className="text-sm text-brand-gray text-center -mt-1">{client.type_service}</div>
                </div>
              </MotionFade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
