//import Checkbox from "../Checkbox";
import Edit from "../Edit";
import Checkbox from "../Checkbox"
import React, { useState } from 'react';
const Massiv = [
    {
        
        id:1,
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/><span>10.10.10.10.11</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services:<span className="Object6"> DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">11</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation:<span className="Object15">да</span>,

    },
    {
        id:2,
       
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/><Edit/><span>10.10.10.10.21</span></div>,
        businessline:<span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">21</span>,
        billing: <span className="Object12">ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation: <span className="Object15"></span>,

    },
    {
        id:3,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/><Edit/> <span>10.10.10.10.31</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline:<span className="Object5"> 10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">31</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:4,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/><Edit/> <span>10.10.10.10.12</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4"> Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Medium 300</span>,
        tarrif: <span className="Object11">12</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype:<span className="Object14"> usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:5,
       
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/><span>10.10.10.10.22</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv:<span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Medium 300</span>,
        tarrif: <span className="Object11">22</span>,
        billing:<span className="Object12"> ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation:<span className="Object15"> </span>,

    },
    {
        id:6,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span> 10.10.10.10.32</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Medium 300</span>,
        tarrif: <span className="Object11">32</span>,
        billing:<span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:7,
        
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.13</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">High 600</span>,
        tarrif: <span className="Object11">13</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:8,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span> 10.10.10.10.23</span></div>,
        businessline:<span className="Object2"> Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4"> Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">High 600</span>,
        tarrif: <span className="Object11">23</span>,
        billing: <span className="Object12">ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation: <span className="Object15"></span>,

    },
    {
        id:9,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span> 10.10.10.10.33</span></div>,
        businessline:<span className="Object2"> Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4"> Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv:<span className="Object7"> 10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">High 600</span>,
        tarrif:<span className="Object11"> 33</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling:<span className="Object13"> 1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:10,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.11</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services:<span className="Object6"> DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">11</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation:<span className="Object15">да</span>,

    },
    {
        id:11,
       
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.21</span></div>,
        businessline:<span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">21</span>,
        billing: <span className="Object12">ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation: <span className="Object15"></span>,


    },
    {
        id:12,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/>  <Edit/> <span>10.10.10.10.31</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline:<span className="Object5"> 10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">31</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:13,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.12</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4"> Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Medium 300</span>,
        tarrif: <span className="Object11">12</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype:<span className="Object14"> usage based</span>,
        recalculation: <span className="Object15">да</span>,
    },
    {
        id:14,
       
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.22</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv:<span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Medium 300</span>,
        tarrif: <span className="Object11">22</span>,
        billing:<span className="Object12"> ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation:<span className="Object15"> </span>,

    },
    {
        id:15,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span> 10.10.10.10.32</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Medium 300</span>,
        tarrif: <span className="Object11">32</span>,
        billing:<span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:16,
        
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/>  <span>10.10.10.10.13</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">High 600</span>,
        tarrif: <span className="Object11">13</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:17,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/><span> 10.10.10.10.23</span></div>,
        businessline:<span className="Object2"> Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4"> Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">High 600</span>,
        tarrif: <span className="Object11">23</span>,
        billing: <span className="Object12">ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation: <span className="Object15"></span>,

    },
    {
        id:18,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span> 10.10.10.10.33</span></div>,
        businessline:<span className="Object2"> Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline:<span className="Object4"> Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv:<span className="Object7"> 10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">High 600</span>,
        tarrif:<span className="Object11"> 33</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling:<span className="Object13"> 1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },
    {
        id:19,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.11</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services:<span className="Object6"> DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">11</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">ВМ vCPU</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation:<span className="Object15">да</span>,

    },
    {
        id:20,
        
        сompositecode:  <div className="conteinerOject1 Object1">  <Checkbox/> <Edit/> <span>10.10.10.10.21</span></div>,
        businessline:<span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline: <span className="Object5">10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement: <span className="Object8">Вычислительные р...</span>,
        srvel: <span className="Object9">10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">21</span>,
        billing: <span className="Object12">ВМ vRAM</span>,
        unitbilling: <span className="Object13">1 vRAM GB*час</span>,
        faretype: <span className="Object14">flat rate</span>,
        recalculation: <span className="Object15"></span>,

    },
    {
        id:21,
        
        сompositecode: <div className="conteinerOject1 Object1">  <Checkbox/>  <Edit/> <span>10.10.10.10.31</span></div>,
        businessline: <span className="Object2">Облачные услуги</span>,
        lob: <span className="Object3">10</span>,
        serviceline: <span className="Object4">Услуги DF Cloud</span>,
        srvline:<span className="Object5"> 10</span>,
        services: <span className="Object6">DF Cloud On Demand</span>,
        srv: <span className="Object7">10</span>,
        serviceelement:<span className="Object8"> Минимальный счет...</span>,
        srvel:<span className="Object9"> 10</span>,
        rate: <span className="Object10">Low 150</span>,
        tarrif: <span className="Object11">31</span>,
        billing: <span className="Object12">ВМ vCPU</span>,
        unitbilling: <span className="Object13">1 Пул ресурсов</span>,
        faretype: <span className="Object14">usage based</span>,
        recalculation: <span className="Object15">да</span>,

    },

    

    
];

function Table() {
    const [objArr, setValue] = useState(Massiv);
    
    const result = objArr.map((obj) => {
       return <div className="massiv" key={obj.id}>
          {obj.сompositecode } {obj.businessline } {obj.lob} {obj.serviceline} {obj.srvline} {obj.services} {obj.srv} {obj.serviceelement} {obj.srvel} {obj.rate} {obj.tarrif} {obj.billing} {obj.unitbilling} {obj.faretype} {obj.recalculation}
       </div>;
    });
    
    return <div>
        
       {result}
    </div>;
 }
 
 export default Table;


/*const Object1 = () => {
  return (
    <div>
      <ul className="Object">
        <li className="Object1" >
          <div className="conteinerOject1">
            <input type="checkbox" />
          <Edit />
          <p>10.10.10.10.11</p>
          </div>
        </li>
        <li className="Object2" >
            <p className="Object2Text">Облачные услуги</p>
        </li>
        <li className="Object3" >
            <p className="Object3Text">10</p>
        </li>
        <li className="Object4" >
            <p className="Object4Text">Услуги DF Cloud</p>
        </li>
        <li className="Object5" >
            <p className="Object5Text">10</p>
        </li>
        <li className="Object6" >
            <p className="Object6Text" >DF Cloud On Demand</p>
        </li>
        <li className="Object7" >
            <p className="Object7Text">10</p>
        </li>
        <li className="Object8" >
            <p className="Object8Text">Вычислительные р...</p>
        </li>
        <li className="Object9" >
            <p className="Object9Text">10</p>
        </li>
        <li className="Object10" >
            <p className="Object10Text">Low 150</p>
        </li>
        <li className="Object11" >
            <p className="Object11Text">11</p>
        </li>
        <li className="Object12" >
            <p className="Object12Text">ВМ vCPU</p>
        </li>
        <li className="Object13" >
            <p className="Object13Text">ВМ vCPU</p>
        </li>
        <li className="Object14" >
            <p className="Object14Text">usage based</p>
        </li>
        <li className="Object15" >
            <p className="Object15Text">да</p>
        </li>
      </ul>
    </div>
  );
};
export default Object1;*/
