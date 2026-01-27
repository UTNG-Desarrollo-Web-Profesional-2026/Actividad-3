import React from 'react';

const Cursos = () => {
  const listaCursos = [
    { nombre: "Master en React 19", nivel: "Avanzado", horas: "40h", color: "bg-blue-600", tag: "Hot" },
    { nombre: "Tailwind Pro & Design Systems", nivel: "Intermedio", horas: "25h", color: "bg-teal-500", tag: "Nuevo" },
    { nombre: "Framer Motion Expert", nivel: "Intermedio", horas: "15h", color: "bg-purple-600", tag: "Popular" },
    { nombre: "Arquitectura Node.js", nivel: "Avanzado", horas: "35h", color: "bg-green-600", tag: "Top" },
    { nombre: "Estructuras de Datos", nivel: "Básico", horas: "50h", color: "bg-orange-600", tag: "Esencial" },
    { nombre: "TypeScript desde Cero", nivel: "Básico", horas: "20h", color: "bg-blue-800", tag: "Hot" }
  ];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* HEADER DE CURSOS */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-200 pb-10 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-black text-gray-900 mb-4 tracking-tighter">NUESTRO CATÁLOGO</h2>
            <p className="text-gray-500 text-lg uppercase tracking-widest font-bold">Aprende con estándares de la industria</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {['Todos', 'Frontend', 'Backend', 'DevOps'].map(f => (
              <button key={f} className="px-6 py-2 rounded-full border-2 border-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all">
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* GRID DE TARJETAS TIPOGRÁFICAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {listaCursos.map((curso, index) => (
            <div key={index} className="bg-white border-2 border-gray-900 rounded-3xl overflow-hidden hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-x-1 hover:-translate-y-1">
              <div className={`${curso.color} p-6 flex justify-between items-center text-white`}>
                <span className="font-black text-sm uppercase tracking-tighter">{curso.tag}</span>
                <span className="text-xs font-bold bg-black/20 px-2 py-1 rounded">{curso.horas}</span>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase border border-gray-300 px-2 py-1 rounded text-gray-400">{curso.nivel}</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight text-gray-900">{curso.nombre}</h3>
                <p className="text-gray-500 mb-8 font-medium">Contenido actualizado. Proyectos reales incluidos. Acceso de por vida.</p>
                
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-2xl font-black text-gray-900">$0.00 <small className="text-xs text-gray-400 font-bold line-through">$199</small></span>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
                    Ver Curso
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cursos;