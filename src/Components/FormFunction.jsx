import React, { useState } from "react";
import * as Astronomy from "astronomy-engine";

/*flujo general sería:
a. Obtener coordenadas geográficas (latitud/longitud) del lugar de nacimiento.
b. Calcular la posición de la Luna en ese momento y lugar.
c. Convertir esa posición a longitud eclíptica.
d. Usar `getZodiacSign` para determinar el signo zodiacal basado en esa longitud.*/

//vamos a definir los signos zodiacales y los grados creando un array de objetos

const zodiacSigns = [
  {
    name: "Aries",
    symbol: "♈",
    start: 0,
    end: 30,
    dates: "21 de marzo - 19 de abril",
  },
  {
    name: "Tauro",
    symbol: "♉",
    start: 30,
    end: 60,
    dates: "20 de abril - 20 de mayo",
  },
  {
    name: "Géminis",
    symbol: "♊",
    start: 60,
    end: 90,
    dates: "21 de mayo - 20 de junio",
  },
  {
    name: "Cáncer",
    symbol: "♋",
    start: 90,
    end: 120,
    dates: "21 de junio - 22 de julio",
  },
  {
    name: "Leo",
    symbol: "♌",
    start: 120,
    end: 150,
    dates: "23 de julio - 22 de agosto",
  },
  {
    name: "Virgo",
    symbol: "♍",
    start: 150,
    end: 180,
    dates: "23 de agosto - 22 de septiembre",
  },
  {
    name: "Libra",
    symbol: "♎",
    start: 180,
    end: 210,
    dates: "23 de septiembre - 22 de octubre",
  },
  {
    name: "Escorpio",
    symbol: "♏",
    start: 210,
    end: 240,
    dates: "23 de octubre - 21 de noviembre",
  },
  {
    name: "Sagitario",
    symbol: "♐",
    start: 240,
    end: 270,
    dates: "22 de noviembre - 21 de diciembre",
  },
  {
    name: "Capricornio",
    symbol: "♑",
    start: 270,
    end: 300,
    dates: "22 de diciembre - 19 de enero",
  },
  {
    name: "Acuario",
    symbol: "♒",
    start: 300,
    end: 330,
    dates: "20 de enero - 18 de febrero",
  },
  {
    name: "Piscis",
    symbol: "♓",
    start: 330,
    end: 360,
    dates: "19 de febrero - 20 de marzo",
  },
];

// Definición de los datos del formulario en JavaScript
const FormFunction = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    birthTime: "",
    country: "",
    city: "",
  });

  //hook useState para crear y manejar el estado de los componentes aquí se almacenan los datos que vamos calculando y en su defecto cada error obtenido

  const [lunarPosition, setLunarPosition] = useState(null);
  const [lunarSign, setLunarSign] = useState(null);
  console.log(lunarSign);
  const [errorMessage, setErrorMessage] = useState("");

  // Función para obtener las coordenadas geográficas (longitud y latitud) usando la API de OpenCage

  const getCoordinates = async (city, country) => {
    const apiKey = "6090c7f31b4c460386f16d7de93eff55";
    const address = `${city}, ${country}`;
    console.log(address);
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    //obtener datos de una API de manera asíncrona y maneja cualquier posible error en la operación.
    try {
      const response = await fetch(url); // 1. Envía una solicitud HTTP a la URL y espera la respuesta.
      const data = await response.json(); // 2. Convierte el cuerpo de la respuesta (que está en JSON) a un objeto JS.
      // 3. console.log(data);  Ahora `data` contiene los resultados de la API, listos para usar.

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        return { lat, lng };
      } else {
        throw new Error(
          "No se encontraron resultados para la ubicación proporcionada."
        );
      }
    } catch (error) {
      console.error("Error al obtener las coordenadas:", error); // 4. Si algo falla, el error se captura aquí.
      throw error;
    }
  };

  //Función para obtener el signo lunar basandose en la longitud eclíptica (coordenada astronómica) que son los 360º de la rueda zodiacal esto te dice exactamente dónde se encuentra el signo.
  const getZodiacSign = (eclipticLongitude) => {
    //nos aseguramos que la long siempre estará entre 0 y 360, si es negativa  le sumamos 360 para normalizarla.
    const normalizedLongitud =
      eclipticLongitude >= 0 ? eclipticLongitude : eclipticLongitude + 360;
    //Devuelveme del array de zodiacsign el signo cuyo rango de º incluye la lng de la luna, con find devuelve el 1º elemento que cumple la condición y extrae su nombre
    return zodiacSigns.find(
      (sign) =>
        normalizedLongitud >= sign.start && normalizedLongitud < sign.end
    ).name;
  };

  // Maneja el envío del formulario, realiza validaciones, obtiene coordenadas y calcula la posición lunar utilizando al biblioteca astronomy-engine.
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // verifica si los campos de fecha y hora están llenos y si no es así informar al usuario con un mensaje para correjir errores

    if (!formData.birthDate || !formData.birthTime) {
      setErrorMessage(
        "Por favor ingrese una fecha y hora de nacimiento válidas"
      );
      return;
    }

    // Crear el objeto Date combinando la fecha y hora
    const birthDateTime = new Date(
      `${formData.birthDate}T${formData.birthTime}`
    );

    // Verifica si la fecha es válida
    if (isNaN(birthDateTime.getTime())) {
      setErrorMessage("Fecha y hora de nacimiento inválidas");
      return;
    }

    try {
      // Obtener las coordenadas geográficas con la API de OpenCage
      const { lat, lng } = await getCoordinates(
        formData.city,
        formData.country
      );
      // Calcula la posición lunar usando astronomy-engine
      console.log("Calculating lunar position for:", {
        date: birthDateTime,
        lat,
        lng,
      });

      // Convert lat and lng to Astronomy.Observer
      const observer = new Astronomy.Observer(lat, lng, 0);
      console.log(observer);

      // posición geocéntrica de la Luna en el momento del nacimiento.
      // saco el parámetro observer por que la posición geoccéntrica es independiente de la ubicación del observador de la Tierra
      const moonPosition = Astronomy.GeoMoon(birthDateTime);
      console.log(`esto es moonposition subnormal${moonPosition}`);

      // Convierte la posición de la Luna a coordenadas ecuatoriales.
      const moonEquator = Astronomy.Equator(
        "Moon",

        birthDateTime,
        observer,
        true,
        true
      );
      console.log("que tenemos por el ecuador baby", moonEquator);

      // OJO!! Convierte la posición de la Luna a coordenadas eclípticas OJO!!! `Astronomy.Ecliptic` transforma la posición a un sistema basado en la eclíptica (el plano de la órbita de la Tierra alrededor del Sol) Este sistema es crucial para determinar el signo zodiacal.
      const moonEcliptic = Astronomy.Ecliptic(moonPosition);
      console.log("las coordenaditas eclipticas de la luna bb", moonEcliptic);

      const zodiacsign = getZodiacSign(moonEcliptic.elon);

      setLunarPosition({
        ra: moonEquator.ra,
        dec: moonEquator.dec,
        dist: moonEquator.dist,
      });
      setLunarSign(zodiacsign);
    } catch (error) {
      setErrorMessage(
        "Error al obtener las coordenadas o calcular la posición lunar"
      );
      console.log(error);
    }
  };

  // Maneja el cambio en los inputs del formulario, actualiza el estado de formData cada vez que un usuario modifica un campo.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="mi_luna" className="w-full bg-dark-purple p-8 flex flex-col justify-center max-w-[1440px] max-w-full scroll-smooth">
      <div >
        <div className="text-center">
          <h2 className=" self-center text-center font-h2 text-light-neutral-purple">
            Descubre tu signo lunar
          </h2>
          <p className=" self-center text-center font-h3 text-light-neutral-purple">
            Ingresa tus datos para revelar los secretos de tu luna
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="font-text text-light-neutral-purple pl-4"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="font-text text-light-neutral-purple pl-4"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm
         "
            />
          </div>
          <div>
            <label
              htmlFor="birthDate"
              className="font-text text-light-neutral-purple pl-4"
            >
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="birthTime"
              className="font-text text-light-neutral-purple pl-4"
            >
              Hora de Nacimiento
            </label>
            <input
              type="time"
              id="birthTime"
              name="birthTime"
              value={formData.birthTime || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="font-text text-light-neutral-purple pl-4"
            >
              Ciudad de Nacimiento
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="font-text text-light-neutral-purple pl-4"
            >
              País
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
            />
          </div>
        </div>
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-1/2 py-2 px-4 border border-gray-300 rounded-3xl shadow-lg text-light-bg bg-dark-purple text-base font-semibold transition-colors duration-500 hover:bg-light-bg hover:text-dark-purple hover:transition-shadow duration-500 hover:shadow-glow"
          >
            Descubrir mi Signo Lunar
          </button>
        </div>
      </form>

      {errorMessage && (
        <p className="text-red-500 text-center mt-4">{errorMessage}</p>
      )}

      {lunarPosition && (
        <div className="mt-4 text-center">
          <h3 className="font-h3 text-light-neutral-purple">Posición de la Luna:</h3>
          <p className="font-text text-light-neutral-purple">Ascensión Recta: {lunarPosition.ra.toFixed(2)} horas</p>
          <p className="font-text text-light-neutral-purple">Declinación: {lunarPosition.dec.toFixed(2)} grados</p>
          <p className="font-text text-light-neutral-purple">Distancia: {lunarPosition.dist.toFixed(2)} km</p>
        </div>
      )}

      <div className="mt-4 text-center">
        <h3 className="font-h3 text-light-neutral-purple">Signo Lunar:</h3>
        <p className="font-text text-light-neutral-purple">{lunarSign}</p>
      </div>
    </div>
  );
};

export default FormFunction;
