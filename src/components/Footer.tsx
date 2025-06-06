
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-neon-purple/20 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span>© 2024 Made with</span>
          <Heart className="h-4 w-4 text-neon-purple animate-pulse" />
          <span>by</span>
          <span className="text-neon-cyan font-semibold">Revanth</span>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          All rights reserved. Built with React, TypeScript & Passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
