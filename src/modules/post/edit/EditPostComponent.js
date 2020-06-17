import React, {useEffect, useMemo} from 'react';
import * as PropTypes from 'prop-types';
import Input from "components/ui/Inputs/Base";
import {formFields} from "./constants";
import Button from "components/ui/Button/base";
import {useDropzone} from 'react-dropzone';
import {deleteAvatar} from "../../profile/store/actions";
import classes from "../../profile/editAvatar/EditAvatar.module.scss";
import SpriteIcon from "components/icons/SpriteIcon";
import UploadImage from "components/ui/UploadImage";
import {useDispatch} from 'react-redux';
import {deleteImage} from "../store/actions";


const EditPostComponent = (
    {
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        post,
    }
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!post) {
            return;
        }
        setFieldValue('id', post.id, false)
        setFieldValue('name', post.name, false)
        setFieldValue('description', post.description, false)
        setFieldValue('content', post.content, false)
        setFieldValue('location', post.location, false)
        setFieldValue('language', post.language, false)
        setFieldValue('duration', post.duration, false)
        setFieldValue('start', post.start, false)
    }, [post])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "image/*",
        multiple: true,
        onDrop: acceptedFiles => {
            setFieldValue("image", acceptedFiles);
        }
    });

    const images = useMemo(() => {
        return post && post.images
            ? post.images
            : null
    })
    const handleClick = (image) => {
        dispatch(deleteImage(image))
    }


    const renderImages = useMemo(() => images && images.map((image) => (
        <div key={image.id} className='mb-2 mr-2'>
            <div className={classes.wrapperImage}>
                <button onClick={e => handleClick(image)} className={classes.btn}>
                    <SpriteIcon name='remove-icon'/>
                </button>
                <img src={image.image} alt="avatar" className={classes.image}/>
            </div>
        </div>
    )), [images]);
    return (
        <div className='container pt-2 pb-2'>
            <h1>Edit post</h1>
            <form onSubmit={handleSubmit} className='mb-2'>
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.name}
                    type={formFields.name}
                    placeholder={formFields.name}
                    onChange={handleChange}
                    label={formFields.name}
                    value={values.name || ''}
                    error={errors.name ? errors.name : null}
                    errorInput={errors.name && touched.name ? 'errorInput' : null}
                    errorLabel={errors.name && touched.name ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.description}
                    type={formFields.description}
                    placeholder={formFields.description}
                    onChange={handleChange}
                    label={formFields.description}
                    value={values.description || ''}
                    error={errors.description ? errors.description : null}
                    errorInput={errors.description && touched.description ? 'errorInput' : null}
                    errorLabel={errors.description && touched.description ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.content}
                    type={formFields.content}
                    placeholder={formFields.content}
                    onChange={handleChange}
                    label={formFields.content}
                    value={values.content || ''}
                    error={errors.content ? errors.content : null}
                    errorInput={errors.content && touched.content ? 'errorInput' : null}
                    errorLabel={errors.content && touched.content ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.location}
                    type={formFields.location}
                    placeholder={formFields.location}
                    onChange={handleChange}
                    label={formFields.location}
                    value={values.location || ''}
                    error={errors.location ? errors.location : null}
                    errorInput={errors.location && touched.location ? 'errorInput' : null}
                    errorLabel={errors.location && touched.location ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.language}
                    type={formFields.language}
                    placeholder={formFields.language}
                    onChange={handleChange}
                    label={formFields.language}
                    value={values.language || ''}
                    error={errors.language ? errors.language : null}
                    errorInput={errors.language && touched.language ? 'errorInput' : null}
                    errorLabel={errors.language && touched.language ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.duration}
                    type={formFields.duration}
                    placeholder={formFields.duration}
                    onChange={handleChange}
                    label={formFields.duration}
                    value={values.duration || ''}
                    error={errors.duration ? errors.duration : null}
                    errorInput={errors.duration && touched.duration ? 'errorInput' : null}
                    errorLabel={errors.duration && touched.duration ? 'errorLabel' : null}
                />
                <Input
                    id={formFields.id}
                    spacing='mb-3'
                    name={formFields.start}
                    type={formFields.start}
                    placeholder={formFields.start}
                    onChange={handleChange}
                    label={formFields.start}
                    value={values.start || ''}
                    error={errors.start ? errors.start : null}
                    errorInput={errors.start && touched.start ? 'errorInput' : null}
                    errorLabel={errors.start && touched.start ? 'errorLabel' : null}
                />
                {}
                <div {...getRootProps({className: "dropzone"})}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    )}
                </div>
                <div className='pt-2'>
                    <Button text='Submit'/>
                </div>
            </form>
            <div className='d-flex flex-wrap'>
                {renderImages}
            </div>
        </div>
    );
};

EditPostComponent.propTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    images: PropTypes.array
};

EditPostComponent.defaultProps = {
    images: []
};

export default React.memo(EditPostComponent);
