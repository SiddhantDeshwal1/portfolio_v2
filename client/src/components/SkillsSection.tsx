import { Card } from '@/components/ui/card';

const skills = {
  languages: [
    { name: 'C', icon: '/icons/c.png' },
    { name: 'C++', icon: '/icons/cpp.png' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Python', icon: '/icons/python.webp' },
    { name: 'JavaScript', icon: '/icons/javascript.jpg' },
    { name: 'HTML5', icon: '/icons/html.png' },
    { name: 'CSS3', icon: '/icons/css.png' },
    { name: 'Bash', icon: '/icons/bash.svg' },
  ],
  frameworks: [
    { name: 'Spring Boot', icon: '/icons/springBoot.png' },
    { name: 'Django', icon: '/icons/django.png' },
    { name: 'FastAPI', icon: '/icons/fastapi.png' },
    { name: 'Node.js', icon: '/icons/nodejs.png' },
  ],
  tools: [
    { name: 'Linux', icon: '/icons/linux.jpg' },
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'GitHub', icon: '/icons/github.png' },
    { name: 'Vim', icon: '/icons/Vimlogo.svg' },
    { name: 'VS Code', icon: '/icons/vscode.png' },
    { name: 'IntelliJ', icon: '/icons/IntelliJ_IDEA_Icon.svg.png' },
    { name: 'PyCharm', icon: '/icons/pycharm.png' },
  ],
  specialties: [
    { name: 'Backend Dev', icon: '/icons/Backend.svg' },
    { name: 'System Design', icon: '/icons/SystemDesign.svg' },
    { name: 'Algorithms', icon: '/icons/Algorithms.svg' },
    { name: 'Cloud', icon: '/icons/Cloud.svg' },
  ],
};

function SkillCategory({ title, skills }: { title: string; skills: Array<{ name: string; icon: string }> }) {
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
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 group-hover:scale-110 transition-transform duration-300 ease-out" />
            <span className="text-xs text-center text-muted-foreground">{skill.name}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}

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
