import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

const SeekerProfilePage = ({ errors, touched, values, status }) => {
    const [seeker, setSeeker] = useState({
        name: "",
        password: "",
        location: "",
        skills: "",
        experience: ""
    });

    const [updateForm, setUpdateForm] = useState(true);

    useEffect(() => {
        status && setUpdateForm(status);
    }, [status]);

    useEffect(() => {
        status && setSeeker(status);
    }, [status]);

    //will change this to get the id of the user that is signed in
    useEffect(() => {
        axios 
        .get("https://droom-node-server.herokuapp.com/api/seekers/5")

        .then(res => {
            console.log(res);
            setSeeker(res.data);
        })

        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div className="seeker-profile-container" >
            <nav>
                <h3>Droom</h3>
                <div>
                    <Link to="/seekerprofile">Profile</Link>
                    <Link to="/matches">Matches</Link>
                    <Link to="/home">Home</Link>
                </div>
            </nav>

            <div className="seeker-profile" >
                <h1>Your Profile</h1>

                <div className="seeker-profile-info" >
                    <h2>Username: {seeker.name}</h2>
                    <h2>Location: {seeker.location}</h2>
                    <h2>Skills: {seeker.skills}</h2>
                    <h2>Experience: {seeker.experience}</h2>
                </div>
            </div>

            <button className={`update-btn ${!updateForm ? 'hidden' : ''}`} onClick={() => setUpdateForm(!updateForm)} >Update Profile</button>

            <Form className={`form ${updateForm ? 'hidden' : ''}`}>
                <Field className="input" name="name" type="text" value={values.name} placeholder="username" ></Field>
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field className="input" name="location" type="text" value={values.location} placeholder="location" ></Field>
                {touched.location && errors.location && <p>{errors.location}</p>}

                <Field className="input" name="skills" type="text" value={values.skills} placeholder="skills" ></Field>
                {touched.skills && errors.skills && <p>{errors.skills}</p>}

                <Field className="input" name="experience" type="text" value={values.experience} placeholder="experience" ></Field>
                {touched.experience && errors.experience && <p>{errors.experience}</p>}

                <button className="button" type="submit">Update</button>
            </Form>
        </div>
    )
}

const FormikSeekerProfilePage = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            location: "",
            skills: "",
            experience: ""
        };
    },

    validationSchema: Yup.object().shape({
        location: Yup.string().required("Location is required"),
        skills: Yup.string().required("Skills are required"),
        experience: Yup.string().required("Experience is required")
    }),

    handleSubmit(values, { resetForm, setStatus }) {
        console.log("Seeker form values ", values);

        //update the seeker
        axios 
        .put("https://droom-node-server.herokuapp.com/api/seekers/5", values)

        .then(res => {
            console.log(res);
            setStatus(true);
            setStatus(res.data);
            resetForm();
            
        })

        .catch(err => {
            console.log(err);
        })
    }

})(SeekerProfilePage);

export default FormikSeekerProfilePage;