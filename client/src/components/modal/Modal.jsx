import { SlClose } from "react-icons/sl";
import React from "react";

const Modal = ({ children, setNewContact }) => {
  return (
    <div className="bg-slate-700 bg-opacity-75 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <span
        className="absolute top-4 md:top-20 right-4 md:right-20 bg-red-500 text-white rounded-full p-1 md:p-2 shadow-md shadow-gray-950"
        onClick={() => setNewContact(false)}
      >
        <SlClose />
      </span>
      {children}
    </div>
  );
};

export default Modal;
