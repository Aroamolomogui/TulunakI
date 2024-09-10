import React from "react";

function Form() {
  return <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center hidden">
      <img src="" alt="" />
      <h2 className="mt-4 text-2xl font-bold">Tu signo lunar es</h2>
      </div>

    <div className="max-w-2x1 w-full space-y-8 p-8 rounded-xl shadow-2xl">
      <div className="text-center">
    <h2 className="mt-4 text-2xl font-bold text-black"
    >Descubre tu signo lunar</h2>
    <p className="mt-2 text-base text-gray-200">Ingresa tus datos para revelar los secretos de tu luna</p>
    </div>
    </div>

    <div>
      <form className="mt-8 space-y-6">   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label htmlFor="nombre" className="block text-base font-medium text-black">Nombre</label>
          <input
          id="nombre"
          name="nombre"
          type="text"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300"
          />
        </div>
        <div>
          <label htmlFor="Apellidos"className="block text-base font-medium text-black">Apellidos</label>
          <input 
          id="Apellidos"
          name="Apellidos"
          type="text"
          required
          className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm py-2 px3 focus:outline-none  focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm
         "
          />
        </div>
        <div>
          <label htmlFor="Fehca de Nacimiento"className="block text-base font-medium text-black">Fecha de Nacimiento</label>
          <input 
          id="Fecha de Nacimiento"
          name="Fecha de Nacimiento"
          type="text"
          required
          className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300" />
        </div>
        <div>
          <label htmlFor="Hora de Nacimiento"className="block text-base font-medium text-black">Hora de Nacimiento</label>
          <input 
          id="Hora de Nacimiento"
          name="Hora de nacimiento"
          type="text"
          required
          className="mt-1 block w-full border border-gray-400 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 sm:text-sm " />
        </div>
        <div>
          <label htmlFor="Lugar de nacimiento"className="block text-base font-medium text-black">Lugar de nacimiento</label>
          <input 
          id="Lugar de Nacimiento"
          name="Lugar de nacimiento"
          type="text"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300" />
        </div>
        <div>
          <label htmlFor="País"className="block text-base font-medium text-black">País</label>
          <input
          id="País"
          name="País" 
          type="text"
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-300 focus:border-indigo-300 sm:text-sm" />
        </div>
        <div>
          <button
          type="submit"
          className="">
            Descubrir mi Signo Lunar
          </button>
        </div>
        </form>
    </div>

    </div>;
}

export default Form;
