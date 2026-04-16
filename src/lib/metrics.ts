/**
 * Métricas oficiais da Kaleidos — fonte única de verdade.
 * Importar este arquivo em vez de hardcodar números nas páginas.
 */
export const KALEIDOS_METRICS = {
  // Produção de conteúdo
  videosEditados: "500+",
  videosEditados_en: "500+",

  designsCriados: "600+",
  designsCriados_en: "600+",

  viewsReels: "30M+",
  viewsReels_en: "30M+",

  // Operacional
  lancamentos: "50+",
  lancamentos_en: "50+",

  satisfacaoCliente: "98%",
  satisfacaoCliente_en: "98%",

  // Contagem de projetos/clientes
  projetosAtendidos: "20+",
  projetosAtendidos_en: "20+",

  // Crescimento médio
  crescimentoMedio: "200%",
  crescimentoMedio_en: "200%",
} as const;

export type MetricKey = keyof typeof KALEIDOS_METRICS;
