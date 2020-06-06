import React, {} from 'react';
import * as PropTypes from 'prop-types';
import {useFormik} from "formik";
import {formFields} from "./constants";
import * as Yup from 'yup';
import {connect} from "react-redux";
import {updateProfile as updateProfileAction} from "modules/profile/store/actions";
import EditProfileComponent from "./EditProfileComponent";


const EditProfileContainer = (
    {
        updateProfile,
        error,
        user,
    }
) => {

    const {handleChange, handleSubmit, errors, values, touched, setFieldValue} = useFormik({
        initialValues: {
            [formFields.name]: '',
            [formFields.email]: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Username is required'),
            email: Yup.string().email('Email is invalid').required('Email is required'),
        }),

        onSubmit(values) {
            updateProfile(values)
        },
    });

    return (
        <EditProfileComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
            errors={errors}
            values={values}
            touched={touched}
            userData={user}
            setFieldValue={setFieldValue}
        />
    )
}

EditProfileContainer.propTypes = {
    updateProfile: PropTypes.func.isRequired,
    user: PropTypes.object,
    error: PropTypes.string,
}

EditProfileContainer.defaultProps = {
    user: {},
}

const mapDispatchToProps = dispatch => ({
    updateProfile: values => {
        dispatch(updateProfileAction(values));
    }
});

export default connect(null, mapDispatchToProps)(EditProfileContainer);