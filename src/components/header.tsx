import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AuthReducerState } from '../app_state';
import './heaser.style.css';

interface HeaderProps {
  authenticated: string;
}
class Header extends React.Component<HeaderProps> {

  renderLinks () {
    if (this.props.authenticated) {
      return <div>
        <Link to="/signout">Sign out</Link>
        <Link to="/feature">Feature</Link>
      </div>
    } else {
      return <div>
        <Link to="/signup">Sign up</Link>
        <Link to="/signin">Sign in</Link>
      </div>
    }
  }

  render () {
    return (
      // [IMPORTANT]
      // In css "Link" is a anchor tag!!!!!!!!!
      <div className="header">
        <Link to="/">Redux Auth</Link>
        { this.renderLinks() }
      </div>
    );
  }
};

const mapStateToProps = ({ auth }: { auth: AuthReducerState }) => {
  return {
    authenticated: auth.authenticated,
  }
}

export default connect(mapStateToProps)(Header);