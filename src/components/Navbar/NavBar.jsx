import React from "react";
import { FaSearch, FaDumbbell, FaCartArrowDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { NavbarMenu } from "../../mockData/data";
import MdMenu from "./MdMenu";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-8">
          <div className="text-2xl flex items-center gap-2 fon-bold py-8 uppercase select-none">
            <FaDumbbell className="cursor-pointer text-purple-300" />
            <p>Main</p>
            <p className="text-secondary">Gym</p>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-purple-300">
              {NavbarMenu.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="uppercase cursor-pointer select-none"
                  >
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-purple-300 rounded-full p-3 duration-200">
              <FaSearch className="" />
            </button>
            <button className="text-2xl text-primary hover:bg-primary hover:text-purple-300 rounded-full p-3 duration-200">
              <FaCartArrowDown className="" />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6  py-2 duration-200hidden md:block select-none">
              Login
            </button>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <CgMenuGridR className="text-4xl hover:text-purple-300 cursor-pointer select-none" />
          </div>
        </div>
      </nav>
      <MdMenu isOpen={isOpen} />
    </>
  );
};

export default NavBar;
