import React from "react";
import { useNavigate } from "react-router";

const OnSecondPageButton = () => {
  const navigate= useNavigate();
  const go =()=> navigate('/about')
  return (
    <div>
      <button className="submit" type="onsubmit" onClick={go} >
        {" "}
        Войти{" "}
      </button>
    </div>
  );
};

export default OnSecondPageButton;
