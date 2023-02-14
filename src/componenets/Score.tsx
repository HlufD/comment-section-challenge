import React from "react";

interface IScore {
  score: number;
}
export function Score(props: IScore) {
  return (
    <div className="score h-9 w-24 md:w-9 md:h-24 flex justify-around items-center rounded-md md:flex-col ">
      <div>
        <img src="/images/icon-plus.svg" alt="plus" />
      </div>
      <p className="score-text text-sm px-1 font-bold">{props.score}</p>
      <div>
        <img src="/images/icon-minus.svg" alt="minus" />
      </div>
    </div>
  );
}
