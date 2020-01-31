import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    return (
        <div>
            <h1>Register as</h1>
            <Link to="/seekeronboarding" >A Job Seeker</Link>
            <h2>or</h2>
            <Link to="/companyonboarding" >A Company</Link>


        </div>
    )
}



export default SignUpForm;