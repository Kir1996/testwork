import React from "react";
import Checkbox from "../../Menu/Checkbox";
import Vectora from "../../../Image/Vectora.svg"
import Sbros from "../../../Image/Sbros.svg"
import Prim from "../../../Image/Prim.svg"
import StrelkaUp from "../../../Image/StrelkaUp.svg"
import StrelkaDun from "../../../Image/StrelkaDun.svg"
import Strelki from "../../../Image/Strelki.svg"

const Displaycolumns = ({ active, setActive }) => {
  return (
    <div  className={ active ? "modalDisplaycolumns active" : "modalDisplaycolumns" }  >
      <button className='DisplaycolumnsExit' onClick={()=>setActive(false)}>
          <img src={Vectora} alt=''/>
        </button>
        <h2 className="Displaycolumnsheader">Отображение колонок</h2>
        <div className="Displaycolumns0">
        <Checkbox/>
        <p className="Displaycolumnstext">Все</p>
        </div>
        <ol className="Displaycolumnsol">
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Составной код</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Линия бизнеса</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">LOB</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Линейка услуг</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">SRV.LINE</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Услуга</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">SRV</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Элемент услуги</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">SRV.EL</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Тариф</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">TARRIF</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Эл. тарификации</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Ед. тарификации</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Тип тарифа</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
          <li className="Displaycolumnsli">
            <Checkbox/>
            <p className="Displaycolumnstext">Перерасчет</p>
            <div className="DisplaycolumnsStrelkiConteiner">
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaUp} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={StrelkaDun} alt=""/>
              </button>
              <button className="DisplaycolumnsStrelkiButton">
                <img src={Strelki} alt=""/>
              </button>
            </div>
          </li>
        </ol>
        <button className="DisplaycolumnsSbros">
          <img src={Sbros} alt=""/>
        </button>
        <button className="DisplaycolumnsPrim">
          <img src={Prim} alt=""/>
        </button>
      </div>
    
  );
};
export default Displaycolumns;