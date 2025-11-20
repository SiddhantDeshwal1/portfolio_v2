import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { 
  SiReact, SiVite, SiTailwindcss, SiNodedotjs, SiExpress, 
  SiFastapi, SiDjango, SiPostgresql, SiDrizzle, SiPython, 
  SiJavascript, SiTypescript, SiLinux, SiDocker, SiGit 
} from 'react-icons/si';

const techStack = [
  { name: 'JavaScript (ES6+)', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'FastAPI', icon: SiFastapi },
  { name: 'Django', icon: SiDjango },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Drizzle ORM', icon: SiDrizzle },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Vite', icon: SiVite },
  { name: 'Linux', icon: SiLinux },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
];

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-about">
      <div className="max-w-4xl mx-auto w-full space-y-8 fade-in">
        <div className="space-y-2">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> vim about.txt
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-about-header">
            about.txt
          </h2>
        </div>
        
        <Card className="p-8 border-primary/30 bg-card/50 backdrop-blur-sm hover-elevate scale-in" data-testid="card-about">
          <div className="space-y-6 text-foreground/90">
            <p className="text-base md:text-lg leading-relaxed">
              Since childhood, I've been fascinated by how computers work beneath the surface. That early curiosity 
              matured into a focused engineering mindset—understanding systems deeply, optimizing them, and building 
              tools that genuinely make life easier. <span className="text-primary/70 italic">(Debugging is just detective work with more coffee.)</span>
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              My strength lies in problem-solving, designing scalable backend architectures, and seeing a project 
              through from raw idea to production-ready execution. I thrive on challenges that require both technical 
              rigor and creative thinking.
            </p>
            
            <p className="text-base md:text-lg leading-relaxed">
              I love working with Linux, customizing entire environments, crafting dotfiles, and tuning my workflow 
              for speed and clarity. Whether it's coding, competitive programming, or pixel-art experiments, I blend 
              technical precision with creativity.
            </p>

            <Separator className="bg-primary/20" />

            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-semibold text-primary/80" data-testid="text-tech-stack-header">
                My Go-To Tech
              </h3>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech) => (
                  <Tooltip key={tech.name}>
                    <TooltipTrigger>
                      <div className="text-muted-foreground hover:text-primary transition-colors">
                        <tech.icon className="w-8 h-8" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </Card>
        <div className="w-full h-64 bg-gray-700 animate-pulse" data-testid="image-placeholder"></div>
      </div>
    </section>
  );
}