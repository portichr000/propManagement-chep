import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


import SigninForm from './signinForm';
import history from '../../history';

class Signin extends Component {
  
  onSubmit = (fields) => {
    this.props.signIn(fields, () => {
      history.push('/dashboard');
    })
  }
  
  render() {
    return (
      <div className='sign-in'>
         <SigninForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    )
  }
}

export default connect(null, actions)(Signin);