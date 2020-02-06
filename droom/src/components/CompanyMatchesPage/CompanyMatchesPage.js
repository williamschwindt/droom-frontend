import React from 'react';
import { Link } from 'react-router-dom';

const CompanyMatchesPage = () => {
  return (
    <div className="company-matches-page-container">
      <nav>
        <h3>Droom</h3>
        <div>
          <Link to="/companyprofilepage">Profile</Link>
          <Link to="/companymatchespage">Matches</Link>
          <Link to="/companymainui">Home</Link>
        </div>
      </nav>


    </div>
  )
}

export default CompanyMatchesPage;