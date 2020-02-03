import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Droom</h1>
            <Link to="/LoginForm">Sign In</Link>
        </div>
    )
}

export default LandingPage;
