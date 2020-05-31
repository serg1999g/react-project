import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./SignUp.module.scss";
import Input from "components/ui/Inputs/Base";
import {formFields} from "./constants";
import PasswordInput from "components/ui/Inputs/Password";
import Button from "components/ui/Button/base";


const SignUpComponent = (
    {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        error
    }
) => {

    return (
        <section>
            <div className="container">
                <div className={classes.wrapperRegister}>
                    <h2 className='text-center mb-4'>
                        Sign up
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <Input
                            id={formFields.name}
                            spacing='mb-3'
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
                            spacing='mb-3'
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
                            spacing='mb-3'
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
                            spacing='mb-3'
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
    );
};

SignUpComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object,
    errors: PropTypes.object,
    error: PropTypes.string,
    touched: PropTypes.object,
};

SignUpComponent.defaultProps = {
    errors: {},
    error: '',
};

export default SignUpComponent;
