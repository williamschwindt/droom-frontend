import React from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup'; 

const CompanyOnboarding = ({ errors, touched, values, status }) => {
    return (
        <div>
            <h1>CompanyOnboarding</h1>
            <Form>
                <Field name="username" type="text" value={values.username} placeholder="username" ></Field>
                {touched.username && errors.username && <p>{errors.username}</p>}

                <Field name="password" type="text" value={values.password} placeholder="password" ></Field>
                {touched.password && errors.password && <p>{errors.password}</p>}

                <Field name="area" type="text" value={values.area} placeholder="location" ></Field>
                {touched.area && errors.area && <p>{errors.area}</p>}

                <Field name="bio" type="text" value={values.bio} placeholder="bio" ></Field>
                {touched.bio && errors.bio && <p>{errors.bio}</p>}

            </Form>
        </div>
    )
}

const FormikCompanyOnboarding = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: "",
            area: "",
            bio: ""
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string().required("Username is required"),
        password: Yup.string().required("Password required"),
        area: Yup.string().required("Location is required"),
        bio: Yup.string().required("Bio is required")
    })
})(CompanyOnboarding);

export default FormikCompanyOnboarding;