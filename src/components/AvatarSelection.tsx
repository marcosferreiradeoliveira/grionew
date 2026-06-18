import React from "react";
import { AVATAR_SPECIALTIES } from "../data";
import { AvatarSpecialty } from "../types";
import { BookOpen, MapPin, Database, Award, Shield, Cpu, RefreshCw } from "lucide-react";

interface AvatarSelectionProps {
  onSelect: (specialtyId: "linguist" | "archivist" | "strategist") => void;
}

export default function AvatarSelection({ onSelect }: AvatarSelectionProps) {
  const [selected, setSelected] = React.useState<"linguist" | "archivist" | "strategist">("linguist");

  const getIcon = (id: string) => {
    switch (id) {
      case "linguist":
        return <BookOpen className="w-8 h-8 text-grio-gold" />;
      case "archivist":
        return <Database className="w-8 h-8 text-grio-emerald" />;
      case "strategist":
        return <MapPin className="w-8 h-8 text-blue-400" />;
      default:
        return <Cpu className="w-8 h-8 text-purple-400" />;
    }
  };

  const getBorderColor = (id: string) => {
    if (selected === id) {
      switch (id) {
        case "linguist":
          return "border-grio-gold shadow-[0_0_15px_rgba(234,179,8,0.30)] bg-cyber-purple/60";
        case "archivist":
          return "border-grio-emerald shadow-[0_0_15px_rgba(16,185,129,0.30)] bg-[#0c1c1b]";
        case "strategist":
          return "border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.30)] bg-[#0d162d]";
      }
    }
    return "border-slate-800 bg-slate-950/80 hover:border-slate-700 hover:bg-slate-900/50";
  };

  const handleStart = () => {
    onSelect(selected);
  };

  return (
    <div id="avatar-selection-panel" className="relative z-10 w-full max-w-5xl mx-auto px-4 py-8">
      {/* Visual background decorations */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none rounded-2xl border border-purple-950/40" />
      
      {/* Cyberpunk Top Corner Glitches */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/50 border border-purple-500/30 rounded-full text-xs font-mono text-purple-300 tracking-widest mb-4">
          <Cpu className="w-3 h-3 animate-spin text-grio-gold" />
          SYSTEM INTEL: INITIALIZING GRIÔ_AIv3000
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-grio-gold via-amber-300 to-grio-emerald bg-clip-text text-transparent">
          GRIÔ AI: HORIZONTES DA DIÁSPORA
        </h1>
        
        <p className="mt-4 text-slate-300 max-w-2xl text-base md:text-lg font-sans leading-relaxed">
          Ative seu terminal de investigação decolonial. Como um historiador digital, 
          sua missão é coletar evidências textuais para hackear as frestas do tempo e reconstituir 
          a saga heróica de <span className="text-grio-gold font-semibold">Mohammed Gardo Baquaqua</span> através do Atlântico.
        </p>
      </div>

      <div className="bg-slate-950/90 border border-purple-950/60 rounded-xl p-6 md:p-8 shadow-2xl mb-8 relative overflow-hidden">
        {/* Subtle glowing orb in background */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-emerald-900/10 blur-3xl pointer-events-none" />
        
        <h2 className="font-display text-xl md:text-2xl font-semibold mb-6 text-slate-100 flex items-center gap-3">
          <Award className="w-6 h-6 text-grio-gold" />
          Selecione sua Especialização de Investigador
        </h2>

        {/* Avatar Selections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {AVATAR_SPECIALTIES.map((spec: AvatarSpecialty) => {
            const isSelected = selected === spec.id;
            return (
              <button
                key={spec.id}
                onClick={() => setSelected(spec.id)}
                className={`flex flex-col text-left p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer focus:outline-none ${getBorderColor(spec.id)}`}
                id={`avatar-card-${spec.id}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                    {getIcon(spec.id)}
                  </div>
                  {isSelected && (
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-grio-gold/10 text-grio-gold border border-grio-gold/20 font-bold uppercase tracking-wider">
                      Ativo
                    </span>
                  )}
                </div>

                <h3 className="font-display text-lg font-bold text-slate-100 mb-1">
                  {spec.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4 tracking-wide uppercase">
                  {spec.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
                  {spec.description}
                </p>

                <div className="border-t border-slate-800/80 pt-4 mt-auto w-full">
                  <h4 className="text-xs font-mono text-slate-400 font-semibold mb-2 uppercase tracking-wide">
                    Atributos Operacionais:
                  </h4>
                  <ul className="space-y-1.5">
                    {spec.perks.map((perk, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-xs select-none text-purple-400 mt-0.5">•</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            );
          })}
        </div>

        {/* Warning Board */}
        <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-900/40 text-sm text-purple-300 flex items-start gap-3">
          <Shield className="w-5 h-5 text-grio-gold shrink-0 mt-0.5" />
          <div>
            <p className="font-mono text-slate-200 font-semibold mb-1">
              DIRETRIZ DECOLONIAL ATIVA:
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              O imperialismo tentou reduzir heróis como Baquaqua a meros bens de carga. 
              Ao analisar arquivos nesta rede cibernética, suas hipóteses devem restituir o 
              protagonismo intelectual e a soberania espiritual das populações marginalizadas.
            </p>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="flex justify-center">
        <button
          onClick={handleStart}
          id="btn-start-simulation"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-grio-gold to-yellow-600 hover:from-yellow-400 hover:to-grio-gold text-slate-950 font-display font-bold text-lg rounded-xl shadow-[0_4px_20px_rgba(234,179,8,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
          INTERCONECTAR AO TEMPO-ESPAÇO
        </button>
      </div>
    </div>
  );
}
