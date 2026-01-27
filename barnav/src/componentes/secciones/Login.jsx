import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
  const [cargando, setCargando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    
    // Simula la validación. Al terminar, onLogin() cambia el estado en App.jsx
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="h-screen bg-orange-600 flex items-center justify-center px-4"
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-black text-center text-gray-800 mb-6">BARG Cursos</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            required 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            required 
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none transition"
          />
          <button 
            type="submit"
            disabled={cargando}
            className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all flex justify-center items-center"
          >
            {cargando ? (
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
              />
            ) : "Ingresar"}
          </button>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Login;