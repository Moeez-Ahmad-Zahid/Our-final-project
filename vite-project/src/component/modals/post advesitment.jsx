import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';



function PostAdForm({onNewAd}) {
 
 const [show,setShow] = useState(false)

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
const [form, setForm] = useState({
 name: '',
  price: '',
  description: '',
  features: '',
  startDate: '', // Changed
  endDate: '',   // Changed
  category: '',
  cityArea: '',
  type: '',
  image: '' ,
});

const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setForm(prev => ({ ...prev, image: reader.result }));
  };
  reader.readAsDataURL(file);
};

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (!form.name || !form.price || !form.description) {
    alert('Please fill required fields');
    return;
  }

  const postData = {
    ...form,
    price: Number(form.price),
    startDate: form.startDate ? new Date(form.startDate) : null,
    endDate: form.endDate ? new Date(form.endDate) : null,
  };

  try {
    const res = await axios.post('http://localhost:3001/api/posts', postData);
    alert('Post created!');
    console.log(res.data);
    setForm({
      name: '',
      price: '',
      description: '',
      features: '',
      startDate: '',
      endDate: '',
      category: '',
      cityArea: '',
      type: '',
      image: '',
    });
    handleClose();
  } catch (error) {
    console.error(error);
    alert('Error creating post');
  }
};

  return (
    <>


      <Button variant="success"  onClick={handleShow}>
        Post Advertisment<FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post Advertisment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="border p-4 rounded shadow-sm" onSubmit={handleSubmit}>
            <h2>Post Advertisement</h2>


            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input type="number" name="price" value={form.price}  onChange={handleChange} className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea type='text' name="description" value={form.description} onChange={handleChange} className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Features</label>
              <textarea name="features" value={form.features}  onChange={handleChange} className="form-control" />
            </div>

            <div className="mb-3 d-flex gap-3">
              <div>
                <label className="form-label">Starts On</label>
                <input type="date" name="startDate" value={form.startDate}  onChange={handleChange} className="form-control" required />
              </div>
              <div>
                <label className="form-label">Ends On</label>
                <input type="date" name="endDate" value={form.endDate}  onChange={handleChange} className="form-control" required />
              </div>
            </div>

            <div className="mb-3 d-flex gap-3">
              <select name="category" value={form.category} onChange={handleChange} className="form-select" required>
                <option value="">Select Category</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Jobs">Jobs</option>
              </select>

              <select name="cityArea" value={form.cityArea} onChange={handleChange} className="form-select" required>
                <option value="">Select City Area</option>
                <option value="Downtown">Downtown</option>
                <option value="Suburbs">Suburbs</option>
              </select>

              <select name="type" value={form.type} onChange={handleChange} className="form-select" required>
                <option value="">Select Type</option>
                <option value="Sale">Sale</option>
                <option value="Rent">Rent</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <input type="file" accept="image/*" onChange={handleImageChange}className="form-control" />
            </div>

            {/* <button type="submit" className="btn btn-primary">Post Advertisement</button>
      </form> */}


       

            <button type="submit" className="btn btn-primary">Post Advertisement</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostAdForm;

// import Modal from 'react-bootstrap/Modal';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';

// function PostAdForm({ onSubmit }) {
//   const [ads, setAds] = useState([]); // ✅ added this

//   const [ad, setAd] = useState({
//     name: '',
//     price: '',
//     description: '',
//     features: '',
//     startDate: '',
//     endDate: '',
//     category: '',
//     cityArea: '',
//     type: '',
//     image: ''
//   });

//   // ✅ Fetch ads on load
//   useEffect(() => {
//     fetch('http://localhost:3001/ads')
//       .then((res) => res.json())
//       .then((data) => setAds(data))
//       .catch((err) => console.error(err));
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setAd({ ...ad, image: reader.result });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleChange = (e) => {
//     setAd({
//       ...ad,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     fetch('http://localhost:3001/ads', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(ad),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setAds([...ads, data]); // Add new ad to the list
//         onSubmit(data); // if needed in parent
//         setAd({
//           name: '', price: '', description: '', features: '',
//           startDate: '', endDate: '', category: '', cityArea: '', type: '', image: ''
//         });
//         handleClose(); // Close modal after submit
//       })
//       .catch((err) => console.error(err));
//   };

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="success" onClick={handleShow}>
//         Post Advertisement <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Post Advertisement</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input type="text" name="name" value={ad.name} onChange={handleChange} className="form-control" required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Price</label>
//               <input type="number" name="price" value={ad.price} onChange={handleChange} className="form-control" required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Description</label>
//               <textarea name="description" value={ad.description} onChange={handleChange} className="form-control" required />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Features</label>
//               <textarea name="features" value={ad.features} onChange={handleChange} className="form-control" />
//             </div>

//             <div className="mb-3 d-flex gap-3">
//               <div>
//                 <label className="form-label">Starts On</label>
//                 <input type="date" name="startDate" value={ad.startDate} onChange={handleChange} className="form-control" required />
//               </div>
//               <div>
//                 <label className="form-label">Ends On</label>
//                 <input type="date" name="endDate" value={ad.endDate} onChange={handleChange} className="form-control" required />
//               </div>
//             </div>

//             <div className="mb-3 d-flex gap-3">
//               <select name="category" value={ad.category} onChange={handleChange} className="form-select" required>
//                 <option value="">Select Category</option>
//                 <option value="Real Estate">Real Estate</option>
//                 <option value="Vehicles">Vehicles</option>
//                 <option value="Jobs">Jobs</option>
//               </select>

//               <select name="cityArea" value={ad.cityArea} onChange={handleChange} className="form-select" required>
//                 <option value="">Select City Area</option>
//                 <option value="Downtown">Downtown</option>
//                 <option value="Suburbs">Suburbs</option>
//               </select>

//               <select name="type" value={ad.type} onChange={handleChange} className="form-select" required>
//                 <option value="">Select Type</option>
//                 <option value="Sale">Sale</option>
//                 <option value="Rent">Rent</option>
//               </select>
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Image</label>
//               <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
//             </div>

//             <button type="submit" className="btn btn-primary">Post Advertisement</button>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default PostAdForm;

