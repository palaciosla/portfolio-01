import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import "./Or.css";

const Or = () => {
  const { texts } = useContext(LanguageContext);
  return (
    <div className="or">
      <hr className="or-left"></hr>
      <h3>{texts.main.contactOr}</h3>
      <hr className="or-right"></hr>
    </div>
  );
};

export default Or;
