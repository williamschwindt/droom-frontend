import React from 'react';
import { Link } from 'react-router-dom';

const MainUI = (props) => {
    return (
        <div>
            <h1>Droom</h1>
            <h2>Find Your Droom Job!</h2>

            <nav>
                <Link to="/profile" />
                <Link to="/matches" />
                <Link to="/home" />
            </nav>

            
        </div>
    )
}

export default MainUI;