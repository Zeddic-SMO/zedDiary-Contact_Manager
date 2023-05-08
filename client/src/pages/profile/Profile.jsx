import { useContext, useState } from "react";
import { ContactProvider } from "../../context/Contact_Context";

const Profile = () => {
  const { setUserAccess } = useContext(ContactProvider);
  const [user, setUser] = useState({
    profile_pic: "",
    full_name: "samuel M. O",
    email: "abc@example.com",
    password: "",
    repeat_password: "",
  });

  const { profile_pic, full_name, email, password, repeat_password } = user;
  return (
    <div className="flex py-10 items-center justify-center md:my-20 gap-5 ">
      <div className="border-[1px] p-4 shadow-sm shadow-slate-500">
        <div className="flex justify-center items-center">
          <span className="bg-primary-color rounded-full p-[1px] flex justify-center items-center shadow-sm shadow-gray-500">
            <img
              src="https://images.pexels.com/photos/3912478/pexels-photo-3912478.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="profile"
              className="rounded-full w-[200px] h-[200px] object-fill bottom-[50px]"
            />
          </span>
        </div>
        <div className="bg-primary-color min-w-[300px] md:w-[450px] border-[1px] border-primary-color p-4 md:p-8 rounded-md">
          <div className="mb-4">
            <label
              htmlFor="full_name"
              className="text-sm text-white block text-right"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={full_name}
              className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
            />
          </div>

          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-sm text-white block text-right"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
            />
          </div>
        </div>

        <h1 className="text-lg my-4 text-center">Change Password</h1>

        <div className="bg-primary-color min-w-[300px] md:w-[450px] border-[1px] border-primary-color p-4 md:p-8 rounded-md">
          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="text-sm text-white block">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
            />
          </div>

          {/* Repeat Password */}
          <div className="mb-4">
            <label
              htmlFor="repeat_password"
              className="text-sm text-white block"
            >
              Confirm Password
            </label>
            <input
              type="text"
              id="repeat_password"
              name="repeat_password"
              value={repeat_password}
              className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
            />
          </div>
          <div>
            <button
              type="submit"
              className="text-white p-2 rounded-md bg-slate-900 hover:bg-slate-700 hover:text-primary-hover-color w-full"
            >
              UPDATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
