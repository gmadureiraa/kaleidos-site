import type { Metadata } from "next";
import { generateServiceMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    "ia-automacoes",
    "IA e Automações para Marketing Cripto",
    "Automações inteligentes com IA para projetos cripto e Web3. Chatbots, workflows automatizados e processos que economizam 20h/semana."
  );
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

