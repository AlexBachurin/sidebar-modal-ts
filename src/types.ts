import { MouseEventHandler, RefObject } from "react";

export type AppContextType = {
  showModal: boolean;
  showSidebar: boolean;
  openModal: () => void;
  closeModal: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
  modalOverlayRef: RefObject<HTMLDivElement>;
  closeModalOnOutside: MouseEventHandler<HTMLDivElement>;
};
