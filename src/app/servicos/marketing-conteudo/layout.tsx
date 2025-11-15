import type { Metadata } from "next";
import { generateServiceMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    "marketing-conteudo",
    "Marketing de Conteúdo",
    "Criação de conteúdo criativo que faz sua audiência parar e pensar. Copy persuasiva, roteiros virais, edição de vídeos e estratégias que convertem."
  );
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

