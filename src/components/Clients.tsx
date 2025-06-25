
import React from 'react';

const Clients = () => {
  // Placeholder para logos dos clientes
  const clients = [
    { name: 'Avante', image: "/clients/avante_logo.png", width: 'w-16', type_service: "Tecnologia" },
    { name: 'Prumo', image: "/clients/prumo_logo.png", width: 'w-16', type_service: "Logística" },
    { name: 'Transportado Cabral', image: "/clients/tccabral_logo.png", width: 'w-16', type_service: "Transporte" },
    { name: 'Amep', image: "clients/amep_logo.png", width: 'w-20', type_service: "Engenharia" },
    { name: 'EcoSmart', image: "", width: 'w-24', type_service: "Sustentabilidade" },
    { name: 'TechWave', image: "", width: 'w-20', type_service: "TechWave" },
    { name: 'BrasilConstruct', image: "", width: 'w-24', type_service: "BrazilConstruct" }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-brand-gray mb-4">Empresas que já confiaram na nossa experiência</p>
          <h2 className="text-4xl md:text-5xl font-black bg-text-gradient bg-clip-text text-transparent">Nossos Clientes</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between h-20"
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
                  className="max-h-16 object-contain"
                />
              )}
              <div className="text-sm text-brand-gray">{client.type_service}</div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Clients;
