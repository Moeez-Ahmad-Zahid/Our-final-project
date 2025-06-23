import { useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom'
import Login from './loginAndsign';
import axios from 'axios';
// import { error } from 'console';

function Signup() {
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();


  
  // const [date, setDate] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [date ,setDate] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  
 const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      date,
      contact,
      image,
    };

    // Get old users from localStorage (array)
    const oldUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const emailExists = oldUsers.find((user) => user.email === email);
    if (emailExists) {
      alert("User already exists with this email.");
      return;
    }

    // Save new user
    const updatedUsers = [...oldUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Signup successful!");
    // navigate("/login");
  };

  

 const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // base64 string
    };
    if (file) reader.readAsDataURL(file);
  };


  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Sign up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
        <form onSubmit={handleSubmit}>

<div className="mb-3">
  <label className="form-label">Name</label>
  <input type="text" name="name"  className="form-control" required
    onChange={(e) => setName(e.target.value)}   />
</div>

<div className="mb-3">
  <label className="form-label">Email</label>
  <input type="email"name="email"  className="form-control" required
  onChange={(e) => setEmail(e.target.value)}  />
</div>


<div className="mb-3">
  <label className="form-label">Password</label>
  <input type="password" name="password"  className="form-control" required
  onChange={(e) => setPassword(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Date of birth</label>
  <input type="date" name="Birth"  className="form-control" required
  onChange={(e) => setDate(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Contact Number</label>
  <input type="Number" name="Number"  className="form-control" required
  onChange={(e) => setContact(e.target.value)} />
</div>
<div className="mb-3">
  <label className="form-label">Image</label>
       <input type="file" accept="image/*" onChange={handleImageChange} required />
</div>






<button type="submit" className="btn btn-primary w-100">Sign Up</button>
</form>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default Signup;