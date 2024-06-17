import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";



const Profile = () => {
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
        <h1 className="main-heading text-white d-flex">
              <img className="me-md-3 " src="/img/arrow-right.svg" alt="" />{" "}
              Create Profile
            </h1>

          <Form className="mt-sm-5 mt-4">
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label className="text-white form-heading">
                Enter Team Name*
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Enter Team Name*"
                  />
                  <InputGroup.Text>
                    <img src="/img/file-icon.svg" alt="Logo" />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-white form-heading">
                Invite Code
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="tel"
                    placeholder="Invite Code"
                  />
                  <InputGroup.Text>
                    <img src="/img/phone.svg" alt="Logo" />
                  </InputGroup.Text>
                </InputGroup>
               
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="text-white form-heading">
                Date of Birth*
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth*"
                  />
                  
                </InputGroup>
              </Form.Group>



              <Form.Group controlId="exampleForm.SelectCustom">
        <Form.Label className="text-white form-heading mb-3">Select Your State*</Form.Label>
        <Form.Select>
          <option value="option1">Madhya Pardesh</option>
          <option value="option2">Delhi</option>
          <option value="option3">Gujarat</option>
        </Form.Select>
      </Form.Group>

              

             <div className="inner-box mt-md-4 mt-4">
              <p className="text-white p-small">To Play the <span className="font-yellow"><b>Caro11</b></span> Contests(s), You Must be 18 Years or Above.</p>
              <p className="text-white p-small">You Are Not a Resident of Andhra Pradesh, Assam, Nagaland, Odhisa, Telangana</p>
              <p className="text-white p-small">This Fantasy Game Involves an Element of Financial Risk & You May Get Addicted. Please Play at Your Own Risk & Responsibility.</p>
             </div>

         

            <Button className="btn-style mt-md-5 mt-4 mb-4" type="submit">
            Create Profile
              </Button> 
            </fieldset>
          </Form>

  
        </div>
      </div>
    </div>
  </section>
  )
}

export default Profile