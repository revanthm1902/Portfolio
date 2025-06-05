
import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypingAnimation = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000,
  className = ""
}: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (isTyping && !isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(false);
          }, pauseDuration);
        }
      } else if (isDeleting) {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentTextIndex((prevIndex) => 
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, isTyping, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingAnimation;
