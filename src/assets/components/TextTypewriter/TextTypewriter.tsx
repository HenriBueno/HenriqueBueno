import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 75,
  delay = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && textIndex < text.length) {
        setDisplayedText((prev) => prev + text[textIndex]);
        setTextIndex((prev) => prev + 1);
      } else if (isDeleting && textIndex > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setTextIndex((prev) => prev - 1);
      }

      if (textIndex === text.length) {
        setIsDeleting(true);
      } else if (textIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval);
  }, [textIndex, isDeleting, text, typingSpeed, deletingSpeed]);

  return <span>{displayedText}</span>;
};

export default TypewriterEffect;
