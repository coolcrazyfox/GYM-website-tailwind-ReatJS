/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenuMd } from "../../mockData/data";

const MdMenu = ({ opened }) => {
  return (
    <AnimatePresence>
      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full h-screen  z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenuMd.map((i) => {
                return <li key={i.id}>{i.title}</li>;
              })}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MdMenu;
