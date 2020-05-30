import React, {useMemo} from 'react';
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
        data,
    }
) => {

    const dataInfo = useMemo(() => {
        return data
            ? data
            : null
    }, [data])

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
            userData={dataInfo}
            setFieldValue={setFieldValue}
        />
    )
}

EditProfileContainer.propTypes = {
    updateProfile: PropTypes.func.isRequired,
    data: PropTypes.array,
    error: PropTypes.string,
}

EditProfileContainer.defaultProps = {}

const mapStateToProps = ({auth: {user: {data, error}}}) => ({
    data, error
});

const mapDispatchToProps = dispatch => ({
    updateProfile: values => {
        dispatch(updateProfileAction(values));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);