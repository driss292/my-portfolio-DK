import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              &Agrave; propos de moi
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4 sm:text-right text-3xl font-medium">
          <p>
            Ouvert d'esprit, Dynamique, Volontaire, Polyvalent, Curieux,
            Organisé, Motivé, Sens de l'écoute.
          </p>
        </div>
      </div>
    </div>
  );
}
