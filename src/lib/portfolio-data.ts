import { getAllCases, type CaseData } from "./case-data";

export type PortfolioCategory =
  | "site"
  | "post"
  | "design"
  | "video"
  | "reel"
  | "criativo";

export interface PortfolioItem {
  id: string;
  src: string;
  type: "image" | "video";
  category: PortfolioCategory;
  clientName: string;
  clientId: string;
  alt?: string;
  poster?: string;
  link?: string;
}

// Override categories for specific items: { "caseId-index": category }
const PORTFOLIO_OVERRIDES: Record<string, PortfolioCategory> = {
  // Lucas Amendola: Reels → reel (videos 0-6 are reels, not long-form YouTube)
  "investidor-4-20-0": "reel",
  "investidor-4-20-1": "reel",
  "investidor-4-20-2": "reel",
  "investidor-4-20-3": "reel",
  "investidor-4-20-5": "reel",
  "investidor-4-20-6": "reel",
  // Lucas Amendola: Palestrantes video stays as "video" (index 4)
  // Lucas Amendola: pagina-captura.png → site (index 7 after removing canal-youtube)
  "investidor-4-20-7": "site",
  // Lucas Amendola: criativos de anúncio → criativo
  "investidor-4-20-8": "criativo",
  "investidor-4-20-9": "criativo",
  "investidor-4-20-10": "criativo",
  // Lucas Amendola: screenshots de páginas de captura → site
  "investidor-4-20-11": "site",
  "investidor-4-20-12": "site",
  "investidor-4-20-13": "site",
  "investidor-4-20-14": "site",
  "investidor-4-20-15": "site",
  // Ledger: banners/criativos → criativo
  "ledger-0": "criativo",
  "ledger-1": "criativo",
  "ledger-2": "criativo",
  "ledger-3": "criativo",
  "ledger-4": "criativo",
  "ledger-5": "criativo",
  "ledger-6": "criativo",
  "ledger-7": "criativo",
  // Jornal Cripto: imagens são criativos/posts, não screenshots de site
  "jornal-cripto-0": "criativo",
  "jornal-cripto-1": "criativo",
  "jornal-cripto-2": "criativo",
  "jornal-cripto-3": "criativo",
  "jornal-cripto-4": "criativo",
  "jornal-cripto-5": "criativo",
  "jornal-cripto-6": "criativo",
  "jornal-cripto-7": "criativo",
  // Buenas Ideias: cortes verticais → video (YouTube), thumbnail → criativo
  "buenas-ideias-0": "video",
  "buenas-ideias-1": "video",
  "buenas-ideias-2": "criativo",
  // Paradigma: cortes curtos de podcast → reel (40s a ~2min, verticais)
  "paradigma-education-0": "reel",  // 01M06S
  "paradigma-education-2": "reel",  // PARADIGMAv2
  "paradigma-education-4": "reel",  // 01M55S
  "paradigma-education-5": "reel",  // 00M40S
  // Neobankless: vertical videos e reel
  "neobankless-1": "reel",  // manifesto-1-vertical.mp4
  "neobankless-3": "reel",  // manifesto-2-vertical.mp4
  "neobankless-4": "reel",  // reel-liberdade.mp4
  // Mercado Bitcoin: posts de Instagram, não peças de design
  "mercado-bitcoin-0": "post",
  "mercado-bitcoin-1": "post",
  "mercado-bitcoin-2": "post",
  "mercado-bitcoin-3": "post",
  "mercado-bitcoin-4": "post",
  "mercado-bitcoin-5": "post",
  "mercado-bitcoin-6": "post",
  // Layla Foz: Capa images stay as "post" (covers), videos → reel
  "layla-foz-0": "post",
  "layla-foz-1": "post",
  "layla-foz-2": "post",
  "layla-foz-3": "post",
  "layla-foz-4": "reel",
  "layla-foz-5": "reel",
  "layla-foz-6": "reel",
  "layla-foz-7": "reel",
};

// Cases without portfolio-worthy assets in public/Cases/
const EXCLUDED_CASES = new Set([
  "defifest",   // assets exist but paths may not match
  "orlando",    // no assets directory
]);

function inferCategory(
  caseData: CaseData,
  mediaType: "image" | "video"
): PortfolioCategory {
  const tags = caseData.tags.map((t) => t.toLowerCase());

  // Sites & Web apps — tudo é "site"
  if (tags.includes("desenvolvimento web")) return "site";
  if (mediaType === "video" && tags.includes("reels")) return "reel";
  if (mediaType === "video") return "video";
  if (tags.includes("motion") || tags.includes("animação")) return "design";
  if (tags.includes("design")) return "design";
  if (
    tags.includes("social media") ||
    tags.includes("marketing de conteúdo") ||
    tags.includes("criação de conteúdo")
  )
    return "post";

  return "criativo";
}

export function buildPortfolioItems(): PortfolioItem[] {
  const allCases = getAllCases();
  const items: PortfolioItem[] = [];

  for (const caseData of allCases) {
    // Skip cases without assets in public/
    if (EXCLUDED_CASES.has(caseData.id)) continue;

    caseData.media.forEach((media, index) => {
      // Skip PDFs
      if (media.type === "pdf") return;

      const id = `${caseData.id}-${index}`;
      const mediaType = media.type === "video" ? "video" : "image";
      const category = PORTFOLIO_OVERRIDES[id] ?? inferCategory(caseData, mediaType);

      items.push({
        id,
        src: media.src,
        type: mediaType,
        category,
        clientName: caseData.nome,
        clientId: caseData.id,
        alt: media.alt ?? `${caseData.nome} — ${category}`,
        poster: media.poster,
        link: media.link,
      });
    });
  }

  return items;
}

// Cached singleton
let _cachedItems: PortfolioItem[] | null = null;

export function getPortfolioItems(): PortfolioItem[] {
  if (!_cachedItems) {
    _cachedItems = buildPortfolioItems();
  }
  return _cachedItems;
}

export function getPortfolioCategories(): PortfolioCategory[] {
  return ["site", "post", "design", "video", "reel", "criativo"];
}

export function getPortfolioClients(): { id: string; name: string }[] {
  const items = getPortfolioItems();
  const seen = new Map<string, string>();
  for (const item of items) {
    if (!seen.has(item.clientId)) {
      seen.set(item.clientId, item.clientName);
    }
  }
  return Array.from(seen, ([id, name]) => ({ id, name }));
}
