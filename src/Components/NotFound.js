import React from 'react';
import ErrorImage from '../images/404error.jpg';

// Error page if route does not exist

const NotFound = () => (

  <div className="error-container">
    <h1>Oops... Page not found!</h1>
    <img className="error" src={ErrorImage} alt="Page not found"/>
  </div>
);

export default NotFound;
