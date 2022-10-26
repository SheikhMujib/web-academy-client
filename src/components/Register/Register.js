import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <div className="row d-flex justify-content-center mt-5 py-5 px-2 mx-2 w-50 mx-auto bg-light">
        <Form>
          <div className="text-center">
            <h2 className="fw-bold fs-1">Register</h2>
            <p>Please, create a new account</p>
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhotoURL">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Photo URL" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="d-grid">
            <Button variant="dark" type="submit">
              Sign Up
            </Button>
          </div>
          <p>Forgot password?</p>
          <div className="container text-center">
            <div className="row row-cols-1">
              <div className="col">
                <p>Signup with social accounts</p>
              </div>
              <div className="col d-flex justify-content-center">
                <div>
                  <button type="button" className="btn btn-light me-2">
                    <FaGoogle></FaGoogle> Google
                  </button>
                </div>
                <div>
                  <button type="button" className="btn btn-light">
                    <FaGithub></FaGithub> GitHub
                  </button>
                </div>
              </div>
              <div className="col">
                <p>
                  Already have an account?{" "}
                  <Link to="/login">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
