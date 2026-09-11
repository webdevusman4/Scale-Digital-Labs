'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const phrases = [
  "WORLDWIDE WITH DIGITAL DOMINANCE.",
  "WITH WEBSITES ENGINEERED TO CONVERT.",
  "WITH SOFTWARE THAT NEVER SLOWS DOWN.",
  "THROUGH CONTENT THAT COMMANDS THE FEED.",
  "WITH ADS THAT TURN CLICKS INTO CUSTOMERS.",
  "WITH REPUTATIONS BUILT TO LEAD."
];

export function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const isWaiting = text.length === 0 || text.length === phrases[index].length;
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const currentPhrase = phrases[index];
    
    if (isDeleting) {
      if (text.length === 0) {
        timeout = setTimeout(() => {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
        }, 500); // Wait before typing next
      } else {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length - 1));
        }, 30); // Deleting speed
      }
    } else {
      if (text.length === currentPhrase.length) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2500); // Wait before deleting
      } else {
        timeout = setTimeout(() => {
          setText(currentPhrase.substring(0, text.length + 1));
        }, 60); // Typing speed
      }
    }
    
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <>
      {text}
      <motion.span
        animate={{ opacity: isWaiting ? [1, 0] : 1 }}
        transition={isWaiting ? { duration: 0.8, repeat: Infinity, ease: "linear" } : { duration: 0 }}
        className="inline-block w-[0.5em] h-[1em] bg-currentColor ml-1 align-middle"
        style={{ backgroundColor: 'currentColor' }}
      />
    </>
  );
}
