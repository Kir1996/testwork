
import fail from "./fail.svg"
import check from "./check.svg"
import check1 from "./check1.svg"
import fail1 from "./fail1.svg"
import fail2 from "./fail2.svg"
import fail3 from "./fail3.svg"
const Img= () => {
    return (
        <div className="imgConteiner">
            <div>
            <button className="butoonImg">
                <img src={fail} alt="" />
                <img className="imgbutoonImgfail1" src={fail1} alt="" />
                <img className="imgbutoonImgfail2" src={fail2} alt="" />
                <img className="imgbutoonImgfail3" src={fail3} alt="" />
            </button>
            </div>
            <div>
            <button className="butoonImg">
                <img src={check} alt="" />
                <img className="imgbutoonImgcheck1" src={check1} alt="" />
                <p>Архивные</p>
            </button>
            </div>
        </div>
    )
}

export default Img