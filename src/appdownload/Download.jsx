import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <section id="banner" className="down">
      <div className="container">
        <div className="row banner align-items-center">
          <div className="col-md-5 col-12">
            <div className="d-flex align-items-center mt-sm-0 mt-4 g-10 dow-logo">
              <img className="logo" src="/img/carlo-logo.svg" alt="Logo" />
              <h2 className="sub-heading font-yellow">Caro11</h2>
            </div>

            <div className="mt-md-4 mt-4 full-w mobile-sec">
              <div className="d-md-flex d-block g-20 justify-content-between">
                <img className="bonus-img1" src="/img/mo1.png" alt="bonus"  />
                <img className="mob-2" src="/img/mo2.png" alt="bonus" />
              </div>
            </div>
          </div>
          <div className="col-md-7 col-12 mt-5">
            <Link className="hover-none" to={"/"}>
              {" "}
              <h1 className="main-heading text-white text-center fo-500">
              Download our Mobile App Now
              </h1>
            </Link>

            <h4 className="text-white mt-md-5 mt-4 sub-heading-small text-center font-weight-normal">
            Compete with Other <span className="font-yellow"><b> Caro11 </b></span> Players<br/>
            for Big Rewards.
            </h4>
           <div className="d-flex g-20 justify-content-center mt-md-5 mt-4 ">
           <Link className="hover-none" to={"/"}> <img src="/img/play.svg" alt="playstore" /></Link>
           <Link className="hover-none" to={"/"}> <img src="/img/apple.svg" alt="applestore" /></Link>
           </div>

    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
