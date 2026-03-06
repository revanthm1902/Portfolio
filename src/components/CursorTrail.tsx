import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    let timeoutId: NodeJS.Timeout;

    const updatePosition = (e: MouseEvent) => {
      if (isMobile) return; // Don't track mouse on mobile
      
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);

      // Clear previous timeout
      clearTimeout(timeoutId);
      
      // Set timeout to stop moving animation
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsMoving(false);
    };

    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsVisible(true);
      }
    };

    // Only add mouse event listeners if not mobile
    if (!isMobile) {
      window.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Don't render cursor trail on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor trail */}
      <div
        className={`cursor-trail ${isVisible ? 'opacity-100' : 'opacity-0'} ${
          isMoving ? 'scale-100' : 'scale-75'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transition: isMoving ? 'none' : 'all 0.3s ease',
        }}
      />
      
      {/* Secondary trail effect for dark mode */}
      <div
        className={`cursor-trail-secondary ${isVisible ? 'opacity-60' : 'opacity-0'} ${
          isMoving ? 'scale-125' : 'scale-100'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transition: isMoving ? 'none' : 'all 0.4s ease',
          transitionDelay: '0.1s',
        }}
      />
    </>
  );
};

export default CursorTrail;
