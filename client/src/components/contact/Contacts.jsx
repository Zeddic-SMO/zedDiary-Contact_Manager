import { useState } from "react";
import Contact from "./Contact";
import ViewContact from "./ViewContact";
import axios from "axios";
import { useContext } from "react";
import { ContactProvider } from "../../context/Contact_Context";

const Contacts = () => {
  const { openModal, contacts, contact } = useContext(ContactProvider);

  return (
    <div className="py-8 flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-[55%] md:mr-[5%]">
        <h1 className="bg-gray-900 text-white font-mono text-lg py-2 border-2 text-center mb-2">
          Contacts
        </h1>
        {contacts.length > 0 &&
          contacts.map((contact) => {
            return <Contact contact={contact} key={contact._id} />;
          })}
      </div>
      <div className="w-full md:w-[40%]">
        <h1 className="bg-gray-900 text-white border-2 text-center font-mono text-lg py-2 mb-2">
          Contact Details
        </h1>
        {contact && <ViewContact contact={contact} />}
      </div>
    </div>
  );
};

export default Contacts;
