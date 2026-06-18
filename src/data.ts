import { Phase, HistoricalDocument, AvatarSpecialty } from "./types";

export const PHASES: Phase[] = [
  {
    number: 1,
    name: "Captura em Ouidah",
    location: "Ouidah, Benin (antigo Reino de Daomé)",
    year: "1845",
    coordinates: { x: 44, y: 55 }, // Western African coast
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
    coordinates: { x: 30, y: 72 }, // Brazil Northeast
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
    coordinates: { x: 23, y: 45 }, // Ocean route
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
    coordinates: { x: 18, y: 35 }, // Caribbean
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
    coordinates: { x: 12, y: 22 }, // North America
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
    coordinates: { x: 48, y: 15 }, // UK
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
    coordinates: { x: 44, y: 55 }, // Back to Africa
    brief: "As pegadas físicas de Baquaqua desaparecem nos arquivos após 1857. O RPG propõe o encerramento do ciclo temporal: a decolonização permanente.",
    detailedHistory: "Em 1857, os registros formais de Baquaqua nos arquivos abolicionistas ocidentais cessam. Historiadores assumem que ele conseguiu sua maior aspiração: regressar ao continente africano ou viver como um conselheiro livre e soberano. O Griô AI propõe que a investigação reescreva o desfecho espiritual, conectando gerações passadas e futuras sob o mesmo fluxo de resistência cibernética.",
    npc: "O Eco Ancestral",
    npcRole: "Uma manifestação das memórias combinadas de todos os escravizados e combatentes da liberdade. Ele exige que você apresente o Dossier Completo de Hipóteses compilado por você.",
    keyDocumentId: " Liverpool_farewell"
  }
];

export const HISTORICAL_DOCUMENTS: HistoricalDocument[] = [
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
    decolonialContext: "O Haiti de Baquaqua era um símbolo mundial de emancipação radical. Sendo a primeira colônia livre vitoriosa liderada por negros no mundo moderno, servia como refúgio sagrado para fugitivos dos impérios europeus e norte-americanos."
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
];

export const AVATAR_SPECIALTIES: AvatarSpecialty[] = [
  {
    id: "linguist",
    title: "Linguista Quilombola",
    subtitle: "Especialista em Decodificação Textual & Dialetos",
    description: "Focado na decodificação de grafias antigas, cartas nobres e dialetos transatlânticos (Árabe, Iorubá, Ge'ez). Seu olhar revela as resistências intelectuais ocultas nos acervos coloniais.",
    perks: [
      "Visibilidade instantânea de cicatrizes linguísticas em árabe",
      "Habilidade especial para decifrar caligrafia e assinaturas rústicas",
      "Bonus de decodificação de +25% de sintonia ao enviar evidências textuais"
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
];
