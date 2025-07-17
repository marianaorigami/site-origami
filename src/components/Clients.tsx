import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Clients = () => {
  const clients = [
    { name: 'Avante', image: "/clients/logo_avante.png", type_service: "Tecnologia" },
    { name: 'Prumo', image: "/clients/logo_prumo.png", type_service: "Engenharia" },
    { name: 'Transportado Cabral', image: "/clients/logo_tccabral.png", type_service: "Transporte" },
    { name: 'Amep', image: "/clients/logo_amep.png", type_service: "Agro" },
    { name: 'Alterosa', image: "/clients/logo_alterosa.png", type_service: "Indústria" },
    { name: 'Bry', image: "/clients/logo_bry.png", type_service: "Tecnologia" },
    { name: 'Hayann', image: "/clients/logo_hayann.png", type_service: "Confecções" },
    { name: 'Syngular', image: "/clients/logo_syngular.png", type_service: "Tecnologia" },
    { name: 'Certifica', image: "/clients/logo_certifica.png", type_service: "Certificação" }
  ];

  return (
    <section className="py-20 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
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
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 }
          }}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          className="!overflow-visible"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-between h-24 w-20">
                {client.image === "" ? (
                  <span className="font-black text-center flex items-center justify-center h-16">
                    {client.name}
                  </span>
                ) : (
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-16 max-w-full object-contain"
                  />
                )}
                <div className="text-sm text-brand-gray text-center mt-2">{client.type_service}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
