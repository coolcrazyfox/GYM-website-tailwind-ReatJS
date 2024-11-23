import { FaSearch, FaDumbbell, FaCartArrowDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { NavbarMenu } from "../../mockData/data";

const NavBar = () => {
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
          <div>
            <button className="text-2xl hover:bg-primary hover:text-purple-300 rounded-full py-2 duration-200">
              <FaSearch className="text-2xl" />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-purple-300 rounded-full py-2 duration-200">
              <FaCartArrowDown className="text-2xl" />
            </button>
            <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px- py-2 duration-200hidden md:block">
              Login
            </button>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
