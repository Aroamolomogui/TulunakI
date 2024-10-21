import React from "react";

function Form() {
  return (
    <div className="w-full bg-dark-purple p-8 flex flex-col justify-center">
      
      <div className="text-center">
        <h2 className=" self-center text-center font-h2 text-light-neutral-purple">
          Descubre tu signo lunar
        </h2>
        <p className=" self-center text-center font-h3 text-light-neutral-purple">
          Ingresa tus datos para revelar los secretos de tu luna
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="nombre"
              className="font-text text-light-neutral-purple pl-4"
            >
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="Apellidos"
              className="font-text text-light-neutral-purple pl-4"
            >
              Apellidos
            </label>
            <input
              id="Apellidos"
              name="Apellidos"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm
         "
            />
          </div>
          <div>
            <label
              htmlFor="Fehca de Nacimiento"
              className="font-text text-light-neutral-purple pl-4"
            >
              Fecha de Nacimiento
            </label>
            <input
              id="Fecha de Nacimiento"
              name="Fecha de Nacimiento"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl  shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="Hora de Nacimiento"
              className="font-text text-light-neutral-purple pl-4"
            >
              Hora de Nacimiento
            </label>
            <input
              id="Hora de Nacimiento"
              name="Hora de nacimiento"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 sm:text-sm "
            />
          </div>
          <div>
            <label
              htmlFor="Lugar de nacimiento"
              className="font-text text-light-neutral-purple pl-4"
            >
              Lugar de nacimiento
            </label>
            <input
              id="Lugar de Nacimiento"
              name="Lugar de nacimiento"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl  shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300"
            />
          </div>
          <div>
            <label
              htmlFor="País"
              className="font-text text-light-neutral-purple pl-4"
            >
              País
            </label>
            <input
              id="País"
              name="País"
              type="text"
              required
              className="mt-1 block w-full border border-gray-300 rounded-3xl  shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm"
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
    </div>
  );
}

export default Form;
