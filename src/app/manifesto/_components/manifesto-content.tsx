"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function ManifestoHero() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-xs font-semibold tracking-[0.3em] uppercase text-white/30 mb-8"
      >
        Manifesto
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-display"
      >
        Gire o ângulo.{" "}
        <span
          className="inline-block"
          style={{
            background: "linear-gradient(135deg, #7CF067 0%, #D262B2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Mude o padrão.
        </span>
      </motion.h1>
    </>
  );
}

export function ManifestoBody() {
  return (
    <>
      {/* Bloco 1 — Origem */}
      <motion.div {...fadeUp} className="mb-24">
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-sans">
          Kaleidos vem de caleidoscópio — o instrumento que revela padrões
          infinitos quando você muda o ângulo. Não é coincidência. É o que
          fazemos: olhamos para o mesmo mercado que todo mundo olha e
          encontramos o ângulo que ninguém viu.
        </p>
      </motion.div>

      {/* Bloco 2 — Problema */}
      <motion.div {...fadeUp} className="mb-24">
        <h2
          className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-8 font-display"
        >
          A maioria das marcas conta a mesma história.
        </h2>
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-sans">
          Mesma forma, mesmo ritmo, mesmo ruído. Quando todo mundo fala igual,
          ninguém escuta ninguém. O problema nunca é a mensagem — é o ângulo
          de onde ela é dita.
        </p>
      </motion.div>

      {/* Bloco 3 — Quem somos */}
      <motion.div {...fadeUp} className="mb-24">
        <h2
          className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-8 font-display"
        >
          Somos arquitetos de percepção.
        </h2>
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-sans">
          Não somos uma fábrica de posts. Cada peça que criamos carrega um
          ponto de vista, uma voz, uma intenção. Trabalhamos com marcas que
          existem na fronteira — cripto, web3, fintech, educação — mercados
          onde o código e o humano se cruzam.
        </p>
      </motion.div>

      {/* Bloco 4 — Método */}
      <motion.div {...fadeUp} className="mb-24">
        <h2
          className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-8 font-display"
        >
          Conteúdo que conecta e converte.
        </h2>
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-sans">
          Combinamos estratégia, criatividade e tecnologia. Usamos IA como
          ferramenta, não como muleta. Automatizamos o repetitivo para
          investir tempo no que exige inteligência humana: encontrar o ângulo
          certo, no momento certo, para a audiência certa.
        </p>
      </motion.div>

      {/* Bloco 5 — Para quem */}
      <motion.div {...fadeUp} className="mb-24">
        <h2
          className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-8 font-display"
        >
          Feito para quem quer ser lembrado.
        </h2>
        <p className="text-lg md:text-xl text-white/50 leading-relaxed font-sans">
          Trabalhamos com marcas e criadores que querem ser lembrados por
          aquilo que disseram — não apenas pelo quanto gastaram em mídia
          paga. Se a sua história merece ser contada de um jeito diferente,
          a gente encontra o ângulo.
        </p>
      </motion.div>

      {/* Divider */}
      <motion.div {...fadeUp}>
        <div className="h-px w-full bg-white/10 mb-16" />
      </motion.div>

      {/* Assinatura */}
      <motion.div {...fadeUp}>
        <div
          className="text-2xl md:text-3xl tracking-wide text-white/80 font-display"
        >
          Kaleidos.
        </div>
        <p className="text-sm text-white/30 mt-3 tracking-widest uppercase font-sans">
          Marketing digital para marcas que existem na fronteira.
        </p>
      </motion.div>
    </>
  );
}
