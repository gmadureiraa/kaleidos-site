import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manifesto — Kaleidos Digital",
  description: "Kaleidos vem de caleidoscópio. O instrumento que revela padrões infinitos quando você muda o ângulo. A janela por onde o mundo muda de forma.",
  openGraph: {
    title: "Manifesto — Kaleidos Digital",
    description: "A janela por onde o mundo muda de forma.",
    url: "/manifesto",
  },
};

export default function ManifestoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
