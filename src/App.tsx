/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Cpu, 
  ArrowRight, 
  Check, 
  MessageSquare, 
  Terminal,
  ChevronDown,
  Globe,
  Github,
  Cloud,
  Code,
  Lock,
  Activity,
  Layers,
  Users,
  ExternalLink,
  Plus,
  Minus,
  Slack,
  Figma,
  Trello,
  Mail,
  Calendar,
  FileText,
  HardDrive,
  CreditCard,
  Layout,
  Database,
  Key,
  MousePointer2,
  Box,
  Share2,
  Search,
  Server,
  CloudUpload,
  Settings,
  GitBranch,
  CheckCircle2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="LLM.API" className="h-8" />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="#features" className="text-xs font-bold uppercase tracking-widest text-[#4D4D4D] hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-[#4D4D4D] hover:text-primary transition-colors">How it Works</a>
          <a href="#pricing" className="text-xs font-bold uppercase tracking-widest text-[#4D4D4D] hover:text-primary transition-colors">Pricing</a>
          <a href="#features" className="text-xs font-bold uppercase tracking-widest text-[#4D4D4D] hover:text-primary transition-colors">Docs</a>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button className="text-xs font-bold uppercase tracking-widest text-[#4D4D4D] hover:text-primary transition-colors">Login</button>
          <a href="https://app.llmapi.ai/signup" className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg hover:bg-accent transition-all">
            Join Waitlist
          </a>
        </div>

        <button className="lg:hidden p-2 text-slate-600" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <Minus className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-slate-200"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-bold uppercase tracking-wider text-[#4D4D4D] hover:text-primary py-2">Features</a>
              <a href="#how-it-works" onClick={() => setMobileOpen(false)} className="block text-sm font-bold uppercase tracking-wider text-[#4D4D4D] hover:text-primary py-2">How it Works</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="block text-sm font-bold uppercase tracking-wider text-[#4D4D4D] hover:text-primary py-2">Pricing</a>
              <a href="#features" onClick={() => setMobileOpen(false)} className="block text-sm font-bold uppercase tracking-wider text-[#4D4D4D] hover:text-primary py-2">Docs</a>
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button className="w-full text-sm font-bold uppercase tracking-wider text-[#4D4D4D] py-2">Login</button>
                <a href="https://app.llmapi.ai/signup" className="w-full bg-primary text-white text-sm font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-accent block text-center">
                  Join Waitlist
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const TypewriterText = ({ text, delay = 50 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>
      {currentText}
      {currentIndex < text.length && <span className="animate-cursor">|</span>}
    </span>
  );
};

const ChatMockup = () => {
  const [scenario, setScenario] = useState(0);

  const scenarios = [
    {
      label: "Calendar & Scheduling",
      messages: [
        { from: "user", text: "Hey, what's on my calendar today?", time: "10:21" },
        { from: "ai", text: "You have 3 meetings:\n1. Sarah — 10am, Q1 budget review\n2. Design sync — 12pm\n3. Tom — 2pm, partnership call\n\nPrepare a Q1 summary for the budget review?", time: "10:21" },
        { from: "user", text: "Yes, and move the 2pm call with Tom to Thursday", time: "10:22" },
        { from: "ai", text: "Done ✓ Tom's call moved to Thursday 2pm, he's confirmed. Q1 summary sent to your email — revenue up 14% vs last quarter.", time: "10:22" },
      ]
    },
    {
      label: "Email Management",
      messages: [
        { from: "user", text: "Check my email and flag anything urgent", time: "08:05" },
        { from: "ai", text: "You have 23 new emails. I flagged 3 urgent ones:\n\n1. Client invoice overdue — from accounting\n2. Server downtime alert — from DevOps\n3. Board meeting moved to Friday — from CEO", time: "08:05" },
        { from: "user", text: "Draft a reply to the accounting one, tell them we'll pay by Friday", time: "08:06" },
        { from: "ai", text: "Done ✓ Draft sent to your inbox for review. Subject: \"Re: Invoice #4521 — Payment scheduled for Friday.\" Want me to send it directly next time?", time: "08:06" },
      ]
    },
    {
      label: "Task Automation",
      messages: [
        { from: "user", text: "Every Monday morning, send me a summary of last week's sales from HubSpot", time: "09:14" },
        { from: "ai", text: "Got it ✓ I'll pull your HubSpot weekly sales data every Monday at 8am and send you a summary here. Want me to include a comparison with the previous week?", time: "09:14" },
        { from: "user", text: "Yes, and also post it to the #sales Slack channel", time: "09:15" },
        { from: "ai", text: "Done ✓ Recurring task set:\n• Every Monday 8am\n• HubSpot sales summary + week-over-week comparison\n• Sent here + #sales on Slack\n\nFirst report arrives next Monday.", time: "09:15" },
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setScenario((prev) => (prev + 1) % scenarios.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = scenarios[scenario];

  return (
    <div className="relative z-10 rounded-xl shadow-2xl w-full mx-auto lg:mx-0 overflow-hidden border border-slate-200">
      {/* Telegram header */}
      <div className="bg-[#517DA2] px-4 py-3 flex items-center gap-3">
        <ArrowRight className="w-5 h-5 text-white/80 rotate-180" />
        <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold text-white">OpenClaw AI Agent</div>
          <div className="text-[11px] text-white/70">online</div>
        </div>
        <Search className="w-5 h-5 text-white/60" />
      </div>

      {/* Chat area with background image */}
      <div
        className="p-4 h-[280px] md:h-[310px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #DBEDBA 0%, #A7CF8C 50%, #8EC97A 100%)' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={scenario}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {current.messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.25 }}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[82%] px-3 py-1.5 text-[11px] md:text-[12px] leading-relaxed shadow-sm whitespace-pre-line ${
                  msg.from === 'user'
                    ? 'bg-[#EEFFDE] text-slate-800 rounded-xl rounded-br-sm'
                    : 'bg-white text-slate-800 rounded-xl rounded-bl-sm'
                }`}>
                  {msg.text}
                  <span className={`text-[9px] float-right ml-2 mt-1 ${msg.from === 'user' ? 'text-[#4FAE4E]/60' : 'text-slate-400'}`}>
                    {msg.time} {msg.from === 'user' && <span className="text-[#4FAE4E]/60">✓✓</span>}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="bg-white px-3 py-2.5 flex items-center gap-2">
        <Plus className="w-6 h-6 text-slate-400" />
        <div className="flex-1 bg-slate-50 rounded-full px-4 py-2 text-xs text-slate-400 border border-slate-200">
          Message
        </div>
        <div className="w-8 h-8 rounded-full bg-[#517DA2] flex items-center justify-center">
          <ArrowRight className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

// --- Integrations ---
const Integrations = () => {
  const platforms = [
    { name: "Slack", icon: Slack },
    { name: "Discord", icon: MessageSquare },
    { name: "Telegram", icon: MessageSquare },
    { name: "WhatsApp", icon: MessageSquare },
    { name: "Web", icon: Globe },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
      {platforms.map((item) => (
        <div key={item.name} className="flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer group">
          <item.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
          <span className="text-xs font-semibold tracking-tight">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

// --- Trust Bar ---
const TrustBar = () => {
  const metrics = [
    { value: "1M+", label: "Users" },
    { value: "800+", label: "App Connections" },
    { value: "60s", label: "Setup Time" },
  ];

  return (
    <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
      {metrics.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-slate-500">
          <span className="text-sm font-bold text-slate-900">{item.value}</span>
          <span className="text-xs font-medium text-slate-400">{item.label}</span>
          {i < metrics.length - 1 && <span className="ml-4 text-slate-200 select-none">|</span>}
        </div>
      ))}
    </div>
  );
};

// --- Screen 2: Social Proof ---
const SocialProof = () => {
  const logos = [
    'Pika', 'Humata', 'LangChain', 'Resend', 'Loops', 
    'Mobbin', 'Gopuff', 'Chatbase', 'Scale AI', 'Vercel',
    'Pika', 'Humata', 'LangChain', 'Resend', 'Loops', 
    'Mobbin', 'Gopuff', 'Chatbase', 'Scale AI', 'Vercel'
  ];

  return (
    <section className="py-4 md:py-6 bg-white">
      <div className="container mx-auto px-6 overflow-hidden">
        <div className="relative flex overflow-x-hidden">
          <motion.div 
            className="flex items-center gap-10 md:gap-16 whitespace-nowrap py-4"
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {logos.map((logo, i) => (
              <span key={i} className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-300 tracking-tighter hover:text-slate-900 transition-colors cursor-default">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-4">
          <p className="text-slate-400 font-medium tracking-widest uppercase text-[10px]">
            Trusted by fast-growing companies worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Screen 3: Value Propositions (Sticky Layout) ---
const ValueProps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const features = [
    {
      id: 0,
      number: "01",
      tag: "No installs. No code. No tutorials.",
      title: "Ready in 60 Seconds. No Tech Skills Needed.",
      description: "Sign up, connect WhatsApp or Telegram, and your OpenClaw assistant is ready to work. If you can send a text message, you can use OpenClaw.",
      icon: Zap,
      stat: "75% of DIY AI agent setups fail. OpenClaw works the first time, every time.",
      visual: (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm w-full">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center"><Check className="w-4 h-4 text-emerald-600" /></div>
              <span className="text-sm font-bold text-slate-900">Setup Complete</span>
            </div>
            {["Sign up with email", "Connect WhatsApp", "Start chatting with your AI"].map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">{i + 1}</div>
                <span className="text-xs font-medium text-slate-600">{step}</span>
                <Check className="w-3 h-3 text-emerald-500 ml-auto" />
              </div>
            ))}
            <div className="text-[10px] text-emerald-500 font-bold pt-2">Completed in 47 seconds</div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      number: "02",
      tag: "One click. All your tools. Connected.",
      title: "Connects to 800+ Apps You Already Use",
      description: "Gmail, Google Calendar, Notion, HubSpot, Salesforce, Trello, Slack, Google Drive — your OpenClaw assistant connects to all of them with one click. No API keys, no configuration, no IT department needed.",
      icon: Layers,
      stat: "Average professional uses 9+ apps daily. OpenClaw connects them all through one assistant.",
      visual: (
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            "Gmail", "Google Calendar", "Slack", "Notion",
            "HubSpot", "Salesforce", "Trello", "Google Drive"
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
              <Check className="w-3 h-3 text-emerald-500" /> {item}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      number: "03",
      tag: "Your data. Your rules. Zero lock-in.",
      title: "Always On. Always Private. Always Yours.",
      description: "Your OpenClaw assistant runs 24/7 on its own secure server. Your conversations are encrypted. Your data is never shared or used for training. Cancel anytime and export everything with zero lock-in.",
      icon: Shield,
      stat: "74% of professionals worry about AI security. OpenClaw runs on isolated, encrypted infrastructure.",
      visual: (
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            "24/7 Uptime", "End-to-End Encryption",
            "No Data Training", "One-Click Export",
            "Isolated Servers", "Cancel Anytime"
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
              <Check className="w-3 h-3 text-emerald-500" /> {item}
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <section id="features" ref={containerRef} className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">

          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 lg:h-fit space-y-8">
            <div className="space-y-4">
              <h2 className="font-bold text-slate-900 tracking-tight leading-tight text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px]">
                The AI Assistant That<br />Replaces All Tools
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Run your personal OpenClaw AI assistant that connects to your tools, learns how you work, and executes tasks around the clock.
              </p>
            </div>
            
            <div className="pt-4">
              <a href="https://app.llmapi.ai/signup" className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-accent transition-all shadow-lg shadow-primary/20 inline-block">
                Join Waitlist
              </a>
            </div>
          </div>

          {/* Right Side: Scrolling Steps */}
          <div className="lg:w-2/3 space-y-12 md:space-y-20 lg:pb-20">
            {features.map((feature) => (
              <div key={feature.id} className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-6">
                    <span className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tighter leading-none select-none">
                      {feature.number}
                    </span>
                    <div className="space-y-2 pt-1">
                      <div className="text-xs font-bold text-primary uppercase tracking-widest">
                        {feature.tag}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
                    {feature.description}
                  </p>
                  {feature.stat && (
                    <p className="text-sm text-primary font-medium italic mt-4">{feature.stat}</p>
                  )}
                </div>
                
                <div className="bg-white/40 backdrop-blur-xl rounded-xl border border-white/60 p-6 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                  <div className="relative z-10 flex justify-center">
                    {feature.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Mock-up Visuals for HowItWorks ---

const ServiceSelectorMock = () => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden w-full">
    <div className="p-3 border-bottom border-slate-100 bg-slate-50/50 flex items-center gap-2">
      <Plus className="w-3 h-3 text-slate-400" />
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">New service</span>
    </div>
    <div className="p-1">
      {[
        { name: "Static site", icon: Layout, active: false },
        { name: "Web service", icon: Server, active: true },
        { name: "Private service", icon: Shield, active: false },
        { name: "Workflow", icon: Zap, active: false },
        { name: "Background Worker", icon: Cpu, active: false },
      ].map((item, i) => (
        <div 
          key={i} 
          className={`flex items-center justify-between p-2.5 rounded-xl transition-colors ${item.active ? 'bg-primary/5 text-primary' : 'text-slate-600'}`}
        >
          <div className="flex items-center gap-3">
            <item.icon className={`w-4 h-4 ${item.active ? 'text-primary' : 'text-slate-400'}`} />
            <span className="text-xs font-medium">{item.name}</span>
          </div>
          {item.active && <Check className="w-3 h-3 text-primary" />}
        </div>
      ))}
    </div>
  </div>
);

const DeployConfigMock = () => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 w-full space-y-4">
    <div className="space-y-1.5">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Branch</div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-2">
        <GitBranch className="w-3 h-3 text-slate-400" />
        <span className="text-xs font-mono text-slate-600">main</span>
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Build Command</div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-2">
        <Terminal className="w-3 h-3 text-slate-400" />
        <span className="text-xs font-mono text-slate-600">npm run build</span>
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Start Command</div>
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center gap-2">
        <Zap className="w-3 h-3 text-slate-400" />
        <span className="text-xs font-mono text-slate-600">npm start</span>
      </div>
    </div>
    <button className="w-full bg-slate-900 text-white py-2 rounded-xl text-xs font-bold hover:bg-black transition-colors">
      Manual Deploy
    </button>
  </div>
);

const DeployStatusMock = () => (
  <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden w-full">
    <div className="p-3 border-b border-slate-100 bg-slate-50/50">
      <div className="flex items-center gap-2">
        <Server className="w-3 h-3 text-slate-400" />
        <span className="text-[10px] font-mono text-slate-500">openclaw-server-production</span>
      </div>
    </div>
    <div className="p-4 space-y-4">
      {[
        { status: "Automatic Deploy live", time: "1:20:50 PM", desc: "Final tweaks" },
        { status: "Automatic Deploy live", time: "1:10:42 PM", desc: "Fix logic" },
        { status: "Manual Deploy live", time: "9:50:12 AM", desc: "Initial deploy" },
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
          </div>
          <div className="space-y-0.5">
            <div className="text-[11px] font-bold text-slate-900">{item.status}</div>
            <div className="text-[10px] text-slate-400">{item.time} — {item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- Screen 4: How It Works ---
const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-20">
          <h2 className="font-bold text-slate-900 tracking-tight">Click, Click, Done.</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">Your OpenClaw assistant is live in 3 steps. No coding. No waiting. No IT department.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            {
              step: 1,
              title: "Sign Up & Connect Your Apps",
              desc: "Create your free account in 60 seconds. Connect WhatsApp or Telegram with one tap. Then connect the apps you use: Gmail, Calendar, Notion, Slack, HubSpot.",
              visual: <ServiceSelectorMock />,
              icon: Sparkles
            },
            {
              step: 2,
              title: "Tell It What To Do",
              desc: "Just text your OpenClaw assistant like you'd text a colleague. \"Check my email every morning and flag anything urgent.\" It understands natural language — no commands or syntax.",
              visual: <DeployConfigMock />,
              icon: MessageSquare
            },
            {
              step: 3,
              title: "It Gets to Work",
              desc: "Your OpenClaw assistant starts executing immediately. It checks your email, updates your calendar, drafts responses, pulls reports, and sends you summaries.",
              visual: <DeployStatusMock />,
              icon: Activity
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="space-y-4 md:min-h-[200px]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-sm border border-primary/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 flex items-center justify-center border border-slate-100 min-h-[260px] md:min-h-[320px] mt-6 md:mt-8 flex-1">
                {item.visual}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-24 text-center">
          <a href="https://app.llmapi.ai/signup" className="bg-primary text-white px-7 py-3 rounded-xl font-bold text-lg hover:bg-accent transition-all shadow-xl shadow-primary/20 inline-block">
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

// --- OpenCloud Features (Bento Grid) ---
const OpenCloudFeatures = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-10 md:mb-16">
          <h2 className="font-bold text-slate-900 tracking-tight">One OpenClaw Assistant. Everything Handled.</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">From emails to reports, from scheduling to research — your OpenClaw assistant handles the busywork across all your tools.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {/* Row 1 */}
          <div className="sm:col-span-2 md:col-span-6 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between group gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-900">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Email Management</h3>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Reads, sorts, and prioritizes your inbox. Drafts replies in your voice. Flags urgent messages. Sends follow-ups automatically. <strong>Saves you 2+ hours daily.</strong>
              </p>
              <ul className="space-y-2 pt-2">
                {['Smart inbox sorting', 'Auto-draft replies', 'Follow-up reminders'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Check className="w-3 h-3 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-10 h-10 text-slate-200" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Calendar className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Calendar & Scheduling</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Schedules meetings across timezones. Resolves conflicts. Blocks focus time. Sends reminders. No more back-and-forth emails to find a time.
            </p>
            <div className="mt-auto pt-4 space-y-2">
              <div className="h-6 bg-slate-50 rounded-xl border border-slate-100"></div>
              <div className="h-6 bg-slate-50 rounded-xl border border-slate-100"></div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Zap className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Task Automation</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Automates repetitive workflows: weekly reports, status updates, data entry, file organization. Set it once, it runs forever.
            </p>
            <div className="mt-auto pt-4">
              <div className="bg-slate-900 rounded-xl p-3 text-[10px] text-emerald-400 font-medium">
                3 workflows running
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-4 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Search className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Research & Summaries</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Summarizes documents, pulls data from multiple sources, and delivers concise briefs.
            </p>
            <div className="mt-auto pt-4 grid grid-cols-3 gap-2">
              {[1,2,3].map(i => <div key={i} className="aspect-square bg-slate-50 rounded-xl border border-slate-100"></div>)}
            </div>
          </div>

          <div className="md:col-span-4 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Content & Writing</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Drafts social posts, email newsletters, meeting notes, and reports. Adapts to your brand voice. Repurposes one piece into 5 formats automatically.
            </p>
            <div className="mt-auto pt-4 flex items-center justify-center">
              <FileText className="w-8 h-8 text-slate-200" />
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-4 bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">800+ App Connections</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Gmail, Slack, Notion, HubSpot, Salesforce, Trello, Google Drive, Calendar — your OpenClaw assistant connects to all the tools you already use. One click, no configuration.
            </p>
            <div className="mt-auto pt-4 flex items-center justify-center">
              <Layers className="w-8 h-8 text-slate-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Screen 5: Pricing ---
const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-16 stripe-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-bold text-slate-900 mb-4">Start Free. Upgrade When You're Ready.</h2>
          <p className="text-slate-500 text-base md:text-lg">No credit card. No commitment. Your OpenClaw assistant is live in 60 seconds.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              name: "Free",
              price: "$0",
              desc: "Try your OpenClaw assistant, no commitment",
              features: ["1 OpenClaw assistant", "150 tasks included", "WhatsApp & Telegram", "Gmail, Calendar, Slack connections", "Powered by top AI (Claude, GPT, Gemini)", "Community support"],
              cta: "Join Waitlist",
              highlight: false
            },
            {
              name: "Pro",
              price: "$29",
              desc: "For professionals who want to 10x their output",
              features: ["Everything in Free", "Unlimited tasks", "Multiple OpenClaw assistants", "All 800+ app connections", "Email management & auto-replies", "Weekly automated reports", "Priority support", "Always-on (24/7)"],
              cta: "Join Waitlist",
              highlight: true
            },
            {
              name: "Team",
              price: "$99",
              desc: "For teams that want AI-powered operations",
              features: ["Everything in Pro", "Unlimited OpenClaw assistants", "Team collaboration & shared assistants", "Custom workflows", "Advanced analytics & insights", "Priority support + SLA"],
              cta: "Join Waitlist",
              highlight: false
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "For organizations with security and scale requirements",
              features: ["Everything in Team", "SSO, audit logs, compliance", "Custom integrations", "Dedicated account manager", "On-premise options", "Custom SLA"],
              cta: "Join Waitlist",
              highlight: false
            }
          ].map((plan, i) => (
            <div key={i} className={`glass-card p-6 md:p-8 rounded-xl flex flex-col ${plan.highlight ? 'ring-2 ring-primary relative md:scale-105 z-10' : ''}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500 text-sm">/mo</span>}
                </div>
                <p className="text-xs text-slate-500 font-medium">{plan.desc}</p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map(feat => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {feat}
                  </li>
                ))}
              </ul>
              <a href="https://app.llmapi.ai/signup" className={`w-full py-2 rounded-xl font-bold text-sm transition-all block text-center ${plan.highlight ? 'bg-primary text-white hover:bg-accent shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium">
            All plans include WhatsApp, Telegram & Slack access. <span className="text-primary font-bold cursor-pointer hover:underline">Compare plans in detail</span>
          </p>
        </div>
      </div>
    </section>
  );
};

// --- Screen 6: FAQ ---
const FAQItem = ({ q, a }: { q: string; a: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-bold text-slate-900 group-hover:text-primary transition-colors pr-4">{q}</span>
        {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-600 leading-relaxed text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What is OpenClaw?",
      a: "OpenClaw is an AI assistant platform that handles your emails, calendar, tasks, and more through WhatsApp, Telegram, or Slack. Think of it as a smart team member that works 24/7, connects to 800+ apps, and costs a fraction of a human assistant."
    },
    {
      q: "Do I need any technical skills?",
      a: "None at all. If you can send a text message, you can use OpenClaw. No code, no installs, no setup. Sign up, connect WhatsApp, and start texting your OpenClaw assistant. It's live in 60 seconds."
    },
    {
      q: "What can the OpenClaw assistant actually do?",
      a: "Manage your email (sort, reply, flag). Schedule meetings and resolve conflicts. Automate reports and status updates. Research competitors. Draft content. Monitor apps and send alerts. Basically anything repetitive that eats your time."
    },
    {
      q: "Which apps does it connect to?",
      a: "Over 800 apps including Gmail, Google Calendar, Slack, Notion, HubSpot, Salesforce, Trello, Linear, Google Drive, and many more. All connected with one click, no API keys or passwords to share."
    },
    {
      q: "Is my data safe?",
      a: "Yes. Your conversations are encrypted end-to-end. Your data is never shared with third parties or used to train AI models. Each OpenClaw assistant runs on its own isolated server. You can export your data and delete your account at any time."
    },
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT is a chat window where you ask questions and get answers. Your OpenClaw assistant actually does things: reads your email, books meetings, monitors your apps, sends reports, and executes tasks autonomously. It's the difference between asking for directions and having a driver."
    },
    {
      q: "What if I want to cancel?",
      a: "Cancel with one click, anytime. No contracts, no penalties, no retention calls. Your data stays exportable for 30 days after cancellation."
    },
    {
      q: "Is there a free plan?",
      a: "Yes. Start free with 150 tasks included, no credit card. Your OpenClaw assistant is live in 60 seconds."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-500">Everything you need to know about OpenClaw.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 overflow-hidden relative">
        {/* Stripe-like background elements */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 md:space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                OpenClaw AI Assistant Platform
              </div>
              <h1 className="text-slate-900 text-[28px] sm:text-[34px] md:text-[40px] leading-[1.15]">
                OpenClaw AI Agent in Cloud<br />
                <span className="text-primary">in 60 seconds</span>
              </h1>
              <p className="text-base md:text-xl text-[#4D4D4D] max-w-lg leading-relaxed">
                OpenClaw AI assistant that handles emails, manages your calendar, automates repetitive tasks, and reports back through WhatsApp, Telegram, or Slack. No setup, ready in 60 seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.llmapi.ai/signup" className="bg-primary text-white px-7 py-3 rounded-xl font-bold text-lg hover:bg-accent transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#how-it-works" className="bg-slate-50 text-slate-900 px-7 py-3 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all border border-slate-200 flex items-center justify-center gap-2">
                  See How It Works
                </a>
              </div>
              <TrustBar />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:mt-6"
            >
              <ChatMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <SocialProof />
      <ValueProps />
      <HowItWorks />
      <OpenCloudFeatures />
      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-white mb-4">Ready to Get Your Time Back?</h2>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-2">
            Join thousands of founders, marketers, and teams who delegate their busywork to their OpenClaw assistant.
          </p>
          <p className="text-sm text-slate-500 mb-8 md:mb-12">No credit card. No setup. No tech skills. Just results.</p>
          <a href="https://app.llmapi.ai/signup" className="bg-white text-slate-900 px-6 md:px-9 py-3 md:py-4 rounded-xl font-bold text-base md:text-xl hover:bg-slate-100 transition-all transform hover:scale-105 active:scale-95 shadow-2xl inline-block">
            Join Waitlist
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 md:py-16 bg-[#1a1a1a] text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-10 md:mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo-light.png" alt="LLM.API" className="h-10" />
                <span className="font-heading font-bold text-xl tracking-tight text-white">LLM.API</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your OpenClaw assistant that handles emails, calendar, tasks, and more — through WhatsApp, Telegram, or Slack.
              </p>
            </div>

            <div>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">How it Works</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">Models</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-sm font-medium text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-white cursor-pointer transition-colors">Docs</li>
                <li className="hover:text-white cursor-pointer transition-colors">Terms</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-slate-500 text-xs font-medium">© 2026 LLM.API. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
