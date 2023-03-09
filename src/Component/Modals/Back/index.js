import React from "react";
import BackButton from "../../Header/User/BackButton";

const Back = ({ active, setActive }) => {
  return (
    <div  className={ active ? "modalBack active" : "modalBack" }  onClick={()=>setActive(false)}>
      <div className="modalcontentBack">
        <BackButton/>
      </div>
    </div>
  );
};
export default Back;