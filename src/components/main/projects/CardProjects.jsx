import React from "react";
import { useModal } from "../../../hooks/useModal";
import Button from "../../Button";
import Modal from "../../Modal";
import "./CardProjects.css";
import NewWindow from "../../../img/new-w.svg";

const CardProjects = ({
  image,
  title,
  description,
  descriptionModal,
  tags,
  linkGit,
  linkDemo,
}) => {
  let { isOpen, openModal, closeModal } = useModal(false);

  const buttonStyle = {
    fontFamily: "inherit",
    backgroundColor: "#39b175",
    color: "#fff",
    borderRadius: "5px",
    padding: ".5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: ".9rem",
    margin: "1rem",
    cursor: "pointer",
  };

  return (
    <>
      <section className="card-projects">
        <div className="card-container">
          <img src={image} alt={title} />
          <div>
            <h4 style={{margin: ".5rem 0"}}>
              <span >{title}</span>
            </h4>
            <p>{description}</p>
            <button style={buttonStyle} onClick={openModal}>
              + INFO
            </button>
          </div>
        </div>

        {/*  */}
      </section>
      <Modal
        closeModal={closeModal}
        isOpen={isOpen}
        tags={tags}
        buttonStyle={buttonStyle}
      >
        <h3 className="modal-title">{title}</h3>
        <img src={image} alt={title} className="modal-img" />
        <p className="modal-description">{descriptionModal}</p>
        <div className="tag-container">
          {tags.map((tag, index) => {
            return <Button text={tag} key={index} />;
          })}
        </div>
        <div>
          <a href={linkDemo} target="_blank" rel="noreferrer">
            <button style={buttonStyle}>
              DEMO{" "}
              <i className="modal-icon">
                <img src={NewWindow} alt="new window icon" />
              </i>
            </button>
          </a>

          <a href={linkGit} target="_blank" rel="noreferrer">
            <button style={buttonStyle}>
              GitHub{" "}
              <i className="modal-icon">
                <img src={NewWindow} alt="new window icon" />
              </i>
            </button>
          </a>
        </div>
      </Modal>
    </>
  );
};

export default CardProjects;
