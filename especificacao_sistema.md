# Especificação do Sistema - Site Casamento Editorial (Tema Kerry / Avela White)

Este documento serve como o guia definitivo (Manual da Marca) para o código do site de casamento na sua nova versão "Editorial". O design prioriza o minimalismo, o espaço em branco, fotografias elegantes e alto contraste.

## 1. Design Tokens

### 1.1 Cores (Color Palette - Minimalista & Contraste)
As cores foram extraídas para gerar um aspecto de "revista de alta moda". Nada de tons pastéis ou cores de destaque vivas.

*   **Fundo Principal (Páginas):** `#FCFCFC` (Quase branco, para leitura confortável).
*   **Fundo Secundário (Imagens/Sutis):** `#EBEBEB` (Cinza muito claro).
*   **Fundo Escuro (Vídeo/Inversão):** `#1A1A1A` (Preto rico e elegante).
*   **Texto Principal:** `#111111` (Preto sólido para leitura máxima).
*   **Texto Secundário / Apoio:** `#666666` (Cinza médio para não brigar com o texto principal).

### 1.2 Tipografia (Typography)
A essência do estilo "Vogue" se dá na mistura destas duas famílias:

*   **Fonte Serifada (Títulos e Nomes):** `Playfair Display` (Google Fonts) - Clássica, elegante, com alto contraste entre os traços grossos e finos.
*   **Fonte Sem-Serifa (Menu, Datas, Botões):** `Montserrat` (Google Fonts) - Usada sempre em letras MAIÚSCULAS (`text-transform: uppercase`) e com muito espaçamento entre as letras (`letter-spacing: 0.2em`).

## 2. Estrutura do Projeto (Arquitetura Vanilla)

Para garantir que não haja dependência de plataformas fechadas (vendor lock-in), o projeto é construído apenas com:
*   **HTML5 Semântico:** Layout extremamente limpo e espaçado (`padding` generoso).
*   **CSS3 com Variáveis:** Arquivo centralizado no `:root` para cores e fontes.
*   **Vite:** O servidor local e empacotador oficial.

## 3. Padrões de Componentes

### 3.1 Placeholders de Imagem (Estilo Editorial)
O Hero conta com um layout de 3 imagens assimétricas.
**Regra de Substituição:**
Troque a `div` com classe `placeholder-wrapper` por uma `img` real. Exemplo:
```html
<img src="foto1.jpg" alt="Amandha e Matheus" class="hero-img-side">
```

### 3.2 Vídeo do YouTube (Save The Date)
A seção de vídeo tem um fundo totalmente escuro (`#1A1A1A`) para dar destaque à mídia.
**Regra de Substituição:** Basta alterar o atributo `src="URL_DO_YOUTUBE"` na tag iframe dentro da seção `#video`.

## 4. Como rodar o projeto
- **Instalação:** `npm install`
- **Desenvolvimento Local:** `npm run dev`
- **Geração para Produção:** `npm run build`
