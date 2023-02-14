import React from "react";

interface IEditProps {
  edit: boolean;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Edit({ edit, setEdit }: IEditProps) {
  console.log(edit);

  return (
    <div className="flex items-center md:ml-3 hover:opacity-50 transition-all duration-75">
      <img src="/images/icon-edit.svg" alt="" />
      <button onClick={() => setEdit(true)} className="text-blue-900 ml-2 ">
        Edit
      </button>
    </div>
  );
}
