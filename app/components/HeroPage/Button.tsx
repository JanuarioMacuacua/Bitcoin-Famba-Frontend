import { MapPinned } from "lucide-react";
import { motion } from "framer-motion";
export default function Button() {
  return (
    <motion.div
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        stiffness: 70,
        damping: 8,
      }}
      className="flex justify-end  mt-12"
    >
      <button className="bg-orange-600 hover:bg-orange-700 overflow-hidden rounded-2xl text-center items-center mb-5 py-1 px-8 flex 
      gap-1  md:w-90 lg:w-90">
        <MapPinned className="size-5 z-10 relative bg-orange-600" />
      
        <motion.span
          className="whitespace-nowrap font-bold text-gray-100 px-4"
          animate={{

            x: ["0%", "100%", "100%", "-100%", "0%"],
            opacity: [1, 3, 10, -50, 1],
          }}
          transition={{
            // 6 s (velocidade)
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",

  
            times: [0, 0.4, 0.4001, 0.6, 1],
          }}
        >
          Maputo-Matola, Moçambique
        </motion.span>
      </button>
    </motion.div>
  );
}
