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
      { src: "/Cases/defifest/conteudo/1.png", type: "image" },
      { src: "/Cases/defifest/conteudo/4.png", type: "image" },
      { src: "/Cases/defifest/conteudo/6.png", type: "image" },
      { src: "/Cases/defifest/conteudo/7.png", type: "image" },
      { src: "/Cases/defifest/conteudo/8.png", type: "image" },
      { src: "/Cases/defifest/conteudo/9.png", type: "image" },
      { src: "/Cases/defifest/conteudo/10.png", type: "image" },
      { src: "/Cases/defifest/conteudo/13.png", type: "image" },
      { src: "/Cases/defifest/conteudo/16.png", type: "image" },
      { src: "/Cases/defifest/conteudo/17.png", type: "image" },
      { src: "/Cases/defifest/conteudo/22.png", type: "image" },
      { src: "/Cases/defifest/conteudo/23.png", type: "image" },
      { src: "/Cases/defifest/conteudo/24.png", type: "image" },
      { src: "/Cases/defifest/conteudo/30.png", type: "image" },
      { src: "/Cases/defifest/conteudo/31.png", type: "image" },
      { src: "/Cases/defifest/conteudo/68.png", type: "image" },
      { src: "/Cases/defifest/conteudo/71.png", type: "image" },
      { src: "/Cases/defifest/conteudo/76.png", type: "image" },
      { src: "/Cases/defifest/conteudo/77.png", type: "image" },
      { src: "/Cases/defifest/conteudo/78.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%201.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%202.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%203.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%204.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%205.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%206.png", type: "image" },
      { src: "/Cases/defifest/conteudo/Palestra%207.png", type: "image" },
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
        src: "/Cases/bit-das-minas/conteudo/Reels-1-Gi-2.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/1.png"
      },
      { 
        src: "/Cases/bit-das-minas/conteudo/Reels-3-Gi.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/2.png"
      },
      { 
        src: "/Cases/bit-das-minas/conteudo/Reels-4-Gi.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/3.png"
      },
      { 
        src: "/Cases/bit-das-minas/conteudo/Reels-5-Gi.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/4.png"
      },
      { 
        src: "/Cases/bit-das-minas/conteudo/Reels-6-Gi.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/5.png"
      },
      { 
        src: "/Cases/bit-das-minas/conteudo/Reels-7-Gi-1.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/6.png"
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
      { src: "/Cases/layla-foz/conteudo/Capa_Reels1.png", type: "image" },
      { src: "/Cases/layla-foz/conteudo/Capa_Reels2.png", type: "image" },
      { src: "/Cases/layla-foz/conteudo/Capa_Reels3.png", type: "image" },
      { src: "/Cases/layla-foz/conteudo/Capa_Reels4.png", type: "image" },
      { 
        src: "/Cases/layla-foz/conteudo/Reels-1-Layla-1.mp4", 
        type: "video", 
        poster: "/Cases/layla-foz/conteudo/Capa_Reels1.png"
      },
      { 
        src: "/Cases/layla-foz/conteudo/Reels-2-Layla-1.mp4", 
        type: "video", 
        poster: "/Cases/layla-foz/conteudo/Capa_Reels2.png"
      },
      { 
        src: "/Cases/layla-foz/conteudo/Reels-3-Layla-1.mp4", 
        type: "video", 
        poster: "/Cases/layla-foz/conteudo/Capa_Reels3.png"
      },
      { 
        src: "/Cases/layla-foz/conteudo/Reels-4-Layla.mp4", 
        type: "video", 
        poster: "/Cases/layla-foz/conteudo/Capa_Reels4.png"
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
      { src: "/Cases/crypto-com/conteudo/Captura%20de%20Tela%202025-07-26%20às%2022.37.16.png", type: "image" },
      { src: "/Cases/crypto-com/conteudo/Captura%20de%20Tela%202025-07-26%20às%2022.37.28.png", type: "image" },
      { src: "/Cases/crypto-com/conteudo/Captura%20de%20Tela%202025-07-26%20às%2022.45.29.png", type: "image" },
      { src: "/Cases/crypto-com/conteudo/Captura%20de%20Tela%202025-07-26%20às%2022.46.20.png", type: "image" },
      { src: "/Cases/crypto-com/conteudo/Captura%20de%20Tela%202025-07-26%20às%2022.46.26.png", type: "image" },
      { src: "/Cases/crypto-com/conteudo/Captura%20de%20Tela%202025-07-26%20às%2022.46.31.png", type: "image" },
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
      { src: "/Cases/jornal-cripto/conteudo/1-2.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/2-1.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/8.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/11-1.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/12.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/13-1.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/21-1.png", type: "image" },
      { src: "/Cases/jornal-cripto/conteudo/22.png", type: "image" },
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
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram.png", type: "image" },
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram2.png", type: "image" },
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram3.png", type: "image" },
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram4.png", type: "image" },
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram5.png", type: "image" },
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram6.png", type: "image" },
      { src: "/Cases/mercado-bitcoin/conteudo/Instagram8.png", type: "image" },
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
      { src: "/Cases/orlando/conteudo/Ebook%20custódia.pdf", type: "pdf" },
      { src: "/Cases/orlando/conteudo/Ebook%20de%20Opções%20e%20Realização%20de%20lucros.pdf", type: "pdf" },
      { src: "/Cases/orlando/conteudo/Ebook%20DeFi%20e%20Airdrop.pdf", type: "pdf" },
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
        src: "/Cases/yasmin/conteudo/Reels-1-Yasmin-1.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/7.png"
      },
      { 
        src: "/Cases/yasmin/conteudo/Reels-2-Yasmin-1.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/8.png"
      },
      { 
        src: "/Cases/yasmin/conteudo/Reels-3-Yasmin.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/9.png"
      },
      { 
        src: "/Cases/yasmin/conteudo/Reels-4-Yasmin.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/10.png"
      },
      { 
        src: "/Cases/yasmin/conteudo/Reels-5-Yasmin.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/11.png"
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
    detalhes: "Contexto\n\nO Investidor 4.20, liderado por Lucas Amendola, já era uma das principais referências em educação cripto no Brasil. A comunidade buscava escalar a produção de vídeos longos e curtos sem perder a profundidade técnica que sempre fez parte da marca.\n\nO Desafio\n\nManter a qualidade analítica enquanto ampliávamos a frequência e a viralidade do conteúdo. Precisávamos transformar análises complexas em formatos envolventes tanto para YouTube quanto para Shorts/Reels, garantindo performance nos algoritmos e retenção da audiência.\n\nNossa Abordagem\n\n**Edição de Vídeos Longos (YouTube):** Refinamos a narrativa visual dos vídeos semanais, com ritmo dinâmico, gráficos e elementos que simplificam conceitos avançados de mercado e DeFi.\n**Pílulas Virais (Shorts/Reels):** Criamos um formato proprietário de cortes com legendas dinâmicas, ganchos fortes e otimização de retenção, garantindo publicação diária e alcance orgânico constante.\n\nLançamentos e Estrutura Comercial\n\n• Desenvolvimento completo de criativos, roteiros e vídeos para tráfego pago.\n• Construção da jornada comercial (funil, narrativa, páginas de captura e follow-up).\n• Implementação de automações oficiais via API do WhatsApp para nutrição e grupos de comunidade.\n\nResultados do Lançamento\n\nA operação integrada de conteúdo, criativos e tecnologia permitiu executar lançamentos em escala, mantendo consistência de mensagem e conversão elevada durante todo o funil.\n\nConclusão\n\nO case reforça a nossa capacidade de transformar conteúdos de nicho em máquinas de crescimento. A estratégia 360º garantiu performance, escalabilidade e fortalecimento da comunidade Investidor 4.20 em todos os canais digitais.",
    detalhes_en: "Context\n\nInvestidor 4.20, led by Lucas Amendola, was already a top crypto education reference in Brazil. The community wanted to scale long-form and short-form production without losing the deep analysis that defines the brand.\n\nThe Challenge\n\nKeep analytical quality while increasing content frequency and virality. We needed to turn complex market insights into engaging formats for both YouTube and Shorts/Reels, securing algorithm performance and audience retention.\n\nOur Approach\n\n**Long-form Editing (YouTube):** We refined weekly videos with dynamic pacing, graphics and elements that simplify advanced market and DeFi concepts.\n**Viral Capsules (Shorts/Reels):** We created a proprietary cut format with dynamic captions, strong hooks and retention optimization, ensuring daily publishing and steady organic reach.\n\nLaunches and Commercial Structure\n\n• Full development of ad creatives, scripts and videos for paid traffic.\n• Funnel architecture: storytelling, capture pages and follow-up flows.\n• Official WhatsApp API automations for nurturing groups and community management.\n\nLaunch Outcomes\n\nThe integrated operation across content, creatives and technology enabled scalable launches with consistent messaging and high conversion throughout the funnel.\n\nConclusion\n\nThis case highlights our ability to turn niche expertise into growth machines. The 360º strategy delivered performance, scalability and a stronger Investidor 4.20 community across every channel.",
    depoimentos: "Nenhum específico, mas posts destacam crescimento.",
    links: ["https://twitter.com/investidor420", "https://www.instagram.com/lucas.amendolaa/", "https://news.defiverso.com", "https://defiverso.com/pagina-de-captura/"],
    metricas: "5x aumento no faturamento\n\nTransformamos o Investidor 4.20 em uma das principais referências do setor cripto brasileiro, com crescimento exponencial em todos os canais e resultados comerciais excepcionais.\n\n• 5x aumento no faturamento desde nossa entrada\n• Instagram: 50k → 180k seguidores (+260%)\n• YouTube: 200k → 382k inscritos (+91%)\n• Newsletter: 30k inscritos com 35% de abertura\n• 200+ criativos estáticos e 100+ vídeos para anúncios\n• Estrutura comercial completa desenvolvida do zero\n\nA estratégia integrada de conteúdo, automações e lançamentos resultou em um crescimento extraordinário, estabelecendo o Investidor 4.20 como uma das principais referências no setor cripto brasileiro.",
    metricas_en: "5x revenue increase\n\nWe transformed Investidor 4.20 into one of the main references in the Brazilian crypto sector, with exponential growth across all channels and exceptional commercial results.\n\n• 5x revenue increase since our arrival\n• Instagram: 50k → 180k followers (+260%)\n• YouTube: 200k → 382k subscribers (+91%)\n• Newsletter: 30k subscribers with 35% open rate\n• 200+ static creatives and 100+ ad videos\n• Complete commercial structure built from scratch\n\nThe integrated strategy of content, automations and launches resulted in extraordinary growth, establishing Investidor 4.20 as one of the main references in the Brazilian crypto sector.",
    servicos: ["Edição de vídeos", "Desenvolvimento comercial", "Newsletter", "Copywriter", "Automações IA", "Estratégias de lançamento", "Criativos para anúncios", "Páginas de captura", "Design"],
    servicos_en: ["Video editing", "Commercial development", "Newsletter", "Copywriting", "AI automations", "Launch strategies", "Ad creatives", "Capture pages", "Design"],
    media: [
      { 
        src: "/Cases/investidor-4-20/conteudo/Reels-1-Lucas-1.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/12.png"
      },
      { 
        src: "/Cases/investidor-4-20/conteudo/Reels-2-Lucas-1.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/13.png"
      },
      { 
        src: "/Cases/investidor-4-20/conteudo/Reels-3-Lucas.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/14.png"
      },
      { 
        src: "/Cases/investidor-4-20/conteudo/Reels-4-Lucas.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/15.png"
      },
      { 
        src: "/Cases/investidor-4-20/conteudo/Palestrantes-Defifest-2025-Video-1.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/16.png"
      },
      { 
        src: "/Cases/investidor-4-20/conteudo/Reels-6-Lucas.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/17.png"
      },
      { 
        src: "/Cases/investidor-4-20/conteudo/Reels-7-Lucas.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/18.png"
      },
      { 
        src: "/Cases/lucas-amendola/estudo/canal-youtube.png", 
        type: "image",
        alt: "Visão do canal Investidor 4.20 no YouTube"
      },
      { 
        src: "/Cases/lucas-amendola/estudo/pagina-captura.png", 
        type: "image",
        alt: "Página de captura desenvolvida para o lançamento Investidor 4.20"
      },
      { src: "/Cases/investidor-4-20/conteudo/Criativoanuncio1.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/Criativoanuncio2.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/Criativoanuncio3.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/pagina%20de%20captura/páginacaptura1.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/pagina%20de%20captura/páginacaptura2.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/pagina%20de%20captura/páginacaptura4.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/pagina%20de%20captura/páginacaptura5.png", type: "image" },
      { src: "/Cases/investidor-4-20/conteudo/pagina%20de%20captura/páginacaptura13.png", type: "image" },
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
        src: "/Cases/paradigma/conteudo/20250620_PARADIGMA_01M06S_V3.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/19.png"
      },
      { 
        src: "/Cases/paradigma/conteudo/20250702_PARADIGMA_01M13S.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/20.png"
      },
      { 
        src: "/Cases/paradigma/conteudo/PARADIGMAv2.mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/21.png"
      },
      { 
        src: "/Cases/paradigma/conteudo/20250717_PARADIGMA_01M20S_V2(1).mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/22.png"
      },
      { 
        src: "/Cases/paradigma/conteudo/20250722_PARADIGMA_01M55S_V2(1).mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/23.png"
      },
      { 
        src: "/Cases/paradigma/conteudo/PARADIGMA%20v2(1).mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/24.png"
      },
      { 
        src: "/Cases/paradigma/conteudo/20250801_PARADIGMA_00M40S_V1(1).mp4", 
        type: "video", 
        poster: "/Kaleidos/elementos/25.png"
      },
    ]
  },
  "defiverso": {
    id: "defiverso",
    nome: "Defiverso",
    tags: ["Cripto", "Educação", "Social Media", "Marketing de Conteúdo", "Geração de Leads", "Automação"],
    descricao: "Acelerando o Universo Cripto com Conteúdo Estratégico e Máquina de Leads. Desde junho de 2025, gestão completa da estratégia de marketing de conteúdo e aquisição de leads do Defiverso.",
    descricao_en: "Accelerating the Crypto Universe with Strategic Content and Lead Generation Machine. Since June 2025, complete management of Defiverso's content marketing strategy and lead acquisition.",
    fraseImpactante: "29.000+ inscrições no Minicurso, 26.554 assinantes na Newsletter e 12 Milhões de visualizações orgânicas em 90 dias.",
    fraseImpactante_en: "29,000+ course enrollments, 26,554 newsletter subscribers and 12 Million organic views in 90 days.",
    detalhes: "Desde junho de 2025, a Kaleidos assumiu a gestão completa da estratégia de marketing de conteúdo e aquisição de leads do Defiverso. O objetivo central foi estabelecer a marca como a **maior plataforma educacional cripto do Brasil**, transformando informações complexas de mercado em conteúdo acessível, de alto valor e que gerasse resultados concretos.\n\nNossa atuação se concentrou em três frentes principais:\n\n**1. Social Media (Instagram & Twitter):** Criação de conteúdo educativo de ponta, desenvolvimento de identidade visual e gestão completa do Instagram, com foco em crescimento orgânico. Implementação de um fluxo de automação via IA para o Twitter, garantindo presença constante e direcionamento de tráfego.\n\n**2. Email Marketing & Geração de Leads:** Criação da newsletter do zero e desenvolvimento de um **Minicurso de 7 Dias** como *lead magnet* de alta conversão.\n\n**3. Suporte a Lançamentos:** Colaboração na criação de **criativos estáticos e carrosséis** para campanhas de tráfego pago, otimizando a performance das mídias.",
    detalhes_en: "Since June 2025, Kaleidos has taken complete management of Defiverso's content marketing strategy and lead acquisition. The central goal was to establish the brand as Brazil's largest crypto education platform, transforming complex market information into accessible, high-value content that generates concrete results.\n\nOur work focused on three main fronts:\n\n**1. Social Media (Instagram & Twitter):** Creation of cutting-edge educational content, visual identity development and complete Instagram management, focusing on organic growth. Implementation of an AI-powered automation flow for Twitter, ensuring constant presence and traffic direction.\n\n**2. Email Marketing & Lead Generation:** Newsletter creation from scratch and development of a **7-Day Mini Course** as a high-converting lead magnet.\n\n**3. Launch Support:** Collaboration in creating **static creatives and carousels** for paid traffic campaigns, optimizing media performance.",
    depoimentos: "A parceria Kaleidos e Defiverso resultou na criação de um ecossistema de marketing digital completo e de alta performance.",
    links: ["https://defiverso.com", "https://news.defiverso.com", "https://www.instagram.com/defiverso/"],
    metricas: "**Máquina de Aquisição de Leads - Email Marketing:**\n\n• **Mais de 29.000 inscrições** no Minicurso \"7 Dias DeFi\"\n• **26.554 assinantes ativos** da Newsletter\n• **Taxa de Abertura Média de 33.01%** (muito acima da média do mercado de 15-25%)\n• **Taxa de Abertura do Minicurso no pico: 54.76%**\n• **Taxa de Cliques (CTR) do Minicurso no pico: 24.55%**\n\n**Construção de Audiência - Instagram (90 dias):**\n\n• **12 Milhões de Visualizações** de Alcance Orgânico\n• **Crescimento de 28,4%** no Alcance Orgânico\n• **302.9 Mil contas** de Alcance Total\n• **136.9 Mil interações** com conteúdo (curtidas, comentários, salvos e compartilhamentos)\n• **14.4 Mil cliques no link** (tráfego qualificado)\n• **8.6 Mil novos seguidores** em apenas 3 meses\n\n**Otimização de Processos:**\n\n• Automação no Twitter via IA para presença constante\n• Criação de criativos estáticos e carrosséis para tráfego pago\n\nEstes resultados concretos demonstram a capacidade da Kaleidos de entregar não apenas conteúdo de qualidade, mas também **crescimento sustentável e conversão em escala** para o Defiverso.",
    metricas_en: "**Lead Generation Machine - Email Marketing:**\n\n• **Over 29,000 enrollments** in the \"7 Days DeFi\" Mini Course\n• **26,554 active subscribers** to the Newsletter\n• **Average Open Rate of 33.01%** (well above market average of 15-25%)\n• **Mini Course Peak Open Rate: 54.76%**\n• **Mini Course Peak Click-Through Rate (CTR): 24.55%**\n\n**Audience Building - Instagram (90 days):**\n\n• **12 Million Organic Reach** views\n• **28.4% growth** in Organic Reach\n• **302.9 Thousand accounts** of Total Reach\n• **136.9 Thousand interactions** with content (likes, comments, saves and shares)\n• **14.4 Thousand link clicks** (qualified traffic)\n• **8.6 Thousand new followers** in just 3 months\n\n**Process Optimization:**\n\n• Twitter automation via AI for constant presence\n• Creation of static creatives and carousels for paid traffic\n\nThese concrete results demonstrate Kaleidos' ability to deliver not only quality content, but also **sustainable growth and scale conversion** for Defiverso.",
    servicos: ["Design posts", "Instagram Defiverso", "Newsletter Defiverso", "Curso 7 dias DeFi", "Twitter", "Resultados gerais"],
    servicos_en: ["Design posts", "Instagram Defiverso", "Newsletter Defiverso", "7 Days DeFi Course", "Twitter", "General results"],
    media: [
      { src: "/Cases/defiverso/conteudo/Breaking news defiverso.png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Breaking news defiverso (1).png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Breaking news defiverso (2).png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Breaking news defiverso (3).png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Breaking news defiverso (4).png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Breaking news defiverso (5).png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Posts defiverso.png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Posts defiverso (1).png", type: "image" },
      { src: "/Cases/defiverso/conteudo/Posts defiverso (2).png", type: "image" },
    ]
  },
  "ledger": {
    id: "ledger",
    nome: "Ledger",
    tags: ["Cripto", "Hardware", "Segurança"],
    descricao: "Parceria com Ledger para desenvolvimento de conteúdo e estratégias de marketing.",
    descricao_en: "Partnership with Ledger for content development and marketing strategies.",
    fraseImpactante: "Em breve.",
    fraseImpactante_en: "Coming soon.",
    detalhes: "Em breve, mais informações sobre este case.",
    detalhes_en: "Coming soon, more information about this case.",
    depoimentos: "",
    links: ["https://www.ledger.com"],
    metricas: "Em breve.",
    metricas_en: "Coming soon.",
    servicos: ["Em breve"],
    servicos_en: ["Coming soon"],
    media: []
  },
  "parfin": {
    id: "parfin",
    nome: "Parfin",
    tags: ["Cripto", "Infraestrutura", "Web3"],
    descricao: "Parceria com Parfin para desenvolvimento de conteúdo e estratégias de marketing.",
    descricao_en: "Partnership with Parfin for content development and marketing strategies.",
    fraseImpactante: "Em breve.",
    fraseImpactante_en: "Coming soon.",
    detalhes: "Em breve, mais informações sobre este case.",
    detalhes_en: "Coming soon, more information about this case.",
    depoimentos: "",
    links: ["https://parfin.io"],
    metricas: "Em breve.",
    metricas_en: "Coming soon.",
    servicos: ["Em breve"],
    servicos_en: ["Coming soon"],
    media: []
  },
  "kast": {
    id: "kast",
    nome: "Kast",
    tags: ["Cripto", "DeFi", "Web3"],
    descricao: "Parceria com Kast para desenvolvimento de conteúdo e estratégias de marketing.",
    descricao_en: "Partnership with Kast for content development and marketing strategies.",
    fraseImpactante: "Em breve.",
    fraseImpactante_en: "Coming soon.",
    detalhes: "Em breve, mais informações sobre este case.",
    detalhes_en: "Coming soon, more information about this case.",
    depoimentos: "",
    links: ["https://www.kast.xyz/"],
    metricas: "Em breve.",
    metricas_en: "Coming soon.",
    servicos: ["Em breve"],
    servicos_en: ["Coming soon"],
    media: []
  },
  "neobankless": {
    id: "neobankless",
    nome: "Neobankless",
    tags: ["Cripto", "Fintech", "Banking"],
    descricao: "Parceria com Neobankless para desenvolvimento de conteúdo e estratégias de marketing.",
    descricao_en: "Partnership with Neobankless for content development and marketing strategies.",
    fraseImpactante: "Em breve.",
    fraseImpactante_en: "Coming soon.",
    detalhes: "Em breve, mais informações sobre este case.",
    detalhes_en: "Coming soon, more information about this case.",
    depoimentos: "",
    links: ["https://neobankless.com"],
    metricas: "Em breve.",
    metricas_en: "Coming soon.",
    servicos: ["Em breve"],
    servicos_en: ["Coming soon"],
    media: []
  },
  "castacrypto": {
    id: "castacrypto",
    nome: "Casta Crypto",
    tags: ["Cripto", "Educação", "Social Media"],
    descricao: "Parceria com Casta Crypto para desenvolvimento de conteúdo e estratégias de marketing.",
    descricao_en: "Partnership with Casta Crypto for content development and marketing strategies.",
    fraseImpactante: "Em breve.",
    fraseImpactante_en: "Coming soon.",
    detalhes: "Em breve, mais informações sobre este case.",
    detalhes_en: "Coming soon, more information about this case.",
    depoimentos: "",
    links: ["https://instagram.com/castacrypto"],
    metricas: "Em breve.",
    metricas_en: "Coming soon.",
    servicos: ["Em breve"],
    servicos_en: ["Coming soon"],
    media: []
  },
  "vault": {
    id: "vault",
    nome: "Vault",
    tags: ["Cripto", "Investimentos", "Gestão"],
    descricao: "Parceria com Vault para desenvolvimento de conteúdo e estratégias de marketing.",
    descricao_en: "Partnership with Vault for content development and marketing strategies.",
    fraseImpactante: "Em breve.",
    fraseImpactante_en: "Coming soon.",
    detalhes: "Em breve, mais informações sobre este case.",
    detalhes_en: "Coming soon, more information about this case.",
    depoimentos: "",
    links: ["https://vaultcapital.com.br/pt"],
    metricas: "Em breve.",
    metricas_en: "Coming soon.",
    servicos: ["Em breve"],
    servicos_en: ["Coming soon"],
    media: []
  }
};
export function getCaseData(id: string): CaseData | null {
  return casesData[id] || null;
}
export function getAllCases(): CaseData[] {
  return Object.values(casesData);
} 