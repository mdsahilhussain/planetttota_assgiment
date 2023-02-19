import React from "react";
import RegistrationDetailContainer from "./RegistrationDetailContainer";
import RegistrationJoinUsContainer from "./RegistrationJoinUsContainer";
import RegistrationFromContainer from "./RegistrationFromContainer";
import RegistrationFromCompleteContainer from "./RegistrationFromCompleteContainer";
import "./registration.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessRegistration from "../business-registration/BusinessRegistration";

function RegistrationPage() {
  return (
    <Router>
      <div className="registration___container">
        <div className="detail">
          <RegistrationDetailContainer />
        </div>
        <div className="form____container">
          <Routes>
            <Route path="/" element={<RegistrationJoinUsContainer />} />
            <Route path="/individual" element={<RegistrationFromContainer />} />
            <Route
              path="/complete"
              element={<RegistrationFromCompleteContainer />}
            />
            <Route path="/business" element={<BusinessRegistration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default RegistrationPage;
