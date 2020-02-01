import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import FormikSeekerOnboarding from './components/SeekerOnboarding/SeekerOnboarding';
import FormikCompanyOnboarding from './components/CompanyOnboarding/CompanyOnboarding';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/seekeronboarding" component={FormikSeekerOnboarding} />
      <Route exact path="/companyonboarding" component={FormikCompanyOnboarding} />
    </div>
  );
}

export default App;
