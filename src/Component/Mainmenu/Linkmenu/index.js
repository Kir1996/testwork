import Checkbocks from "../Checkbocks";
import Imagemenu from "../Imagemenu";
import Service from "../Service";

const Linkmenu = () => {
  return (
    <div>
      <ul className="Linkmenu">
        <li>
          <Checkbocks />
        </li>
        <li  >
          <button className="backButton linkmenu linkmenu1">
            <p>Составной код</p>
            <Imagemenu />
          </button>
        </li>
        <li  >
          <button className="backButton linkmenu linkmenu2">
            <p>Линия бизнеса</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu3">
            <p>LOB</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu4">
            <p>Линейка услуг</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu5">
            <p>SRV.LINE</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <Service />
        </li>
        <li>
          <button className="backButton linkmenu linkmenu7">
            <p>SRV</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu8">
            <p>Элемент услуги</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu9">
            <p> SRV.EL</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu10">
            <p> Тариф</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu11">
            <p>TARRIF</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu12">
            <p> Эл. тарификации</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu13">
            <p> Ед. тарификации</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu14">
            <p> Тип тарифа</p>
            <Imagemenu />
          </button>
        </li>
        <li >
          <button className="backButton linkmenu linkmenu15">
            <p> Перерасчет</p>
            <Imagemenu />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Linkmenu;
