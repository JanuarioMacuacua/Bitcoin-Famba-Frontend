interface SplashScreenProps {
  fadeOut: boolean;
}

export default function SplashScreen({ fadeOut }: SplashScreenProps) {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 transition-opacity duration-300 
        ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-4xl font-bold animate-pulse">Logo</div>
      <div className="mt-4 w-10 h-10 border-4 border-t-transparent border-white  animate-bounce"></div>
    </div>
  );
}
