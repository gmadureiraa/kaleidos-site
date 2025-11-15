"use client";

import Link from "next/link";
import { useState } from "react";

const clients = [
  { name: "Crypto.com", logo: "/Clientes-logo/Crypto.com.png", url: "https://crypto.com" },
  { name: "Mercado Bitcoin", logo: "/Clientes-logo/MercadoBitcoin.png", url: "https://www.mercadobitcoin.com.br" },
  { name: "Ledger", logo: "/Clientes-logo/Ledger.png", url: "https://www.ledger.com" },
  { name: "Parfin", logo: "/Clientes-logo/Parfin.png", url: "https://parfin.io" },
  { name: "Kast", logo: "/Clientes-logo/Kast.png", url: "https://www.kast.xyz/" },
  { name: "Neobankless", logo: "/Clientes-logo/Neobankless.png", url: "https://neobankless.com" },
  { name: "Defiverso", logo: "/Clientes-logo/Defiverso.png", url: "https://defiverso.com" },
  { name: "Jornal Cripto", logo: "/Clientes-logo/JornalCripto.png", url: "https://jornalcripto.com" },
  { name: "Orlando On Crypto", logo: "/Clientes-logo/OrlandoOnCrypto.png", url: "https://orlandooncrypto.com" },
  { name: "Bit das Minas", logo: "/Clientes-logo/BitdasMinas.png", url: "https://instagram.com/bitdasminas" },
  { name: "Casta Crypto", logo: "/Clientes-logo/CastaCrypto.png", url: "https://instagram.com/castacrypto" },
  { name: "Vault", logo: "/Clientes-logo/Vault.png", url: "https://vaultcapital.com.br/pt" },
  { name: "Layla Foz", logo: "/Clientes-logo/LaylaFoz.png", url: "https://instagram.com/laylafoz" },
];

function ClientLogo({ client, index }: { client: typeof clients[0]; index: number }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="marquee-item flex items-center justify-center h-16 px-4 min-w-[120px]">
        <span className="text-gray-400 text-xs whitespace-nowrap">{client.name}</span>
      </div>
    );
  }

  return (
    <Link 
      key={`${client.name}-${index}`} 
      href={client.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="marquee-item block min-w-[120px]"
    >
      <div className="relative h-16 w-auto flex items-center justify-center">
        <img
          src={client.logo}
          alt={`Logo de ${client.name}, parceiro da Kaleidos Digital`}
          className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          style={{ 
            maxHeight: '64px',
            maxWidth: '150px',
            width: 'auto',
            height: 'auto',
            display: 'block'
          }}
          loading={index < 6 ? "eager" : "lazy"}
          onError={() => {
            setHasError(true);
          }}
        />
      </div>
    </Link>
  );
}

export function TrustedBy() {
  return (
    <section className="w-full pt-0 sm:pt-2 pb-16 bg-black" aria-labelledby="trusted-by-heading">
      <div className="text-center mb-6 sm:mb-8">
        <h2 id="trusted-by-heading" className="text-lg font-medium text-gray-400 uppercase tracking-wider">
          Parceiros que confiam
        </h2>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {clients.map((client, idx) => (
                <ClientLogo key={`${client.name}-${idx}`} client={client} index={idx} />
              ))}
              {/* Duplicar para loop infinito */}
              {clients.map((client, idx) => (
                <ClientLogo key={`${client.name}-${idx}-2`} client={client} index={idx + clients.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}