import React from "react";
import Vinted from "../assets/Vinted.png";
import Marvel from "../assets/Marvel.png";
import GamePad from "../assets/GamePad.png";
import Netflix from "../assets/Netflix.png";
import SnapChat from "../assets/SnapChat.jpg";
import Amazon from "../assets/Amazon.jpeg";
import Navbar from "./Navbar";

// import realEstate from "../assets/realestate.jpg";
// import WorkImg from "../assets/workImg.jpeg";

export default function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <Navbar />

      <div className="max-w-[1000px] mx-auto p-4 pt-32 pb-28 flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6 flex">
            Les projets réalisés dans le cadre de la formation
            <a
              href="https://www.lereacteur.io"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <span className="text-[#5c47d2] ml-1"> Le Reacteur </span>!
            </a>
          </p>
        </div>
        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Vinted})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Vinted-App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-vinted-app-driss-kaci.netlify.app/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/driss292/express-vinted-api"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Marvel})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Marvel-App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-marvel-app-driss-kaci.netlify.app/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/driss292/express-marvel-api"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GamePad})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Gamepad-App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://react-gamepad-app-driss-kaci.netlify.app/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/driss292/express-gamepad-api"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Amazon})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Amazon-App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    En cours
                  </button>
                </a>
                <a
                  href="https://react-netflix-app-v1.netlify.app/"
                  target={"_blank"}
                  rel="noopener noreferrer"
                >
                  <button
                    href="https://github.com/driss292/React-netflix-v1"
                    target={"_blank"}
                    rel="noopener noreferrer"
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Netflix})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Netflix-App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${SnapChat})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React-Snapchat-App
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    En cours
                  </button>
                </a>
                <a href="/">
                  <button
                    disabled
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
