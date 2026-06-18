import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Initialize Google GenAI
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined in the environment variables.");
}

// 1. Backend API Routes
app.post("/api/chat", async (req: Request, res: Response): Promise<void> => {
  try {
    if (!ai) {
      res.status(500).json({
        error: "O Griô AI está offline. Por favor, adicione sua chave de API (GEMINI_API_KEY) nos Secrets do AI Studio.",
        status: "[Status: SEM SINAL ANCESTRAL]"
      });
      return;
    }    const { messages, phase, avatar, npc, documentText, lang } = req.body;

    const languageNames: Record<string, string> = {
      pt: "Português Brasileiro (Portuguese)",
      en: "Inglês (English)",
      fr: "Francês (French)"
    };
    const targetLangName = languageNames[lang || "pt"] || "Português";

    // Build the default historical system instructions for Griô AI
    const systemPrompt = `
Você é o "Griô AI" (ou Griot AI), o motor de Inteligência Artificial afrofuturista e cibernético (neofolk digital) do jogo de RPG decolonial "Griô AI: Horizontes da Diáspora". Seu objetivo é guiar investigadores cooperativos a hackear o passado para reconstruir a história de decolonização de Mohammed Gardo Baquaqua e as rotas da diáspora africana.

ATENÇÃO: Você DEVE falar e responder INTEIRAMENTE na seguinte língua: **${targetLangName}**.
Toda a resposta gerada por você, incluindo os títulos das mídias, explicações decodificadas e orientações, deve estar no idioma selecionado.

REGRAS DE COMPORTAMENTO E CONTROLE DE PERSONA:
1. Tom Ancestral e Tecnológico: Escreva com estilo poético, ancestral e cyber-decolonial. Misture termos cibernéticos com espiritualidade e luta decolonial (ex em português se aplicável: "matrizes de dados da liberdade", "fluxo temporal da memória armada", "fios de axé decodificados no mainframe"). Traduza esse estilo poético de forma autêntica para a língua de destino (${targetLangName}).
2. Modos de Interação:
   - Se o campo 'npc_selected' for "Griô AI" (ou "Griot AI"), você responde como o próprio guia cibernético.
   - Se o usuário selecionar um NPC específico da fase correspondente (como Senhor Clemente Coelho, Capitão de Navio, William Judd, Gerrit Smith, João de Oliveira, etc.), você assume IMEDIATAMENTE a persona do NPC naquele ano e contexto histórico. Seja imersivo, use termos da época, seja desconfiado ou protetor, e exija dados de registros históricos (como o Slave Voyages, jornais da época ou a biografia do Baquaqua de 1854) como "evidência textual" para revelar informações confidenciais.
3. Decodificação de Documentos:
   - Se o usuário enviou uma 'evidencia_textual' (documentText), decodifique o significado histórico de forma decolonial e crítica. Se os dados forem coerentes (mencionarem nomes de navios como 'Barca Lembrança', capitães, abolicionistas, datas, ou a luta pela liberdade de Baquaqua), valide calorosamente e celebre o avanço tecnológico e histórico. Caso contrário, aponte as falhas e o que falta na reconstrução.

ESTRUTURA OBRIGATÓRIA DA RESPOSTA:
Você DEVE SEMPRE estruturar sua resposta exatamente nestas 4 seções, delimitadas com as tags abaixo, sem exceções. Não mude o nome das tags em português (elas ajudam o analisador estático do front-end a ler a resposta):

[Status da Interface Griô]
Uma linha poética afrofuturista descrevendo o estado dos sensores e sinais temporais da simulação no idioma de destino. Exemplo: "CONEXÃO ATIVA // SENSOR DE AXÉ EM 87%" ou "CONNECTION ACTIVE // ANCESTRAL SIGNAL STABLE"

[Mensagem do Griô ou Diálogo do NPC]
O conteúdo principal. Se for um NPC, aqui vai o diálogo dramático do NPC em primeira pessoa (ou de Griô AI fornecendo a narrativa). Lembre de desafiar o jogador a provar suas hipóteses com provas textuais reais. Tudo traduzido na língua de destino (${targetLangName}).

[Análise Decodificada]
A explicação analítica e interpretação decolonial do documento ou do momento do jogo. Descreva o impacto histórico, as violações e os atos de resistência dos sujeitos escravizados e libertos. Tudo no idioma de destino (${targetLangName}).

[Próximo Desafio de Pesquisa]
Uma instrução clara de qual arquivo, carta ou banco de dados o jogador precisa investigar online ou na biblioteca de arquivos interna para continuar avançando na fase atual (ou saltar para a próxima fase). Tudo no idioma de destino (${targetLangName}).

DADOS DO INVESTIGADOR:
- Especialização (Avatar): ${avatar || "Arquivista Inter-dimensional"}
- Fase Atual: ${phase ? phase.number : 1} - ${phase ? phase.name : "Ouidah"}
- Ano Estimado: ${phase ? phase.year : "~1845"}
- NPC Falando: ${npc || "Griô AI"}
- Documento de Evidência Anexado na Transmissão: ${documentText ? `"${documentText}"` : "Nenhum documento anexado."}
`;

    // Package the history for the model
    const promptContents = [];
    
    // Add context with historical information as systemic prefix
    promptContents.push({
      role: "user",
      parts: [
        {
          text: `Iniciando canal de investigação. Por favor, responda com as 4 tags:
[Status da Interface Griô]
[Mensagem do Griô ou Diálogo do NPC]
[Análise Decodificada]
[Próximo Desafio de Pesquisa]

Mensagem do investigador: ${messages[messages.length - 1]?.text || "Olá Griô AI, me conectando à rede ancestral."}`
        }
      ]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptContents,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.8,
      },
    });

    const replyText = response.text || "";
    res.json({ text: replyText });

  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({
      error: "Falha na conexão com o mainframe ancestral. " + (error.message || ""),
      status: "[Status: INTERFERÊNCIA TEMPORAL - SINAL INSTÁVEL]"
    });
  }
});

// 2. Setup Dev Server with Vite middleware / Production handler
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Iniciando servidor Express em modo de desenvolvimento...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Iniciando servidor Express em modo de produção...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Griô Mainframe] Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();
