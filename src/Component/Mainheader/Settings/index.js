import React from 'react';
import { useState } from "react";
import Addservice from "../../Modals/Addservice";

const Settings = () => {
  const [addserviceActive, setAddserviceActive] = useState (false)
  return (
    <div className="settingsConteiner" >
      <div onClick={() => setAddserviceActive(true)}>
        <button className="settingsButtom"   >
          <p className="settingsText">+ Добавить услугу</p>
        </button>
      </div>
      <Addservice active={addserviceActive} setActive={setAddserviceActive} />
    </div>
  );
};
export default Settings;
