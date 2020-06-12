import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from './EditAvatar.module.scss';
import EditAvatarComponent from "./EditAvatarComponent";
import {formFields} from "../edit/constants";
import {useFormik} from 'formik';
import {createAvatar as createAvatarAction} from "modules/profile/store/actions";
import {connect} from "react-redux";


const EditAvatarContainer = (
    {
        image,
        createAvatarAction,
        profile
    }
) => {


    const {handleSubmit, values, setFieldValue} = useFormik({
        initialValues: {},

        onSubmit(values) {
            const data = new FormData()
            data.append('image', values.image)
            createAvatarAction(data)
        },
    });

    return (
        <div>
            <EditAvatarComponent image={image} setFieldValue={setFieldValue} handleSubmit={handleSubmit}/>
        </div>
    );
};

EditAvatarContainer.propTypes = {
    image: PropTypes.object,
    createAvatarAction: PropTypes.func,
};

EditAvatarContainer.defaultProps = {
    image: {},
};

const mapStateToProps = ({profile: {profile, error}}) => ({
    profile, error
});

const mapDispatchToProps = dispatch => ({
    createAvatarAction: values => {
        dispatch(createAvatarAction(values));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAvatarContainer);