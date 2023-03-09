import React, { useState } from 'react';


const MassivAddservice = [ {
        
  id:1,
  сompositecode: <div className="AddserviceMassivnumb"><span>10.10.10.10.11</span></div>,
  businessline: <span className="AddserviceMassiv AddserviceMassivtext">Облачные услуги</span>,
  lob: <span className="AddserviceMassivnumb">10</span>,
  serviceline: <span className="AddserviceMassiv AddserviceMassivtext">Услуги DF Cloud</span>,
  srvline: <span className=" AddserviceMassivnumb">10</span>,
  services:<span className="AddserviceMassiv AddserviceMassivtext"> DF Cloud On Demand</span>,
  srv: <span className="AddserviceMassivnumb">10</span>,
  serviceelement: <span className="AddserviceMassiv AddserviceMassivtext">Вычислительные р...</span>,
  srvel: <span className="AddserviceMassivnumb">10</span>,
  rate: <span className="AddserviceMassiv AddserviceMassivtext">Low 150</span>,
  tarrif: <span className="AddserviceMassivnumb">11</span>,
  billing: <span className="AddserviceMassiv AddserviceMassivtext">ВМ vCPU</span>,
  unitbilling: <span className="AddserviceMassiv AddserviceMassivtext">ВМ vCPU</span>,
  faretype: <span className="AddserviceMassiv AddserviceMassivtext">usage based</span>,
  recalculation:<span className="AddserviceMassiv AddserviceMassivtext">да</span>,

},
];
function Ddd() {
  const [objArr, ] = useState(MassivAddservice);
  
  const results = objArr.map((obj) => {
    return <div  key={obj.id}>
        <div className='AddserviceConteiner1'>
          <p className='AddserviceText'>Составной код</p>
          {obj.сompositecode }
          </div>
          <div className='AddserviceConteiner2'>
        <p className='AddserviceText'>Линия бизнеса</p>
        <button className='AddserviceButton'>
         {obj.businessline }
         </button>
         </div>
         <div className='AddserviceConteiner3'>
         <p className='AddserviceText'>LOB</p> 
         {obj.lob}
         </div>
         <div className='AddserviceConteiner4'>
         <p className='AddserviceText'>Линейка услуг</p> 
         <button className='AddserviceButton'>
         {obj.serviceline}
         </button>
         </div>
         <div className='AddserviceConteiner5'>
         <p className='AddserviceText'>SRV.LINE</p> 
         {obj.srvline}
         </div>
         <div className='AddserviceConteiner6'>
         <p className='AddserviceText'>Услуга</p>
         <button className='AddserviceButton'>
          {obj.services}
          </button>
          </div>
          <div className='AddserviceConteiner7'>
          <p className='AddserviceText'>SRV</p> 
          {obj.srv}
          </div>
          <div className='AddserviceConteiner8'>
           <p className='AddserviceText'>Элемент услуги</p>
          <button className='AddserviceButton'>
           {obj.serviceelement}
           </button>
           </div>
           <div className='AddserviceConteiner9'>
            <p className='AddserviceText'>SRV.EL</p>
            {obj.srvel}
            </div>
            <div className='AddserviceConteiner10'>
             <p className='AddserviceText'>Тариф</p>
            <button className='AddserviceButton'>
             {obj.rate}
             </button>
             </div>
             <div className='AddserviceConteiner11'>
              <p className='AddserviceText'>Tariff</p>
              {obj.tarrif} 
              </div>
              <div className='AddserviceConteiner12'>
              <p className='AddserviceText'>Элемент тарификации</p>
              <button className='AddserviceButton'>
              {obj.billing}
              </button>
              </div>
              <div className='AddserviceConteiner13'>
              <p className='AddserviceText'>Единица тарификации</p>
              <button className='AddserviceButton'>
               {obj.unitbilling}
               </button>
               </div>
               <div className='AddserviceConteiner14'>
                <p className='AddserviceText'>Тип тарифа, ежемесячно</p>
               <button className='AddserviceButton'>
                {obj.faretype}
                </button>
                </div>
                <div className='AddserviceConteiner15'>
                <p className='AddserviceText'>Перерасчет</p>
                <button className='AddserviceButton'>
                 {obj.recalculation}
                 </button>
                 </div>
     </div>;
  });
  
  return <div>
      
     {results}
  </div>;
}

export default Ddd;
