import React from "react";
import { useNavigate } from "react-router";


const BackButton = () => {
  const navigate= useNavigate();
  const goback =()=> navigate('/')
  return (
    <div className="backButtonConteiner">
      {" "}
      <button
        className="backButton"
        type="submit"
        onClick={goback}
      >
        {" "}
        Выйти{" "}
      </button>
      <button className="backButton" type="submit">
        Профиль
      </button>{" "}
    </div>
  );
};

export default BackButton;
