import React from "react";
import { Card, RegistertionNavbar } from "../../components";
import { MdPersonOutline, MdBusinessCenter } from "react-icons/md";
import "./registration.css";
function RegistrationJoinUsContainer() {
  return (
    <section className="joinus___container">
      <RegistertionNavbar
        span=" Sign In"
        statement="Already have an account?"
        style={{ marginLeft: "0.5rem" }}
      />
      <div className="joinus___container--body">
        <div>
          <h1>Join Us!</h1>
          <p style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>
          <div style={{ marginBottom: "1rem" }}>
            <Card
              icon={<MdPersonOutline />}
              title="Individual"
              subTitle="Personal account to manage all you activities."
              url="/individual"
            />
          </div>
          <div>
            <Card
              icon={<MdBusinessCenter />}
              title="Business"
              subTitle="Own or belong to a company, this is for you."
              url="/business"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationJoinUsContainer;
