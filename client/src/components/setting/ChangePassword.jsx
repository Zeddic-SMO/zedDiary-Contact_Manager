import { useContext, useState } from "react";
import { ContactProvider } from "../../context/Contact_Context";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";

const ChangePassword = ({ user }) => {
  // console.log(user);
  const { loading, setLoading } = useContext(ContactProvider);
  const [error, setError] = useState(null);
  const [changePassword, setChangePassword] = useState({
    old_password: "",
    password: "",
    repeat_password: "",
  });

  const passwordChangeHandler = (e) => {
    setError(null);
    setChangePassword({
      ...changePassword,
      [e.target.name]: e.target.value,
    });
  };

  const passwordChangeSubmit = (id) => {
    // console.log(id);
    if (!password || !old_password || !repeat_password) {
      setError("All fields are required!");
      return;
    }
    if (password !== repeat_password) {
      setError("Passwords does not match!");
      return;
    }
    setLoading(true);
    // endpoint call
    axios
      .put(`/api/v1/user/${id}`, { ...changePassword })
      .then(({ data }) => {
        setLoading(false);

        setChangePassword({
          old_password: "",
          password: "",
          repeat_password: "",
        });
        toast.success(data.message);
      })
      .catch(({ response }) => {
        setLoading(false);

        setError(response.data.message);
      });
  };

  const { password, old_password, repeat_password } = changePassword;
  return (
    <>
      <h1 className="text-lg my-4 text-center">Change Password</h1>
      <div className="bg-primary-color min-w-[300px] md:w-[450px] border-[1px] border-primary-color p-4 md:p-8 rounded-md">
        {error && (
          <div className="p-1 mb-1 text-center border-[1px] border-red-700 text-red-600 bg-white">
            {error}
          </div>
        )}

        {/* Old Password */}
        <div className="mb-4">
          <label htmlFor="password" className="text-lg text-white block">
            Old Password
          </label>
          <input
            type="text"
            id="old_password"
            name="old_password"
            onChange={passwordChangeHandler}
            value={old_password}
            className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
          />
        </div>

        {/* New Password */}
        <div className="mb-4">
          <label htmlFor="password" className="text-lg text-white block">
            New Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={passwordChangeHandler}
            value={password}
            className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
          />
        </div>

        {/* Repeat Password */}
        <div className="mb-4">
          <label htmlFor="repeat_password" className="text-lg text-white block">
            Confirm Password
          </label>
          <input
            type="text"
            id="repeat_password"
            name="repeat_password"
            onChange={passwordChangeHandler}
            value={repeat_password}
            className="w-full p-1 border-b-[1px] border-primary-color outline-none text-xl text-primary-color rounded-sm bg-gray-100"
          />
        </div>
        <div>
          {!loading ? (
            <button
              type="submit"
              onClick={() => passwordChangeSubmit(user.id)}
              className="text-white p-2 rounded-md bg-slate-900 hover:bg-slate-700 hover:text-primary-hover-color w-full"
            >
              UPDATE
            </button>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
