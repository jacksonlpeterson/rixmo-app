import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import BackArrow from "./BackArrow";
import './Header.css';
import Stack from 'react-bootstrap/Stack';

const Header = () => {
    return(

        <Navbar style={{height:'150px'}} >
                    <Navbar.Brand style={{marginLeft:'50px'}}>
                        <img
                            alt=""
                            src="https://i.ibb.co/PFFtgxX/3-DC-Black.png"
                            width="150%"
                            height="150%"
                            className="d-inline-block align-top"
                            
                            />{' '}
                    </Navbar.Brand>
                    <Stack direction="horizontal" gap={4} style={{marginLeft:'30%'}}> 
                                <a style={{fontFamily:'poppins', fontSize:'40px', fontWeight:'500',}}>Design</a> 
                                <a style={{fontFamily:'poppins', fontSize:'40px', fontWeight:'500'}}> Publish</a>         
                    </Stack>
                    <i class="fa-solid fa-gear" style={{width:'90px', marginLeft:'10%'}}></i>
            </Navbar>

    )
}

export default Header;

