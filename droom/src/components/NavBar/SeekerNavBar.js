import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const SeekerNavBar = (props) => {
    const history = useHistory();
    const signOut = () => {
        localStorage.removeItem("token");
        history.push("/loginform")
    }

    return(
        <nav>
            <h3>Droom</h3> 
            <div>
                <Link to="/seekerprofilepage">Profile</Link>
                <Link to="/seekermatchespage">Matches ({props.savedJobs})</Link>
                <Link to="/seekermainui">Home</Link>
            </div>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default SeekerNavBar;