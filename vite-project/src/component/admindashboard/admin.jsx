import React from "react";
import './admin.css';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { useState, useEffect, Button } from "react";
import axios from 'axios';



export default function Dashboard({ adData, onAdUpdated }) {

  // User
   const [user, setUser] = useState(null);
  

  // Form and modal state
  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    features: '',
    startsOn: '',
    endsOn: '',
    category: '',
    cityArea: '',
    type: '',
  });
  

  const [imageBase64, setImageBase64] = useState('');
  const [ads, setAds] = useState([]); // ✅ should be an array

  const [show, setShow] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  const [showuser, setUserShow] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch user from localStorage once
 useEffect(() => {
    const loggedUser = localStorage.getItem("loggedInUser");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

 

  // Fetch ads on load
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/posts')
      .then((res) => setAds(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Reset form when modal opens
  useEffect(() => {
    if (show) {
      setForm({
        name: '',
        price: '',
        description: '',
        features: '',
        startsOn: '',
        endsOn: '',
        category: '',
        cityArea: '',
        type: '',
      });
      setImageBase64('');
    }
  }, [show]);

  if (!user) return <p>No user logged in.</p>; // ⛔ Must be after hooks

  // ---------------- Handlers ----------------

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleUserShow = () => setUserShow(true);
  const handleUserClose = () => setUserShow(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = (ad) => {
    setSelectedAd(ad);
    setEditModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adId = selectedAd?._id;
    if (!adId) {
      alert('Invalid ad data');
      return;
    }

    try {
      const res = await axios.put(`http://localhost:3001/api/posts/${adId}`, form);
      alert('Ad updated successfully!');
      setAds((prevAds) =>
        prevAds.map((ad) => (ad._id === adId ? res.data : ad))
      );
      handleClose();
    } catch (error) {
      console.error(error);
      alert('Error updating ad.');
    }
  };

  const handleSave = async () => {
    const response = await fetch('http://localhost:3001/api/user/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    if (data.success) {
      alert('Updated successfully!');
      setIsEditing(false);
    } else {
      alert('Error updating profile');
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3001/api/posts/${id}`);
      setAds((prevAds) => prevAds.filter((ad) => ad._id !== id));
    } catch (error) {
      console.error('Failed to delete ad:', error);
    }
  };

 
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // remove only current user
     setUser(null);
    alert("Logged out successfully.");
    navigate("/login"); // redirect to login or homepage
  };



  return (
    <div className="dashboard-container">
      <div className="dashboard-header"> User Dashboard </div>

      <div className="dashboard-content">










        {/* Sidebar */}


        <Modal show={showuser} onHide={handleUserClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSave}>
              <div className="mb-3">
                <label className="form-label">name</label>
                <input type="name" name="name" onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">email</label>
                <input type="email" name="email" onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Contact Number</label>
                <input type="number" name="Contact number" onChange={handleChange} className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of birth</label>
                <input type="date" name="Date of birth" onChange={handleChange} className="form-control" required />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={handleUserClose}>
              Close
            </button>
            <button variant="primary" onClick={handleUserClose}>
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>

<div className="admin-container">
        <div className="profile-info" style={{margin:"10px",width:"30%", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
           <img src={user.image} className="profile-img"  alt="Profile" />
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Contact Number: {user.contact} </p>
          <p>Birth Date: {user.date} </p>
          <button onClick={handleUserShow} className="btn btn-success">Edit Info</button>
          <button onClick={handleLogout} className="btn btn-primary" style={{ marginLeft: "10px" }}>Logout</button>

        </div>
        {/* Main Content */}
        <div className="ads-section">
          <h3>Posted Advertisements</h3>
          <Row>
            <div className='m-2 mt-3'>
              <Col className='Col-4'>

                {ads.map((ad, index) => (


                  <div key={index} className="card mb-4 shadow-sm">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={ad.image}
                          alt={ad.name}
                          className="img-fluid rounded-start"
                          style={{ height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{ad.name}</h5>
                          <p className="card-text">{ad.description}</p>
                          <p className="card-text"><strong>Price:</strong> {ad.price}</p>
                          <p className="card-text"><strong>City Area:</strong> {ad.cityArea}</p>
                          <div>
                            <button className="btn btn-danger me-2" onClick={() => handleDelete(ad._id)}>Delete</button>
                            <button
                              className="btn btn-warning me-2"
                              onClick={() => {
                                handleEditClick(ad); // set ad for editing
                                handleShow();        // show modal
                              }}
                            >
                              Edit
                            </button>
                            <button className="btn btn-success">View More</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Col>
            </div>
          </Row>
</div>
          {/* edit profile */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Advertisment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="border p-4 rounded shadow-sm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" name="name" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input type="number" name="price" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea type='text' name="title" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Features</label>
                  <textarea name="features" onChange={handleChange} className="form-control" />
                </div>

                <div className="mb-3 d-flex gap-3">
                  <div>
                    <label className="form-label">Starts On</label>
                    <input type="date" name="startDate" onChange={handleChange} className="form-control" />
                  </div>
                  <div>
                    <label className="form-label">Ends On</label>
                    <input type="date" name="endDate" onChange={handleChange} className="form-control" />
                  </div>
                </div>

                <div className="mb-3 d-flex gap-3">
                  <select name="category" onChange={handleChange} className="form-select" >
                    <option value="">Select Category</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Jobs">Jobs</option>
                  </select>

                  <select name="cityArea" onChange={handleChange} className="form-select" >
                    <option value="">Select City Area</option>
                    <option value="Downtown">Downtown</option>
                    <option value="Suburbs">Suburbs</option>
                  </select>

                  <select name="type" onChange={handleChange} className="form-select" >
                    <option value="">Select Type</option>
                    <option value="Sale">Sale</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
                </div>


                <button className="btn btn-primary" onClick={() => setEditingAd(null)}>Cancel</button>
                <button className="btn btn-primary" type="submit">Save</button>


              </form>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>


        </div>
      </div>
    </div>


  );
};






