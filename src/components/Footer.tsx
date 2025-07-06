import { Github, Linkedin, Mail, Heart, Code, Globe, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/revanthm1902',
      label: 'GitHub',
      color: 'hover:text-neon-purple'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/modalavalasa-revanth/',
      label: 'LinkedIn',
      color: 'hover:text-neon-cyan'
    },
    {
      icon: Mail,
      href: 'mailto:revanthm051@gmail.com',
      label: 'Email',
      color: 'hover:text-neon-green'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background/80 backdrop-blur-xl border-t border-white/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-space font-bold text-foreground">Revanth</h3>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crafting digital experiences with passion and precision. 
                Turning ideas into reality, one line of code at a time.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>Available for remote work worldwide</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-space font-semibold text-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-sm text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                  About Me
                </a>
                <a href="#skills" className="block text-sm text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                  Skills & Expertise
                </a>
                <a href="#projects" className="block text-sm text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                  Projects
                </a>
                <a href="#experience" className="block text-sm text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                  Experience
                </a>
                <a href="#contact" className="block text-sm text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                  Contact
                </a>
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-space font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:revanthm051@gmail.com" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-green transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  revanthm051@gmail.com
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                  <span>Available for new opportunities</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-2">
                <h5 className="text-sm font-medium text-foreground mb-3">Follow Me</h5>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 glass-card rounded-lg ${social.color} transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-neon-cyan/30`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Revanth. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="hidden sm:inline">in India</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Built with React, TypeScript & Tailwind CSS</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Deployed on Vercel</span>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 glass-card rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-110 group border border-white/10 hover:border-neon-cyan/30"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-muted-foreground group-hover:text-neon-cyan transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 