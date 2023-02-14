import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { Delete } from "./Delete";
import { Edit } from "./Edit";
import { Replay } from "./Replay";
import { Score } from "./Score";
import { SendReply } from "./SendReply";

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

interface IRepliesMessage {
  singleReply: IRplies;
  user: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Replies({ user, setOpen, singleReply }: IRepliesMessage) {
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  return (
    <>
      <section
        key={singleReply.id}
        className=" mb-3 w-80  mx-auto   p-4 md:px-4 rounded-lg bg-white shadow-md md:w-11/12 md:flex md:ml-4"
      >
        <div
          className="hidden md:block
              "
        >
          <Score score={singleReply.score} />
        </div>
        <main className=" md:w-11/12 px-2 md:ml-4">
          <div className="flex  items-center md:justify-between ">
            <div className="flex  items-center ">
              <Avatar avatar={singleReply.user.image.png} />
              <p className="ml-3 font-bold">{singleReply.user.username}</p>
              {user === singleReply.user.username ? (
                <span className="text-xs bg-violet-600 text-white ml-2 px-2">
                  YOU
                </span>
              ) : null}
              <p className="ml-3 text-gray-500">{singleReply.createdAt}</p>
            </div>
            <div className="hidden md:flex md:justify-around">
              {user === singleReply.user.username ? (
                <>
                  <Delete setOpen={setOpen} />
                  <Edit edit={edit} setEdit={setEdit} />
                </>
              ) : (
                <Replay setRply={setReply} reply={reply} />
              )}
            </div>
          </div>
          {edit ? (
            <div className="mt-2 flex flex-col items-end">
              <textarea
                className="w-12/12 md:w-11/12 md:ml-4 p-2 rounded-md"
                cols={34}
                rows={4}
              >
                {`@${singleReply.replyingTo} ${singleReply.content}`}
              </textarea>
              <button className="py-2 mt-3 md:h-10 uppercase  text-white font-bold bg-blue-800 text-sm px-6 rounded-md hover:opacity-50 transition-all duration-75 ">
                update
              </button>
            </div>
          ) : (
            <div>
              <p className="text-gray-500 mt-2">
                <span className="text-indigo-700 font-bold mr-1">
                  @{singleReply.replyingTo}
                </span>
                {singleReply.content}
              </p>
            </div>
          )}
        </main>
        <footer className="flex  items-center justify-between  mt-3 md:hidden">
          <Score score={singleReply.score} />
          {user === singleReply.user.username ? (
            <>
              <Delete setOpen={setOpen} />
              <Edit edit={edit} setEdit={setEdit} />
            </>
          ) : (
            <Replay reply={reply} setRply={setReply} />
          )}
        </footer>
      </section>
      {user !== singleReply.user.username && reply ? (
        <SendReply to={`@${singleReply.replyingTo}`} />
      ) : null}
    </>
  );
}
