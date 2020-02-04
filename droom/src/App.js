import React from 'react';
import './index.scss';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import FormikOnboarding from './components/Onboarding/Onboarding';
import ProfilePage from './components/ProfilePage/ProfilePage';
import MainUI from './components/MainUI/MainUI';
import MatchesPage from './components/MatchesPages/MatchesPage';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/onboarding" component={FormikOnboarding} />
      <Route exact path ="/profile" component ={ProfilePage} />
      <Route exact path ="/home" component ={MainUI} />
      <Route exact path ="/matches" component ={MatchesPage} />
    </div>
  );
}

export default App;
