import { Card } from '@/components/ui/card';
import { 
  SiCplusplus, SiPython, SiJavascript, 
  SiSpring, SiDjango, SiFastapi, SiNodedotjs,
  SiLinux, SiGit, SiVim, SiIntellijidea, SiPycharm
} from 'react-icons/si';
import { Code2, Database, Cpu, Zap, Code, FileCode } from 'lucide-react';

const skills = {
  languages: [
    { name: 'C/C++', icon: SiCplusplus },
    { name: 'Python', icon: SiPython },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Java', icon: Code2 },
  ],
  frameworks: [
    { name: 'Spring Boot', icon: SiSpring },
    { name: 'Django', icon: SiDjango },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Node.js', icon: SiNodedotjs },
  ],
  tools: [
    { name: 'Linux', icon: SiLinux },
    { name: 'Git', icon: SiGit },
    { name: 'Vim', icon: SiVim },
    { name: 'VS Code', icon: Code },
    { name: 'IntelliJ', icon: SiIntellijidea },
    { name: 'PyCharm', icon: SiPycharm },
  ],
  specialties: [
    { name: 'Backend Dev', icon: Code2 },
    { name: 'System Design', icon: Database },
    { name: 'Algorithms', icon: Cpu },
    { name: 'Cloud', icon: Zap },
  ],
};

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-skills">
      <div className="max-w-6xl mx-auto w-full space-y-12 fade-in">
        <div className="space-y-2">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> ls -la ~/skills
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-skills-header">
            skills/
          </h2>
        </div>

        <div className="space-y-12">
          <SkillCategory title="Languages" skills={skills.languages} />
          <div className="border-t border-primary/20" />
          <SkillCategory title="Frameworks" skills={skills.frameworks} />
          <div className="border-t border-primary/20" />
          <SkillCategory title="Tools" skills={skills.tools} />
          <div className="border-t border-primary/20" />
          <SkillCategory title="Specialties" skills={skills.specialties} />
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: Array<{ name: string; icon: any }> }) {
  return (
    <div className="space-y-6 scale-in">
      <h3 className="text-xl md:text-2xl font-semibold text-primary/80" data-testid={`text-category-${title.toLowerCase()}`}>
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <Card 
            key={skill.name} 
            className="p-6 flex flex-col items-center justify-center gap-3 border-primary/20 bg-card/30 backdrop-blur-sm hover-elevate cursor-pointer group scale-in"
            style={{ animationDelay: `${index * 0.05}s` }}
            data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <skill.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300 ease-out" />
            <span className="text-xs text-center text-muted-foreground">{skill.name}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
