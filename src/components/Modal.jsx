import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ children, isOpen, closeModal, buttonStyle }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const buttonCloseStyle = {
    ...buttonStyle,
    padding: ".2rem .5rem",
    top: "-4px",
    right: "0px",
  };
  return ReactDOM.createPortal(
    <article
      className={isOpen ? "modal is-open" : "modal"}
      onClick={closeModal}
    >
      <div className="modal-container" onClick={handleModalClick}>
        <button
          style={buttonCloseStyle}
          className="modal-close"
          onClick={closeModal}
        >
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById("modals")
  );
};

export default Modal;
