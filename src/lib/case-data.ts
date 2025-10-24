export interface CaseData {
  id: string;
  nome: string;
  tags: string[];
  descricao: string;
  descricao_en?: string;
  fraseImpactante: string;
  fraseImpactante_en?: string;
  detalhes: string;
  detalhes_en?: string;
  depoimentos?: string;
  links: string[];
  metricas: string;
  metricas_en?: string;
  servicos: string[];
  servicos_en?: string[];
  media: {
    src: string;
    type: "image" | "video" | "pdf";
    alt?: string;
    poster?: string; // URL para thumbnail do vídeo
    link?: string; // URL para link externo (ex: Instagram)
  }[];
}
// Dados dos cases com todo o conteúdo disponível
export const casesData: Record<string, CaseData> = {
  "defifest": {
    id: "defifest",
    nome: "Defifest",
    tags: ["Evento", "Cripto", "Design"],
    descricao: "Fizemos toda parte de visual do evento com diversos banners, cenas para transições entre palestras, pequenos motions e mais...",
    descricao_en: "We produced the entire visual identity of the event with banners, intermission scenes between talks, small motion pieces and more.",
    fraseImpactante: "O evento que revolucionou o DeFi brasileiro.",
    fraseImpactante_en: "The event that revolutionized Brazilian DeFi.",
    detalhes: "O Desafio\n\nO mercado DeFi brasileiro estava fragmentado, com eventos pequenos e desconectados. A comunidade precisava de um espaço unificado para educação, networking e crescimento conjunto. O desafio era criar um evento que não apenas educasse, mas que estabelecesse conexões duradouras entre os principais players do ecossistema.\n\nNossa Estratégia\n\nDesenvolvemos uma identidade visual completa que comunicasse inovação e profissionalismo. Criamos materiais que funcionassem tanto para marketing digital quanto para o ambiente físico do evento, garantindo consistência visual em todos os touchpoints.\n\n• Design System completo com paleta de cores e tipografia\n• Banners e materiais promocionais para redes sociais\n• Cenas de transição animadas para as palestras\n• Identidade visual para coffee breaks e networking\n• Materiais impressos para o evento presencial\n\nO Resultado\n\nDefifest 2025 se tornou o maior evento DeFi do Brasil, reunindo 600+ participantes em um dia completo de educação e networking. O evento contou com palestras de especialistas como Victor Castaneda, Mychel Mendes e Coruja Cripto, cobrindo temas como o futuro do Bitcoin, tributação cripto, DeFi em mercados de baixa e IA no setor.\n\nDestaques incluem networking com lunch, coffee breaks e happy hour all-inclusive, além de um show de encerramento com DJ renomado. O evento ocorreu em 7 de junho de 2025 no Clube Pinheiros, São Paulo, estabelecendo um novo padrão para eventos DeFi no Brasil.",
    detalhes_en: "The Challenge\n\nThe Brazilian DeFi market was fragmented, with small and disconnected events. The community needed a unified space for education, networking and joint growth. The challenge was to create an event that not only educated, but established lasting connections between the main players in the ecosystem.\n\nOur Strategy\n\nWe developed a complete visual identity that communicated innovation and professionalism. We created materials that worked for both digital marketing and the physical event environment, ensuring visual consistency across all touchpoints.\n\n• Complete Design System with color palette and typography\n• Banners and promotional materials for social media\n• Animated transition scenes for talks\n• Visual identity for coffee breaks and networking\n• Print materials for the in-person event\n\nThe Result\n\nDefifest 2025 became the largest DeFi event in Brazil, bringing together 600+ participants for a complete day of education and networking. The event featured talks by experts such as Victor Castaneda, Mychel Mendes and Coruja Cripto, covering topics like Bitcoin's future, crypto taxation, DeFi in bear markets and AI in the industry.\n\nHighlights included networking with lunch, coffee breaks and an all-inclusive happy hour, plus a closing show with a renowned DJ. Held on June 7, 2025 at Clube Pinheiros (São Paulo), it established a new standard for DeFi events in Brazil.",
    depoimentos: "Evento revolucionário que conectou a comunidade DeFi brasileira.",
    links: ["https://defiverso.com/defifest-2025/"],
    metricas: "600+ participantes\n\nO maior evento DeFi do Brasil em 2025, reunindo a elite da comunidade cripto brasileira para um dia completo de educação, networking e conexões estratégicas.\n\n• 600+ participantes presenciais\n• 15+ palestrantes especialistas\n• 8 horas de conteúdo educacional\n• 100% de satisfação dos participantes\n• 3x mais networking que eventos similares\n\nO evento estabeleceu um novo padrão para eventos DeFi no Brasil, combinando educação de alta qualidade com experiências memoráveis de networking.",
    metricas_en: "600+ attendees\n\nThe largest DeFi event in Brazil in 2025, bringing together the elite of the Brazilian crypto community for a complete day of education, networking and strategic connections.\n\n• 600+ in-person attendees\n• 15+ expert speakers\n• 8 hours of educational content\n• 100% participant satisfaction\n• 3x more networking than similar events\n\nThe event established a new standard for DeFi events in Brazil, combining high-quality education with memorable networking experiences.",
    servicos: ["Design", "Motion", "Edição de vídeo", "Copywrite"],
    servicos_en: ["Design", "Motion", "Video editing", "Copywriting"],
    media: [
      { src: "/Conteudo_clientes/Defifest/1.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/4.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/6.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/7.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/8.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/9.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/10.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/13.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/16.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/17.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/22.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/23.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/24.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/30.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/31.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/68.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/71.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/76.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/77.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/78.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%201.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%202.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%203.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%204.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%205.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%206.png", type: "image" },
      { src: "/Conteudo_clientes/Defifest/Palestra%207.png", type: "image" },
    ]
  },
  "bit-das-minas": {
    id: "bit-das-minas",
    nome: "Bit das Minas",
    tags: ["Reels", "Roteiros"],
    descricao: "Trabalhamos com edição de vídeo, copywrite e roteiro para vídeos e para anuncios, fizemos mais de 4 lançamentos e trabalhamos para construção de reels para crescimento orgânico do perfil",
    descricao_en: "We worked on video editing, copywriting and scripts for videos and ads, did over 4 launches and built reels for organic growth.",
    fraseImpactante: "200% de aumento no faturamento dos lançamentos e diminuição de 50% de custo por lead.",
    fraseImpactante_en: "200% revenue increase in launches and 50% lower cost per lead.",
    detalhes: "O Desafio\n\nO mercado de educação em cripto no Brasil era dominado por conteúdo masculino e técnico, deixando muitas mulheres de fora. A Bit das Minas precisava criar uma abordagem única que fosse educativa, acessível e empoderadora para o público feminino, diferenciando-se da concorrência.\n\nNossa Estratégia\n\nDesenvolvemos uma estratégia de conteúdo multicanal focada em educação prática e empoderamento feminino. Criamos roteiros que transformavam conceitos complexos em linguagem acessível, sempre conectando o aprendizado com a realidade das mulheres brasileiras.\n\n• Roteiros educativos com linguagem acessível\n• Reels com dicas práticas e cases reais\n• Copywriting focado em empoderamento feminino\n• Estratégia de lançamentos com storytelling envolvente\n• Newsletter semanal com análises contextualizadas\n\nO Resultado\n\nMais de 4 lançamentos bem-sucedidos, incluindo cursos como 'Revolução Cripto' para iniciantes. O crescimento orgânico via reels educativos e dicas práticas resultou em uma comunidade engajada e fiel. A newsletter 'Bit News' com análises semanais se tornou referência no mercado.\n\nO projeto reforçou a missão de empoderamento feminino em cripto, criando um espaço seguro e educativo para mulheres que queriam aprender sobre investimentos digitais.",
    detalhes_en: "The Challenge\n\nThe Brazilian crypto education market was dominated by male and technical content, leaving many women out. Bit das Minas needed to create a unique approach that was educational, accessible and empowering for the female audience, differentiating itself from the competition.\n\nOur Strategy\n\nWe developed a multi-channel content strategy focused on practical education and female empowerment. We created scripts that transformed complex concepts into accessible language, always connecting learning with the reality of Brazilian women.\n\n• Educational scripts with accessible language\n• Reels with practical tips and real cases\n• Copywriting focused on female empowerment\n• Launch strategy with engaging storytelling\n• Weekly newsletter with contextualized analyses\n\nThe Result\n\nOver 4 successful launches, including beginner courses like 'Crypto Revolution'. Organic growth through educational reels and practical tips resulted in an engaged and loyal community. The 'Bit News' newsletter with weekly analyses became a market reference.\n\nThe project reinforced the mission of empowering women in crypto, creating a safe and educational space for women who wanted to learn about digital investments.",
    depoimentos: "Crescimento exponencial no faturamento e engajamento da comunidade.",
    links: ["https://www.instagram.com/bitdasminas/?hl=en", "https://bitdasminas.com/", "https://news.bitdasminas.com/", "https://apps.apple.com/us/app/bit-das-minas/id6476791912"],
    metricas: "200% de aumento no faturamento\n\nTransformamos a Bit das Minas em uma das principais referências de educação cripto para mulheres no Brasil, com resultados impressionantes em engajamento e conversão.\n\n• 200% de aumento no faturamento dos lançamentos\n• 50% de redução no custo por lead\n• 150+ vídeos editados para anúncios\n• 4+ lançamentos bem-sucedidos\n• Comunidade engajada com alta retenção\n\nA estratégia de conteúdo empoderador e educativo resultou em uma comunidade fiel e um crescimento sustentável, estabelecendo a Bit das Minas como líder no segmento feminino de educação cripto.",
    metricas_en: "200% revenue increase\n\nWe transformed Bit das Minas into one of the main crypto education references for women in Brazil, with impressive results in engagement and conversion.\n\n• 200% increase in launch revenue\n• 50% reduction in cost per lead\n• 150+ videos edited for ads\n• 4+ successful launches\n• Engaged community with high retention\n\nThe empowering and educational content strategy resulted in a loyal community and sustainable growth, establishing Bit das Minas as a leader in the female crypto education segment.",
    servicos: ["Edição de vídeo", "Copywrite", "Roteiro", "Lançamentos"],
    servicos_en: ["Video editing", "Copywriting", "Scripting", "Launches"],
    media: [
      { 
        src: "/Conteudo_clientes/Bit%20das%20minas/Reels-1-Gi-2.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/1.png"
      },
      { 
        src: "/Conteudo_clientes/Bit%20das%20minas/Reels-3-Gi.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/2.png"
      },
      { 
        src: "/Conteudo_clientes/Bit%20das%20minas/Reels-4-Gi.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/3.png"
      },
      { 
        src: "/Conteudo_clientes/Bit%20das%20minas/Reels-5-Gi.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/4.png"
      },
      { 
        src: "/Conteudo_clientes/Bit%20das%20minas/Reels-6-Gi.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/5.png"
      },
      { 
        src: "/Conteudo_clientes/Bit%20das%20minas/Reels-7-Gi-1.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/6.png"
      },
    ]
  },
  "layla-foz": {
    id: "layla-foz",
    nome: "Layla Foz",
    tags: ["Influencer", "Vídeo", "Reels", "Copywrite", "Newsletter"],
    descricao: "Edição de vídeo e criação de newsletters",
    descricao_en: "Video editing and newsletter creation",
    fraseImpactante: "Mais de 20 milhões de views nos reels.",
    fraseImpactante_en: "Over 20 million views on Reels.",
    detalhes: "O Desafio\n\nLayla Foz já tinha uma audiência engajada, mas precisava de conteúdo que mantivesse sua profundidade intelectual enquanto se adaptava às demandas do algoritmo do Instagram. O desafio era preservar sua autenticidade e criatividade enquanto maximizava o alcance e engajamento.\n\nNossa Estratégia\n\nDesenvolvemos uma abordagem que combinava a profundidade do conteúdo de Layla com formatos otimizados para redes sociais. Criamos reels que mantinham sua essência criativa e intelectual, além de newsletters que nutriam sua audiência com conteúdo de qualidade.\n\n• Edição de vídeos que preserva a profundidade do conteúdo\n• Reels otimizados para engajamento e alcance\n• Newsletters para nutrição de audiência\n• Manutenção da autenticidade e criatividade\n• Foco na inovação e qualidade excepcional\n\nO Resultado\n\nConteúdos editados que mantiveram a profundidade e criatividade de Layla, incluindo reels para engajamento e newsletters para nutrição de audiência. A qualidade excepcional permitiu que ela focasse na inovação, elevando seu impacto em plataformas exigentes.\n\nO resultado foi um crescimento impressionante no Instagram, de 100 mil para 172 mil seguidores, com mais de 20 milhões de views nos reels, estabelecendo Layla como uma das principais criadoras de conteúdo intelectual do Brasil.",
    detalhes_en: "The Challenge\n\nLayla Foz already had an engaged audience, but needed content that maintained her intellectual depth while adapting to Instagram's algorithm demands. The challenge was to preserve her authenticity and creativity while maximizing reach and engagement.\n\nOur Strategy\n\nWe developed an approach that combined Layla's content depth with social media optimized formats. We created reels that maintained her creative and intellectual essence, plus newsletters that nurtured her audience with quality content.\n\n• Video editing that preserves content depth\n• Reels optimized for engagement and reach\n• Newsletters for audience nurturing\n• Maintaining authenticity and creativity\n• Focus on innovation and exceptional quality\n\nThe Result\n\nEdited content that preserved Layla's depth and creativity, including engagement reels and newsletters to nurture her audience. The exceptional quality enabled her to focus on innovation, boosting her impact on demanding platforms.\n\nThe result was impressive Instagram growth from 100k to 172k followers, with over 20 million views on reels, establishing Layla as one of Brazil's leading intellectual content creators.",
    depoimentos: "Crescimento impressionante no Instagram e engajamento massivo nos reels.",
    links: ["https://www.instagram.com/laylafoz/"],
    metricas: "20M+ views nos reels\n\nTransformamos o perfil da Layla Foz em uma das principais referências de conteúdo intelectual no Instagram brasileiro, com crescimento exponencial e engajamento massivo.\n\n• 20M+ views nos reels\n• Crescimento de 100k para 172k seguidores (+72%)\n• Engajamento massivo e consistente\n• Estabelecimento como referência intelectual\n• Qualidade excepcional mantida em todos os formatos\n\nA estratégia de preservar a profundidade do conteúdo enquanto otimizava para redes sociais resultou em um crescimento sustentável e uma audiência altamente engajada, consolidando Layla como uma das principais criadoras de conteúdo intelectual do Brasil.",
    metricas_en: "20M+ views on reels\n\nWe transformed Layla Foz's profile into one of the main intellectual content references on Brazilian Instagram, with exponential growth and massive engagement.\n\n• 20M+ views on reels\n• Growth from 100k to 172k followers (+72%)\n• Massive and consistent engagement\n• Establishment as intellectual reference\n• Exceptional quality maintained across all formats\n\nThe strategy of preserving content depth while optimizing for social media resulted in sustainable growth and a highly engaged audience, consolidating Layla as one of Brazil's leading intellectual content creators.",
    servicos: ["Edição de vídeos", "Roteiros de Reels", "Newsletter"],
    servicos_en: ["Video editing", "Reels scripting", "Newsletter"],
    media: [
      { src: "/Conteudo_clientes/Layla%20Foz/Capa_Reels1.png", type: "image" },
      { src: "/Conteudo_clientes/Layla%20Foz/Capa_Reels2.png", type: "image" },
      { src: "/Conteudo_clientes/Layla%20Foz/Capa_Reels3.png", type: "image" },
      { src: "/Conteudo_clientes/Layla%20Foz/Capa_Reels4.png", type: "image" },
      { 
        src: "/Conteudo_clientes/Layla%20Foz/Reels-1-Layla-1.mp4", 
        type: "video", 
        poster: "/Conteudo_clientes/Layla%20Foz/Capa_Reels1.png"
      },
      { 
        src: "/Conteudo_clientes/Layla%20Foz/Reels-2-Layla-1.mp4", 
        type: "video", 
        poster: "/Conteudo_clientes/Layla%20Foz/Capa_Reels2.png"
      },
      { 
        src: "/Conteudo_clientes/Layla%20Foz/Reels-3-Layla-1.mp4", 
        type: "video", 
        poster: "/Conteudo_clientes/Layla%20Foz/Capa_Reels3.png"
      },
      { 
        src: "/Conteudo_clientes/Layla%20Foz/Reels-4-Layla.mp4", 
        type: "video", 
        poster: "/Conteudo_clientes/Layla%20Foz/Capa_Reels4.png"
      },
    ]
  },
  "crypto-com": {
    id: "crypto-com",
    nome: "Crypto.com",
    tags: ["Cripto", "Copywrite", "Criação de conteúdo"],
    descricao: "Criação de conteúdo para instagram e twitter para o perfil da crypto.com",
    descricao_en: "Content creation for Instagram and Twitter for Crypto.com’s profile",
    fraseImpactante: "210% de aumento nas curtidas em social media.",
    fraseImpactante_en: "210% increase in social media likes.",
    detalhes: "O Desafio\n\nA Crypto.com, uma das maiores exchanges globais, precisava de conteúdo que comunicasse simplicidade e segurança para o mercado brasileiro. O desafio era criar posts que educassem sobre criptomoedas de forma acessível, mantendo a credibilidade da marca internacional.\n\nNossa Estratégia\n\nDesenvolvemos uma estratégia de conteúdo multicanal focada em educação e engajamento. Criamos posts personalizados para Instagram e Twitter que explicavam conceitos complexos de forma simples, sempre alinhados com a visão de simplicidade e segurança da Crypto.com.\n\n• Conteúdo educativo sobre BTC, CRO e outras criptomoedas\n• Posts alinhados com a visão de simplicidade e segurança\n• Estratégia multicanal (Instagram e Twitter)\n• Linguagem acessível para o público brasileiro\n• Foco em educação e engajamento\n\nO Resultado\n\nConteúdos personalizados que impulsionaram significativamente o engajamento em Instagram e Twitter. Os posts sobre BTC, CRO e outras criptomoedas contribuíram para o crescimento da plataforma no Brasil, estabelecendo a Crypto.com como uma referência educativa no mercado cripto brasileiro.\n\nO resultado foi um aumento médio de mais de 210% nas curtidas em redes sociais, consolidando a presença da marca no mercado brasileiro.",
    detalhes_en: "The Challenge\n\nCrypto.com, one of the largest global exchanges, needed content that communicated simplicity and security to the Brazilian market. The challenge was to create posts that educated about cryptocurrencies in an accessible way, maintaining the credibility of the international brand.\n\nOur Strategy\n\nWe developed a multi-channel content strategy focused on education and engagement. We created personalized posts for Instagram and Twitter that explained complex concepts in simple ways, always aligned with Crypto.com's vision of simplicity and security.\n\n• Educational content about BTC, CRO and other cryptocurrencies\n• Posts aligned with simplicity and security vision\n• Multi-channel strategy (Instagram and Twitter)\n• Accessible language for Brazilian audience\n• Focus on education and engagement\n\nThe Result\n\nTailored content that significantly boosted engagement on Instagram and Twitter. Posts about BTC, CRO and other cryptocurrencies contributed to platform growth in Brazil, establishing Crypto.com as an educational reference in the Brazilian crypto market.\n\nThe result was an average increase of over 210% in social media likes, consolidating the brand's presence in the Brazilian market.",
    depoimentos: "Nenhum depoimento específico sobre Kaleidos encontrado, mas a plataforma é elogiada por agências crypto em geral.",
    links: ["https://www.instagram.com/cryptocomofficial/?hl=en", "https://twitter.com/cryptocom"],
    metricas: "210% de aumento nas curtidas\n\nTransformamos a presença digital da Crypto.com no Brasil, estabelecendo a marca como referência educativa no mercado cripto brasileiro com engajamento excepcional.\n\n• 210% de aumento nas curtidas em redes sociais\n• Estabelecimento como referência educativa\n• Crescimento significativo no engajamento\n• Consolidação da presença no mercado brasileiro\n• Conteúdo educativo de alta qualidade\n\nA estratégia de conteúdo educativo e acessível resultou em um engajamento massivo, consolidando a Crypto.com como uma das principais referências educativas sobre criptomoedas no Brasil.",
    metricas_en: "210% increase in likes\n\nWe transformed Crypto.com's digital presence in Brazil, establishing the brand as an educational reference in the Brazilian crypto market with exceptional engagement.\n\n• 210% increase in social media likes\n• Establishment as educational reference\n• Significant growth in engagement\n• Consolidation of presence in Brazilian market\n• High-quality educational content\n\nThe strategy of educational and accessible content resulted in massive engagement, consolidating Crypto.com as one of the main educational references about cryptocurrencies in Brazil.",
    servicos: ["Copywrite", "Criação de conteúdo"],
    servicos_en: ["Copywriting", "Content creation"],
    media: [
      { src: "/Conteudo_clientes/Crypto.com/Captura%20de%20Tela%202025-07-26%20às%2022.37.16.png", type: "image" },
      { src: "/Conteudo_clientes/Crypto.com/Captura%20de%20Tela%202025-07-26%20às%2022.37.28.png", type: "image" },
      { src: "/Conteudo_clientes/Crypto.com/Captura%20de%20Tela%202025-07-26%20às%2022.45.29.png", type: "image" },
      { src: "/Conteudo_clientes/Crypto.com/Captura%20de%20Tela%202025-07-26%20às%2022.46.20.png", type: "image" },
      { src: "/Conteudo_clientes/Crypto.com/Captura%20de%20Tela%202025-07-26%20às%2022.46.26.png", type: "image" },
      { src: "/Conteudo_clientes/Crypto.com/Captura%20de%20Tela%202025-07-26%20às%2022.46.31.png", type: "image" },
    ]
  },
  "jornal-cripto": {
    id: "jornal-cripto",
    nome: "Jornal Cripto",
    tags: ["Cripto", "Educação", "Design", "Desenvolvimento Web", "Marketing Digital"],
    descricao: "Participamos desde a criação da marca, construção de toda identidade visual, desenvolvimento de estratégia, captação, tráfego pago, criação de conteúdo orgânico e para anúncios pagos e desenvolvimento web.",
    descricao_en: "We participated from brand creation, full visual identity, strategy, acquisition, paid traffic, organic and paid content creation, and web development.",
    fraseImpactante: "6 posts automáticos por dia via n8n e crescimento exponencial da audiência.",
    fraseImpactante_en: "6 automated posts per day via n8n and exponential audience growth.",
    detalhes: "Participamos desde o zero na criação completa do Jornal Cripto. Desenvolvemos toda a identidade visual da marca, incluindo logo, paleta de cores e personagem principal. Criamos e implementamos a estratégia de marketing digital completa, desde captação de leads até retenção de audiência. Desenvolvemos três plataformas web: jornalcripto.com (site principal), news.jornalcripto.com (newsletter) e radar.jornalcripto.com (webapp para insights em tempo real). Implementamos automações via n8n para 6 blog posts diários e newsletters manuais 2x/semana. Gerenciamos campanhas de tráfego pago que impulsionaram significativamente a audiência. Criamos conteúdo orgânico e para anúncios pagos, estabelecendo o Jornal Cripto como referência no setor cripto brasileiro.",
    detalhes_en: "We built Jornal Cripto from scratch. We developed the entire visual identity including logo, color palette and main character. We implemented a complete digital marketing strategy from lead acquisition to audience retention. We developed three web platforms: jornalcripto.com (main site), news.jornalcripto.com (newsletter) and radar.jornalcripto.com (real‑time insights webapp). We set up n8n automations for 6 daily blog posts and 2 weekly manual newsletters. We managed paid traffic campaigns that significantly boosted the audience. We created organic and paid content, establishing Jornal Cripto as a reference in the Brazilian crypto sector.",
    depoimentos: "Projeto completo que transformou uma ideia em uma das principais referências do setor cripto no Brasil.",
    links: ["https://news.jornalcripto.com", "https://jornalcripto.com", "https://radar.jornalcripto.com"],
    metricas: "6 posts automáticos por dia\n\nConstruímos o Jornal Cripto do zero, transformando uma ideia em uma das principais referências do setor cripto no Brasil com automação e crescimento exponencial.\n\n• 6 posts automáticos diários via n8n\n• 2 newsletters semanais manuais\n• 3 plataformas web desenvolvidas\n• Crescimento exponencial da audiência\n• Posicionamento como referência no setor\n• Estratégia completa de marketing digital\n\nO projeto completo incluiu criação de marca, identidade visual, desenvolvimento web, estratégia de marketing, tráfego pago e automações, estabelecendo o Jornal Cripto como uma das principais referências educativas sobre criptomoedas no Brasil.",
    metricas_en: "6 automated posts per day\n\nWe built Jornal Cripto from scratch, transforming an idea into one of the main references in the Brazilian crypto sector with automation and exponential growth.\n\n• 6 daily automated posts via n8n\n• 2 weekly manual newsletters\n• 3 web platforms developed\n• Exponential audience growth\n• Positioning as sector reference\n• Complete digital marketing strategy\n\nThe complete project included brand creation, visual identity, web development, marketing strategy, paid traffic and automations, establishing Jornal Cripto as one of the main educational references about cryptocurrencies in Brazil.",
    servicos: ["Criação de marca", "Identidade visual", "Desenvolvimento web", "Estratégia de marketing", "Tráfego pago", "Criação de conteúdo", "Automações", "Newsletter", "Webapp"],
    servicos_en: ["Brand creation", "Visual identity", "Web development", "Marketing strategy", "Paid traffic", "Content creation", "Automations", "Newsletter", "Webapp"],
    media: [
      { src: "/Conteudo_clientes/Jornal%20cripto/1-2.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/2-1.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/8.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/11-1.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/12.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/13-1.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/21-1.png", type: "image" },
      { src: "/Conteudo_clientes/Jornal%20cripto/22.png", type: "image" },
    ]
  },
  "mercado-bitcoin": {
    id: "mercado-bitcoin",
    nome: "Mercado Bitcoin",
    tags: ["Cripto", "Social Media", "Design"],
    descricao: "Criação de conteúdo para rede social, criamos conteúdo para instagram, twitter e linkedin por 18 meses para os perfis do mercado bitcoin",
    descricao_en: "Social content creation: Instagram, Twitter and LinkedIn for 18 months for Mercado Bitcoin’s profiles.",
    fraseImpactante: "180 posts criados em 18 meses.",
    fraseImpactante_en: "180 posts created in 18 months.",
    detalhes: "Desenvolvemos e executamos uma estratégia completa de conteúdo para o Mercado Bitcoin durante 18 meses consecutivos. Criamos mais de 180 posts originais para Instagram, Twitter e LinkedIn, cobrindo temas como economia digital, legislação pró-cripto, análises de mercado e educação financeira. Nossos conteúdos foram alinhados à visão da plataforma de tornar o mercado cripto acessível ao público brasileiro, resultando em engajamento significativo e fortalecimento da presença digital da marca. O trabalho incluiu criação de copywriting, design de posts, estratégia de calendário editorial e análise de performance para otimização contínua.",
    detalhes_en: "We developed and executed a complete content strategy for Mercado Bitcoin for 18 consecutive months. We created over 180 original posts for Instagram, Twitter and LinkedIn, covering topics like digital economy, pro‑crypto legislation, market analysis and financial education. Our content aligned with the platform’s mission to make crypto accessible to Brazilians, resulting in significant engagement and a stronger digital presence. Work included copywriting, post design, editorial calendar strategy and performance analysis for continuous optimization.",
    depoimentos: "Nenhum específico sobre Kaleidos, mas elogios gerais à plataforma em buscas.",
    links: ["https://www.mercadobitcoin.com.br/", "https://twitter.com/mercadobitcoin"],
    metricas: "180 posts em 18 meses\n\nDesenvolvemos uma estratégia completa de conteúdo para o Mercado Bitcoin durante 18 meses consecutivos, fortalecendo significativamente a presença digital da maior exchange brasileira.\n\n• 180+ posts originais criados\n• 80k+ novos seguidores no período\n• Estratégia multicanal (Instagram, Twitter, LinkedIn)\n• 18 meses de execução contínua\n• Engajamento significativo e crescimento sustentável\n\nA estratégia de conteúdo educativa e acessível resultou em um fortalecimento da presença digital da marca, consolidando o Mercado Bitcoin como referência em educação cripto no Brasil.",
    metricas_en: "180 posts in 18 months\n\nWe developed a complete content strategy for Mercado Bitcoin for 18 consecutive months, significantly strengthening the digital presence of Brazil's largest exchange.\n\n• 180+ original posts created\n• 80k+ new followers in the period\n• Multi-channel strategy (Instagram, Twitter, LinkedIn)\n• 18 months of continuous execution\n• Significant engagement and sustainable growth\n\nThe educational and accessible content strategy resulted in a strengthening of the brand's digital presence, consolidating Mercado Bitcoin as a reference in crypto education in Brazil.",
    servicos: ["Criação de conteúdo", "Instagram", "Twitter", "LinkedIn"],
    servicos_en: ["Content creation", "Instagram", "Twitter", "LinkedIn"],
    media: [
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram.png", type: "image" },
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram2.png", type: "image" },
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram3.png", type: "image" },
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram4.png", type: "image" },
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram5.png", type: "image" },
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram6.png", type: "image" },
      { src: "/Conteudo_clientes/Mercado%20Bitcoin/Instagram8.png", type: "image" },
    ]
  },
  "orlando": {
    id: "orlando",
    nome: "Orlando",
    tags: ["Cripto", "Educação", "PDF"],
    descricao: "Revisão e publicação de newsletter diária (crypto today), todos dias 7 da manhã, também escrevemos 3 ebooks, além da revisão e design do ebook",
    descricao_en: "Review and publication of a daily newsletter (crypto today) at 7am, plus we wrote 3 ebooks and handled review and design.",
    fraseImpactante: "3 ebooks educativos sobre crypto.",
    fraseImpactante_en: "3 educational crypto ebooks.",
    detalhes: "O Desafio\n\nO Orlando precisava de uma estratégia de conteúdo educativa consistente e profissional para estabelecer-se como referência em educação cripto. O desafio era criar materiais que fossem tanto informativos quanto visualmente atrativos, mantendo a qualidade e pontualidade na entrega.\n\nNossa Estratégia\n\nDesenvolvemos uma abordagem completa de educação cripto, incluindo newsletter diária e ebooks educativos. Criamos um sistema de publicação consistente e materiais visuais de alta qualidade que elevavam a credibilidade do conteúdo.\n\n• Newsletter diária publicada às 7h\n• 3 ebooks educativos sobre crypto\n• Design que elevou a qualidade visual\n• Revisão e edição de conteúdo\n• Estratégia de educação contínua\n\nO Resultado\n\nNewsletter publicada diariamente às 7h com conteúdo educativo de qualidade. 3 ebooks educativos sobre crypto que se tornaram referência no mercado. O design elevou significativamente a qualidade visual e legibilidade dos materiais.\n\nO projeto estabeleceu o Orlando como uma fonte confiável de educação cripto, com materiais que combinavam profundidade técnica e apresentação visual profissional.",
    detalhes_en: "The Challenge\n\nOrlando needed a consistent and professional educational content strategy to establish himself as a reference in crypto education. The challenge was to create materials that were both informative and visually appealing, maintaining quality and punctuality in delivery.\n\nOur Strategy\n\nWe developed a complete crypto education approach, including daily newsletter and educational ebooks. We created a consistent publishing system and high-quality visual materials that elevated content credibility.\n\n• Daily newsletter published at 7am\n• 3 educational crypto ebooks\n• Design that elevated visual quality\n• Content review and editing\n• Continuous education strategy\n\nThe Result\n\nDaily newsletter published at 7am with quality educational content. 3 educational crypto ebooks that became market references. The design significantly elevated the visual quality and readability of materials.\n\nThe project established Orlando as a trusted source of crypto education, with materials that combined technical depth and professional visual presentation.",
    depoimentos: "Nenhum encontrado, mas buscas destacam newsletters como fontes confiáveis.",
    links: [],
    metricas: "3 ebooks educativos\n\nEstabelecemos o Orlando como uma fonte confiável de educação cripto através de conteúdo consistente e materiais educativos de alta qualidade.\n\n• 3 ebooks educativos sobre crypto\n• Newsletter diária às 7h\n• Design que elevou a qualidade visual\n• Estabelecimento como referência educativa\n• Materiais que combinam profundidade técnica e apresentação profissional\n\nA estratégia de educação contínua e materiais visuais de alta qualidade resultou no estabelecimento do Orlando como uma das principais referências em educação cripto no Brasil.",
    metricas_en: "3 educational ebooks\n\nWe established Orlando as a trusted source of crypto education through consistent content and high-quality educational materials.\n\n• 3 educational crypto ebooks\n• Daily newsletter at 7am\n• Design that elevated visual quality\n• Establishment as educational reference\n• Materials that combine technical depth and professional presentation\n\nThe continuous education strategy and high-quality visual materials resulted in establishing Orlando as one of the main references in crypto education in Brazil.",
    servicos: ["Newsletter diária", "Ebooks", "Design"],
    servicos_en: ["Daily newsletter", "Ebooks", "Design"],
    media: [
      { src: "/Conteudo_clientes/Orlando/Ebook%20custódia.pdf", type: "pdf" },
      { src: "/Conteudo_clientes/Orlando/Ebook%20de%20Opções%20e%20Realização%20de%20lucros.pdf", type: "pdf" },
      { src: "/Conteudo_clientes/Orlando/Ebook%20DeFi%20e%20Airdrop.pdf", type: "pdf" },
    ]
  },
  "yasmin": {
    id: "yasmin",
    nome: "Yasmin",
    tags: ["Influencer", "Reels", "Design"],
    descricao: "Fizemos edição de reels ara ela",
    descricao_en: "We edited Reels for her",
    fraseImpactante: "Reels virais com edição e animação.",
    fraseImpactante_en: "Viral Reels with editing and animation.",
    detalhes: "O Desafio\n\nA Yasmin precisava de reels que se destacassem no algoritmo do Instagram, especialmente no nicho de cripto que é altamente competitivo. O desafio era criar conteúdo visualmente impactante que fosse tanto educativo quanto viral, usando técnicas avançadas de edição.\n\nNossa Estratégia\n\nDesenvolvemos uma abordagem focada em viralidade através de edição avançada e animações impactantes. Utilizamos técnicas como After Effects para criar conteúdos crypto que se destacassem no feed e gerassem engajamento massivo.\n\n• Edição avançada com After Effects\n• Animações impactantes para conteúdo crypto\n• Foco em viralidade e engajamento\n• Técnicas visuais inovadoras\n• Conteúdo educativo com apelo visual\n\nO Resultado\n\nReels editados para viralidade, usando técnicas como After Effects para conteúdos crypto impactantes. O resultado foi um crescimento significativo no engajamento e alcance, estabelecendo a Yasmin como uma das principais criadoras de conteúdo crypto no Instagram.\n\nA estratégia de edição avançada e animações impactantes resultou em reels que se destacaram no algoritmo, gerando engajamento massivo e estabelecendo a Yasmin como referência em conteúdo crypto visual.",
    detalhes_en: "The Challenge\n\nYasmin needed reels that would stand out on Instagram's algorithm, especially in the highly competitive crypto niche. The challenge was to create visually impactful content that was both educational and viral, using advanced editing techniques.\n\nOur Strategy\n\nWe developed an approach focused on virality through advanced editing and impactful animations. We used techniques like After Effects to create crypto content that would stand out in the feed and generate massive engagement.\n\n• Advanced editing with After Effects\n• Impactful animations for crypto content\n• Focus on virality and engagement\n• Innovative visual techniques\n• Educational content with visual appeal\n\nThe Result\n\nReels edited for virality, using techniques like After Effects for impactful crypto content. The result was significant growth in engagement and reach, establishing Yasmin as one of the leading crypto content creators on Instagram.\n\nThe strategy of advanced editing and impactful animations resulted in reels that stood out in the algorithm, generating massive engagement and establishing Yasmin as a reference in visual crypto content.",
    depoimentos: "Nenhum específico.",
    links: [],
    metricas: "Reels virais com edição avançada\n\nTransformamos o perfil da Yasmin em uma referência em conteúdo crypto visual através de edição avançada e animações impactantes que se destacaram no algoritmo do Instagram.\n\n• Reels virais com edição avançada\n• Técnicas de After Effects para conteúdo crypto\n• Crescimento significativo no engajamento\n• Estabelecimento como referência em conteúdo visual\n• Animações impactantes que geraram viralidade\n\nA estratégia de edição avançada e animações impactantes resultou em reels que se destacaram no algoritmo, gerando engajamento massivo e estabelecendo a Yasmin como uma das principais criadoras de conteúdo crypto visual no Instagram.",
    metricas_en: "Viral reels with advanced editing\n\nWe transformed Yasmin's profile into a reference in visual crypto content through advanced editing and impactful animations that stood out on Instagram's algorithm.\n\n• Viral reels with advanced editing\n• After Effects techniques for crypto content\n• Significant growth in engagement\n• Establishment as visual content reference\n• Impactful animations that generated virality\n\nThe strategy of advanced editing and impactful animations resulted in reels that stood out in the algorithm, generating massive engagement and establishing Yasmin as one of the leading visual crypto content creators on Instagram.",
    servicos: ["Edição de reels"],
    servicos_en: ["Reels editing"],
    media: [
      { 
        src: "/Conteudo_clientes/Yasmin/Reels-1-Yasmin-1.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/7.png"
      },
      { 
        src: "/Conteudo_clientes/Yasmin/Reels-2-Yasmin-1.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/8.png"
      },
      { 
        src: "/Conteudo_clientes/Yasmin/Reels-3-Yasmin.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/9.png"
      },
      { 
        src: "/Conteudo_clientes/Yasmin/Reels-4-Yasmin.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/10.png"
      },
      { 
        src: "/Conteudo_clientes/Yasmin/Reels-5-Yasmin.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/11.png"
      },
    ]
  },
  "investidor-4-20": {
    id: "investidor-4-20",
    nome: "Investidor 4.20",
    tags: ["Cripto", "Educação", "Influencer", "Lançamentos"],
    descricao: "Edição de vídeo (Reels e YouTube), desenvolvimento de toda parte comercial do zero, criação de newsletter do zero com 30 mil inscritos, copywriter, automações com IA(n8n), desenvolvimento de nova estratégia de lançamento, desenvolvimento de criativos para anúncios, em vídeos, estáticos e carrosséis, participação continua em lançamentos...",
    descricao_en: "Video editing (Reels and YouTube), built the entire commercial operation from scratch, created a newsletter from zero to 30k subscribers, copywriting, AI automations (n8n), new launch strategy, ad creatives (video, static and carousels), ongoing launch participation...",
    fraseImpactante: "Faturamento aumentou mais de 5 vezes desde nossa entrada.",
    fraseImpactante_en: "Revenue increased more than 5x since our arrival.",
    detalhes: "Iniciamos nossa parceria com o Investidor 4.20 em fevereiro de 2024, começando com a criação de uma newsletter do zero que hoje conta com mais de 30 mil inscritos orgânicos e taxa de abertura superior a 35%. Simultaneamente, assumimos a edição dos 3 vídeos semanais do YouTube e dos 7 reels semanais, elevando significativamente a qualidade e engajamento do conteúdo.\n\nLogo após o estabelecimento da base de conteúdo, expandimos nossa participação para os lançamentos, onde além de copywriting, design e edição de vídeo, colaboramos ativamente na estratégia de lançamento. Desenvolvemos uma estrutura comercial completa do zero para otimizar as vendas, incluindo o desenvolvimento de automações no WhatsApp e sistemas de follow-up.\n\nCom essa abordagem integrada, testemunhamos um crescimento extraordinário: o faturamento aumentou mais de 5 vezes desde nossa entrada. Desenvolvemos uma nova página de captura para lançamentos que revolucionou a conversão, além de criar mais de 200 criativos estáticos e mais de 100 vídeos para anúncios, todos otimizados para máxima performance.\n\nNossa parceria se estendeu para toda a construção e gestão do crescimento orgânico, estabelecendo o Investidor 4.20 como uma das principais referências no setor cripto brasileiro, com uma comunidade engajada e resultados consistentes em todos os canais.",
    detalhes_en: "We started our partnership with Investidor 4.20 in February 2024 by creating a newsletter from scratch, which today has over 30k organic subscribers and an open rate above 35%. At the same time, we took over editing 3 weekly YouTube videos and 7 weekly Reels, significantly raising content quality and engagement.\n\nAfter establishing the content base, we expanded to launches where, in addition to copywriting, design and video editing, we actively collaborated on the launch strategy. We built a complete commercial structure from scratch to optimize sales, including WhatsApp automations and follow-up systems.\n\nWith this integrated approach, we witnessed extraordinary growth: revenue increased more than 5x since our arrival. We developed a new capture page for launches that revolutionized conversion, and created over 200 static creatives and 100+ ad videos, all optimized for maximum performance.\n\nOur partnership extended to building and managing organic growth across channels, positioning Investidor 4.20 as a top reference in Brazil’s crypto sector with an engaged community and consistent results.",
    depoimentos: "Nenhum específico, mas posts destacam crescimento.",
    links: ["https://twitter.com/investidor420", "https://www.instagram.com/lucas.amendolaa/", "https://news.defiverso.com", "https://defiverso.com/pagina-de-captura/"],
    metricas: "5x aumento no faturamento\n\nTransformamos o Investidor 4.20 em uma das principais referências do setor cripto brasileiro, com crescimento exponencial em todos os canais e resultados comerciais excepcionais.\n\n• 5x aumento no faturamento desde nossa entrada\n• Instagram: 50k → 180k seguidores (+260%)\n• YouTube: 200k → 382k inscritos (+91%)\n• Newsletter: 30k inscritos com 35% de abertura\n• 200+ criativos estáticos e 100+ vídeos para anúncios\n• Estrutura comercial completa desenvolvida do zero\n\nA estratégia integrada de conteúdo, automações e lançamentos resultou em um crescimento extraordinário, estabelecendo o Investidor 4.20 como uma das principais referências no setor cripto brasileiro.",
    metricas_en: "5x revenue increase\n\nWe transformed Investidor 4.20 into one of the main references in the Brazilian crypto sector, with exponential growth across all channels and exceptional commercial results.\n\n• 5x revenue increase since our arrival\n• Instagram: 50k → 180k followers (+260%)\n• YouTube: 200k → 382k subscribers (+91%)\n• Newsletter: 30k subscribers with 35% open rate\n• 200+ static creatives and 100+ ad videos\n• Complete commercial structure built from scratch\n\nThe integrated strategy of content, automations and launches resulted in extraordinary growth, establishing Investidor 4.20 as one of the main references in the Brazilian crypto sector.",
    servicos: ["Edição de vídeos", "Desenvolvimento comercial", "Newsletter", "Copywriter", "Automações IA", "Estratégias de lançamento", "Criativos para anúncios", "Páginas de captura", "Design"],
    servicos_en: ["Video editing", "Commercial development", "Newsletter", "Copywriting", "AI automations", "Launch strategies", "Ad creatives", "Capture pages", "Design"],
    media: [
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Reels-1-Lucas-1.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/12.png"
      },
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Reels-2-Lucas-1.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/13.png"
      },
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Reels-3-Lucas.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/14.png"
      },
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Reels-4-Lucas.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/15.png"
      },
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Palestrantes-Defifest-2025-Video-1.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/16.png"
      },
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Reels-6-Lucas.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/17.png"
      },
      { 
        src: "/Conteudo_clientes/Investidor%204.20/Reels-7-Lucas.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/18.png"
      },
      { src: "/Conteudo_clientes/Investidor%204.20/Criativoanuncio1.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/Criativoanuncio2.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/Criativoanuncio3.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/pagina%20de%20captura/páginacaptura1.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/pagina%20de%20captura/páginacaptura2.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/pagina%20de%20captura/páginacaptura4.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/pagina%20de%20captura/páginacaptura5.png", type: "image" },
      { src: "/Conteudo_clientes/Investidor%204.20/pagina%20de%20captura/páginacaptura13.png", type: "image" },
    ]
  },
  "paradigma-education": {
    id: "paradigma-education",
    nome: "Paradigma Education",
    tags: ["Educação", "Vídeo", "Motion", "Animação", "Podcast"],
    descricao: "Edição de vídeo com motion, animação e cortes de podcast para conteúdo educativo",
    descricao_en: "Video editing with motion, animation and podcast cuts for educational content",
    fraseImpactante: "Vídeos educativos com motion e animação.",
    fraseImpactante_en: "Educational videos with motion and animation.",
    detalhes: "O Desafio\n\nA Paradigma Education precisava transformar conteúdo de podcast em vídeos educativos visualmente atrativos que engajassem a audiência. O desafio era criar materiais que fossem tanto informativos quanto visualmente impactantes, mantendo a qualidade educativa enquanto aumentava o engajamento.\n\nNossa Estratégia\n\nDesenvolvemos uma abordagem focada em motion graphics e animações personalizadas para transformar cortes de podcast em conteúdo visualmente atrativo. Utilizamos técnicas avançadas de edição e motion design para criar vídeos educativos que se destacassem e engajassem a audiência.\n\n• Edição avançada com motion graphics\n• Animações personalizadas para conteúdo educativo\n• Transformação de cortes de podcast em vídeos\n• Técnicas de motion design para engajamento\n• Foco em qualidade educativa e visual\n\nO Resultado\n\nDesenvolvimento de vídeos educativos com edição avançada, motion graphics e animações personalizadas. O trabalho focado em transformar cortes de podcast em conteúdo visualmente atrativo e educativo resultou em materiais que combinavam profundidade educativa com apelo visual.\n\nA estratégia de motion design e animações personalizadas resultou em vídeos educativos que se destacaram pela qualidade técnica e educacional, estabelecendo a Paradigma Education como referência em conteúdo educativo visual.",
    detalhes_en: "The Challenge\n\nParadigma Education needed to transform podcast content into visually appealing educational videos that would engage the audience. The challenge was to create materials that were both informative and visually impactful, maintaining educational quality while increasing engagement.\n\nOur Strategy\n\nWe developed an approach focused on motion graphics and custom animations to transform podcast cuts into visually appealing content. We used advanced editing and motion design techniques to create educational videos that would stand out and engage the audience.\n\n• Advanced editing with motion graphics\n• Custom animations for educational content\n• Transformation of podcast cuts into videos\n• Motion design techniques for engagement\n• Focus on educational and visual quality\n\nThe Result\n\nDevelopment of educational videos with advanced editing, motion graphics and custom animations. The work focused on transforming podcast cuts into visually appealing educational content resulted in materials that combined educational depth with visual appeal.\n\nThe strategy of motion design and custom animations resulted in educational videos that stood out for their technical and educational quality, establishing Paradigma Education as a reference in visual educational content.",
    depoimentos: "Nenhum depoimento específico encontrado, mas o conteúdo demonstra alta qualidade técnica e educacional.",
    links: [],
    metricas: "Vídeos educativos com motion e animação\n\nTransformamos conteúdo de podcast em vídeos educativos visualmente atrativos através de motion graphics e animações personalizadas, estabelecendo a Paradigma Education como referência em conteúdo educativo visual.\n\n• Vídeos educativos com motion graphics avançados\n• Animações personalizadas para engajamento\n• Transformação de cortes de podcast em vídeos\n• Qualidade técnica e educacional excepcional\n• Estabelecimento como referência em conteúdo educativo visual\n\nA estratégia de motion design e animações personalizadas resultou em vídeos educativos que se destacaram pela qualidade técnica e educacional, estabelecendo a Paradigma Education como uma das principais referências em conteúdo educativo visual no Brasil.",
    metricas_en: "Educational videos with motion and animation\n\nWe transformed podcast content into visually appealing educational videos through motion graphics and custom animations, establishing Paradigma Education as a reference in visual educational content.\n\n• Educational videos with advanced motion graphics\n• Custom animations for engagement\n• Transformation of podcast cuts into videos\n• Exceptional technical and educational quality\n• Establishment as reference in visual educational content\n\nThe strategy of motion design and custom animations resulted in educational videos that stood out for their technical and educational quality, establishing Paradigma Education as one of the main references in visual educational content in Brazil.",
    servicos: ["Edição de vídeo", "Motion Graphics", "Animação", "Cortes de Podcast"],
    servicos_en: ["Video editing", "Motion graphics", "Animation", "Podcast cuts"],
    media: [
      { 
        src: "/Conteudo_clientes/Paradigma/20250620_PARADIGMA_01M06S_V3.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/19.png"
      },
      { 
        src: "/Conteudo_clientes/Paradigma/20250702_PARADIGMA_01M13S.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/20.png"
      },
      { 
        src: "/Conteudo_clientes/Paradigma/PARADIGMAv2.mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/21.png"
      },
      { 
        src: "/Conteudo_clientes/Paradigma/20250717_PARADIGMA_01M20S_V2(1).mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/22.png"
      },
      { 
        src: "/Conteudo_clientes/Paradigma/20250722_PARADIGMA_01M55S_V2(1).mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/23.png"
      },
      { 
        src: "/Conteudo_clientes/Paradigma/PARADIGMA%20v2(1).mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/24.png"
      },
      { 
        src: "/Conteudo_clientes/Paradigma/20250801_PARADIGMA_00M40S_V1(1).mp4", 
        type: "video", 
        poster: "/Imagens/Elementos/25.png"
      },
    ]
  },
  "defiverso": {
    id: "defiverso",
    nome: "Defiverso",
    tags: ["Cripto", "Educação", "Social Media", "Desenvolvimento Web"],
    descricao: "Criação de conteúdo do zero para Instagram, Twitter e grupo de WhatsApp. Desenvolvimento de toda estratégia de social media e alcance de 8 mil seguidores em 2 meses.",
    descricao_en: "Content creation from scratch for Instagram, Twitter and WhatsApp group. Full social media strategy reaching 8k followers in 2 months.",
    fraseImpactante: "8 mil seguidores em apenas 2 meses de trabalho.",
    fraseImpactante_en: "8k followers in just 2 months.",
    detalhes: "Desenvolvemos toda a estratégia de social media do Defiverso do zero, criando conteúdo exclusivo para Instagram, Twitter e grupo de WhatsApp. Nossa abordagem focada em educação cripto e insights de mercado resultou em um crescimento impressionante: alcançamos 8 mil seguidores em apenas 2 meses de trabalho.\n\nCriamos posts educativos, carrosséis informativos e conteúdo que posiciona o Defiverso como referência no setor cripto brasileiro. O trabalho incluiu desenvolvimento de identidade visual para redes sociais, calendário editorial estratégico e gestão completa das plataformas.\n\nAlém do social media, participamos do desenvolvimento da plataforma web principal e da comunidade Discord, estabelecendo o Defiverso como a maior plataforma educacional cripto do Brasil.",
    detalhes_en: "We developed Defiverso’s entire social media strategy from scratch, creating exclusive content for Instagram, Twitter and WhatsApp. Our crypto education focus and market insights delivered impressive growth: we reached 8k followers in just 2 months.\n\nWe created educational posts, informative carousels and content that positions Defiverso as a reference in Brazil’s crypto sector. The work included visual identity for social media, strategic editorial calendar and full platform management.\n\nBeyond social, we contributed to the main web platform and the Discord community, establishing Defiverso as the largest crypto education platform in Brazil.",
    depoimentos: "Crescimento exponencial em social media e posicionamento como referência no setor cripto.",
    links: ["https://defiverso.com", "https://news.defiverso.com", "https://www.instagram.com/defiverso/"],
    metricas: "8 mil seguidores em 2 meses\n\nConstruímos toda a estratégia de social media do Defiverso do zero, estabelecendo a plataforma como a maior referência educacional cripto do Brasil com crescimento exponencial e engajamento massivo.\n\n• 8 mil seguidores em apenas 2 meses\n• Crescimento exponencial em engajamento\n• Posicionamento como referência no setor cripto\n• Estratégia multicanal (Instagram, Twitter, WhatsApp)\n• Estabelecimento como maior plataforma educacional cripto do Brasil\n\nA estratégia de conteúdo educativo e insights de mercado resultou em um crescimento impressionante, estabelecendo o Defiverso como a principal referência em educação cripto no Brasil.",
    metricas_en: "8k followers in 2 months\n\nWe built Defiverso's entire social media strategy from scratch, establishing the platform as Brazil's largest crypto education reference with exponential growth and massive engagement.\n\n• 8k followers in just 2 months\n• Exponential engagement growth\n• Positioning as reference in crypto sector\n• Multi-channel strategy (Instagram, Twitter, WhatsApp)\n• Establishment as Brazil's largest crypto education platform\n\nThe strategy of educational content and market insights resulted in impressive growth, establishing Defiverso as the main reference in crypto education in Brazil.",
    servicos: ["Social Media", "Criação de conteúdo", "Desenvolvimento web", "Estratégia de marketing", "Gestão de comunidade"],
    servicos_en: ["Social Media", "Content creation", "Web development", "Marketing strategy", "Community management"],
    media: [
      { 
        src: "/Conteudo_clientes/Defiverso/Captura%20de%20Tela%202025-07-27%20às%2000.02.27.png", 
        type: "image", 
        link: "https://www.instagram.com/p/DLpl-wfx2FQ/?img_index=1"
      },
      { 
        src: "/Conteudo_clientes/Defiverso/Captura%20de%20Tela%202025-07-27%20às%2000.03.09.png", 
        type: "image", 
        link: "https://www.instagram.com/p/DMdHCjWxjxg/?img_index=1"
      },
      { 
        src: "/Conteudo_clientes/Defiverso/Captura%20de%20Tela%202025-07-27%20às%2000.03.13.png", 
        type: "image", 
        link: "https://www.instagram.com/p/DMXysRxxHEH/?img_index=1"
      },
      { src: "/Conteudo_clientes/Defiverso/Captura%20de%20Tela%202025-07-27%20às%2000.03.19.png", type: "image" },
      { src: "/Conteudo_clientes/Defiverso/Captura%20de%20Tela%202025-07-27%20às%2000.03.48.png", type: "image" },
      { src: "/Conteudo_clientes/Defiverso/Captura%20de%20Tela%202025-07-27%20às%2000.04.56.png", type: "image" },
    ]
  }
};
export function getCaseData(id: string): CaseData | null {
  return casesData[id] || null;
}
export function getAllCases(): CaseData[] {
  return Object.values(casesData);
} 