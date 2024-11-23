import { FaSearch, FaDumbbell, FaCartArrowDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="text-2xl flex items-center gap-2 fon-bold py-8">
            <FaDumbbell />
            <p>Main</p>
            <p>Gym</p>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <FaSearch />
      </nav>
    </>
  );
};

export default NavBar;
