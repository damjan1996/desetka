import React from 'react';
import { ExternalLink, Github, Globe, Zap, TrendingUp, Users } from 'lucide-react';
import { ProjectSchema } from './schemas/ProjectSchema';

interface ProjectShowcaseProps {
  project: {
    id: string;
    title: string;
    description: string;
    technicalChallenge: string;
    businessImpact: {
      roi?: string;
      performanceGain?: string;
      usersImpacted?: string;
    };
    technologies: string[];
    category: string;
    dateCreated: string;
    liveUrl?: string;
    githubUrl?: string;
    screenshotUrl?: string;
    features: string[];
    codeExample?: string;
  };
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
  return (
    <article className="project-showcase bg-zinc-900 rounded-lg overflow-hidden">
      <ProjectSchema project={project} />
      
      {/* Hero Section with Screenshot */}
      {project.screenshotUrl && (
        <div className="relative aspect-video">
          <img 
            src={project.screenshotUrl} 
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>
      )}
      
      <div className="p-8 space-y-8">
        {/* Title and Description */}
        <header>
          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">{project.description}</p>
        </header>
        
        {/* For Recruiters: Technical Challenge */}
        <section className="technical-challenge">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-5 w-5 text-blue-500" />
            <h3 className="text-xl font-semibold text-white">Technical Challenge</h3>
          </div>
          <p className="text-zinc-300 bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
            {project.technicalChallenge}
          </p>
        </section>
        
        {/* For Clients: Business Impact */}
        <section className="business-impact">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <h3 className="text-xl font-semibold text-white">Business Impact</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.businessImpact.roi && (
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-sm text-zinc-400 mb-1">ROI</p>
                <p className="text-2xl font-bold text-green-400">{project.businessImpact.roi}</p>
              </div>
            )}
            {project.businessImpact.performanceGain && (
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-sm text-zinc-400 mb-1">Performance</p>
                <p className="text-2xl font-bold text-blue-400">{project.businessImpact.performanceGain}</p>
              </div>
            )}
            {project.businessImpact.usersImpacted && (
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <p className="text-sm text-zinc-400 mb-1">Users Impacted</p>
                <p className="text-2xl font-bold text-purple-400">{project.businessImpact.usersImpacted}</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Technology Stack with Keywords */}
        <section className="tech-stack">
          <h3 className="text-xl font-semibold text-white mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech} 
                className="tech-tag px-3 py-1 bg-zinc-800 border border-zinc-700 text-zinc-300 rounded-full text-sm hover:border-zinc-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
        
        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <section className="features">
            <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        
        {/* Code Quality Showcase */}
        {project.codeExample && (
          <section className="code-showcase">
            <h3 className="text-xl font-semibold text-white mb-3">Code Example</h3>
            <pre className="bg-zinc-950 p-4 rounded-lg overflow-x-auto border border-zinc-800">
              <code className="text-sm text-zinc-300 font-mono">
                {project.codeExample}
              </code>
            </pre>
          </section>
        )}
        
        {/* Links */}
        <div className="project-links flex gap-4 pt-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Globe className="h-4 w-4" />
              View Live Project
            </a>
          )}
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg transition-colors"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}