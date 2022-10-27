import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      form.reset()
    })
    .catch(error=>console.error(error))
  };

  return (
    <Container>
      <div className="row d-flex justify-content-center mt-5 py-5 px-2 mx-2 w-50 mx-auto bg-light">
        <Form onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="fw-bold fs-1">Register</h2>
            <p>Please, create a new account</p>
          </div>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Full Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhotoURL">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              name="photoURL"
              type="text"
              placeholder="Enter Photo URL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
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
          <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
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
                  Already have an account? <Link to="/login">Log in</Link>
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
