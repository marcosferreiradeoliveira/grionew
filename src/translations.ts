export type Language = "pt" | "en" | "fr";

export interface UITranslation {
  appTitle: string;
  appSubtitle: string;
  tagline: string;
  selectAvatar: string;
  introductionTitle: string;
  introductionDesc: string;
  avatarSectionTitle: string;
  decolonialNoteTitle: string;
  decolonialNoteText: string;
  activeResearch: string;
  changeSpecialty: string;
  ancestralSync: string;
  unlockedMsg: string;
  diasporaMapTitle: string;
  mapInstructions: string;
  mainframeLevel: string;
  investigationTitle: string;
  restartPrompt: string;
  resetAvatar: string;
  phaseTitle: string;
  memoryTransmission: string;
  interlocutorLabel: string;
  speakToNpc: string;
  systemLogsTitle: string;
  emptyChat: string;
  interlocutorSelectLabel: string;
  evidencePrepared: string;
  removeEvidence: string;
  inputPlaceholder: string;
  transmit: string;
  libraryTitle: string;
  librarySubtitle: string;
  suggestedDoc: string;
  prepareDoc: string;
  preparedDocBadge: string;
  decolonialContextTitle: string;
  documentAnalysisTitle: string;
  researchDirectiveTitle: string;
  syncingMainframe: string;
  connectingGrio: string;
  errorGrioOffline: string;
  tabsJournal: string;
  tabsClues: string;
  tabsSynthesis: string;
  hypothesisNotebookTitle: string;
  hypothesisNotebookSubtitle: string;
  notesPlaceholder: string;
  saveHypothesisBtn: string;
  phaseUnlocked: string;
  phaseLocked: string;
  savedCluesTitle: string;
  noCluesYet: string;
  languageLabel: string;
  changeSpecialtyConfirm: string;
  evidenceAcpt: string;
  phaseUnlockedLog: string;
  welcomeIntroText: string;
  fallbackMsgOffline: string;
  biographyContextLine: string;
  evidenceAcptLog: string;
}

export const UI_TRANSLATIONS: Record<Language, UITranslation> = {
  pt: {
    appTitle: "Griô AI",
    appSubtitle: "Horizontes da Diáspora",
    tagline: "Horizontes da Diáspora // RPG de Investigação Histórica",
    selectAvatar: "SELECIONE SEU AVATAR",
    introductionTitle: "Griô AI: Horizontes da Diáspora",
    introductionDesc: "Mergulhe em uma investigação poética e cibernética sobre a vida de decolonização de Mohammed Gardo Baquaqua. Hackeie documentos coloniais do século XIX, realize interrogatórios rigorosos e trace caminhos para reconstituir a integridade do passado.",
    avatarSectionTitle: "Conexão Transatlântica // RPG Histórico Decolonial",
    decolonialNoteTitle: "Nota Decolonial:",
    decolonialNoteText: "Este jogo utiliza arquivos e bancos de dados reais (como o acervo Slave Voyages e recortes da Hemeroteca Nacional). Ao jogar, você atua como um decodificador de trajetórias que a história branca e imperialista tentou apagar. Escolha seu avatar e comece em Ouidah, Benin de 1845.",
    activeResearch: "PESQUISA ATIVA",
    changeSpecialty: "Alterar Especialização",
    ancestralSync: "SINTONIA ANCESTRAL",
    unlockedMsg: "Ativo",
    diasporaMapTitle: "Mapa das Rotas da Diáspora",
    mapInstructions: "Clique nos nós para navegar no fluxo temporal",
    mainframeLevel: "Nível do Mainframe",
    investigationTitle: "Investigação Transatlântica",
    restartPrompt: "Deseja realmente trocar de especialização e reiniciar as simulações locais?",
    resetAvatar: "Reiniciar Avatar",
    phaseTitle: "Fase",
    memoryTransmission: "Transmissão de Memória:",
    interlocutorLabel: "INTERLOCUTOR DISPONÍVEL NA ÉPOCA:",
    speakToNpc: "Falar com NPC",
    systemLogsTitle: "MAINFRAME SYSTEM LOGS / TELETIPO DO GRIÔ",
    emptyChat: "Nenhuma transmissão sintonizada neste canal temporário ainda. Carregue o terminal ancestral abaixo.",
    interlocutorSelectLabel: "Interlocutor:",
    evidencePrepared: "PREPARADO PARA INJETAR PROVA:",
    removeEvidence: "REMOVER",
    inputPlaceholder: "Questione Griô AI sobre as pontas soltas...",
    transmit: "Transmitir",
    libraryTitle: "Biblioteca de Evidências Reais",
    librarySubtitle: "Estes são recortes e registros autênticos extraídos dos maiores acervos de memória transatlânticos. Use-os para extrair chaves de decolonização ou interrogar NPCs.",
    suggestedDoc: "Sugestão de Fase",
    prepareDoc: "Injetar como Prova",
    preparedDocBadge: "Incoporado ao Transmissor",
    decolonialContextTitle: "Impacto Decolonial:",
    documentAnalysisTitle: "ANÁLISE DECODIFICADA DECOLONIAL",
    researchDirectiveTitle: "DIRETRIZ DE PESQUISA ATIVA",
    syncingMainframe: "Sincronizando com o Mainframe de",
    connectingGrio: "Griô AI está costurando os retalhos do passado...",
    errorGrioOffline: "O Griô AI está offline. Por favor, adicione sua chave de API (GEMINI_API_KEY) nos Secrets do AI Studio.",
    tabsJournal: "Portal de Interrogatório",
    tabsClues: "Biblioteca de Evidências",
    tabsSynthesis: "Tratado de Hipóteses",
    hypothesisNotebookTitle: "Tratado de Hipóteses Decoloniais",
    hypothesisNotebookSubtitle: "Registre suas teses, percepções e conexões decoloniais para cada fase da rota. Suas notas são armazenadas e fortalecem o sinal espiritual de resistência.",
    notesPlaceholder: "Escreva suas reflexões e conexões críticas aqui sobre as violações coloniais e a resiliência nesta coordenada...",
    saveHypothesisBtn: "Persistir Hipótese",
    phaseUnlocked: "FASE LIBERADA // MEMÓRIA ACESSÍVEL",
    phaseLocked: "ROTA BLOQUEADA",
    savedCluesTitle: "Evidências Injetadas Nesta Fase:",
    noCluesYet: "Nenhuma evidência documental foi injetada ainda nesta coordenada.",
    languageLabel: "Idioma do Mainframe",
    changeSpecialtyConfirm: "Mudar de avatar restaurará o canal de rádio. Continuar?",
    evidenceAcpt: "PROVA ACEITA! Documento decodificado.",
    phaseUnlockedLog: "Nova fase desbloqueada!",
    welcomeIntroText: "Saudações, pesquisador! Eu sou o Griô AI, seu canal de decodificação afrofuturista. Estamos na fase de {phaseName} ({location}). Para interagir directly com a época, selecione o NPC desta fase: {npc} ({role}). Envie dados e jornais históricos como provas ou redija hipóteses críticas!",
    fallbackMsgOffline: "Modo Offline: Usando transmissor reserva local.",
    biographyContextLine: "Autobiografia de Baquaqua é o ato supremo de escrita reversa (escrever a própria história).",
    evidenceAcptLog: "A evidência documental foi aceita e anexada ao dossiê."
  },
  en: {
    appTitle: "Grio AI",
    appSubtitle: "Diaspora Horizons",
    tagline: "Diaspora Horizons // Decolonial Historical Investigation RPG",
    selectAvatar: "SELECT YOUR AVATAR",
    introductionTitle: "Grio AI: Diaspora Horizons",
    introductionDesc: "Immerse yourself in a poetic, cyber-decolonial investigation into the life of Mohammed Gardo Baquaqua. Hack through 19th-century colonial documents, challenge historical NPCs to rigorous interrogations, and plot pathways to stitch back together the integrity of the past.",
    avatarSectionTitle: "Transatlantic Connection // Decolonial Historical RPG",
    decolonialNoteTitle: "Decolonial Note:",
    decolonialNoteText: "This game utilizes authentic historical archives and databases (such as Slave Voyages and Brazilian National Library advertisements). By playing, you act as a decoder of narratives that imperialistic history attempted to silence. Select your avatar and start in Ouidah, Benin, in 1845.",
    activeResearch: "ACTIVE RESEARCH",
    changeSpecialty: "Change Specialization",
    ancestralSync: "ANCESTRAL SYNC",
    unlockedMsg: "Active",
    diasporaMapTitle: "Diaspora Routes Map",
    mapInstructions: "Click on nodes to navigate the temporal flow",
    mainframeLevel: "Mainframe Level",
    investigationTitle: "Transatlantic Quest",
    restartPrompt: "Do you really want to change your avatar specialization and restart local simulations?",
    resetAvatar: "Reset Avatar",
    phaseTitle: "Phase",
    memoryTransmission: "Memory Wave Transmission:",
    interlocutorLabel: "INTERLOCUTOR AVAILABLE IN THIS ERA:",
    speakToNpc: "Speak with NPC",
    systemLogsTitle: "MAINFRAME SYSTEM LOGS / GRIO TELETYPE",
    emptyChat: "No transmission synced to this temporary channel yet. Boot up the ancestral terminal below.",
    interlocutorSelectLabel: "Speaker:",
    evidencePrepared: "EVIDENCE PREPARED FOR INJECTION:",
    removeEvidence: "REMOVE",
    inputPlaceholder: "Challenge Grio AI about the raw loose ends...",
    transmit: "Transmit",
    libraryTitle: "Authentic Library of Evidence",
    librarySubtitle: "These are authentic transcriptions and actual clipping records salvaged from global digital archives. Use them to extract decolonial keys or question NPCs.",
    suggestedDoc: "Suggested for Phase",
    prepareDoc: "Inject as Evidence",
    preparedDocBadge: "Rigged to Transmitter",
    decolonialContextTitle: "Decolonial Impact:",
    documentAnalysisTitle: "DECOLONIAL DECODED ANALYSIS",
    researchDirectiveTitle: "ACTIVE RESEARCH DIRECTIVE",
    syncingMainframe: "Syncing with the Mainframe of",
    connectingGrio: "Grio AI is weaving together the fragments of the past...",
    errorGrioOffline: "Grio AI is offline. Please supply your API key (GEMINI_API_KEY) in the AI Studio environment.",
    tabsJournal: "Interrogations Portal",
    tabsClues: "Evidence Library",
    tabsSynthesis: "Tract of Hypotheses",
    hypothesisNotebookTitle: "Decolonial Hypotheses Tract",
    hypothesisNotebookSubtitle: "Register your thesis, arguments, and critical linkages for each phase. Your entries are persisted and strengthen the spiritual resistance signal.",
    notesPlaceholder: "Type your notes and critical summaries regarding colonial violations and resilient resistance here...",
    saveHypothesisBtn: "Persist Hypothesis",
    phaseUnlocked: "UNLOCKED STAGE // ACCESSIBLE MEMORY",
    phaseLocked: "DIASPORA PATHWAY COLD/LOCKED",
    savedCluesTitle: "Historical Clues Injected Here:",
    noCluesYet: "No documents have been injected as evidence yet under these coordinates.",
    languageLabel: "Mainframe Language",
    changeSpecialtyConfirm: "Changing your avatar will reset your current chat channel. Continue?",
    evidenceAcpt: "EVIDENCE ACCEPTED! Document Decoded.",
    phaseUnlockedLog: "New stage unlocked!",
    welcomeIntroText: "Greetings, researcher! I am Grio AI, your cyber-ancestral decoder. We are currently analyzing the phase of {phaseName} ({location}). To engage directly with the era, select this coordinate's NPC: {npc} ({role}). Transmit historical evidence or write down critical hypotheses!",
    fallbackMsgOffline: "Offline Safe Mode: Utilizing local auxiliary transmitter.",
    biographyContextLine: "Baquaqua's autobiography represents the supreme act of reverse writing (writing one's own history).",
    evidenceAcptLog: "This piece of historical evidence has been accepted and logged."
  },
  fr: {
    appTitle: "Griot AI",
    appSubtitle: "Horizons de la Diaspora",
    tagline: "Horizons de la Diaspora // RPG d'Enquête Historique Décoloniale",
    selectAvatar: "SÉLECTIONNEZ VOTRE AVATAR",
    introductionTitle: "Griot AI: Horizons de la Diaspora",
    introductionDesc: "Plongez dans une enquête poétique et cyber-décoloniale sur le parcours d'émancipation de Mohammed Gardo Baquaqua. Interrogez des documents d'archive du XIXe siècle, affrontez des personnages historiques réticents, et tracez des routes pour restaurer la mémoire collective.",
    avatarSectionTitle: "Connexion Transatlantique // RPG Historique Cyber-Griot",
    decolonialNoteTitle: "Perspective Décoloniale:",
    decolonialNoteText: "Ce jeu est basé sur des archives réelles (comme la base Slave Voyages et des avis de recherche de la presse brésilienne). Vous agissez comme un décodeur de souvenirs étouffés par l'histoire impériale. Choisissez votre avatar et commencez à Ouidah, au Bénin, en 1845.",
    activeResearch: "RECHERCHE ACTIVE",
    changeSpecialty: "Changer de Spécialité",
    ancestralSync: "SYNCHRONISATION ANCESTRALE",
    unlockedMsg: "Actif",
    diasporaMapTitle: "Carte des Itinéraires de la Diaspora",
    mapInstructions: "Cliquez sur les nœuds pour naviguer le flux temporel",
    mainframeLevel: "Niveau du Serveur",
    investigationTitle: "Quête Transatlantique",
    restartPrompt: "Voulez-vous vraiment changer d'avatar et réinitialiser les simulations locales ?",
    resetAvatar: "Réinitialiser l'Avatar",
    phaseTitle: "Étape",
    memoryTransmission: "Onde de Transmission de Mémoire:",
    interlocutorLabel: "INTERLOCUTEUR DISPONIBLE À CETTE ÉPOQUE:",
    speakToNpc: "Parler au Personnage",
    systemLogsTitle: "JOURNAL SYSTEME DU MAINFRAME / TELETYPE GRIOT",
    emptyChat: "Aucune transmission synchronisée sur ce canal. Démarrez le terminal ancestral ci-dessous.",
    interlocutorSelectLabel: "Interlocuteur:",
    evidencePrepared: "INDICE PRÉPARÉ POUR INJECTION:",
    removeEvidence: "RETIRER",
    inputPlaceholder: "Interrogez Griot AI sur les secrets de cette époque...",
    transmit: "Transmettre",
    libraryTitle: "Bibliothèque d'Archives Réelles",
    librarySubtitle: "Ces transcriptions et coupures de presse authentiques proviennent de bases de données internationales. Utilisez-les comme preuve ou pour déstabiliser les NPCs.",
    suggestedDoc: "Incontournable pour cette Étape",
    prepareDoc: "Injecter comme Preuve",
    preparedDocBadge: "Incorpore au Transmetteur",
    decolonialContextTitle: "Impact Décolonial:",
    documentAnalysisTitle: "ANALYSE DECODÉE DÉCOLONIALE",
    researchDirectiveTitle: "OBJECTIF DE RECHERCHE ACTIF",
    syncingMainframe: "Connexion au serveur de",
    connectingGrio: "Griot AI tisse les fils mémoriels du passé...",
    errorGrioOffline: "Griot AI est hors ligne. Veuillez ajouter votre clé API (GEMINI_API_KEY) dans les paramètres d'AI Studio.",
    tabsJournal: "Portail d'Interrogatoire",
    tabsClues: "Bibliothèque d'Archives",
    tabsSynthesis: "Recueil d'Hypothèses",
    hypothesisNotebookTitle: "Recueil d'Hypothèses Décoloniales",
    hypothesisNotebookSubtitle: "Saisissez vos réflexions critiques et analyses géopolitiques pour chaque étape. Vos notes fortifient l'onde de résistance spirituelle.",
    notesPlaceholder: "Rédigez vos analyses sur les violations coloniales et les mécanismes de résilience observés...",
    saveHypothesisBtn: "Sauvegarder l'Hypothèse",
    phaseUnlocked: "ETAPE ACCESSIBLE // SOUVENIR DÉCHIFRÉ",
    phaseLocked: "ITINÉRAIRE ENCORE SCELLÉ",
    savedCluesTitle: "Preuves Historiques Injectées:",
    noCluesYet: "Aucune preuve documentaire n'a été injectée à cette coordonnée.",
    languageLabel: "Langue du Mainframe",
    changeSpecialtyConfirm: "Changer de spécialité réinitialisera ce canal de discussion. Continuer ?",
    evidenceAcpt: "INDICE ACCEPTÉ! Document Décodé.",
    phaseUnlockedLog: "Nouvelle étape déverrouillée!",
    welcomeIntroText: "Salutations, chercheur! Je suis Griot AI, votre décodeur cyber-ancestral. Analyse en cours sur {phaseName} ({location}). Pour dialoguer directement avec l'époque, sélectionnez le NPC local: {npc} ({role}). Envoyez des archives ou formulez des hypothèses!",
    fallbackMsgOffline: "Mode Hors-ligne Sécurisé: Utilisation du transmetteur local.",
    biographyContextLine: "L'autobiographie de Baquaqua représente l'acte suprême de contre-écriture de sa propre destinée.",
    evidenceAcptLog: "Cette archive historique a été injectée et enregistrée dans nos dossiers."
  }
};

// MULTILINGUAL AVATAR DATA
export interface translatedAvatar {
  id: "linguist" | "archivist" | "strategist";
  title: string;
  subtitle: string;
  description: string;
  perks: string[];
  energyBonus: string;
}

export const MULTILINGUAL_AVATARS: Record<Language, translatedAvatar[]> = {
  pt: [
    {
      id: "linguist",
      title: "Linguista Quilombola",
      subtitle: "Especialista em Decodificação Textual & Dialetos",
      description: "Focado na decodificação de grafias antigas, cartas nobres e dialetos transatlânticos (Árabe, Iorubá, Ge'ez). Seu olhar revela as resistências intelectuais ocultas nos acervos coloniais.",
      perks: [
        "Visibilidade instantânea de cicatrizes linguísticas em árabe",
        "Habilidade especial para decifrar caligrafia e assinaturas rústicas",
        "Bônus de decodificação de +25% de sintonia ao enviar evidências textuais"
      ],
      energyBonus: "Recuperação célere ao dialogar com missionários e intelectuais."
    },
    {
      id: "archivist",
      title: "Arquivista Indígena",
      subtitle: "Rastreador de Registros Criminais & Manifestos",
      description: "Especialista em farejar contrabando e rotas escondidas nos livros aduaneiros imperiais, cartórios criminais, e certidões falsificadas pelas companhias comerciais europeias.",
      perks: [
        "Identifica lacunas criminais em manifestos cargueiros e registros navais",
        "Decodifica carimbos de portos ilegais ocultas nos bancos Slave Voyages",
        "Revela pistas secretas adicionais no intercâmbio com capitães e donos de terras"
      ],
      energyBonus: "Decodificação aprimorada do banco Slave Voyages (+30% sincronia)."
    },
    {
      id: "strategist",
      title: "Estrategista Mestiço",
      subtitle: "Mapeador de Rotas Geográficas & Conexões",
      description: "Focado nas redes sociais de fuga, geolocalização de quilombos e conexão de portos. Ele enxerga o mapa da Diáspora não como fronteiras, mas como caminhos fluidos de rebelião.",
      perks: [
        "Visualização das coordenadas geográficas ultra fluida",
        "Conectividade instantânea com a rede secreta de abolicionistas americanos (Underground Railroad)",
        "Unlocks adicionais automáticos ao mudar rotas no Mapa da Diáspora"
      ],
      energyBonus: "Alta resistência temporal contra as ameaças de capitães e senhores."
    }
  ],
  en: [
    {
      id: "linguist",
      title: "Quilombola Linguist",
      subtitle: "Textual Decoding & Dialect Specialist",
      description: "Focused on decoding antique spellings, letters of high class, and transatlantic dialects (Arabic, Yoruba, Ge'ez). Their analysis reveals intellectual resistance hidden in colonial archives.",
      perks: [
        "Instant detection of Arabic script and linguistic details",
        "Special skill to analyze rustic signatures and cursive notes",
        "Decolonial decoding bonus (+25% sync) when transmitting textual evidence"
      ],
      energyBonus: "Faster recovery when conversing with educators and intellectuals."
    },
    {
      id: "archivist",
      title: "Indigenous Archivist",
      subtitle: "Criminal Registers & Manifest Tracker",
      description: "Specialist in sniffing out contraband and clandestine paths within colonial port registers, slave voyages files, criminal records, and falsified commercial bills.",
      perks: [
        "Highlights logical gaps in cargo manifests and sea logs",
        "Identifies custom forgery and rogue registries in Slave Voyages records",
        "Triggers secret clue disclosures when dialoguing with shipmates or barons"
      ],
      energyBonus: "Optimized database querying on Slave Voyages archives (+30% sync speed)."
    },
    {
      id: "strategist",
      title: "Mestizo Strategist",
      subtitle: "Geographical Route & Social Network Mapper",
      description: "Tracing fugitive escape networks, quilombo coordinates, and port links. Sees the Diaspora map as a fluid terrain of networks rather than rigid national limits.",
      perks: [
        "Sleek and hyper-responsive geographic grid rendering",
        "Instant links with the radical abolitionist Underground Railroad networks",
        "Automatic auxiliary coordinate unlocks when rerouting the Diaspora Map"
      ],
      energyBonus: "High cognitive buffer against standard master threats and intimidation."
    }
  ],
  fr: [
    {
      id: "linguist",
      title: "Linguiste Quilombola",
      subtitle: "Décodeur de Textes Rares & Dialectes",
      description: "Spécialisé dans le décryptage d'écritures anciennes et de dialectes transatlantiques (arabe, yoruba, guèze). Révèle la résistance intellectuelle dissimulée sous la plume des colons.",
      perks: [
        "Repérage instantané d'annotations arabes et d'indices lettrés",
        "Aptitude à décrypter les signatures complexes et registres manuscrits",
        "Bonus de décodage (+25% de synchronisation) lors de l'injection de textes"
      ],
      energyBonus: "Élocution fluide face aux interlocuteurs religieux et abolitionnistes."
    },
    {
      id: "archivist",
      title: "Archiviste Autochtone",
      subtitle: "Chasseur de Manifestes & Registres Criminels",
      description: "Spécialisé dans le repérage de contrebande et d'itinéraires déguisés au sein des douanes du Roi, des archives judiciaires et des faux-semblants commerciaux nègres.",
      perks: [
        "Détecte les contradictions évidentes dans les manifestes de fret",
        "Déchiffre les escales illégales maquillées dans les bases de données",
        "Déverrouille des pièces secrètes lors d'antagonismes avec les capitaines"
      ],
      energyBonus: "Efficacité accrue lors de la fouille de la base Slave Voyages (+30%)."
    },
    {
      id: "strategist",
      title: "Stratège Métis",
      subtitle: "Cartographe des Zones Libres & Réseaux",
      description: "Expert en géolocalisation des campements libres (quilombos) et réseaux de fuite. Conçoit l'océan non comme une barrière, mais comme un réseau fluide d'émancipation.",
      perks: [
        "Fluidité de navigation améliorée sur le cadran géospatial",
        "Canal direct avec le réseau d'évasion radical (Underground Railroad)",
        "Points de mémoire débloqués automatiquement lors des sauts de phase"
      ],
      energyBonus: "Garde mentale robuste face aux pressions exercées par les oligarques."
    }
  ]
};

// MULTILINGUAL PHASES
export interface translatedPhase {
  number: number;
  name: string;
  location: string;
  year: string;
  coordinates: { x: number; y: number };
  brief: string;
  detailedHistory: string;
  npc: string;
  npcRole: string;
  keyDocumentId: string;
}

export const MULTILINGUAL_PHASES: Record<Language, translatedPhase[]> = {
  pt: [
    {
      number: 1,
      name: "Captura em Ouidah",
      location: "Ouidah, Benin (antigo Reino de Daomé)",
      year: "1845",
      coordinates: { x: 44, y: 55 },
      brief: "Mohammed, nascido em Djougou, é capturado e enviado para o porto de Ouidah, de onde é embarcado à força rumo ao Brasil.",
      detailedHistory: "Mohammed Gardo Baquaqua nasceu em Djougou (atual Benin), em uma família muçulmana influente. Ele foi treinado nas escritas árabes e no comércio local. Após ser aprisionado em meio a rivalidades locais, ele foi vendido no porto de Ouidah (conhecido pelo tráfico de escravizados) para traficantes de navios negreiros brasileiros. Sob o comando de um capitão cruel, ele iniciou a terrível travessia do Atlântico.",
      npc: "Kpohinto (Guarda Local)",
      npcRole: "Um intermediário atormentado no posto avançado de Ouidah, que decide revelar informações se você provar conhecer as rotas proibidas de fuga.",
      keyDocumentId: "voyage_31442"
    },
    {
      number: 2,
      name: "Cativeiro no Recife e Rio",
      location: "Recife e Rio de Janeiro, Brasil",
      year: "1845 - 1847",
      coordinates: { x: 30, y: 72 },
      brief: "Sua chegada ao Brasil imperial. Vendido a um padeiro violento, Baquaqua é forçado a trabalhos exaustivos e planeja sua resistência.",
      detailedHistory: "Ao chegar ao porto brasileiro de Recife, Baquaqua foi examinado e comprado por um proprietário luso-brasileiro de padarias. Suas memórias descrevem punições severas, o fardo de carregar pedras para as obras públicas, e sua desesperada tentativa de escapar pulando de um barco no porto. Posteriormente, foi enviado para o Rio de Janeiro, onde o comércio de café e escravidão imperava sob o amparo da corte de Dom Pedro II.",
      npc: "Senhor Clemente Coelho",
      npcRole: "O proprietário luso-brasileiro da padaria no Recife. Desconfiado e ríspido, ele nega abusos e quer comprovar suas posses financeiras ou registros de fugitivos.",
      keyDocumentId: "runaway_adv"
    },
    {
      number: 3,
      name: "A Barca Lembrança",
      location: "Oceano Atlântico (Rota Rio - Nova York)",
      year: "1847",
      coordinates: { x: 23, y: 45 },
      brief: "Baquaqua é levado a bordo da escuna 'Barca Lembrança'. O navio transporta café e escravizados ocultos sob a fachada de comércio legítimo.",
      detailedHistory: "Em 1847, para saldar dívidas de Clemente Coelho, Baquaqua é levado a bordo da escuna brasileira 'Lembrança' (ou Barca Lembrança), comandada pelo capitão Souza Neto, carregada com sacas de café de alta qualidade destinadas ao Porto de Nova York. A bordo, Baquaqua atua como marinheiro e cozinheiro, sem saber que sua aproximação de terras livres mudaria sua sina.",
      npc: "Piloto Souza Neto",
      npcRole: "Oficial da Barca Lembrança encarregado dos registros e manifesto. Ele desconfia de espiões abolicionistas e quer ver o manifesto de carga completo antes de falar.",
      keyDocumentId: "ship_manifest"
    },
    {
      number: 4,
      name: "Acolhida no Haiti",
      location: "Port-au-Prince, Haiti",
      year: "1847 - 1849",
      coordinates: { x: 18, y: 35 },
      brief: "Após escapar do navio em Nova York com ajuda de abolicionistas, ele é enviado ao Haiti para se proteger das leis americanas de extradição.",
      detailedHistory: "No porto de Nova York, abolicionistas do New York Vigilance Committee ajudam Baquaqua a escapar da Barca Lembrança. Para evitar que fosse capturado e extraditado de volta à escravidão pelas leis dos EUA, ele é clandestinamente colocado a bordo de um navio rústico rumo ao Haiti. Lá, ele vive a liberdade na primeira república negra autoproclamada do mundo, sendo acolhido por missionários batistas.",
      npc: "Reverendo William Judd",
      npcRole: "Missionário batista defensor dos direitos humanos em Port-au-Prince. Ele busca registros oficiais do Haiti para certificar a proteção jurídica oferecida ao liberto.",
      keyDocumentId: "baptism_report"
    },
    {
      number: 5,
      name: "O College em McGrawville",
      location: "McGrawville, Nova York & Canadá",
      year: "1850 - 1854",
      coordinates: { x: 12, y: 22 },
      brief: "Retornando aos EUA, ele ingressa no New York Central College e dita sua autobiografia em Detroit/Canadá para lutar pela decodificação do passado.",
      detailedHistory: "Baquaqua retorna aos EUA e ingressa no lendário New York Central College em McGrawville, estabelecimento abolicionista que aceitava estudantes de todas as etnias. Patrocinado pelo milionário filantropo Gerrit Smith, aprende inglês fluente e escrita. Em 1854, em parceria com o editor Samuel Moore, escreve e publica sua biografia histórica em Detroit (EUA), antes de cruzar a fronteira para o Canadá.",
      npc: "Gerrit Smith",
      npcRole: "Político, magnata e abolicionista radical em McGrawville. Ele exige cartas de recomendação ou o manuscrito biográfico para validar seus subsídios escolares.",
      keyDocumentId: "biography_excerpt"
    },
    {
      number: 6,
      name: "Liverpool e o Ativismo",
      location: "Liverpool, Inglaterra",
      year: "1855",
      coordinates: { x: 48, y: 15 },
      brief: "Baquaqua viaja à Inglaterra para obter recursos e organizar um plano coletivo de retorno ao continente africano como homem livre.",
      detailedHistory: "Querendo desesperadamente voltar para sua terra natal, Baquaqua cruza o Atlântico novamente em 1855, dessa vez para Liverpool, epicentro do comitê de combate à escravidão britânico. Ele se reúne com ativistas e clérigos, palestrando contra os crimes do tráfico ilegal e buscando apoios navais para fretar expedições de retorno de libertos ao Golfo da Guiné.",
      npc: "John Cropper",
      npcRole: "Comerciante abolicionista inglês em Liverpool. Muito formal, ele exige provas das relações de Baquaqua com as igrejas abolicionistas antes de financiar a travessia.",
      keyDocumentId: "british_reporter"
    },
    {
      number: 7,
      name: "Retorno Ancestral",
      location: "Djougou, Benin (Ponto Inicial)",
      year: "1857+",
      coordinates: { x: 44, y: 55 },
      brief: "As pegadas físicas de Baquaqua desaparecem nos arquivos após 1857. O RPG propõe o encerramento do ciclo temporal: a decolonização permanente.",
      detailedHistory: "Em 1857, os registros formais de Baquaqua nos arquivos abolicionistas ocidentais cessam. Historiadores assumem que ele conseguiu sua maior aspiração: regressar ao continente africano ou viver como um conselheiro livre e soberano. O Griô AI propõe que a investigação reescreva o desfecho espiritual, conectando gerações passadas e futuras sob o mesmo fluxo de resistência cibernética.",
      npc: "O Eco Ancestral",
      npcRole: "Uma manifestação das memórias combinadas de todos os escravizados e combatentes da liberdade. Ele exige que você apresente o Dossier Completo de Hipóteses compilado por você.",
      keyDocumentId: "voyage_31442"
    }
  ],
  en: [
    {
      number: 1,
      name: "Capture in Ouidah",
      location: "Ouidah, Benin (old Kingdom of Dahomey)",
      year: "1845",
      coordinates: { x: 44, y: 55 },
      brief: "Mohammed, born in Djougou, is captured and sent to the port of Ouidah, where he is forced into a slave ship departing for Brazil.",
      detailedHistory: "Mohammed Gardo Baquaqua was born in Djougou (modern Benin) inside an influential Muslim family. He studied Arabic texts and local trading. Having been captured during regional friction, he was brought down to Ouidah and sold to Brazilian slave traders. Led by their notorious captain, his painful middle passage across the Atlantic began.",
      npc: "Kpohinto (Local Guard)",
      npcRole: "A high-strung guard at the Ouidah outpost, who will let loose and deliver local details if you prove you understand clandestine escape loops.",
      keyDocumentId: "voyage_31442"
    },
    {
      number: 2,
      name: "Captivity in Recife & Rio",
      location: "Recife & Rio de Janeiro, Imperial Brazil",
      year: "1845 - 1847",
      coordinates: { x: 30, y: 72 },
      brief: "His landing in imperial Brazil. Sold to a brutal baker, Baquaqua suffers under exhausting manual labor and plans active resistance.",
      detailedHistory: "Landing in Brazil at Recife port, Baquaqua was immediately evaluated and purchased by a Luso-Brazilian bakery owner. His memoirs describe highly severe corporal abuse, carrying rocks for public works, and a desperate port suicide/escape attempt. Eventually, he was transferred down to Rio, the epicenter of Brazilian coffee trade under Dom Pedro II.",
      npc: "Senhor Clemente Coelho",
      npcRole: "The Luso-Brazilian bakery owner. Suspicious blockhead, he denies any wrongdoing and questions your credentials before talking.",
      keyDocumentId: "runaway_adv"
    },
    {
      number: 3,
      name: "The Brig Lembranca",
      location: "Atlantic Ocean (Rio - New York route)",
      year: "1847",
      coordinates: { x: 23, y: 45 },
      brief: "Baquaqua is drafted aboard the brazilian brig 'Lembrança', disguised under legitimate cargo but carrying unfree slave labor.",
      detailedHistory: "In 1847, to pay down Clemente Coelho's outstanding debts, Baquaqua of unfree status is loaded onto the Brazilian brig 'Lembrança' (or Lembranca), headed by captain Souza Neto, hauling fine coffee beans. He serves as cabin hand and cook, unaware that sailing north near non-slaveholding soil will seal his fate.",
      npc: "Mate Souza Neto",
      npcRole: "Chief officer of the Lembranca. Terrified of abolitionist infiltration, he demands to inspect your certified cargo manifest.",
      keyDocumentId: "ship_manifest"
    },
    {
      number: 4,
      name: "Shelter in Haiti",
      location: "Port-au-Prince, Haiti",
      year: "1847 - 1849",
      coordinates: { x: 18, y: 35 },
      brief: "Fleeing unfree status at NY Harbor with NY Vigilance help, he is sent to Haiti for absolute protection against search and seizure.",
      detailedHistory: "In New York Harbor, agents of the NY Vigilance Committee quickly smuggle Baquaqua off the Lembrança. To keep him out of the net of United States federal Fugitive Slave laws, he is booked onto a simple boat towards Haiti. There, he breathes the air of the first independent Black republic, befriended by Baptist missionaries.",
      npc: "Reverend William Judd",
      npcRole: "Dedicated Baptist missionary in Port-au-Prince. He is examining Haitian legal codes to guarantee civil protection for the free client.",
      keyDocumentId: "baptism_report"
    },
    {
      number: 5,
      name: "Central College McGrawville",
      location: "McGrawville, New York & Canada",
      year: "1850 - 1854",
      coordinates: { x: 12, y: 22 },
      brief: "Returning to US soil, he enrolls in NY Central College and composes his supreme autobiography in Detroit/Canada.",
      detailedHistory: "Baquaqua returns to the northeastern US, registering at the famed NY Central College in McGrawville, an anti-slavery school welcoming all ethnicities. Sponsored by radical philanthropist Gerrit Smith, he gains written English fluency. In 1854, with editor Samuel Moore, he prints his biography in Detroit, shortly before crossing to Canada.",
      npc: "Gerrit Smith",
      npcRole: "Radical abolitionist millionaire and publisher. He demands valid references or biographical transcripts before offering educational support.",
      keyDocumentId: "biography_excerpt"
    },
    {
      number: 6,
      name: "Liverpool Activism",
      location: "Liverpool, England",
      year: "1855",
      coordinates: { x: 48, y: 15 },
      brief: "Sailing to Britain, Baquaqua lectures on colonial slaveholder abuse and tries to organize return vessels to West Africa.",
      detailedHistory: "Eager to return to his homeland, Baquaqua crosses the ocean again to Liverpool, a cornerstone of British anti-slavery circles. He lectures Protestant congregations on Brazilian plantation abuses, gaining allies in order to assemble a free return passage to equatorial Africa.",
      npc: "John Cropper",
      npcRole: "Sober British merchant and abolitionist in Liverpool. Stiff-collared, he requires documented ties with local protestant bodies before sharing funds.",
      keyDocumentId: "british_reporter"
    },
    {
      number: 7,
      name: "Ancestral Horizon",
      location: "Djougou, Benin (Point of Origin)",
      year: "1857+",
      coordinates: { x: 44, y: 55 },
      brief: "Baquaqua's path fades from western registries. Our RPG invites you to seal the temporal loop: permanent spiritual liberation.",
      detailedHistory: "Around 1857, Gardo Baquaqua's name is mentioned for the last time in British and American anti-slavery letters. Historians assume he completed his ultimate aspiration: stepping back onto West African soil as a fully sovereign agent. Grio AI asks you compile your notes to materialize our ancestral future.",
      npc: "The Ancestral Echo",
      npcRole: "The harmonic consciousness of all unfree resistance veterans. Demands your finalized decolonial dossier prior to temporal departure.",
      keyDocumentId: "voyage_31442"
    }
  ],
  fr: [
    {
      number: 1,
      name: "Capturation à Ouidah",
      location: "Ouidah, Bénin (ancien Royaume du Dahomey)",
      year: "1845",
      coordinates: { x: 44, y: 55 },
      brief: "Mohammed, né à Djougou, est capturé et envoyé au port de Ouidah, où il est embarqué de force sur un négrier brésilien.",
      detailedHistory: "Mohammed Gardo Baquaqua est né à Djougou (actuel Bénin), au sein d'une famille musulmane importante. Instruit en écriture arabe et en commerce, il est fait captif suite à des guerres régionales, puis vendu à Ouidah à des négriers clandestins brésiliens direcion le port de Recife.",
      npc: "Kpohinto (Garde local)",
      npcRole: "Intermédiaire anxieux au fort de Ouidah. Révélera les détails de l'embarquement si vous démontrez votre maîtrise des chemins de discrétion.",
      keyDocumentId: "voyage_31442"
    },
    {
      number: 2,
      name: "Captivité à Recife & Rio",
      location: "Recife et Rio de Janeiro, Brésil Impérial",
      year: "1845 - 1847",
      coordinates: { x: 30, y: 72 },
      brief: "Son arrivée au Brésil esclavagiste. Vendu à un boulanger féroce, Baquaqua endure de rudes supplices et prépare sa rébellion.",
      detailedHistory: "Acheté à Recife par un boulanger violent, Baquaqua subit des traitements dégradants et tente une évasion héroïque par les eaux du port. Plus tard, il est transféré à Rio de Janeiro, capitale impériale dominée par l'oligarchie du café et de l'esclavage criminel.",
      npc: "Senhor Clemente Coelho",
      npcRole: "Le propriétaire boulanger de Recife. Pris d'orgueil colonial, il récuse toute violence et exige vos documents de caution.",
      keyDocumentId: "runaway_adv"
    },
    {
      number: 3,
      name: "La goélette Lembranca",
      location: "Océan Atlantique (Route Rio - New York)",
      year: "1847",
      coordinates: { x: 23, y: 45 },
      brief: "Baquaqua est enrôlé de force à bord de la goélette 'Lembrança', transportant du café brésilien vers le port de New York.",
      detailedHistory: "En 1847, pour éponger les dettes de son maître, Baquaqua est placé sur le navire Lembrança assurant le commerce de café. Sous l'autorité du capitaine Souza Neto, il prend conscience qu'approcher les états du Nord de l'Amérique de nord pourrait lui ouvrir les portes du salut.",
      npc: "Capitaine Souza Neto",
      npcRole: "Officier du navire Lembrança. Redoutant l'infiltration d'abolitionnistes, il exige la vérification minutieuse des sceaux de douane.",
      keyDocumentId: "ship_manifest"
    },
    {
      number: 4,
      name: "Refuge en Haïti",
      location: "Port-au-Prince, Haïti",
      year: "1847 - 1849",
      coordinates: { x: 18, y: 35 },
      brief: "Échappé du navire à New York avec l'aide des militants, il gagne Haïti pour se soustraire aux limiers de la justice américaine.",
      detailedHistory: "Récupéré au port de Manhattan par le comité de vigilance abolitionniste, Baquaqua est envoyé d'urgence en Haïti. Dans la première république noire libre du globe, il respire enfin un air exempt de servitude et est accueilli par des missionnaires.",
      npc: "Révérend William Judd",
      npcRole: "Missionnaire baptiste à Port-au-Prince. Examine la souveraineté haïtienne pour valider la protection légale de son pupille.",
      keyDocumentId: "baptism_report"
    },
    {
      number: 5,
      name: "Le Collège à McGrawville",
      location: "McGrawville, New York & Canada",
      year: "1850 - 1854",
      coordinates: { x: 12, y: 22 },
      brief: "De retour sur le sol américain, il se forme au New York Central College et dicte sa célèbre biographie à Detroit.",
      detailedHistory: "Subventionné par le philanthrope Gerrit Smith, Baquaqua étudie au New York Central College, lieu d'inclusion ethnique pionnier. En 1854, il publie sa biographie historique à Détroit et prépare de manière souveraine son voyage vers l'Europe.",
      npc: "Gerrit Smith",
      npcRole: "Philanthrope radical et intellectuel américain. Exige des lettres de parrainage scolaire formelles avant d'allouer sa bourse.",
      keyDocumentId: "biography_excerpt"
    },
    {
      number: 6,
      name: "L'activisme à Liverpool",
      location: "Liverpool, Angleterre",
      year: "1855",
      coordinates: { x: 48, y: 15 },
      brief: "Baquaqua gagne l'Angleterre, y donne des conférences poignantes et tente d'affréter des bateaux de retour vers le Bénin.",
      detailedHistory: "Afin de retrouver l'Afrique, Baquaqua se rend chez les abolitionnistes britanniques à Liverpool. Il parcourt les assemblées chrétiennes pour relater la brutalité de la traite clandestine brésilienne et lever des fonds de rapatriement.",
      npc: "John Cropper",
      npcRole: "Négociant et mécène abolitionniste à Liverpool. Exige des lettres de mission de vos soutiens ecclésiastiques locaux.",
      keyDocumentId: "british_reporter"
    },
    {
      number: 7,
      name: "Le Retour Ancestral",
      location: "Djougou, Bénin (Pore de départ)",
      year: "1857+",
      coordinates: { x: 44, y: 55 },
      brief: "La trace écrite de Baquaqua s'estompe. Griot AI vous invite à fermer la boucle historique : la rédemption souveraine du passé.",
      detailedHistory: "Vers 1857, le nom de Mohammed Baquaqua disparaît des fonds archivistiques anglais. Les historiens postulent qu'il parvint à regagner sa terre natale ou à vivre souverain. Griot AI vous confie la tâche de parachever son odyssée décoloniale.",
      npc: "L'Écho Ancestral",
      npcRole: "Conscience unifiée de tous les héros invisibles du triangle négrier. Exige la présentation de votre thèse compilée.",
      keyDocumentId: "voyage_31442"
    }
  ]
};

// MULTILINGUAL HISTORICAL DOCUMENTS
export interface translatedDocument {
  id: string;
  title: string;
  source: string;
  year: string;
  description: string;
  content: string;
  decolonialContext: string;
}

export const MULTILINGUAL_DOCUMENTS: Record<Language, translatedDocument[]> = {
  pt: [
    {
      id: "voyage_31442",
      title: "Slave Voyages Registro #31442 (Ano 1845)",
      source: "Banco de Acervos Slave Voyages Database",
      year: "1845",
      description: "Registro oficial da travessia clandestina do navio negreiro que embarcou cativos em Ouidah sob a vigilância das marinhas imperial e britânica.",
      content: "TRANSCRIPTION: Vessel name: Fortunato. Master: Joaquim Freitas. Boarding port: Ouidah (Dahomey). Destination: Rio de Janeiro. Slaves embarked: 382. Mortality rate on board: 18%. Enslavement illegal under treaties of 1831 but active via illicit custom house payoffs.",
      decolonialContext: "Documento oficial que comprova como o comércio de escravizados no Brasil continuou ilegalmente mesmo após os tratados formais de abolição. Mostra as vidas humanas convertidas em números de catalogação aduaneira pelos traficantes de homens."
    },
    {
      id: "runaway_adv",
      title: "Anúncio do Diário de Pernambuco (Novembro, 1845)",
      source: "Hemeroteca Nacional do Brasil - Rio de Janeiro",
      year: "1845",
      description: "Publicidade buscando capturar escravizado fugitivo que corresponde perfeitamente ao ofício de confeiteiro/padeiro relatado nas memórias de Baquaqua.",
      content: "ANÚNCIO: Fugiu no dia 15 do corrente, das padarias de Clemente Coelho no Recife, um moleque de nação africana, de nome presumido Mohammed, fala pouca língua do país, sabe escrever em caracteres arábicos estranhos, com cicatrizes rituais no corpo e dentes limados. Gratifica-se generosamente a quem o prender.",
      decolonialContext: "Os anúncios de jornais da época revelam os traços rituais de dignidade que os negros africanos mantinham intactos, como cicatrizes tradicionais e saberes acadêmicos (saber ler/escrever em árabe), vistos erroneamente pelos colonialistas portugueses como 'estranhos'."
    },
    {
      id: "ship_manifest",
      title: "Manifesto Aduaneiro da Barca Lembrança (1847)",
      source: "Arquivos do Porto de Nova York",
      year: "1847",
      description: "Carga lícita declarada: Café e Couro brasileiro. O navio trazia sutilmente o jovem africano 'Mahommah' como ajudante não-livre da tripulação comercial luso-brasileira.",
      content: "LOG: Brig Lembrança, originating from Rio de Janeiro to New York. Master: Souza Neto. Cargo: 1,500 sacks of gourmet Brazilian coffee beans, 200 hides. Crew roster includes cabin boy 'Mahommah' (subject of Clemente Coelho, Brazil) acting under legal bond of labor.",
      decolonialContext: "Mostra como o capitalismo global, centrado no comércio de matérias-primas (café), usava brechas na lei americana para manter pessoas escravizadas sob disfarces contratuais temporários enquanto os navios atracavam nos portos do norte dos EUA."
    },
    {
      id: "baptism_report",
      title: "Relato da Baptist Free Mission Magazine (1848)",
      source: "University of Rochester - Rare Books & Special Collections",
      year: "1848",
      description: "Documentação da chegada de emergência de Baquaqua a Port-au-Prince para salvá-lo da aplicação da severa Lei do Escravizado Fugitivo nos EUA.",
      content: "REPORT: Our brother in faith, Mahommah Gardo Baquaqua, who escaped the Brazilian brig Lembrança with aid from the New York Vigilance Committee, has arrived safely under the auspices of Rev. William Judd in Haiti. In this Republic of free souls, he enjoys the clean air of freedom, away from the claws of southern slavehunters.",
      decolonialContext: "O Haiti de Baquaqua era um símbolo mundial de emancipação radical. Sendo a primeira colônia livre vitoriosa liderada por negros no world moderno, servia como refúgio sagrado para fugitivos dos impérios europeus e norte-americanos."
    },
    {
      id: "biography_excerpt",
      title: "Autobiografia de Mahommah G. Baquaqua - Cap. V (1854)",
      source: "Biblioteca Pública de Detroit / Samuel Moore Press",
      year: "1854",
      description: "O livro definitivo escrito e ditado pelo herói. O único manuscrito impresso detalhando a biografia de um africano muçulmano que residiu no Brasil imperial.",
      content: "EXCERPT: 'My parents were strict Muslims in Djougou... No one who has not experienced the yoke of slavery can tell how sweet a draught is liberty... In McGrawville, under the aid of Gerrit Smith and NY Central College, my mind has expand. I am preparing to return to my beloved Africa to build school houses and tell our truth.'",
      decolonialContext: "A própria autobiografia de Baquaqua é o ato supremo de escrita reversa (escrever a própria história). Ao tomar o controle da caneta na língua do colonizador, ele desafia a desumanização eurocêntrica e estabelece a autoria intelectual negra."
    },
    {
      id: "british_reporter",
      title: "British & Foreign Anti-Slavery Society Report (1856)",
      source: "British Library - London Historical Archives",
      year: "1856",
      description: "Cartas e artigos em jornais de Liverpool atestando o ativismo de Baquaqua visando recolher donativos ingleses para regressar a Benin.",
      content: "CORRESPONDENCE: G. Baquaqua has addressed numerous congregations in Liverpool and Manchester, describing the horrors of Portuguese/Brazilian coffee slavery. He is persistent in collecting enough support to sail forward in an African colonization attempt of educational and religious reform, reclaiming West African grounds.",
      decolonialContext: "Representa a perseverança incansável de Baquaqua. Sua viagem à Europa foi financiada puramente por seu trabalho e contatos políticos, demonstrando que os sujeitos negros eram sujeitos autônomos, viajando internacionalmente para lutar por decolonização."
    }
  ],
  en: [
    {
      id: "voyage_31442",
      title: "Slave Voyages Record #31442 (Year 1845)",
      source: "Slave Voyages Joint Database",
      year: "1845",
      description: "Official registration papers of the unfree illegal transit of the ship departing Ouidah monitored closely by the Atlantic naval patrols.",
      content: "TRANSCRIPTION: Vessel name: Fortunato. Master: Joaquim Freitas. Boarding port: Ouidah (Dahomey). Destination: Rio de Janeiro. Slaves embarked: 382. Mortality rate on board: 18%. Enslavement illegal under treaties of 1831 but active via illicit custom house payoffs.",
      decolonialContext: "Concrete record detailing how illegal human trade operated inside imperial Brazil, through bribery and shadow networks despite signed international treaties."
    },
    {
      id: "runaway_adv",
      title: "Runaway Advertisement - Diario de Pernambuco (1845)",
      source: "Brazilian National Library / Digital Newspaper Repo",
      year: "1845",
      description: "Search reward bulletin seeking the recapture of a baker that accurately matches Baquaqua's described trade and markings.",
      content: "WANTED BOUNTY: Fled on the 15th inst from Clemente Coelho's bakeries in Recife, a boy of African birth named Mahommah, speaks poor language, writes in weird arabic characters, wearing traditional body scarification and filed teeth. Generous reward offered.",
      decolonialContext: "Newspaper ads reveal both physical abuse markers and the immense dignity preservation: writing Arabic was described as 'weird' by Portuguese handlers, showing massive cultural friction."
    },
    {
      id: "ship_manifest",
      title: "Brig Lembranca Customs Manifest (New York, 1847)",
      source: "New York Port Authority - United States National Archives",
      year: "1847",
      description: "Legitimate cargo documentation declaring 1,500 coffee bags, silently holding 'Mahommah' under the label of cabin boy.",
      content: "LOG: Brig Lembrança, originating from Rio de Janeiro to New York. Master: Souza Neto. Cargo: 1,500 sacks of coffee, 200 hides. Crew roster includes cabin boy 'Mahommah' acting under legal bond of labor.",
      decolonialContext: "Exposes raw capitalism mechanisms, linking unfree labor to fine coffee trade, adapting legal labels to sail free of seizure during US visits."
    },
    {
      id: "baptism_report",
      title: "Report of the Baptist Free Mission Magazine (1848)",
      source: "University of Rochester - Anti-Slavery Papers",
      year: "1848",
      description: "Archived account marking the emergency rescue of Baquaqua, shipped to free Haitian soil after NY committee intervention.",
      content: "REPORT: Our brother in faith, Mahommah Gardo Baquaqua, who escaped the Brazilian brig Lembrança with aid from the New York Vigilance Committee, has arrived safely in Haiti. In this Republic of free souls, he enjoys the clean air of freedom, away from the claws of southern slavehunters.",
      decolonialContext: "Haiti represents radical global emancipation. As the first successful, Black-led revolutionary free republic, it welcomed those fleeing colonial claws."
    },
    {
      id: "biography_excerpt",
      title: "Autobiography of Mahommah G. Baquaqua - Chap. V (1854)",
      source: "Detroit Rare Library / Samuel Moore Press Reprint",
      year: "1854",
      description: "The printed memoir written and dictated by the hero, an unparalleled account of a literate Muslim who survived Luso-Brazilian enslavement.",
      content: "EXCERPT: 'My parents were strict Muslims in Djougou... No one who has not experienced the yoke of slavery can tell how sweet a draught is liberty... In McGrawville, under the aid of Gerrit Smith, my mind expanded. I am preparing to return to Africa to build schools.'",
      decolonialContext: "The act of authorship of one's own memoir is the ultimate decolonial tool. Writing in the empire's tongue, the subject defies object status and establishes deep memory."
    },
    {
      id: "british_reporter",
      title: "Anti-Slavery Reporter & Aborigines' Friend (1856)",
      source: "British Library Archives",
      year: "1856",
      description: "Letters confirming Gardo Baquaqua's lecture campaign across northwest England to secure return passage funding.",
      content: "CORRESPONDENCE: G. Baquaqua has addressed numerous congregations in Liverpool, describing the horrors of Portuguese/Brazilian coffee slavery. He is persistent in collecting enough support to sail forward in an African colonization attempt of educational and religious reform, reclaiming West African grounds.",
      decolonialContext: "Shows beautiful self-determination: traveling internationally, gathering resources self-sufficiently, entirely as a free and sovereign political agent."
    }
  ],
  fr: [
    {
      id: "voyage_31442",
      title: "Notice Slave Voyages n° 31442 (Année 1845)",
      source: "Base de données interconnectée Slave Voyages",
      year: "1845",
      description: "Enregistrement douanier du navire clandestin ayant déporté des captifs depuis Ouidah vers le Brésil esclavagiste.",
      content: "TRANSCRIPTION: Vessel name: Fortunato. Master: Joaquim Freitas. Boarding port: Ouidah (Dahomey). Destination: Rio de Janeiro. Slaves embarked: 382. Mortality rate on board: 18%. Enslavement illegal under treaties of 1831 but active via illicit custom house payoffs.",
      decolonialContext: "Démontre les complicités de l'appareil colonial brésilien, fermant les yeux sur le transit illégal d'êtres humains de l'Afrique vers les plantations."
    },
    {
      id: "runaway_adv",
      title: "Avis de Fuite - Diario de Pernambuco (Novembre 1845)",
      source: "Hémérothèque Nationale du Brésil",
      year: "1845",
      description: "Affiche décrivant la fuite du pâtissier 'Mohammed', sachant écrire en caractères étranges et portant des dentes limées.",
      content: "ANÚNCIO: Fugiu no dia 15 do corrente, das padarias de Clemente Coelho no Recife, um moleque de nação africana, de nome presumido Mohammed, fala pouca língua do país, sabe escrever em caracteres arábicos estranhos, com cicatrizes rituais no corpo e dentes limados. Gratifica-se generosamente a quem o prender.",
      decolonialContext: "L'avis réduit l'homme à une marchandise en fuite, tout en trahissant sa haute instruction: il écrivait l'arabe, ce que le colon qualifiait d'étranger."
    },
    {
      id: "ship_manifest",
      title: "Manifeste de cargaison du brig Lembranca (1847)",
      source: "Archives Portuaires de New York",
      year: "1847",
      description: "Déclaration de 1 500 sacs de café brésilien à destination de New York, masquant le statut captif de Mahommah comme garçon de cabine.",
      content: "LOG: Brig Lembrança, originating from Rio de Janeiro to New York. Master: Souza Neto. Cargo: 1,500 sacks of coffee, 200 hides. Crew roster includes cabin boy 'Mahommah' acting under legal bond of labor.",
      decolonialContext: "Illustration du contournement libéral des lois américaines sur l'esclavage : déclarer l'homme comme force de travail temporaire rattachée au navire."
    },
    {
      id: "baptism_report",
      title: "Récit de la Baptist Free Mission Magazine (1848)",
      source: "Université de Rochester - Collection Anti-Sclavage",
      year: "1848",
      description: "Enregistrement de l'exfiltration d'urgence de Baquaqua vers Haïti afin de court-circuiter les chasseurs de primes.",
      content: "REPORT: Our brother in faith, Mahommah Gardo Baquaqua, who escaped the Brazilian brig Lembrança with aid from the New York Vigilance Committee, has arrived safely in Haiti. In this Republic of free souls, he enjoys the clean air of freedom, away from the claws of southern slavehunters.",
      decolonialContext: "Haïti représentait alors le cœur vivant du radicalisme noir libre, abritant d'office les survivants de la traite atlantique."
    },
    {
      id: "biography_excerpt",
      title: "Mémoires de Mahommah G. Baquaqua - Chap. V (1854)",
      source: "Bibliothèque Publique de Détroit / Samuel Moore Press",
      year: "1854",
      description: "Extraits du manuscrit dicté par Baquaqua en langue anglaise, témoignant de sa soif d'émancipation et de son projet de retour au Bénin.",
      content: "EXCERPT: 'My parents were strict Muslims in Djougou... No one who has not experienced the yoke of slavery can tell how sweet a draught is liberty... In McGrawville, under the aid of Gerrit Smith, my mind expanded. I am preparing to return to Africa to build schools.'",
      decolonialContext: "Prendre le contrôle du récit constitue l'acte décolonial par excellence. Par l'écriture, le rescapé conteste l'impérialisme occidental."
    },
    {
      id: "british_reporter",
      title: "Anti-Slavery Reporter de Londres (Liverpool, 1856)",
      source: "British Library Archives",
      year: "1856",
      description: "Compte rendu des harangues et conférences de Baquaqua à Liverpool devant des congrégations anglaises.",
      content: "CORRESPONDENCE: G. Baquaqua has addressed numerous congregations in Liverpool, describing the horrors of Portuguese/Brazilian coffee slavery. He is persistent in collecting enough support to sail forward in an African colonization attempt of educational and religious reform, reclaiming West African grounds.",
      decolonialContext: "Montre l'homme Noir comme sujet historique mobile, voyageant à travers les empires pour plaider pour le rapatriement souverain des siens."
    }
  ]
};
