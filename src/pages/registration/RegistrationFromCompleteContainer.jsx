import React, { useState } from "react";
import { Button, InputField, RegistertionNavbar } from "../../components";
import { useLocation } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./registration.css";
function RegistrationFromCompleteContainer() {
  const location = useLocation();
  const dataFromBasicInfo = location.state;
  const [profileData, setProfileData] = useState({
    address: "",
  });
  const [value, setValue] = useState();
  const [completData, setCompletData] = useState();
  const inputs = [
    {
      id: 1,
      name: "phonenumber",
      type: "number",
      placeholder: "Enter Your Phone number",
      label: "Phone number",
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Enter Your Email Address",
      errorMessage: "It should be a valid email address!",
      label: "Your address",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "" && profileData.address === "") {
      return alert("Hello\nPleace enter all value");
    }

    setCompletData({
      ...dataFromBasicInfo,
      ...profileData,
      phoneNumber: value,
    });
    
    if (!completData) {
      return alert("Hello\nPleace enter all value");
    }
    console.log("completData", completData);
  };

  const onChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  return (
    <div className="form___container">
      <RegistertionNavbar
        url="/individual"
        step="STEP 02/03"
        statement="Personal Info."
      />
      <div className="form___container--body">
        <div>
          <h1>Register Individual Account!</h1>
          <p style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            For the purpose of industry regulation, your details are required.
          </p>
          <form>
            <label>{inputs[0].label}</label>
            <div className="form___container--phonenumber">
              <PhoneInput
                international
                defaultCountry="IN"
                value={value}
                onChange={setValue}
              />
            </div>

            <InputField
              key={inputs[1].id}
              {...inputs[1]}
              value={profileData[inputs[1].name]}
              onChange={onChange}
            />

            <label>Country of residence</label>
            <select name="country" id="cars" onChange={onChange}>
              <option value="">Please select</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </form>

          <div onClick={handleSubmit}>
            <Button name="Register Account" style={{ marginTop: "1.5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFromCompleteContainer;
