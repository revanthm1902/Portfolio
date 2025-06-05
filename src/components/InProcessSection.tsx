
import { Wrench, Cpu, Zap } from 'lucide-react';

const InProcessSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg to-glass-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-12 px-4 max-w-4xl">
        {/* Main Icon */}
        <div className="relative">
          <div className="mx-auto w-32 h-32 glass-card rounded-full flex items-center justify-center animate-pulse-glow">
            <Cpu className="h-16 w-16 text-neon-purple animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          
          {/* Orbiting Icons */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
            <Wrench className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 h-6 w-6 text-neon-cyan" />
            <Zap className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 h-6 w-6 text-neon-green" />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-space font-bold text-neon-purple animate-glow">
            Under Construction
          </h1>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-mono text-neon-cyan">
              This section's currently assembling itself in the quantum realm...
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              🛠️ Our digital architects are busy crafting something extraordinary. 
              Neural networks are being trained, pixels are being perfected, and code is being optimized to deliver an amazing experience.
            </p>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-space font-semibold text-foreground mb-6">
            Development Progress
          </h3>
          
          <div className="space-y-4">
            {[
              { label: 'UI Design', progress: 85, color: 'neon-purple' },
              { label: 'Backend Integration', progress: 60, color: 'neon-cyan' },
              { label: 'Testing & Optimization', progress: 30, color: 'neon-green' },
            ].map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-mono text-muted-foreground">{item.label}</span>
                  <span className="font-mono text-muted-foreground">{item.progress}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className={`bg-${item.color} h-2 rounded-full transition-all duration-1000 ease-out animate-pulse`}
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Message */}
        <div className="font-mono text-sm text-muted-foreground animate-fade-in">
          <p>💫 Check back soon for some next-level awesomeness!</p>
          <p className="mt-2">In the meantime, feel free to explore other sections 👾</p>
        </div>
      </div>
    </section>
  );
};

export default InProcessSection;
