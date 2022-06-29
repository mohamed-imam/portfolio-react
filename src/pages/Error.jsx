import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/img/error-404-message.png";
const Error = () => {
  return (
    <div className='d-flex'>
      <div className='content'>
        <img src={error} alt='404' />
        <h1>404 Page</h1>
        <p>back to homepage</p>
        <Link to='/' className='btn btn-primary'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
