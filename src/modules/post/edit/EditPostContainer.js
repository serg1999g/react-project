import React, {useEffect, useCallback, useState} from 'react';
import {useParams} from "react-router-dom";
import EditPostComponent from "./EditPostComponent";
import {formFields} from "./constants";
import {useFormik} from 'formik';
import {updatePost as updatePostAction} from "../store/actions";
import {connect} from 'react-redux';
import * as Yup from 'yup';
import PostService from "../PostService";


const EditPostContainer = (
    {
        updatePost,
    }
) => {
    const {id} = useParams();

    const [post, setPost] = useState([])
    const fetchApi = useCallback(async () => {
        const response = await PostService.editPost(id);
        setPost(response.data);
    })

    useEffect(() => {
        fetchApi()
    }, [])


    const {handleChange, handleSubmit, errors, values, touched, setFieldValue} = useFormik({
        initialValues: {
            [formFields.id]: '',
            [formFields.name]: '',
            [formFields.description]: '',
            [formFields.content]: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            description: Yup.string().required('Description is required'),
            content: Yup.string().required('Content is required'),
        }),
        onSubmit(values) {
            updatePost(values)
        },
    });

    return (
        <EditPostComponent
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            values={values}
            touched={touched}
            setFieldValue={setFieldValue}
            post={post}
        />
    );
};


const mapDispatchToProps = dispatch => ({
    updatePost: (values) => {
        dispatch(updatePostAction(values, values.id));
    }
});

export default connect(null, mapDispatchToProps)(EditPostContainer);