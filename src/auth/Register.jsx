import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


const Register = () => {
  
  const [formData, setFormData] = useState({
    inviteCode: '',
    mobileNumber: '',
    email: '',
    password: '',
    isAbove18: false,
  });



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiData = {
      email: formData.email,
      password: formData.password,
      mobile: formData.mobileNumber,
      country: '91', 
      refercode: formData.inviteCode || '',
    };

    try {
      const response = await axios.post('https://caro11.com/caro11_admin/api/tempregisteruser', apiData);
      console.log('API Response:', response.data)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  
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

              <Form className="mt-sm-5 mt-4" onSubmit={handleSubmit}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label className="text-white form-heading">
            Enter Invite Code
          </Form.Label>
          <InputGroup>
            <Form.Control
              type="text"
              name="inviteCode"
              placeholder="Enter Invite Code"
              value={formData.inviteCode}
              onChange={handleChange}
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
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
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
              name="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
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
            name="isAbove18"
            label="I Certify That I am Above 18 Years."
            checked={formData.isAbove18}
            onChange={handleChange}
          />
        </Form.Group>

        <button  className="btn-style btn btn-primary" type="submit">Register</button>
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
