import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Main = ({darkMode}) => {
  const [state] = useState({
    title: "Hi,",
    title2: "I'm",
    title3: "Royal",
    image: "/image/portfolioImage.png"
  });

  const mainClassName = darkMode ? 'Main bg-slate-600 min-h-screen flex items-center justify-center' : 'Main bg-white min-h-screen flex items-center justify-center';
  const h2ClassName = darkMode ? 'text-white text-6xl' : 'text-black text-6xl';
  return (
    <div className={mainClassName}>
      <div className="MainL flex flex-col items-start ml-12">
        <h2 className={h2ClassName}>
          <div className="title font-serif animate-fade-in">{state.title}</div>
          <div className="title2 animate-fade-in">{state.title2}</div>
          <div className="title3 animate-fade-in text-yellow-300 font-bold mb-3">{state.title3}</div>
        </h2>
        <div className="text-3xl mb-5">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 38,
              strings: [
                "I'm a programmer.",
                "I'm a numismatist.",
                "I'm a linguist."
              ],
            }}
          ></Typewriter>
        </div>
      </div>
      <div className="image-container ml-40">
        <img src={state.image} alt="Portfolio" className="mt-6 w-4/6 h-4/5" />
      </div>
    </div>
  );
};

export default Main;
