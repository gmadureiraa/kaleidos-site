import { casesData } from "@/lib/case-data";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaleidos.com.br';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kaleidos Digital",
    "url": baseUrl,
    "logo": `${baseUrl}/Imagens/Capa.png`,
    "description": "Especialistas em crescimento de marcas através de conteúdo criativo, automações inteligentes e lançamentos estratégicos",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.instagram.com/kaleidosdigital",
      "https://www.linkedin.com/company/kaleidos-digital"
    ],
    "serviceType": [
      "Marketing Digital",
      "Criação de Conteúdo",
      "Automações",
      "Lançamentos",
      "Growth Hacking"
    ],
    "areaServed": "Brasil",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Marketing Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing de Conteúdo",
            "description": "Criação de conteúdo criativo para redes sociais e blogs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth e Lançamentos",
            "description": "Estratégias de lançamento e crescimento de marcas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "IA e Automações",
            "description": "Automações inteligentes para otimizar processos"
          }
        }
      ]
    },
    "knowsAbout": casesData.map(caseItem => ({
      "@type": "CreativeWork",
      "name": caseItem.nome,
      "description": caseItem.descricao,
      "url": `${baseUrl}/cases/${caseItem.id}`,
      "creator": {
        "@type": "Organization",
        "name": "Kaleidos Digital"
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 