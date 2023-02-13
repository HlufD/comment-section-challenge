import React from "react";

export class Replay extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center  text-blue-900">
        <img src="/images/icon-reply.svg" alt="" />
        <p className="replay-text ml-2 font-bold">Reply</p>
      </div>
    );
  }
}
