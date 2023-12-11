"use client";

import React from "react";

const Letter = ({ letter, guessed }: { letter: string; guessed: string[] }) => {
  return (
    <li className="mr-6 last:mr-0 ">
      {guessed.includes(letter) ? (
        <div className="w-14 h-20 bg-white outline outline-1 outline-black p-3 flex items-center">
          <p className="text-6xl">{letter}</p>
        </div>
      ) : (
        <div className="w-14 h-20 bg-black"></div>
      )}
    </li>
  );
};

export default Letter;
