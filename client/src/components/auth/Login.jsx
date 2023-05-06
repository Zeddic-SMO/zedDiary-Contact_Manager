import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // handle input
  const loginInputHandler = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  // submit handle function
  const loginSubmitHandler = () => console.log(user);
  console.log(user);

  const { email, password } = user;

  return (
    <div className="flex justify-center items-center pt-10 md:pt-20">
      <div className="min-w-[300px] md:min-w-[400px] pt-8">
        <h1 className="text-center text-3xl mb-4">
          Account <span className="text-primary-color">Login</span>
        </h1>

        <div className="mb-2 w-full">
          <label htmlFor="email" className="py-2">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={loginInputHandler}
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
            onChange={loginInputHandler}
            value={password}
            className="w-full p-2 border-[1px] border-gray-400"
          />
        </div>
        <p className="text-red-500 text-right py-3 text-sm italic hover:underline">
          <Link to="/reset_password">Forgot password? Click to reset!</Link>
        </p>
        <div className="mb-2 w-full">
          <input
            type="button"
            value="LOGIN"
            onClick={loginSubmitHandler}
            className="w-full p-2 border-[1px] border-gray-400 bg-primary-color text-white hover:bg-primary-hover-color cursor-pointer"
          />
        </div>
        <p className="text-slate-900-500 py-3 text-sm italic hover:underline">
          <Link to="/register">
            Don't have an account? Click to register...!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
