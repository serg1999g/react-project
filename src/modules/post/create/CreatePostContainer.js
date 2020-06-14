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
    },[dispatch])

    useEffect(() => {
        fetchApi()
    }, [fetchApi])

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
            data.append('name', values.name)
            data.append('description', values.description)
            data.append('content', values.content)
            data.append('language', values.language)
            data.append('location', values.location)
            data.append('duration', values.duration)
            data.append('start', values.start)
            values.image.map((index, i) => {
                data.append(`image-${i}`, index)
            });
            createPost(data)
        },
    });

    return (
        <CreatePostComponent
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            values={values}
            touched={touched}
            errors={errors}
            setFieldValue={setFieldValue}
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