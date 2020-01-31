import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h1>Landing page</h1>
            <Link>Sign In</Link>
            <Link to="/signupform" >Register</Link>
        </div>

    )
}

export default LandingPage;