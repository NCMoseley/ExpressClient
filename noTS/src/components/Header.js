import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderLinks() {
    const slug = window.location.pathname.substring(1).toString();
    if (this.props.authenticated) {
      return (
        <div className="header link">
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div className="header link">
          {slug === 'signup' ? (
            <Link onClick={this.renderLinks} to="/signin">
              Existing users Sign In
            </Link>
          ) : (
            <Link onClick={this.renderLinks} to="/signup">
              Create a new account
            </Link>
          )}
        </div>
      );
    }
  }
  render() {
    return (
      <div className="header link">
        <Link to="/">Client with Auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
