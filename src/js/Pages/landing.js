import React from "react";
import { Container } from "react-bootstrap";
import NavbarTop from '../components/Navbar';
import Button from 'react-bootstrap/Button';
import Footer from "../components/Footer";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
const Landing = () => {
    return(
    <div>
        <NavbarTop />
        <Container className="align-items-center">
            <div style={{fontSize:'38px', textAlign:'center', marginTop:'49px', fontWeight:'500'}}>Welcome to </div>
            <div style={{fontSize:'90px', textAlign:'center',fontWeight:'500' }}>3D Combinator</div>
        </Container>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5%'}}>
         <Link to="/login">
            <Button variant="outline-dark" 
            style={{width: '100px', fontSize:'20px'}}>Start</Button>
         </Link> 
        </div>
        <Footer />
    </div>
        );

}

export default Landing;