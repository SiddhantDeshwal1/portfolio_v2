import { useState, useEffect } from 'react';

const taglines = [
  "Competitive programmer",
  "Problem solver",
  "I use arch BTW (you should too)",
  "backend developer",
  "avid learner"
];

export default function HeroSection() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= taglines.length) {
      setShowCursor(true);
      return;
    }

    const targetText = taglines[currentLineIndex];
    
    if (currentText.length < targetText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(targetText.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentText]);
        setCurrentText("");
        setCurrentLineIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, taglines]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4" data-testid="section-hero">
      <div className="text-center max-w-4xl mx-auto space-y-12 fade-in">
        <div className="space-y-8">
          <div className="space-y-2 slide-up">
            <div className="text-sm text-primary/60 font-mono">
              <span className="text-primary">$</span> whoami
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary glow-text" data-testid="text-hero-name">
              Siddhant Deshwal
            </h1>
          </div>

          <div className="space-y-3 text-lg md:text-xl text-foreground/80 font-mono min-h-[200px]">
            {displayedLines.map((line, index) => (
              <div key={index} className="flex items-center justify-center gap-3 slide-in-left" data-testid={`text-tagline-${index + 1}`}>
                <span className="text-primary">&gt;</span>
                <span>{line}</span>
              </div>
            ))}
            {currentLineIndex < taglines.length && (
              <div className="flex items-center justify-center gap-3" data-testid={`text-tagline-${currentLineIndex + 1}`}>
                <span className="text-primary">&gt;</span>
                <span>
                  {currentText}
                  <span className={`inline-block w-2 h-5 ml-1 bg-primary ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="pt-8">
          <a href="#about" data-testid="link-scroll-down">
            <div className="inline-block text-primary animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
