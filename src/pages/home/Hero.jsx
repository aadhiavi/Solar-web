import React, { useEffect, useRef, useState } from "react";
import Image from "../../assets/day1.png";
import Image1 from "../../assets/night1.png";
import Image2 from "../../assets/solar-panel.png";

const HeroSection = () => {
  const [sunPos, setSunPos] = useState({ x: 0, y: 0 });
  const [isNight, setIsNight] = useState(false);
  const containerRef = useRef(null);

  // Duration of each phase in milliseconds
  const sunriseDuration = 4000; // 4s
  const sunsetDuration = 4000;  // 4s
  const nightDuration = 4000;   // 4s
  const totalDuration = sunriseDuration + sunsetDuration + nightDuration;

  useEffect(() => {
    let startTime;
    const radius = 600; // radius of the semi-circle path
    const centerX = 0;  // we will adjust relative to container
    const centerY = 0;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      let elapsed = (timestamp - startTime) % totalDuration;

      let angle;
      if (elapsed < sunriseDuration) {
        // Sunrise: 0° → 90°
        const t = elapsed / sunriseDuration;
        angle = t * 90;
        setIsNight(false);
      } else if (elapsed < sunriseDuration + sunsetDuration) {
        // Sunset: 90° → 180°
        const t = (elapsed - sunriseDuration) / sunsetDuration;
        angle = 90 + t * 90;
        setIsNight(false);
      } else {
        // Night
        angle = 180; // Sun hidden
        setIsNight(true);
      }

      // Convert angle to radians
      const rad = (angle * Math.PI) / 180;

      // Semi-circle math
      // Center at container bottom-center
      const container = containerRef.current;
      const cx = container ? container.offsetWidth / 2 : 400;
      const cy = container ? container.offsetHeight - 50 : 550;

      const x = cx + radius * Math.cos(rad - Math.PI); // shift by -180deg
      const y = cy + radius * Math.sin(rad - Math.PI);

      setSunPos({ x, y });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[720px] overflow-hidden bg-sky-400"
    >
      {/* Night overlay */}
      <div
        className={`absolute inset-0 bg-slate-900 transition-opacity duration-1000 ${isNight ? "opacity-100" : "opacity-0"
          }`}
      ></div>

      {/* Sun */}
      {!isNight && (
        <div
          className="absolute w-24 h-24 bg-yellow-400 rounded-full shadow-[0_0_100px_rgba(255,255,0,0.9)] z-2"
          style={{ left: sunPos.x - 48, top: sunPos.y - 48 }} // center sun
        ></div>
      )}

      {/* Ground */}
      {/* <div className="absolute bottom-0 w-full h-1/4 bg-green-800 z-20">
        <svg
          className="absolute -top-16 left-0 w-full h-24 fill-green-800"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L0,320Z" />
        </svg>
      </div> */}

      {/* Container needs relative positioning to hold the absolute images */}
      <div className="relative w-[900px] h-full">

        {/* Day Image (Default) */}
        <img
          src={Image}
          alt="day time"
          className={`absolute bottom-0 w-[900px] z-20 transition-opacity duration-1000 ease-in-out
      ${isNight ? 'opacity-0' : 'opacity-100'}
    `}
        />

        {/* Night Image (Overlay) */}
        <img
          src={Image1}
          alt="night time"
          className={`absolute bottom-0 w-[900px] z-20 transition-opacity duration-1000 ease-in-out
      ${isNight ? 'opacity-100' : 'opacity-0'}
    `}
        />

      </div>

      <div className="absolute bottom-0 right-0 z-19">
        <img src={Image2} alt="" className="h-[500px]" />
      </div>

      {/* Wind Turbines */}
      {/* <div className="absolute bottom-24 right-32 flex flex-col items-center">
        <div className="spin-slow">
          <WindTurbineSVG />
        </div>
        <div className="w-2 h-52 bg-gray-300 -mt-12"></div>
      </div> */}

      {/* ================= STREET LIGHT ================= */}
      <div className="absolute bottom-0 left-20 flex flex-col items-center z-30">

        <div className="relative z-10">
          {/* 1. THE LAMP HEAD (Metal Casing) */}
          <div className="w-16 h-8 bg-gray-800 rounded-t-full relative overflow-hidden z-20">

            {/* The Bulb (Inside the casing) */}
            <div className={`absolute bottom-0 left-0 w-full h-3 bg-yellow-200 transition-opacity duration-1000 ${isNight ? "opacity-100" : "opacity-30"
              }`}>
            </div>
          </div>

          {/* 2. THE DOWNWARD LIGHT BEAM (The Glow) */}
          {/* We place this absolute relative to the lamp head, but push it down (top-6) */}
          <div
            className={`absolute top-6 left-1/2 -translate-x-1/2 w-40 h-64 bg-gradient-to-b from-yellow-400/50 via-yellow-400/10 to-transparent blur-xl rounded-[50%] -z-10 origin-top transition-opacity duration-1000 ${isNight ? "opacity-100" : "opacity-0"
              }`}
          ></div>
        </div>

        {/* 3. THE POLE */}
        <div className="w-3 h-48 bg-gray-800"></div>
      </div>

      {/* Text */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center text-white px-4 mb-66">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Powering Tomorrow, Today
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90">
          Clean Solar & Wind Energy for a Sustainable Future
        </p>
      </div>
    </div>
  );
};

const WindTurbineSVG = () => (
  <svg width="120" height="120" viewBox="0 0 100 100" className="fill-gray-100">
    <path d="M50,50 Q60,10 50,0 Q40,10 50,50 Z" />
    <path d="M50,50 Q90,60 100,50 Q90,40 50,50 Z" />
    <path d="M50,50 Q40,90 50,100 Q60,90 50,50 Z" />
    <circle cx="50" cy="50" r="5" className="fill-gray-400" />
  </svg>
);

export default HeroSection;



