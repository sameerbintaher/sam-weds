import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";

const ServiceDetail = ({ service }) => {
  const { setSelectedService, isAdmin } = useContext(UserContext);
  const { title, image, description, price } = service;
  return (
    <Col md={4} className="mb-5 text-center">
      <Fade bottom duration={2500} distance="40px">
        <Card
          className="border-0 py-4"
          style={{ maxWidth: "30rem", height: "31rem" }}
        >
          <Card.Img
            variant="top"
            height="250"
            src={image}
            style={{ objectFit: "contain" }}
          />
          <Card.Body className="pt-0">
            <Card.Title as="h2" className="my-4">
              {title}
            </Card.Title>
            <Card.Text className="text-muted">{description}</Card.Text>
            <div className=" d-flex align-items-center justify-content-between">
              <h2 className="text-success">${price}</h2>
              <Button
                className="btn-primary"
                as={Link}
                to={isAdmin ? "/dashboard/orderList" : "/dashboard/book"}
                onClick={() => setSelectedService(service)}
              >
                Buy Now
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
};

export default ServiceDetail;
