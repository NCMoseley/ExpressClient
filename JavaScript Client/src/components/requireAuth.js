import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is a Higher Order component. Please review:
// "https://www.udemy.com/react-redux-tutorial/learn/v4/t/lecture/10476374?start=0"

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      // Don't forget to pass the props through
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
