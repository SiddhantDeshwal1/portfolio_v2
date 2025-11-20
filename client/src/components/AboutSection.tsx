import { Card } from '@/components/ui/card';

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
          </div>
        </Card>
      </div>
    </section>
  );
}
