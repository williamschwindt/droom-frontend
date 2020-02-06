import React from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import ProtectedRoute from './components/Utils/ProtectedRoute';
import LandingPage from './components/LandingPage/LandingPage';
import FormikLoginForm from './components/LoginForm/LoginForm';
import FormikOnboarding from './components/Onboarding/Onboarding';
import SeekerProfilePage from './components/ProfilePage/SeekerProfilePage';
import SeekerMainUI from './components/MainUI/SeekerMainUI';
import MatchesPage from './components/MatchesPages/MatchesPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/LoginForm" component={FormikLoginForm} />
      <Route exact path="/onboarding" component={FormikOnboarding} />
      <ProtectedRoute exact path ="/seekerprofile" component ={SeekerProfilePage} />
      <ProtectedRoute exact path ="/home" component ={SeekerMainUI} />
      <ProtectedRoute exact path ="/matches" component ={MatchesPage} />
    </div>
  );
}

export default App;