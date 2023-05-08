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
          <li>
            Account Verification -Using Tribearc email solutions API -
            <i>
              <b>
                <a target="_blank" href="https://www.tribearc.com/">
                  Click here to visit Tribearc platform
                </a>
              </b>
            </i>
          </li>
          <li>Accout Seting - change of password</li>
        </ul>
        <div className="bg-gray-900 text-white py-2 px-4 my-2">
          <span className="text-xl">Versio 1.1.0</span> -{" "}
          <span>Features will include:</span>
        </div>
        <ul className="list-disc ml-4 md:ml-8">
          <li>
            Account Setting - User Password Reset/forgotten Password - coming
            soon...
          </li>
          <li>
            Account Update - User account info update and image handling and
            storage with Cloudinary - coming soon...
          </li>
          <li>Pagination & Sorting - coming soon...</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
