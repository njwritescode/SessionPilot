import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Fingerprint, Key, Verified } from 'lucide-react';

export function Login({ onLogin }: { onLogin: () => void }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consent, setConsent] = useState(false);
  const [terms, setTerms] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Left Banner */}
      <aside className="hidden md:flex md:w-2/5 lg:w-1/2 bg-primary-container relative overflow-hidden flex-col justify-center px-16 text-white">
        <div className="absolute inset-0 opacity-10 blur-3xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full" />
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-12 h-12 text-secondary-container fill-current" />
            <h1 className="text-4xl font-extrabold tracking-tight">SessionPilot</h1>
          </div>
          <p className="text-xl font-medium text-on-primary-container leading-relaxed max-w-md">
            Empowering clinicians with AI-driven insights while maintaining the highest standards of HIPAA and APP compliance.
          </p>
          <div className="pt-8 space-y-4">
            <FeatureBadge icon={<Verified className="w-5 h-5" />} text="SOC2 & HIPAA Compliant Infrastructure" />
            <FeatureBadge icon={<ShieldCheck className="w-5 h-5" />} text="End-to-End Encrypted Data Processing" />
          </div>
        </div>
      </aside>

      {/* Login Form */}
      <main className="flex-1 flex flex-col items-center justify-center p-8 bg-surface">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl font-extrabold text-primary tracking-tight">Secure Clinician Login</h2>
            <p className="text-sm font-medium text-on-surface-variant">Enter your mobile number to receive a secure access code.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest ml-1">Mobile Number</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant font-bold text-sm">
                  +1
                </div>
                <input 
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-xl text-sm font-bold focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none shadow-sm"
                />
              </div>
            </div>

            <button 
              disabled={phoneNumber.length < 10}
              className="w-full bg-secondary text-white py-4 rounded-xl text-lg font-extrabold hover:brightness-110 shadow-xl shadow-secondary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:grayscale disabled:opacity-50"
            >
              Send Access Code <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-outline-variant" /></div>
            <div className="relative flex justify-center"><span className="bg-surface px-4 text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">Trusted by 2,000+ Clinics</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <AuthOption icon={<Fingerprint className="w-6 h-6" />} label="Biometric" />
            <AuthOption icon={<Key className="w-6 h-6" />} label="SSO Login" />
          </div>

          <footer className="pt-8 text-center space-y-6">
            <p className="text-xs font-bold text-on-surface-variant">
              Technical support required? <a href="#" className="text-secondary hover:underline">Contact Security Operations</a>
            </p>
            <div className="flex justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/GDPR_logo.svg" alt="GDPR" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/HIPAA_Logo.svg" alt="HIPAA" className="h-4" />
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function FeatureBadge({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
      <div className="text-secondary-container">{icon}</div>
      <span className="text-xs font-bold uppercase tracking-wider">{text}</span>
    </div>
  );
}

function CheckboxItem({ id, checked, onChange, label }: any) {
  return (
    <div className="flex items-start gap-3">
      <input 
        id={id}
        type="checkbox" 
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary cursor-pointer"
      />
      <label htmlFor={id} className="text-[11px] font-medium text-on-surface-variant leading-relaxed cursor-pointer select-none">
        {label}
      </label>
    </div>
  );
}

function AuthOption({ icon, label }: any) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-outline-variant rounded-xl hover:border-secondary transition-all cursor-pointer group hover:shadow-lg">
      <div className="text-on-surface-variant group-hover:text-secondary mb-2">{icon}</div>
      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{label}</span>
    </div>
  );
}
