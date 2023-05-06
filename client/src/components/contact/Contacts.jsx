import { useState } from "react";
import Contact from "./Contact";
import ViewContact from "./ViewContact";

const Contacts = () => {
  const [contact, setContact] = useState(null);

  return (
    <div className="py-8 flex flex-col-reverse md:flex-row">
      <div className="w-full md:w-[55%] md:mr-[5%]">
        <h1 className="bg-gray-900 text-white font-mono text-lg py-2 border-2 text-center mb-2">
          Contacts
        </h1>
        <Contact setContact={setContact} />
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
