import React from "react";

interface IAvater {
  avatar: string;
}

export function Avatar(props: IAvater) {
  const { avatar } = props;
  console.log(avatar);
  return (
    <div>
      <img className="w-10 h-10" src={avatar} alt="" />
    </div>
  );
}
