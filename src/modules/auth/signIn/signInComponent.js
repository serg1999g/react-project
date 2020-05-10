import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import Input from "components/ui/Inputs/Base";
import {formFields} from "modules/auth/signIn/constants";
import Button from "components/ui/Button/base";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {signIn as signInAction} from 'modules/auth/store/actions'
import {connect} from "react-redux";
import PasswordInput from "components/ui/Inputs/Password";
import classes from './SignIn.module.scss';
import {routesByName} from "constants/routes";


const SignInComponent = (
    {
        signInAction,
        error,
        history,
        user
    }
) => {
    // useEffect(() => {
    //     if (user) {
    //         history.push(routesByName.home);
    //     }
    // }, [])

    const {handleChange, handleSubmit, errors, values, touched} = useFormik({
        initialValues: {
            [formFields.email]: '',
            [formFields.password]: '',
        },

        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
        }),

        onSubmit(values) {
            signInAction(values)
        },
    });

    return (
        <div className={classes.wrapperLogin}>
            <form onSubmit={handleSubmit}>
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

                <Button
                    text='Sign In'
                />
            </form>
            {
                error && <div className={classes.messageError}>{error}</div>
            }
        </div>
    );
};

SignInComponent.propTypes = {
    signInAction: PropTypes.func,
    user: PropTypes.object,
    error: PropTypes.string,
};

SignInComponent.defaultProps = {};

const mapStateToProps = ({auth: {user, error}}) => ({
    user, error
});

const mapDispatchToProps = dispatch => ({
    signInAction: values => {
        dispatch(signInAction(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInComponent);
