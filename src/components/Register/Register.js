import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import signup from "../../images/signup.jpg";
import Footer from "../Footer/Footer";
import NavMenu from "../Navbar/NavMenu";
import "./Register.css";

const Register = () => {
  const {
    handleRegister,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    error,
    verificationMsg,
  } = useAuth();

  return (
    <>
      <NavMenu />
      <Container>
        <Row className="d-flex align-items-center mt-3">
          <Col md={6}>
            <Image src={signup} alt="" fluid />
          </Col>

          <Col md={6}>
            <h3>{verificationMsg}</h3>
            <h1>Register Account</h1>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="name"
                  onBlur={handleNameChange}
                  className="form-control w-75"
                  id="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  onBlur={handleEmailChange}
                  className="form-control w-75"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onBlur={handlePasswordChange}
                  className="form-control w-75"
                  id="exampleInputPassword1"
                />
              </div>

              <button type="submit" className="btn btn-info">
                Register
              </button>

              <br />
              {error}
            </form>
            <p className="mt-4">Already registered?</p>

            <Link to="/login">
              <button className="btn btn-warning px-4">Click to Login</button>
            </Link>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Register;
