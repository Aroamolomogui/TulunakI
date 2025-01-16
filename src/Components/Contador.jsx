// src/components/Countdown.jsx
import React from "react";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

/* Este objeto define cómo se comporta la animación del elemento luna*/
const moonAnimation = {
  animate: {
    rotate: [0, 360], // Gira desde 0 hasta 360 grados.
  },
  transition: {
    duration: 10, // Dura 10 segundos cada ciclo.
    repeat: Infinity, // Repite infinitamente.
    ease: "linear", // La animación tiene una velocidad constante.
  },
};

const Contador = ({ targetDate }) => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100">
      <motion.div
        className="w-32 h-32 bg-yellow-300 rounded-full"
        {...moonAnimation} //utilizo el spred operator para duplicar todo el objeto y su contenido que crean la animacion de la luna
      ></motion.div>
      <h2 className="text-2xl font-semibold mt-4">Próxima luna llena:</h2>
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <div className="text-xl mt-2">
            {days} días {hours} horas {minutes} minutos {seconds} segundos
          </div>
        )}
      />
    </div>
  );
};

export default Contador;
