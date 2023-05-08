import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ContactProvider = createContext();

const ContactContext = ({ children }) => {
  const [userAccess, setUserAccess] = useState(null);
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null);

  // Enable user access
  useEffect(() => {
    setUserAccess(JSON.parse(localStorage.getItem("user")));
  }, []);

  // Get user information
  useEffect(() => {
    const getUser = () => {
      userAccess &&
        axios
          .get(`/api/v1/user/${userAccess.id}`)
          .then(({ data }) => {
            console.log(data);
            setUser(data.loginUser);
          })
          .catch(({ response }) => {
            if (
              response.data.message &&
              response.data.message.includes("jwt")
            ) {
              userLogOut();
            }
          });
    };

    getUser();
  }, []);

  // Logout a user
  const userLogOut = () => {
    // remove token from localstorage
    localStorage.removeItem("user");

    // change the state
    setUserAccess(null);
  };

  // fetch all user's contacts
  useEffect(() => {
    fetchAllContacts();
  }, []);

  // fetch all function
  const fetchAllContacts = () => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user"),
      },
    };

    axios
      .get("/api/v1/contact", config)
      .then(({ data }) => {
        const allContacts = [...data.contacts];
        setContacts(allContacts);
        // console.log(data.contacts);
      })
      .catch(({ response }) => {
        if (response.data.message && response.data.message.includes("jwt")) {
          userLogOut();
        }
      });
  };

  // Fetch a single task
  const fetchSingleContact = (id) => {
    const contact =
      contacts &&
      contacts.find(({ _id }) => {
        return _id === id;
      });

    setContact(contact);
  };

  // states store
  const store = {
    userLogOut,
    userAccess,
    setUserAccess,
    openModal,
    setOpenModal,
    loading,
    setLoading,
    fetchAllContacts,
    contacts,
    fetchSingleContact,
    setContact,
    contact,
    user,
  };

  return (
    <ContactProvider.Provider value={store}>
      {children}
    </ContactProvider.Provider>
  );
};

export default ContactContext;
