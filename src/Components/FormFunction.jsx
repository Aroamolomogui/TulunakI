import React, { useState } from "react";
import * as Astronomy from 'astronomy-engine';


/*Almacena los datos del Formulario*/

interface FormData {
  name: String
  lastName: String
  birthDate: String
  birtCountry: String
  birthCity: String
  birthTime: String
}

/*Almacena la posición lunar calculada*/

interface LunarPosition {
  longitude: number
  latitude: number
  distance: number
}

export default function LunarPositionForm() {
  const [FormData, setFormData] = useState<FormData>({
    name: ''
    lastName: ''
    birthDate: ''
    birtCountry: ''
    birthCity: ''
    birthTime: ''
  })
  const [LunarPosition,setLunarPosition] = useState<LunarPosition> | null>(null)

  /*Actualiza el estado de formDara caudno el usuario escribe en los campos */

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
 /*Utiliza `astronomy-engine` para calcular la posición lunar basada en la fecha y hora proporcionadas. */
  const calculateLunarPosition = (date: Date) => {
    const observer = new Astronomy.observer(0, 0, 0)
    const moonPos = Astronomy.GeoMoon(date)
    const equ= Astronomy.Equator(moonPos, date, observer, true, true)
    return {
      longitude: equ.ra,
      latitude: equ.dec,
      distance: moonPos.distance
    }
  }
  /*Maneja el envío del formulario, calcula la posición lunar y actualiza el estado. */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const birthDateTime = new Date(`${formData.birthDate}T${formData.birthTime}:00`)
      const position = calculateLunarPosition(birthDateTime)
    setLunarPosition(position)
  }


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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.lastName}
              onChange={handleChange}
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
              type="text"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
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
              type="text"
              id="birthTime"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
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
              value={formData.birthCity}
              onChange={handleChange}
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
              value={formData.birthCountry}
              onChange={handleChange}
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
    </div>
  );
}

export default Form;
