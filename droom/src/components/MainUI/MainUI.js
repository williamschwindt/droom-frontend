import React from 'react';
import { Link } from 'react-router-dom';

const MainUI = (props) => {
    return (
        <div>
            <h1>Droom</h1>
            <h2>Find Your Droom Job!</h2>

            <nav>
                <h3>Droom</h3>
                <Link to="/seekerprofile">Profile</Link>
                <Link to="/matches">Matches</Link>
                <Link to="/home">Home</Link>
            </nav>

            
        </div>
    )
}

export default MainUI;