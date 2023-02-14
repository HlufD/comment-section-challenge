import ReactDOM from "react-dom";

interface IModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ setOpen }: IModalProps) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay"></div>
      <div className="bg-white shadow-lg w-80 mx-auto mt-5 p-5 rounded-md modal-message">
        <div>
          <h2 className="text-gray-700 font-bold text-xl z-50">
            Delete commnet
          </h2>
          <p className="text-gray-700 mt-3">
            Are you sure you want to delete this commnet? This will remove the
            comment and can't be undone.
          </p>
        </div>
        <div className="flex justify-between rounded-md items-center mt-4">
          <button
            onClick={() => setOpen(false)}
            className="uppercase py-2 px-5 rounded-md bg-slate-600 text-white"
          >
            No, cancel
          </button>
          <button className="uppercase py-2 px-5 bg-red-500 text-white rounded-md">
            yes, delete
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("popup") as HTMLElement
  );
}
