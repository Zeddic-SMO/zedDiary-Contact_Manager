import React, { useContext } from "react";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ContactProvider } from "../../context/Contact_Context";

const Contact = ({ contact }) => {
  const { fetchSingleContact } = useContext(ContactProvider);
  const { _id, contact_email, contact_phone, contact_name } = contact;
  return (
    <div className="flex items-center gap-2 text-primary-color border-b-2 py-3 px-1 md:px-6">
      <div className="w-1/4">
        <span className="p-1 border-[2px] rounded-full flex justify-center items-center">
          <BsFillPersonFill />
        </span>
        <span className="flex justify-center p-1">{contact_name}</span>
      </div>

      <div className="w-2/4 border-x-[1px] border-primary-color px-2">
        <p className="mb-2 flex items-center md:gap-4 flex-col md:flex-row">
          <BsTelephoneFill /> <span>+234 {contact_phone}</span>
        </p>
        <p className="mb-2 flex flex-col items-center md:gap-4 md:flex-row">
          <HiOutlineMail /> <span>{contact_email}</span>
        </p>
      </div>

      <div className="w-1/4">
        <button
          type="button"
          className="px-2 md:px-4 border-[2px] rounded-md"
          onClick={() => fetchSingleContact(_id)}
        >
          View
        </button>
      </div>
    </div>
  );
};

export default Contact;
