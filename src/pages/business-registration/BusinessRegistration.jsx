import React, { useState } from "react";
import { Button, InputField, RegistertionNavbar } from "../../components";
import { useNavigate } from "react-router-dom";

function BusinessRegistration() {
  let navigator = useNavigate();

  const [businessData, setBusinessData] = useState({
    bnv: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Your Fullname",
      errorMessage:
        "Name should be 3-16 characters and shouldn't include any special character or number !",
      label: "Bank verification number (BVN)",
      pattern: "[a-zA-Z][a-zA-Z ]{3,16}",
      required: true,
    },
  ];

  const onChange = (e) => {
    setBusinessData({ ...businessData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      businessData.name.trim() === "" &&
      businessData.email.trim() === "" &&
      businessData.password.trim() === ""
    ) {
      return alert("Hello\nPleace enter all value");
    }
    navigator("/complete", { state: businessData }, { replace: true });
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
          <p style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            For the purpose of industry regulation, your details are required.
          </p>
          <form>
            {inputs.map((item, index) => (
              <InputField
                key={index}
                {...item}
                value={businessData[inputs.name]}
                onChange={onChange}
                index={index}
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
            <Button name="Register Account" style={{ marginTop: "0rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessRegistration;
