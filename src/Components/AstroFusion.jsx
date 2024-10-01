import React from "react";
import Hero from "./Hero";
import Form from "./Form";

function AstroFusion() {
  return (
    <div className=" container mx-auto px-4 py-4  bg-gradient-to-b from-indigo-900 to-purple-900 flex flex-col items-center justify-center ">
      <div className=" container w-full flex flex-col p-8">
        <div className=" w-full flex flex-col items-center">
          <Hero className="text-center mb-12"></Hero>

          <Form className="w-full max-w-lg bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-inner"></Form>
        </div>
      </div>
    </div>
  );
}

export default AstroFusion;
