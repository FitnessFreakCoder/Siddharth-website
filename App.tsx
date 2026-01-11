import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail, ChevronRight, Cpu } from 'lucide-react';
import { HERO_CONTENT, ABOUT_CONTENT, SKILL_CATEGORIES, PROJECTS, SOCIAL_LINKS } from './constants';
import ArchitectureDemo from './components/ArchitectureDemo';
import ProjectCard from './components/ProjectCard';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-ai-dark font-sans selection:bg-ai-cyan/30 selection:text-ai-cyan">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-ai-dark/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-ai-cyan to-ai-purple rounded-lg flex items-center justify-center">
              <span className="font-mono text-black text-lg">S</span>
            </div>
            <span>Shah<span className="text-ai-cyan"></span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-ai-cyan transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-ai-card border-b border-slate-800 p-6 flex flex-col gap-4">
             {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-medium text-slate-300"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-ai-cyan/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-ai-purple/20 blur-[120px] rounded-full opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ai-cyan/30 bg-ai-cyan/5 text-ai-cyan text-sm font-mono mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ai-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ai-cyan"></span>
            </span>
            Available for Hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Building Real-World <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-cyan via-blue-500 to-ai-purple">
              AI Systems
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-ai-cyan text-black font-bold rounded hover:bg-cyan-400 transition-all hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {HERO_CONTENT.ctaPrimary} <ChevronRight size={20} />
            </button>
            
            {/* UPDATED DOWNLOAD LINK */}
            <a 
              href="/Siddharth_Resume.docx"
              download="Siddharth_Resume.docx"
              className="px-8 py-4 bg-slate-900 border border-slate-700 text-white font-bold rounded hover:bg-slate-800 transition-all hover:border-slate-500 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download size={20} /> {HERO_CONTENT.ctaSecondary}
            </a>
            
          </div>

          {/* Socials in Hero */}
          <div className="mt-12 flex justify-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-ai-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Engineering Intelligence at Scale.<br/> 
              </h2>
              <div className="text-slate-400 text-lg leading-relaxed whitespace-pre-line mb-8">
                {ABOUT_CONTENT.bio}
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {ABOUT_CONTENT.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-ai-cyan mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 font-mono uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <ArchitectureDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-ai-card/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-400">The tools I use to build intelligent architecture.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-ai-dark border border-slate-800 rounded-xl p-6 hover:border-ai-cyan/30 transition-colors">
                <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 border border-slate-700">
                  <cat.icon className="text-ai-cyan" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded border border-slate-800">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-ai-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Systems</h2>
              <p className="text-slate-400 max-w-xl">
                A selection of production-grade AI projects focusing on NLP, Computer Vision, and RAG architectures.
              </p>
            </div>
            <a href="https://github.com/FitnessFreakCoder" target="_blank" rel="noreferrer" className="text-ai-cyan font-mono hover:underline flex items-center gap-2">
              View all on GitHub <Github size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-ai-cyan/5 to-transparent pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Scale AI?</h2>
          <p className="text-slate-400 text-lg mb-10">
            I am currently open to full-time roles, internships, and freelance projects. 
            If you need an engineer who understands both the model weights and the deployment pipeline, let's talk.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:shah.siddharth3173@gmail.com"
              className="px-8 py-4 bg-ai-cyan text-black font-bold rounded hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Contact Me via Email
            </a>
            <a 
              href="https://www.linkedin.com/in/siddharthshah3173"
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-4 bg-slate-800 text-white font-bold rounded hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-900 bg-ai-dark text-center">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Siddharth Shah. Built with React, Tailwind, and <Cpu className="inline w-3 h-3 text-ai-cyan" />.
        </p>
      </footer>
      
      {/* AI Chat Widget */}
      <AIChat />

    </div>
  );
};

export default App;