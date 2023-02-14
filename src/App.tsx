import "./App.css";
import data from "../data.json";
import React from "react";
import { Comment } from "./componenets/Comment";
import { ReplyMessage } from "./componenets/ReplyMessage";
import { SendMessage } from "./componenets/SendMessage";
import { Modal } from "./componenets/Modal";
import { useState } from "react";

function App() {
  const { currentUser } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="App w-full h-full py-6">
      {data.comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <Comment comment={comment} />
            {comment.replies?.length !== 0 ? (
              <div className="md:pl-12">
                <div className="reply  mt-4 md:ml-80  md:border-l border-gray-300  md:w-1/2 mx-auto md:flex md:flex-col md:justify-center">
                  <ReplyMessage
                    setOpen={setOpen}
                    replies={comment.replies}
                    user={currentUser.username}
                  />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
      <SendMessage />
      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}

export default App;
