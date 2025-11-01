import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  ogImage = "/Kaleidos/imagens/Capa.png",
  url,
  type = "website",
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kaleidos.com.br";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  
  const baseTitle = "Kaleidos Digital - Marketing e Conteúdo";
  const fullTitle = title.includes("Kaleidos") ? title : `${title} | ${baseTitle}`;
  
  const fullDescription = description || "Especialistas em crescimento de marcas através de conteúdo criativo, automações inteligentes e lançamentos estratégicos.";

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: keywords || "marketing digital, conteúdo criativo, automações, lançamentos, cripto, social media, growth hacking, agência digital",
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      siteName: "Kaleidos Digital",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "pt_BR",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: "@kaleidosdigital",
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

// Schema markup helpers
export const generateArticleSchema = (
  title: string,
  description: string,
  author: string,
  datePublished: string,
  imageUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  author: {
    "@type": "Person",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: "Kaleidos Digital",
    logo: {
      "@type": "ImageObject",
      url: "https://kaleidos.com.br/logo.png",
    },
  },
  datePublished,
  image: imageUrl,
});

export const generateServiceSchema = (name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: "Kaleidos Digital",
    url: "https://kaleidos.com.br",
  },
  areaServed: "BR",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceType: "Online",
  },
});

export const generateCaseStudySchema = (
  title: string,
  description: string,
  client: string,
  results: string,
  datePublished: string
) => ({
  "@context": "https://schema.org",
  "@type": "CaseStudy",
  headline: title,
  description,
  author: {
    "@type": "Organization",
    name: "Kaleidos Digital",
  },
  publisher: {
    "@type": "Organization",
    name: "Kaleidos Digital",
  },
  datePublished,
  mainEntity: {
    "@type": "Organization",
    name: client,
  },
  result: results,
});
