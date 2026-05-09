import React, { useState } from 'react';
import { 
  History, 
  Lock, 
  Mic, 
  BrainCircuit, 
  HelpCircle,
  Sparkles,
  ArrowRight,
  ImagePlus,
  X
} from 'lucide-react';
import { Header } from './Navigation';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export function Journal() {
  const [text, setText] = useState('');
  const [attachments, setAttachments] = useState<string[]>([]);

  return (
    <div className="flex-grow flex flex-col h-full overflow-y-auto">
      <Header title="Safe Space" />
      
      <main className="p-8 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32">
        {/* Left Column: Journal Entry */}
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-outline-variant pb-4">
              <div>
                <h1 className="text-2xl font-extrabold text-primary tracking-tight">Journal Entry</h1>
                <p className="text-xs font-medium text-on-surface-variant">Your space is encrypted and secure.</p>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <Lock className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest">HIPAA SECURE</span>
              </div>
            </div>

            <div className="relative group">
              <textarea 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full min-h-[320px] bg-transparent border-none focus:ring-0 text-lg text-on-surface placeholder:text-outline-variant resize-none p-0 leading-relaxed pb-24"
                placeholder="How are you feeling today? Tap the mic or start typing..."
              />
              
              {/* Attachments Section */}
              <div className="absolute bottom-16 left-0 right-0 flex gap-2 overflow-x-auto pb-2">
                {attachments.map((img, idx) => (
                  <div key={idx} className="relative w-16 h-16 rounded-lg overflow-hidden border border-outline-variant shrink-0">
                    <img src={img} alt="attachment" className="w-full h-full object-cover" />
                    <button 
                      onClick={() => setAttachments(attachments.filter((_, i) => i !== idx))}
                      className="absolute top-1 right-1 bg-black/50 text-white rounded-full p-0.5 hover:bg-black"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 gap-4 flex justify-between items-center bg-surface-container-lowest p-2">
                <button 
                  onClick={() => setAttachments([...attachments, "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=100&q=80"])}
                  className="p-2 text-on-surface-variant hover:text-secondary transition-colors flex items-center gap-2"
                >
                  <ImagePlus className="w-5 h-5" />
                  <span className="text-xs font-bold">Add Screenshot</span>
                </button>

                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest group-focus-within:opacity-100 opacity-60 transition-opacity">
                    {text.split(/\s+/).filter(Boolean).length} words
                  </span>
                  <button 
                    disabled={!text}
                    className="bg-secondary text-white px-8 py-2.5 rounded-xl text-[10px] font-extrabold uppercase tracking-widest shadow-xl shadow-secondary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
                  >
                    Save Entry
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* AI Insights */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary-container/10 p-6 rounded-2xl border border-secondary-container/30 flex flex-col gap-3 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-secondary/5 rounded-full blur-xl group-hover:scale-150 transition-transform" />
              <div className="flex items-center gap-2 text-secondary">
                <BrainCircuit className="w-4 h-4" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest">AI Reflection</span>
              </div>
              <p className="text-sm font-medium text-on-surface italic leading-relaxed">
                "It sounds like you're carrying a lot of tension from the workplace today. Let's explore how you've been managing your boundaries."
              </p>
            </div>

            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant flex flex-col gap-3 shadow-sm">
              <div className="flex items-center gap-2 text-on-surface-variant">
                <HelpCircle className="w-4 h-4" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest">Guided Follow-up</span>
              </div>
              <p className="text-sm font-medium text-on-surface leading-normal mb-1">
                When you feel this tension, where do you notice it in your body first?
              </p>
              <button className="text-left text-xs font-bold text-on-surface-variant p-3 bg-white/50 border border-outline-variant rounded-xl hover:bg-white hover:border-secondary transition-all">
                I feel it in my shoulders...
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Tools */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Voice Journal */}
          <div className="bg-primary-container text-white rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-6 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none" />
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.4, 1] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-secondary/20 rounded-full blur-xl" 
              />
              <button className="w-24 h-24 bg-secondary text-white rounded-full flex items-center justify-center shadow-2xl shadow-secondary/40 hover:scale-110 active:scale-95 transition-all z-10 relative">
                <Mic className="w-10 h-10 fill-current" />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">Voice Journal</h3>
              <p className="text-xs font-medium text-on-primary-container leading-relaxed px-4">
                Tap to speak freely. Your voice is transcribed and analyzed in real-time.
              </p>
            </div>
          </div>

          {/* Consistency */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 shadow-sm">
            <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Weekly Consistency</h3>
            <div className="flex justify-between items-end h-24 gap-1">
              {[40, 65, 25, 80, 95, 10, 10].map((h, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full rounded-t-sm transition-all duration-500",
                    i === 4 ? "bg-secondary h-[95%]" : "bg-secondary/30"
                  )} 
                  style={{ height: h + '%' }} 
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-extrabold text-on-surface-variant uppercase tracking-widest mt-4 opacity-60">
              <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>
          </div>

          {/* Prompt Image */}
          <div className="rounded-2xl overflow-hidden h-48 border border-outline-variant relative group shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop" 
              alt="Nature" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
              <div className="flex items-center gap-3">
                <Sparkles className="text-secondary-container w-5 h-5" />
                <span className="text-white text-xs font-extrabold tracking-tight">Take a deep breath. You're doing great.</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
