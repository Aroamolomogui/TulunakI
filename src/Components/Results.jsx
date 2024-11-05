import React from "react";

/*Vamos a crear un objeto para almacenar los datos para cada signo lo vamos a llamar adviceData/consejoDatos para my spanglish*/
/*Creamos una función que se llamará igual que nuestro componenete y su función será pasar por props haciendo destructuring (traer un valor de otro componente y aqu elunarSign tra el nombre de cada signo slculado en el form)*/
/*Crearemos una función para acceder al objeto const adviceData, utilizaremos lunarSign como clave para poder acceder al signo correspondiente que lo contiene adviceData*/
/*Verificaciones --> if verifica si signData está vacío o es undefined, !signData es una forma de evaluar si signData no existe (es undefined o null). Esto puede suceder si lunarSign contiene un valor que no tiene datos en adviceData, como un signo no válido o no registrado*/
const Results = ({ lunarSign }) => {
  const adviceData = {
    Aries: {
      symbol: "♈",
      element: "Fuego",
      modality: "Cardinal",
      signType: "Personal",
      introduction:
        "El periodo de Aries se enfoca en el inicio de proyectos y la acción directa.",
      advice:
        "Mantén una rutina de ejercicios para canalizar tu energía de manera positiva.",
      strengths:
        "Eres un líder natural, decidido y enérgico. Deja que tu luna se exprese.",
      phrase: "Tengo fe en mí mismo.",
      phraseOne: "Actúo con confianza y determinación.",
      reflectiveQuestions:
        "¿Estoy tomando la iniciativa en mi vida? ¿Cuáles son mis metas personales?",
      image: "/images/aries.jpg",
    },
    Tauro: {
      symbol: "♉",
      element: "Tierra",
      modality: "Fijo",
      signType: "Personal",
      introduction:
        "El periodo de Tauro es una época para construir bases sólidas y disfrutar de la estabilidad.",
      advice:
        "Regálate momentos de descanso y confort en un espacio tranquilo.",
      strengths:
        "Tienes una naturaleza constante, paciente, confiable y práctica. Permite que tu luna florezca en calma.",
      phrase: "Me siento seguro y en paz.",
      phraseOne: "Encuentro paz en la estabilidad.",
      reflectiveQuestions:
        "¿Estoy creando una vida estable? ¿Qué me hace sentir seguro?",
      image: "/images/tauro.jpg",
    },
    Géminis: {
      symbol: "♊",
      element: "Aire",
      modality: "Mutable",
      signType: "Personal",
      introduction:
        "El periodo de Géminis se centra en la comunicación y la búsqueda de conocimiento.",
      advice: "Escribe tus pensamientos o conversa con alguien de confianza.",
      strengths:
        "Eres versátil, curioso, comunicativo e ingenioso. Permite que tu luna explore sin límites.",
      phrase: "Encuentro inspiración en cada conversación.",
      phraseOne: "Mi mente es un universo de posibilidades.",
      reflectiveQuestions:
        "¿Estoy compartiendo mis ideas? ¿Qué conocimientos nuevos puedo adquirir?",
      image: "/images/geminis.jpg",
    },

    Cáncer: {
      symbol: "♋",
      element: "Agua",
      modality: "Cardinal",
      signType: "Interpersonal",
      introduction:
        "El periodo de Cáncer se enfoca en la familia, el hogar y las emociones.",
      advice: "Conéctate con tus seres queridos y comparte tus sentimientos.",
      strengths:
        "Eres intuitivo, protector, emocional, luna cariñosa, sincera,romántica, cálida, empático y orientado al hogar. Deja que tu luna cuide de lo que amas.",
      phrase: "Mis emociones son mi fuerza.",
      phraseOne: "Me cuido con mimo para poder cuidar a los demás.",
      reflectiveQuestions:
        "¿Estoy atendiendo mis necesidades emocionales? ¿Me siento seguro en mi hogar? ¿Confías en tu intuición? ¿Cómo expresas tus emociones? ¿Las dejas ser y existir?",

      Image: "Imagen de Cáncer",
    },
    Leo: {
      symbol: "♌",
      element: "Fuego",
      modality: "Fijo",
      signType: "Interpersonal",
      introduction:
        "El periodo de Leo celebra la autoexpresión y la autenticidad.",
      advice:
        "Dedica tiempo a actividades creativas que te hagan sentir especial.",
      strengths:
        "Eres vibrante, creativo y seguro de ti mismo. Permite que tu luna brille intensamente.",
      phrase: "Soy digno de reconocimiento.",
      phraseOne: "Mi creatividad es mi expresión más auténtica.",
      reflectiveQuestions:
        "¿Estoy expresando mi verdadero yo? ¿Qué me hace sentir realizado?",
      image: "/images/leo.jpg",
    },
    Virgo: {
      symbol: "♍",
      element: "Tierra",
      modality: "Mutable",
      signType: "Personal",
      introduction:
        "El periodo de Virgo es ideal para el análisis, la organización y el perfeccionamiento.",
      advice: "Organiza tu espacio y agenda para sentir calma y orden.",
      strengths:
        "Eres detallista, práctico, organizado y servicial. Permite que tu luna aporte estructura y calma.",
      phrase: "Encuentro paz en la organización.",
      phraseOne: "Ayudar a otros me da propósito.",
      reflectiveQuestions:
        "¿Estoy cuidando los detalles importantes? ¿Me siento organizado?",
      image: "/images/virgo.jpg",
    },
    Libra: {
      symbol: "♎",
      element: "Aire",
      modality: "Cardinal",
      signType: "Interpersonal",
      introduction:
        "El periodo de Libra fomenta la armonía y la diplomacia en las relaciones.",
      advice: "Busca equilibrio rodeándote de personas y ambientes armoniosos.",
      strengths:
        "Eres equilibrado, justo y amante de la paz. Deja que tu luna cree armonía a tu alrededor.",
      phrase: "La armonía es mi guía.",
      phraseOne: "Busco el balance en cada aspecto de mi vida.",
      reflectiveQuestions:
        "¿Mis relaciones son equilibradas? ¿Dónde puedo encontrar paz?",
      image: "/images/libra.jpg",
    },
    Escorpio: {
      symbol: "♏",
      element: "Agua",
      modality: "Fijo",
      signType: "Interpersonal",
      introduction:
        "El periodo de Escorpio es una etapa de transformación profunda y regeneración.",
      advice: "Practica la introspección y date tiempo para sanar.",
      strengths:
        "Eres intenso, profundo, apasionado y transformador. Permite que tu luna explore lo oculto.",
      phrase: "Abrazo la transformación.",
      phraseOne: "Mis emociones me guían hacia la verdad.",
      reflectiveQuestions:
        "¿Estoy dispuesto a sanar mis heridas? ¿Qué puedo dejar atrás para avanzar?",
      image: "/images/escorpio.jpg",
    },
    Sagitario: {
      symbol: "♐",
      element: "Fuego",
      modality: "Mutable",
      signType: "Transpersonal",
      introduction:
        "El periodo de Sagitario se centra en la expansión, el conocimiento y la aventura.",
      advice:
        "Explora al aire libre o prueba algo nuevo para refrescar tu espíritu.",
      strengths:
        "Eres optimista, aventurero, filosófico y alegre. Permite que tu luna te lleve a nuevas alturas.",
      phrase: "El mundo es mi hogar.",
      phraseOne: "Cada día es una oportunidad de aprendizaje.",
      reflectiveQuestions:
        "¿Qué nuevas experiencias me esperan? ¿Dónde encuentro mi libertad?",
      image: "/images/sagitario.jpg",
    },
    Capricornio: {
      symbol: "♑",
      element: "Tierra",
      modality: "Cardinal",
      signType: "Transpersonal",
      introduction:
        "El periodo de Capricornio es un tiempo para establecer metas a largo plazo y trabajar con disciplina.",
      advice: "Establece metas realistas y reconócete por cada pequeño logro.",
      strengths:
        "Eres perseverante, responsable, ambicioso y estructurado. Permite que tu luna aporte estabilidad y orden.",
      phrase: "Mi éxito se construye día a día.",
      phraseOne: "Soy constante en la búsqueda de mis sueños.",
      reflectiveQuestions:
        "¿Estoy avanzando hacia mis metas? ¿Reconozco mis propios logros?",
      image: "/images/capricornio.jpg",
    },
    Acuario: {
      symbol: "♒",
      element: "Aire",
      modality: "Fijo",
      signType: "Transpersonal",
      introduction:
        "El periodo de Acuario fomenta la innovación, la libertad y la búsqueda de ideales.",
      advice: "Únete a una causa social o conecta con amigos de ideas afines.",
      strengths:
        "Eres original, independiente, progresista y humanitario. Deja que tu luna inspire cambios positivos.",
      phrase: "Veo el mundo desde una perspectiva única.",
      phraseOne: "Mi autenticidad es mi fortaleza.",
      reflectiveQuestions:
        "¿Estoy rodeado de personas que comparten mis valores? ¿Cómo puedo aportar al bienestar común?",
      image: "/images/acuario.jpg",
    },
    Piscis: {
      symbol: "♓",
      element: "Agua",
      modality: "Mutable",
      signType: "Transpersonal",
      introduction:
        "El periodo de Piscis es un tiempo de introspección, creatividad y conexión espiritual.",
      advice:
        "Dedica tiempo a la meditación o la expresión artística para encontrar paz.",
      strengths:
        "Eres empático, compasivo, intuitivo y creativo. Permite que tu luna te conecte con el mundo emocional.",
      phrase: "Mi intuición es mi guía.",
      phraseOne: "La empatía y la compasión son mis dones.",
      reflectiveQuestions:
        "¿Me estoy permitiendo soñar? ¿Estoy cuidando de mi bienestar emocional?",
      image: "/images/piscis.jpg",
    },
  };

  const signData = adviceData[lunarSign];

  if (!signData) {
    return <p>No hemos encontrado consejos para tu signo lunar</p>;
  }

  return (
    <div className=" w-full bg-light-purple p-6 rounded-lg shadow-md mt-4 flex flex-col justify-center">
      <div>
        <div className="text-center">
          {/* Imagen del signo lunar */}
          <img
            src={signData.image}
            alt={`Imagen para ${lunarSign}`}
            className="w-32 h-32 mx-auto rounded-full shadow-md mt-6 text-center text-light-neutral-purple"
          />
          {/* Título e introducción del signo */}
          <div className="border border-light-purple p-4 rounded-lg shadow-sm mb-6">
            <h3 className="self-center text-center font-h2 text-light-neutral-purple">
              Tips para aprovechar esta energía independientemente de tu luna
              natal
            </h3>
            <p className=" self-center text-center font-h3 text-light-neutral-purple">
              {signData.introduction}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Símbolo, Elemento, Modalidad, y Tipo de Signo */}
        <div className="border border-light-purple p-4 rounded-lg shadow-sm flex flex-col h-full">
          <h3 className="font-h3 text-light-neutral-purple text-center mb-2">
            Características del signo
          </h3>
          <p className="font-text text-light-neutral-purple text-center">
            <strong>Símbolo:</strong> {signData.symbol}
          </p>
          <p className="font-text text-light-neutral-purple text-center">
            <strong>Elemento:</strong> {signData.element}
          </p>
          <p className="font-text text-light-neutral-purple text-center">
            <strong>Modalidad:</strong> {signData.modality}
          </p>
          <p className="font-text text-light-neutral-purple text-center">
            <strong>Tipo de signo:</strong> {signData.signType}
          </p>
        </div>

        {/* Consejos y Fortalezas */}

        <div className="border border-light-purple p-4 rounded-lg shadow-sm flex flex-col h-full">
          <h3 className="font-h3 text-light-neutral-purple text-center mb-2">
            Tip para desarrollar tus fortalezas
          </h3>
          <p className="font-text text-light-neutral-purple text-center">
            <strong>Consejo: </strong>
            {signData.advice}
          </p>
          <p className="font-text text-light-neutral-purple text-center">
            <strong>Fortaleza: </strong>
            {signData.strengths}
          </p>
        </div>

        {/* Frases Motivacionales */}

        <div className="border border-light-purple p-4 rounded-lg shadow-sm flex flex-col h-full">
          <h3 className="font-h3 text-light-neutral-purple text-center mb-2">
            Recuerda{" "}
          </h3>
          <p className="font-text text-light-neutral-purple text-center">
            {signData.phrase}
          </p>
          <p className="font-text text-light-neutral-purple text-center">
            {signData.phraseOne}
          </p>
        </div>

        {/* Preguntas Reflexivas */}

        <div className="border border-light-purple p-4 rounded-lg shadow-sm flex flex-col h-full">
          <h3 className="font-h3 text-light-neutral-purple text-center mb-2">
            Pregúntate
          </h3>
          <p className="font-text text-light-neutral-purple text-center">
            {signData.reflectiveQuestions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
