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
      className="flex justify-end"
    >
      <button className="bg-orange-600 hover:bg-orange-700 overflow-hidden rounded-2xl text-center items-center mb-5 py-1 px-8 flex gap-1 w-50">
        <MapPinned className="size-5 z-10" />
      
        <motion.span
          className="whitespace-nowrap absolute  text-xl font-bold text-gray-100 px-4"
          animate={{
            // Sequência X:
            // 1. Visível (0%) -> 2. Sai à direita (100%) -> 3. Reset Fora (100%) -> 4. Salto para Esquerda (-100%) -> 5. Entra (0%)
            x: ["0%", "100%", "100%", "-100%", "0%"],

            // Sequência Opacidade: Esconde o teletransporte
            // 1. Visível -> 2. Visível -> 3. Escondido -> 4. Escondido -> 5. Visível
            opacity: [1, 1, 0, 0, 1],
          }}
          transition={{
            // 6 segundos para um ciclo completo (velocidade)
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",

            // Sincronização de tempo: O salto invisível ocorre entre 40% e 40.01% do tempo total.
            times: [0, 0.4, 0.4001, 0.6, 1],
          }}
        >
          Maputo-Matola, Moçambique
        </motion.span>
      </button>
    </motion.div>
  );
}
