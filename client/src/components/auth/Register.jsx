import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import Modal from "../modal/Modal";
import { ContactProvider } from "../../context/Contact_Context";

const Register = () => {
  const { loading, setLoading } = useContext(ContactProvider);
  const [error, setError] = useState(null);
  const [msg, setMsg] = useState(null);

  const [user, setUser] = useState({
    full_name: "",
    email: "",
    password: "",
    repeat_password: "",
  });
  const navigate = useNavigate();

  const regInputHandler = (e) => {
    setError(null);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const regSubmitHandler = () => {
    // validate data
    if (!full_name || !email || !password || !repeat_password) {
      setError("All fields are required");
      return;
    }
    if (password !== repeat_password) {
      setError("Confirm password does not match password field");
    }
    // activate loader
    setLoading(true);

    // send input to the backend
    axios
      .post("/api/v1/signup", user)
      .then(({ data }) => {
        setLoading(false);
        toast.success(data.message);
        setMsg(
          "Registration Successfull. Kindly check you email to verify your account"
        );
        setUser({
          full_name: "",
          email: "",
          password: "",
          repeat_password: "",
        });

        navigate("/login");
      })
      .catch(({ response }) => {
        setError(response.data.message);
        setLoading(false);
      });
  };

  const { full_name, email, password, repeat_password } = user;
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-[300px] md:w-[400px] pt-8">
        {msg && (
          <Modal>
            <p className="bg-white text-center font-mono font-semibold shadow-md border-2 py-2">
              {msg}
            </p>
          </Modal>
        )}
        <h1 className="text-center text-3xl mb-4">
          Account <span className="text-primary-color">Register</span>
        </h1>
        {error && (
          <div className="p-1 mb-1 text-center border-[1px] border-red-700 text-red-600">
            {error}
          </div>
        )}
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

        <div className="my-4 w-full">
          {!loading ? (
            <input
              type="button"
              value="SUBMIT"
              onClick={regSubmitHandler}
              className="w-full p-2 border-[1px] border-gray-400 bg-primary-color text-white hover:bg-primary-hover-color cursor-pointer"
            />
          ) : (
            <Spinner />
          )}
          <p className="text-slate-900-500 text-right py-3 text-sm italic hover:underline">
            <Link to="/login">Already have an account? Login instead...!</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
