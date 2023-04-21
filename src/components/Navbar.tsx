import Logo from "../assets/avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleClick = () => {
    setHamburgerMenuOpen((value) => !value);
  };

  return (
    <nav className="flex justify-between px-4 py-2 sm:px-8 sm:py-4 border-b-[1px] shadow-md">
      <div className="">
        <img src={Logo} alt="logo" className="w-16 sm:w-20" />
      </div>

      <div className="flex items-center sm:hidden">
        <GiHamburgerMenu
          className="cursor-pointer"
          onClick={handleClick}
          size={30}
        />
        {hamburgerMenuOpen && (
          <div className="fixed top-0 right-0 p-5 h-full w-[60%] transition ease-in-out bg-gray-200">
            <AiOutlineClose
              onClick={handleClick}
              className="my-2 fixed right-5 cursor-pointer"
              size={30}
            />
            <ul className="flex flex-col gap-5 mt-20 text-xl">
              <a href="#">
                <li>Home</li>
              </a>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>Contact</li>
              </a>
              <a href="#">
                <li>Donate</li>
              </a>
              <a href="#">
                <li>Contribute</li>
              </a>
            </ul>
          </div>
        )}
      </div>
      <div className="hidden sm:flex items-center">
        <ul className="flex gap-6 text-xl">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
          <a href="#">
            <li>Donate</li>
          </a>
          <a href="#">
            <li>Contribute</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
