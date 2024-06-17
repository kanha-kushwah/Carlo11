import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="row banner align-items-center">
            <div className="col-md-6 col-12 ali-self">
              <div className="d-flex align-items-center mt-sm-0 mt-4 g-10">
                <img className="logo" src="/img/carlo-logo.svg" alt="Logo" />
                <h2 className="sub-heading font-yellow">Caro11</h2>
              </div>

              <div className="mt-md-4 mt-4 w-75 full-w">
                <img className="bonus-img"
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
              <h1 className="main-heading text-white">Register & Play</h1>

              <Form className="mt-sm-5 mt-4">
                <fieldset>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white form-heading">
                      Enter Invite Code
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Enter Invite Code"
                      />
                      <InputGroup.Text>
                        <img src="/img/file-icon.svg" alt="Logo" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white form-heading">
                      Enter Mobile Number
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="tel"
                        placeholder="Enter Mobile Number"
                      />
                      <InputGroup.Text>
                        <img src="/img/phone.svg" alt="Logo" />
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-white">
                      You Will Receive an OTP for Verification
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white form-heading">
                      Email Address
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                      />
                      <InputGroup.Text>
                        <img src="/img/email.svg" alt="Logo" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white form-heading">
                      Password
                    </Form.Label>

                    <InputGroup>
                      <Form.Control
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Enter Password"
                      />
                      <InputGroup.Text
                        onClick={togglePasswordVisibility}
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            passwordVisible
                              ? "/img/hide-pass.svg"
                              : "/img/show-pass.svg"
                          }
                          alt={
                            passwordVisible ? "Hide password" : "Show password"
                          }
                        />
                      </InputGroup.Text>
                    </InputGroup>

                    <Form.Text className="text-white">
                      Must be 8 to 16 Characters with 1 Number, 1 Alphabet & 1
                      Symbol
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check
                      className="text-white"
                      type="checkbox"
                      id="disabledFieldsetCheck"
                      label="I Certify That I am Above 18 Years."
                    />
                  </Form.Group>

                <Link to={"/otp"} > <Button className="btn-style" type="submit">
                    Register
                  </Button> </Link>
                </fieldset>
              </Form>

              <div className="text-white text-center box-w">
                <h6 className="my-4">OR</h6>
                <div className="d-flex g-20">
                  <Button className="btn-style-two" type="submit">
                    {" "}
                    <img src="/img/goole.svg" alt="google" /> Google Login
                  </Button>
                  <Button className="btn-style-two" type="submit">
                    {" "}
                    <img src="/img/facebook.svg" alt="" /> Facebook Login
                  </Button>
                </div>
                <p className="mt-md-4 mt-4">
                  By Registering, I Agree to{" "}
                  <span className="font-yellow"><b>Caro11’s</b> </span>T&Cs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
