"use client";

import Image from "next/image";

const clients = [
  { name: "Cliente 1", logo: "/Clientes-logo/1.png" },
  { name: "Cliente 2", logo: "/Clientes-logo/2.png" },
  { name: "Cliente 3", logo: "/Clientes-logo/3.png" },
  { name: "Cliente 4", logo: "/Clientes-logo/4.png" },
  { name: "Cliente 5", logo: "/Clientes-logo/5.png" },
  { name: "Cliente 6", logo: "/Clientes-logo/6.png" },
  { name: "Cliente 7", logo: "/Clientes-logo/7.png" },
  { name: "Cliente 8", logo: "/Clientes-logo/8.png" },
  { name: "Cliente 9", logo: "/Clientes-logo/9.png" },
  { name: "Cliente 10", logo: "/Clientes-logo/10.png" },
  { name: "Cliente 11", logo: "/Clientes-logo/11.png" },
];

export function TrustedBy() {
  return (
    <div className="w-full py-12 bg-black">
      <div className="text-center mb-8">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-wider">
          Parceiros que confiam
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Primeira linha de logos */}
            {clients.map((client) => (
              <div key={client.name} className="flex-shrink-0 mx-2 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name} - Parceiro que confia na Kaleidos Digital`}
                  width={120}
                  height={60}
                  className="object-contain h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  unoptimized
                />
              </div>
            ))}
            {/* Duplicar para loop infinito */}
            {clients.map((client) => (
              <div key={`${client.name}-2`} className="flex-shrink-0 mx-2 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name} - Parceiro que confia na Kaleidos Digital`}
                  width={120}
                  height={60}
                  className="object-contain h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}