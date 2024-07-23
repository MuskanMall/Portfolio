import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Logo = () => {
  return (
    <svg
      width="100"
      height="60"
      viewBox="0 0 100 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="10"
        y="40"
        fontFamily="Arial"
        fontSize="48"
        fontWeight="bold"
        fill="black"
      >
        Mm
      </text>
    </svg>
  );
};

function NavBar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img src={logo} alt="logo" className="w-12 h-12" /> */}
        <Logo className="w-12 h-12" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/muskanmall/" target="_blank">
          <FaLinkedin className="text-pink-600" />
        </a>
        <a href="https://github.com/MuskanMall" target="_blank">
          <FaGithub className="text-orange-600" />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
