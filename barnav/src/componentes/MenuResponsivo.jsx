import React from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'; // Asegúrate de usar framer-motion o motion/react
import { Link } from 'react-router-dom';

const MenuResponsivo = ({ open, navBarLinks, setOpen }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 }
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={animacion.initial}
          animate={animacion.animate}
          exit={animacion.exit}
          transition={animacion.transition}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6">
            <ul className="flex flex-col justify-center items-center gap-10">
              {navBarLinks.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={item.url} 
                    onClick={() => setOpen(false)}
                    className="cursor-pointer hover:text-secondary transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;