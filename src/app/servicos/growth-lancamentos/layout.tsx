import type { Metadata } from "next";
import { generateServiceMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata(
    "growth-lancamentos",
    "Growth Strategy & Lançamentos",
    "Estratégias de lançamento e crescimento que viralizam e vendem. Desenvolvimento de funis, campanhas e estratégias de crescimento para sua marca."
  );
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

