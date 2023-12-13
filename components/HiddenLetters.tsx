"use client";

import tasks from "@/tasks";
import React, { useEffect, useState } from "react";
import { Gamer, Letter, LetterInput } from ".";
import Image from "next/image";
import Yakubovich from "../public/yakubovich.jpg";

const HiddenLetters = () => {
  const [letter, setLetter] = useState<string>("");
  const [guessed, setGuessed] = useState<string[]>([]);
  const [secondGamer, setsecondGamer] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const answer = tasks[index].answer.split("");
  const guessedLetter = answer.find((item) => item === letter);

  const uniqueLettersInAnswer = [...new Set(answer)];

  const wordGuessed = guessed.length === uniqueLettersInAnswer.length;

  const handleNextQuestion = () => {
    setLetter("");
    setGuessed([]);
    setIndex((prev) => (prev += 1));
    if (index === tasks.length - 1) setIndex(0);
  };

  const toggleGamer = () => {
    setsecondGamer(!secondGamer);
  };

  if (letter !== "" && !guessedLetter) {
    setLetter("");
    alert("Не угадал! Переход хода");
    toggleGamer();
  }

  useEffect(() => {
    if (guessedLetter && !guessed.includes(guessedLetter)) {
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
      {wordGuessed && (
        <div className="flex justify-center">
          <div className="mr-12">
            <Image src={Yakubovich} width={259} height={194} alt="leader" />
          </div>
          <div>
            <button
              type="button"
              onClick={handleNextQuestion}
              className="p-3 bg-blue-700 text-white rounded-2xl"
            >
              Следующий
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HiddenLetters;
