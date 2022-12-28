import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import { AppContextType } from "./types";
const Modal = () => {
  const { showModal, closeModal, modalOverlayRef, closeModalOnOutside } =
    useGlobalContext() as AppContextType;

  return (
    <div
      ref={modalOverlayRef}
      className={`modal-overlay ${showModal ? "show-modal" : null}`}
      onClick={(e) => closeModalOnOutside(e)}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={() => closeModal()} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
