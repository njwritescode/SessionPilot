import React, { useState } from 'react';
import { 
  Mic, 
  Pause, 
  StopCircle, 
  LifeBuoy, 
  Search, 
  Share2, 
  Star,
  Settings
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Navigation';
import { cn } from '@/src/lib/utils';

export function ActiveSession({ patientName, onEnd }: { patientName: string; onEnd: () => void }) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="flex-grow flex flex-col md:flex-row h-full overflow-hidden bg-background">
      {/* Left Column: Control Panel */}
      <section className="w-full md:w-2/5 border-r border-outline-variant bg-surface-container-low p-8 flex flex-col gap-8 overflow-y-auto">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Active Session</span>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Patient: {patientName}</h1>
          <p className="text-sm font-medium text-on-surface-variant">Intake ID: #ST-2940 • Duration: 24:12</p>
        </div>

        {/* Waveform Illustration */}
        <div className="bg-primary-container rounded-2xl p-6 h-56 flex items-end justify-between gap-1 overflow-hidden relative shadow-inner">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-error animate-pulse" />
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">Live Transcription Active</span>
          </div>
          
          {/* Animated bars */}
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: 20 }}
              animate={{ height: [20, 40 + Math.random() * 80, 20] }}
              transition={{ 
                duration: 0.5 + Math.random(), 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1.5 bg-secondary-container rounded-full"
              style={{ opacity: 0.3 + (i / 24) * 0.7 }}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4">
          <button className="w-full bg-secondary text-white py-6 rounded-2xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-secondary/20">
            <LifeBuoy className="w-8 h-8" />
            <span className="text-xl font-extrabold tracking-tight">Mark Important</span>
          </button>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="flex-1 border border-outline bg-surface-container-lowest py-4 rounded-2xl flex flex-col items-center justify-center gap-1 text-on-surface hover:bg-surface-container transition-all"
            >
              <Pause className={cn("w-6 h-6", isPaused && "fill-current text-secondary")} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{isPaused ? 'Resume' : 'Pause Session'}</span>
            </button>
            <button 
              onClick={onEnd}
              className="flex-1 border border-error bg-error-container/10 text-error py-4 rounded-2xl flex flex-col items-center justify-center gap-1 hover:bg-error-container/20 transition-all font-bold"
            >
              <StopCircle className="w-6 h-6" />
              <span className="text-[10px] font-bold uppercase tracking-widest">End & Save</span>
            </button>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="bg-surface-container-highest p-6 rounded-2xl border border-outline-variant flex flex-col gap-4">
          <h3 className="text-[10px] font-bold text-primary uppercase tracking-widest">Session Shortcuts</h3>
          <div className="flex flex-wrap gap-2">
            {['Panic Attack', 'Medication Refill', 'Work Stress', 'Sleep Hygiene'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white border border-outline-variant rounded-full text-[10px] font-bold text-on-surface-variant cursor-pointer hover:border-secondary hover:text-secondary transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Right Column: Transcript */}
      <section className="flex-1 bg-surface flex flex-col overflow-hidden">
        <div className="p-8 border-b border-outline-variant flex justify-between items-center bg-surface/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="text-xl font-bold text-primary tracking-tight">Live Transcript</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-on-surface-variant font-bold text-[10px] uppercase tracking-wider hover:text-primary transition-colors">
              <Search className="w-4 h-4" /> Find
            </button>
            <button className="flex items-center gap-2 text-on-surface-variant font-bold text-[10px] uppercase tracking-wider hover:text-primary transition-colors">
              <Share2 className="w-4 h-4" /> Export
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8 pb-32">
          {/* Dialogue Blocks */}
          <DialogueBlock 
            speaker="Therapist" 
            time="23:45" 
            text="Marcus, I'd like to circle back to what you mentioned about the physical symptoms of the anxiety. When you say your chest feels tight, is that happening daily?" 
            type="therapist" 
          />
          <DialogueBlock 
            speaker="Client" 
            time="23:58" 
            text="Mostly in the mornings. It's like I wake up and immediately feel like I'm behind on everything before I've even checked my phone. It's... it's exhausting, honestly." 
            type="client" 
          />
          <DialogueBlock 
            speaker="Therapist" 
            time="24:05" 
            text="That morning onset is a significant marker. Let's explore if we can implement a 5-minute grounding exercise before you touch any technology in the morning." 
            type="therapist" 
            highlighted
          />

          {/* Live Indicator */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-surface-container-highest text-on-surface-variant px-2 py-0.5 rounded uppercase tracking-wider">Client</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-1 h-1 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-1 h-1 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
            <div className="pl-6 border-l-2 border-outline-variant italic">
              <p className="text-lg text-on-surface-variant">Client is speaking...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DialogueBlock({ speaker, time, text, type, highlighted }: any) {
  return (
    <div className={cn(
      "flex flex-col gap-2 group transition-all",
      highlighted && "bg-secondary-container/10 p-6 -mx-6 rounded-2xl relative border-l-4 border-secondary shadow-sm"
    )}>
      {highlighted && <Star className="absolute right-4 top-4 text-secondary w-5 h-5 fill-current" />}
      <div className="flex items-center gap-2">
        <span className={cn(
          "text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest",
          type === 'therapist' ? "bg-secondary-container text-on-secondary-container" : "bg-surface-container-highest text-on-surface-variant"
        )}>
          {speaker}
        </span>
        <span className="text-[10px] font-bold text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">{time}</span>
      </div>
      <div className={cn(
        "pl-6",
        !highlighted && cn("border-l-2", type === 'therapist' ? "border-secondary-container" : "border-outline-variant")
      )}>
        <p className="text-lg text-on-surface leading-relaxed">"{text}"</p>
      </div>
    </div>
  );
}
