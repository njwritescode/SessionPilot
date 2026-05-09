import React, { useState } from 'react';
import { Header } from './Navigation';
import { Settings2, Save, FileType, CheckCircle, BrainCircuit } from 'lucide-react';
import { cn } from '../lib/utils';

export function Settings() {
  const [outputFormat, setOutputFormat] = useState('bullet');
  const [markdown, setMarkdown] = useState(false);
  const [systemPrompt, setSystemPrompt] = useState('I am a CBT therapist. Always highlight cognitive distortions in the patient logs and format output into structured tables where applicable.');

  return (
    <div className="flex-grow flex flex-col h-full overflow-y-auto">
      <Header title="Clinical Settings" />
      
      <main className="p-8 max-w-4xl mx-auto w-full pb-32 space-y-8">
        <div>
          <h2 className="text-2xl font-extrabold text-primary tracking-tight">Global Workflow Instructions</h2>
          <p className="text-sm text-on-surface-variant font-medium mt-1">Configure how SessionPilot AI processes and formats your patient briefs.</p>
        </div>

        <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <BrainCircuit className="w-5 h-5 text-secondary" />
            <h3 className="text-lg font-bold text-on-surface">Custom System Prompt</h3>
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Instruct the AI on your specific therapeutic modality (e.g., CBT, ACT, Psychodynamic) and how it should analyze incoming patient logs.
          </p>
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            className="w-full h-32 bg-surface-container-low border border-outline-variant rounded-xl p-4 text-sm font-medium text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
            placeholder="e.g. Always structure the brief using the DAP (Data, Assessment, Plan) format..."
          />
        </section>

        <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <FileType className="w-5 h-5 text-secondary" />
            <h3 className="text-lg font-bold text-on-surface">Output Formatting</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-3">List Style</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="listStyle" 
                    checked={outputFormat === 'bullet'} 
                    onChange={() => setOutputFormat('bullet')}
                    className="w-4 h-4 text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm font-medium">Standard Bullet Points (•)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="listStyle" 
                    checked={outputFormat === 'dash'} 
                    onChange={() => setOutputFormat('dash')}
                    className="w-4 h-4 text-secondary focus:ring-secondary"
                  />
                  <span className="text-sm font-medium">Markdown Dashes (-)</span>
                </label>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-sm font-bold text-on-surface">Disable Bold Formatting (Asterisks)</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Removes markdown **bold** syntax for easier copy-pasting to EHR.</p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    className="sr-only" 
                    checked={markdown}
                    onChange={(e) => setMarkdown(e.target.checked)}
                  />
                  <div className={cn("block w-10 h-6 rounded-full transition-colors", markdown ? "bg-secondary" : "bg-surface-variant")}></div>
                  <div className={cn("absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform", markdown ? "translate-x-4" : "translate-x-0")}></div>
                </div>
              </label>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant shadow-sm space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <h3 className="text-lg font-bold text-on-surface">EHR Integrations</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center justify-between p-4 border border-secondary bg-surface-container-low rounded-xl cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white border border-outline-variant rounded-lg flex items-center justify-center text-xs font-bold text-primary">PS</div>
                <div>
                  <p className="text-sm font-bold text-primary">PracSuite</p>
                  <p className="text-xs text-on-surface-variant">Connected</p>
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-white" />
              </div>
            </label>

            <label className="flex items-center justify-between p-4 border border-outline-variant hover:border-secondary rounded-xl cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white border border-outline-variant rounded-lg flex items-center justify-center text-xs font-bold text-primary">HX</div>
                <div>
                  <p className="text-sm font-bold text-primary">Halaxy</p>
                  <p className="text-xs text-on-surface-variant">Not Connected</p>
                </div>
              </div>
              <button className="text-xs font-bold text-secondary uppercase tracking-widest hover:underline">Connect</button>
            </label>
          </div>
        </section>

        <div className="flex justify-end pt-4">
          <button className="bg-primary text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center gap-2">
            <Save className="w-4 h-4" /> Save Preferences
          </button>
        </div>
      </main>
    </div>
  );
}
