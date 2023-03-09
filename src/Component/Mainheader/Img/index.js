
import XLS from "../../../Image/XLS.svg"


const Img= () => {
    return (
        <div className="imgConteiner">
            <div>
            <button className="butoonImg">
                <img className="xls" src={XLS} alt="" /> 
            </button>
            </div>
            <div className="MainmenuCheck">
            <input  type="checkbox" className="butoonImg checkbox" />
                <p>Архивные</p>
            </div>
        </div>
    )
}

export default Img