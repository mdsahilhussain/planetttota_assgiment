import React from "react";
import "./button.css";
function Buttton(props) {
  return (
    <button style={{ ...props.style }} type="submit">
      {props.name}
    </button>
  );
}

export default Buttton;
