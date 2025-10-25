import { Bitcoin } from "lucide-react";
import { motion } from "motion/react"

interface SplashScreenProps {
  fadeOut: boolean;
}

export default function SplashScreen({ fadeOut }: SplashScreenProps) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-black text-white z-50 transition-opacity duration-300 
        ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-4xl font-bold animate-pulse">
      <motion.div initial={{ scale: 0 }} 
      animate={{ scale: 30 ,
       transition:{duration :3.5 ,
       } 
       }} >
           <Bitcoin className=" text-gray-300 " />
      </motion.div>

      </div>
    </div>
  );
}
