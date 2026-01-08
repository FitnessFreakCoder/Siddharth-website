import { 
  Code, 
  Brain, 
  Database, 
  Terminal, 
  Cpu, 
  Layout, 
  Github, 
  Linkedin, 
  Mail 
} from 'lucide-react';
import { Project, SkillCategory, SocialLink } from './types';

export const HERO_CONTENT = {
  name: "Siddharth Shah",
  role: "Machine Learning & GenAI Engineer",
  headline: "Building Real-World AI Systems",
  subheadline: "Architecting scalable Deep Learning solutions, RAG pipelines, and intelligent agents that solve actual problems.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Download Resume",
};

export const ABOUT_CONTENT = {
  bio: `I don't just train models; I build complete production systems. As a Deep Learning and Generative AI specialist, I bridge the gap between academic theory and deployable software. 

  My work combines Transformers, Vector Databases, and LLMs to create autonomous agents and intelligent search systems. Currently completing my BCA, I am focused entirely on shipping high-performance AI products. I am mainly focused on Backend development.`,
  stats: [
    { label: "Systems Built", value: "5+" },
    { label: "Years Coding", value: "2+" },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Core AI & ML",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Transformers", "LLMs", "Fine-tuning", "Computer Vision", "NLP"]
  },
  {
    name: "System Engineering",
    icon: Cpu,
    skills: ["RAG Pipelines", "Vector Databases (FAISS & Chroma)", "Embeddings", "API Development", "Model Optimization"]
  },
  {
    name: "Languages & Tools",
    icon: Code,
    skills: ["Python", "JavaScript", "Git & GitHub", "Flask"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "RAG-Based AI Teaching Assistant",
    category: "Generative AI",
    description: "An intelligent tutoring system that answers student queries by retrieving and synthesizing context from educational video content embeddings.",
    techStack: ["Python", "LangChain", "OpenAI API", "Pinecone", "Whisper"],
    features: [
      "Video-to-Text Transcription pipeline",
      "Semantic search over lecture content",
      "Context-aware answer generation"
    ],
    github: "https://github.com/FitnessFreakCoder"
  },
  {
    id: 2,
    title: "Nepal Constitution AI Q&A",
    category: "NLP / Legal Tech",
    description: "A specialized QA system trained on the Constitution of Nepal. It provides accurate legal answers with specific article references, reducing hallucination.",
    techStack: ["Transformers", "HuggingFace", "FAISS", "Python"],
    features: [
      "Domain-specific RAG implementation",
      "Citation mechanism for legal accuracy",
      "Multi-lingual support (Nepali/English)"
    ],
    github: "https://github.com/FitnessFreakCoder"
  },
  {
    id: 3,
    title: "Face Recognition Login System",
    category: "Computer Vision",
    description: "A secure biometric authentication system using CNN embeddings to verify identity in real-time with liveness detection.",
    techStack: ["OpenCV", "PyTorch", "CNNs", "Vector Math"],
    features: [
      "Real-time face detection & alignment",
      "128-D embedding vector generation",
      "Sub-second matching latency"
    ],
    github: "https://github.com/FitnessFreakCoder"
  },
  {
    id: 4,
    title: "AI Voice + Chat Response Bot",
    category: "Multimodal AI",
    description: "A conversational agent capable of processing both voice and text inputs, responding with synthesized speech and text.",
    techStack: ["Speech-to-Text", "Text-to-Speech", "LLMs", "WebSocket"],
    features: [
      "Low-latency voice processing",
      "Natural language understanding",
      "Real-time audio streaming"
    ],
    github: "https://github.com/FitnessFreakCoder"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/FitnessFreakCoder", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/siddharthshah3173", icon: Linkedin },
  { name: "Email", url: "mailto:shah.siddharth3173@gmail.com", icon: Mail },
];