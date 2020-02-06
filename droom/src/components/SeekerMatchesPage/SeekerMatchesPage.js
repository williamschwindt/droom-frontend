import React from 'react';
import { Link } from 'react-router-dom';

const SeekerMatchesPage = () => {
    return (
        <div className="matches-page-container">
            <nav>
                <h3>Droom</h3>
                <div>
                    <Link to="/seekerprofilepage">Profile</Link>
                    <Link to="/seekermatchespage">Matches</Link>
                    <Link to="/seekermainui">Home</Link>
                </div>
            </nav>

            
        </div>
    )
}

export default SeekerMatchesPage;