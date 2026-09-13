import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import img from "../assets/logo-text.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#FFFFFF] sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 container mx-auto px-4">
        <img src={img} alt="Logo" />

        <ul className="hidden md:flex space-x-4">
          <li>Home</li>
          <li>Technology</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="hidden md:flex space-x-2">
          <button className="btn btn-outline">Sign In</button>
          <button className="btn btn-secondary rounded-4xl">Sign Up</button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 ">
          <ul className="flex flex-col gap-3 mb-4">
            <li>Home</li>
            <li>Technology</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className="flex flex-col gap-2 ">
            <button className="btn btn-outline w-full">Sign In</button>
            <button className="btn btn-secondary rounded-4xl w-full">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
