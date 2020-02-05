import React from 'react';
import { Link } from 'react-router-dom';

const MainUI = (props) => {
    return (
        <div className="main-ui-container">
            <nav>
                <h3>Droom</h3>
                <div>
                    <Link to="/seekerprofile">Profile</Link>
                    <Link to="/matches">Matches</Link>
                    <Link to="/home">Home</Link>
                </div>
            </nav>

            
        </div>
    )
}

export default MainUI;