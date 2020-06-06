import React, {} from 'react';
import * as PropTypes from 'prop-types';
import {useFormik} from "formik";
import {formFields} from "./constants";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {changePassword as changePasswordAction} from "modules/profile/store/actions";
import PasswordComponent from "./PasswordComponent";


const PasswordContainer = (
    {
        changePassword,
        error,
    }
) => {

    const {handleChange, handleSubmit, errors, values, touched} = useFormik({
        initialValues: {
            [formFields.current_password]: '',
            [formFields.password]: '',
            [formFields.password_confirmation]: '',
        },

        validationSchema: Yup.object({
            current_password: Yup.string().min(6).required('Password is required'),
            password: Yup.string().min(6).required('Password is required'),
            password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
        }),

        onSubmit(values) {
            changePassword(values)
        },
    });

    return (
        <PasswordComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            errors={errors}
            values={values}
            touched={touched}
        />
    )
}

PasswordContainer.propTypes = {
    changePassword: PropTypes.func.isRequired,
    error: PropTypes.string,
}

PasswordContainer.defaultProps = {
    error: '',
}

const mapStateToProps = ({profile: {error}}) => ({
    error
});

const mapDispatchToProps = dispatch => ({
    changePassword: values => {
        dispatch(changePasswordAction(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PasswordContainer);