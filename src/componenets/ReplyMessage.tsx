import { Avatar } from "./Avatar";
import { Delete } from "./Delete";
import { Edit } from "./Edit";
import { Replay } from "./Replay";
import { Score } from "./Score";

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
}

export function ReplyMessage({ replies, user }: IReplayMessage) {
  return (
    <>
      {replies.map((reply) => {
        return (
          <section
            key={reply.id}
            className=" mb-3 w-80  mx-auto   p-4 md:px-4 rounded-lg bg-white shadow-md md:w-11/12 md:flex md:ml-4"
          >
            <div
              className="hidden md:block
              "
            >
              <Score score={reply.score} />
            </div>
            <main className=" md:w-11/12 px-2 md:ml-4">
              <div className="flex  items-center md:justify-between ">
                <div className="flex  items-center ">
                  <Avatar avatar={reply.user.image.png} />
                  <p className="ml-3 font-bold">{reply.user.username}</p>
                  <p className="ml-3 text-gray-500">{reply.createdAt}</p>
                </div>
                <div className="hidden md:flex md:justify-around">
                  {user === reply.user.username ? (
                    <>
                      <Delete />
                      <Edit />
                    </>
                  ) : (
                    <Replay />
                  )}
                </div>
              </div>
              <div>
                <p className="text-gray-500 mt-2">
                  <span className="text-indigo-700 font-bold mr-1">
                    @{reply.replyingTo}
                  </span>
                  {reply.content}
                </p>
              </div>
            </main>
            <footer className="flex  items-center justify-between  mt-3 md:hidden">
              <Score score={reply.score} />
              {user === reply.user.username ? (
                <>
                  <Delete />
                  <Edit />
                </>
              ) : (
                <Replay />
              )}
            </footer>
          </section>
        );
      })}
    </>
  );
}
