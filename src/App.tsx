import React, { useState } from 'react';
import { Sidebar, BottomNav } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { ActiveSession } from './components/ActiveSession';
import { PatientBrief } from './components/PatientBrief';
import { Insights } from './components/Insights';
import { Login } from './components/Login';
import { Journal } from './components/Journal';
import { Assistant } from './components/Assistant';
import { Settings } from './components/Settings';
import { NoteEditor } from './components/NoteEditor';
import { motion, AnimatePresence } from 'framer-motion';

type View = 'dashboard' | 'patients' | 'insights' | 'profile' | 'active-session' | 'journal' | 'assistant' | 'settings' | 'note-editor';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState<View>('dashboard');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <Dashboard onNextPatient={() => setView('patients')} onActiveSession={() => setView('active-session')} onCompleteNote={() => setView('note-editor')} />;
      case 'patients':
        return <PatientBrief onBack={() => setView('dashboard')} />;
      case 'insights':
        return <Insights />;
      case 'journal':
        return <Journal />;
      case 'assistant':
        return <Assistant />;
      case 'active-session':
        return <ActiveSession patientName="Sarah Miller" onEnd={() => setView('dashboard')} />;
      case 'settings':
        return <Settings />;
      case 'note-editor':
        return <NoteEditor onBack={() => setView('dashboard')} />;
      default:
        return (
          <div className="flex items-center justify-center h-full text-on-surface-variant font-bold uppercase tracking-widest p-8 text-center bg-background">
            <div className="max-w-xs space-y-4">
              <p className="text-4xl opacity-20">🏥</p>
              <p>The "{view}" module is currently being calibrated for HIPAA compliance.</p>
              <button 
                onClick={() => setView('dashboard')}
                className="text-secondary underline font-bold"
              >
                Return to Dashboard
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden selection:bg-secondary/20">
      {/* Desktop Sidebar */}
      <Sidebar currentView={view} setView={(v) => setView(v as View)} />

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex-grow h-full"
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Bottom Navigation */}
        <BottomNav currentView={view} setView={(v) => setView(v as View)} />
      </div>
    </div>
  );
}
