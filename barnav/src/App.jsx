import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/secciones/Home.jsx";
import About from "./componentes/secciones/About.jsx";
import Cursos from "./componentes/secciones/Cursos.jsx";
import Login from "./componentes/secciones/Login.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        {/* Solo mostramos el Navbar si el usuario está logueado */}
        {isLoggedIn && <Navbar />}

        <Routes>
          {/* Si NO está logueado, cualquier ruta lo manda al Login */}
          <Route 
            path="/login" 
            element={!isLoggedIn ? <Login onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/" />} 
          />

          {/* Rutas Protegidas */}
          <Route 
            path="/" 
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/about" 
            element={isLoggedIn ? <About /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/cursos" 
            element={isLoggedIn ? <Cursos /> : <Navigate to="/login" />} 
          />
          
          {/* Redirección por defecto si la ruta no existe */}
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;