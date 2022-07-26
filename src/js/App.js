import React from "react";
import Landing from './Pages/landing';
import Login from './Pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Design from "./Pages/Design";
import ProjectDesign from "./Pages/ProjectDesign";
import {
    HashRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";


const App =() => {

return (
        <Router>
            <Routes>
              <Route path="/" element={<Landing />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/design" element={<Design />} />
              <Route path="/projectdesign" element={<ProjectDesign />} />
\           </Routes>
        </Router>
                
    )
}
export default App;