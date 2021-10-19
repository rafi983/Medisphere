import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import google from "../../icons/googleicon.png";
import login from "../../images/login.png";
import Footer from "../Footer/Footer";
import NavMenu from "../Navbar/NavMenu";
import "./Login.css";

const Login = () => {
  const {
    signInUsingGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    error,
    setError,
    loginMsg,
    setVerificationMsg,
    setIsLoading,
    user,
    resetMsg,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/";

  const handleGoogleClick = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  const handleAccClick = () => {
    setVerificationMsg("");
    setError("");
  };

  return (
    <>
      <NavMenu />
      <Container>
        <Row className="d-flex align-items-center mt-3">
          {user.email && user.emailVerified && <h1>{loginMsg}</h1>}
          <h3 className="text-primary">{resetMsg}</h3>
          <Col md={6}>
            <h1>Please Login</h1>
            <form onSubmit={handleLogin}>
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
                Login
              </button>

              <br />
              {error}
            </form>
            <p className="mt-4">New to Medisphere?</p>

            <Link to="/register">
              <button className="btn btn-warning px-4" onClick={handleAccClick}>
                Create your account
              </button>
            </Link>

            <div className="text-center mt-3">
              <h2>Or Login Using</h2>
              <img
                src={google}
                onClick={handleGoogleClick}
                className="icon"
                alt=""
              />
            </div>
          </Col>
          <Col md={6}>
            <Image src={login} alt="" fluid />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
