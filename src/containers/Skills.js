import React from "react";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Navbar from "./Navbar";

export default function Skills() {
  return (
    <div name="skills" className="w-full h-full bg-[#0a192f] text-gray-300">
      <Navbar />

      {/* Container*/}
      <div className="max-w-[1000px] mx-auto pt-[80px] p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Compétences & Notions
          </p>
          <p className="py-4">Technos utilisées sur mes projets</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-8 pb-96 mb-34">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              }
              alt="VScode icon"
            />
            <p className="my-4">VS code</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={"https://cdn.worldvectorlogo.com/logos/netlify.svg"}
              alt="netlify icon"
            />
            <p className="my-4">Netlify</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JS icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="node icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              }
              alt="SASS icon"
            />
            <p className="my-4">Sass</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              }
              alt="redux icon"
            />
            <p className="my-4">Redux</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="github icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind icon" />
            <p className="my-4">TailwindCSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="mongoDB icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
              }
              alt="slack icon"
            />
            <p className="my-4">Slack</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
              }
              alt="heroku icon"
            />
            <p className="my-4">Heroku</p>
          </div>
        </div>
      </div>
    </div>
  );
}
