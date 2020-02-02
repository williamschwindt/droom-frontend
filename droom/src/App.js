import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import FormikOnboarding from './components/Onboarding/Onboarding';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/onboarding" component={FormikOnboarding} />
    </div>
  );
}

export default App;
