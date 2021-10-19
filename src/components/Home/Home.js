import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Rating from "react-rating";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import useFeatures from "../../hooks/useFeatures";
import useReviews from "../../hooks/useReviews";
import useServices from "../../hooks/useServices";
import about from "../../images/about.jpg";
import banner from "../../images/banner.png";
import sectionImg from "../../images/home-img.png";
import Footer from "../Footer/Footer";
import NavMenu from "../Navbar/NavMenu";
import Service from "../Service/Service";
import "./Home.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Home = () => {
  const [services] = useServices();
  const [features] = useFeatures();
  const [reviews] = useReviews();

  return (
    <>
      <NavMenu />
      <Container>
        <Row className="d-flex align-items-center mt-3">
          <Col md={6}>
            <h1 className="fw-bold">
              Welcome To MediSphere,
              <br /> Your health partner
            </h1>
            <p>
              Health is the biggest asset of us as a human being.We are a clinic
              where renowned doctors of different sectors of medical science
              works only for securing patient's health
            </p>
          </Col>
          <Col md={6}>
            <Image src={banner} alt="" fluid />
          </Col>
        </Row>

        <Row className="features-container">
          {features?.map((feature) => (
            <Col md={4} className="my-5" key={feature.title}>
              <img src={feature?.img} alt="" />
              <h1 className="mt-3">{feature?.title}</h1>
              <p>{feature?.desc}</p>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col md={6}>
            <Image src={about} fluid />
          </Col>
          <Col md={6}>
            <h1 className="fw-bold about-heading">
              Some stories about <br /> MediSphere Clinic
            </h1>
            <p>
              Patient's desire as our main priority. To fulfill this ,
              Medisphere was established on 2004.Since that year, We are working
              relentlessly to provide better medication to our patients and our
              patients feedback motivates us to care and cure them.Here we
              provide the cheapest medication and the best trust worthy doctors
              are here.
            </p>

            <div className="clinic-info">
              <Row>
                <Col
                  md={4}
                  id="patients"
                  className="text-center py-3 rounded-3"
                >
                  <h3 className="number">2500+</h3>
                  <p className="fs-4">Happy Patients</p>
                </Col>
                <Col md={1}></Col>
                <Col md={4} id="doctors" className="text-center py-3 rounded-3">
                  <h3 className="number">750</h3>
                  <p className="fs-4">Expert Doctors</p>
                </Col>
                <Col
                  md={4}
                  id="rooms"
                  className="mt-4 text-center py-3 rounded-3"
                >
                  <h3 className="number">440</h3>
                  <p className="fs-4">Clinic Rooms</p>
                </Col>
                <Col md={1}></Col>
                <Col
                  md={4}
                  id="award"
                  className="mt-4 text-center py-3 rounded-3"
                >
                  <h3 className="number">110</h3>
                  <p className="fs-4">Awards</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="services-container">
          <Row>
            <h1 className="text-center fw-bold mt-5">
              We provide high quality of clinical <br /> services to our
              patients.
            </h1>
            {services?.map((service) => (
              <Service key={service.id} service={service} />
            ))}
          </Row>
        </div>

        <Row className="d-flex align-items-center my-5">
          <Col md={6}>
            <Image src={sectionImg} alt="" fluid />
          </Col>
          <Col md={6} className="choose-us">
            <h1>Why Choose Us?</h1>
            <p>
              There are so many hospitals u will find in town. But the best
              treatment u will get from us for many reasons.We have so many
              modern technology for complicated diseases,Many expertiseed
              doctors are here.Test costs are so cheap but the quality are
              higher class.
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={2}></Col>
          <Col md={8}>
            <>
              <h1 className="text-center mt-5">
                What Our patients say about Us
              </h1>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                }}
                className="mySwiper"
              >
                {reviews?.map((review) => (
                  <SwiperSlide key={review?.img}>
                    <Card
                      style={{
                        width: "26rem",
                        height: "32rem",
                        marginTop: "6rem",
                      }}
                      className="card"
                    >
                      <Card.Img variant="top" src={review?.img} />
                      <Card.Body className="mt-4">
                        <Card.Title className="fs-1">{review?.name}</Card.Title>
                        <Card.Text>
                          {review?.desc} <br />
                          <Rating
                            className="star mt-3 me-2"
                            initialRating={review?.rate}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly
                          />
                          {review?.rate}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
