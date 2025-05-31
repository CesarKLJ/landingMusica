import React from 'react';
import { motion } from 'framer-motion';

export const AudioVisualizer: React.FC = () => {
  // Generate random heights for the bars
  const generateBars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      delay: i * 0.05,
    }));
  };

  const bars = generateBars(60);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-80 h-80 flex items-center justify-center">
          {bars.map((bar) => (
            <motion.div
              key={bar.id}
              className="absolute w-1 bg-gradient-to-t from-primary-500 to-secondary-400 opacity-80"
              initial={{ height: 4 }}
              animate={{
                height: [4, Math.random() * 12 + 4, 4],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: bar.delay,
                ease: "easeInOut",
              }}
              style={{
                transform: `rotate(${bar.id * 6}deg) translateY(-120px)`,
                transformOrigin: "bottom center",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};