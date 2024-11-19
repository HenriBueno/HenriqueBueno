import React, { useState, useEffect } from 'react';

interface TextTypewriterProps {
  text: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  deleteCharCount?: number; // Adicionando a propriedade para definir a quantidade de caracteres a apagar
}

const TextTypewriter: React.FC<TextTypewriterProps> = ({
  text,
  typingSpeed = 150,
  deletingSpeed = 75,
  delay = 500,
  deleteCharCount = text.length - 1, // Padrão: apaga todo o texto
}) => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDeleting && textIndex < text.length) {
        // Adiciona caracteres
        setDisplayedText((prev) => prev + text[textIndex]);
        setTextIndex((prev) => prev + 1);
      } else if (isDeleting && textIndex > text.length - deleteCharCount) {
        // Apaga até o limite de caracteres
        setDisplayedText((prev) => prev.slice(0, -1));
        setTextIndex((prev) => prev - 1);
      }

      if (textIndex === text.length) {
        // Pausa antes de começar a apagar
        setTimeout(() => setIsDeleting(true), delay);
      } else if (textIndex === text.length - deleteCharCount && isDeleting) {
        // Para de apagar e começa a digitar de novo
        setTimeout(() => setIsDeleting(false), delay);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(interval);
  }, [textIndex, isDeleting, text, typingSpeed, deletingSpeed, delay, deleteCharCount]);

  return <span>{displayedText}</span>;
};

export default TextTypewriter;
