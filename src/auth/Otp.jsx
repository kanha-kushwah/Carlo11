import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";

const Otp = () => {
  const [otp, setOtp] = useState("");

  return (
    <section id="banner">
      <div className="container">
        <div className="row banner align-items-center">
          <div className="col-md-6 col-12">
            <div className="d-flex align-items-center mt-sm-0 mt-4 g-10">
              <img className="logo" src="/img/carlo-logo.svg" alt="Logo" />
              <h2 className="sub-heading font-yellow">Caro11</h2>
            </div>

            <div className="mt-md-4 mt-4 w-75 full-w">
              <img
                className="bonus-img"
                src="/img/Bonus-img.png"
                alt="bonus"
                height={"294px"}
                width={"381px"}
              />

              <h3 className="sub-heading-bold font-yellow text-center mt-md-4 mt-4">
                500 Coins
              </h3>
              <h6 className="sub-heading-small text-white  text-center ">
                Just a Step Away
              </h6>
            </div>
          </div>
          <div className="col-md-6 col-12 align-self-start mt-5">
          <Link className="hover-none" to={"/"}>   <h1 className="main-heading text-white d-flex">
              <img className="me-md-3 " src="/img/arrow-right.svg" alt="" />{" "}
              Verification Email
            </h1></Link>

            <h4 className="text-white mt-md-5 mt-4 opt-heading">
              Please Enter 6 Digital <span className="font-yellow">OTP</span>
            </h4>
            <p className="text-white">Sent to: anilsogratod@gmail.com</p>
            <div className="otp-send">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
              <p className="text-white text-end mt-md-3 mt-3 exp">
                Expiring in: 1.30 Min
              </p>
            </div>

            <div className="last">
              <Link  to={"/profile"}>
                {" "}
                <Button className="btn-style mt-5" type="submit">
                  Submit
                </Button>{" "}
              </Link>

              <div className="text-white text-center box-w">
                <p className="mt-md-4 mt-4">
                  By Registering, I Agree to{" "}
                  <span className="font-yellow">Caro11’s </span>T&Cs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
