
import React, { useState } from 'react';
import Countdown from './Countdown';
import DodgeButton from './DodgeButton';
import RainEffect from './RainEffect';
import { MAFE_PHOTO_CODE, DRESSES_COLLAGE_CODE } from './constants';

const App: React.FC = () => {
  const [hasSaidYes, setHasSaidYes] = useState(false);

  const handleYes = () => {
    setHasSaidYes(true);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 bg-rose-50 overflow-hidden">
      {/* Corazones flotantes de fondo */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-pulse">❤️</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-pulse">❤️</div>
        <div className="absolute top-1/2 left-10 text-3xl">💖</div>
        <div className="absolute bottom-1/4 right-10 text-2xl">💕</div>
      </div>

      {hasSaidYes && <RainEffect />}

      <main className="max-w-xl w-full bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-2xl border border-rose-100 z-10 text-center space-y-6">
        
        {!hasSaidYes ? (
          <div className="flex flex-col space-y-6 animate-in fade-in duration-700">
            <div className="relative group mx-auto w-full max-w-[280px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-inner border-4 border-white">
                <img 
                  src={MAFE_PHOTO_CODE} 
                  alt="Mafe linda" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="dancing-font text-3xl md:text-4xl text-rose-600 leading-tight px-2">
              "te amo mucho mi amor, mira lo linda q es tu novia pero no tiene vestido para el 31"
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4 min-h-[100px]">
              <button
                onClick={handleYes}
                className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-3 rounded-full font-bold text-xl shadow-xl hover:shadow-rose-200 transition-all transform hover:scale-110 active:scale-95 z-30"
              >
                ¡SÍ, MI AMOR! 😍
              </button>
              
              <DodgeButton label="No... 🥺" />
            </div>

            <Countdown />
          </div>
        ) : (
          <div className="space-y-6 animate-in zoom-in duration-500">
            <h2 className="dancing-font text-4xl text-rose-600">
              ¡SABÍA QUE DIRÍAS QUE SÍ! 💖✨
            </h2>
            <p className="text-rose-400 font-medium italic">"Eres el mejor novio del mundo. Mira qué hermosos están:"</p>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-200 transition-transform hover:scale-[1.01]">
              <img 
                src={DRESSES_COLLAGE_CODE} 
                alt="Collage de vestidos" 
                className="w-full h-auto"
              />
            </div>

            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 italic text-rose-500 text-sm">
              "Gracias por hacerme tan feliz. ¡Te amo!"
            </div>

            <button 
                onClick={() => setHasSaidYes(false)}
                className="text-rose-400 text-xs md:text-sm font-semibold hover:text-rose-600 transition-colors flex items-center justify-center gap-2 mx-auto mt-4"
            >
                Volver a ver lo linda que soy ❤️
            </button>
          </div>
        )}
      </main>

      <footer className="mt-8 text-rose-300 text-[10px] font-light tracking-widest z-10">
        CON AMOR PARA MI NOVIO ❤️ {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;
