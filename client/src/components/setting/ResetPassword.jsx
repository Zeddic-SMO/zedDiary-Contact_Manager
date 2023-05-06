import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const resetSubmitHandler = () => console.log(email);

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <p className="font-bold text-center">
        Kindly input the email address linked to your account!
      </p>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border-[1px] border-gray-500 min-w-[300px] md:min-w-[400px] my-4 rounded-md"
      />
      <button
        className="bg-primary-color px-4 py-2 hover:bg-primary-hover-color text-white rounded-md"
        onClick={resetSubmitHandler}
      >
        Submit
      </button>
    </div>
  );
};

export default ResetPassword;
