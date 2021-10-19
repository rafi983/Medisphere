import { Card, Col, Container, Row } from "react-bootstrap";
import useSpecialists from "../../hooks/useSpecialists";
import Footer from "../Footer/Footer";
import NavMenu from "../Navbar/NavMenu";

const Doctors = () => {
  const [doctors] = useSpecialists();
  return (
    <>
      <NavMenu />
      <Container>
        <h1 className="text-center mt-5">Meet our specialist Doctors</h1>
        <Row>
          {doctors?.map((doctor) => (
            <Col md={4} key={doctor.name}>
              <Card
                className="card"
                style={{ width: "26rem", height: "38rem", marginTop: "6rem" }}
              >
                <Card.Img variant="top" className="image" src={doctor?.img} />
                <Card.Body>
                  <Card.Title className="fs-1">{doctor?.name}</Card.Title>
                  <Card.Text className="fw-bold fs-3">{doctor?.dept}</Card.Text>
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

export default Doctors;
