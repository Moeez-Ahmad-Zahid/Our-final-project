// import React from 'react';
import './App.css'
import React, { createContext, useContext, useState,useEffect } from 'react';
import { Route,Routes } from 'react-router-dom'
import Layout from './component/layout';
import { Page1, About, Contact} from './component/outlets/pages';
import Login from './component/modals/loginAndsign';
import Signup from './component/modals/sign up';
import Dashboard from './component/admindashboard/admin.jsx';
import {Moredetails, Moredetails2, Moredetails3,Moredetails4 } from './component/outlets/moredetail';
import { Advertisement } from './component/advertismentcategories/advertismentcategories';
import axios from 'axios';



function App() {
  
   const [ads, setAds] = useState([]);


  useEffect(() => {
    // Backend se data fetch karo
    axios.get('http://localhost:3001/api/posts')
      .then(response => {
        setAds(response.data); // jo data backend se aaya usay state me set karo
      })
      .catch(error => {
        console.error('Error fetching ads:', error);
      });
  }, []);
  const [user, setUser] = useState(null);

  return (
    <>
     
   
  <Routes>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
    <Route  element = {<Layout/>}>
    <Route path='/' element={  <Page1 ads={ads} />}/>
    <Route path='/Dashboard' element={<Dashboard  ads={ads}/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Moredetails' element={<Moredetails/>} />
    <Route path='/Moredetails2' element={<Moredetails2/>} />
    <Route path='/Moredetails3' element={<Moredetails3/>} />
    <Route path='/Moredetails4' element={<Moredetails4/>} />
    <Route path='/Advertisement' element={<Advertisement/>} />
  
  </Route>
  </Routes>



    </>
  )
}

export default App;

