//import icon from "./img/icon.svg";
//import chel from "./img/chel.svg";
import Profil from "../../../../Image/Profil.svg";
import Back from "../../../Modals/Back";
import { useState } from "react";
import React from "react";
const Icon = () => {
  const [backActive, setBackActive] = useState (false)
  return (
    <div>
      <div className="icon" >
        <div onClick={() => setBackActive(true)}>
        <button className="Profil">
          <img src={Profil} alt="" />
        </button>
        </div>
      </div>
      <Back active={backActive} setActive={setBackActive}/>
    </div>
  );
};
export default Icon;

//<img className="iconca" src={icon} alt="" />
//<img className="chel" src={chel} alt="" />
