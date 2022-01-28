import React from "react";
import "./Modal.css";

const Modal = ({ children, isOpen, closeModal, buttonStyle }) => {

  const handleModalClick = (e) => {
    if(e.target.tagName === "BUTTON"){
      e.stopPropagation()
    } else {
      return
    }
  };

  const buttonCloseStyle = {
    ...buttonStyle,
    padding: ".2rem .5rem",
    top: "-4px",
    right: "0px",
  };
  return (
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
    </article>
  );
};

export default Modal;
