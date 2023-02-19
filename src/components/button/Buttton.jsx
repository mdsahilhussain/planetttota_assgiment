import React from "react";
import "./button.css";
import googleIcon from "../../asset/googleIcon.png";

function Buttton(props) {
  return (
    <button
      style={{ ...props.style }}
      type="submit"
      className="scale-up-center"
    >
      {props.icon ? <img src={googleIcon} alt="" /> : undefined}
      {props.name}
    </button>
  );
}

export default Buttton;
