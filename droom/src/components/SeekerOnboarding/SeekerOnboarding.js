import React from 'react';
import { Form, Field, withFormik } from 'formik';

const SeekerOnboarding = ({ errors, touched, values, status }) => {
    return (
        <div>
            <h1>SeekerOnboarding</h1>
            <Form>
                <Field name="username" type="text" value={values.username} placeholder="username" ></Field>
                <Field name="password" type="text" value={values.password} placeholder="password" ></Field>
                <Field name="area" type="text" value={values.area} placeholder="location" ></Field>
                <Field name="skills" type="text" value={values.skills} placeholder="skills" ></Field>
                <Field name="experience" type="text" value={values.experienceskills} placeholder="experience" ></Field>
            </Form>
        </div>
    )
}

const FormikSeekerOnboarding = withFormik({

})(SeekerOnboarding);

export default FormikSeekerOnboarding;