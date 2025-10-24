"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/useI18n";
import { motion } from "framer-motion";
import Image from "next/image";

const casesCarouselData = [
  {
    id: "bit-das-minas",
    title: "Bit das Minas",
    description: "Edição de vídeo, copywrite e roteiro para lançamentos virais.",
    metric: "+200% Faturamento",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Bit das minas/Reels-1-Gi-2.mp4",
    href: "/cases/bit-das-minas"
  },
  {
    id: "layla-foz",
    title: "Layla Foz",
    description: "Edição de vídeo e criação de newsletters para crescimento orgânico.",
    metric: "+20M Views",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Layla Foz/Reels-1-Layla-1.mp4",
    href: "/cases/layla-foz"
  },
  {
    id: "investidor-4-20",
    title: "Investidor 4.20",
    description: "Desenvolvimento comercial completo e estratégias de lançamento.",
    metric: "5x Faturamento",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Investidor 4.20/Reels-1-Lucas-1.mp4",
    href: "/cases/investidor-4-20"
  },
  {
    id: "yasmin",
    title: "Yasmin",
    description: "Edição de reels virais com técnicas de After Effects para conteúdo crypto.",
    metric: "Reels Virais",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Yasmin/Reels-1-Yasmin-1.mp4",
    href: "/cases/yasmin"
  },
  {
    id: "paradigma-education",
    title: "Paradigma Education",
    description: "Edição de vídeo com motion graphics e animações para conteúdo educativo.",
    metric: "Motion Design",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Paradigma/PARADIGMAv2.mp4",
    href: "/cases/paradigma-education"
  },
  {
    id: "defifest",
    title: "Defifest",
    description: "Design completo do evento com banners, motions e identidade visual.",
    metric: "+600 Participantes",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Defifest/1.png",
    href: "/cases/defifest"
  },
  {
    id: "jornal-cripto",
    title: "Jornal Cripto",
    description: "Criação de marca, identidade visual e automações de conteúdo.",
    metric: "6 Posts/Dia",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Jornal cripto/1-2.png",
    href: "/cases/jornal-cripto"
  },
  {
    id: "mercado-bitcoin",
    title: "Mercado Bitcoin",
    description: "Criação de conteúdo para redes sociais durante 18 meses.",
    metric: "+80K Seguidores",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Mercado Bitcoin/Instagram.png",
    href: "/cases/mercado-bitcoin"
  },
  {
    id: "crypto-com",
    title: "Crypto.com",
    description: "Criação de conteúdo para Instagram e Twitter com estratégia focada.",
    metric: "+100% Curtidas",
    metricColor: "bg-pink-500",
    coverImage: "/Conteudo_clientes/Crypto.com/Captura de Tela 2025-07-26 às 22.37.16.png",
    href: "/cases/crypto-com"
  }
];

export default function CasesCarousel() {
  const { locale } = useI18n();
  const withLang = (path: string) => locale === 'en' ? `${path}${path.includes('?') ? '&' : '?' }lang=en` : path;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const isVideo = (src: string) => src.includes('.mp4') || src.includes('.mov') || src.includes('.avi');

  return (
    <div className="w-full flex justify-center py-6 sm:py-8 lg:py-12 bg-black">
      <div className="w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-display tracking-tight">
          Um resultado vale mais que mil palavras{" "}  
          </h2>
        </motion.div>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ 
            delay: isMobile ? 4000 : 3000,
            disableOnInteraction: false 
          }}
          speed={isMobile ? 1500 : 2000}
          slidesPerView={1.2}
          spaceBetween={16}
          centeredSlides
          allowTouchMove={true}
          className="w-full"
          style={{ padding: "0 16px" }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 12
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24
            }
          }}
        >
          {casesCarouselData.map((caseItem, idx) => (
            <SwiperSlide key={idx}>
              <Link href={withLang(caseItem.href)} className="block group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  className="relative h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden bg-black border border-gray-800 group-hover:border-pink-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-pink-500/20"
                >
                  {/* Cover Image/Video */}
                  <div className="absolute inset-0">
                    {isVideo(caseItem.coverImage) ? (
                      <video
                        src={caseItem.coverImage}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={caseItem.coverImage}
                        alt={caseItem.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  
                  {/* Content - Bottom Section with Rectangle Shadow (35% of card height) */}
                  <div className="absolute bottom-0 left-0 right-0 h-[35%] p-0">
                    {/* Rectangle with shadow for title, description and metric - full width */}
                    <div className="bg-black/80 backdrop-blur-sm rounded-t-2xl p-4 sm:p-6 shadow-2xl h-full flex flex-col justify-center w-full">
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-1.5 sm:mb-2 font-display text-left">
                        {caseItem.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-2.5 sm:mb-3 text-left">
                        {caseItem.description}
                      </p>
                      
                      {/* Metric inside the rectangle */}
                      <div className={`inline-flex items-center px-4 py-2 rounded-full ${caseItem.metricColor} text-white font-semibold text-sm sm:text-base shadow-lg w-fit`}>
                        {caseItem.metric}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-pink-500 rounded-full opacity-60" />
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-pink-400 rounded-full opacity-40" />
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Botão Ver Todos os Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.7 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <Link 
            href="/cases"
            className="inline-block bg-pink-500 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg font-semibold hover:bg-pink-600 transition-colors text-base sm:text-lg shadow-lg"
          >
            Ver Todos os Cases
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
