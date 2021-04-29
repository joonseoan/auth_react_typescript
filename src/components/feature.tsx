import React, { Component } from 'react';
import withRequireAuth from '../hoc/requireAuth';

class Feature extends Component {
  render() {
    return(
      <div>This is Feature Component</div>
    );
  }
}

export default withRequireAuth(Feature);