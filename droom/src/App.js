import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import FormikLoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/LoginForm" component={FormikLoginForm} />
    </div>
  );
}

export default App;