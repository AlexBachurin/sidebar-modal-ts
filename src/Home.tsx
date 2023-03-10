import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { AppContextType } from "./types";

const Home = () => {
  const { openModal, openSidebar } = useGlobalContext() as AppContextType;
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={() => openModal()} className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
