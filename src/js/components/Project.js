import React from "react";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Project = () => {
    return(
    <Card style={{ width: '20rem', margin:"50px"}}>
      <Card.Body>
        <Card.Title>Dumpster Fires</Card.Title>
        <Card.Text>
         <Stack gap={3}>
            <div>150 Assets</div>
            <div>15 Traits</div>
            <div>1.5 GB</div>
         </Stack>
        </Card.Text>
        <Link to='/projectdesign'>
            <Button variant="outline-dark" style={{width: '100px', fontSize:'18px', margin:'20px', fontFamily:'poppins', fontWeight:'500'}}>Design</Button>
        </Link>
        <Button variant="outline-dark" style={{width: '100px', fontSize:'18px', margin:'20px', fontFamily:'poppins', fontWeight:'500'}}>Publish</Button>
      </Card.Body>
    </Card>
    );
}

export default Project;
