import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import "./registertionNavbar.css";
function RegistertionNavbar(props) {
  return (
    <nav>
      <div className="nav___back">
        <p>
          <MdOutlineArrowBackIosNew
            style={{
              marginRight: "0.5rem",
            }}
          />
          Back
        </p>
      </div>
      <div className="nav___detail">
        <h6>{props.step} </h6>
        <p>
          {props.statement} <span>{props.span}</span>
        </p>
      </div>
    </nav>
  );
}

export default RegistertionNavbar;
