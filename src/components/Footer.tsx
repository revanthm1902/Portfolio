
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-neon-purple/20 py-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span className="text-sm">© 2024 Revanth. All rights reserved.</span>
          <span className="text-neon-purple">•</span>
          <span className="text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Revanth
          </span>
        </div>
        <div className="mt-2">
          <p className="text-xs text-muted-foreground/70">
            Crafted with passion using React, TypeScript & Modern Web Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
