
import React, { useState } from 'react';
import Countdown from './Countdown';
import DodgeButton from './DodgeButton';
import RainEffect from './RainEffect';
import { MAFE_PHOTO_CODE, DRESSES_COLLAGE_CODE } from './constants';

const App: React.FC = () => {
  const [hasSaidYes, setHasSaidYes] = useState(false);

  const resetView = () => {
    setHasSaidYes(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] text-pink-200 text-6xl floating opacity-50">🌸</div>
        <div className="absolute bottom-[10%] right-[5%] text-pink-200 text-6xl floating opacity-50" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute top-[20%] right-[10%] text-pink-200 text-4xl floating opacity-40" style={{animationDelay: '1s'}}>💖</div>
      </div>

      {hasSaidYes && <RainEffect />}

      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-[2rem] shadow-[0_20px_50px_rgba(251,113,133,0.2)] border border-white/50 p-6 md:p-8 text-center relative z-10 transition-all duration-500">
        
        {!hasSaidYes ? (
          <div className="space-y-8 animate-in fade-in zoom-in duration-700">
            {/* Foto de Mafe */}
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-400 to-pink-300 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src={MAFE_PHOTO_CODE} 
                  alt="Mafe" 
                  className="w-64 h-80 object-cover rounded-xl shadow-inner"
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1518196775741-20165963500a?w=400&h=500&fit=crop"; }}
                />
              </div>
            </div>

            <h1 className="dancing-font text-3xl md:text-4xl text-rose-600 leading-tight px-4">
              "Te amo mucho mi amor, mira lo linda q es tu novia pero no tiene vestido para el 31"
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 py-4 min-h-[140px]">
              <button
                onClick={() => setHasSaidYes(true)}
                className="bg-rose-500 hover:bg-rose-600 text-white px-12 py-4 rounded-full font-bold text-xl shadow-[0_10px_20px_rgba(244,63,94,0.3)] transform transition-all hover:scale-110 active:scale-95"
              >
                ¡SÍ, MI AMOR! 😍
              </button>
              
              <DodgeButton label="No... 🥺" />
            </div>

            <Countdown />
          </div>
        ) : (
          <div className="space-y-6 animate-in zoom-in duration-1000">
            <h2 className="dancing-font text-4xl md:text-5xl text-rose-500 mb-4 leading-tight">
              ¡SABÍA QUE DIRÍAS QUE SÍ! 💖
            </h2>
            <div className="relative">
              <div className="absolute -inset-4 bg-rose-200 rounded-[2rem] blur-xl opacity-30 animate-pulse"></div>
              <img 
                src={DRESSES_COLLAGE_CODE} 
                alt="Collage de vestidos" 
                className="relative w-full rounded-2xl shadow-2xl border-4 border-white"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop"; }}
              />
            </div>
            
            <p className="text-rose-400 font-semibold text-lg italic mt-4">
              "¡Gracias por hacerme la más feliz! Te amo infinito ❤️"
            </p>

            <button
              onClick={resetView}
              className="mt-4 text-rose-500 hover:text-rose-600 font-bold text-sm underline decoration-rose-300 underline-offset-4 transition-all hover:scale-105 active:scale-95"
            >
              Volver a ver lo linda que soy ✨
            </button>
          </div>
        )}
      </div>
      
      <p className="mt-8 text-rose-300 text-xs tracking-widest uppercase font-bold opacity-60">
        Hecho con amor por Mafe
      </p>
    </div>
  );
};

export default App;
