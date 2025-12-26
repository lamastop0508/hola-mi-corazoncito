
import React, { useState, useEffect, useRef } from 'react';

interface DodgeButtonProps {
  label: string;
}

const DodgeButton: React.FC<DodgeButtonProps> = ({ label }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    // Calculamos un movimiento aleatorio pero que se mantenga visible
    // Usamos un rango amplio para que salte a cualquier lado
    const maxX = window.innerWidth / 2.5;
    const maxY = window.innerHeight / 2.5;
    
    const randomX = (Math.random() - 0.5) * maxX * 1.5;
    const randomY = (Math.random() - 0.5) * maxY * 1.5;

    setPosition({ x: randomX, y: randomY });
  };

  // Si por algún milagro logra hacerle clic (muy difícil), movemos el botón igual
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    moveButton();
  };

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        onPointerOver={moveButton}
        onClick={handleClick}
        className="bg-gray-100 text-gray-400 px-8 py-3 rounded-full font-medium shadow-sm transform transition-transform duration-75 select-none cursor-default active:scale-90"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          zIndex: 50,
          border: '1px solid #e5e7eb'
        }}
      >
        {label}
      </button>
    </div>
  );
};

export default DodgeButton;
