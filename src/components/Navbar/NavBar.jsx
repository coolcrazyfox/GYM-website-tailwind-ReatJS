import { FaSearch, FaDumbbell, FaCartArrowDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { NavbarMenu } from "../../mockData/data";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="text-2xl flex items-center gap-2 fon-bold py-8 uppercase select-none">
            <FaDumbbell className="cursor-pointer text-purple-300" />
            <p>Main</p>
            <p className="text-secondary">Gym</p>
          </div>
          <div>
            <ul>
              {NavbarMenu.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="uppercase cursor-pointer select-none"
                  >
                    {item.title}
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
