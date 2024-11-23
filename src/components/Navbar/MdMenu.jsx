import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenuMd } from "../../mockData/data";
const MdMenu = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full h-screen  z-20"
        >
          <div>
            <ul>
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
