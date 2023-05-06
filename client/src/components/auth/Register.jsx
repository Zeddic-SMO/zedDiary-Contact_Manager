import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    full_name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const regInputHandler = () => {};
  const regSubmitHandler = () => {};

  const { full_name, email, password, repeat_password } = user;
  return (
    <div className="flex justify-center items-center py-10">
      <div className="min-w-[300px] md:min-w-[400px] pt-8">
        <h1 className="text-center text-3xl mb-4">
          Account <span className="text-primary-color">Register</span>
        </h1>

        <div className="mb-2 w-full">
          <label htmlFor="email" className="py-2">
            Full Name:
          </label>
          <input
            type="text"
            name="full_name"
            id="full_name"
            onChange={regInputHandler}
            value={full_name}
            className="w-full p-2 border-[1px] border-gray-400"
          />
        </div>

        <div className="mb-2 w-full">
          <label htmlFor="email" className="py-2">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={regInputHandler}
            value={email}
            className="w-full p-2 border-[1px] border-gray-400"
          />
        </div>

        <div className="mb-2 w-full">
          <label htmlFor="email" className="py-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={regInputHandler}
            value={password}
            className="w-full p-2 border-[1px] border-gray-400"
          />
        </div>

        <div className="mb-2 w-full">
          <label htmlFor="email" className="py-2">
            Confirm Password:
          </label>
          <input
            type="password"
            name="repeat_password"
            id="repeat_password"
            onChange={regInputHandler}
            value={repeat_password}
            className="w-full p-2 border-[1px] border-gray-400"
          />
        </div>

        <div className="mb-4 w-full">
          <input
            type="button"
            value="SUBMIT"
            onClick={regSubmitHandler}
            className="w-full p-2 border-[1px] border-gray-400 bg-primary-color text-white hover:bg-primary-hover-color cursor-pointer"
          />
          <p className="text-slate-900-500 text-right py-3 text-sm italic hover:underline">
            <Link to="/login">Already have an account? Login instead...!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
