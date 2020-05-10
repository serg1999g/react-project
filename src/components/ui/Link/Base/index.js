import React, {} from 'react';
import * as PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import classes from './BaseLink.module.scss';
import clsx from 'clsx';

const BaseLink = (
    {
        path,
        title,
        spacing,
    }
) => {

    return (
        <NavLink to={path} className={clsx(classes.link, spacing)}>
            {title}
        </NavLink>
    );
};

BaseLink.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string,
    spacing: PropTypes.string,
};

BaseLink.defaultProps = {};

export default BaseLink;
