import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SeekerMainUI = () => {
    const [jobs, setJobs] = useState([]);
    const [savedJob, setSavedJob] = useState({
        id: null,
        name: "",
        location: "",
        description: "",
        company_id: null
    });
    console.log(savedJob);

    console.log(jobs);

    useEffect(() => {
        axios
        .get("https://droom-node-server.herokuapp.com/api/jobs")

        .then(res => {
            console.log(res);
            setJobs(res.data);
        })

        .catch(err => {
            console.log(err);
        })
    }, [])

    const userID = localStorage.getItem("userid");
    
    const clickHandler = (e) => {
        let id = e.target.value;
        setSavedJob(jobs[id-1]);
    
        axios
        .post(`https://droom-node-server.herokuapp.com/api/seekers/${userID}/saved`, savedJob.id, savedJob.name, savedJob.location, savedJob.description, savedJob.company_id)
    
        .then(res => {
            console.log(res.message);
        }) 
    
        .catch(err => {
            console.log(err);
        })
    }
        
    return (
        <div className="main-ui-container">
            <nav>
                <h3>Droom</h3>
                <div>
                    <Link to="/seekerprofile">Profile</Link>
                    <Link to="/matches">Matches</Link>
                    <Link to="/seekerhome">Home</Link>
                </div>
            </nav>

            <div className="main-ui">
                <h1>Find Jobs</h1>
                <div className="jobs">
                    {jobs.map(job => {
                        return (
                            <div key={job.id} className="job-card">
                                <h1>{job.name}</h1>
                                <h2>{job.location}</h2>
                                <p>{job.description}</p>
                                <div>
                                    <button>X</button>
                                    <button value={job.id} onClick={(e) => clickHandler(e)}>Save</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            
        </div>
    )
}

export default SeekerMainUI;