import React, { useContext, useState } from "react";
import axios from "axios";
import { ContactProvider } from "../../context/Contact_Context";
import Spinner from "../spinner/Spinner";
import { toast } from "react-toastify";

const AddContact = () => {
  const { loading, setLoading, setOpenModal, userLogOut } =
    useContext(ContactProvider);
  const [error, setError] = useState(null);
  const [contact, setContact] = useState({
    contact_name: "",
    contact_email: "",
    contact_phone: "",
  });

  const contactInputHandler = (e) => {
    setError(null);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addNewContact = () => {
    if (!contact_name || !contact_email || !contact_phone) {
      setError("All fields are required");
      return;
    }
    setLoading(true);

    // Headers section
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    };

    // axios
    axios
      .post("/api/v1/contact", contact, config)
      .then(({ data }) => {
        setLoading(false);
        toast.success(data.message);
        setContact({
          contact_name: "",
          contact_email: "",
          contact_phone: "",
        });
        setOpenModal(false);
      })
      .catch(({ response }) => {
        setLoading(false);
        if (response.data.message) {
          userLogOut();
        }
      });
  };

  const { contact_name, contact_email, contact_phone } = contact;
  return (
    <div className="z-[999] bg-white p-2 md:p-4 min-w-[300px] md:min-w-[400px] text-gray-700">
      {error && (
        <div className="p-1 mb-1 text-center border-[1px] border-red-700 text-red-600">
          {error}
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="contact_name">Full Name</label>
        <input
          type="text"
          name="contact_name"
          value={contact_name}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-primary-color"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_name">Email</label>
        <input
          type="email"
          name="contact_email"
          value={contact_email}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-primary-color"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_phone">Phone Number</label>
        <input
          type="text"
          name="contact_phone"
          value={contact_phone}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-primary-color"
        />
      </div>

      <div className="mb-3">
        {!loading ? (
          <input
            type="button"
            value="ADD CONTACT"
            onClick={addNewContact}
            className="w-full p-2 outline-none bg-primary-color text-white hover:bg-primary-hover-color"
          />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default AddContact;
