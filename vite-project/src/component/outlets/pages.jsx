import { Col, Row, Carousel, Button } from 'react-bootstrap';
import React from 'react';
// import car1 from '../component/image/car1.jpg';
import car1 from '../image/car1.jpg';
import { useNavigate } from 'react-router-dom'
import './pages.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import audi from '../image/audi.jpg';
import car3 from '../image/car3.jpg';
import car4 from '../image/car4.jpg';
import havel from '../image/havel.png';
import electric from '../image/electric.png';
import ferrari from '../image/ferrari.png';
import car5 from '../image/car5.png';
import carpic from '../image/car picture.jpg';
import carpic2 from '../image/car picture2 .jpg';
import carpic3 from '../image/car picture3.jpg';
import carpic4 from '../image/car picture4.jpg';
import carpic5 from '../image/car picture5.jpg';
import ferrari2 from '../image/ferrari2.png';



export function Page1( {ads} ) {


  const Navigate = useNavigate();


  return (
    <>
      <div className='box-1'>
        <Carousel>
          <Carousel.Item>
            <img className='img' src={ferrari} alt="" />
            <Carousel.Caption className='caption'>
              <h1>Shift Into Gear:</h1>
              <h2>Your Destination for Car Excellence
              </h2>
              <p>Drive Your Dream: Find Your Perfect Car Today</p>
              <div className='main-btn'>
                <div className='btn-1'>
                  <Button variant='success' style={{ padding: '10px 30px 10px 30px' }}>Search a Car</Button>
                </div>
                <div className='btn-1'>
                  <Button variant='primary' style={{ padding: '10px 30px 10px 30px' }}>Post Advertisment</Button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ferrari2} alt="" />
            <Carousel.Caption className='caption'>
              <h1>Shift Into Gear:</h1>
              <h2>Your Destination for Car Excellence
              </h2>
              <p>Drive Your Dream: Find Your Perfect Car Today</p>
              <div className='main-btn'>
                <div className='btn-1'>
                  <Button variant='success' style={{ padding: '10px 30px 10px 30px' }}>Search a Car</Button>
                </div>
                <div className='btn-1'>
                  <Button variant="success" >
                    Post Advertisment
                  </Button>

                </div>
              </div>



            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className='main'>
          <input type="text" className='input' placeholder='Keyword' />
          <select name="type" className="form-select" required>
            <option value="">Select Categories </option>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </select>
          <select name="cityArea" className="form-select" required>
            <option value="">Select City Area</option>
            <option value="Downtown">Downtown</option>
            <option value="Suburbs">Suburbs</option>
          </select>
          <input type="text" className='input-2' placeholder='Search' />
        </div>
      </div>


      <h1 style={{ color: 'green', textAlign: 'center', margin: '20px' }}>
        Explore by Categories</h1>


      
<Row>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={car4} alt="" />
            <div className='text'>
              <h5>Sedan</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={car5} alt="" />
            <div className='text'>
              <h5>BMW</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
        



      <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={car4} alt="" />
            <div className='text'>
              <h5>Sedan</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={car5} alt="" />
            <div className='text'>
              <h5>BMW</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
</Row>

        
      <Row className='d-flex'>
        <div className='m-2 mt-3'>
          <Col className='Col-4'>

            {ads.map((ad, index) => (
          <div key={ad._id || index}>


                <div className='box-4'>

                  {ad.image && (
                    <img className='user-pic' src={ad.image} alt="Ad" />)}
                  <div className='text'>
                    <h5>{ad.name}</h5>
                    <p style={{ color: 'green' }}>{ad.price}</p>
                  </div>
                </div>


              </div>
            ))}
          </Col>
        </div>
      </Row>
      

      <Row className='m-2 mt-5'>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={electric} alt="" />
            <div className='text'>
              <h5>Electric</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={havel} alt="" />
            <div className='text'>
              <h5>SUV</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={audi} alt="" />
            <div className='text'>
              <h5>Sedan</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
        <Col className='Col-3'>
          <div className='box'>
            <img className='image' src={ferrari} alt="" />
            <div className='text'>
              <h5>Ferrari</h5>
              <p style={{ color: 'green' }}>11 Cars</p>
            </div>
          </div>
        </Col>
      </Row> 
      {/* Lastest posting */}
      <Row className='m-4 mt-4'>
        <Col className='Col-6'>
          <div className='container-2'>
            <img className='lastest-pic' src={carpic} alt="" />
            <div className='text'>
              <h5>Jaguar F-Type Convertible </h5>
              <p>The Jaguar F-Type Convertible Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nemo, doloribus eos blanditiis error, libero repudiandae nulla quo corporis repellat ipsum reprehenderit ad dolorum asperiores dicta assumenda ducimus ab exercitationem?</p>
              <Button variant='success' onClick={() => Navigate('./Moredetails')}>More Details</Button>
            </div>
          </div>
        </Col>
        <Col className='Col-6'>
          <div className='container-2'>
            <img className='lastest-pic' src={carpic2} alt="" />
            <div className='text'>
              <h5>Ford Mustang Convertible </h5>
              <p>The Jaguar F-Type Convertible Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nemo, doloribus eos blanditiis error, libero repudiandae nulla quo corporis repellat ipsum reprehenderit ad dolorum asperiores dicta assumenda ducimus ab exercitationem?</p>
              <Button variant='success' onClick={() => Navigate('./Moredetails2')}>More Details</Button>
            </div>

          </div>
        </Col>
      </Row>




       <Row className='m-4 mt-4'>
        <Col className='Col-6'>
          <div className='container-2'>
            <img className='lastest-pic' src={carpic3} alt="" />
            <div className='text'>
              <h5>Jaguar F-Type Convertible </h5>
              <p>The Jaguar F-Type Convertible Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nemo, doloribus eos blanditiis error, libero repudiandae nulla quo corporis repellat ipsum reprehenderit ad dolorum asperiores dicta assumenda ducimus ab exercitationem?</p>
              <Button variant='success' onClick={() => Navigate('./Moredetails3')}>More Details</Button>
            </div>

          </div>
        </Col>


        <Col className='Col-6'>
          <div className='container-2'>
            <img className='lastest-pic' src={carpic4} alt="" />
            <div className='text'>
              <h5>Ford Mustang Convertible </h5>
              <p>The Jaguar F-Type Convertible Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt nemo, doloribus eos blanditiis error, libero repudiandae nulla quo corporis repellat ipsum reprehenderit ad dolorum asperiores dicta assumenda ducimus ab exercitationem?</p>
              <Button variant='success' onClick={() => Navigate('./Moredetails4')}>More Details</Button>
            </div>

          </div>
        </Col> 


      </Row>
      






    </>
  )
}

export function About() {
  return (
    <>
      <div className="banner">
        <img src={carpic} alt="Contact Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1>About Us</h1>
        </div>
      </div>
      <h2 style={{ color: 'green', textAlign: 'center', margin: '20px' }}>About Us </h2>
      <div className="about-container">
        {/* Image Section */}
        <div className="image-section">
          <img src={carpic4} alt="Car 1" />
          <img src={carpic2} alt="Car 2" />
          <img src={carpic5} alt="Car 3" />
          <img src={car1} alt="Car 4" />
        </div>

        {/* Text Section */}
        <div className="text-section">
          <h1>PakClassified is a comprehensive online platform where users can browse, buy, sell, and compare cars</h1>
          <p>
            Welcome to PakClassified, your premier destination for all things automotive in Pakistan.
            Our platform offers a seamless experience for users looking to browse, buy, sell, and compare cars.
            Whether you're a car enthusiast or a first-time buyer, we ensure a smooth and hassle-free experience.
          </p>

          {/* Features List */}
          <ul>
            <li>✔ Customer Support</li>
            <li>✔ Technical Assistance</li>
            <li>✔ Feedback and Suggestions</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export function Contact() {
  return (
    <>
      <div className="banner">
        <img src={carpic3} alt="Contact Banner" className="banner-image" />
        <div className="banner-overlay">
          <h1>Contact</h1>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center mb-4">Contact For Any Query</h2>

        <div className="row">
          {/* Contact Information */}
          <div className="col-md-4 text-center">
            <div className="p-3 border rounded bg-light">
              <i className="fas fa-map-marker-alt fa-2x mb-2"></i>
              <p>Gulberg III, Lahore</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="p-3 border rounded bg-light">
              <i className="fas fa-envelope fa-2x mb-2"></i>
              <p>evs@gmail.com</p>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div className="p-3 border rounded bg-light">
              <i className="fas fa-phone fa-2x mb-2"></i>
              <p>0300 1 387 387</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="row mt-4">
          <div className="col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1635210886366!2d74.33457157398033!3d31.492188848536685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043fb52276b5%3A0x2682e1fa63fcd065!2sEVS%20Training%20Institute%20Lahore!5e0!3m2!1sen!2s!4v1741035375323!5m2!1sen!2s"
              width="100%"
              height="350px"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">

            </iframe>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="p-4 border rounded bg-light">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>

                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>

                <div className="mb-3">
                  <textarea className="form-control" placeholder="Leave a message here" rows="4" required></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}