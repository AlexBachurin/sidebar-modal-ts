import React, { useState, useContext, useRef } from "react";
import { AppContextType } from "./types";

const AppContext = React.createContext<AppContextType | null>(null);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  // ref for close modal on outside
  const modalOverlayRef = useRef<HTMLDivElement>(null);
  // MODAL
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  // close modal on outsdie click
  const closeModalOnOutside: React.MouseEventHandler<HTMLDivElement> = (e) => {
    //only invoke state change if we clicking on outside of modal content and
    //showModal in true state
    if (e.target === modalOverlayRef.current && showModal) {
      setShowModal(false);
    }
  };

  // SIDEBAR
  const openSidebar = () => {
    setShowSidebar(true);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <AppContext.Provider
      value={{
        openModal,
        showModal,
        closeModal,
        showSidebar,
        openSidebar,
        closeSidebar,
        modalOverlayRef,
        closeModalOnOutside,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
