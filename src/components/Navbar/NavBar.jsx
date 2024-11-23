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
            <ul className="flex items-center gap6 text-purple-300">
              {NavbarMenu.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="uppercase cursor-pointer select-none"
                  >
                    <a
                      href={item.link}
                      className="inline-bock py-1 px-3 hover:text-primary font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
        {/* <FaSearch /> */}
      </nav>
    </>
  );
};

export default NavBar;
