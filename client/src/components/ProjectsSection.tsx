import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, TrendingUp, MessageSquare } from 'lucide-react';
import { SiPython, SiFastapi, SiDjango, SiPostgresql } from 'react-icons/si';

const projects = [
  {
    name: 'CP Toolkit',
    command: './cp-toolkit',
    description: 'Live contest monitoring and local testing automation',
    tech: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
    ],
    highlights: [
      'Async scraping engine',
      '60% faster data fetch',
      'Handles 10k+ req/sec',
      'Real-time contest updates'
    ],
    icon: TrendingUp,
    link: '#',
  },
  {
    name: 'WorkChat',
    command: './work-chat',
    description: 'Enterprise messaging platform with optimized storage',
    tech: [
      { name: 'Django', icon: SiDjango },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
    highlights: [
      'Optimized batching & indexing',
      '30% latency reduction',
      '50k+ daily active users',
      'Real-time messaging'
    ],
    icon: MessageSquare,
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-projects">
      <div className="max-w-6xl mx-auto w-full space-y-12 fade-in">
        <div className="space-y-2">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> ls -1 ~/projects/featured
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-projects-header">
            projects/
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.name}
              className="p-8 border-primary/30 bg-card/40 backdrop-blur-sm hover-elevate space-y-6 group scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              data-testid={`card-project-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-primary font-mono">
                    <span>$</span>
                    <span className="terminal-cursor">{project.command}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <project.icon className="w-8 h-8 text-primary/60 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
              </div>

              <div className="flex gap-3">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech.name} 
                    variant="secondary" 
                    className="gap-2"
                    data-testid={`badge-tech-${tech.name.toLowerCase()}`}
                  >
                    <tech.icon className="w-4 h-4" />
                    {tech.name}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>

              {project.name === 'CP Toolkit' && (
                <p className="text-xs text-primary/60 italic pt-2">
                  # Because manually checking contest results is so 2015
                </p>
              )}

              <Button 
                variant="outline" 
                className="w-full border-primary/50"
                data-testid={`button-github-${project.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
