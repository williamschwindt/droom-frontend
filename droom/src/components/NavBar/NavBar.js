import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav>
            <h3>Droom</h3>
            <div>
                <Link to="/seekerprofilepage">Profile</Link>
                <Link to="/seekermatchespage">Matches ({props.savedJobs})</Link>
                <Link to="/seekermainui">Home</Link>
            </div>
        </nav>
    )
}

export default NavBar;