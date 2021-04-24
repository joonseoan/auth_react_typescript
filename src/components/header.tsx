import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render () {
    return (
      <div>
        <Link to="/">Redux Auth</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
        <Link to="/signout">Sign out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
};

export default Header;