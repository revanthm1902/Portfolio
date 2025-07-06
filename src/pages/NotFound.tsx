
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, RotateCcw, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Track 404 errors silently for analytics
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-glass-bg to-dark-bg flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Glitch Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-purple rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
        {/* Glitch 404 */}
        <div className="relative">
          <h1 className="text-8xl md:text-9xl font-space font-bold text-neon-purple animate-glow">
            404
          </h1>
          <div className="absolute inset-0 text-8xl md:text-9xl font-space font-bold text-neon-cyan opacity-30 animate-pulse-slow transform translate-x-1 translate-y-1">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-4xl font-space font-semibold text-foreground">
            Oops! Route Not Found
          </h2>
          
          <p className="text-lg md:text-xl font-mono text-neon-cyan">
            Looks like this route took a wrong turn in the multiverse...
          </p>
          
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground leading-relaxed">
              🌌 The page you're looking for seems to have been consumed by a black hole, 
              transported to another dimension, or simply doesn't exist in this reality.
            </p>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-neon-purple hover:bg-neon-purple/80 text-white border border-neon-purple/50 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/'}
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-105"
              onClick={() => window.history.back()}
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="glass-card p-6 max-w-md mx-auto">
            <h3 className="font-space font-semibold text-foreground mb-4 flex items-center justify-center">
              <Search className="mr-2 h-5 w-5 text-neon-cyan" />
              Try These Instead
            </h3>
            <div className="space-y-2 text-sm">
              {[
                { label: 'Portfolio Home', path: '/' },
                { label: 'About Me', path: '/#about' },
                { label: 'My Projects', path: '/#projects' },
                { label: 'Contact Info', path: '/#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  className="block text-muted-foreground hover:text-neon-purple transition-colors duration-300 hover:underline"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Footer */}
        <div className="font-mono text-xs text-muted-foreground animate-fade-in">
          <p>🚀 Error Code: MULTIVERSE_NAVIGATION_FAILURE</p>
          <p className="mt-1">💡 Tip: Try using the navigation menu above!</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
