"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Please babyy maan jaoo",
      "Tumko Xing Xing ki kasam!",
      "Maan jaa nahi to bohot maarungaa",
      "Choclate khilaungaa",
      "Taubaa Taubaa maan hi nahi rahii",
      "Babyy yarrr pleasee yarr",
      "Kitna bhavv khaogiii",
      "Theek hai main chala chulu bhar paani me ",
      "Bhoot banke bol raha hu please haan boldoo",
      "Muahh kisses dungaa",
      "Bohoot saari kisses!",
      "Aurr bhi saaari kissess",
      "Lastt baarr pooch raha huu, fir no choice",
      "No!!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/nIZyihQNicAAAAAi/cosytales-cute.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you babyy!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.tenor.com/m/eGPJXPSOB4oAAAAd/xing-xingxing.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
