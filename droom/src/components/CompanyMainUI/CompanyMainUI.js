import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyNavBar from '../NavBar/CompanyNavBar';

const CompanyMainUI = () => {
  const [seekers, setSeekers] = useState([]);
  const [savedSeekers, setSavedSeekers] = useState(0);

  useEffect(() => {
    axios
      .get("https://droom-node-server.herokuapp.com/api/seekers")

      .then(res => {
        setSeekers(res.data);
        findNumberOfSavedSeekers();
      })

      .catch(err => {

      })
  }, [])

  const userID = localStorage.getItem("userid");

  const ClickHandler = (e) => {
    const seekerID = e.target.value;
    const theSeeker = seekers[seekerID - 299];

    const savedSeeker = {
      seeker_id: theSeeker.id,
      seeker_name: theSeeker.name,
      seeker_location: theSeeker.location
    };

    axios
    .post(`https://droom-node-server.herokuapp.com/api/companies/${userID}/saved`, savedSeeker)

    .then(res => {
      findNumberOfSavedSeekers();
    })
    .catch(err => {
    })
  }  

  const handleDelete = (e) => {
    const id = e.target.value;
    const index = id -1;
    const newSeekers = seekers.filter(seekers => {
      return seekers.id - 1 !== index;
    });
    setSeekers(newSeekers);
  }

  const findNumberOfSavedSeekers = () => {
    axios.get(`https://droom-node-server.herokuapp.com/api/companies/${userID}/saved`)
    .then(res => {
      setSavedSeekers(res.data.length);
    })
  }

  return (
    <div className="company-main-ui-container">
      <CompanyNavBar savedSeekers={savedSeekers}/>
      <div className="company-main-ui">
        <h1>Find Employees</h1>
        <div className="jobs">
          {seekers.map(seekers => {
            return (
              <div key={seekers.id} className="job-card">
                <h1>{seekers.name}</h1>
                <h2>{seekers.location}</h2>
                <div>
                  <button value={seekers.id} onClick={(e) => handleDelete(e)} >X</button>
                  <button value={seekers.id} onClick={(e) => ClickHandler(e)}>Save</button>
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