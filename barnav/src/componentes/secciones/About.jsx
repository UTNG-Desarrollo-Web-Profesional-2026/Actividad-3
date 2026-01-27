import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
          >
            Impulsando el talento <span className="text-orange-600">tecnológico</span> de LATAM
          </motion.h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            En <strong>BARG Cursos</strong>, no solo dictamos clases; construimos el puente entre el aprendizaje académico y las necesidades reales de las empresas tecnológicas más innovadoras.
          </p>
        </div>

        {/* Rejilla de Datos / Propuesta de Valor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="p-10 bg-orange-50 rounded-3xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Filosofía</h3>
            <p className="text-gray-700 leading-relaxed">
              Creemos en el **aprendizaje práctico (Learning by doing)**. Cada curso en nuestra plataforma está diseñado para que el estudiante termine con un portafolio sólido de proyectos reales, no solo con teoría en la cabeza.
            </p>
          </div>
          <div className="p-10 bg-gray-900 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-orange-500">¿Por qué BARG?</h3>
            <p className="text-gray-300 leading-relaxed">
              Nuestra empresa nació de la necesidad de actualizar los programas educativos a la velocidad que se mueve el mercado. Actualizamos nuestros contenidos cada trimestre para asegurar que aprendas lo que se usa **hoy**.
            </p>
          </div>
        </div>

        {/* Sección de Estadísticas (Sin imágenes) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-gray-100 py-16">
          <div className="text-center">
            <span className="block text-5xl font-black text-orange-600 mb-2">50k+</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Estudiantes</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl font-black text-gray-900 mb-2">120</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Mentores</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl font-black text-orange-600 mb-2">95%</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Tasa de Empleo</span>
          </div>
          <div className="text-center">
            <span className="block text-5xl font-black text-gray-900 mb-2">24/7</span>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Soporte</span>
          </div>
        </div>

        {/* Valores de la Empresa */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Nuestros Pilares</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h4 className="text-xl font-bold mb-2">Innovación Constante</h4>
              <p className="text-gray-600">Nunca dejamos de buscar nuevas formas de hacer el aprendizaje más efectivo y entretenido.</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h4 className="text-xl font-bold mb-2">Calidad Técnica</h4>
              <p className="text-gray-600">Nuestros códigos y metodologías siguen los estándares más altos de la industria.</p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6 py-4">
              <h4 className="text-xl font-bold mb-2">Inclusión</h4>
              <p className="text-gray-600">Hacemos que la tecnología sea accesible para todos, sin importar su formación previa.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;