
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
  const chars = ['❤️', '💖', '💋', '😘', '💕', '✨', '🌹', '🥂'];

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Math.random(),
        x: Math.random() * 100,
        y: -10,
        size: Math.random() * (45 - 20) + 20,
        duration: Math.random() * (4 - 2) + 2,
        char: chars[Math.floor(Math.random() * chars.length)]
      };
      setParticles(prev => [...prev.slice(-70), newParticle]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animation: `fall ${p.duration}s linear forwards`,
            opacity: 0.9,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            pointerEvents: 'none'
          } as React.CSSProperties}
        >
          {p.char}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg) scale(0.5); opacity: 0; }
          10% { opacity: 1; scale: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg) scale(0.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default RainEffect;
