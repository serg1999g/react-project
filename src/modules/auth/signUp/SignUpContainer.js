import React from 'react';
import * as PropTypes from 'prop-types';
import {useFormik} from "formik";
import {formFields} from "./constants";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {SignUp as signUpAction} from "modules/auth/store/actions";
import SignUpComponent from "./SignUpComponent";


const SignUpContainer = (
    {
        signUpAction,
        error,
    }
) => {
    const {handleChange, handleSubmit, errors, values, touched, setFieldValue} = useFormik({
        initialValues: {
            [formFields.name]: '',
            [formFields.email]: '',
            [formFields.password]: '',
            [formFields.passwordConfirm]: '',
            [formFields.image]: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Username is required'),
            email: Yup.string().email('Email is invalid').required('Email is required'),
            password: Yup.string().min(6).required('Password is required'),
            password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
        }),

        onSubmit(values) {
            const data = new FormData()
            data.append('name', values.name)
            data.append('email', values.email)
            data.append('password', values.password)
            data.append('password_confirmation', values.password_confirmation)
            data.append('image', values.image)
            console.log(data)
            signUpAction(data)
        },
    });

    return (
        <SignUpComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            errors={errors}
            values={values}
            touched={touched}
            setFieldValue={setFieldValue}
        />
    )
}

SignUpContainer.propTypes = {
    signUpAction: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.string,
}

SignUpContainer.defaultProps = {}

const mapStateToProps = ({auth: {user, error}}) => ({
    user, error
});

const mapDispatchToProps = dispatch => ({
    signUpAction: values => {
        dispatch(signUpAction(values));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);