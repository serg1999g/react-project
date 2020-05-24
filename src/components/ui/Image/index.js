import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Image.module.scss';
import clsx from 'clsx';

const Image = (
    {
        id,
        image,
        size
    }
) => {

    return (
        <div className={classes.blockImage}>
            <img id={id} src={image} className={clsx(classes.image, classes[size])}/>
        </div>
    );
};

Image.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Image.defaultProps = {
    size: 'small',
};

export default Image;
