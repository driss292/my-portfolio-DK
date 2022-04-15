import React from "react";
import Navbar from "./Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div
        name="contact"
        className="w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/cbe7f689-86f7-4292-aaf7-f13e640e3c29"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p>
            <p className="text-gray-300 py-4">
              Contactez-moi via ce formulaire ou directement sur mon adresse
              mail{" "}
              <a className="text-pink-600" href="mailto:drisskaci@gmail.com">
                drisskaci@gmail.com
              </a>
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 rounded"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded"
            type="text"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded"
            name="message"
            rows="10"
            placeholder="message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            ENVOYER
          </button>
        </form>
      </div>
    </>
  );
}
