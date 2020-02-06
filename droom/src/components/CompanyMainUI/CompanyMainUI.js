import React from 'react';
import { Link } from 'react-router-dom';

const CompanyMainUI = (props) => {
  return (
    <div className="company-main-ui-container">
      <nav>
        <h3>Droom</h3>
        <div>
          <Link to="/CompanyProfilePage">Profile</Link>
          <Link to="/CompanyMatchesPage">Matches</Link>
          <Link to="/CompanyMainUI">Home</Link>
        </div>
      </nav>
    </div>
  )
}

export default CompanyMainUI;