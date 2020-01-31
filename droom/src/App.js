import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import SignUpForm from './components/SignUpForm/SignUpForm';
import FormikSeekerOnboarding from './components/SeekerOnboarding/SeekerOnboarding';
import CompanyOnboarding from './components/CompanyOnboarding/CompanyOnboarding';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/signupform" component={SignUpForm} />
      <Route exact path="/seekeronboarding" component={FormikSeekerOnboarding} />
      <Route exact path="/companyonboarding" component={CompanyOnboarding} />
    </div>
  );
}

export default App;
