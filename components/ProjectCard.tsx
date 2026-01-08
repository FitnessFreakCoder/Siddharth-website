import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative bg-ai-card border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-ai-cyan/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col h-full">
      
      {/* Glow Effect behind card */}
      <div className="absolute inset-0 bg-gradient-to-r from-ai-cyan/10 to-ai-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-ai-cyan/10 border border-ai-cyan/20 text-ai-cyan text-xs font-mono">
            {project.category}
          </div>
          <div className="flex gap-3">
             {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            )}
             {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-ai-cyan transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-300 mb-2 flex items-center gap-2">
            <Layers size={14} className="text-ai-purple" /> Key Features
          </h4>
          <ul className="list-disc list-inside text-slate-500 text-sm space-y-1">
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative z-10 mt-auto pt-4 border-t border-slate-800">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-xs font-mono text-slate-300 bg-slate-900 px-2 py-1 rounded border border-slate-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
