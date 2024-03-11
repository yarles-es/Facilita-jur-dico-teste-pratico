import React from "react";
import style from "./style.module.css";

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ onClose, children }) => {
  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={style.modalBackground} onClick={handleBackgroundClick}>
      <div className={style.modalContent}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
