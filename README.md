# 💍 Amandha & Matheus | Site de Casamento Minimalista Editorial

Um site de casamento sob medida, projetado com uma estética **editorial de luxo**, minimalista e extremamente elegante. Desenvolvido com foco na experiência do usuário, 100% responsivo para dispositivos móveis, e hospedado de forma automatizada via GitHub Pages.

---

## 🎨 Conceito e Design

O design foi inspirado em layouts editoriais de revistas de moda conceituadas, utilizando:
*   **Tipografia Refinada:** Combinação harmoniosa da fonte serifada *Playfair Display* (para títulos clássicos) e *Montserrat* sem-serifa (para leituras leves e modernas).
*   **Esquema de Cores Harmonioso:** Fundo quase branco puro (`#FCFCFC`), cinza neutro leve (`#EBEBEB`), tons de leitura suaves e um preto rico contrastante (`#1A1A1A`).
*   **Aparência Premium:** Aplicação de efeito de vidro desfocado (*backdrop-filter / Glassmorphism*) no cabeçalho e menu de navegação, transições fluidas e micro-animações.
*   **Grid Masonry:** Uma galeria de fotos retrato vertical simétrica adaptada perfeitamente tanto para desktops quanto para smartphones.

---

## 🚀 Funcionalidades

1.  **Contagem Regressiva Editorial:** Cronômetro dinâmico atualizado em tempo real marcando os dias, horas, minutos e segundos até o grande dia (22 de agosto de 2026).
2.  **Nossa História:** Um espaço dedicado à jornada do casal com uma tipografia clean e legível.
3.  **Save the Date (Vídeo):** Incorporação de vídeo cinematográfico com bloco integrado de endereço e link de rota automática via Google Maps.
4.  **Lista de Presentes:** Bloco elegante e padronizado direcionando os convidados para a lista de presentes oficial.
5.  **Confirmação de Presença (RSVP):** Card minimalista responsivo para garantir a confirmação dos convidados de forma simples.
6.  **Galeria de Fotos Responsiva:** Uma seção exclusiva com as fotos reais do casal organizadas em um grid fluído de alta definição.
7.  **Menu Sanduíche Mobile:** Menu dinâmico de três barras elegante que se sobrepõe em tela cheia com efeito de vidro luxuoso e se fecha automaticamente ao clicar em qualquer item.

---

## 🛠️ Tecnologias Utilizadas

*   [Vite](https://vitejs.dev/) - Ferramenta de build ultra-rápida.
*   **HTML5** & **Vanilla CSS** - Estrutura limpa e estilização sem dependências externas pesadas (sem frameworks de terceiros).
*   **JavaScript (ES6+)** - Interatividade dinâmica, menu sanduíche e lógica da contagem regressiva.
*   [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - Biblioteca de animações profissionais para efeitos de revelação suave de textos e imagens.
*   **GitHub Actions** - Fluxo automatizado de Integração e Deploy Contínuo (CI/CD) publicando diretamente no GitHub Pages.

---

## 💻 Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos para Execução:

1.  **Instalar Dependências:**
    No diretório do projeto, execute o comando abaixo para instalar as bibliotecas necessárias:
    ```bash
    npm install
    ```

2.  **Iniciar Servidor de Desenvolvimento:**
    Para rodar o projeto localmente com recarregamento rápido em tempo real (HMR):
    ```bash
    npm run dev
    ```
    Abra o navegador no endereço indicado no terminal (geralmente `http://localhost:5173`).

3.  **Compilar para Produção (Build):**
    Para gerar os arquivos otimizados e minificados para distribuição:
    ```bash
    npm run build
    ```
    Isso gerará os arquivos prontos na pasta `dist/`.

---

## 🌐 Deploy e Publicação Automatizada

O site está configurado com uma esteira de deploy automático no **GitHub Pages** utilizando o GitHub Actions. 

### Como funciona:
*   Toda vez que uma alteração é enviada para a branch principal (`main`), o fluxo configurado em `.github/workflows/deploy.yml` é disparado automaticamente.
*   O servidor do GitHub instala as dependências, roda o comando de compilação de produção (`npm run build`) e faz a publicação do conteúdo gerado na pasta `dist/` diretamente no ar.
*   O site oficial pode ser acessado em:
    👉 [https://matheusandradaf.github.io/casamento_andradas/](https://matheusandradaf.github.io/casamento_andradas/)

---

## 📂 Estrutura de Pastas Principal

```
casamento-final/
├── .github/workflows/    # Configuração de deploy do GitHub Actions
├── dist/                 # Arquivos finais otimizados de produção (gerados após o build)
├── fotos/                # Acervo de fotos reais do casal
├── public/               # Recursos públicos estáticos (ex: favicon)
├── index.html            # Página inicial e principal do site
├── gallery.html          # Página da galeria de fotos pré-wedding
├── main.js               # Script principal (Contagem regressiva e interações)
├── style.css             # Estilização completa e responsividade (mobile-friendly)
├── vite.config.js        # Configuração do compilador Vite (Multi-page entry)
└── package.json          # Metadados e dependências do projeto
```

---

Desenvolvido com carinho para celebrar a união de **Amandha & Matheus**! ✨
