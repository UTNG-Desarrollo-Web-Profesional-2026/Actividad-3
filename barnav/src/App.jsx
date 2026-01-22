import Navbar from "./componentes/Navbar";
import Home from "./componentes/secciones/Home.jsx";
import About from "./componentes/secciones/About.jsx";
import Cursos from "./componentes/secciones/Cursos.jsx";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default App;
