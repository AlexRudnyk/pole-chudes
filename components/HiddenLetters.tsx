"use client";

import tasks from "@/tasks";
import React, { useEffect, useState } from "react";
import { Gamer, Letter, LetterInput } from ".";

const HiddenLetters = ({ index }: { index: number }) => {
  const [letter, setLetter] = useState<string>("");
  const [guessed, setGuessed] = useState<string[]>([]);
  const [secondGamer, setsecondGamer] = useState<boolean>(false);

  const answer = tasks[index].answer.split("");

  const guessedLetter = answer.find((item) => item === letter);

  const toggleGamer = () => {
    setsecondGamer(!secondGamer);
  };

  if (letter !== "" && !guessedLetter) {
    setLetter("");
    alert("Не угадал! Переход хода");
    toggleGamer();
  }

  useEffect(() => {
    if (guessedLetter) {
      setGuessed([...guessed, guessedLetter]);
    }
  }, [guessedLetter]);

  const handleletterSubmit = (letter: string) => {
    setLetter(letter.toLowerCase());
  };

  return (
    <>
      <h1 className="text-3xl mb-12">Вопрос: {tasks[index].question}</h1>
      <LetterInput onSubmit={handleletterSubmit} />
      <ul className="flex justify-center items-center mb-16">
        {answer.map((letter: string, index) => (
          <Letter letter={letter} guessed={guessed} key={index} />
        ))}
      </ul>
      <Gamer secondGamer={secondGamer} />
    </>
  );
};

export default HiddenLetters;
