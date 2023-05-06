import React from "react";

const Footer = () => {
  return (
    <div className="mt-auto bg-primary-color text-white h-[50px] flex justify-center items-center md:px-14 text-[14px] md:text-[16px]">
      <h1>&copy; {new Date().getFullYear()} - Zeddic || Contact Manager</h1>
    </div>
  );
};

export default Footer;
