import React from 'react';
import { 
  Calendar, 
  Users, 
  BarChart3, 
  UserCircle, 
  Settings, 
  Search, 
  Bell,
  Stethoscope,
  LayoutDashboard,
  LogOut,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
  mobile?: boolean;
}

function NavItem({ icon, label, active, onClick, mobile }: NavItemProps) {
  if (mobile) {
    return (
      <button 
        onClick={onClick}
        className={cn(
          "flex flex-col items-center justify-center px-4 py-1 gap-1 transition-all",
          active ? "bg-secondary-container text-on-secondary-container rounded-full" : "text-on-surface-variant hover:text-secondary"
        )}
      >
        <div className="w-6 h-6">{icon}</div>
        <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 p-3 w-full rounded-xl transition-all duration-300",
        active 
          ? "bg-secondary-container/20 text-secondary font-bold" 
          : "text-on-surface-variant hover:bg-surface-container active:scale-95"
      )}
    >
      <div className="w-5 h-5">{icon}</div>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

export function Sidebar({ currentView, setView }: { currentView: string; setView: (v: string) => void }) {
  return (
    <aside className="hidden md:flex flex-col h-full w-80 bg-surface-container-lowest border-r border-outline-variant p-8 shrink-0">
      <div className="mb-12 flex items-center gap-3">
        <Stethoscope className="text-secondary w-8 h-8" />
        <h1 className="text-2xl font-extrabold text-primary tracking-tight">SessionPilot</h1>
      </div>

      <div className="flex items-center gap-3 mb-8">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop" 
          alt="Dr. Julianne Smith" 
          className="w-12 h-12 rounded-full object-cover border border-outline-variant"
        />
        <div>
          <h2 className="text-sm font-bold text-primary">Dr. Julianne Smith</h2>
          <p className="text-xs text-on-surface-variant">Clinical Psychologist</p>
        </div>
      </div>

      <nav className="flex-grow space-y-2">
        <NavItem 
          icon={<LayoutDashboard />} 
          label="Clinical Dashboard" 
          active={currentView === 'dashboard'} 
          onClick={() => setView('dashboard')} 
        />
        <NavItem 
          icon={<Users />} 
          label="Patients (Marcus T.)" 
          active={currentView === 'patients'} 
          onClick={() => setView('patients')} 
        />
        <NavItem 
          icon={<Sparkles />} 
          label="AI Assistant" 
          active={currentView === 'assistant'} 
          onClick={() => setView('assistant')} 
        />
        <div className="pt-4 pb-2">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest px-3 opacity-50">Patient Experience</p>
        </div>
        <NavItem 
          icon={<BookOpen />} 
          label="Self-Journal" 
          active={currentView === 'journal'} 
          onClick={() => setView('journal')} 
        />
        <NavItem 
          icon={<BarChart3 />} 
          label="Health Insights" 
          active={currentView === 'insights'} 
          onClick={() => setView('insights')} 
        />
        <NavItem 
          icon={<Settings />} 
          label="Settings" 
          active={currentView === 'settings'} 
          onClick={() => setView('settings')} 
        />
      </nav>

      <div className="mt-auto border-t border-outline-variant pt-6 flex flex-col gap-4">
        <div className="bg-surface-container rounded-xl p-4">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1 opacity-70">SessionPilot Pro</p>
          <p className="text-xs text-primary font-medium">HIPAA Verified Status</p>
        </div>
        <button className="flex items-center gap-3 p-3 w-full rounded-xl text-on-surface-variant hover:bg-error/10 hover:text-error transition-all">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-semibold">Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

export function BottomNav({ currentView, setView }: { currentView: string; setView: (v: string) => void }) {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 flex justify-around items-center py-2 px-6 bg-surface-container-low border-t border-outline-variant rounded-t-2xl shadow-lg">
      <NavItem icon={<Calendar />} label="Sessions" active={currentView === 'dashboard'} onClick={() => setView('dashboard')} mobile />
      <NavItem icon={<Users />} label="Patients" active={currentView === 'patients' || currentView === 'patient-brief'} onClick={() => setView('patients')} mobile />
      <NavItem icon={<BarChart3 />} label="Insights" active={currentView === 'insights'} onClick={() => setView('insights')} mobile />
      <NavItem icon={<Settings />} label="Settings" active={currentView === 'settings'} onClick={() => setView('settings')} mobile />
    </nav>
  );
}

export function Header({ title, onSettingsClick, onSearchClick, showProfile = true }: { 
  title: string; 
  onSettingsClick?: () => void;
  onSearchClick?: () => void;
  showProfile?: boolean;
}) {
  return (
    <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md text-primary border-b border-outline-variant flex justify-between items-center px-8 h-16 w-full shrink-0">
      <div className="flex items-center gap-4">
        {showProfile && (
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=80&h=80&auto=format&fit=crop" 
            alt="Clinician" 
            className="md:hidden w-8 h-8 rounded-full border border-outline-variant"
          />
        )}
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {onSearchClick && (
          <button 
            onClick={onSearchClick}
            className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        )}
        <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
        </button>
        <button 
          onClick={onSettingsClick}
          className="p-2 text-primary hover:bg-surface-container rounded-full transition-colors"
        >
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
