import {motion} from 'framer-motion';


export default function ButtonTwo() {
    return (
     
        <div className='flex flex-col items-center w-full mt-10'> 
            
            <motion.hr 
         
                className=' border-gray-400 mx-auto w-full ' 
                initial={{
                    width:5,
                    opacity:0,
                    padding:0,
               
                }}
                animate={{
                    width:"70%", 
                    opacity:1, 
                    padding:20,
        
                }}
                transition={{
                    type:'tween',
                    ease: 'easeOut',
                    duration: 0.8, 
                    delay:3
                }}
            />
            
            <motion.div
                initial={{
                    opacity:0,
                    y:20 
                }}
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={{
                    type:'tween',
                    duration: 0.5,
                    delay:1.7 
                }}

                
                className="flex flex-col items-center gap-3 mt-8 w-full max-w-sm px-4">
                
                <button className="bg-orange-600 btnUp hover:bg-orange-700 text-white px-2 py-1 rounded-md w-full text-lg">
                    Tornar-se membro
                </button>
                <button className="border-1 border-white hover:border-gray-400 text-black px-6 py-3 rounded-md w-full text-lg">
                    Nossa missão 
                </button>
            </motion.div>
        </div>
    )
}
