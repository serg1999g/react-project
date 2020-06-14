import React, {useEffect, useCallback, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import EditPostComponent from "./EditPostComponent";
import {formFields} from "./constants";
import {useFormik} from 'formik';
import {setPosts, updatePost as updatePostAction} from "../store/actions";
import {connect} from 'react-redux';
import * as Yup from 'yup';
import PostService from "../PostService";
import isEmpty from 'lodash/isEmpty';


const EditPostContainer = (
    {
        updatePost,
    }
) => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const [post, setPost] = useState([])
    const fetchApi = useCallback(async () => {
        const response = await PostService.editPost(id);
        await dispatch(setPosts())
        setPost(response.data);
    },[dispatch])

    useEffect(() => {
        fetchApi()
    }, [])


    const {handleChange, handleSubmit, errors, values, touched, setFieldValue} = useFormik({
        initialValues: {
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
            const data = new FormData()
            data.append('id', values.id)
            data.append('name', values.name)
            data.append('description', values.description)
            data.append('content', values.content)
            data.append('language', values.language)
            data.append('location', values.location)
            data.append('duration', values.duration)
            data.append('start', values.start)
            if (!isEmpty(values.image)) {
                values.image.map((index, i) => {
                    data.append(`image-${i}`, index)
                })
            }
            updatePost(data)
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
        dispatch(updatePostAction(values));
    }
});

export default connect(null, mapDispatchToProps)(EditPostContainer);