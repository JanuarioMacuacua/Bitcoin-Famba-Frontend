"use client";

import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Heropage from "./components/HeroPage/Heropage";

import SplashScreen from "./components/Header/SplashScreen";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 0);
    const finish = setTimeout(() => setLoading(false), 0);

    return () => {
      clearTimeout(timer);
      clearTimeout(finish);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <SplashScreen fadeOut={fadeOut} />
      ) : (
        <>
          
          <Header />
          <Heropage />
          <Footer />
        </>
      )}
    </div>
  );
}
