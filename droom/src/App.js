import React from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/Utils/ProtectedRoute';
import LandingPage from './components/LandingPage/LandingPage';
import FormikLoginForm from './components/LoginForm/LoginForm';
import FormikOnboarding from './components/Onboarding/Onboarding';

import CompanyProfilePage from './components/CompanyProfilePage/CompanyProfilePage';
import CompanyMainUI from './components/CompanyMainUI/CompanyMainUI';
import CompanyMatchesPage from './components/CompanyMatchesPage/CompanyMatchesPage';

import SeekerProfilePage from './components/SeekerProfilePage/SeekerProfilePage';
import SeekerMainUI from './components/SeekerMainUI/SeekerMainUI';
import SeekerMatchesPage from './components/SeekerMatchesPage/SeekerMatchesPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/loginform" component={FormikLoginForm} />
      <Route exact path="/onboarding" component={FormikOnboarding} />

      <ProtectedRoute exact path ="/CompanyProfilePage" component={CompanyProfilePage} />
      <ProtectedRoute exact path ="/companymainui" component={CompanyMainUI} />
      <ProtectedRoute exact path ="/companymatchespage" component={CompanyMatchesPage} />

      <ProtectedRoute exact path ="/seekerprofile" component ={SeekerProfilePage} />
      <ProtectedRoute exact path ="/seekermainui" component ={SeekerMainUI} />
      <ProtectedRoute exact path ="/seekermatchespage" component ={SeekerMatchesPage} />
    </div>
  );
}

export default App;