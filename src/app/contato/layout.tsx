import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Contato - Kaleidos Digital",
    description: "Entre em contato com a Kaleidos Digital. Fale conosco sobre seu projeto de marketing digital, criação de conteúdo ou automações. Estamos prontos para transformar suas ideias em resultados.",
    keywords: "contato kaleidos, fale conosco, orçamento, marketing digital, agência digital",
    ogImage: "/Kaleidos/imagens/Capa.png",
    url: "/contato",
    type: "website",
  });
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

