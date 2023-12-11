import React from "react";

const Gamer = ({ secondGamer }: { secondGamer: boolean }) => {
  return (
    <div>
      {secondGamer ? (
        <div className="flex justify-end px-6">
          <p className="text-3xl">Второй игрок</p>
        </div>
      ) : (
        <div className="px-6">
          <p className="text-3xl">Первый игрок</p>
        </div>
      )}
    </div>
  );
};

export default Gamer;
