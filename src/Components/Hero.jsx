import React from "react";

function Hero() {
  return (
      <section className="flex justify-between items-center bg-light-bg">
        <img src="src/assets/woman_holding_moon.jpg" alt="" className="w-1/2" />
        <p className="w-1/2 p-[70px] text-[40px] font-primary text-main-text text-justify">
          Despierta tu serenidad interior y encuentra el camino hacia un equilibrio duradero.
        </p>
      </section>
    )
  };

export default Hero;
