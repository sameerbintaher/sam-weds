import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import "./Services.css";

const Services = () => {
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <section
      id=""
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <Container>
        <Row>
          <Col md={4} className="border p-5" style={{ background: "#cf7f29" }}>
            <h5 className="text-white" style={{ fontWeight: 500 }}>
              Services
            </h5>
            <br />
            <h5 className="text-white py-3">Turn your dream into a reality</h5>
            <Button
              as={Link}
              to="/explore"
              className="btn-success rounded border"
            >
              Discover
            </Button>
          </Col>

          <Col md={8}>
            <Image
              src="https://static.wixstatic.com/media/c19c76_69eada92e86a435a80761049f0211846~mv2_d_4896_3264_s_4_2.jpg/v1/fill/w_1055,h_728,al_c,q_85,usm_0.66_1.00_0.01/c19c76_69eada92e86a435a80761049f0211846~mv2_d_4896_3264_s_4_2.webp"
              fluid
            />
          </Col>
        </Row>
      </Container>

      {/* <Row className="justify-content-center mx-auto mt-md-5 pt-5">
        {loading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          services
            .slice(0, 6)
            .map((service) => (
              <ServiceDetail key={service._id} service={service} />
            ))
        )}
      </Row> */}
    </section>
  );
};

export default Services;
