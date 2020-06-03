import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from "../edit/EditProfile.module.scss";
import Input from "../../../components/ui/Inputs/Base";
import {formFields} from "../edit/constants";
import Button from "../../../components/ui/Button/base";
import PasswordInput from "../../../components/ui/Inputs/Password";


const PasswordComponent = (
    {}
) => {

    return (
        <div className="container mt-4">
            <div className={classes.sectionUpdateProfile}>
                <h2 className='text-center mb-4'>
                    Change password
                </h2>
                <form onSubmit=''>
                    <Input
                        id={formFields.name}
                        spacing='mb-3'
                        name={formFields.name}
                        type={formFields.name}
                        placeholder=''
                        onChange=''
                        label='current password'
                        value=''
                        error=''
                        errorInput=''
                        errorLabel=''
                    />
                    <PasswordInput
                        id={formFields.password}
                        spacing='mb-3'
                        name={formFields.password}
                        placeholder={formFields.password}
                        onChange=''
                        label='new password'
                        value=''
                        error=''
                        errorInput=''
                        errorLabel=''
                    />
                    <PasswordInput
                        id={formFields.password}
                        spacing='mb-3'
                        name={formFields.password}
                        placeholder={formFields.password}
                        onChange=''
                        label='confirm password'
                        value=''
                        error=''
                        errorInput=''
                        errorLabel=''
                    />

                    <Button text='Update form'/>
                </form>
            </div>
        </div>
    );
};

PasswordComponent.propTypes = {};

PasswordComponent.defaultProps = {};

export default PasswordComponent;
