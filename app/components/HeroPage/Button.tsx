import { MapPinned } from "lucide-react";
import { motion } from 'framer-motion';
export default function Button() {
    return (
        <motion.div 

        initial={{
         x:100,
         opacity:0
        }}
        animate={{
         x:0,
         opacity:1
        }}
        transition={{
         type:"tween",
         stiffness:70,
         damping: 8
        }}
        
        className="flex justify-end">
            <button className="bg-orange-500 rounded-2xl text-center items-center py-1 px-8 flex gap-1">
                 <MapPinned className="size-5"/>
               <span>Maputo-Matola, Moçambique</span>
            </button>
           
        </motion.div>
    );
}