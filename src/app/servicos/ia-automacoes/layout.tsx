import type { Metadata } from "next";
import { generateServiceMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    "ia-automacoes",
    "IA e Automações",
    "Automações inteligentes que transformam seu negócio. Chatbots personalizados, workflows automatizados e processos que funcionam 24/7."
  );
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

