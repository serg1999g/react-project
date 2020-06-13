import React, {} from 'react';
import * as PropTypes from 'prop-types';
import Input from "components/ui/Inputs/Base";
import {formFields} from "./constants";
import Button from "components/ui/Button/base";


const CreatePostComponent = (
    {
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
    }
) => {

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
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

                <Button text='Submit'/>
            </form>
        </div>
    );
};

CreatePostComponent.propTypes = {};

CreatePostComponent.defaultProps = {};

export default CreatePostComponent;
