import React, { Component } from 'react';
import {connect} from 'react-redux';
import { actionCreators, AuthUserAction } from '../../app_state';
const { signout } = actionCreators;

interface SignoutProps {
  signout: () => AuthUserAction;
}

class Signout extends Component<SignoutProps> {

  componentDidMount () {
    this.props.signout();
  }

  render() {
    return <div>Sorry to see you!</div>
  };
}

export default connect(null, { signout })(Signout);