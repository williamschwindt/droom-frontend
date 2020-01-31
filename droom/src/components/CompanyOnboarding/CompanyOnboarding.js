import React from 'react';
import { Form, Field, withFormik } from 'formik';

const CompanyOnboarding = ({ errors, touched, values, status }) => {
    return (
        <div>
            <h1>CompanyOnboarding</h1>
            <Form>
                <Field name="username" type="text" value={values.username} placeholder="username" ></Field>
                <Field name="password" type="text" value={values.password} placeholder="password" ></Field>
                <Field name="area" type="text" value={values.area} placeholder="location" ></Field>
                <Field name="bio" type="textarea" value={values.bio} placeholder="bio" ></Field>
            </Form>
        </div>
    )
}

const FormikCompanyOnboarding = withFormik({

})(CompanyOnboarding);

export default FormikCompanyOnboarding;