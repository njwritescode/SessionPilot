import React from 'react';
import { 
  Lightbulb, 
  History, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { Header } from './Navigation';
import { cn } from '../lib/utils';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const moodData = [
  { name: 'Mon', value: 4 },
  { name: 'Tue', value: 3.5 },
  { name: 'Wed', value: 5 },
  { name: 'Thu', value: 4.8 },
  { name: 'Fri', value: 5.5 },
  { name: 'Sat', value: 6.5 },
  { name: 'Sun', value: 6 },
];

const sleepData = [
  { name: 'M', value: 6 },
  { name: 'T', value: 6.5 },
  { name: 'W', value: 7.2 },
  { name: 'T', value: 6.8 },
  { name: 'F', value: 7.5 },
  { name: 'S', value: 8.2 },
  { name: 'S', value: 7.8 },
];

export function Insights() {
  return (
    <div className="flex-grow flex flex-col h-full overflow-y-auto">
      <Header title="Julianne's Progress" />
      
      <main className="p-8 max-w-7xl mx-auto w-full pb-32">
        <section className="mb-12">
          <h1 className="text-4xl font-extrabold text-primary mb-2 tracking-tight">Your Progress</h1>
          <p className="text-lg text-on-surface-variant font-medium">You've tracked your health for 14 consecutive days. Here's what the data tells us.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Mood Stability */}
          <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-bold text-primary tracking-tight">Mood Stability</h3>
                <p className="text-sm font-medium text-on-surface-variant">Average mood improved by 12% this week</p>
              </div>
              <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest">Weekly</span>
            </div>
            
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 600, fill: '#64748B' }}
                    dy={10}
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#006a61" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: '#006a61', strokeWidth: 0 }} 
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Sleep Quality */}
          <div className="md:col-span-4 bg-surface-container-low border border-outline-variant p-8 rounded-2xl shadow-sm flex flex-col h-full">
            <h3 className="text-xl font-bold text-primary tracking-tight mb-2">Sleep Quality</h3>
            <p className="text-sm font-medium text-on-surface-variant mb-auto leading-relaxed">Hours of restful sleep</p>
            
            <div className="h-48 w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sleepData}>
                  <Bar 
                    dataKey="value" 
                    fill="#006a61" 
                    radius={[8, 8, 0, 0]} 
                    opacity={(v: any, index: number) => 0.2 + (index / 7) * 0.8}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 pt-6 border-t border-outline-variant flex justify-between items-center">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Weekly Avg</span>
              <span className="text-2xl font-extrabold text-primary">7.2h</span>
            </div>
          </div>

          {/* Reflective Victory */}
          <div className="md:col-span-12 bg-primary-container p-8 rounded-2xl relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <Award className="text-secondary-container w-8 h-8" />
                  <h4 className="text-2xl font-extrabold text-white tracking-tight">Reflective Victory</h4>
                </div>
                <p className="text-on-primary-container font-medium max-w-xl text-lg leading-relaxed">
                  You completed every mood entry this week. This level of self-awareness is a major step toward consistent mental wellness. Keep going!
                </p>
              </div>
              <button className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-xl shadow-black/20">
                Share with Therapist
              </button>
            </div>
            
            {/* Decoration */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </div>

          {/* Insight Nuggets */}
          <InsightNugget 
            icon={<Lightbulb className="text-on-tertiary-fixed" />} 
            color="bg-tertiary-fixed"
            title="Daily Insight"
            text="Your mood usually peaks around 10:00 AM. Consider scheduling difficult tasks during this window."
          />
          <InsightNugget 
            icon={<Sparkles className="text-on-primary-fixed" />} 
            color="bg-primary-fixed"
            title="Next Milestone"
            text="3 more days of tracking to unlock your monthly emotional pattern report."
          />
        </div>
      </main>
    </div>
  );
}

function InsightNugget({ icon, color, title, text }: any) {
  return (
    <div className="md:col-span-6 bg-surface-container-lowest border border-outline-variant p-6 rounded-2xl flex gap-6 items-center shadow-sm">
      <div className={cn("w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0", color)}>
        {icon}
      </div>
      <div>
        <h5 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 leading-none">{title}</h5>
        <p className="text-sm font-bold text-on-surface leading-tight">{text}</p>
      </div>
    </div>
  );
}
