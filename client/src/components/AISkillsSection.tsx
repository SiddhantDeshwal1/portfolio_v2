import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  OpenAiIcon, AnthropicIcon, FigmaIcon, CanvaIcon, ReplitIcon,
  CursorIcon, PerplexityIcon, GooglegeminiIcon
} from './icons';
import { Wand2, Code2, Cpu, Sparkles } from 'lucide-react';

const aiTools = [
  { name: 'Cursor', icon: CursorIcon, description: 'AI-powered IDE' },
  { name: 'GPT-4', icon: OpenAiIcon, description: 'Advanced reasoning' },
  { name: 'Gemini', icon: GooglegeminiIcon, description: 'Google\'s LLM' },
  { name: 'Claude', icon: AnthropicIcon, description: 'Long context' },
  { name: 'Perplexity', icon: PerplexityIcon, description: 'Research assistant' },
  { name: 'Replit', icon: ReplitIcon, description: 'AI development' },
  { name: 'Figma', icon: FigmaIcon, description: 'Design tool' },
  { name: 'Canva', icon: CanvaIcon, description: 'Visual design' },
];

export default function AISkillsSection() {
  return (
    <section id="ai-skills" className="min-h-screen flex items-center justify-center px-4 py-24" data-testid="section-ai-skills">
      <div className="max-w-6xl mx-auto w-full space-y-12 fade-in">
        <div className="space-y-2">
          <div className="text-sm text-primary/60 font-mono">
            <span className="text-primary">$</span> cat ai_toolkit.json | grep -i "tools"
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary glow-text" data-testid="text-ai-skills-header">
            ai_toolkit.json
          </h2>
        </div>

        <div className="space-y-8">
          <Card className="p-8 border-primary/30 bg-card/40 backdrop-blur-sm scale-in" data-testid="card-ai-intro">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Building with AI</h3>
              </div>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Why spend hours debugging when AI can do it in seconds? This entire portfolio was built leveraging 
                cutting-edge AI tools—proving that the future of development isn't about replacing engineers, 
                it's about amplifying their capabilities.{' '}
                <span className="text-primary/80 italic">
                  (Yes, even this witty paragraph was co-authored with AI. Meta, right?)
                </span>
              </p>

              <div className="pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <span className="text-primary">$</span>
                  <span>echo "Work smarter, not harder" | cowsay</span>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <Card 
                key={tool.name}
                className="p-6 border-primary/30 bg-card/20 backdrop-blur-sm hover-elevate scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`ai-tool-${tool.name.toLowerCase()}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <tool.icon className="w-8 h-8" />
                    <Badge variant="outline" className="border-primary/50 text-xs">
                      {tool.name}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 border-primary/30 bg-card/20 backdrop-blur-sm" data-testid="card-ai-stack-image">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">My AI Development Stack</h3>
              </div>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-transparent rounded-md flex items-center justify-center border border-primary/20">
                <div className="text-center space-y-3">
                  <Cpu className="w-16 h-16 text-primary/40 mx-auto" />
                  <p className="text-sm text-muted-foreground font-mono">ai_stack_diagram.png</p>
                  <p className="text-xs text-muted-foreground/60 px-8">
                    Replace with your actual AI stack visualization
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}