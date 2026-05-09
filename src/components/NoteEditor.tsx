import React from 'react';
import { 
  ArrowLeft,
  History,
  Brain,
  Bell,
  User,
  List,
  SpellCheck,
  Zap,
  FileText,
  FileDigit,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Sidebar } from './Navigation'; // Actually, sidebar is outside

export function NoteEditor({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-1 flex flex-col relative h-full overflow-hidden">
      {/* TopAppBar Component */}
      <header className="flex justify-between items-center px-8 h-16 w-full bg-surface border-b border-outline-variant shrink-0">
        <div className="flex items-center gap-6">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest leading-tight">Note Editor</span>
            <h2 className="text-xl font-bold text-primary">Session: Alex Johnson</h2>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1.5 px-3 py-2 text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors duration-200">
              <History className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Revert</span>
            </button>
            <button className="flex items-center gap-1.5 px-3 py-2 text-secondary hover:bg-secondary-container/10 transition-colors duration-200 border border-secondary rounded-lg">
              <Brain className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Learn From This Edit</span>
            </button>
          </div>
          <div className="h-6 w-[1px] bg-outline-variant"></div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center">
              <User className="text-primary w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      {/* Editor Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Workspace */}
        <section className="flex-1 overflow-y-auto p-8 bg-background scrollbar-hide">
          <div className="max-w-4xl mx-auto space-y-6 pb-32">
            {/* Editor Header Info */}
            <div className="bg-surface p-6 border border-outline-variant rounded-xl">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Date</label>
                  <p className="text-sm font-medium text-primary">October 24, 2026</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Session ID</label>
                  <p className="text-sm font-medium text-primary">SP-94821</p>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-widest">Status</label>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-secondary-container/40 text-on-secondary-container">Draft</span>
                </div>
              </div>
            </div>

            {/* Note Content Area */}
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col overflow-hidden">
              {/* Format Toggle / Controls */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-outline-variant bg-surface-container-low">
                <div className="flex items-center gap-6">
                  <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">FORMAT: SOAP</span>
                  <div className="flex border border-outline-variant rounded overflow-hidden">
                    <button className="px-4 py-1.5 bg-primary text-on-primary text-xs font-bold">Edit</button>
                    <button className="px-4 py-1.5 bg-surface-container-lowest text-on-surface-variant text-xs font-bold border-l border-outline-variant hover:bg-surface-container transition-colors">Preview</button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors rounded hover:bg-surface-variant"><List className="w-4 h-4" /></button>
                  <button className="p-1.5 text-on-surface-variant hover:text-primary transition-colors rounded hover:bg-surface-variant"><SpellCheck className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Structured Note Editor */}
              <div 
                className="p-8 flex-1 font-sans text-base leading-relaxed text-primary focus:outline-none min-h-[500px]" 
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                <div className="mb-6 outline-none">
                  <p className="font-bold text-secondary mb-2">Subjective</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Patient reports increased anxiety following recent job transition.</li>
                    <li>Expresses difficulty with sleep onset, averaging 4-5 hours per night.</li>
                    <li>Noted that breathing exercises discussed in previous session were "somewhat helpful" but difficult to remember during peak stress.</li>
                    <li>Reports no significant changes in appetite or weight.</li>
                  </ul>
                </div>
                <div className="mb-6 outline-none">
                  <p className="font-bold text-secondary mb-2">Objective</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Patient appeared restless, frequently shifting in seat.</li>
                    <li>Speech was rapid but coherent.</li>
                    <li>Mood described as "stressed" and "overwhelmed"; affect is congruent.</li>
                    <li>Cognitive functions appear intact; no signs of psychosis or suicidal ideation observed.</li>
                  </ul>
                </div>
                <div className="mb-6 outline-none">
                  <p className="font-bold text-secondary mb-2">Assessment</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Patient presenting with symptoms consistent with Generalized Anxiety Disorder (F41.1).</li>
                    <li>Recent stressors (occupational change) are clearly exacerbating baseline anxiety levels.</li>
                    <li>Progress is steady, though coping mechanism integration requires further reinforcement.</li>
                  </ul>
                </div>
                <div className="mb-6 outline-none">
                  <p className="font-bold text-secondary mb-2">Plan</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Continue Cognitive Behavioral Therapy (CBT) focusing on workplace stress management.</li>
                    <li>Introduce "Grounding 5-4-3-2-1" technique for acute anxiety spikes.</li>
                    <li>Patient to maintain a sleep log for the next 7 days.</li>
                    <li>Schedule follow-up session for Tuesday, Nov 1st at 10:00 AM.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Sidebar (Fixed Right) */}
        <aside className="hidden xl:flex w-80 border-l border-outline-variant bg-surface-container-lowest p-8 flex-col gap-8 shrink-0">
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Publishing</h3>
            
            {/* EHR Push Action */}
            <button className="w-full bg-secondary text-white py-8 px-6 rounded-2xl flex flex-col items-center gap-3 transition-transform hover:scale-[102%] shadow-xl shadow-secondary/20">
              <Zap className="w-8 h-8 fill-current" />
              <div className="flex flex-col items-center">
                <span className="text-lg font-bold tracking-tight">One-Click EHR</span>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mt-1">Direct to PracSuite / Halaxy</span>
              </div>
            </button>
            
            {/* Secondary Export */}
            <div className="pt-2 space-y-2">
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-on-surface-variant" />
                  <span className="text-sm font-semibold text-primary">Download as Word</span>
                </div>
                <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full flex items-center justify-between p-4 rounded-xl border border-outline-variant hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <FileDigit className="w-5 h-5 text-on-surface-variant" />
                  <span className="text-sm font-semibold text-primary">Export as PDF</span>
                </div>
                <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Session Insight</h3>
            <div className="p-4 bg-surface-container-low border border-outline-variant rounded-xl space-y-2">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Sentiment</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">Negative/Anxious</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-[70%]" />
              </div>
              <p className="text-xs font-medium text-on-surface-variant leading-tight pt-2">
                Patient used the word "overwhelmed" 4 times in the first 10 minutes.
              </p>
            </div>
          </div>

          <div className="mt-auto">
            <div className="p-4 bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl flex flex-col gap-2">
              <div className="flex items-center gap-2 text-on-tertiary-container">
                <CheckCircle className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">HIPAA Compliant</span>
              </div>
              <p className="text-[10px] font-medium text-on-tertiary-container/80 leading-relaxed">
                Session Pilot encrypts all note drafts with AES-256 before transmission.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Float Notification (Ghost state) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface px-6 py-3 rounded-full shadow-lg flex items-center gap-3 opacity-0 pointer-events-none transition-opacity duration-300">
        <CheckCircle className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-widest">Formatting optimized for EHR pasting</span>
      </div>
    </div>
  );
}
