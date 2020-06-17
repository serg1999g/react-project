import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./Password.module.scss";
import Input from "components/ui/Inputs/Base";
import {formFields} from "./constants";
import Button from "components/ui/Button/base";
import PasswordInput from "components/ui/Inputs/Password";


const PasswordComponent = (
    {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        error,
    }
) => {

    return (
        <div className={classes.sectionChangePassword}>
            <h2 className='text-center mb-4'>
                Change password
            </h2>
            <form onSubmit={handleSubmit}>
                <Input
                    id={formFields.current_password}
                    spacing='mb-3'
                    name={formFields.current_password}
                    type='password'
                    placeholder=''
                    onChange={handleChange}
                    label='current password'
                    value={values.current_password}
                    error={errors.current_password ? errors.current_password : null}
                    errorInput={errors.current_password && touched.current_password ? 'errorInput' : null}
                    errorLabel={errors.current_password && touched.current_password ? 'errorLabel' : null}
                />
                <PasswordInput
                    id={formFields.password}
                    spacing='mb-3'
                    name={formFields.password}
                    placeholder=''
                    onChange={handleChange}
                    label='new password'
                    value={values.password}
                    error={errors.password ? errors.password : null}
                    errorInput={errors.password && touched.password ? 'errorInput' : null}
                    errorLabel={errors.password && touched.password ? 'errorLabel' : null}
                />
                <PasswordInput
                    id={formFields.password_confirmation}
                    spacing='mb-3'
                    name={formFields.password_confirmation}
                    placeholder=''
                    onChange={handleChange}
                    label='confirm password'
                    value={values.password_confirmation}
                    error={errors.password_confirmation ? errors.password_confirmation : null}
                    errorInput={errors.password_confirmation && touched.password_confirmation ? 'errorInput' : null}
                    errorLabel={errors.password_confirmation && touched.password_confirmation ? 'errorLabel' : null}
                />

                <Button text='Update form'/>
                {
                    error && <div className={classes.messageError}>{error}</div>
                }
            </form>
        </div>
    );
};

PasswordComponent.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.object,
    errors: PropTypes.object,
    error: PropTypes.string,
    touched: PropTypes.object,
};

PasswordComponent.defaultProps = {
    errors: {},
    error: '',
};

export default PasswordComponent;
