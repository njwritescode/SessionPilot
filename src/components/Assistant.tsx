import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Paperclip, 
  Sparkles, 
  FileText, 
  ClipboardCheck, 
  Plus, 
  History, 
  Lightbulb,
  CheckCircle2
} from 'lucide-react';
import { Header } from './Navigation';
import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

export function Assistant() {
  const [input, setInput] = useState('');

  return (
    <div className="flex-grow flex flex-col h-full bg-background overflow-hidden">
      <Header title="Ask Assistant" onSearchClick={() => {}} />
      
      {/* Status Bar */}
      <div className="px-8 py-3 flex items-center justify-between bg-surface-container-low border-b border-outline-variant">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-secondary fill-current" />
          <h2 className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">Assistant Online</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Real-time indexing</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow overflow-y-auto p-8 space-y-8">
        {/* Assistant Message */}
        <div className="flex justify-start max-w-2xl">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
              <p className="text-sm font-bold text-on-surface leading-relaxed">
                Hello Dr. Smith. I've indexed your notes for <span className="text-secondary font-extrabold uppercase tracking-tight">Patient: Sarah J. (Session #12)</span>. How can I assist you today?
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <AssistantAction icon={<FileText className="text-secondary" />} label="Draft referral letter" />
                <AssistantAction icon={<ClipboardCheck className="text-secondary" />} label="Treatment summary" />
              </div>
            </div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="flex gap-4 items-start max-w-2xl">
            <div className="bg-secondary-container text-on-secondary-container rounded-2xl p-6 shadow-lg">
              <p className="text-sm font-bold leading-relaxed">
                Can you draft a referral letter to a psychiatrist for Sarah? Focus on the increasing anxiety symptoms and her recent panic attack frequency.
              </p>
            </div>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-outline-variant shadow-md">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100" alt="Me" />
            </div>
          </div>
        </div>

        {/* Assistant Typing / Response */}
        <div className="flex justify-start max-w-2xl">
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 shadow-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm space-y-4">
              <p className="text-sm font-bold text-on-surface leading-relaxed">
                Of course. I've drafted a referral letter based on the clinical notes from the last 3 sessions:
              </p>
              <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 text-[11px] font-mono text-on-surface-variant leading-relaxed shadow-inner">
                <p><span className="font-bold text-primary">Subject:</span> Referral for Psychiatric Evaluation - Sarah J.</p>
                <div className="mt-4 space-y-2 opacity-80">
                  <p>Dear Dr. Roberts,</p>
                  <p>I am referring Sarah J. for evaluation. Over the past four weeks, she has reported a marked increase in generalized anxiety symptoms, now presenting with panic attacks occurring 3-4 times weekly.</p>
                  <p>Clinical observation indicates physiological arousal and hyper-vigilance...</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 bg-secondary text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:brightness-110 shadow-lg shadow-secondary/20 transition-all">Approve & Send</button>
                <button className="py-3 px-6 border border-outline text-on-surface-variant rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-surface-container transition-all">Edit Draft</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-8 bg-white border-t border-outline-variant shadow-[0_-8px_30px_rgb(0,0,0,0.02)]">
        {/* Action Chips */}
        <div className="flex flex-wrap gap-2 mb-6">
          <ActionChip icon={<Plus className="w-3 h-3" />} label="Draft Referral" />
          <ActionChip icon={<History className="w-3 h-3" />} label="Review Timeline" />
          <ActionChip icon={<FileText className="w-3 h-3" />} label="Session Summary" />
          <ActionChip icon={<Lightbulb className="w-3 h-3" />} label="Treatment Ideas" />
        </div>

        <div className="relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full bg-surface-container-low border border-outline-variant rounded-2xl py-5 px-6 pr-24 text-sm font-bold focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all shadow-inner"
            placeholder="Command AI to draft, summarize, or analyze clinical data..."
          />
          <div className="absolute right-4 flex items-center gap-3">
            <button className="text-on-surface-variant hover:text-secondary transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-primary/20">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-center text-[10px] font-bold text-on-surface-variant/40 mt-4 uppercase tracking-[0.2em]">
          HIPAA Secure End-to-End Encryption Active
        </p>
      </div>
    </div>
  );
}

function AssistantAction({ icon, label }: any) {
  return (
    <button className="flex items-center gap-3 border border-outline-variant p-4 rounded-xl hover:bg-surface-container-low transition-all text-left group">
      <div className="w-5 h-5 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest group-hover:text-primary transition-colors">{label}</span>
    </button>
  );
}

function ActionChip({ icon, label }: any) {
  return (
    <button className="px-4 py-2 bg-surface-container-high text-primary rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm">
      {icon} {label}
    </button>
  );
}
