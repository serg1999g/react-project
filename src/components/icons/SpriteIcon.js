import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import classes from './SpriteIcon.module.scss';

const SpriteIcon = (
    {
        className, name, size, colorIcon, ...props
    }
) => (
    <svg
        className={clsx(classes[size], className)}
        {...props}
    >
        <use xlinkHref={`#${name}`} fill={colorIcon}/>
    </svg>
);


SpriteIcon.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['primary','custom']),
    colorIcon: PropTypes.string,
    rotate: PropTypes.number,
};

SpriteIcon.defaultProps = {
    className: '',
    colorIcon: '',
    size: 'primary',
    rotate: 0,
};

export default SpriteIcon;
