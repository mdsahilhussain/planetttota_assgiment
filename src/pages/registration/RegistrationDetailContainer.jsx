import React from "react";
import logoImage from "../../asset/logo.png";
import topIcon from "../../asset/icon.png";
import bootomIcon from "../../asset/icon-one.png";
import { MdOutlineCheck } from "react-icons/md";
import "./registration.css";

let squarePattern = <div></div>;

function RegistrationDetailContainer() {
  return (
    <section className="detai_container">
      <div className="detail___info">
        <img className="detail___info--logo" src={logoImage} alt="logoImage" />
        <div className="detail___info--body">
          {squarePattern}
          <div className="detail___info--bodytext">
            <img src={topIcon} alt="topicon" />
            <p>
              The passage experienced a surge in popularity during the 1960s
              when Letraset used it on their dry-transfer sheets, and again
              during the 90s as desktop publishers bundled the text with their
              software.
            </p>
            <h4>
              Vincent Obi
              <MdOutlineCheck
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "50%",
                  fontSize: "1.5rem",
                  padding: "0.2rem",
                  marginLeft: "0.5rem",
                }}
              />
            </h4>
            <img src={bootomIcon} alt="bottomicon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationDetailContainer;
