import React from "react";
import { Avatar } from "./Avatar";
interface ISendProps {
  to?: string;
}

export function SendMessage({ to = "" }: ISendProps) {
  return (
    <div className="md:p-6 w-80  mx-auto mt-4 mb:3 p-4 md:px-2 rounded-lg bg-white shadow-md md:w-1/2 md:flex  md:justify-around items-start">
      <div className="hidden md:block">
        <Avatar avatar="./images/avatars/image-juliusomo.png" />
      </div>
      <div className="w-12/12 md:w-11/12 md:ml-4">
        <textarea
          cols={34}
          rows={3}
          className="rounded-md p-3 border border-rose-100 text-gray-500 outline-none w-11/12"
        >
          {to ? `${to}` : "Add your comment..."}
        </textarea>
      </div>
      <div className="flex justify-between mt-2 w-11/12 md:w-2/12">
        <div className="md:hidden">
          <Avatar avatar="./images/avatars/image-juliusomo.png" />
        </div>
        <button className="md:h-10 uppercase  text-white font-bold bg-blue-800 text-sm px-6 rounded-md hover:opacity-50 transition-all duration-75">
          {to ? "reply" : "send"}
        </button>
      </div>
    </div>
  );
}
