import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import useServices from "../../hooks/useServices";
import Footer from "../Footer/Footer";
import NavMenu from "../Navbar/NavMenu";

const ServiceDetail = () => {
  const { id } = useParams();

  const [servicedetail, setServiceDetail] = useState({});
  const [services] = useServices();

  const history = useHistory();

  useEffect(() => {
    const singleService = services?.find(
      (service) => service.id === Number(id)
    );
    setServiceDetail(singleService);
  }, [services, id]);

  const backToHome = () => {
    history.push("/");
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Row className="d-flex align-items-center mt-5">
          <Col md={6}>
            <h1>{servicedetail?.title}</h1>
            <p>{servicedetail?.desc}</p>
            <Button variant="info" className="px-4" onClick={backToHome}>
              Back
            </Button>
          </Col>
          <Col md={6} className="mt-3">
            <Image src={servicedetail?.img} className="border border-5" fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ServiceDetail;
