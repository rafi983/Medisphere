import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useDepts from "../../hooks/useEquips";
import Footer from "../Footer/Footer";
import NavMenu from "../Navbar/NavMenu";
import "./Equipments.css";

const Equipments = () => {
  const [equipments] = useDepts();
  return (
    <>
      <NavMenu />
      <Container>
        <h1 className="text-center mt-5">
          There are some of our modern <br /> technology Listed Below
        </h1>
        <Row>
          {equipments?.map((eq) => (
            <Col md={4} key={eq.price}>
              <Card
                style={{ width: "26rem", height: "24rem", marginTop: "6rem" }}
              >
                <Card.Img
                  variant="top"
                  className="eq-image"
                  style={{ height: "18rem" }}
                  src={eq?.img}
                />
                <Card.Body>
                  <Card.Title>
                    Price: <span className="fw-bold">{eq?.price} $</span>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Equipments;
