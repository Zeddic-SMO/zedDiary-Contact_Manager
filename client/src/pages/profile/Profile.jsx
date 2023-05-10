import { useContext, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { ContactProvider } from "../../context/Contact_Context";
import Spinner from "../../components/spinner/Spinner";
import axios from "axios";
import ChangePassword from "../../components/setting/ChangePassword";

const Profile = () => {
  const { user } = useContext(ContactProvider);

  return (
    <div className="flex py-10 items-center justify-center md:my-20 gap-5">
      <div className="border-[1px] p-4 shadow-sm shadow-slate-500">
        <div className="flex justify-center items-center">
          <span className="bg-primary-color rounded-full p-2 text-white flex justify-center items-center shadow-sm shadow-gray-500">
            <MdDashboardCustomize size="50px" />
          </span>
        </div>
        <div className="bg-primary-color w-[300px] md:w-[450px] border-[1px] border-primary-color p-4 md:p-8 rounded-md">
          {user ? (
            <>
              {/* Full Name */}
              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="text-lg py-1 text-white block text-right"
                >
                  Full Name
                </label>
                <span
                  id="full_name"
                  className="block p-1 border-b-[1px] border-primary-color  text-xl text-primary-color rounded-sm bg-gray-100"
                >
                  {user.name}
                </span>
              </div>

              {/* email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-lg py-1 text-white block text-right"
                >
                  Email
                </label>
                <span
                  id="email"
                  className="block p-1 border-b-[1px] border-primary-color outline-none md:text-xl text-primary-color rounded-sm bg-gray-100"
                >
                  {user.email}
                </span>
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </div>

        {user && <ChangePassword user={user} />}
      </div>
    </div>
  );
};

export default Profile;
