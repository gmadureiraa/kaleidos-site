import type { Metadata } from "next";
import { generateCaseMetadata } from "@/lib/seo-helpers";

export async function generateMetadata(): Promise<Metadata> {
  return generateCaseMetadata("mercado-bitcoin");
}

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

