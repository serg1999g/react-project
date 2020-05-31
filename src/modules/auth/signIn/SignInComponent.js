import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./SignIn.module.scss";
import Input from "components/ui/Inputs/Base";
import {formFields} from "./constants";
import PasswordInput from "components/ui/Inputs/Password";
import Button from "components/ui/Button/base";


const SignInComponent = (
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
            <div className='container'>
                <div className={classes.wrapperLogin}>
                    <h2 className='text-center mb-4'>
                        Sign in
                    </h2>
                    <form onSubmit={handleSubmit}>
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

                        <Button
                            text='Sign In'
                        />
                    </form>
                    {
                        error && <div className={classes.messageError}>{error}</div>
                    }
                </div>
            </div>
        </section>
    );
};

SignInComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object,
    errors: PropTypes.object,
    error: PropTypes.string,
    touched: PropTypes.object,
};

SignInComponent.defaultProps = {
    errors: {},
    error: '',
};

export default SignInComponent;
