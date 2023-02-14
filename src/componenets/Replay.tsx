import React from "react";

interface IReplyProps {
  setRply: React.Dispatch<React.SetStateAction<boolean>>;
  reply: boolean;
}

export function Replay({ setRply, reply }: IReplyProps) {
  return (
    <div
      onClick={() => setRply(!reply)}
      className="flex justify-center items-center  text-blue-900 hover:opacity-50 transition-all duration-75 cursor-pointer"
    >
      <img src="/images/icon-reply.svg" alt="" />
      <p className="replay-text ml-2 font-bold">Reply</p>
    </div>
  );
}
