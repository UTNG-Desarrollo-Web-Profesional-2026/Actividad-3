import React, { useState } from 'react'
import { navbarLinks } from '../data/data'
import { CiSearch } from "react-icons/ci"
import { ImBooks } from "react-icons/im"
import { MdMenu } from "react-icons/md"
import { PiShoppingCartLight } from "react-icons/pi"
import MenuResponsivo from './MenuResponsivo'
// 1. Importa Link de react-router-dom
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [abierto, setAbierto] = useState(false)

  return (
    <>
      <nav>
        <div className="container flex justify-between font-bold items-center py-8">
          
          {/* Logo - Ahora es un Link al Home */}
          <Link to="/" className="text-2xl flex items-center gap-2 uppercase">
            <ImBooks />
            <p>El sitio de BARG</p>
            <p className="text-secondary">Cursos</p>
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-7 text-gray-600">
              {navbarLinks.map((item) => (
                <li key={item.id}>
                  {/* 2. CAMBIO CLAVE: Usar <Link to={...}> en lugar de <a href={...}> */}
                  <Link
                    to={item.url}
                    className="inline-block py-1 px-3 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Iconos */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
              <PiShoppingCartLight />
            </button>
            
            {/* Si ya está logueado, quizás quieras cambiar este botón por "Cerrar sesión" o tu perfil */}
            <button className="hover:bg-primary font-semibold rounded-md text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block">
              Perfil
            </button>
            
            {/* Menú Móvil */}
            <div className="md:hidden">
              <MdMenu 
                onClick={() => setAbierto(!abierto)} 
                className="text-4xl cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Menú Responsivo */}
      {/* 3. ¡Ojo! También debes ir a MenuResponsivo.jsx y cambiar los <a> por <Link> allá */}
      <MenuResponsivo open={abierto} navBarLinks={navbarLinks} />
    </>
  )
}

export default Navbar