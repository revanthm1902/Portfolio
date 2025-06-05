
import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('initializing');

  useEffect(() => {
    const phases = [
      'Initializing quantum matrix',
      'Loading neural pathways',
      'Calibrating holographic display',
      'Syncing with the mainframe',
      'Ready to launch'
    ];

    let currentPhase = 0;
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setTimeout(() => {
          onComplete();
        }, 500);
        clearInterval(interval);
        return;
      }

      setProgress(currentProgress);
      
      const phaseIndex = Math.floor((currentProgress / 100) * phases.length);
      if (phaseIndex !== currentPhase && phaseIndex < phases.length) {
        currentPhase = phaseIndex;
        setPhase(phases[phaseIndex]);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="text-6xl font-space font-bold text-neon-purple animate-glow">
            &lt;DEV/&gt;
          </div>
          <div className="absolute inset-0 text-6xl font-space font-bold text-neon-cyan opacity-50 animate-pulse-slow">
            &lt;DEV/&gt;
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="glass-card p-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span className="font-mono">{phase}<span className="loading-dots"></span></span>
              <span className="font-mono">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-neon-purple to-neon-cyan h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-60 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
