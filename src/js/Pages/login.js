import React from "react";
import NavbarTop from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import './login.css';
import Footer from "../components/Footer";
import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div>
            <NavbarTop />
              <div  style={{marginTop:'5%', width:'35%', marginLeft:"32%", marginRight:'32%'}}> 
                <Card >
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3 card1" controlId="formGroupEmail">
                                <Form.Label style={{fontSize:'18px', fontFamily:'poppins', fontWeight:'500'}}>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupPassword">
                                <Form.Label style={{fontSize:'18px', fontFamily:'poppins', fontWeight:'500'}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                               <div style={{textAlign: "center", fontSize: '15px', fontFamily:'poppins',fontWeight:'500' }}>
                                <div>Forgot Password | Create Account</div>
                              </div> 
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-center">
                                <Link to='/design'>
                                    <Button variant="outline-dark" 
                                    style={{width: '100px', fontSize:'18px', marginTop:'20px', fontFamily:'poppins', fontWeight:'500'}}>Sign In</Button>
                                </Link>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
           <Footer /> 
        </div>
    )
}

export default Login;