import React from 'react';
import { Link } from 'react-router-dom';

const SeekerMatchesPage = () => {
    return (
        <div className="matches-page-container">
            <nav>
                <h3>Droom</h3>
                <div>
                    <Link to="/seekerprofile">Profile</Link>
                    <Link to="/matches">Matches</Link>
                    <Link to="/seekerhome">Home</Link>
                </div>
            </nav>

            
        </div>
    )
}

export default SeekerMatchesPage;