import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm.js';
import SignUpForm from '../SignUpForm/SignUpForm.js';

function LandingPage() {
  return (
    <div className="">
      <h1>Landing Page</h1>
      <Route path="/LoginForm" component={LoginForm} />
      <Route path="/SignupForm" component={SignUpForm} />
    </div>
  )
}

export default LandingPage;