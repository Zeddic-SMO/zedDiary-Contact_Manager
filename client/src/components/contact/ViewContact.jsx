import { MdDeleteForever } from "react-icons/md";
import React, { useState } from "react";
import { useContext } from "react";
import { ContactProvider } from "../../context/Contact_Context";
import axios from "axios";
import { toast } from "react-toastify";
import Spinner from "../spinner/Spinner";

const ViewContact = () => {
  // from context api
  const {
    userAccess,
    contact,
    userLogOut,
    loading,
    setLoading,
    fetchAllContacts,
    setContact,
  } = useContext(ContactProvider);

  const [error, setError] = useState(null);

  const [updateContact, setUpdateContact] = useState({
    contact_name: contact.contact_name,
    contact_email: contact.contact_email,
    contact_phone: contact.contact_phone,
  });

  // Onchange input handler
  const contactInputHandler = (e) =>
    setUpdateContact({ ...contact, [e.target.name]: e.target.value });

  // submit update function
  const updateContactHandler = (id) => {
    if (!contact_name || !contact_email || !contact_phone) {
      setError("All fields are required");
      return;
    }
    setLoading(true);
    const config = {
      headers: {
        Authorization: "Bearer " + userAccess.access_token,
      },
    };

    axios
      .put(`/api/v1/contact/${id}`, updateContact, config)
      .then(({ data }) => {
        // console.log(data);
        toast.success(data.message);
        setLoading(false);
        fetchAllContacts();
      })
      .catch(({ response }) => {
        if (response.data.message && response.data.message.includes("jwt")) {
          userLogOut();
        }
        setLoading(false);
      });
  };

  // Delete handler
  const deleteContact = (id) => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: "Bearer " + userAccess.access_token,
      },
    };
    userAccess &&
      axios
        .delete(`/api/v1/contact/${id}`, config)
        .then(({ data }) => {
          toast.success(data.message);
          fetchAllContacts();
          setContact(false);
          setLoading(false);
        })
        .catch(({ response }) => {
          toast.warning(response.data.message);
          if (response.data.message && response.data.message.includes("jwt")) {
            userLogOut();
          }
        });
  };

  const { contact_name, contact_email, contact_phone } = updateContact;
  return (
    <div className=" bg-primary-color p-2 md:p-4 w-full text-white">
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
          className="w-full p-2 outline-none border-b-[1px] border-gray-500 text-gray-800"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_name">Email</label>
        <input
          type="email"
          name="contact_email"
          value={contact_email}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-gray-500 text-gray-800"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contact_phone">Phone Number</label>
        <input
          type="text"
          name="contact_phone"
          value={contact_phone}
          onChange={contactInputHandler}
          className="w-full p-2 outline-none border-b-[1px] border-gray-500 text-gray-800"
        />
      </div>

      <div className="mb-3 flex justify-between">
        {!loading ? (
          <>
            <input
              type="button"
              value="UPDATE"
              onClick={() => updateContactHandler(contact._id)}
              className="w-[25%] p-1 outline-none bg-white text-primary-color hover:bg-slate-500 hover:text-white rounded-md cursor-pointer"
            />

            <span
              className="p-2 bg-white rounded-full text-red-600 cursor-pointer shadow-lg shadow-gray-600 hover:text-red-800"
              onClick={() => deleteContact(contact._id)}
            >
              <MdDeleteForever size="22px" />
            </span>
          </>
        ) : (
          <div className="pl-[40%]">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewContact;
