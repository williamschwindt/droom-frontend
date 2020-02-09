import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompanyMainUI = () => {
  const [seekers, setSeekers] = useState([]);
  const [savedSeekers, setSavedSeekers] = useState({
    seekers_id: null,
    name: "",
    location: "",
  })

  console.log(savedSeekers);
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

  const userID = localStorage.getItem("userid");

  useEffect(() => {
    axios
      .post(`https://droom-node-server.herokuapp.com/api/companies/${userID}/saved`, savedSeekers)

      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
    })
  }, [savedSeekers, userID])

  const ClickHandler = (e) => {
    const seekerID = e.target.value;
    console.log(seekerID);
    const theSeeker = seekers[seekerID - 1];
    console.log(theSeeker);
    setSavedSeekers({
    seekers_id: theSeeker.id,
    name: theSeeker.name,
    location: theSeeker.location
  });
}  

const handleDelete = (e) => {
  const id = e.target.value;
  const index = id -1;
  const newSeekers = seekers.filter(seekers => {
    return seekers.id - 1 !== index;
  });
  setSeekers(newSeekers);
}

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