
import { useState, useEffect } from 'react';
import LoadingAnimation from '@/components/LoadingAnimation';
import CursorTrail from '@/components/CursorTrail';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import InProcessSection from '@/components/InProcessSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
      case 'experience':
      case 'blog':
      case 'contact':
        return <InProcessSection />;
      default:
        return <HeroSection />;
    }
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorTrail />
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      {/* Main Content with proper spacing for fixed nav */}
      <div className="pt-16">
        {renderSection()}
      </div>
    </div>
  );
};

export default Index;
