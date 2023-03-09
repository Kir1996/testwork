import Frame from "../../../Image/Frame.svg"
import Displaycolumns from "../../Modals/Displaycolumns"
import { useState } from "react";
import React from 'react';

const Services= () =>{
    const [displaycolumnsActive, setDisplaycolumnsActive] = useState (false)
    return (
        <div className="Services">
            <div  onClick={() => setDisplaycolumnsActive(true)}>
            <button className="servicesButton" >
            <img className="imgServicesButton" src={Frame} alt=""/>
            </button>
            </div>
            <Displaycolumns active={displaycolumnsActive} setActive={setDisplaycolumnsActive}/>
        </div>
    )
}
export default Services 