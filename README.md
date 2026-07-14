# Griô AI: Horizontes da Diáspora

**Narrative Tech-Thriller Histórico e RPG decolonial de investigação cooperativa** sobre a rota de [Mohammed Gardo Baquaqua](https://pt.wikipedia.org/wiki/Mahommah_Gardo_Baquaqua) — um dos poucos africanos escravizados no Brasil imperial que deixou autobiografia escrita.

O jogador investiga fases históricas reais, conversa com NPCs da época e usa documentos de arquivo como evidência. O **Griô AI** — motor narrativo com Google Gemini — guia a experiência com tom afrofuturista e decolonial.

---

## Sobre o jogo

Você é um investigador cooperativo que **hackeia o passado** para reconstruir memórias da diáspora africana. Cada fase coloca você em um ponto da trajetória de Baquaqua, de Ouidah ao retorno ancestral, com mapa interativo, chat com IA e dossiê de hipóteses.

### Papéis (avatares)

| Avatar | Especialidade |
|--------|---------------|
| **Linguista Quilombola** | Decodificação textual, dialetos e grafias antigas |
| **Arquivista Indígena** | Registros criminais, manifestos e bancos Slave Voyages |
| **Estrategista Mestiço** | Rotas geográficas, fuga e redes abolicionistas |

### Fases da investigação

1. **Captura em Ouidah** (1845) — Benin
2. **Cativeiro no Recife e Rio** (1845–1847) — Brasil
3. **A Barca Lembrança** (1847) — Atlântico, Rio → Nova York
4. **Acolhida no Haiti** (1847–1849) — Port-au-Prince
5. **O College em McGrawville** (1850–1854) — Nova York e Canadá
6. **Liverpool e o Ativismo** (1855) — Inglaterra
7. **Retorno Ancestral** (1857+) — Djougou, Benin

### Idiomas

Interface e narrativa disponíveis em **português**, **inglês** e **francês**.

---

## Stack técnica

- **Frontend:** React 19, Vite, Tailwind CSS, Motion
- **Backend:** Express + Google Gemini (`@google/genai`)
- **Origem:** [Google AI Studio](https://ai.studio/apps/15b7ee79-399a-4c30-ad68-711b2f4cbe04)

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- Chave de API do [Google Gemini](https://aistudio.google.com/apikey)

---

## Instalação e execução

```bash
# 1. Clonar o repositório
git clone https://github.com/marcosferreiradeoliveira/grionew.git
cd grionew

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Edite .env e defina GEMINI_API_KEY com sua chave

# 4. Rodar em desenvolvimento
npm run dev
```

Acesse **http://localhost:3000**.

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (Vite + Express) |
| `npm run build` | Build de produção (frontend + servidor) |
| `npm run start` | Executa o build de produção |
| `npm run lint` | Verificação de tipos TypeScript |
| `npm run clean` | Remove artefatos de build |

---

## Variáveis de ambiente

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | Sim | Chave da API Google Gemini |
| `APP_URL` | Não | URL de hospedagem (usado em deploy no AI Studio) |

Sem `GEMINI_API_KEY`, o Griô AI fica offline e o chat retorna erro.

---

## Estrutura do projeto

```
├── server.ts              # API Express + integração Gemini
├── src/
│   ├── App.tsx            # Interface principal do jogo
│   ├── data.ts            # Fases, documentos e avatares
│   ├── translations.ts    # Traduções (pt, en, fr)
│   └── components/        # Componentes React
├── index.html
└── vite.config.ts
```

---

## Licença

Código sob licença Apache-2.0. Ver cabeçalhos nos arquivos-fonte.
