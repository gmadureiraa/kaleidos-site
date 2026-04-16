"use client"

import { useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/i18n/useI18n"
import { scrollToSection } from "@/hooks/use-smooth-scroll"
import { useAnalytics } from "@/components/analytics"
import { KALEIDOS_METRICS } from "@/lib/metrics"

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const numericTarget = parseInt(target.replace(/[^0-9]/g, ""))

  useEffect(() => {
    let start = 0
    const duration = 2000
    const increment = numericTarget / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= numericTarget) {
        setCount(numericTarget)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [numericTarget])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function HeroKaleidos() {
  const { locale } = useI18n()
  const isEn = locale === "en"
  const [mounted, setMounted] = useState(false)
  const { trackClick } = useAnalytics()
  const withLang = (path: string) => locale === 'en' ? `${path}${path.includes('?') ? '&' : '?'}lang=en` : path

  useEffect(() => {
    setMounted(true)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleContact = useCallback(() => {
    trackClick("hero_contact", "hero")
    scrollToSection("ajuda-section")
  }, [trackClick])

  if (!mounted) return null

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden bg-black hero-section">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/15 via-black to-black" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="text-center max-w-5xl mx-auto px-6">
        {/* Badge — crypto-native positioning */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7CFF6B]/10 border border-[#7CFF6B]/20 text-[#7CFF6B] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#7CFF6B] animate-pulse" />
            {isEn ? "Crypto-native agency" : "Agência nativa do mercado cripto"}
          </span>
        </motion.div>

        {/* Logo + Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6"
        >
          <Image
            src="/Kaleidos/logo/Logos-10.svg"
            alt="Kaleidos Digital"
            width={120}
            height={40}
            className="h-14 sm:h-20 w-auto"
            priority
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            <span className="text-[#7CFF6B] font-display">Kaleidos</span> Digital
          </h1>
        </motion.div>

        {/* Headline — positioning statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4 font-display font-semibold leading-tight max-w-4xl mx-auto"
        >
          {isEn
            ? "We create content that truly builds attention."
            : "Criamos conteúdo que realmente constrói atenção."}
        </motion.p>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-14 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          {isEn
            ? "Strategy, content and growth for crypto, DeFi and Web3 projects that take their own work seriously."
            : "Estratégia, conteúdo e growth para projetos cripto, DeFi e Web3 que levam o próprio trabalho a sério."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center mb-16"
        >
          <Link
            href="https://wa.me/5512997796835?text=Oi%2C%20vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20os%20servi%C3%A7os"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-[#7CFF6B] hover:bg-[#5be04d] text-black font-bold px-8 py-4 text-lg w-full sm:w-auto shadow-lg shadow-[#7CFF6B]/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7CFF6B] focus:ring-offset-2 focus:ring-offset-black"
              aria-label={isEn ? "Talk to Kaleidos" : "Falar com a Kaleidos"}
            >
              {isEn ? "Talk to Kaleidos" : "Falar com a Kaleidos"}
            </Button>
          </Link>
          <Link href={withLang("/cases")}>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg w-full sm:w-auto bg-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label={isEn ? "See our cases" : "Ver cases"}
            >
              {isEn ? "See our cases" : "Ver cases"}
            </Button>
          </Link>
        </motion.div>

        {/* Social proof counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12 text-center"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter target={KALEIDOS_METRICS.projetosAtendidos} suffix="+" />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {isEn ? "Projects" : "Projetos"}
            </div>
          </div>
          <div className="w-px h-12 bg-neutral-800 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter target={KALEIDOS_METRICS.videosEditados} suffix="+" />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {isEn ? "Videos edited" : "Vídeos editados"}
            </div>
          </div>
          <div className="w-px h-12 bg-neutral-800 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter target={KALEIDOS_METRICS.viewsReels} suffix="M+" />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {isEn ? "Views on reels" : "Views nos reels"}
            </div>
          </div>
          <div className="w-px h-12 bg-neutral-800 hidden sm:block" />
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter target={KALEIDOS_METRICS.satisfacaoCliente} suffix="%" />
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {isEn ? "Satisfaction" : "Satisfação"}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8"
      >
        <div className="text-white/40 animate-bounce" aria-hidden="true">
          <ArrowDown className="h-5 w-5" />
        </div>
      </motion.div>
    </section>
  )
}
