import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

interface ScrollProgressProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  showBackToTop?: boolean;
}

const ScrollProgress = ({ 
  size = 60, 
  strokeWidth = 4, 
  color = "rgb(147, 51, 234)", // neon-purple
  showBackToTop = true 
}: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = (scrollTop / docHeight) * 100;
          
          setProgress(Math.min(scrollPercent, 100));
          setIsVisible(scrollTop > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Circular Progress */}
      <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-1">
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(147, 51, 234, 0.15)"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="transition-all duration-300"
          />
          
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
            style={{
              filter: `drop-shadow(0 0 6px ${color})`
            }}
          />
        </svg>
        
        {/* Progress percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-mono font-bold text-neon-purple drop-shadow-sm">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && isVisible && (
        <button
          onClick={handleBackToTop}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm hover:bg-neon-purple/20 text-neon-purple rounded-full border border-neon-purple/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <ChevronUp className="h-5 w-5 group-hover:animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default ScrollProgress; 