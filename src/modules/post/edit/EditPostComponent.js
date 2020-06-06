import React, {useEffect} from 'react';
import * as PropTypes from 'prop-types';
import Input from "components/ui/Inputs/Base";
import {formFields} from "./constants";
import Button from "components/ui/Button/base";


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

    useEffect(() => {
        if (!post) {
            return;
        }
        {
            setFieldValue('id', post.id, false)
        }
        {
            setFieldValue('name', post.name, false)
        }
        {
            setFieldValue('description', post.description, false)
        }
        {
            setFieldValue('content', post.content, false)
        }
    }, [post])

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

                <Button text='Submit'/>
            </form>
        </div>
    );
};

EditPostComponent.propTypes = {};

EditPostComponent.defaultProps = {};

export default EditPostComponent;
