import React from "react";

class BackButton extends React.Component {
  onclick() {
    window.location.assign("http://localhost:3000/");
  }

  render() {
    return (
      <div className="backButtonConteiner">
        {" "}
        <button
          className="backButton"
          type="submit"
          onClick={(e) => this.onclick(e)}
        >
          {" "}
          Выйти{" "}
        </button>
        <button className="backButton" type="submit">
          Профиль
        </button>{" "}
      </div>
    );
  }
}
export default BackButton;
