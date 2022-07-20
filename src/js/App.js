import React from "react";
import Landing from './Pages/landing';
import Login from './Pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Design from "./Pages/Design";
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
           </Routes>
        </Router>
                
    )
}
export default App;