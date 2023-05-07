import { AiFillFileAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { useContext, useEffect, useState } from "react";
import AddContact from "../../components/contact/AddContact";
import Contacts from "../../components/contact/Contacts";
import axios from "axios";
import API_BASE_URL from "../../config";
import { ContactProvider } from "../../context/Contact_Context";

const Home = () => {
  const { openModal, setOpenModal } = useContext(ContactProvider);
  useEffect(() => {
    testAPI();
  }, []);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authentication:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTZmYzhjNjQ0MmE0YmJlNzcxMGI2ZiIsImlzVmVyaWZpZWQiOmZhbHNlLCJpYXQiOjE2ODM0MjIzNjgsImV4cCI6MTY4MzQ1ODM2OH0.HT4v6x5439oFwXNsY9Bhm-uWBpaCwUHnx1cIc_ZybVg",
    },
  };

  const testAPI = () => {
    axios
      .get(`/api/v1/contact`, config)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div className="py-10 px-2 md:px-10">
      <div className="flex justify-between border-2">
        <div
          className="flex items-center border-[1px] p-1 cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          <span>
            <AiFillFileAdd />
          </span>
          <span>Add </span>
        </div>

        <div>
          <Link to="/profile">
            <div className="flex items-center border-[1px] p-1">
              <span>
                <CgProfile />
              </span>
              <span>My Profile </span>
            </div>
          </Link>
        </div>
      </div>
      {openModal && (
        <Modal>
          <AddContact />
        </Modal>
      )}
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
