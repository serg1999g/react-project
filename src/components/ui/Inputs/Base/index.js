import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Inputs.module.scss';
import clsx from "clsx";

const Input = (
    {
        id,
        label,
        name,
        type,
        onChange,
        value,
        placeholder,
        size,
        className,
        labelColor,
        error,
        errorInput,
        errorLabel,
        disabled,
        spacing,
    }
) => {

    const handleChange = (event) => {
        onChange(event);
    };

    return (
        <label htmlFor={id} className={clsx(classes.blockWithInput, classes[spacing], className, "d-flex")}>
            <span className={clsx(classes[labelColor], classes.label, classes[errorLabel])}>
                {label}
            </span>
            <input
                className={clsx(classes.input, classes[size], classes[errorInput])}
                id={id}
                name={name}
                type={type}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
            />
            <span className={clsx(classes.error, "d-flex justify-content-end")}>
                {error}
            </span>
        </label>
    );
};

Input.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large', 'numberInput']),
    labelColor: PropTypes.oneOf(['white', 'black']),
    spacing: PropTypes.oneOf(['mb-0', 'mb-2', 'mb-3', 'mb-4', 'mb-5']),
    onChange: PropTypes.func,
    error: PropTypes.string,
    errorInput: PropTypes.string,
    errorLabel: PropTypes.string,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    label: '',
    placeholder: '',
    className: 'flex-column',
    labelColor: 'black',
    type: 'text',
    spacing: 'mb-0',
};

export default Input;
