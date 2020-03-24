import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const CompanyNavBar = (props) => {
    const history = useHistory();
    const signOut = () => {
        localStorage.removeItem("token");
        history.push("/loginform")
    }

    return(
        <nav>
            <h3>Droom</h3> 
            <div>
                <Link to="/companyprofilepage">Profile</Link>
                <Link to="/companymatchespage">Matches ({props.savedSeekers})</Link>
                <Link to="/companymainui">Home</Link>
            </div>
            <button onClick={signOut}>Sign Out</button>
        </nav>
    )
}

export default CompanyNavBar;