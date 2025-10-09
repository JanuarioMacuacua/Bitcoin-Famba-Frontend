import React from 'react';
import { Menu } from 'lucide-react';


export default function Header() {
  return (
    <header className="w-screen" >

      <div className="bg-gray-950">
                          <div className=" w-[calc(100%-10%)]  flex   text-white items-center justify-between mt-0   "> 
                <div className=" w-[calc(40%-15%)] clip-logo text-center text-3xl lg:bg-gray-50  p-3  lg:p-5  lg:text-black  ">
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

                <div className=" p-2 lg:hidden  ">
                          <Menu />
                </div>

              </div>
      </div>



    </header>
  );
}