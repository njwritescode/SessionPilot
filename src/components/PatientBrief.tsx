import React from 'react';
import { 
  ArrowLeft,
  Filter,
  Calendar,
  History,
  TrendingDown,
  Image as ImageIcon,
  CheckCircle,
  AlertTriangle,
  FileText
} from 'lucide-react';
import { Header } from './Navigation';
import { cn } from '../lib/utils';

export function PatientBrief({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex-grow flex flex-col h-full overflow-y-auto">
      {/* TopAppBar Equivalent */}
      <header className="flex justify-between items-center px-8 h-16 w-full bg-surface border-b border-outline-variant sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-surface-container text-on-surface-variant transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold text-primary">Marcus Thorne</h2>
          <span className="bg-surface-variant text-primary px-3 py-1 rounded-full text-xs font-bold">Active Therapy</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-secondary font-bold hover:bg-surface-container px-3 py-2 rounded transition-colors duration-200">
            <FileText className="w-4 h-4" />
            <span className="text-xs">Export to .docx</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">MT</div>
        </div>
      </header>
      
      <main className="p-8 max-w-7xl mx-auto w-full pb-32">
        {/* Longitudinal Timeline & Context */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl col-span-3">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Longitudinal Timeline</h3>
                <p className="text-sm text-on-surface-variant">Comprehensive view of therapy progression since January 2024.</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
                  <Filter className="w-4 h-4 text-on-surface-variant" />
                </button>
                <button className="p-2 border border-outline-variant rounded hover:bg-surface-container-low transition-colors">
                  <Calendar className="w-4 h-4 text-on-surface-variant" />
                </button>
              </div>
            </div>

            {/* Timeline Visualizer */}
            <div className="relative pl-8 space-y-6 border-l-2 border-surface-variant ml-4 mt-8">
              <div className="relative">
                <span className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-secondary ring-4 ring-white"></span>
                <div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-secondary">TODAY</span>
                    <span className="text-xs text-on-surface-variant font-medium">Session #24</span>
                  </div>
                  <h4 className="text-base font-bold text-primary">AI Clinical Executive Brief</h4>
                  <p className="text-sm text-on-surface-variant mt-1 italic">
                    "Patient exhibits increased regulation of sleep-cycle disruption. Affect remains stable despite workplace stressors. CBT tools for cognitive reframing are being utilized more consistently."
                  </p>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-white"></span>
                <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant opacity-70">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold text-on-surface-variant">APR 12, 2024</span>
                    <span className="text-xs text-on-surface-variant font-medium">Session #23</span>
                  </div>
                  <h4 className="text-base font-bold text-primary">Previous Session Summary</h4>
                  <p className="text-sm text-on-surface-variant">
                    Focus on interpersonal boundaries and sleep hygiene. Discussed the impact of digital overstimulation before bed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Context Panel (Last 6 Sessions) */}
          <div className="bg-surface-container-highest border border-outline-variant p-6 rounded-xl flex flex-col h-full">
            <h3 className="text-base font-bold text-primary mb-6 flex items-center gap-2">
              <History className="w-5 h-5 text-secondary" />
              Context <span className="text-xs font-normal text-on-surface-variant">(Last 6)</span>
            </h3>
            <div className="space-y-4 flex-1">
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <span className="text-sm font-medium">CBT Adherence</span>
                <span className="text-xs text-secondary font-bold">85%</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <span className="text-sm font-medium">Mood Baseline</span>
                <span className="text-xs text-on-surface-variant font-bold">Moderate</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/30 pb-3">
                <span className="text-sm font-medium">Anxiety Spikes</span>
                <span className="text-xs text-error font-bold">2/6 Sessions</span>
              </div>
              <div className="mt-auto pt-6">
                <p className="text-xs font-bold text-on-primary-container mb-2">Growth Metric</p>
                <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary h-full w-[65%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biometrics & Screenshots */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Mood & Sleep Trends */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-primary">Biometric Trends</h3>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                  <span className="w-3 h-3 rounded-full bg-secondary"></span> Mood
                </span>
                <span className="flex items-center gap-2 text-xs font-bold text-on-surface-variant">
                  <span className="w-3 h-3 rounded-full bg-surface-variant"></span> Sleep
                </span>
              </div>
            </div>
            
            {/* Chart Graphic representation */}
            <div className="h-48 w-full bg-background/50 rounded-lg flex items-end justify-between p-4 border border-outline-variant/20 relative">
              <div className="absolute inset-x-0 top-1/4 border-t border-outline-variant/10"></div>
              <div className="absolute inset-x-0 top-2/4 border-t border-outline-variant/10"></div>
              <div className="absolute inset-x-0 top-3/4 border-t border-outline-variant/10"></div>
              
              <div className="w-8 flex flex-col-reverse gap-1 z-10"><div className="bg-secondary h-20 rounded-t-sm" /><div className="bg-surface-variant h-12 rounded-t-sm" /></div>
              <div className="w-8 flex flex-col-reverse gap-1 z-10"><div className="bg-secondary h-24 rounded-t-sm" /><div className="bg-surface-variant h-16 rounded-t-sm" /></div>
              <div className="w-8 flex flex-col-reverse gap-1 z-10"><div className="bg-secondary h-16 rounded-t-sm" /><div className="bg-surface-variant h-28 rounded-t-sm" /></div>
              <div className="w-8 flex flex-col-reverse gap-1 z-10"><div className="bg-secondary h-32 rounded-t-sm" /><div className="bg-surface-variant h-20 rounded-t-sm" /></div>
              <div className="w-8 flex flex-col-reverse gap-1 z-10"><div className="bg-secondary h-28 rounded-t-sm" /><div className="bg-surface-variant h-24 rounded-t-sm" /></div>
            </div>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-container-low text-xs text-on-surface-variant uppercase">
                  <tr>
                    <th className="p-2">Metric</th>
                    <th className="p-2">Mon</th>
                    <th className="p-2">Tue</th>
                    <th className="p-2">Wed</th>
                    <th className="p-2">Thu</th>
                    <th className="p-2">Fri</th>
                  </tr>
                </thead>
                <tbody className="bg-surface-container-lowest">
                  <tr className="border-b border-outline-variant/30">
                    <td className="p-2 font-bold">Mood Score</td>
                    <td className="p-2">7.2</td>
                    <td className="p-2">6.8</td>
                    <td className="p-2">8.1</td>
                    <td className="p-2">7.5</td>
                    <td className="p-2 text-secondary font-bold">8.9</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold">Sleep (Hrs)</td>
                    <td className="p-2">6.5</td>
                    <td className="p-2">7.0</td>
                    <td className="p-2">5.8</td>
                    <td className="p-2">7.2</td>
                    <td className="p-2">7.8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Clinical Screenshots */}
          <div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-primary">Clinical Screenshots</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="group relative rounded-lg overflow-hidden border border-outline-variant h-32">
                <img 
                  src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=400&q=80" 
                  alt="Smartwatch sleep data" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-primary/90 p-2 text-white text-[10px] transform translate-y-full group-hover:translate-y-0 transition-transform">
                  Sleep Pattern Log - Apr 15
                </div>
              </div>
              <div className="group relative rounded-lg overflow-hidden border border-outline-variant h-32">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80" 
                  alt="Message snippet" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-0 inset-x-0 bg-primary/90 p-2 text-white text-[10px] transform translate-y-full group-hover:translate-y-0 transition-transform">
                  Journal Snippet - Stress Event
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-surface-container-low rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
              <p className="text-xs font-medium text-on-surface-variant">All uploads are HIPAA-encrypted and only visible to authorized clinicians.</p>
            </div>
          </div>
        </section>

        {/* Executive Analysis Section */}
        <section className="bg-error-container/20 border border-error/20 p-6 rounded-xl mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-error flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 fill-current" />
              Journal Sentiment Analysis
            </h3>
            <span className="text-xs font-bold text-error uppercase tracking-widest bg-error/10 px-2 py-1 rounded">2 CRISIS FLAGS</span>
          </div>
          <div className="space-y-4">
            <div className="border-l-4 border-error bg-error-container/10 p-4 rounded-r-lg">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-error uppercase">Urgent Flag • Oct 29</span>
                <span className="text-error font-bold text-sm">Sentiment: Crisis</span>
              </div>
              <p className="text-base italic text-on-surface">"...feeling like the weight of the new project is crushing me. I haven't eaten properly in two days and I'm starting to feel detached again. I just want the noise to stop."</p>
            </div>
          </div>
        </section>

        {/* Action Bottom */}
        <section className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-primary text-white p-8 rounded-xl flex items-center justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">Ready for Session #25?</h3>
              <p className="text-base opacity-80 mb-6 max-w-md">Automate your note-taking. SessionPilot will generate the Clinical Brief in real-time based on the updated biometric context.</p>
              <button 
                className="bg-secondary text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all shadow-xl shadow-secondary/20"
              >
                Initialize Session Stream
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-secondary/10 skew-x-12 translate-x-10 pointer-events-none"></div>
          </div>
        </section>
      </main>
    </div>
  );
}
