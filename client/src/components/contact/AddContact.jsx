import React, { useState } from "react";

const AddContact = () => {
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
    <div className="z-[999] bg-white p-2 md:p-4 min-w-[300px] md:min-w-[400px] text-gray-700">
      <div className="mb-3">
        <label htmlFor="contact_name">Full Name</label>
        <input
          type="text"
          name="contact_name"
          value={contact_name}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-primary-color"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_name">Email</label>
        <input
          type="email"
          name="contact_email"
          value={contact_email}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-primary-color"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_phone">Phone Number</label>
        <input
          type="text"
          name="contact_phone"
          value={contact_phone}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-primary-color"
        />
      </div>

      <div className="mb-3">
        <input
          type="button"
          value="ADD CONTACT"
          onClick={addNewContact}
          className="w-full p-2 outline-none bg-primary-color text-white hover:bg-primary-hover-color"
        />
      </div>
    </div>
  );
};

export default AddContact;
