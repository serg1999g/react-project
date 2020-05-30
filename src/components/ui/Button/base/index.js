import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import classes from './Button.module.scss';
import SpriteIcon from "components/icons/SpriteIcon";


const Button = (
    {
        Btn,
        color,
        variant,
        text,
        size,
        spacing,
        onClick,
        disabled,
        type,
        nameIcon,
        sizeIcon
    }
) => {

    return (
        <button type={type}
                className={clsx(classes[color], spacing, classes[size], classes[Btn], classes[variant], 'd-flex align-items-center')}
                onClick={onClick} disabled={disabled}>
            {nameIcon ? <SpriteIcon name={nameIcon} className={classes.icon} size={classes[sizeIcon]}/> : null}
            <span className={classes.text}>
                {text}
            </span>
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    Btn: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    spacing: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'outlinePrimary', 'danger', 'secondary', 'success', 'primaryNotBg', 'custom', 'circle', 'disableCircle', 'facebook']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'customSize', 'postsearchBtn', 'circleSize']),
    onClick: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    nameIcon: PropTypes.string,
};

Button.defaultProps = {
    type: 'submit',
    Btn: 'customBtn',
    variant: 'primary',
    size: 'large',
    spacing: '',
    sizeIcon: '',
};

export default Button;
