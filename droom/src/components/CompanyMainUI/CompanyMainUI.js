import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompanyMainUI = (props) => {
  const [seekers, setSeekers] = useState([]);

  console.log(seekers);

  useEffect(() => {
    axios
      .get("https://droom-node-server.herokuapp.com/api/seekers")

      .then(res => {
        console.log(res);
        setSeekers(res.data);
      })

      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="company-main-ui-container">
      <nav>
        <h3>Droom</h3>
        <div>
          <Link to="/companyprofilepage">Profile</Link>
          <Link to="/companymatchespage">Matches</Link>
          <Link to="/companymainui">Home</Link>
        </div>
      </nav>

      <div className="company-main-ui">
        <h1>Find Employees</h1>
        <div className="jobs">
          {seekers.map(seekers => {
            return (
              <div key={seekers.id} className="job-card">
                <h1>{seekers.name}</h1>
                <h2>{seekers.location}</h2>
                <div>
                  <button>X</button>
                  <button>Save</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default CompanyMainUI;