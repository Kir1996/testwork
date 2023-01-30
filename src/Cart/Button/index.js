
import React from "react";



class OnSecondPageButton  extends React.Component {
  
  onclick () {
    window.location.assign('http://localhost:3000/about');
  }
  
  render() {
    return (
    <button  className="submit" type="onSubmit"  onClick={(e) => this.onclick(e)}> Войти </button>
    );
  }
  
}
export default OnSecondPageButton;
