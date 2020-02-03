import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    type: ""
  });

  console.log(user);

  useEffect(() => {
    status && setUser(status);
}, [status])

  return (
    <div>
      <h1>Login Form</h1>
      <Form>
        <Field name="name" type="text" value={values.name} placeholder="username" ></Field>
        {touched.name && errors.name && <p>{errors.name}</p>}

        <Field name="password" type="text" value={values.password} placeholder="password" ></Field>
        {touched.password && errors.password && <p>{errors.password}</p>}

        <Field name="type" component="select" value={values.type} >
          <option>Choose user type</option>
          <option>seeker</option>
          <option>company</option>
        </Field>
        {touched.type && errors.type && <p>{errors.type}</p>}

        <button type="submit">Submit</button>
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


  handleSubmit(values, {resetForm, setStatus}) {
    console.log("Submitting form:", values);  
  }
})(LoginForm);

export default FormikLoginForm;