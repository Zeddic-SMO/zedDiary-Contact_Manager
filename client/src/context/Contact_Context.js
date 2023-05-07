import { createContext, useState } from "react";
export const ContactProvider = createContext();

const ContactContext = ({ children }) => {
  const [userAccess, setUserAccess] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // states store
  const store = {
    userAccess,
    setUserAccess,
    openModal,
    setOpenModal,
    loading,
    setLoading,
  };

  return (
    <ContactProvider.Provider value={store}>
      {children}
    </ContactProvider.Provider>
  );
};

export default ContactContext;
