import { MetadataRoute } from 'next'
import { getAllCases } from '@/lib/case-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kaleidos.com.br'
  const now = new Date()
  
  // Páginas principais
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Páginas de serviços
  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/servicos/marketing-conteudo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos/ia-automacoes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/servicos/growth-lancamentos`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Páginas de cases (dinâmico)
  const allCases = getAllCases()
  const casePages: MetadataRoute.Sitemap = allCases.map((caseData) => ({
    url: `${baseUrl}/cases/${caseData.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...mainPages, ...servicePages, ...casePages]
} 