import React from "react";
import Header from "../components/Header";
import ProjectDetails from "../components/ProjectDetails";
import ProjectNotes from "../components/ProjectNotes";
import Card from 'react-bootstrap/Card';


const ProjectDesign = () => {
    return(
        <div>
            <Header />
            <h1 style={{marginLeft:'50px'}}>Dumpster Fires</h1>
            <Card>
                <ProjectDetails />
                <ProjectNotes />
            </Card>
        </div>
    )
}

export default ProjectDesign;