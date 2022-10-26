import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result=> {
      const user = result.user
      console.log(user)
    })
    .catch(error=>console.error(error))
  };

  return (
    <Container>
      <div className="row d-flex justify-content-center mt-5 py-5 px-2 mx-2 w-50 mx-auto bg-light">
        <Form>
          <div className="text-center">
            <h2 className="fw-bold fs-1">Log in</h2>
            <p>Please, Log in to access your account</p>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
              Log in
            </Button>
          </div>
          <p>Forgot password?</p>
          <div className="container text-center">
            <div className="row row-cols-1">
              <div className="col">
                <p>Login with social accounts</p>
              </div>
              <div className="col d-flex justify-content-center">
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    type="button"
                    className="btn btn-light me-2"
                  >
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
                  Don't have an account yet?{" "}
                  <Link to="/register">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
