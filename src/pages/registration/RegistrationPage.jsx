import React, { useState } from "react";
import RegistrationDetailContainer from "./RegistrationDetailContainer";
import RegistrationJoinUsContainer from "./RegistrationJoinUsContainer";
import RegistrationFromContainer from "./RegistrationFromContainer";
import RegistrationFromCompleteContainer from "./RegistrationFromCompleteContainer";
import ThanksWelcomeContainer from "../thanks-welcome/ThanksWelcomeContainer";
import "./registration.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessRegistration from "../business-registration/BusinessRegistration";

function RegistrationPage() {
  const [isPOPUP, setIsOPOPUP] = useState(false);
  const [userData, setUserData] = useState();
  return (
    <Router>
      <div className="container">
        <div
          className="pop-up scale-up-center"
          style={isPOPUP ? { display: "block" } : { display: "none" }}
        >
          <div className="pop-up___body" onClick={(e) => setIsOPOPUP(false)}>
            <div className="pop-up___body--text">
              <h6>Welcome Your filled information</h6>
              <h1>{userData?.name}</h1>
              <p>{userData?.email}</p>
              <p>{userData?.phoneNuber}</p>
              <p>{userData?.address}</p>
              <p>{userData?.country}</p>
              {console.log(userData)}
            </div>
          </div>
        </div>
        <div className="registration___container">
          <div className="detail">
            <RegistrationDetailContainer />
          </div>
          <div className="form____container">
            <Routes>
              <Route path="/" element={<RegistrationJoinUsContainer />} />
              <Route
                path="/individual"
                element={<RegistrationFromContainer />}
              />
              <Route
                path="/residencyinfo"
                element={<RegistrationFromCompleteContainer />}
              />
              <Route path="/business" element={<BusinessRegistration />} />
              <Route
                path="/complete"
                element={
                  <ThanksWelcomeContainer
                    setUserData={setUserData}
                    setIsOPOPUP={setIsOPOPUP}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default RegistrationPage;
