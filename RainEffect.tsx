
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  char: string;
}

const RainEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const chars = ['❤️', '💖', '💋', '😘', '💕', '✨'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * (30 - 15) + 15,
        duration: Math.random() * (8 - 4) + 4,
        char: chars[Math.floor(Math.random() * chars.length)]
      };
      setParticles(prev => [...prev.slice(-40), newParticle]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute animate-fall"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animation: `fall ${p.duration}s linear forwards`,
            opacity: 0.8
          }}
        >
          {p.char}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RainEffect;
