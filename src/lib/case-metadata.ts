import { Metadata } from "next";
import { getCaseData } from "@/lib/case-data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caseData = getCaseData(params.slug);
  
  if (!caseData) {
    return {
      title: "Case não encontrado | Kaleidos Digital",
      description: "O case solicitado não foi encontrado.",
    };
  }

  const title = `${caseData.nome} - Case de Sucesso | Kaleidos Digital`;
  const description = `${caseData.descricao} Confira os resultados alcançados e nossa estratégia completa.`;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaleidos.com.br';
  const caseUrl = `${baseUrl}/cases/${caseData.id}`;

  return {
    title,
    description,
    keywords: [
      caseData.nome,
      ...caseData.servicos,
      "case de sucesso",
      "marketing digital",
      "crescimento de marca",
      "estratégia digital",
      "resultados",
      "Kaleidos Digital"
    ].join(", "),
    authors: [{ name: "Kaleidos Digital" }],
    creator: "Kaleidos Digital",
    publisher: "Kaleidos Digital",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: caseUrl,
    },
    openGraph: {
      title,
      description,
      url: caseUrl,
      siteName: "Kaleidos Digital",
      images: [
        {
          url: caseData.media[0]?.src || '/Imagens/Capa.png',
          width: 1200,
          height: 630,
          alt: `Case ${caseData.nome} - Kaleidos Digital`,
        },
      ],
      locale: 'pt_BR',
      type: 'article',
      publishedTime: new Date().toISOString(),
      authors: ['Kaleidos Digital'],
      tags: caseData.servicos,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [caseData.media[0]?.src || '/Imagens/Capa.png'],
      creator: '@kaleidosdigital',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
