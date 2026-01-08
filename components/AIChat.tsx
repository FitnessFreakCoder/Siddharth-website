import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { ABOUT_CONTENT, PROJECTS, SKILL_CATEGORIES, SOCIAL_LINKS, HERO_CONTENT } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: `Hi! I'm Siddharth's AI assistant. Ask me anything about his projects, skills, or experience.` }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isOpen]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message;
    setMessage('');
    setHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemPrompt = `You are a helpful AI assistant for Siddharth Shah's portfolio website. 
      Your goal is to answer questions about Siddharth, his skills, projects, and experience based strictly on the provided context.
      
      Context:
      Name: ${HERO_CONTENT.name}
      Role: ${HERO_CONTENT.role}
      Headline: ${HERO_CONTENT.headline}
      Bio: ${ABOUT_CONTENT.bio}
      
      Skills:
      ${SKILL_CATEGORIES.map(cat => `${cat.name}: ${cat.skills.join(', ')}`).join('\n')}
      
      Projects:
      ${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}. Tech: ${p.techStack.join(', ')}`).join('\n')}
      
      Contact: ${SOCIAL_LINKS.find(l => l.name === 'Email')?.url}
      
      Tone: Professional, enthusiastic, and concise. 
      If you don't know the answer based on the context, politely say you don't have that information and suggest contacting Siddharth directly.
      Answer in the first person plural (e.g., "We" or "Siddharth's assistant") or refer to him as Siddharth.`;

      const chatHistory = history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemPrompt,
        }
      });

      const responseText = response.text || "I'm having trouble connecting right now. Please try again later.";
      
      setHistory(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setHistory(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300 hover:scale-110 ${
          isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-ai-cyan text-black'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-40 w-[90vw] sm:w-[400px] bg-ai-card border border-ai-cyan/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-ai-dim to-slate-900 border-b border-slate-800 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-ai-cyan/10 flex items-center justify-center border border-ai-cyan/30">
            <Sparkles size={20} className="text-ai-cyan" />
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">Ask AI Assistant</h3>
            <p className="text-xs text-slate-400">Powered by Gemini Pro</p>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-black/20">
          {history.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.role === 'user' 
                    ? 'bg-slate-700 text-slate-300' 
                    : 'bg-ai-cyan/10 text-ai-cyan border border-ai-cyan/20'
                }`}
              >
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-slate-800 text-white rounded-tr-sm'
                    : 'bg-ai-dim border border-slate-800 text-slate-200 rounded-tl-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-ai-cyan/10 text-ai-cyan border border-ai-cyan/20 flex items-center justify-center">
                <Bot size={16} />
              </div>
              <div className="bg-ai-dim border border-slate-800 p-3 rounded-2xl rounded-tl-sm">
                <Loader2 size={16} className="animate-spin text-ai-cyan" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-ai-card border-t border-slate-800">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about my projects..."
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl pl-4 pr-12 py-3 text-sm text-white focus:outline-none focus:border-ai-cyan/50 focus:ring-1 focus:ring-ai-cyan/50 placeholder-slate-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !message.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-ai-cyan hover:bg-ai-cyan/10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;