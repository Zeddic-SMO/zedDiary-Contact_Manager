import React from "react";

const About = () => {
  return (
    <div className="p-4 md:p-10">
      <div>
        <h1 className="text-3xl font-mono text-primary-color">
          About ZedDiary
        </h1>
        <p className="mt-4 mb-2">This is a fullstack MERN Stack project.</p>
        <div className="bg-gray-900 text-white py-2 px-4 my-2">
          <span className="text-xl">Versio 1.0.0</span> -{" "}
          <span>Features of the APP include:</span>
        </div>
        <ul className="list-disc ml-4 md:ml-8">
          <li>Validation - Data validation with JOI</li>
          <li>
            Authentication & Authorization - User authentication and
            Authorization with Json Web Token (JWT)
          </li>
          <li>Account Verification -</li>
          <li>
            Account Setting - User account password reset and change of password
            with email
          </li>
          <li>
            Account Update - User account info update and image handling and
            storage with Cloudinary
          </li>
          <li>Pagination & Sorting -</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
