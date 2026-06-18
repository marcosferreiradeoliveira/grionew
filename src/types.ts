export interface Phase {
  number: number;
  name: string;
  location: string;
  year: string;
  coordinates: { x: number; y: number }; // Percentage offsets for SVG map positioning
  brief: string;
  detailedHistory: string;
  npc: string;
  npcRole: string;
  keyDocumentId: string;
}

export interface HistoricalDocument {
  id: string;
  title: string;
  source: string;
  year: string;
  description: string;
  content: string;
  decolonialContext: string;
}

export interface AvatarSpecialty {
  id: "linguist" | "archivist" | "strategist";
  title: string;
  subtitle: string;
  perks: string[];
  description: string;
  energyBonus: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "grio" | "npc";
  senderName: string;
  text: string;
  statusLine?: string;
  decodedAnalysis?: string;
  nextChallenge?: string;
  timestamp: string;
  attachedDocId?: string;
}

export interface Hypothesis {
  phaseNumber: number;
  draftText: string;
  savedClues: string[];
  unlocked: boolean;
  notes: string;
}

export interface GameState {
  currentPhaseNumber: number;
  selectedAvatar: "linguist" | "archivist" | "strategist" | null;
  hypotheses: Record<number, Hypothesis>;
  chatHistory: Record<number, ChatMessage[]>;
  submittedDocs: Record<number, string[]>; // Map phaseNumber to list of documentIds successfully submitted
  completedPhases: number[]; // List of completed phase numbers
}
