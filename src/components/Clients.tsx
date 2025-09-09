"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { MotionFade } from "@/components/MotionFade";

import 'swiper/css';

const Clients = () => {
  const clients = [
    { name: 'Avante', image: "/image-optimize/logo_avante-1024.webp", srcSet: "/image-optimize/logo_avante-1024.webp 1024w, /image-optimize/logo_avante-512.webp 512w", type_service: "Tecnologia" },
    { name: 'Prumo', image: "/image-optimize/logo_prumo-1024.webp", srcSet: "/image-optimize/logo_prumo-1024.webp 1024w, /image-optimize/logo_prumo-512.webp 512w", type_service: "Engenharia" },
    { name: 'Transportado Cabral', image: "/image-optimize/logo_tccabral-1024.webp", srcSet: "/image-optimize/logo_tccabral-1024.webp 1024w, /image-optimize/logo_tccabral-512.webp 512w", type_service: "Transporte" },
    { name: 'Amep', image: "/image-optimize/logo_amep-1024.webp", srcSet: "/image-optimize/logo_amep-1024.webp 1024w, /image-optimize/logo_amep-512.webp 512w", type_service: "Industria" },
    { name: 'Alterosa', image: "/image-optimize/logo_alterosa-1024.webp", srcSet: "/image-optimize/logo_alterosa-1024.webp 1024w, /image-optimize/logo_alterosa-512.webp 512w", type_service: "Indústria" },
    { name: 'Bry', image: "/image-optimize/logo_bry-1024.webp", srcSet: "/image-optimize/logo_bry-1024.webp 1024w, /image-optimize/logo_bry-512.webp 512w", type_service: "Tecnologia" },
    { name: 'Hayann', image: "/image-optimize/logo_hayann-1024.webp", srcSet: "/image-optimize/logo_hayann-1024.webp 1024w, /image-optimize/logo_hayann-512.webp 512w", type_service: "Confecções" },
    { name: 'Syngular', image: "/image-optimize/logo_syngular-1024.webp", srcSet: "/image-optimize/logo_syngular-1024.webp 1024w, /image-optimize/logo_syngular-512.webp 512w", type_service: "Tecnologia" },
    { name: 'Certifica', image: "/image-optimize/logo_certifica-1024.webp", srcSet: "/image-optimize/logo_certifica-1024.webp 1024w, /image-optimize/logo_certifica-512.webp 512w", type_service: "Certificação" }
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
                    srcSet={client.srcSet}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
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
