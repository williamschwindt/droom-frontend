import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

const Onboarding = ({ errors, touched, values, status }) => {

    if(status === true) {
        return(
            <div className="onboarding">
                <h1>Droom</h1>
                <h2>Find Your Droom Job!</h2>
                <Form className="form onboarding-form">
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Form>
            </div>
        )
    }

    if(status === "error") {
        return (
            <div className="onboarding">
                <h1>Droom</h1>
                <h2>Find Your Droom Job!</h2>
                <Form className="form onboarding-form">
                    <h1>There Was A Problem, Please Try Again</h1>
                    <Field className="input" name="name" type="text" value={values.name} placeholder="username" ></Field>
                    {touched.name && errors.name && <p>{errors.name}</p>}
    
                    <Field className="input" name="password" type="text" value={values.password} placeholder="password" ></Field>
                    {touched.password && errors.password && <p>{errors.password}</p>}
    
                    <Field className="select" name="type" component="select" value={values.type} >
                        <option id="placeholder">Register As</option>
                        <option>seeker</option>
                        <option>company</option>
                    </Field>
                    {touched.type && errors.type && <p>{errors.type}</p>}
    
                    <div>
                        <p>Already A Member <Link to="/loginform">Sign In</Link></p>
                        <button className="button" type="submit">Register</button>
                    </div>
                </Form>
            </div>
        )
    }

    return (
        <div className="onboarding">
            <h1>Droom</h1>
            <h2>Find Your Droom Job!</h2>
            <Form className="form onboarding-form">
                <h1>Please Register</h1>
                <Field className="input" name="name" type="text" value={values.name} placeholder="username" ></Field>
                {touched.name && errors.name && <p>{errors.name}</p>}

                <Field className="input" name="password" type="text" value={values.password} placeholder="password" ></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}

                <Field className="select" name="type" component="select" value={values.type} >
                    <option id="placeholder">Register As</option>
                    <option>seeker</option>
                    <option>company</option>
                </Field>
                {touched.type && errors.type && <p>{errors.type}</p>}

                <div>
                    <p>Already A Member <Link to="/loginform">Sign In</Link></p>
                    <button className="button" type="submit">Register</button>
                </div>
            </Form>
        </div>
    )
}

const FormikOnboarding = withFormik({
    mapPropsToValues() {
        return {
            name: "",
            password: "",
            type: ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Username is required"),
        password: Yup.string().required("Password required"),
        type: Yup.string().oneOf(["company", "seeker"]).required("User type is required")
    }),

    handleSubmit(values, { resetForm, setStatus, props }) {
        setStatus(true);

        axios
            .post("https://droom-node-server.herokuapp.com/api/register", values) 

            .then(res => {
                resetForm();
                setStatus(res.data);
                props.history.push('/loginform');
                if (values.type === 'seeker') {
                    localStorage.setItem("userid", res.data.id);
                } else {
                    localStorage.setItem("companyid", res.data.id);
                }
                
            })
            .catch(() => {
                setStatus("error");
            })
    }
})(Onboarding);

export default FormikOnboarding;