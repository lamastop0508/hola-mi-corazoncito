
import React, { useState } from 'react';

interface DodgeButtonProps {
  label: string;
}

const DodgeButton: React.FC<DodgeButtonProps> = ({ label }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    // Rango de escape muy amplio para que el botón "salte" lejos del cursor
    const vW = window.innerWidth;
    const vH = window.innerHeight;
    
    // Calculamos una posición aleatoria que cubra el 80% de la pantalla
    const randomX = (Math.random() - 0.5) * vW * 0.8;
    const randomY = (Math.random() - 0.5) * vH * 0.8;

    setPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={moveButton}
        onPointerOver={moveButton}
        onTouchStart={moveButton}
        onClick={(e) => { 
          e.preventDefault(); 
          moveButton(); 
        }}
        className="bg-gray-100 text-gray-400 px-8 py-3 rounded-full font-medium shadow-sm transition-transform duration-200 ease-out select-none cursor-default active:scale-95"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 40,
          border: '1px solid #e5e7eb'
        } as React.CSSProperties}
      >
        {label}
      </button>
    </div>
  );
};

export default DodgeButton;
