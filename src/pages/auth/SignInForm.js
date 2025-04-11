// React
import React, { useState } from "react";

// API
import axios from "axios";

// Assets
import signupHero from "../../assets/signup_hero.png";

// Bootstrap Components
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

// CSS
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Buttons.module.css";
import styles from "../../styles/SignInUpForm.module.css";

// React Router
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/dj-rest-auth/login/", signInData);
      navigate("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className={`${styles.Row} no-gutters`}>
        <Col className="pl-0 my-auto md-2" md={6}>
          <Container className={`${appStyles.SignInForm} p-4 `}>
            <h1 className={styles.Header}>Get Creating</h1>
            <div className={`${styles.HeaderText} text-center mb-3`}>
              <span>Find your spark, or ignite someone else's...</span>
            </div>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  className={styles.Input}
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Button
                className={`${btnStyles.AuthBtn} ${btnStyles.Btn}`}
                type="submit"
              >
                Login
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
            </Form>
          </Container>
          <div className="m-4 text-center">
            Not a member yet?{" "}
            <Link className={styles.AuthLink} to="/signin">
              Join the community
            </Link>
          </div>
        </Col>
        <Col
          md={6}
          className={`${styles.SignUpCol}my-auto d-none d-md-block h-100`}
        >
          <Image className={appStyles.FillerImage} src={signupHero} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignInForm;
