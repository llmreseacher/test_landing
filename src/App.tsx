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
          <a href="https://app.llmapi.ai/signup" className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 hover:bg-accent transition-all">
            Get Started
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
                <a href="https://app.llmapi.ai/signup" className="w-full bg-primary text-white text-sm font-bold uppercase tracking-wider py-2.5 hover:bg-accent block text-center">
                  Get Started
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

const InteractiveTerminal = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scenarios = [
    {
      input: 'clawcloud deploy --name "my-agent"',
      output: "Provisioning dedicated VM... done (12s)\nInstalling OpenClaw v1.8.2... done\nConnecting WhatsApp... connected\nConnecting Telegram... connected\nAgent \"my-agent\" is live.",
      status: "Ready to receive messages"
    },
    {
      input: "clawcloud integrations --add gmail calendar github",
      output: "Connecting Gmail... done\nConnecting Calendar... done\nConnecting GitHub... done\n800+ integrations available via Composio.",
      status: "Integrations Active"
    },
    {
      input: "clawcloud models --list --switch claude-3-5-sonnet",
      output: "Available: Claude, GPT-5, Gemini, DeepSeek, Mistral, Llama, Grok\nSwitching to claude-3-5-sonnet... done\n100+ models from 17+ providers.",
      status: "Model Updated"
    }
  ];

  const current = scenarios[step];

  return (
    <div className="relative z-10 bg-slate-900 rounded-none p-5 md:p-8 shadow-2xl border border-slate-800 w-full mx-auto lg:mx-0 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
          <span className="text-slate-400 text-xs font-mono">bash — openclaw</span>
        </div>
      </div>
      
      <div className="font-mono text-xs md:text-sm min-h-[200px] md:min-h-[260px] flex flex-col justify-between">
        <div>
          <div className="flex items-start mb-4">
            <div className="text-primary mr-2">➜</div>
            <div className="flex-1 text-slate-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`input-${step}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TypewriterText text={current.input} delay={40} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`output-${step}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="text-slate-400 leading-relaxed whitespace-pre-line"
            >
              {current.output}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="text-emerald-400 flex items-center gap-2 mt-4"
        >
          <Check className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">{current.status}</span>
        </motion.div>
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
    { value: "145K+", label: "GitHub Stars" },
    { value: "800+", label: "Integrations" },
    { value: "100+", label: "AI Models" },
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
      tag: "Sign up. Name your agent. Done.",
      title: "60 Seconds, Not 60 Minutes",
      description: "No npm install. No Docker compose. No YAML configs. No port forwarding. ClawCloud pre-configures everything: server, OpenClaw, channels, integrations. Your agent is messaging-ready before your coffee cools.",
      icon: Zap,
      visual: (
        <div className="bg-white border border-slate-200 rounded-none p-6 shadow-sm">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Local Setup</div>
              <ul className="text-[10px] space-y-2 text-slate-400 font-mono">
                <li>• Install Docker & Python</li>
                <li>• Configure ENV files</li>
                <li>• Setup Port Forwarding</li>
                <li>• Manage local DB</li>
                <li className="text-rose-500 font-bold">~ 45 Minutes</li>
              </ul>
            </div>
            <div className="border-l border-slate-100 pl-8">
              <div className="text-[10px] font-bold text-primary uppercase mb-4 tracking-wider">OpenClaw</div>
              <ul className="text-[10px] space-y-2 text-slate-600 font-mono">
                <li>• Pick a template</li>
                <li>• Connect API keys</li>
                <li>• Hit Deploy</li>
                <li className="text-emerald-500 font-bold">~ 60 Seconds</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      number: "02",
      tag: "Your agent never sleeps. Neither does our infrastructure.",
      title: "Always On. Always Secure. Always Updated.",
      description: "Your agent runs on a dedicated cloud VM with 99.99% uptime. Auto-updates keep OpenClaw current without downtime. Automatic daily backups with one-click restore. No exposed tokens, no open ports. SSH access when you need it.",
      icon: Shield,
      visual: (
        <div className="grid grid-cols-2 gap-4 w-full">
          {[
            "99.9% Uptime SLA",
            "End-to-End Encryption",
            "Sandboxed Execution",
            "Auto Key Rotation",
            "IAM Controls",
            "Audit Logs"
          ].map(item => (
            <div key={item} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-3 rounded-none border border-slate-200 shadow-sm">
              <Check className="w-3 h-3 text-emerald-500" /> {item}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 2,
      number: "03",
      tag: "Connect everything. Automate anything.",
      title: "800+ Tools. Every Channel. One Agent.",
      description: "One-click OAuth connections to Gmail, Calendar, GitHub, Notion, HubSpot, Salesforce, Linear, and 790+ more via Composio. Talk to your agent on WhatsApp, Telegram, Discord, Slack, or web. One agent, every channel, every tool.",
      icon: Code,
      visual: (
        <div className="space-y-4 w-full">
          <div className="bg-white rounded-none p-4 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Github className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-mono text-slate-600">openclaw/core</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-slate-100 rounded w-3/4"></div>
              <div className="h-2 bg-slate-100 rounded w-1/2"></div>
              <div className="h-2 bg-slate-100 rounded w-5/6"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20">MIT License</div>
            <div className="bg-emerald-50/50 text-emerald-600 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-100">15k Stars</div>
          </div>
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
              <h2 className="font-bold text-slate-900 tracking-tight leading-tight">
                Why Cloud Beats Local
              </h2>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Everything you need to run OpenClaw without the headaches of self-hosting. Dedicated infrastructure, instant deployment, zero maintenance.
              </p>
            </div>
            
            <div className="pt-4">
              <a href="https://app.llmapi.ai/signup" className="bg-primary text-white px-6 py-3 rounded-none font-bold hover:bg-accent transition-all shadow-lg shadow-primary/20 inline-block">
                Get Started Free
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
                </div>
                
                <div className="bg-white/40 backdrop-blur-xl rounded-none border border-white/60 p-6 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
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
  <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden w-full max-w-[280px]">
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
          className={`flex items-center justify-between p-2.5 rounded-none transition-colors ${item.active ? 'bg-primary/5 text-primary' : 'text-slate-600'}`}
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
  <div className="bg-white border border-slate-200 rounded-none shadow-sm p-4 w-full max-w-[280px] space-y-4">
    <div className="space-y-1.5">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Branch</div>
      <div className="bg-slate-50 border border-slate-200 rounded-none p-2 flex items-center gap-2">
        <GitBranch className="w-3 h-3 text-slate-400" />
        <span className="text-xs font-mono text-slate-600">main</span>
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Build Command</div>
      <div className="bg-slate-50 border border-slate-200 rounded-none p-2 flex items-center gap-2">
        <Terminal className="w-3 h-3 text-slate-400" />
        <span className="text-xs font-mono text-slate-600">npm run build</span>
      </div>
    </div>
    <div className="space-y-1.5">
      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Start Command</div>
      <div className="bg-slate-50 border border-slate-200 rounded-none p-2 flex items-center gap-2">
        <Zap className="w-3 h-3 text-slate-400" />
        <span className="text-xs font-mono text-slate-600">npm start</span>
      </div>
    </div>
    <button className="w-full bg-slate-900 text-white py-2 rounded-none text-xs font-bold hover:bg-black transition-colors">
      Manual Deploy
    </button>
  </div>
);

const DeployStatusMock = () => (
  <div className="bg-white border border-slate-200 rounded-none shadow-sm overflow-hidden w-full max-w-[280px]">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {[
            {
              step: 1,
              title: "Select a Model",
              desc: "Sign up free — no credit card required. Name your agent and choose from 100+ AI models: Claude, GPT-5, Gemini, DeepSeek, Mistral, Llama, and more. Switch models anytime.",
              visual: <ServiceSelectorMock />,
              icon: Terminal
            },
            {
              step: 2,
              title: "Connect Your Channels",
              desc: "Connect WhatsApp, Telegram, Discord, or Slack with one click. Browse 800+ integrations and toggle on what you need — Gmail, Calendar, GitHub, Notion, and more.",
              visual: <DeployConfigMock />,
              icon: CloudUpload
            },
            {
              step: 3,
              title: "Your Agent Is Live",
              desc: "Your OpenClaw agent is running on a dedicated cloud server. Send a message on WhatsApp or Telegram — it remembers, it executes, it reports back.",
              visual: <DeployStatusMock />,
              icon: Activity
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <div className="space-y-4 md:min-h-[200px]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-none flex items-center justify-center font-bold text-sm border border-primary/20">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{item.desc}</p>
              </div>
              <div className="bg-slate-50 rounded-none p-6 md:p-8 flex items-center justify-center border border-slate-100 min-h-[260px] md:min-h-[320px] mt-6 md:mt-8 flex-1">
                {item.visual}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-24 text-center">
          <button className="bg-primary text-white px-7 py-3 rounded-none font-bold text-lg hover:bg-accent transition-all shadow-xl shadow-primary/20">
            Start Free — 60 Seconds to Your First Agent
          </button>
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
          <h2 className="font-bold text-slate-900 tracking-tight">Everything Your Agent Needs. Built In.</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">ClawCloud is a complete platform for running OpenClaw agents in the cloud. No plugins to install, no services to configure.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
          {/* Row 1 */}
          <div className="sm:col-span-2 md:col-span-6 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row justify-between group gap-4">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-900">
                <Server className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Dedicated Cloud VM</h3>
              </div>
              <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                Your agent runs on its own <strong>isolated virtual machine</strong>. No shared resources, no noisy neighbors. Consistent performance even at peak load.
              </p>
              <ul className="space-y-2 pt-2">
                {['Isolated environment', '99.99% uptime', 'SSH access'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Check className="w-3 h-3 text-emerald-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-24 bg-slate-50 rounded-none border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Database className="w-10 h-10 text-slate-200" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Cpu className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">100+ AI Models</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Claude, GPT-5, Gemini, DeepSeek, Mistral, Llama, Grok — 100+ curated models from 17+ providers. Switch per agent, no lock-in.
            </p>
            <div className="mt-auto pt-4 space-y-2">
              <div className="h-6 bg-slate-50 rounded-none border border-slate-100"></div>
              <div className="h-6 bg-slate-50 rounded-none border border-slate-100"></div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Layers className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">800+ Integrations</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Gmail, Calendar, GitHub, Notion, Salesforce, HubSpot, Linear, Trello, Google Drive and more via Composio. One-click OAuth, no manual API setup.
            </p>
            <div className="mt-auto pt-4">
              <div className="bg-slate-900 rounded-none p-3 font-mono text-[10px] text-emerald-400">
                $ opencloud deploy
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="md:col-span-3 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Multi-Channel Messaging</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              WhatsApp, Telegram, Discord, Slack, and web — all from one agent. Persistent memory across every channel.
            </p>
            <div className="mt-auto pt-4 grid grid-cols-3 gap-2">
              {[1,2,3].map(i => <div key={i} className="aspect-square bg-slate-50 rounded-none border border-slate-100"></div>)}
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Auto-Updates & Backups</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              OpenClaw stays current automatically. Daily backups with one-click restore. Zero-downtime updates.
            </p>
            <div className="mt-auto pt-4 flex justify-center">
              <MousePointer2 className="w-8 h-8 text-slate-200 animate-bounce" />
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Terminal className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">SSH & Full Control</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              SSH access on all plans. Run custom scripts, debug in real-time, install packages. Your server, your rules.
            </p>
            <div className="mt-auto pt-4">
              <div className="w-full h-10 bg-slate-50 rounded-none border border-slate-100 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary/20 animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-none p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <Server className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Data APIs</h3>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Instant ready-to-use Restful APIs for your database.
            </p>
            <div className="mt-auto pt-4 space-y-2">
              <div className="h-2 bg-slate-100 rounded-full w-full"></div>
              <div className="h-2 bg-slate-100 rounded-full w-2/3"></div>
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
          <h2 className="font-bold text-slate-900 mb-4">Start Free. Scale When You're Ready.</h2>
          <p className="text-slate-500 text-base md:text-lg">No credit card required. Your agent is live in 60 seconds on any plan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              name: "Free",
              price: "$0",
              desc: "For trying out OpenClaw in the cloud",
              features: ["150 AI credits included", "1 agent", "All 94 AI models", "800+ integrations", "WhatsApp, Telegram, Discord, Slack", "Community support"],
              cta: "Get Started Free",
              highlight: false
            },
            {
              name: "Pro",
              price: "$29",
              desc: "For power users and solo builders",
              features: ["Bundled AI credits ($8–$60 value)", "Multiple agents", "Dedicated cloud VM", "All 94 models + BYOK", "800+ integrations", "All channels", "SSH access", "Auto-backups", "Priority support"],
              cta: "Start with Pro",
              highlight: true
            },
            {
              name: "Team",
              price: "$99",
              desc: "For teams running agents at scale",
              features: ["Everything in Pro", "Unlimited agents", "Team seats & permissions", "Shared agent library", "Advanced analytics", "Priority support + SLA"],
              cta: "Start with Team",
              highlight: false
            },
            {
              name: "Enterprise",
              price: "Custom",
              desc: "For organizations with custom requirements",
              features: ["Everything in Team", "Custom credit allocation", "Custom models + on-prem options", "Custom connectors & integrations", "Dedicated CSM", "SSO, audit logs, compliance", "GPU options"],
              cta: "Contact Sales",
              highlight: false
            }
          ].map((plan, i) => (
            <div key={i} className={`glass-card p-6 md:p-8 rounded-none flex flex-col ${plan.highlight ? 'ring-2 ring-primary relative md:scale-105 z-10' : ''}`}>
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
              <a href="https://app.llmapi.ai/signup" className={`w-full py-2 rounded-none font-bold text-sm transition-all block text-center ${plan.highlight ? 'bg-primary text-white hover:bg-accent shadow-lg shadow-primary/20' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}`}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium">
            Need to self-host? <span className="text-primary font-bold cursor-pointer hover:underline">Check out our Open Source documentation</span>
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
      q: "What is ClawCloud?",
      a: "ClawCloud runs OpenClaw — the open-source AI agent with 145K+ GitHub stars — in the cloud for you. Each agent gets a dedicated server, connects to 800+ tools, and works across WhatsApp, Telegram, Discord, Slack, and web."
    },
    {
      q: "How is this different from running OpenClaw locally?",
      a: "Local setup requires npm, Docker, environment variables, port forwarding, and ongoing maintenance. ClawCloud handles all of this. You sign in, name your agent, and it's live in 60 seconds with all channels and integrations ready."
    },
    {
      q: "Is it really a dedicated server?",
      a: "Yes. Your OpenClaw agent runs on its own isolated cloud VM — not a shared container. Your resources aren't affected by other users. SSH access is available on all paid plans."
    },
    {
      q: "What AI models can I use?",
      a: "100+ curated models from 17+ providers: Claude, GPT-5, Gemini, DeepSeek, Mistral, Llama, Grok, and more. Switch models per agent anytime. Bring your own API keys on paid plans."
    },
    {
      q: "What integrations are available?",
      a: "800+ integrations via Composio: Gmail, Calendar, GitHub, Notion, Linear, Trello, HubSpot, Salesforce, Google Drive, and more. All connected with one-click OAuth — no manual API configuration."
    },
    {
      q: "Is my data secure?",
      a: "Conversations are encrypted end-to-end. Your data is never used to train AI models. Dedicated VM isolation means no shared state with other users. Auto-backups with one-click restore."
    },
    {
      q: "Can I self-host later?",
      a: "Absolutely. OpenClaw is 100% open-source. Export your data and self-host anytime. ClawCloud is the managed version of the same project — zero lock-in."
    },
    {
      q: "Is there a free plan?",
      a: "Yes. Start free with 150 credits, no credit card required. Your agent is live in 60 seconds."
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
                OpenClaw Cloud Platform
              </div>
              <h1 className="text-slate-900">
                OpenClaw in the Cloud<br />
                <span className="text-primary">in One Click</span>
              </h1>
              <p className="text-base md:text-xl text-[#4D4D4D] max-w-lg leading-relaxed">
                Deploy an autonomous AI agent on a dedicated cloud server with 800+ integrations and 100+ AI models. No Docker. No terminal. No DevOps.
              </p>
              <Integrations />
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.llmapi.ai/signup" className="bg-primary text-white px-7 py-3 rounded-none font-bold text-lg hover:bg-accent transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="bg-slate-50 text-slate-900 px-7 py-3 rounded-none font-bold text-lg hover:bg-slate-100 transition-all border border-slate-200 flex items-center justify-center gap-2">
                  <Github className="w-5 h-5" />
                  Star on GitHub
                </button>
              </div>
              <p className="text-sm text-slate-500 font-medium">No credit card required. Agent live in 60 seconds.</p>
              <TrustBar />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:mt-6"
            >
              <InteractiveTerminal />
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
          <h2 className="text-white mb-8">Ready to Deploy Your AI Agent?</h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 md:mb-12">
            No credit card. No setup. No DevOps. Just your AI agent, live in the cloud.
          </p>
          <a href="https://app.llmapi.ai/signup" className="bg-white text-slate-900 px-6 md:px-9 py-3 md:py-4 rounded-none font-bold text-base md:text-xl hover:bg-slate-100 transition-all transform hover:scale-105 active:scale-95 shadow-2xl inline-block">
            Get Started Free — Agent Live in 60 Seconds
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
                Open-source AI agent platform.<br />100+ models. 800+ integrations.
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
