import React, { useState } from "react";
import * as Astronomy from "astronomy-engine";

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

  const [lunarPosition, setLunarPosition] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Función para obtener las coordenadas usando la API de OpenCage

  const getCoordinates = async (city, country) => {
    const apiKey = "6090c7f31b4c460386f16d7de93eff55";
    const address = `${city}, ${country}`;
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

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      const position = Astronomy.MoonPosition(birthDateTime, lat, lng);
      setLunarPosition(position);
    } catch (error) {
      setErrorMessage(
        "Error al obtener las coordenadas o calcular la posición lunar."
      );
    }
  };

  // Maneja el cambio en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center">
      <div className="max-w-2x1 w-full space-y-8 p-8 bg-black bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl">
        <div className="text-center">
          <h2 className="mt-4 text-2xl font-bold text-black">
            Descubre tu signo lunar
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Ingresa tus datos para revelar los secretos de tu luna
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-black"
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
              className="block text-base font-medium text-black"
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
              className="mt-1 block w-full border border-gray-400 rounded-3xl shadow-sm py-2 px3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm
         "
            />
          </div>
          <div>
            <label
              htmlFor="birthDate"
              className="block text-base font-medium text-black"
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
              className="mt-1 block w-full border border-gray-400 rounded-3xl  shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="birthTime"
              className="block text-base font-medium text-black"
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
              className="mt-1 block w-full border border-gray-400 rounded-3xl shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 sm:text-sm "
            />
          </div>
          <div>
            <label
              htmlFor="birthCity"
              className="block text-base font-medium text-black"
            >
              Ciudad de Nacimiento
            </label>
            <input
              type="text"
              id="birthCity"
              name="birthCity"
              value={formData.birthCity || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl  shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="birthCountry"
              className="block text-base font-medium text-black"
            >
              País
            </label>
            <input
              type="text"
              id="birthCountry"
              name="birthCountry"
              value={formData.birthCountry || ""}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl  shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
            />
          </div>
        </div>
        <div className="pt-4">
          <button
            type="submit"
            className="w-full flex justify-center self-start py-2 px-4 border border-gray-300 rounded-3xl shadow-lg text-base font-semibold hover:bg-slate-200 "
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
          <h3 className="text-xl font-bold">Tu Luna está en:</h3>
          <p>Latitud: {lunarPosition.lat}</p>
          <p>Longitud: {lunarPosition.lon}</p>
        </div>
      )}
    </div>
  );
};

export default FormFunction;