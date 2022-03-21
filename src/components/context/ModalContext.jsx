import React, { useState } from "react";

export const ModalContext = React.createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [ticketPackage, setTicketPackage] = useState("regular");
  const [buttonClicked, setButtonClicked] = useState({
    regular: true,
    vip: false,
    royalty: false,
  });

  const handleOpenModal = () => setModal(true);

  return (
    <ModalContext.Provider
      value={{
        handleOpenModal,
        ticketPackage,
        setTicketPackage,
        buttonClicked,
        setButtonClicked,
        modal,
        setModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
