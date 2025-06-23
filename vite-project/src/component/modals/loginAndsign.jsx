import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'
import { Page1 } from '../outlets/pages';
import axios from 'axios';
import { useAuth } from '../authcontext.jsx';

function Login() {

  const { setUser } = useAuth();
 const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


 



  
const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      // ✅ 1. Save to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

      // ✅ 2. Save to context (for Navbar image)
      setUser(matchedUser);

      alert("Login successful!");
      navigate("/Dashboard");
    } else {
      alert("Invalid credentials.");
    }
  };

  return (
    <>


      <Button variant="success" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" required
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" required
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login </button>
          </form>
        </Modal.Body>
        <Modal.Footer>  

        </Modal.Footer>
      </Modal>


    </>
  );
}

export default Login;