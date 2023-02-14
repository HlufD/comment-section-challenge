import React from "react";
import { Replies } from "./Replies";

interface IUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}
interface IRplies {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: IUser;
}

interface IReplayMessage {
  replies: IRplies[];
  user: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ReplyMessage({ replies, user, setOpen }: IReplayMessage) {
  return (
    <>
      {replies.map((singleReply) => {
        return (
          <React.Fragment key={singleReply.id}>
            <Replies singleReply={singleReply} user={user} setOpen={setOpen} />
          </React.Fragment>
        );
      })}
    </>
  );
}
