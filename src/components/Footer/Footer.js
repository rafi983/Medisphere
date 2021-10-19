import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import pic1 from "../../images/footerpic1.jpg";
import pic2 from "../../images/footerpic2.jpg";
import pic3 from "../../images/footerpic3.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container>
        <Row>
          <Col md={5}>
            <h1>About Medisphere</h1>
            <p>
              Patient's desire as our main priority. To fulfill this ,
              Medisphere was established on 2004.Since that year, We are working
              relentlessly to provide better medication to our patients and our
              patients feedback motivates us to care and cure them.Here we
              provide the cheapest medication and the best trust worthy doctors
              are here.
            </p>
          </Col>
          <Col md={3}>
            <h1>Quick Links</h1>
            <ul>
              <li>Make appointments</li>
              <li>Before & After</li>
              <li>Customer Treatments</li>
              <li>Our Doctors teams</li>
              <li>Contact Us</li>
            </ul>
          </Col>
          <Col md={4}>
            <h1>Latest news</h1>
            <Row>
              <Col md={3}>
                <Image src={pic1} alt="" fluid />
              </Col>
              <Col md={9}>
                <h4>April 10, 2018</h4>
                <p>How much aspirin to take for stroke</p>
              </Col>
              <Col md={3}>
                <Image src={pic2} alt="" fluid />
              </Col>
              <Col md={9}>
                <h4>April 1, 2019</h4>
                <p>How much aspirin to take for stroke</p>
              </Col>

              <Col md={3}>
                <Image src={pic3} alt="" fluid />
              </Col>
              <Col md={9}>
                <h4>Feb 1, 2021</h4>
                <p>How much aspirin to take for stroke</p>
              </Col>
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
