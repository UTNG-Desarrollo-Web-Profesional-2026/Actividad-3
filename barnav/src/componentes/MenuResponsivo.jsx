import React from 'react'
import { AnimatePresence } from 'motion/react'

const MenuResponsivo = ({ open, navBarLinks }) => {
  const animacion = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.3 }
  }

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div // ✅ Ahora SÍ estamos usando 'motion'
          {...animacion}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6">
            <ul className="flex flex-col justify-center items-center gap-10">
              {navBarLinks.map((item) => (
                <li 
                  key={item.id} 
                  className="cursor-pointer hover:text-secondary transition-colors duration-300"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MenuResponsivo