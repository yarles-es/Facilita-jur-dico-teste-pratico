import React from "react";
import style from "./style.module.css";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ onClose, children }) => {
  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={style.modalBackground} onClick={onClose}>
      <div className={style.modalContent} onClick={handleModalContentClick}>
        <button className={style.closeButton} onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

