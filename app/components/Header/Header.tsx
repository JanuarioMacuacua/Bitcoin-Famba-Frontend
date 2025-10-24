'use client'

export default function Header() {
 
  return (
       <header className="w-screen">

            <div className=" shadow my-20 ">
              <div className=" w-[calc(100%-10%)] text-white items-center ">

                <div className="HeaderC clip-logo HeaderShadow">
                  <div>Logo</div>
                </div>

                <div>
                  <nav className="hidden lg:flex justify-around gap-12 text-2xl" >
                    <a href="/">Inicio</a>
                    <a href="/Sobre">Sobre</a>
                    <a href="/Eventos">Eventos</a>
                    <a href="/Contactos">Contactos</a>
                  </nav>
                </div>

                <div className="hidden lg:flex text-2xl lg:px-12">
                  <button className="bg-orange-500" >Participar</button>
                </div>
              </div>
            </div>
          </header>

      )
    
    }
  