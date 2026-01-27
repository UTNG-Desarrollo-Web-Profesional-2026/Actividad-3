import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-50 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
            Nueva convocatoria 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-none">
            Aprende el futuro hoy con <span className="text-orange-600 italic">BARG</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            La plataforma líder en formación técnica. Desarrolla las habilidades que las empresas están buscando activamente.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-700 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Comenzar ahora
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-900 hover:text-white transition-all">
              Explorar currículum
            </button>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN DE MÓDULOS (Sin imágenes) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { t: "Frontend", d: "React, Vue y arquitecturas modernas.", c: "bg-blue-50" },
              { t: "Backend", d: "Node.js, Python y bases de datos.", c: "bg-green-50" },
              { t: "Cloud", d: "AWS, Azure y despliegue continuo.", c: "bg-purple-50" },
              { t: "UI/UX", d: "Diseño de interfaces centradas en el usuario.", c: "bg-orange-50" }
            ].map((item, i) => (
              <div key={i} className={`${item.c} p-10 border border-gray-100 hover:z-10 hover:shadow-xl transition-all cursor-default`}>
                <h3 className="text-2xl font-bold mb-4">{item.t}</h3>
                <p className="text-gray-600">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8">¿Listo para transformar tu carrera?</h2>
          <p className="text-xl mb-10 opacity-90">Únete a más de 50,000 estudiantes que ya están trabajando en tecnología.</p>
          <button className="bg-white text-orange-600 px-12 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform">
            Inscríbete hoy mismo
          </button>
        </div>
      </section>
    </main>
  );
};
export default Home;