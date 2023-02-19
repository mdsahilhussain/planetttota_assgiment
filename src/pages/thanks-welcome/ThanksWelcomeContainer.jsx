import React from "react";
import { Button, RegistertionNavbar } from "../../components";
import { useLocation } from "react-router-dom";

import "../registration/registration.css";
function ThanksWelcomeContainer(props) {
  const location = useLocation();
  const completInfo = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUserData(completInfo);
    props.setIsOPOPUP(true);
  };
  return (
    <div className="thanks___container">
      <RegistertionNavbar
        url="/"
        step="STEP 03/03"
        statement={`Welcome ${completInfo?.name}`}
      />
      <div className="thanks___container--body">
        <div className="thanks___container--body___text">
          <h1>Thank you for filling out your information!</h1>
          <p style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            We’ve sent you an email with [the coupon code/your file download
            link/your voucher] at the email address you provided. Please enjoy,
            and let us know if there’s anything else we can help you with.
          </p>

          <div onClick={handleSubmit}>
            <Button
              name="View Your Information"
              style={{ marginTop: "4rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksWelcomeContainer;
