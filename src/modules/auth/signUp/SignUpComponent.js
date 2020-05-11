import React from 'react';
import * as PropTypes from 'prop-types';
import {useFormik} from "formik";
import {formFields} from "./constants";
import * as Yup from 'yup';
import Input from "components/ui/Inputs/Base";
import PasswordInput from "components/ui/Inputs/Password";
import Button from "components/ui/Button/base";
import classes from './SignUp.module.scss';
import {connect} from "react-redux";
import {SignUp as signUpAction} from "modules/auth/store/actions";

const SignUpComponent = (
    {
        signUpAction,
        error,
    }
) => {
    const {handleChange, handleSubmit, errors, values, touched} = useFormik({
        initialValues: {
            [formFields.name]: '',
            [formFields.email]: '',
            [formFields.password]: '',
            [formFields.passwordConfirm]: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Username is required'),
            email: Yup.string().email('Email is invalid').required('Email is required'),
            password: Yup.string().min(6).required('Password is required'),
            password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
        }),

        onSubmit(values) {
            signUpAction(values)
        },
    });

    return (
        <section>
            <div className="container">
                <div className={classes.wrapperRegister}>
                    <form onSubmit={handleSubmit}>
                        <Input
                            id={formFields.name}
                            spacing='mb-5'
                            name={formFields.name}
                            type={formFields.name}
                            placeholder={formFields.name}
                            onChange={handleChange}
                            label={formFields.name}
                            value={values.name}
                            error={errors.name ? errors.name : null}
                            errorInput={errors.name && touched.name ? 'errorInput' : null}
                            errorLabel={errors.name && touched.name ? 'errorLabel' : null}
                        />
                        <Input
                            id={formFields.email}
                            spacing='mb-5'
                            name={formFields.email}
                            type={formFields.email}
                            placeholder={formFields.email}
                            onChange={handleChange}
                            label={formFields.email}
                            value={values.email}
                            error={errors.email ? errors.email : null}
                            errorInput={errors.email && touched.email ? 'errorInput' : null}
                            errorLabel={errors.email && touched.email ? 'errorLabel' : null}
                        />

                        <PasswordInput
                            id={formFields.password}
                            spacing='mb-5'
                            name={formFields.password}
                            placeholder={formFields.password}
                            onChange={handleChange}
                            label={formFields.password}
                            value={values.password}
                            error={errors.password ? errors.password : null}
                            errorInput={errors.password && touched.password ? 'errorInput' : null}
                            errorLabel={errors.password && touched.password ? 'errorLabel' : null}
                        />
                        <PasswordInput
                            id={formFields.passwordConfirm}
                            spacing='mb-5'
                            name={formFields.passwordConfirm}
                            placeholder='password Confirm'
                            onChange={handleChange}
                            label='password Confirm'
                            value={values.password_confirmation}
                            error={errors.password_confirmation ? errors.password_confirmation : null}
                            errorInput={errors.password_confirmation && touched.password_confirmation ? 'errorInput' : null}
                            errorLabel={errors.password_confirmation && touched.password_confirmation ? 'errorLabel' : null}
                        />

                        <Button text='Sign Up'/>
                    </form>
                    {
                        error && <div className={classes.messageError}>{error}</div>
                    }
                </div>
            </div>
        </section>
    )
}

SignUpComponent.propTypes = {
    signUpAction: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.string,
}

SignUpComponent.defaultProps = {}

const mapStateToProps = ({auth: {user, error}}) => ({
    user, error
});

const mapDispatchToProps = dispatch => ({
    signUpAction: values => {
        dispatch(signUpAction(values));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);