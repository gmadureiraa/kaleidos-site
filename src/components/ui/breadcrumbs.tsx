"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const { locale } = useI18n();
  const withLang = (path: string) => locale === 'en' ? `${path}${path.includes('?') ? '&' : '?' }lang=en` : path;

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Link 
        href={withLang('/')} 
        className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Home"
      >
        <Home className="h-4 w-4" />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-gray-400" />
          {item.href ? (
            <Link 
              href={withLang(item.href)} 
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 font-medium" aria-current="page">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}

// Hook para gerar breadcrumbs automaticamente baseado na rota
export function useBreadcrumbs(pathname: string) {
  const { locale } = useI18n();
  
  const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
    '/cases': [
      { label: locale === 'en' ? 'Cases' : 'Cases' }
    ],
    '/servicos': [
      { label: locale === 'en' ? 'Services' : 'Serviços' }
    ],
    '/sobre': [
      { label: locale === 'en' ? 'About' : 'Sobre' }
    ],
    '/contato': [
      { label: locale === 'en' ? 'Contact' : 'Contato' }
    ],
  };

  // Para páginas de cases individuais
  if (pathname.startsWith('/cases/')) {
    const caseId = pathname.split('/')[2];
    return [
      { label: locale === 'en' ? 'Cases' : 'Cases', href: '/cases' },
      { label: caseId ? caseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Case' }
    ];
  }

  // Para páginas de serviços individuais
  if (pathname.startsWith('/servicos/')) {
    const serviceId = pathname.split('/')[2];
    return [
      { label: locale === 'en' ? 'Services' : 'Serviços', href: '/servicos' },
      { label: serviceId ? serviceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Service' }
    ];
  }

  return breadcrumbMap[pathname] || [];
}
