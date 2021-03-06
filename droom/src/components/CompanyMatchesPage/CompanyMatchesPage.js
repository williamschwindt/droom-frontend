import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CompanyNavBar from '../NavBar/CompanyNavBar';

const CompanyMatchesPage = () => {
  const [savedSeekers, setSavedSeekers] = useState([])

  useEffect(() => {
      const companyId = localStorage.getItem("companyid");
      axios 
      .get(`https://droom-node-server.herokuapp.com/api/companies/${companyId}/saved`)

      .then(res => {
          setSavedSeekers(res.data);
      })

      .catch(err => {

      })
  }, []);

  const handleDelete = (e) => {
      let id = e.target.value;

      let updatedList = savedSeekers.filter(seeker => seeker.seeker_id !== id);
      setSavedSeekers(updatedList); 

      const companyId = localStorage.getItem("companyid");
      axios
      .delete(`https://droom-node-server.herokuapp.com/api/companies/${companyId}/saved/${id}`)

      .then(res => {

      }) 

      .catch(err => {

      })
  }

  return (
    <div className="company-matches-page-container">
      <CompanyNavBar savedSeekers={savedSeekers.length}/>
      <div className="company-matches-page">
      <h1>Your Saved Employees</h1>
        <div className="seekers">
          {savedSeekers.map(seeker => {
            return (
              <div key={seeker.seeker_id} className="seeker-card">
                <h1>{seeker.seeker_name}</h1>
                <h2>{seeker.seeker_location}</h2>
                <div>
                  <button value={seeker.seeker_id} onClick={(e) => handleDelete(e)}>X</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>


    </div>
  )
}

export default CompanyMatchesPage;