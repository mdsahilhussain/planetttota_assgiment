import React, { useEffect, useState } from "react";
import { Button, InputField, RegistertionNavbar } from "../../components";

function BusinessRegistration() {
  const [businessData, setBusinessData] = useState({
    bnv: "",
  });

  const [randomBNV, setRandomBNV] = useState();

  const inputs = [
    {
      id: 1,
      name: "bnv",
      type: "text",
      placeholder: "Enter Your BVN",
      errorMessage:
        "Name should be 12 characters and shouldn't include any special character or alphabet !",
      label: "Bank verification number (BVN)",
      pattern: randomBNV,
      required: true,
    },
  ];

  const onChange = (e) => {
    setBusinessData({ ...businessData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (businessData.bnv.trim() === "") {
      return alert("Hello\nPleace enter your env");
    }
    if (randomBNV !== businessData.bnv) {
      return alert("NOT MATCH\nYour enterd Bank verification number not match");
    }
    console.log("env", businessData);
  };

  const randomBNVGenrater = () => {
    let randerNum = parseInt(Math.random().toFixed(12).replace("0.", ""));
    setRandomBNV(randerNum);
  };
  useEffect(() => {
    randomBNVGenrater();
  }, []);

  return (
    <div className="form___container">
      <RegistertionNavbar
        url="/"
        step="STEP 01/01"
        statement="Bank Verification"
      />
      <div className="form___container--body">
        <div>
          <h6>Copy Your Bank verification number: {randomBNV}</h6>
          <h1>Complete Your Profile!</h1>
          <p style={{ marginTop: "1.5rem" }}>
            For the purpose of industry regulation, your details are required.
          </p>
          <hr style={{ margin: "1.5rem 0", opacity: "30%" }} />

          <form>
            {inputs.map((item, index) => (
              <InputField
                key={index}
                {...item}
                value={businessData[inputs.name]}
                onChange={onChange}
                index={index}
                randomBNV={randomBNV}
              />
            ))}
          </form>

          <div onClick={handleSubmit}>
            <Button name="Save & Continue" style={{ marginTop: "4rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessRegistration;
