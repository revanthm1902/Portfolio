import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Code, Briefcase, BookOpen, Mail, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Navigation = ({ currentSection, setCurrentSection }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-white/10 dark:border-white/10 border-gray-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-space font-bold text-neon-purple animate-glow cursor-pointer logo-hover">
              &lt;rev.dev/&gt;
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    // Scroll to top when navigating
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${
                    currentSection === item.id
                      ? 'text-neon-purple bg-neon-purple/10 border border-neon-purple/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 rounded-lg animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden glass-card hover:bg-neon-purple/20"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed top-0 right-0 h-full w-64 glass-card border-l border-white/20 p-6 animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <div className="text-xl font-space font-bold text-neon-purple animate-glow logo-hover">
                &lt;rev.dev/&gt;
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-neon-purple/20"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id);
                    setIsOpen(false);
                    // Scroll to top when navigating
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentSection === item.id
                      ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
