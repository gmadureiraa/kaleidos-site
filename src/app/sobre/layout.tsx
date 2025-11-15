import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Sobre Nós - Kaleidos Digital",
    description: "Conheça a equipe da Kaleidos Digital. Especialistas em marketing digital, criação de conteúdo e automações inteligentes. Transformamos ideias em experiências digitais que viralizam.",
    keywords: "sobre kaleidos, equipe kaleidos, agência digital, marketing digital, criação de conteúdo, automações",
    ogImage: "/Kaleidos/imagens/nós.jpg",
    url: "/sobre",
    type: "website",
  });
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

