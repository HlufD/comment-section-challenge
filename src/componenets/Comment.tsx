import { useState } from "react";
import { Avatar } from "./Avatar";
import { Replay } from "./Replay";
import { Score } from "./Score";
import { SendMessage } from "./SendMessage";

interface IUser {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface IsingleComment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: IRplies[];
}

interface IRplies {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  replyingTo: string;
  user: IUser;
}

interface IComment {
  comment: IsingleComment;
}

export function Comment({ comment }: IComment) {
  const [reply, setReply] = useState(false);

  return (
    <>
      <section
        className="w-80  mx-auto mt-4  p-4 md:px-2 rounded-lg bg-white shadow-md md:w-1/2 md:flex  md:justify-around"
        key={comment.id}
      >
        <div
          className="hidden md:block
        "
        >
          <Score score={comment.score} />
        </div>
        <main className=" md:w-11/12 px-2">
          <div className="flex  items-center md:justify-between ">
            <div className="flex  items-center">
              <Avatar avatar={comment.user.image.png} />
              <p className="ml-3 font-bold">{comment.user.username}</p>
              <p className="ml-3 text-gray-500">{comment.createdAt}</p>
            </div>
            <div className="hidden md:block">
              <Replay setRply={setReply} reply={reply} />
            </div>
          </div>
          <div>
            <p className="text-gray-500 mt-2">{comment.content}</p>
          </div>
        </main>
        <footer className="flex  items-center justify-between  mt-3 md:hidden">
          <Score score={comment.score} />
          <Replay setRply={setReply} reply={reply} />
        </footer>
      </section>
      {reply && <SendMessage to={`@${comment.user.username}`} />}
    </>
  );
}
