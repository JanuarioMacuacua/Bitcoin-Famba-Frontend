import React from 'react'
import FooterCount from './FooterCount'
export default function Footer() {
    return (
        <footer className='w-screen flex flex-row items-center justify-center '>
            <div className='clip-footer  w-[calc(100%-10%)] md:bg-gray-950 flex justify-around text-yellow-600 '>
                <div className='text-center'>
                    <FooterCount alvo={800} velocidade={10}/>
                    <p className='text-black text-[10px]'>Membros</p>
                </div>
                <div className='text-center'>
                    <FooterCount alvo={800} velocidade={10}/>
                    <p className='text-black text-[10px]'>Eventos</p>
                </div>
                <div className='text-center'>
                    <FooterCount alvo={800} velocidade={10}/>
                    <p className='text-black text-[10px]'>Graduados</p>
                </div>
                
        </div>
        </footer>
    )
}


