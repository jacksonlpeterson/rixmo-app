import React from "react";

import {Link} from "react-router-dom";

const BackArrow = () =>{
    return (
      <Link to='/' style={{color:'black'}}>
          <i className="fa-solid fa-arrow-left"></i>
    </Link>
    )
}

export default BackArrow;