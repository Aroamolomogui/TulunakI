import React from "react";

function Hero() {
  return (
    <div className="w-full bg-[url('/images/Logo_fondo_transparente.PNG')] bg-fit bg-center bg-no-repeat bg-gradient-to-br from-purple-600 to-indigo-700 bg-blend-overlay p-8 flex flex-col justify-center items-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Cada vínculo es como una plantita, si lo cuidas crece.
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2x1 mx-auto">
          Hazte caso cuando algo no te vibra.
        </p>
      </div>
    </div>
  );
}

export default Hero;
