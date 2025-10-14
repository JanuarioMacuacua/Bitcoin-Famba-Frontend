'use client'
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
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
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} animate={{ rotate: 90 }} > <X className="size-[25px]"/> </motion.div>
            :
            <Equal className="size-[30px]"/>}


        </motion.div>

        {aberto ? <motion.div exit={{ opacity: 0 }} className="bg-gray-950 absolute rounded-lg flex-col justify-center top-18 w-10  lg:hidden ">
          <div className="ml-2 py-10">
            <House />
            <hr className="hr" />
            <Info />
            <hr className="hr" />
            <CalendarFold />
            <hr className="hr" />
            <Phone />
             <hr className="hr" />
               
               <Bitcoin className="{/*text-gradient-clip */} "/>
             
        

          </div>


        </motion.div> : null}






      </div></div>





  )
}