import React from 'react';
import * as PropTypes from 'prop-types';
import {formFields} from "modules/auth/signIn/constants";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {signIn as signInAction} from 'modules/auth/store/actions'
import {connect} from "react-redux";
import SignInComponent from "./SignInComponent";


const SignInContainer = (
    {
        signInAction,
        error,
    }
) => {

    const {handleChange, handleSubmit, errors, values, touched} = useFormik({
        initialValues: {
            [formFields.email]: '',
            [formFields.password]: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().email('Email is invalid').required('Email is required'),
            password: Yup.string().min(6).required('Password is required'),
        }),

        onSubmit(values) {
            signInAction(values)
        },
    });

    return (
        <SignInComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            values={values}
            touched={touched}
            errors={errors}
        />
    );
};

SignInContainer.propTypes = {
    signInAction: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.string,
};

SignInContainer.defaultProps = {};

const mapStateToProps = ({auth: {user, error}}) => ({
    user, error
});

const mapDispatchToProps = dispatch => ({
    signInAction: values => {
        dispatch(signInAction(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
