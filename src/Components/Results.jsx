import React from "react";

/*Vamos a crewar un array para almacenar los consejos y la imagen para cada signo lo voamos a llamar adviceData/consejoDatos para my spanglish*/
/*Creamos una función que nos devuelva */
const Results = ({ lunarSign }) => {
  const adviceData = {
    Aries: {
      advice: " Texto para Aries.",
      Image: "Imagen de aries",
    },
    Tauro: {
      advice: " Texto para Tauro.",
      Image: "Imagen de Tauro",
    },
    Géminis: {
      advice: " Texto para Géminis.",
      Image: "Imagen de Géminis",
    },
    Cáncer: {
      advice: " Todo va ha salir bien Arowi, pero cada cosa en su tiempo.",
      Image: "Imagen de Cáncer",
    },
    Leo: {
      advice: " Texto para Leo.",
      Image: "Imagen de Leo",
    },
    Virgo: {
      advice: " Texto para Virgo.",
      Image: "Imagen de Virgo",
    },
    Libra: {
      advice: " Texto para Libra.",
      Image: "Imagen de Libra",
    },
    Escorpio: {
      advice: " Texto para Escorpio.",
      Image: "Imagen de Escorpio",
    },
    Sagitario: {
      advice: " Texto para Sagitario.",
      Image: "Imagen de Sagitario",
    },
    Capricornio: {
      advice: " Texto para Capricornio.",
      Image: "Imagen de Capricornio",
    },
    Acuario: {
      advice: " Texto para Acuario.",
      Image: "Imagen de Acuario",
    },
    Piscis: {
      advice: " Texto para Piscis.",
      Image: "Imagen de Piscis",
    },
  };

  const signData = adviceData[lunarSign];

  if (!signData) {
    return <p>No hemos encontrado consejos para tu signo lunar</p>;
  }

  return (
    <div className="bg-light-purple p-4 rounded-lg shadow-md text-center max-w-md mx-auto mt-6">
      <h3 className="font-h3 text-light-neutral-purple">{lunarSign}:</h3>
      <p className="font-text text-light-neutral-purple">{signData.advice}</p>
      <img
        src="{signData.image}"
        alt={`imagen para ${lunarSign}`}
        className="w-32 h-32 mx-auto rounded-full shadow-md text-light-neutral-purple"
      />
    </div>
  );
};

export default Results;
