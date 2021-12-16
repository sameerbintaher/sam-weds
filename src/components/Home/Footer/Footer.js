import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="border ">
      <div
        className="text-primary text-center p-5 "
        style={{ backgroundColor: "#fff" }}
      >
        <h2>Stay Updated</h2>
        <input className="w-50 me-1" type="" placeholder="Enter you Email" />
        <Button className="m-1 btn btn-primary">Subscribe</Button>
      </div>
      <p
        className="text-center text-dark  mb-0 p-3"
        style={{ backgroundColor: "#fff" }}
      >
        Sam Weds © 2021. All Rights Reserved. Terms of Use and Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
