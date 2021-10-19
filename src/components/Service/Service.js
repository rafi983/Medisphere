import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Service.css";

const Service = ({ service }) => {
  const { img, title, desc, id } = service;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/servicedetail/${id}`);
  };
  return (
    <Col md={4}>
      <Card
        className="card"
        style={{ width: "26rem", height: "32rem", marginTop: "6rem" }}
      >
        <Card.Img
          variant="top"
          className="image"
          src={img}
          style={{ height: "18rem" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="warning" onClick={handleClick}>
            View Details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
