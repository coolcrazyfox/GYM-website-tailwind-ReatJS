import { FaSearch, FaDumbbell, FaCartArrowDown } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div>
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
