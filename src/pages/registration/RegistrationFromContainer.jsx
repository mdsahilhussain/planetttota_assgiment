import React, { useState } from "react";
import { Button, InputField, RegistertionNavbar } from "../../components";
import { useNavigate } from "react-router-dom";

function RegistrationFromContainer() {
  let navigator = useNavigate();

  const [basicData, setBasicData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Your Fullname",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character or number !",
      label: "Your fullname*",
      pattern: "[a-zA-Z][a-zA-Z ]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Your Email Address",
      errorMessage: "It should be a valid email address!",
      label: "Email address*",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      show: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      basicData.name.trim() === "" &&
      basicData.email.trim() === "" &&
      basicData.password.trim() === ""
    ) {
      return alert("Hello\nPleace enter all value");
    }
    navigator("/residencyinfo", { state: basicData }, { replace: true });
  };

  return (
    <div className="form___container">
      <RegistertionNavbar
        url="/"
        step="STEP 01/03"
        statement="Personal Info."
      />
      <div className="form___container--body">
        <div>
          <h1>Register Individual Account!</h1>
          <p style={{ marginTop: "1.5rem" }}>
            For the purpose of industry regulation, your details are required.
          </p>
          <hr style={{ margin: "1.5rem 0", opacity: "30%" }} />
          <form>
            {inputs.map((item, index) => (
              <InputField
                key={index}
                {...item}
                value={basicData[inputs.name]}
                onChange={onChange}
              />
            ))}
          </form>
          <h6>
            <input type="checkbox" /> I agree to terms & conditions
          </h6>
          <div onClick={handleSubmit}>
            <Button name="Register Account" style={{ marginTop: "1.5rem" }} />
          </div>
          <div className="form___container--divider">
            <hr />
            <h6>or</h6>
            <hr />
          </div>
          <div>
            <Button
              name="Register with Google"
              icon="googleIcon"
              style={{
                marginTop: "0rem",
                backgroundColor: "white",
                color: "black",
                boxShadow: "0px 4px 14px 1px rgba(0, 0, 0, 0.04)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationFromContainer;
