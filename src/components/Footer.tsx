
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/revanthm051',
      label: 'GitHub',
      color: 'hover:text-neon-purple'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/revanthm051',
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

  return (
    <footer className="relative bg-gradient-to-t from-background/50 to-transparent border-t border-white/10 py-12 px-4">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="text-2xl font-space font-bold text-neon-purple animate-glow">
            &lt;Revanth.dev/&gt;
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 glass-card ${social.color} transition-all duration-300 hover:scale-110 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-current transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>by Revanth</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              © {currentYear} Revanth. All rights reserved.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-2 text-xs text-muted-foreground">
            <span className="px-2 py-1 glass-card">React</span>
            <span className="px-2 py-1 glass-card">TypeScript</span>
            <span className="px-2 py-1 glass-card">Tailwind CSS</span>
            <span className="px-2 py-1 glass-card">Supabase</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
