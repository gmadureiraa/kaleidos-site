import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Marketing Digital, IA e Cripto | Kaleidos Digital",
  description:
    "Artigos sobre marketing digital para cripto e web3, automação com IA, growth hacking e cases reais. Estratégias que funcionam no mercado cripto.",
  openGraph: {
    title: "Blog — Marketing Digital, IA e Cripto | Kaleidos Digital",
    description:
      "Artigos sobre marketing digital para cripto e web3, automação com IA, growth hacking e cases reais. Estratégias que funcionam no mercado cripto.",
    url: "https://kaleidos.com.br/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
