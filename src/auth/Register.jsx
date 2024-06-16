import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const Register = () => {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="row banner align-items-center">
            <div className="col-md-6 col-12">
              <div className="d-flex align-items-center">
                <img src="/img/carlo-logo.svg" alt="Logo" />
                <h2 className="sub-heading font-yellow">Caro11</h2>
              </div>

              <div className="mt-md-4 w-75">
                <img
                  src="/img/Bonus-img.png"
                  alt="bonus"
                  height={"294px"}
                  width={"381px"}
                />

                <h3 className="sub-heading-bold font-yellow text-center mt-md-4">
                  500 Coins
                </h3>
                <h6 className="sub-heading-small text-white  text-center ">
                  Just a Step Away
                </h6>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <h1 className="main-heading text-white">Register & Play</h1>

              <Form>
                <fieldset>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">
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
                    <Form.Label className="text-white">
                      Enter Mobile Number
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="number"
                        placeholder="Enter Mobile Number"
                      />
                      <InputGroup.Text>
                        <img src="/img/file-icon.svg" alt="Logo" />
                      </InputGroup.Text>
                    </InputGroup>
                    <Form.Text className="text-white">
                      You Will Receive an OTP for Verification
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">
                      Email Address
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                      />
                      <InputGroup.Text>
                        <img src="/img/file-icon.svg" alt="Logo" />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Password</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                      />
                      <InputGroup.Text>
                        <img src="/img/file-icon.svg" alt="Logo" />
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

                  <Button type="submit">Submit</Button>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
