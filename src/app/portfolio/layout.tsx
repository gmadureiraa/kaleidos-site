import type { Metadata } from "next";
import { generateSEOMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Portfolio — Trabalhos de Marketing Cripto e Web3 | Kaleidos Digital",
    description:
      "Portfolio completo da Kaleidos Digital: sites, posts, designs, vídeos e reels produzidos para marcas de cripto, DeFi e fintech. Veja nossos melhores trabalhos.",
    keywords:
      "portfolio marketing cripto, trabalhos agência web3, portfolio design cripto, cases agência marketing digital, portfolio conteúdo web3",
    url: "/portfolio",
  });
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
