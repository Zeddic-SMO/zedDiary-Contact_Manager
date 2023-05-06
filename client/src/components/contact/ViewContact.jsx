import { Delete } from "@mui/icons-material";
import React, { useState } from "react";

const ViewContact = () => {
  const [contact, setContact] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
  });

  const contactInputHandler = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const addNewContact = () => console.log(contact);

  const { contact_name, contact_email, contact_phone } = contact;
  return (
    <div className=" bg-primary-color p-2 md:p-4 w-full text-white">
      <div className="mb-3">
        <label htmlFor="contact_name">Full Name</label>
        <input
          type="text"
          name="contact_name"
          value={contact_name}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-gray-500 text-gray-800"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_name">Email</label>
        <input
          type="email"
          name="contact_email"
          value={contact_email}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-gray-500 text-gray-800"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_phone">Phone Number</label>
        <input
          type="text"
          name="contact_phone"
          value={contact_phone}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-gray-500 text-gray-800"
        />
      </div>

      <div className="mb-3 flex justify-between">
        <input
          type="button"
          value="UPDATE"
          onClick={addNewContact}
          className="w-[25%] p-1 outline-none bg-white text-primary-color hover:bg-slate-500 hover:text-white rounded-md cursor-pointer"
        />
        <span className="p-1 bg-white rounded-full text-red-600 cursor-pointer shadow-lg shadow-gray-600 hover:text-red-800">
          <Delete />
        </span>
      </div>
    </div>
  );
};

export default ViewContact;
