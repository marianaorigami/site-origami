import React from 'react';

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
    <section className="py-20">
      <div className="container mx-auto px-16">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">
            Empresas que já confiam na nossa experiência
          </p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">
            Nossos Clientes
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-24">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-24 w-28"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
              <div className="text-sm text-brand-gray text-center">{client.type_service}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
