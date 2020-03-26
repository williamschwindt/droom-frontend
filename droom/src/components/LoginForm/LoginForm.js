import React from 'react'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = ({ errors, touched, values, status }) => {

  if(status === true) {
    return(
      <div className="loginForm">
      <h1>Droom</h1>
      <h2>Find Your Droom Job!</h2>
      
      <Form>
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
      <div className="loginForm">
        <h1>Droom</h1>
        <h2>Find Your Droom Job!</h2>
        
        <Form>
        <h1>There Was A Problem, Please Try Again</h1>
          <Field name="name" type="text" value={values.name} placeholder="username" ></Field>
          {touched.name && errors.name && <p>{errors.name}</p>}

          <Field name="password" type="password" value={values.password} placeholder="password" ></Field>
          {touched.password && errors.password && <p>{errors.password}</p>}

          <Field name="type" component="select" value={values.type} >
            <option>Choose user type</option>
            <option>seeker</option>
            <option>company</option>
          </Field>
          {touched.type && errors.type && <p>{errors.type}</p>}

          <div>
          <p>Not A Member <Link to="/onboarding">Sign Up</Link></p>
          <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    )
  }

  return (
    <div className="loginForm">
      <h1>Droom</h1>
      <h2>Find Your Droom Job!</h2>
      
      <Form>
      <h1>Please Sign In</h1>
        <Field name="name" type="text" value={values.name} placeholder="username" ></Field>
        {touched.name && errors.name && <p>{errors.name}</p>}

        <Field name="password" type="password" value={values.password} placeholder="password" ></Field>
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Field name="type" component="select" value={values.type} >
          <option>Choose user type</option>
          <option>seeker</option>
          <option>company</option>
        </Field>
        {touched.type && errors.type && <p>{errors.type}</p>}

        <div>
        <p>Not A Member <Link to="/onboarding">Sign Up</Link></p>
        <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  )
}

const FormikLoginForm = withFormik({
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


  handleSubmit(values, {resetForm, setStatus, props}) {
    console.log("Submitting form:", values);

    setStatus(true);

    axios
      .post("https://droom-node-server.herokuapp.com/api/login", values) 

      .then(res => {
        console.log("login res", res);
        localStorage.setItem("token", res.data.token);
        resetForm();
        setStatus(res.data);
        props.history.push(`/${values.type}mainui`);
      })
      .catch(() => {
        setStatus("error");
      })
  }
})(LoginForm);

export default FormikLoginForm;