import React from "react";

interface IDeletePros {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Delete({ setOpen }: IDeletePros) {
  return (
    <div className="flex items-center hover:opacity-50 transition-all duration-75">
      <img src="/images/icon-delete.svg" alt="" />
      <button className="text-red-600 ml-2 " onClick={() => setOpen(true)}>
        Delete
      </button>
    </div>
  );
}
