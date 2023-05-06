import React from "react";
import { Email, Person, Phone } from "@mui/icons-material";

const Contact = ({ setContact }) => {
  return (
    <div className="flex items-center justify-between gap-2 text-primary-color border-b-2 py-3 px-1 md:px-6">
      <div>
        <span className="p-1 border-[2px] rounded-full flex justify-center items-center">
          <Person fontSize="14px" />
        </span>
        <span>John Doe</span>
      </div>

      <div className="border-x-[1px] border-primary-color px-2 md:px-6">
        <p className="mb-2 flex items-center md:gap-4 flex-col md:flex-row">
          <Phone fontSize="16px" /> <span>+234 810000000</span>
        </p>
        <p className="mb-2 flex flex-col items-center md:gap-4 md:flex-row">
          <Email fontSize="16px" /> <span>johndoe@email.com</span>
        </p>
      </div>

      <button
        type="button"
        className="px-2 md:px-4 border-[2px] rounded-md"
        onClick={() => setContact(true)}
      >
        View
      </button>
    </div>
  );
};

export default Contact;
