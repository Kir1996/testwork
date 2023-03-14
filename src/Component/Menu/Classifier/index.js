import React, { useState } from "react";
import Tabless from '../../Menu/Objects21';
import {Linkmenu} from '../../Mainmenu/Linkmenu';
import {Massiv} from '../../Menu/Objects1';


const Classifier = () => {
  const [tableData, setTableData] = useState(Massiv);
  const [columns, setColumns] = useState(Linkmenu);

  return (
    <>
      <Tabless columns={columns} tableData={Massiv} />
    </>
  );
};

export default Classifier;
