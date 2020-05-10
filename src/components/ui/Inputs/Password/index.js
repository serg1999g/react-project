import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./InputPassword.module.scss";
import Input from "../Base";
import SpriteIcon from "components/icons/SpriteIcon";


const PasswordInput = (
    {
        id,
        spacing,
        name,
        placeholder,
        onChange,
        label,
        value,
        error,
        errorInput,
        errorLabel,
    }
) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const handleClick = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div>
            <div className={classes.inputWithPassword}>
                <Input
                    id={id}
                    type={passwordShown ? "text" : "password"}
                    spacing={spacing}
                    name={name}
                    placeholder={placeholder}
                    label={label}
                    value={value}
                    error={error}
                    errorInput={errorInput}
                    errorLabel={errorLabel}
                    onChange={onChange}
                />
                <span className={classes.passwordShow} onClick={handleClick}>
                    <SpriteIcon name='show' className={classes.icon}/>
                </span>
            </div>
        </div>
    );
};

PasswordInput.propTypes = {
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
};

PasswordInput.defaultProps = {};

export default PasswordInput;
