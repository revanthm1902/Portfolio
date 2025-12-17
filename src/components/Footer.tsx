import { Github, Linkedin, Mail, Heart, Code, Globe, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/revanthm1902', label: 'GitHub', color: 'hover:text-neon-purple' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/modalavalasa-revanth/', label: 'LinkedIn', color: 'hover:text-neon-cyan' },
    { icon: Mail, href: 'mailto:revanthm051@gmail.com', label: 'Email', color: 'hover:text-neon-green' }
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
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-lg flex items-center justify-center">
                  <Code className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-space font-bold text-foreground">Revanth</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Crafting digital experiences with passion and precision. 
                Turning ideas into reality, one line of code at a time.
              </p>
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>Available for remote work worldwide</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-space font-semibold text-foreground">Quick Links</h4>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2">
                {['About Me', 'Skills & Expertise', 'Projects', 'Experience', 'Contact'].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+&\s+/g, '').replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-neon-cyan transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-space font-semibold text-foreground">Get In Touch</h4>
              <div className="space-y-2 sm:space-y-3">
                <a 
                  href="mailto:revanthm051@gmail.com" 
                  className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-neon-green transition-colors"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  revanthm051@gmail.com
                </a>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-green rounded-full animate-pulse" />
                  <span>Available for new opportunities</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="pt-1 sm:pt-2">
                <h5 className="text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Follow Me</h5>
                <div className="flex items-center gap-2 sm:gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 sm:p-2 glass-card rounded-lg ${social.color} group border border-white/10 hover:border-neon-cyan/30`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <social.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-current transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-sm text-muted-foreground text-center sm:text-left">
              <span>© {currentYear} Revanth.</span>
              <span className="hidden xs:inline">Made with</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 animate-pulse" />
              <span className="hidden xs:inline">in India</span>
            </div>

            {/* Tech Stack */}
            <div className="text-[10px] sm:text-xs text-muted-foreground text-center">
              <span>Built with React, TypeScript & Tailwind</span>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 glass-card rounded-lg hover:bg-white/10 group border border-white/10 hover:border-neon-cyan/30"
              aria-label="Scroll to top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 