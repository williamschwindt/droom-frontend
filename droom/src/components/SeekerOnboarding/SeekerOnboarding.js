import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup'; 

const SeekerOnboarding = ({ errors, touched, values, status }) => {
    return (
        <div>
            <h1>SeekerOnboarding</h1>
            <Form>
                <Field name="username" type="text" value={values.username} placeholder="username" ></Field>
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field name="password" type="text" value={values.password} placeholder="password" ></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}

                <Field name="area" type="text" value={values.area} placeholder="location" ></Field>
                {touched.location && errors.location && <p>{errors.location}</p>}

                <Field name="skills" type="text" value={values.skills} placeholder="skills" ></Field>
                {touched.skills && errors.skills && <p>{errors.skills}</p>}

                <Field name="experience" type="text" value={values.experienceskills} placeholder="experience" ></Field>
                {touched.experience && errors.experience && <p>{errors.experience}</p>}

                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikSeekerOnboarding = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: "",
            area: "",
            skills: "",
            experience: ""
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string().required("Username is required"),
        password: Yup.string().required("Password required"),
        area: Yup.string().required("Location is required"),
        skills: Yup.string().required("Skills are required"),
        experience: Yup.string().required("Experience is required")
    })

})(SeekerOnboarding);

export default FormikSeekerOnboarding;