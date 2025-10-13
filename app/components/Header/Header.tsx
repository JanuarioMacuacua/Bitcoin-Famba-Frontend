'use client'
import { motion } from "framer-motion";
import React, { useState } from 'react';
import { House, Info, Menu, Phone, X } from 'lucide-react';
import { CalendarFold } from 'lucide-react';



export default function Header() {



  const [aberto, setAberto] = useState(false);
  const Alteracao = () => {
    setAberto(!aberto)
  }

  return (
    <header className="w-screen" >

      <div className="bg-gray-950">
        <div className=" w-[calc(100%-10%)]  flex   text-white items-center justify-between mt-0   ">
          <div className=" w-[calc(60%-15%)] clip-logo text-center text-3xl lg:bg-gray-50  p-3  lg:p-5  lg:text-black  ">
            <p>Logo</p>
          </div>

          <div >
            <nav className="hidden lg:flex justify-around gap-12 text-2xl" >
              < a href="/">Inicio</a>
              <a href="/Sobre">Sobre</a>
              <a href="/Eventos">Eventos</a>
              <a href="/Contactos">Contactos</a>
            </nav>
          </div>

          <div className="hidden lg:flex text-2xl lg:px-12">
            <button className="bg-orange-500" >Participar</button>
          </div>


          <div className="flex flex-col">


            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className=" p-2 lg:hidden " onClick={Alteracao}>

              {aberto ?
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} animate={{ rotate: 90 }} > <X /> </motion.div>
                :
                <Menu />}


            </motion.div>

            {aberto ? <motion.div exit={{ opacity: 0 }} className="bg-gray-950 absolute rounded-lg flex-col justify-center top-20 w-10  lg:hidden ">
              <div className="ml-2 py-10">
                <House />
                <hr className="hr" />
                <Info />
                <hr className="hr" />
                <CalendarFold />
                <hr className="hr" />
                <Phone />

              </div>


            </motion.div> : null}




          </div>
        </div>
      </div>


    </header>
  );
}