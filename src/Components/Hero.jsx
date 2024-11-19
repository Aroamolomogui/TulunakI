import React from "react";

function Hero() {
  return (
    <section className="relative bg-[url('/tulunaki_web_hero.jpg')] bg-cover bg-center bg-no-repeat aspect-[16/5] max-w-[1440px] min-h-[500px]md:min-h-[500px] lg:min-h-[500px] flex items-center justify-end max-w-full scroll-smooth">
      <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16 bg-black bg-opacity-20">
        <p className="text-lg sm:text-2xl md:text-3xl lg:text-[40px] font-primary text-light-bg text-center md:text-left">
          Despierta tu serenidad interior y encuentra el camino hacia un equilibrio duradero.
        </p>
      </div>
    </section>
  )
}

export default Hero;
