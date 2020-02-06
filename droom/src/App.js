import React from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import FormikLoginForm from './components/LoginForm/LoginForm';
import FormikOnboarding from './components/Onboarding/Onboarding';
import CompanyProfilePage from './components/CompanyProfilePage/CompanyProfilePage';
import CompanyMainUI from './components/CompanyMainUI/CompanyMainUI';
import CompanyMatchesPage from './components/CompanyMatchesPage/CompanyMatchesPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/LoginForm" component={FormikLoginForm} />
      <Route exact path="/onboarding" component={FormikOnboarding} />
      <Route exact path ="/CompanyProfilePage" component={CompanyProfilePage} />
      <Route exact path ="/CompanyMainUI" component={CompanyMainUI} />
      <Route exact path ="/CompanyMatchesPage" component={CompanyMatchesPage} />
    </div>
  );
}

export default App;