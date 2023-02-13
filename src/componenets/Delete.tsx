import React from "react";

export function Delete() {
  return (
    <div className="flex items-center">
      <img src="/images/icon-delete.svg" alt="" />
      <button className="text-red-600 ml-2">Delete</button>
    </div>
  );
}
