import React from "react";


const Tabless = ({ tableData = [], columns = [] }) => {
  return (
    <table className="table">
      <thead className="thead">
        <row className="row">
          {columns?.map((col) => {
            return (
              <>{col?.show ? <th className="Linkmenu"key={col?.id}>{col?.title}</th>  : null}</>
            );
          })}
        </row>
        
      </thead>
      <tbody>
         {tableData.map((row) => {
          return (
            <div>
          <td className="td" key={row.id}>{row.сompositecode} {row.businessline } {row.lob} {row.serviceline} {row.srvline} {row.services} {row.srv} {row.serviceelement} {row.srvel} {row.rate} {row.tarrif} {row.billing} {row.unitbilling} {row.faretype} {row.recalculation}</td>
          </div>
          )
         })} 
         
      </tbody>
    </table>
  );
};

export default Tabless;