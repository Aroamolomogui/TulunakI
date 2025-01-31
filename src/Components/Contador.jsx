import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

// Lista de fechas de Lunas Llenas y sus signos zodiacales
const moonPhases = [
  { date: new Date("2025-02-12T11:00:00Z"), sign: "Leo ♌️" },
  { date: new Date("2025-03-14T23:00:00Z"), sign: "Virgo ♍️" },
  { date: new Date("2025-04-13T11:00:00Z"), sign: "Libra ♎️" },
  { date: new Date("2025-05-12T23:00:00Z"), sign: "Escorpio ♏️" },
  { date: new Date("2025-06-11T11:00:00Z"), sign: "Sagitario ♐️" },
  { date: new Date("2025-07-10T23:00:00Z"), sign: "Capricornio ♑️" },
  { date: new Date("2025-08-09T11:00:00Z"), sign: "Acuario ♒️" },
  { date: new Date("2025-09-07T23:00:00Z"), sign: "Piscis ♓️" },
  { date: new Date("2025-10-07T11:00:00Z"), sign: "Aries ♈️" },
  { date: new Date("2025-11-05T23:00:00Z"), sign: "Tauro ♉️" },
  { date: new Date("2025-12-05T11:00:00Z"), sign: "Géminis ♊️" },
];

// Animación de la Luna (rotación continua)
const moonAnimation = {
  animate: { rotate: [0, 360] },
  transition: { duration: 10, repeat: Infinity, ease: "linear" },
};

const Contador = () => {
  const [nextMoon, setNextMoon] = useState(null);

  // Encontrar la próxima Luna Llena
  useEffect(() => {
    const now = new Date();
    const upcomingMoon = moonPhases.find((moon) => moon.date > now);
    setNextMoon(upcomingMoon);
  }, []);

  if (!nextMoon) return <p className="text-center text-white">Cargando...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <motion.img
        src="/moon.png"
        alt="Luna llena girando"
        className="w-80 h-80 sm:w-[500px] sm:h-[500px]"
        {...moonAnimation}
      />
      <div className="mt-10 text-center">
        <h2 className="text-4xl font-bold">Próxima Luna Llena </h2>
        <p className="text-2xl mt-4 text-gray-300">En {nextMoon.sign}</p>
        {/* Contador regresivo */}
        <div className="mt-6 text-3xl bg-gray-800 p-6 rounded-lg shadow-lg inline-block">
          <Countdown
            date={nextMoon.date}
            onComplete={() => {
              const now = new Date();
              const newMoon = moonPhases.find((moon) => moon.date > now);
              setNextMoon(newMoon);
            }}
            renderer={({ days, hours, minutes, seconds }) => (
              <span className="font-mono">
                {days}d {hours}h {minutes}m {seconds}s
              </span>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Contador;
