import Ddd from './DAD';
import React from 'react';
import Vectora from "../../../Image/Vectora.svg"
import Arhiv from "../../../Image/Arhiv.svg"
import Delit from "../../../Image/Delit.svg"
import Save from "../../../Image/Save.svg"

const Addservice = ({ active, setActive }) => {

        return (
    <div  className={ active ? "modalAddservice active" : "modalAddservice" }  >
      <div className="modalcontentAddservice">
        <button className='AddserviceExit' onClick={()=>setActive(false)}>
          <img src={Vectora} alt=''/>
        </button>
        <h2 className="Addservicehead">Добавить услугу</h2> 
        <Ddd/>
        <button className='Addservice Arhiv'>
          <img src={Arhiv} alt='' />
        </button>
        <button className='Addservice Delit'>
          <img src={Delit} alt='' />
        </button>
        <button className='Addservice Save'>
          <img src={Save} alt=''/>
        </button>
      </div>
    </div>
  )}
    
     
      
  

export default Addservice;
