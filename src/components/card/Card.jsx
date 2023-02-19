import React from "react";
import "./card.css";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card___container scale-up-center">
      <div className="card___container--icon">{props.icon}</div>
      <div className="card___container--text">
        <h4>{props.title}</h4>
        <h6>{props.subTitle}</h6>
      </div>
      <Link to={props.url} className="card___container--forwardIcon">
        <MdArrowRightAlt />
      </Link>
    </div>
  );
}

export default Card;
