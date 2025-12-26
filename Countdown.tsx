
import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const year = now.getFullYear();
      let targetDate = new Date(`December 31, ${year} 23:59:59`);
      if (now > targetDate) targetDate = new Date(`December 31, ${year + 1} 23:59:59`);

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    return () => clearInterval(timer);
  }, []);

  const Unit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-1 bg-white/40 backdrop-blur-sm p-2 rounded-xl min-w-[60px] border border-rose-200 shadow-sm">
      <span className="text-xl font-bold text-rose-600">{value.toString().padStart(2, '0')}</span>
      <span className="text-[9px] uppercase tracking-wider text-rose-400 font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="mt-6">
      <p className="text-center text-rose-400 text-xs mb-3 font-medium uppercase tracking-widest">Cuenta Regresiva para el 31</p>
      <div className="flex justify-center items-center">
        <Unit value={timeLeft.days} label="Días" />
        <Unit value={timeLeft.hours} label="Hrs" />
        <Unit value={timeLeft.minutes} label="Min" />
        <Unit value={timeLeft.seconds} label="Seg" />
      </div>
    </div>
  );
};

export default Countdown;
