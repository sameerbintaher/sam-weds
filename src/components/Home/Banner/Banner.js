import React from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import "./Banner.css";

const Banner = () => {
  return (
    <Container
      fluid
      className="banner d-flex align-items-center justify-content-center"
    >
      <Fade left duration={2000} distance="40px">
        <h1 className="text-white mb-4">
          Creating <br /> Unforgettable Memories
        </h1>{" "}
      </Fade>
    </Container>
  );
};

export default Banner;
