import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/DK.png";

export default function Navbar() {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    };
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <Link to="/">
                    <img
                        className="cursor-pointer"
                        src={Logo}
                        alt="Logo"
                        style={{ width: "50px", borderRadius: "8px" }}
                    />
                </Link>
            </div>
            {/*Menu */}

            <ul className="hidden md:flex">
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">&Agrave; propos</Link>
                </li>
                <li>
                    <Link to="/skills">Compétences & Notions</Link>
                </li>
                <li>
                    <Link to="/work">Mes projets</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            {/*Hamburger */}
            <div
                onClick={handleClick}
                className="md:hidden z-10 cursor-pointer"
            >
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile menu*/}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="/">
                        Accueil
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="/about">
                        &Agrave; propos
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="/skills">
                        Compétences
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="/work">
                        Mes projets
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-md duration-300 bg-blue-600">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://www.linkedin.com/in/driss-kaci-023581106/"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-md duration-300 bg-[#333]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="https://github.com/driss292"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-md duration-300 bg-[#6fc2b0]">
                        <a
                            className="flex justify-between items-center w-full text-gray-300"
                            href="mailto:noreply@1formatik.com"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] rounded-r-md duration-300 bg-[#ffbc02]">
                        <a
                            href="https://drive.google.com/file/d/12zPHvPeVcgtFlLerSEb5cUDjNK-84mEM/view?usp=sharing"
                            className="flex justify-between items-center w-full text-black"
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            mon CV <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
