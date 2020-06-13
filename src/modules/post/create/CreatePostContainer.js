import React, {useCallback, useEffect} from 'react';
import * as PropTypes from 'prop-types';
import CreatePostComponent from "./CreatePostComponent";
import {formFields} from "../edit/constants";
import {useFormik} from 'formik';
import {createPost as createPostAction, setPosts} from "../store/actions";
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';


const CreatePostContainer = (
    {
        createPost,
    }
) => {
    const dispatch = useDispatch();

    const fetchApi = useCallback(async () => {
        await dispatch(setPosts())
    })

    useEffect(() => {
        fetchApi()
    }, [])

    const {handleChange, handleSubmit, errors, values, touched} = useFormik({
        initialValues: {
            [formFields.id]: '',
            [formFields.name]: '',
            [formFields.description]: '',
            [formFields.content]: '',
            [formFields.language]: '',
            [formFields.location]: '',
            [formFields.duration]: '',
            [formFields.start]: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            description: Yup.string().required('Description is required'),
            content: Yup.string().required('Content is required'),
        }),
        onSubmit(values) {
            createPost(values)
        },
    });

    return (
        <CreatePostComponent
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
        />
    );
};

CreatePostContainer.propTypes = {
    createPost: PropTypes.func,
};

CreatePostContainer.defaultProps = {};

const mapDispatchToProps = dispatch => ({
    createPost: (values) => {
        dispatch(createPostAction(values));
    }
});

export default connect(null, mapDispatchToProps)(CreatePostContainer);