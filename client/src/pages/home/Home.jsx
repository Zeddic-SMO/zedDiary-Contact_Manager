import { AiFillFileAdd } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Modal from "../../components/modal/Modal";
import { useState } from "react";
import AddContact from "../../components/contact/AddContact";
import Contacts from "../../components/contact/Contacts";

const Home = () => {
  const [newContact, setNewContact] = useState(false);
  return (
    <div className="py-10 px-2 md:px-10">
      <div className="flex justify-between border-2">
        <div
          className="flex items-center border-[1px] p-1 cursor-pointer"
          onClick={() => setNewContact(true)}
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
      {newContact && (
        <Modal setNewContact={setNewContact}>
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
