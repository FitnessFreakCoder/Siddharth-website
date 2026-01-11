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
  bio: `I am a final-year BCA student specializing in Artificial Intelligence and Generative AI, with a strong focus on building real-world, production-grade AI systems rather than just academic models.

My work sits at the intersection of Deep Learning, NLP, and Software Engineering. I design and build systems that combine Transformers, Large Language Models, Vector Databases, and Retrieval-Augmented Generation (RAG) to solve practical problems like intelligent search, question answering, and user personalization.

Unlike many developers who only use AI APIs, I deeply understand how modern models actually work — from self-attention and masked decoding to autoregressive generation, embeddings, and fine-tuning. This allows me to build AI systems that are not just functional, but scalable, efficient, and reliable.`,
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