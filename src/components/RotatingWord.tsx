import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RotatingWordProps {
  words: string[];
  className?: string;
  intervalMs?: number;
}

export function RotatingWord({ words, className, intervalMs = 2200 }: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words.length, intervalMs]);

  return (
    <span className={`relative inline-block overflow-hidden align-bottom ${className ?? ""}`}>
      {/* Invisible longest word reserves the box width/height so layout doesn't jump */}
      <span className="invisible" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute inset-0 text-primary"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
