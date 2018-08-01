import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <h3 className="center link">
      Welcome! <Link to="/signup">Sign Up</Link> or{' '}
      <Link to="/signin">Sign In</Link>
    </h3>
  );
};
