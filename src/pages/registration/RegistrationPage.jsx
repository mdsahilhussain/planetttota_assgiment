import React from "react";
import RegistrationDetailContainer from "./RegistrationDetailContainer";
import RegistrationJoinUsContainer from "./RegistrationJoinUsContainer";
import "./registration.css";
import { Route, Router, Routes } from "react-router-dom";

function RegistrationPage() {
  return (
    <div className="registration_container">
      <div className="detail">
        <RegistrationDetailContainer />
      </div>
      <div className="input_container">
        <RegistrationJoinUsContainer />
        {/* <Routes>
          <Route path="/" element={<RegistrationJoinUsContainer />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default RegistrationPage;
