import React from 'react'
import {withFormik, Form, Field} from 'formik';

const LoginForm = ({ errors, touched, values, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

function LoginForm() {
  return (
    <div>
      <h1>Login Form</h1>
        <Form>
          <Field 
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            values={values.username}
          />
          {touched.username && errors.username && <p>{errors.username}</p>}

          <Field 
            id="password"
            type="text"
            name="password"
            placeholder="Password"
            values={values.password}
          />
          {touched.password && errors.password && <p>{errors.password}</p>}

        <label>
          Are you a Job Seeker?
          <Field id="" type="checkbox" name="jobSeeker" values={values.jobSeeker} />
        </label>
        <label>
          Or Employer?
          <Field id="" type="checkbox" name="employer" values={values.employer} />
        </label>

        <button type="submit">Submit</button>
        </Form>
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({name, email, password, service }) {
    return {
      username: username || "",
      password: password || "",
      jobSeeker: jobSeeker || false,
      employer: employer || false
    };
  },

handleSubmit(values, {setStatus, resetForm}) {
  console.log("Submitting form:", values);  

export default LoginForm;