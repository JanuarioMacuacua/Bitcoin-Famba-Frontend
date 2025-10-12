"use client";

import React, { useEffect, useState } from "react";

interface FooterCountProps {
  alvo: number;
  velocidade?: number; // opcional, valor padrão definido abaixo
}

const FooterCount: React.FC<FooterCountProps> = ({ alvo, velocidade = 1000 }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervaloId: NodeJS.Timeout;

    intervaloId = setInterval(() => {
      setTime((prevTime) => {
        if (alvo === 0) {
          clearInterval(intervaloId);
          return 0;
        }

        const novoTempo = prevTime + 1;

        if (novoTempo >= alvo) {
          clearInterval(intervaloId);
          return alvo;
        }

        return novoTempo;
      });
    }, velocidade);

    return () => clearInterval(intervaloId);
  }, [alvo, velocidade]);

  return (
    <div>
      <h1 className=" text-4xl md:text-6xl font-bold"> {time}+</h1>
    </div>
  );
};

export default FooterCount;

