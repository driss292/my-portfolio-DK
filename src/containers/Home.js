import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Home() {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            <Navbar />
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Bonjour, je m'appelle</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
                    Driss Kaci
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
                    Développeur d'application Front-End en alternance.
                </h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">
                    J'ai 34 ans et dans le cadre de la formation Développeur
                    d'application - JavaScript React - en alternance avec
                    <a
                        href="https://openclassrooms.com/fr/paths/516-developpeur-dapplication-javascript-react"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <span className="text-[#7450eb] ml-1">
                            {" "}
                            OpenClassRooms
                        </span>
                    </a>
                    , je recherche un contrat de professionnalisation de 24
                    mois. J'ai effectué le bootcamp Développeur d'application
                    web et mobile fullstack - JavaScript React et React Native -
                    au
                    <a
                        href="https://www.lereacteur.io"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        <span className="text-[#5c48d2] ml-1"> Reacteur</span>
                    </a>
                    .
                    {/* J'ai 34 ans et je suis un jeune développeur web
                    fullstack désireux d'en apprendre plus. Je suis actuellement
                    à la recherche d'une alternance pour une durée de minimum 6
                    mois. */}
                    {/* I'm 34 years old and I'm a beginner full stack web developer eager to
          learn more. I'm currently using the MERN stack (MongoDB, Express,
          React and Node.js), front-end and back-end developement. */}
                </p>
                <div>
                    <Link to="/work">
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                            Voir mes projets
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
