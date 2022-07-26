import React from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Stack from 'react-bootstrap/Stack';

const Design = () => {
    return(
        <div>
            <Header />
            <h3 style={{marginLeft:"5%"}}>Current project <i class="fa-solid fa-circle-plus"></i></h3>
            <Stack direction="horizontal" gap={3}>
                <Project />
                <Project />
                <Project />
             </Stack>

        </div>
        
    )

}

export default Design;