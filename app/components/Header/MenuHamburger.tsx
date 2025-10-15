'use client'
import { motion } from "framer-motion";
import { House, Info, Phone, X, Menu, Bitcoin, Equal } from 'lucide-react';
import { CalendarFold } from 'lucide-react';

import React, { useState } from 'react';

export default function MenuHamburger() {

  const [aberto, setAberto] = useState(false);

  const Alteracao = () => {
    setAberto(!aberto)
  }

  return (
    <div className="flex">

      <div className="mr-[-20] flex flex-col">


        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} className=" p-2 lg:hidden " onClick={Alteracao}>

          {aberto ?
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} animate={{ rotate: 90 }} > <X className="size-[25px]" /> </motion.div>
            :
            <Equal className="size-[30px]" />}


        </motion.div>

        {aberto ? <motion.div exit={{ opacity: 0 }} className="bg-gray-950 absolute rounded-lg flex-col ml-[-110px] top-18 w-40  lg:hidden ">
          
          <div className="py-10 text-gray-400 items-right">
            <span className="flex  justify-around items-center"><p>Home</p><House className=" text-gray-200 right-0"/></span>
            <hr className="hr" />
            <span className="flex  justify-around items-center"><p>Informacoes</p><Info className=" text-gray-200 right-0"/></span>
            <hr className="hr" />
            <span className="flex  justify-around items-center"><p>Eventos</p><CalendarFold className=" text-gray-200"/></span>
            <hr className="hr" />
            <span className="flex  justify-around items-center"><p>Contactar</p><Phone className=" text-gray-200"/></span>
              <hr className="hr" />
            <span className="flex  justify-around items-center"><p>Participar</p><Bitcoin className=" text-gray-200"/></span>

          </div>

          

        </motion.div> : null}






      </div></div>





  )
}