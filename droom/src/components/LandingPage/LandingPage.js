import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Droom</h1>
            <Link>Sign In</Link>
            <h2>Register as a</h2>
            <Link to="/seekeronboarding" >Job Seeker</Link>
            <Link to="/companyonboarding" >Company</Link>
        </div>
    )
}

export default LandingPage;