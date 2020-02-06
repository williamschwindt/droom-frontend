import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SeekerMainUI = (props) => {
    const [jobs, setJobs] = useState([]);

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

    return (
        <div className="main-ui-container">
            <nav>
                <h3>Droom</h3>
                <div>
                    <Link to="/seekerprofile">Profile</Link>
                    <Link to="/matches">Matches</Link>
                    <Link to="/home">Home</Link>
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

export default SeekerMainUI;