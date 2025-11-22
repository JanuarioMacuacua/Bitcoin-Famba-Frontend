import React from "react";

import { motion } from "framer-motion";

export default function Slogan() {
  return (
    <div className="mt-3 text-black">
      
 <div className="relative text-4xl md:text-5xl lg:text-6xl ">
    
     <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          type: "tween",
          stiffness: 60,
          damping: 10,
          delay:1
        }}
        
      >  
      
        <p className="font-gamer-wide">Bitcoin Famba</p>
        <span className="font-sans">A jornada para a Liberdade Financeira</span>
      </motion.div> 

      <motion.div 

      initial={{
        x:-100,
        opacity:0,
      }}
      animate={{
        x:0,
        opacity:1,
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 10,
        delay: 1.4
      }}    
      
      >
        <div className="text-left text-2xl text-gray-950 my-5 md:mr-60 lg:mr-60 md:text-3xl lg:text-3xl whitespace-wrap ">
        Empoderando comunidades em Moçambique através da educação Bitcoin,
        construção de economia circular e narrativas culturais. 
      
        <motion.span 
        
       initial={{
        x:100,
        opacity:0,
      }}
      animate={{
        x:0,
        opacity:1,
      }}
      transition={{
        type: "spring",
        stiffness: 20,
        delay: 1.9
      }}    

      
        >"Famba"
        significa "caminhar" em Changana - e nossa jornada é rumo à autonomia
        financeira.</motion.span> 
      </div>

      </motion.div>

 
        </div>
     
    </div>
  );
}
