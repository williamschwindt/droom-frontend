import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Droom</h1>
            <Link>Sign In</Link>
            <Link to="/onboarding" >Register</Link>
        </div>
    )
}

export default LandingPage;