// src/components/Header.js

import { Bitcoin } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {

  return (
    <motion.header className="w-screen">
      
   
      <div className="w-[calc(100%-10%)] mx-auto"> 

        
        <div className="HeaderC HeaderShadow lg:hidden md:hidden sm:hidden relative 
          flex flex-row items-center justify-center p-3 m-2 mx-3 bg-black rounded-3xl text-center text-3xl z-50">
          <Bitcoin className="text-orange-500 size-10" />
        </div>

       
        <div className="hidden md:flex lg:flex items-center 
          bg-black text-white p-2 mt-5 mx-auto rounded-xl shadow-lg">
          
  
          <div className="LogoContainer relative z-10">
            <div className="clip-logo-desktop bg-white text-black p-3 px-8 text-2xl font-bold">
          
              <div className="flex items-center gap-2">
                <Bitcoin className="text-orange-500 size-7" />
                <span>Logo</span>
              </div>
            </div>
          </div>
          
    
          <div className="flex flex-1 justify-between items-center pl-8 pr-4"> 
       
            <nav className="flex gap-12 text-lg"> 
              <a href="/">Inicio</a>
              <a href="/Sobre">Sobre</a>
              <a href="/Eventos">Eventos</a>
              <a href="/Contactos">Contactos</a>
            </nav>
            
       
            <button className="bg-orange-500 text-black py-2 px-6 rounded-lg text-lg font-semibold hover:bg-orange-400 transition-colors">
              Participar
            </button>
          </div>
          
        </div>

      </div>
    </motion.header>
  );
}