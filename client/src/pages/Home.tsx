import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import CompetitiveProgrammingSection from '@/components/CompetitiveProgrammingSection';
import ProjectsSection from '@/components/ProjectsSection';
import LinuxRicingSection from '@/components/LinuxRicingSection';
import AISkillsSection from '@/components/AISkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CompetitiveProgrammingSection />
      <ProjectsSection />
      <LinuxRicingSection />
      <AISkillsSection />
      <ContactSection />
    </div>
  );
}
