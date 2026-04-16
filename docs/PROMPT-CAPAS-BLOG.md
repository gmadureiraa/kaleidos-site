# Prompt Padrao — Capas de Blog Post Kaleidos

> Documento de referencia para gerar capas de blog post consistentes com a identidade visual da Kaleidos.

---

## Modelo Recomendado

- **Gemini**: `nano-banana-pro-preview` (melhor qualidade artistica)
- **Fallback**: `imagen-4.0-generate-001` (mais realista)
- **Aspect ratio**: 16:9 (1920x1080 ou equivalente)
- **Formato de saida**: PNG/JPEG (a API retorna JPEG por padrao)

---

## Prompt Base

Copie este bloco e substitua apenas o `[TEMA]` no final:

```
Create a wide 16:9 abstract digital artwork for a tech blog cover image.

VISUAL RULES:
- Background: deep dark gradient from #050507 to #0a0a12 (near-black)
- Primary accent: neon green #7CFF6B (must be present and prominent)
- Secondary accent (optional): deep violet #7C3AED or warm orange #F6911B
- Absolutely NO text, letters, words, numbers, or readable characters
- NO human faces, NO logos, NO brand marks
- Abstract and geometric, never literal illustrations
- Clean composition with generous negative space on at least one side
- Subtle grain/noise texture for depth
- Premium editorial feel — reference: Resend, Vercel, Linear blog covers
- Soft glows and light emissions from accent-colored elements
- Depth through layering: foreground elements sharp, background elements blurred

THEME: [DESCREVA O TEMA AQUI EM INGLES]
```

---

## Regras Visuais

### Paleta obrigatoria
| Elemento | Cor | Quando usar |
|----------|-----|-------------|
| Background | `#050507` a `#0a0a12` | Sempre |
| Accent principal | `#7CFF6B` | Sempre — glows, linhas, nodes |
| Accent secundario | `#7C3AED` | Posts de IA, automacao, tech |
| Accent de cliente | Varia (ex: `#F6911B` DSEC) | Somente em case studies |

### Checklist visual
- [x] Fundo escuro (nunca branco, cinza claro ou pastel)
- [x] Verde neon `#7CFF6B` como accent dominante
- [x] Zero texto/letras/numeros na imagem
- [x] Espaco negativo generoso (nao preencher a imagem toda)
- [x] Sensacao editorial premium
- [x] Formas abstratas/geometricas
- [x] Pelo menos 2 niveis de profundidade (foreground + background)
- [x] Aspecto 16:9

### Proibido
- Texto, letras, palavras, numeros, simbolos legíveis
- Rostos humanos ou corpos
- Logos ou marcas
- Gradientes genericos (azul-rosa, sunset cliché)
- Fundo branco, cinza claro, ou cores pastéis
- Excesso de elementos (manter breath room)
- Clip art, ilustracoes flat/cartoon
- Bordas ou molduras

---

## Exemplos de Tema por Categoria

### IA & Automacao
```
THEME: AI-powered content creation workflow. Neural pathway visualization — glowing green nodes connected by thin luminous fiber-optic lines forming a branching network. Floating translucent hexagonal panels showing abstract data patterns. Deep space background with subtle violet (#7C3AED) nebula glow in one corner. Futuristic data-flow aesthetic.
```

### Growth & Estrategia
```
THEME: Exponential business growth through automation. Abstract mechanical gears on the left dissolving and transforming into flowing organic energy streams on the right. Green (#7CFF6B) energy pulses running through circuit-board traces that morph into natural curves. Represents transformation from manual to automated. Cyberpunk minimalism.
```

### Cases (com cor do cliente)
```
THEME: Blockchain security brand growth — case study visualization. Ascending particle trail forming an abstract upward trajectory. A geometric shield shape in warm orange (#F6911B) as focal point with green (#7CFF6B) data streams flowing through it. Encrypted binary fragments dissolving into the dark cosmos background. Growth and protection combined.
```

### Marketing & Sistemas
```
THEME: Content system architecture blueprint. Central radial hub emitting organized connection branches like a constellation map. Each branch terminates in translucent panel nodes showing abstract workflow symbols. Green (#7CFF6B) accent at every connection point. Technical schematic meets abstract art — clean, structured, systematic.
```

### Cripto & Web3
```
THEME: Decentralized blockchain technology. Interconnected chain-link structures floating in dark space, each link glowing with green (#7CFF6B) energy. Crystalline geometric polyhedra suggesting transparency and immutability. Sparse composition with elements concentrated in the center-right, leaving dark negative space on the left.
```

---

## Codigo Python para Geracao

```python
import requests
import base64
import os

API_KEY = os.environ.get("GEMINI_API_KEY", "YOUR_KEY")
MODEL = "nano-banana-pro-preview"

BASE_PROMPT = """Create a wide 16:9 abstract digital artwork for a tech blog cover image.

VISUAL RULES:
- Background: deep dark gradient from #050507 to #0a0a12 (near-black)
- Primary accent: neon green #7CFF6B (must be present and prominent)
- Secondary accent (optional): deep violet #7C3AED or warm orange #F6911B
- Absolutely NO text, letters, words, numbers, or readable characters
- NO human faces, NO logos, NO brand marks
- Abstract and geometric, never literal illustrations
- Clean composition with generous negative space on at least one side
- Subtle grain/noise texture for depth
- Premium editorial feel — reference: Resend, Vercel, Linear blog covers
- Soft glows and light emissions from accent-colored elements
- Depth through layering: foreground elements sharp, background elements blurred

THEME: """


def generate_cover(theme: str, output_path: str) -> bool:
    """Gera uma capa de blog post no estilo Kaleidos."""
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={API_KEY}"
    
    payload = {
        "contents": [{"parts": [{"text": BASE_PROMPT + theme}]}],
        "generationConfig": {"responseModalities": ["TEXT", "IMAGE"]}
    }
    
    resp = requests.post(url, json=payload, timeout=120)
    if resp.status_code != 200:
        print(f"Erro {resp.status_code}: {resp.text[:200]}")
        return False
    
    data = resp.json()
    for candidate in data.get("candidates", []):
        for part in candidate.get("content", {}).get("parts", []):
            if "inlineData" in part:
                img = base64.b64decode(part["inlineData"]["data"])
                with open(output_path, "wb") as f:
                    f.write(img)
                print(f"Salvo: {output_path} ({len(img)/1024:.0f}KB)")
                return True
    
    print("Nenhuma imagem na resposta")
    return False


# Exemplo de uso:
# generate_cover(
#     "AI neural network visualization with green glowing nodes...",
#     "public/blog/cover-meu-post.png"
# )
```

---

## Fluxo de Trabalho

1. Escreva o blog post
2. Identifique a categoria e o tema visual
3. Copie o prompt base + exemplo de tema da categoria
4. Ajuste o tema para o conteudo especifico do post
5. Gere a imagem com o script Python
6. Verifique visualmente (fundo escuro? verde presente? sem texto?)
7. Salve em `public/blog/cover-[slug].png`
8. Adicione o path em `src/lib/blog-data.ts`

---

## Naming Convention

```
public/blog/cover-[slug-do-post].png
```

Exemplo: post com slug `como-usar-ia-no-marketing` → `public/blog/cover-como-usar-ia-no-marketing.png`

---

*Criado: 2026-04-11 | Atualizado: 2026-04-11*
