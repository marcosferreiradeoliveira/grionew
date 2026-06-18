/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  MapPin, 
  BookOpen, 
  Send, 
  Shield, 
  Terminal, 
  FolderOpen, 
  HelpCircle, 
  RefreshCw, 
  Compass, 
  User, 
  Cpu, 
  CheckCircle2, 
  FileText, 
  Bookmark, 
  ArrowRight,
  Info,
  Globe
} from "lucide-react";
import { 
  Language, 
  UI_TRANSLATIONS, 
  MULTILINGUAL_AVATARS, 
  MULTILINGUAL_PHASES, 
  MULTILINGUAL_DOCUMENTS,
  translatedAvatar,
  translatedPhase,
  translatedDocument
} from "./translations";
import { ChatMessage, Hypothesis } from "./types";

import avatarLinguist from "./assets/images/avatar_linguist_1781714865057.jpg";
import avatarArchivist from "./assets/images/avatar_archivist_1781714880297.jpg";
import avatarStrategist from "./assets/images/avatar_strategist_1781714893794.jpg";

const AVATAR_IMAGES = {
  linguist: avatarLinguist,
  archivist: avatarArchivist,
  strategist: avatarStrategist
};

export default function App() {
  // Multilingual state
  const [lang, setLang] = useState<Language>(() => {
    const savedLang = localStorage.getItem("grio_lang");
    return (savedLang as Language) || "pt";
  });

  // Dynamic translated data based on selected language
  const phases: translatedPhase[] = MULTILINGUAL_PHASES[lang];
  const historicalDocuments: translatedDocument[] = MULTILINGUAL_DOCUMENTS[lang];
  const avatarSpecialties: translatedAvatar[] = MULTILINGUAL_AVATARS[lang];
  const translations = UI_TRANSLATIONS[lang];

  // Game States
  const [selectedAvatarId, setSelectedAvatarId] = useState<"linguist" | "archivist" | "strategist" | null>(() => {
    return (localStorage.getItem("grio_avatar_id") as any) || null;
  });
  const [currentPhaseNumber, setCurrentPhaseNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"narrative" | "documents" | "hypothesis">("narrative");
  
  // Chat state per phase
  const [chatHistory, setChatHistory] = useState<Record<number, ChatMessage[]>>({});
  const [userInput, setUserInput] = useState<string>("");
  const [attachedDocId, setAttachedDocId] = useState<string | null>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState<boolean>(false);

  // Hypotheses state
  const [hypotheses, setHypotheses] = useState<Record<number, Hypothesis>>(() => {
    try {
      const saved = localStorage.getItem("grio_hypotheses");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    
    // Default structure (based on phase numbers)
    const initial: Record<number, Hypothesis> = {};
    [1, 2, 3, 4, 5, 6, 7].forEach(num => {
      initial[num] = {
        phaseNumber: num,
        draftText: "",
        savedClues: [],
        unlocked: num === 1,
        notes: ""
      };
    });
    return initial;
  });

  // Active NPC choice (can chat with Griô AI or the specific Phase NPC)
  const [activeNpcName, setActiveNpcName] = useState<string>("Griô AI");

  // Mobile layout split control
  const [mobileTab, setMobileTab] = useState<"map" | "terminal">("terminal");

  // Console / System notification logs (cosmetic immersive log)
  const [systemLogs, setSystemLogs] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Persistence side-effects
  useEffect(() => {
    localStorage.setItem("grio_hypotheses", JSON.stringify(hypotheses));
  }, [hypotheses]);

  useEffect(() => {
    localStorage.setItem("grio_lang", lang);
  }, [lang]);

  useEffect(() => {
    if (selectedAvatarId) {
      localStorage.setItem("grio_avatar_id", selectedAvatarId);
    } else {
      localStorage.removeItem("grio_avatar_id");
    }
  }, [selectedAvatarId]);

  // Handle active phase calculations
  const activePhase = phases.find(p => p.number === currentPhaseNumber) || phases[0];
  const selectedAvatar = avatarSpecialties.find(a => a.id === selectedAvatarId) || null;

  // Auto-scrolling chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, currentPhaseNumber]);

  // Set active NPC to Griô AI when changing phases, or reset to local NPC
  useEffect(() => {
    setActiveNpcName(lang === "fr" ? "Griot AI" : "Griô AI");
    setAttachedDocId(null);
  }, [currentPhaseNumber, lang]);

  // Populate system log based on language
  useEffect(() => {
    if (lang === "en") {
      setSystemLogs([
        "SYSTEM INITIALIZATION COMPLETE // SELECT AVATAR...",
        "CONNECTING WITH THE TRANSPACIFIC & DIASPORA MAINFRAME...",
        "DECOLONIAL ORAL RECONSTRUCTION ENGINE ACTIVATED."
      ]);
    } else if (lang === "fr") {
      setSystemLogs([
        "SYSTEME INITIALISE // SÉLECTIONNEZ VOTRE AVATAR...",
        "CONNEXION AU SERVEUR TRANSPACIFIQUE DE LA DIASPORA...",
        "MOTEUR DE RECONSTRUCTION DECOLONIALE ORALE EN LINE."
      ]);
    } else {
      setSystemLogs([
        "SISTEMA INICIALIZADO // AGUARDANDO CONFIGURAÇÃO DE AVATAR...",
        "CONECTANDO COM O MAINFRAME DA DIÁSPORA NEGRA...",
        "MODO DE RECONSTRUÇÃO ORAL DECOLONIAL ATIVADO."
      ]);
    }
  }, [lang]);

  // Adds raw entries to cosmetic console logs
  const logToConsole = (msg: string) => {
    const time = new Date().toLocaleTimeString();
    setSystemLogs(prev => [`[${time}] ${msg}`, ...prev.slice(0, 15)]);
  };

  // Setup initial message for Griô or local NPC when selected
  const initializeChatIfEmpty = (phaseNum: number, currentLang: Language, forceRefresh = false) => {
    const phaseData = MULTILINGUAL_PHASES[currentLang].find(p => p.number === phaseNum) || MULTILINGUAL_PHASES[currentLang][0];
    const targetTranslations = UI_TRANSLATIONS[currentLang];
    
    const formattedWelcomeText = targetTranslations.welcomeIntroText
      .replace("{phaseName}", phaseData.name)
      .replace("{location}", phaseData.location)
      .replace("{npc}", phaseData.npc)
      .replace("{role}", phaseData.npcRole);

    const welcomeMsg: ChatMessage = {
      id: `welcome-${phaseNum}-${currentLang}`,
      sender: "grio",
      senderName: currentLang === "fr" ? "Griot AI" : "Griô AI",
      text: formattedWelcomeText,
      statusLine: currentLang === "en" ? "SATELLITE BEAM ACTIVE // PROTOCOL SYNC" : currentLang === "fr" ? "ONDE ULTRA ACTIVE // SYNC PROTOCOLE" : "SINAL DE SATÉLITE ESTÁVEL // SINTONIA ANCESTRAL: 15%",
      decodedAnalysis: targetTranslations.documentAnalysisTitle,
      nextChallenge: `${targetTranslations.libraryTitle}: "${phaseData.keyDocumentId}".`,
      timestamp: new Date().toLocaleTimeString()
    };

    setChatHistory(prev => {
      // If forceRefresh, or if the current history is empty, or contains only the old welcome message
      const hasOnlyWelcome = !prev[phaseNum] || prev[phaseNum].length === 0 || (prev[phaseNum].length === 1 && prev[phaseNum][0].id.startsWith("welcome-"));
      if (hasOnlyWelcome || forceRefresh) {
        return {
          ...prev,
          [phaseNum]: [welcomeMsg]
        };
      }
      return prev;
    });
  };

  // Trigger initialization when avatar, phase, or language gets updated
  useEffect(() => {
    if (selectedAvatarId) {
      initializeChatIfEmpty(currentPhaseNumber, lang);
    }
  }, [selectedAvatarId, currentPhaseNumber, lang]);

  // Main chat sending execution with Server-Side Gemini API integration
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() && !attachedDocId) return;

    if (!selectedAvatar) {
      alert(translations.selectAvatar);
      return;
    }

    const docToSend = attachedDocId ? historicalDocuments.find(d => d.id === attachedDocId) : null;
    let appendedMessageText = userInput;
    if (docToSend) {
      appendedMessageText += `\n\n[EVIDÊNCIA ENVIADA] Documento: "${docToSend.title}"\nDados:\n${docToSend.content}`;
    }

    // Capture context
    const timestampStr = new Date().toLocaleTimeString();
    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: "user",
      senderName: selectedAvatar.title,
      text: userInput || `${translations.evidencePrepared} "${docToSend?.title}"`,
      timestamp: timestampStr,
      attachedDocId: attachedDocId || undefined
    };

    // Update state with user message
    const currentHistory = chatHistory[currentPhaseNumber] || [];
    const updatedHistory = [...currentHistory, userMsg];
    setChatHistory(prev => ({
      ...prev,
      [currentPhaseNumber]: updatedHistory
    }));

    setUserInput("");
    setAttachedDocId(null);
    setIsSending(true);
    logToConsole(`${translations.syncingMainframe} ${activeNpcName}...`);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedHistory.slice(-8), // Send recent context window
          phase: activePhase,
          avatar: selectedAvatar.id,
          npc: activeNpcName,
          documentText: docToSend ? `${docToSend.title}: ${docToSend.content}` : "",
          lang: lang
        })
      });

      if (!response.ok) {
        throw new Error("Invalid response from server interface.");
      }

      const data = await response.json();
      const rawText: string = data.text || "";

      // Parse text returning into 4 blocks
      const parsed = parseGrioResponse(rawText);

      // Create Griô/NPC reply
      const replyMsg: ChatMessage = {
        id: `grio-${Date.now()}`,
        sender: activeNpcName.toLowerCase().includes("grio") ? "grio" : "npc",
        senderName: activeNpcName,
        text: parsed.message,
        statusLine: parsed.statusLine || `SINTONIA: ${calculateSyncRate()}%`,
        decodedAnalysis: parsed.analysis || "",
        nextChallenge: parsed.challenge || "",
        timestamp: new Date().toLocaleTimeString()
      };

      setChatHistory(prev => ({
        ...prev,
        [currentPhaseNumber]: [...(prev[currentPhaseNumber] || []), replyMsg]
      }));

      // Unlock next phase if this was successful evidence submission or if they solved some challenges
      if (docToSend) {
        logToConsole(translations.evidenceAcptLog);
        // Mark this phase as partially solved and unlock next phase
        const nextPhaseNum = currentPhaseNumber < 7 ? currentPhaseNumber + 1 : 7;
        setHypotheses(prev => {
          const updated = { ...prev };
          // Add document to list of saved clues
          if (!updated[currentPhaseNumber].savedClues.includes(docToSend.title)) {
            updated[currentPhaseNumber].savedClues = [...updated[currentPhaseNumber].savedClues, docToSend.title];
          }
          // Unlock next phase
          updated[nextPhaseNum] = {
            ...updated[nextPhaseNum],
            unlocked: true
          };
          return updated;
        });
        logToConsole(`${translations.phaseUnlockedLog} Stage ${nextPhaseNum}!`);
      } else {
        logToConsole(`Radio connection with ${activeNpcName} completed.`);
      }

    } catch (err: any) {
      console.error(err);
      logToConsole("ERRO DE SINAL / TIMEOUT OFFLINE PROTOCOL LOADED.");
      
      // Fallback offline simulated behavior
      const mockReply = getFallbackResponse(activeNpcName, activePhase, docToSend);
      setChatHistory(prev => ({
        ...prev,
        [currentPhaseNumber]: [...(prev[currentPhaseNumber] || []), mockReply]
      }));
    } finally {
      setIsSending(false);
    }
  };

  // Parse custom tags returned by Gemini API
  const parseGrioResponse = (text: string) => {
    const statusRegex = /\[Status da Interface Griô\]([\s\S]*?)(?=\[Mensagem do Griô ou Diálogo do NPC\]|\[Análise Decodificada\]|\[Próximo Desafio de Pesquisa\]|$)/i;
    const msgRegex = /\[Mensagem do Griô ou Diálogo do NPC\]([\s\S]*?)(?=\[Status da Interface Griô\]|\[Análise Decodificada\]|\[Próximo Desafio de Pesquisa\]|$)/i;
    const analysisRegex = /\[Análise Decodificada\]([\s\S]*?)(?=\[Status da Interface Griô\]|\[Mensagem do Griô ou Diálogo do NPC\]|\[Próximo Desafio de Pesquisa\]|$)/i;
    const challengeRegex = /\[Próximo Desafio de Pesquisa\]([\s\S]*?)(?=\[Status da Interface Griô\]|\[Mensagem do Griô ou Diálogo do NPC\]|\[Análise Decodificada\]|$)/i;

    const statusMatch = text.match(statusRegex);
    const msgMatch = text.match(msgRegex);
    const analysisMatch = text.match(analysisRegex);
    const challengeMatch = text.match(challengeRegex);

    let message = text;
    if (msgMatch) {
      message = msgMatch[1].trim();
    } else {
      // Fallback clean regex replacements
      message = text
        .replace(/\[Status da Interface Griô\]/g, "")
        .replace(/\[Mensagem do Griô ou Diálogo do NPC\]/g, "")
        .replace(/\[Análise Decodificada\]/g, "")
        .replace(/\[Próximo Desafio de Pesquisa\]/g, "");
    }

    return {
      statusLine: statusMatch ? statusMatch[1].trim() : null,
      message: message.trim(),
      analysis: analysisMatch ? analysisMatch[1].trim() : null,
      challenge: challengeMatch ? challengeMatch[1].trim() : null
    };
  };

  // Simulated fallback responses for offline/bad API Key scenarios
  const getFallbackResponse = (npcName: string, phase: translatedPhase, doc: translatedDocument | null) => {
    let text = "";
    let analysis = "";
    let challenge = "";
    let status = lang === "fr" ? "SYSTEM HORIZONTAL DECONECTE - SIMULATION LOCALE" : lang === "en" ? "OFFLINE AUXILIARY MODE - LOCAL SIMULATION" : "MODO DE EMERGÊNCIA TEMPORAL - SINAIS LOCAIS";

    const isGrio = npcName.toLowerCase().includes("grio");

    if (isGrio) {
      if (lang === "en") {
        text = `Our sensors detected minor telemetry lag. However, the oral Grio stream remains secure! 
        Analyzing stage ${phase.number} (${phase.name}). ${doc ? `You've properly uploaded the evidentiary files of "${doc.title}".` : "Utilize our archived documents to restore our common thread."}`;
        analysis = `Mohammed Gardo Baquaqua written text remains the only autobiographical document from a Black Muslim literate under the shadow of the imperial Brazilian crown. This is an emancipatory geopolitical milestone.`;
        challenge = `Take down your synthesis in our Tract of Hypotheses below to register your critical ideas for ${phase.location}.`;
      } else if (lang === "fr") {
        text = `Nos balises signalent un délai de réseau, mais la déviation cyber-griot résiste ! 
        Analyse de l'étape ${phase.number} (${phase.name}). ${doc ? `Vous avez soumis les documents d'archives de "${doc.title}" d'une main experte.` : "Interrogez l'archive historique pour restituer l'intégrité de la vérité."}`;
        analysis = `Le manuscrit de Gardo Baquaqua est le seul document littéraire autobiographique écrit par un ancien captif de confession musulmane au Brésil colonial. C'est un joyau historique d'émancipation.`;
        challenge = `Prenez note de vos conclusions critiques dans la section Recueil pour fortifier notre signal à ${phase.location}.`;
      } else {
        text = `Nossos sensores detectaram uma interferência no mainframe. Porém, a sabedoria oral resiste! 
        Estamos na fase ${phase.number} (${phase.name}). ${doc ? `Você enviou com perfeição a evidência documental "${doc.title}".` : "Utilize os pergaminhos da biblioteca para reviver este momento."}`;
        analysis = `Mohammed Gardo Baquaqua é o autor do único relato literário autobiográfico de um africano muçulmano escravizado no Brasil Imperial. Esta narrativa é um manifesto geopolítico decolonial vivo contra o comércio atlântico ilegal.`;
        challenge = `Preencha suas teorias no "Rastreador de Hipóteses Decoloniais" ao lado para registrar suas reflexões permanentes sobre as terras de ${phase.location}.`;
      }
    } else {
      if (lang === "en") {
        text = `I, ${phase.npc}, acknowledge your stance as a ${phase.npcRole}. The coordinates of ${phase.year} represent deep struggles. ${doc ? `Upon checking "${doc.title}" that you submitted, I choose to speak without deceit.` : "You must provide real papers from the records to earn deep clearances."}`;
        analysis = `Retrieving direct historical evidence tears down the facade of global mercantile shipping lines masking illicit trade.`;
        challenge = `Collect additional records from the archives to progress through our timeline.`;
      } else if (lang === "fr") {
        text = `Moi, ${phase.npc}, agissant comme ${phase.npcRole}, je reconnais votre zèle. Les rives de ${phase.year} sont agitées. ${doc ? `Ayant examiné la pièce "${doc.title}" que vous m'injectez, je livre mes secrets.` : "Mais je me méfie de la police du port... Apportez-moi des pièces historiques tangibles !"}`;
        analysis = `L'acte de fouiller les notices maritimes démasque les trafics clandestins maquillés derrière d'honnêtes cargaisons d'exportateurs de café.`;
        challenge = `Continuez l'enquête sur l'étape courante ou formulez des thèses d'agência.`;
      } else {
        text = `Eu, ${phase.npc}, respondo ao seu avatar! Como ${phase.npcRole}, sinto que suas ideias carregam as dores e lutas da travessia. ${doc ? `Ao ler as linhas do documento "${doc.title}" que você apresentou, sinto que a verdade não pode mais ser omitida neste ano de ${phase.year}.` : "Mas não confiarei facilmente... mostre-me provas físicas de seus acervos históricos!"}`;
        analysis = `Ao resgatar os testemunhos e anúncios coloniais, nós despimos a hipocrisia de proprietários como Clemente Coelho e capitães da Barca Lembrança de seus adornos de decoloniabilidade comercial.`;
        challenge = `Colete mais evidências conectando esta fase à rota de Baquaqua. Avance no mapa físico ou atualize suas reflexões.`;
      }
    }

    return {
      id: `fallback-${Date.now()}`,
      sender: isGrio ? "grio" : "npc",
      senderName: npcName,
      text,
      statusLine: status,
      decodedAnalysis: analysis,
      nextChallenge: challenge,
      timestamp: new Date().toLocaleTimeString()
    };
  };

  // Calculate percentage of synchronization for the user profile
  const calculateSyncRate = () => {
    let unlockedCount = 0;
    let hypothesisCount = 0;
    let cluesCount = 0;

    (Object.values(hypotheses) as Hypothesis[]).forEach(h => {
      if (h.unlocked) unlockedCount++;
      if (h.notes && h.notes.length > 10) hypothesisCount++;
      if (h.savedClues && h.savedClues.length > 0) cluesCount += h.savedClues.length;
    });

    const baseScore = (unlockedCount / 7) * 40 + (hypothesisCount / 7) * 40 + Math.min(cluesCount * 5, 20);
    return Math.min(Math.round(baseScore), 100);
  };

  // Update hypothesis notes
  const saveHypothesisNotes = (phaseNum: number, value: string) => {
    setHypotheses(prev => {
      const updated = { ...prev };
      updated[phaseNum] = {
        ...updated[phaseNum],
        notes: value
      };
      return updated;
    });
    logToConsole(`Hypothesis log ${phaseNum} persisted successfully.`);
  };

  // Choose Avatar specialization
  const selectAvatarModel = (avatarId: "linguist" | "archivist" | "strategist") => {
    setSelectedAvatarId(avatarId);
    setAvatarMenuOpen(false);
    
    const targetAvatar = avatarSpecialties.find(a => a.id === avatarId);
    if (targetAvatar) {
      logToConsole(`SINAL REDIRECIONADO // ATIVADO: ${targetAvatar.title}.`);
    }
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Background Cyber Effect */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40 z-0"></div>
      
      {/* Scanning Line overlay */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-red-500/25 pointer-events-none opacity-20 z-10 animate-[scanline_8s_linear_infinite]"></div>

      {/* Modern High-Contrast Header */}
      <header id="main-header" className="border-b border-purple-900/40 bg-cyber-purple/80 backdrop-blur-md px-4 py-3 shrink-0 flex items-center justify-between z-10 relative">
        <div id="header-branding" className="flex items-center gap-3">
          <div className="bg-yellow-500 text-purple-950 p-2 rounded-lg font-bold font-display shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            <Compass className="w-5 h-5 animate-spin-slow text-purple-950" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-display tracking-tight text-white flex items-center gap-2">
              {translations.appTitle} <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 uppercase font-mono">v2.5 ML</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono hidden md:block">{translations.tagline}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Multilingual Selector Language Switcher */}
          <div className="flex items-center gap-1 bg-slate-900/60 border border-purple-800/40 px-2.5 py-1 rounded-md">
            <Globe className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={lang}
              onChange={(e) => {
                const selectedLang = e.target.value as Language;
                setLang(selectedLang);
                logToConsole(`Mainframe language switched to ${selectedLang.toUpperCase()}`);
              }}
              className="bg-transparent border-none text-xs text-yellow-400 font-mono focus:outline-none cursor-pointer pr-1"
            >
              <option value="pt" className="bg-slate-950 text-slate-100">PT</option>
              <option value="en" className="bg-slate-950 text-slate-100">EN</option>
              <option value="fr" className="bg-slate-950 text-slate-100">FR</option>
            </select>
          </div>

          {selectedAvatar ? (
            <div className="flex items-center gap-4">
              {/* Active Character Profile Badge */}
              <div className="relative group">
                <button 
                  id="avatar-info-badge"
                  onClick={() => setAvatarMenuOpen(!avatarMenuOpen)}
                  className="flex items-center gap-2.5 bg-purple-950/50 hover:bg-purple-900/50 px-3 py-1.5 rounded-md border border-purple-800/40 text-left transition duration-200"
                >
                  <img
                    src={AVATAR_IMAGES[selectedAvatar.id]}
                    alt={selectedAvatar.title}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-yellow-500/50 shadow-[0_0_8px_rgba(234,179,8,0.2)] shrink-0"
                  />
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono leading-none">{translations.activeResearch}</div>
                    <div className="text-xs font-bold text-yellow-400 font-display">{selectedAvatar.title}</div>
                  </div>
                </button>

                {/* Avatar Switcher Dropdown */}
                {avatarMenuOpen && (
                  <div id="avatar-dropdown" className="absolute right-0 mt-2 w-80 bg-cyber-purple border border-purple-800 rounded-lg shadow-2xl p-4 z-40 text-sm">
                    <h3 className="font-display font-semibold text-yellow-400 mb-2 border-b border-purple-800/60 pb-1">{translations.changeSpecialty}</h3>
                    <div className="space-y-2.5">
                      {avatarSpecialties.map(item => (
                        <button
                          key={item.id}
                          onClick={() => selectAvatarModel(item.id)}
                          className={`w-full p-2 rounded text-left border text-xs transition duration-150 ${selectedAvatarId === item.id ? 'bg-purple-900/60 border-yellow-500' : 'bg-purple-950/40 border-purple-900 hover:border-purple-800'}`}
                        >
                          <div className="flex gap-2.5 items-center">
                            <img
                              src={AVATAR_IMAGES[item.id]}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-8 h-8 rounded-full object-cover border border-purple-700/50 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-white flex justify-between items-center gap-2">
                                <span className="truncate">{item.title}</span>
                                {selectedAvatarId === item.id && <span className="text-yellow-500 text-[9px] uppercase font-mono shrink-0">{translations.unlockedMsg}</span>}
                              </div>
                              <p className="text-slate-400 mt-0.5 text-[10px] truncate">{item.subtitle}</p>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Ancestral Sincr Bar */}
              <div className="hidden sm:block">
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
                  <span>{translations.ancestralSync}</span>
                  <span className="text-emerald-400">{calculateSyncRate()}%</span>
                </div>
                <div className="w-36 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 via-emerald-500 to-emerald-400 h-full transition-all duration-500" 
                    style={{ width: `${calculateSyncRate()}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-pulse flex items-center gap-1.5 text-xs text-yellow-400 font-mono border border-yellow-500/20 bg-yellow-500/5 px-2.5 py-1 rounded">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 animate-ping"></span>
              {translations.selectAvatar}
            </div>
          )}
        </div>
      </header>

      {/* MAIN GAME LAYOUT */}
      {!selectedAvatar ? (
        /* INTRO / AVATAR SELECTION */
        <main id="intro-screen" className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-16 flex flex-col justify-center relative z-10">
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded bg-purple-900/30 text-purple-300 border border-purple-800 text-[11px] font-mono mb-3 uppercase tracking-widest">
              {translations.avatarSectionTitle}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold font-display leading-tight text-white">
              {translations.introductionTitle}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
              {translations.introductionDesc}
            </p>
          </div>

          <div id="avatar-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {avatarSpecialties.map(item => (
              <div 
                key={item.id}
                onClick={() => selectAvatarModel(item.id)}
                className="group relative cursor-pointer bg-purple-950/20 hover:bg-purple-950/40 border border-purple-900/60 hover:border-yellow-500/80 rounded-xl p-5 transition-all duration-300 shadow-[0_4px_25px_-10px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                {/* Visual Avatar Portrait Illustration */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-purple-900 bg-purple-950/60 mb-4 shadow-inner">
                  <img 
                    src={AVATAR_IMAGES[item.id]} 
                    alt={item.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                  <div className="absolute top-3 right-3 bg-purple-950/80 border border-purple-800/80 p-1.5 rounded-full text-yellow-500 shadow-md">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-yellow-400 transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1">{item.subtitle}</p>
                  
                  <p className="text-[12px] text-slate-400 mt-3 leading-relaxed font-sans mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 border-t border-purple-900/60 pt-3">
                    <span className="text-[10px] font-mono text-yellow-500/80 uppercase block tracking-wider">Habilidades Especiais:</span>
                    {item.perks.map((p, i) => (
                      <div key={i} className="flex gap-1.5 items-start text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-purple-900/40 flex flex-col gap-4">
                  {/* Select Avatar Command Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      selectAvatarModel(item.id);
                    }}
                    className="w-full py-2.5 px-4 rounded-lg bg-yellow-500 text-purple-950 font-bold font-display text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(234,179,8,0.1)] hover:shadow-[0_0_20px_rgba(234,179,8,0.35)] border border-yellow-600 hover:bg-yellow-400"
                  >
                    <User className="w-4 h-4 shrink-0" />
                    {lang === "fr" ? "Activer l'Avatar" : lang === "en" ? "Select Specialization" : "Selecionar Avatar"}
                  </button>

                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500">
                    <span>RESISTÊNCIA:</span>
                    <span className="text-emerald-400 font-bold">{item.energyBonus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-950/60 border border-purple-900/40 rounded-lg p-5 flex items-start gap-4">
            <Info className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-400 leading-relaxed font-sans">
              <span className="text-yellow-500 font-bold uppercase">{translations.decolonialNoteTitle}</span> {translations.decolonialNoteText}
            </div>
          </div>
        </main>
      ) : (
        /* GAME BOARD & TABS */
        <main id="game-dashboard" className="flex-1 flex flex-col md:flex-row h-[calc(100vh-57px)] overflow-hidden z-10 relative">
          
          {/* Mobile responsive view switcher */}
          <div className="md:hidden flex bg-purple-950/80 border-b border-purple-900/40 p-2 shrink-0 justify-stretch gap-2 z-20 shadow-md">
            <button
              onClick={() => setMobileTab("map")}
              className={`flex-1 py-2 text-xs font-semibold font-display rounded-md transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 border ${
                mobileTab === "map"
                  ? "bg-yellow-500 text-purple-950 border-yellow-500 font-bold shadow-md"
                  : "bg-purple-950/40 text-slate-400 border-transparent hover:text-slate-200"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              {lang === "fr" ? "Carte et Étape" : lang === "en" ? "Map & Stage" : "Mapa e História"}
            </button>
            <button
              onClick={() => setMobileTab("terminal")}
              className={`flex-1 py-2 text-xs font-semibold font-display rounded-md transition-all uppercase tracking-wider flex items-center justify-center gap-1.5 border ${
                mobileTab === "terminal"
                  ? "bg-yellow-500 text-purple-950 border-yellow-500 font-bold shadow-md"
                  : "bg-purple-950/40 text-slate-400 border-transparent hover:text-slate-200"
              }`}
            >
              <Send className="w-3.5 h-3.5 shrink-0" />
              {lang === "fr" ? "Portal de Chat" : lang === "en" ? "Chat Console" : "Portal de Interrogação"}
            </button>
          </div>

          {/* LEFT PANEL: Interactive Diaspora Map & Progress Hub */}
          <section
            id="map-hub"
            className={`w-full md:w-[40%] ${
              mobileTab === "map" ? "flex" : "hidden md:flex"
            } flex-col border-r border-purple-900/40 bg-slate-950/50 backdrop-blur-sm shrink-0 overflow-y-auto`}
          >
            
            {/* Progression Mini Bar */}
            <div className="bg-purple-950/30 p-3.5 border-b border-purple-900/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-purple-400 block uppercase">{translations.mainframeLevel}</span>
                <span className="text-sm font-semibold font-display text-white">{translations.investigationTitle}</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <button 
                  onClick={() => {
                    if(confirm(translations.restartPrompt)) {
                      setSelectedAvatarId(null);
                      setChatHistory({});
                      setCurrentPhaseNumber(1);
                    }
                  }} 
                  className="p-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition duration-200"
                  title={translations.resetAvatar}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* INTEGRATED INTERACTIVE DIASPORA MAP (SVG-based beautifully rendered node map) */}
            <div id="interactive-map-container" className="p-4 bg-slate-950/70 border-b border-purple-900/30 flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-2">
                <h3 className="text-xs font-mono font-bold text-yellow-500 tracking-wider flex items-center gap-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping"></span>
                  {translations.diasporaMapTitle}
                </h3>
                <span className="text-[10px] font-mono text-slate-500">{translations.mapInstructions}</span>
              </div>

              {/* Geo-historical Grid Map representation */}
              <div className="relative w-full aspect-[16/10] bg-slate-900 rounded-lg border border-purple-950 overflow-hidden shadow-inner flex items-center justify-center p-1">
                {/* Simulated geographic reference lines */}
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <div className="absolute top-[25%] left-0 w-full h-[1px] border-t border-dashed border-purple-800/20"></div>
                <div className="absolute top-[50%] left-0 w-full h-[1px] border-t border-dashed border-purple-500/30"></div>
                <div className="absolute top-[75%] left-0 w-full h-[1px] border-t border-dashed border-purple-800/20"></div>
                
                {/* Equator Tag */}
                <span className="absolute right-2 top-[48%] text-[8px] font-mono text-purple-500/40 uppercase">Equator</span>
                <span className="absolute left-2 top-[20%] text-[8px] font-mono text-purple-500/40 uppercase font-bold">North Atlantic</span>

                {/* SVG path connecting all phases (Route Trace) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d={`M ${phases[0].coordinates.x} ${phases[0].coordinates.y} 
                       L ${phases[1].coordinates.x} ${phases[1].coordinates.y} 
                       L ${phases[2].coordinates.x} ${phases[2].coordinates.y} 
                       L ${phases[3].coordinates.x} ${phases[3].coordinates.y}
                       L ${phases[4].coordinates.x} ${phases[4].coordinates.y}
                       L ${phases[5].coordinates.x} ${phases[5].coordinates.y}
                       L ${phases[6].coordinates.x} ${phases[6].coordinates.y}`}
                    fill="none"
                    stroke="#581c87"
                    strokeWidth="1.2"
                    strokeDasharray="4 3"
                    className="opacity-60"
                  />
                  {/* Draw highlight for completed/active lines */}
                  <path
                    d={phases.slice(0, currentPhaseNumber).map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.coordinates.x} ${p.coordinates.y}`).join(' ')}
                    fill="none"
                    stroke="#eab308"
                    strokeWidth="1.8"
                    className="opacity-70"
                  />
                </svg>

                {/* Interactive Node Renderings */}
                {phases.map((ph) => {
                  const isUnlocked = hypotheses[ph.number]?.unlocked || ph.number === 1;
                  const isActive = currentPhaseNumber === ph.number;
                  
                  return (
                    <button
                      key={ph.number}
                      onClick={() => {
                        if (isUnlocked) {
                          setCurrentPhaseNumber(ph.number);
                          logToConsole(`Focus shifted to Stage ${ph.number}: ${ph.name}`);
                        } else {
                          alert(`Blocked route. Submit evidentiary historical records in active phases to enable coordinates jump!`);
                        }
                      }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-300 z-20 ${
                        isActive
                           ? "w-8 h-8 bg-yellow-500 text-purple-950 font-bold shadow-[0_0_15px_rgba(234,179,8,0.8)] scale-110"
                           : isUnlocked
                           ? "w-6 h-6 bg-purple-900 border border-yellow-500/40 text-slate-100 hover:bg-yellow-500/20"
                           : "w-5.5 h-5.5 bg-slate-950 border border-slate-800 text-slate-600 cursor-not-allowed"
                      }`}
                      style={{ left: `${ph.coordinates.x}%`, top: `${ph.coordinates.y}%` }}
                      title={`${ph.name} (${ph.year})`}
                    >
                      <span className="text-[10px] font-mono font-bold">{ph.number}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* PHASE INFO BRIEF */}
            <div id="phase-detail-card" className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-yellow-500 bg-yellow-500/5 px-2 py-0.5 rounded border border-yellow-500/10 inline-block uppercase">
                      {translations.phaseTitle} {activePhase.number} // {activePhase.year}
                    </span>
                    <h4 className="text-lg font-bold font-display text-white mt-2 leading-snug">
                      {activePhase.name}
                    </h4>
                    <p className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> {activePhase.location}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-xs font-sans text-slate-300 leading-relaxed bg-purple-950/15 border border-purple-900/30 rounded p-3">
                  <span className="text-xs font-bold text-yellow-400 uppercase block mb-1">{translations.memoryTransmission}</span>
                  {activePhase.detailedHistory}
                </div>

                {/* NPC information detailing the challenge */}
                <div className="mt-4 p-3 rounded bg-slate-900 border border-slate-800">
                  <span className="text-[10px] font-mono text-purple-400 block uppercase mb-1">{translations.interlocutorLabel}</span>
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <span className="font-semibold text-slate-200 text-xs font-display">{activePhase.npc}</span>
                      <p className="text-[10px] text-slate-400 italic mt-0.5 leading-tight">{activePhase.npcRole}</p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveNpcName(activePhase.npc);
                        setMobileTab("terminal");
                        logToConsole(`Comms canal updated to: ${activePhase.npc}`);
                      }}
                      className={`text-[10px] font-mono font-bold px-2 py-1 rounded transition-colors shrink-0 uppercase ${activeNpcName === activePhase.npc ? 'bg-yellow-500 text-purple-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                    >
                      {translations.speakToNpc}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mini Terminal / Immersive System Logs */}
              <div className="mt-6 border border-purple-900/30 rounded bg-slate-950 p-2.5 font-mono text-[10px] text-slate-400">
                <div className="flex gap-1.5 items-center text-yellow-500/80 mb-1 border-b border-purple-950 pb-1">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{translations.systemLogsTitle}</span>
                </div>
                <div className="max-h-24 overflow-y-auto space-y-1 pr-1">
                  {systemLogs.map((log, i) => (
                    <div key={i} className="truncate">
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CENTRE PANEL: The Dual Column (Narrative chat & Documents / Decolonial Tracker) */}
          <section
            id="action-terminal"
            className={`flex-1 ${
              mobileTab === "terminal" ? "flex" : "hidden md:flex"
            } flex-col bg-slate-950/20`}
          >
            
            {/* Nav Tabs for Narrative Chat / Documents Library / Hypothesis notebook */}
            <div className="border-b border-purple-900/40 bg-cyber-purple/40 px-3 py-1 flex justify-between items-center z-10 shrink-0">
              <div className="flex gap-1.5">
                <button
                  onClick={() => setActiveTab("narrative")}
                  className={`px-3 py-2 text-xs font-display font-medium rounded-t-md transition-colors border-b-2 ${activeTab === 'narrative' ? 'border-yellow-500 text-white bg-purple-950/20' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                >
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5" /> {translations.tabsJournal}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("documents")}
                  className={`px-3 py-2 text-xs font-display font-medium rounded-t-md transition-colors border-b-2 ${activeTab === 'documents' ? 'border-yellow-500 text-white bg-purple-950/20' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                >
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" /> {translations.tabsClues}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("hypothesis")}
                  className={`px-3 py-2 text-xs font-display font-medium rounded-t-md transition-colors border-b-2 ${activeTab === 'hypothesis' ? 'border-yellow-500 text-white bg-purple-950/20' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
                >
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="w-3.5 h-3.5" /> {translations.tabsSynthesis} ({(Object.values(hypotheses) as Hypothesis[]).filter(h => h.notes.length > 5).length}/7)
                  </span>
                </button>
              </div>

              {activeTab === "narrative" && (
                <div className="flex gap-2 items-center text-xs">
                  <span className="text-slate-400 hidden sm:inline">{translations.interlocutorSelectLabel}</span>
                  <select 
                    value={activeNpcName} 
                    onChange={(e) => {
                      setActiveNpcName(e.target.value);
                      logToConsole(`Channel shifted to: ${e.target.value}`);
                    }}
                    className="bg-purple-950 border border-purple-800 text-yellow-400 font-mono text-xs px-2 py-0.5 rounded focus:outline-none focus:border-yellow-500"
                  >
                    <option value={lang === "fr" ? "Griot AI" : "Griô AI"}>{lang === "fr" ? "Griot AI (Simulateur)" : "Griô AI (Simulador)"}</option>
                    <option value={activePhase.npc}>{activePhase.npc}</option>
                  </select>
                </div>
              )}
            </div>

            {/* TAB PANELS CONTAINER */}
            <div className="flex-1 overflow-hidden relative">
              
              {/* TAB 1: NARRATIVE CHAT (Griô AI Interrogatório) */}
              {activeTab === "narrative" && (
                <div className="absolute inset-0 flex flex-col h-full">
                  {/* Messages Stream */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    
                    {/* Welcome message fallback if not initialized */}
                    {(chatHistory[currentPhaseNumber] || []).length === 0 && (
                      <div className="text-center p-8 text-xs text-slate-500 font-mono">
                        {translations.emptyChat}
                      </div>
                    )}

                    {/* Highly visible Dynamic Onboarding / Guide Card when chat is empty or contains only welcome message */}
                    {(chatHistory[currentPhaseNumber] || []).length <= 1 && (
                      <div className="bg-yellow-500/10 border border-yellow-500/25 rounded-lg p-4 font-sans text-xs text-slate-200 shadow-lg animate-fade-in my-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none"></div>
                        <h4 className="font-bold text-yellow-400 font-display flex items-center gap-1.5 uppercase tracking-wider text-[11px] mb-2.5">
                          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                          {lang === "fr" ? "COMMENT DIALOGUER AVEC LES NPCs ?" : lang === "en" ? "HOW TO DIALOGUE WITH NPCs?" : "COMO DIALOGAR COM OS NPCs?"}
                        </h4>
                        <ul className="space-y-2 list-none pl-0">
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-500 font-mono font-bold">1.</span>
                            <div>
                              <strong className="text-white">{lang === "fr" ? "Choisissez votre Interlocuteur:" : lang === "en" ? "Choose your Interlocutor:" : "Escolha quem irá responder:"}</strong>
                              <p className="text-slate-400 mt-0.5">
                                {lang === "fr" 
                                  ? `En haut à droite de cet onglet ou sur la carte à gauche, basculez entre parler au Griot AI ou directement au personnage d'époque: ${activePhase.npc} (${activePhase.npcRole}).` 
                                  : lang === "en"
                                  ? `On the top right dropdown or on the map on the left, switch between Grio AI or the era character: ${activePhase.npc} (${activePhase.npcRole}).` 
                                  : `No menu suspenso ali em cima ou clicando em "Falar com NPC" no mapa lateral, você escolhe se conversa com o Griô AI ou direto com o personagem histórico: ${activePhase.npc} (${activePhase.npcRole}).`}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-500 font-mono font-bold">2.</span>
                            <div>
                              <strong className="text-white">{lang === "fr" ? "Où Écrire:" : lang === "en" ? "Where to Type:" : "Onde Escrever:"}</strong>
                              <p className="text-slate-400 mt-0.5">
                                {lang === "fr" 
                                  ? `Utilisez la barre de saisie tout en bas "Écrivez votre message à..." pour envoyer vos théories, analyses ou questions de recherche.` 
                                  : lang === "en"
                                  ? `Use the input text bar at the very bottom "Send message to..." to write your historical inquiries or critical perspectives.` 
                                  : `Use a barra de digitação bem na parte inferior desta tela (embaixo do chat) "Envie sua mensagem para..." para escrever suas perguntas ou teorias históricas.`}
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-yellow-500 font-mono font-bold">3.</span>
                            <div>
                              <strong className="text-white">{lang === "fr" ? "Soumettre des Pièces d'Archives:" : lang === "en" ? "Submit Archival Proof:" : "Injetar Provas de Arquivo:"}</strong>
                              <p className="text-slate-400 mt-0.5">
                                {lang === "fr" 
                                  ? `Allez sur l'onglet "Biblioteca de Evidências", cliquez sur "Injetar como Prova" sur un document, puis posez une question précise à ce sujet au personnage !` 
                                  : lang === "en"
                                  ? `Go to the "Biblioteca de Evidências" tab, click "Injetar como Prova" on any record, then ask a precise question about it to get deep clues!` 
                                  : `Vá na aba "Biblioteca de Evidências", clique em "Injetar como Prova" em qualquer documento histórico e depois envie uma mensagem questionando o NPC sobre ele!`}
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    )}

                    {(chatHistory[currentPhaseNumber] || []).map((message, index) => {
                      const isUser = message.sender === "user";
                      return (
                        <div 
                          key={message.id || index} 
                          className={`flex flex-col ${isUser ? "items-end" : "items-start"} w-full animate-fade-in`}
                        >
                          {/* Sender name & status */}
                          <div className={`flex items-center gap-2 mb-1 text-[10px] font-mono text-slate-400 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                            {isUser && selectedAvatar && (
                              <img
                                src={AVATAR_IMAGES[selectedAvatar.id]}
                                alt={selectedAvatar.title}
                                referrerPolicy="no-referrer"
                                className="w-4 h-4 rounded-full object-cover border border-yellow-500/40 shadow-sm"
                              />
                            )}
                            <span className="font-bold text-slate-300">{message.senderName}</span>
                            <span>•</span>
                            <span>{message.timestamp}</span>
                            {message.statusLine && (
                              <>
                                <span>•</span>
                                <span className="text-yellow-500 text-[9px] uppercase px-1.5 py-0.5 rounded bg-yellow-500/5 border border-yellow-500/10">
                                  {message.statusLine}
                                </span>
                              </>
                            )}
                          </div>

                          {/* Message bubble */}
                          <div className={`max-w-[90%] md:max-w-[80%] rounded-lg p-3.5 text-xs text-slate-200 leading-relaxed font-sans ${
                            isUser 
                              ? "bg-purple-950 border border-purple-800/70 text-right shadow-[0_4px_12px_rgba(26,11,54,0.3)] rounded-tr-none" 
                              : "bg-slate-900 border border-slate-800 shadow-[0_4px_12px_rgba(0,0,0,0.5)] rounded-tl-none text-left"
                          }`}>
                            <p className="whitespace-pre-line">{message.text}</p>

                            {/* Linked / Submitted document context */}
                            {message.attachedDocId && (
                              <div className="mt-2.5 p-2 bg-purple-950/30 rounded border border-purple-900/40 text-left">
                                <div className="flex items-center gap-1.5 text-yellow-500 font-mono text-[9px] uppercase">
                                  <FileText className="w-3.5 h-3.5 text-yellow-500" />
                                  <span>{translations.evidencePrepared}</span>
                                </div>
                                <span className="text-[11px] font-bold text-slate-300 block mt-0.5">
                                  {historicalDocuments.find(d => d.id === message.attachedDocId)?.title}
                                </span>
                              </div>
                            )}

                            {/* Dual blocks nested inside AI's text in gorgeous formatting */}
                            {!isUser && message.decodedAnalysis && (
                              <div className="mt-3.5 pt-3.5 border-t border-slate-800/80 text-left">
                                <div className="bg-emerald-950/20 border border-emerald-900/40 rounded p-2.5 text-slate-300">
                                  <span className="text-[9px] font-mono text-emerald-400 font-bold block mb-1 uppercase tracking-wider flex items-center gap-1">
                                    <Cpu className="w-3.5 h-3.5 text-emerald-400" /> {translations.documentAnalysisTitle}
                                  </span>
                                  <p className="text-[11px] leading-relaxed font-sans italic">{message.decodedAnalysis}</p>
                                </div>
                              </div>
                            )}

                            {!isUser && message.nextChallenge && (
                              <div className="mt-2 text-left">
                                <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-md p-2.5 text-yellow-100">
                                  <span className="text-[9px] font-mono text-yellow-500 font-bold block mb-1 uppercase tracking-wider flex items-center gap-1">
                                    <Sparkles className="w-3.5 h-3.5" /> {translations.researchDirectiveTitle}
                                  </span>
                                  <p className="text-[11px] leading-relaxed font-mono text-yellow-300/90">{message.nextChallenge}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {isSending && (
                      <div className="flex flex-col items-start w-full animate-pulse">
                        <div className="flex items-center gap-2 mb-1 text-[10px] font-mono text-slate-500">
                          <span>{translations.syncingMainframe} {activeNpcName}...</span>
                        </div>
                        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg rounded-tl-none text-xs text-slate-400 max-w-sm flex items-center gap-3">
                          <Compass className="w-4 h-4 text-yellow-500 animate-spin" />
                          <span>{translations.connectingGrio}</span>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Attachment active Indicator */}
                  {attachedDocId && (
                    <div className="px-4 py-2 bg-yellow-500/10 border-t border-yellow-500/20 flex justify-between items-center select-none text-xs text-yellow-400">
                      <div className="flex items-center gap-2 font-mono">
                        <FileText className="w-3.5 h-3.5 text-yellow-500" />
                        <span>{translations.evidencePrepared} <strong>{historicalDocuments.find(d => d.id === attachedDocId)?.title}</strong></span>
                      </div>
                      <button 
                        onClick={() => setAttachedDocId(null)}
                        className="text-slate-400 hover:text-white font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800"
                      >
                        {translations.removeEvidence}
                      </button>
                    </div>
                  )}

                  {/* Immersive guidance prompt detailing who the message goes to */}
                  <div className="px-3.5 py-1.5 bg-slate-950/90 border-t border-purple-900/40 flex flex-wrap justify-between items-center gap-2 select-none">
                    <span className="text-[11px] font-mono text-yellow-500 font-semibold flex items-center gap-1.5 uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping"></span>
                      {lang === "fr" ? "Écrivez votre message à" : lang === "en" ? "Send transmission to" : "Envie sua transmissão para"} <span className="text-white bg-purple-900/60 px-2 py-0.5 rounded border border-purple-800/60 font-bold ml-1">{activeNpcName}</span>:
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {lang === "fr" ? "🔑 Tapez ci-dessous et cliquez sur Transmettre" : lang === "en" ? "🔑 Type below and click Transmit" : "🔑 Digite abaixo e clique em Transmitir"}
                    </span>
                  </div>

                  {/* Input Chat Controls Bar */}
                  <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 flex gap-2 shrink-0 z-10">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder={attachedDocId ? translations.evidencePrepared : translations.inputPlaceholder}
                      disabled={isSending}
                      className="flex-1 bg-slate-900 text-slate-100 text-xs rounded border border-purple-900/60 px-3 py-2.5 focus:outline-none focus:border-yellow-500 disabled:opacity-50 font-sans focus:ring-1 focus:ring-yellow-500"
                    />
                    <button
                      type="submit"
                      disabled={isSending || (!userInput.trim() && !attachedDocId)}
                      className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-slate-800 disabled:text-slate-600 disabled:border-slate-900 text-purple-950 font-display font-bold px-4 py-2 rounded text-xs transition duration-150 flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span className="hidden sm:inline">{translations.transmit}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 2: LIBRARY OF EVIDENCE */}
              {activeTab === "documents" && (
                <div className="absolute inset-0 overflow-y-auto p-4 space-y-4 h-full bg-slate-950/40">
                  <div className="mb-4">
                    <h3 className="text-sm font-bold font-display text-white flex items-center gap-2">
                      <FolderOpen className="w-4 h-4 text-yellow-500" /> {translations.libraryTitle}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {translations.librarySubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {historicalDocuments.map((doc) => {
                      const isTargetForThisPhase = activePhase.keyDocumentId === doc.id;
                      const isPrepared = attachedDocId === doc.id;
                      
                      return (
                        <div 
                          key={doc.id}
                          className={`border rounded-lg p-4 bg-slate-900 flex flex-col justify-between transition-all duration-200 ${
                            isPrepared 
                              ? 'border-yellow-500 ring-1 ring-yellow-500/50' 
                              : isTargetForThisPhase 
                              ? 'border-emerald-500/60 hover:border-emerald-500' 
                              : 'border-purple-900/40 hover:border-purple-800/80'
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-start gap-2 mb-2">
                              <span className="text-[9px] font-mono text-purple-400 uppercase bg-purple-950 px-1.5 py-0.5 rounded border border-purple-900/40">
                                {doc.year} // {doc.id.toUpperCase()}
                              </span>
                              {isTargetForThisPhase && (
                                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 uppercase font-bold animate-pulse">
                                  {translations.suggestedDoc}
                                </span>
                              )}
                            </div>

                            <h4 className="text-xs font-bold text-white font-display leading-snug">{doc.title}</h4>
                            <p className="text-[10px] text-slate-500 italic font-mono mt-0.5">Source: {doc.source}</p>

                            <div className="my-2.5 p-2 rounded bg-slate-950 text-[11px] font-mono text-slate-300 border border-purple-950">
                              <p className="line-clamp-4 leading-normal">{doc.content}</p>
                            </div>

                            <div className="bg-emerald-950/15 border border-emerald-900/20 p-2.5 rounded text-[11px] font-sans text-slate-400 leading-relaxed mb-3.5">
                              <span className="text-[10px] font-bold text-emerald-400 uppercase block mb-0.5">{translations.decolonialContextTitle}</span>
                              {doc.decolonialContext}
                            </div>
                          </div>

                          <div className="pt-3 border-t border-purple-950 flex gap-2 justify-end">
                            <button
                              onClick={() => {
                                setAttachedDocId(doc.id);
                                setActiveTab("narrative");
                                logToConsole(`Exemplar "${doc.title}" prepared for submission.`);
                              }}
                              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-[11px] font-bold font-display transition duration-150 w-full md:w-auto uppercase ${
                                isPrepared 
                                  ? 'bg-yellow-500 text-purple-950' 
                                  : 'bg-slate-800 hover:bg-slate-700 text-yellow-400 border border-slate-700'
                              }`}
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>{isPrepared ? translations.preparedDocBadge : translations.prepareDoc}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* TAB 3: HYPOTHESIS NOTEBOOK */}
              {activeTab === "hypothesis" && (
                <div className="absolute inset-0 overflow-y-auto p-4 space-y-4 h-full bg-slate-950/40">
                  <div className="mb-4">
                    <h3 className="text-sm font-bold font-display text-white flex items-center gap-2">
                      <Bookmark className="w-4 h-4 text-yellow-500" /> {translations.hypothesisNotebookTitle}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {translations.hypothesisNotebookSubtitle}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {phases.map((ph) => {
                      const hypo = hypotheses[ph.number];
                      const isUnlocked = hypo?.unlocked || ph.number === 1;
                      
                      return (
                        <div 
                          key={ph.number}
                          className={`p-4 rounded-lg bg-slate-900 border transition-all duration-150 ${
                            isUnlocked 
                              ? 'border-purple-900/60' 
                              : 'border-slate-950 opacity-45 select-none touch-none pointer-events-none'
                          }`}
                        >
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <div>
                              <span className="text-[9px] font-mono text-purple-400 uppercase">
                                {translations.phaseTitle} {ph.number} • {ph.year}
                              </span>
                              <h4 className="text-xs font-bold text-white font-display mt-0.5">{ph.name}</h4>
                              <p className="text-[10px] text-slate-400 font-mono italic">{ph.location}</p>
                            </div>

                            <span className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase ${
                              isUnlocked 
                                ? hypo?.notes && hypo.notes.length > 5 
                                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                                  : 'bg-yellow-500/5 text-yellow-400 border-yellow-500/15'
                                : 'bg-slate-950 text-slate-600 border-slate-950'
                            }`}>
                              {!isUnlocked ? 'Cifrado' : hypo?.notes && hypo.notes.length > 5 ? 'Documentado' : 'Aguardando'}
                            </span>
                          </div>

                          {isUnlocked ? (
                            <div className="space-y-2">
                              <textarea
                                value={hypo?.notes || ""}
                                onChange={(e) => saveHypothesisNotes(ph.number, e.target.value)}
                                placeholder={translations.notesPlaceholder}
                                className="w-full bg-slate-950 border border-purple-950 rounded p-2.5 text-xs text-slate-200 font-sans focus:outline-none focus:border-yellow-500 min-h-[70px]"
                              />
                              
                              {hypo?.savedClues && hypo.savedClues.length > 0 && (
                                <div className="pt-2 border-t border-purple-950/40 flex flex-wrap gap-1.5 items-center">
                                  <span className="text-[9px] font-mono text-slate-500 uppercase">{translations.savedCluesTitle}</span>
                                  {hypo.savedClues.map((clue, idx) => (
                                    <span key={idx} className="bg-emerald-950/30 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-900/30 font-mono">
                                      {clue}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="p-4 rounded bg-slate-950 text-center text-xs text-slate-600 font-mono">
                              Submeta provas em fases anteriores para habilitar este bloco de notas decolonial.
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </section>

        </main>
      )}

      {/* Decorative footer indicators */}
      <footer id="app-footer" className="bg-slate-950 px-4 py-2 border-t border-purple-900/20 text-[10px] font-mono text-slate-500 flex flex-col sm:flex-row justify-between items-center shrink-0 z-10 relative select-none">
        <div>CONEXÃO TEMPORAL ATIVA COM BENIN / RE RECIFE / NOVA YORK // SATÉLITE DE ACERVO HISTÓRICO</div>
        <div className="flex items-center gap-3 mt-1 sm:mt-0">
          <span className="text-slate-600">PORTA: 3000</span>
          <span className="text-yellow-500/80 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> MAINFRAME ONLINE
          </span>
        </div>
      </footer>
    </div>
  );
}
