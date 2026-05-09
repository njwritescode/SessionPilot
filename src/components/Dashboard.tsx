import React, { useState } from 'react';
import { 
  Plus, 
  TrendingUp, 
  Clock, 
  MoreVertical, 
  Edit3, 
  FileText, 
  RefreshCw,
  ChevronRight,
  Upload,
  Users,
  CheckCircle
} from 'lucide-react';
import { Header } from './Navigation';
import { cn } from '../lib/utils';

export function Dashboard({ onNextPatient, onActiveSession, onCompleteNote }: { onNextPatient: () => void, onActiveSession: () => void, onCompleteNote: () => void }) {
  return (
    <div className="flex-grow flex flex-col h-full overflow-y-auto">
      <Header title="Clinical Dashboard" onSearchClick={() => {}} />
      
      <main className="p-8 max-w-7xl mx-auto w-full pb-32">
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button className="flex items-center gap-2 bg-surface-container-highest border border-outline-variant px-4 py-2.5 rounded-xl text-xs font-bold text-primary hover:bg-surface-variant transition-colors shadow-sm">
            <Upload className="w-4 h-4 text-secondary" />
            Upload Weekly Schedule
          </button>
          <button className="flex items-center gap-2 bg-surface-container-highest border border-outline-variant px-4 py-2.5 rounded-xl text-xs font-bold text-primary hover:bg-surface-variant transition-colors shadow-sm">
            <Users className="w-4 h-4 text-secondary" />
            Import Patients (CSV)
          </button>
        </div>

        {/* Summary Bento Grid */}
        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Highlight Cards */}
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">NEEDS REVIEW</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-primary">08</span>
                <span className="text-sm font-medium text-on-tertiary-container">Patient logs flagged</span>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">PENDING DOCUMENTATION</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-primary">03</span>
                <span className="text-sm font-medium text-on-surface-variant">Sessions today</span>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
            <div className="flex flex-col">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">WEEKLY CAPACITY</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-secondary">82%</span>
                <div className="w-full bg-surface-container-high rounded-full h-2 mt-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule Sync Section */}
          <div className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-outline-variant flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface-container-low">
              <div className="flex items-center gap-2">
                <Clock className="text-primary w-5 h-5" />
                <h3 className="text-xl font-bold text-primary">Upcoming Sessions</h3>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant font-bold text-xs">
                <RefreshCw className="w-4 h-4" />
                Synced with Google Calendar
              </div>
            </div>
            <div className="divide-y divide-outline-variant">
              <AppointmentRow 
                initials="SM" 
                name="Sarah Miller" 
                case="General Anxiety" 
                time="09:00 AM" 
                duration="60 Minutes" 
                status="Confirmed" 
                urgency="High Urgency"
                onAction={onNextPatient}
                onPrimaryAction={onActiveSession}
              />
              <AppointmentRow 
                initials="RJ" 
                name="Robert Jones" 
                case="PTSD Follow-up" 
                time="10:30 AM" 
                duration="45 Minutes" 
                status="Video Call" 
                urgency="Stable"
                onAction={() => {}}
              />
              <AppointmentRow 
                initials="EK" 
                name="Elena Kovic" 
                case="Depressive Episode" 
                time="01:00 PM" 
                duration="60 Minutes" 
                status="Confirmed" 
                urgency="Moderate"
                onAction={() => {}}
              />
            </div>
          </div>

          {/* AI Analysis Summary Card */}
          <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-xl font-bold text-primary tracking-tight">Patient Log AI Insights</h4>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-surface-container-high text-primary rounded">New Analysis Available</span>
            </div>
            <div className="space-y-6 text-on-surface">
              <div className="flex gap-4">
                <TrendingUp className="text-secondary w-6 h-6 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">Sarah Miller: Elevated Risk Factors</span>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant ml-2 space-y-1 mt-2">
                    <li>Increased insomnia reported over the last 72 hours</li>
                    <li>Persistent negative self-talk detected in text-based logs</li>
                    <li>Sudden drop in social activity metrics</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">Robert Jones: Positive Progression</span>
                  <ul className="list-disc list-inside text-sm text-on-surface-variant ml-2 space-y-1 mt-2">
                    <li>Consistent application of breathing exercises</li>
                    <li>Reduced physiological reactivity during journal entries</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Documentation Queue */}
          <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
            <h4 className="text-xl font-bold text-primary mb-6 tracking-tight">Pending Documentation</h4>
            <div className="space-y-3">
              <div className="p-4 flex items-center justify-between bg-surface-container-low rounded-xl border border-outline-variant">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">Kevin Zhao</span>
                  <span className="text-xs font-bold text-on-surface-variant">Session: Yesterday, 4:00 PM</span>
                </div>
                <button onClick={onCompleteNote} className="text-primary font-bold text-xs hover:underline">Complete SOAP</button>
              </div>
              <div className="p-4 flex items-center justify-between bg-surface-container-low rounded-xl border border-outline-variant">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">Maria Garcia</span>
                  <span className="text-xs font-bold text-on-surface-variant">Intake: Oct 24, 11:30 AM</span>
                </div>
                <button onClick={onCompleteNote} className="text-primary font-bold text-xs hover:underline">Draft Report</button>
              </div>
              <div className="p-4 flex items-center justify-between bg-surface-container-low rounded-xl border border-outline-variant">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">Liam Smith</span>
                  <span className="text-xs font-bold text-on-surface-variant">Session: Oct 23, 2:00 PM</span>
                </div>
                <button onClick={onCompleteNote} className="text-primary font-bold text-xs hover:underline">Complete SOAP</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 right-8 md:bottom-12 md:right-12 bg-primary text-on-primary w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 active:scale-95 transition-all z-50">
        <Plus className="w-8 h-8" />
        <span className="absolute right-20 bg-primary text-on-primary px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-xs font-bold shadow-xl border border-white/10">
          New Appointment
        </span>
      </button>
    </div>
  );
}

function AppointmentRow({ initials, name, case: caseName, time, duration, status, urgency, onAction, onPrimaryAction }: any) {
  const getUrgency = () => {
    if (urgency === 'High Urgency') return { dot: 'bg-error', text: 'text-error' };
    if (urgency === 'Moderate') return { dot: 'bg-amber-500', text: 'text-amber-600' };
    return { dot: 'bg-emerald-500', text: 'text-emerald-600' };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-surface-container-low transition-colors group border-l-4 border-transparent hover:border-secondary">
      <div className="col-span-2 flex flex-col">
        <span className="text-sm font-bold text-primary">{time}</span>
        <span className="text-xs font-medium text-on-surface-variant">{duration}</span>
      </div>
      <div className="col-span-3 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary-container/10 text-primary-container rounded-full flex items-center justify-center font-extrabold text-xs">
          {initials}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold text-primary">{name}</p>
          <p className="text-xs text-on-surface-variant font-medium">{caseName}</p>
        </div>
      </div>
      <div className="col-span-2">
        <span className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold text-primary uppercase tracking-wider">
          {status}
        </span>
      </div>
      <div className="col-span-2 flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", getUrgency().dot)}></div>
        <span className={cn("text-xs font-bold", getUrgency().text)}>{urgency}</span>
      </div>
      <div className="col-span-3 flex justify-end gap-2">
        <button 
          onClick={onAction}
          className="bg-surface-container text-on-surface-variant border border-outline-variant px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-surface-container-high transition-all"
        >
          <FileText className="w-3.5 h-3.5" /> Pre-chart
        </button>
        {onPrimaryAction && (
          <button 
            onClick={onPrimaryAction}
            className="bg-primary text-white border border-outline-variant px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary-container transition-all shadow-sm"
          >
            <Edit3 className="w-3.5 h-3.5" /> Start
          </button>
        )}
      </div>
    </div>
  );
}
