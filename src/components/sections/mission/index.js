import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Mission.module.scss';
import BaseLink from "components/ui/Link/Base";
import clsx from 'clsx';

const Mission = (
    {
        id,
        name,
        image,
        path,
        description,
        spacing
    }
) => {

    return (
        <div className={clsx(classes.mission, 'd-flex')}>
            <img className={classes.image} src={image} alt="mission"/>
            <div className={classes.blockWithDescription}>
                <BaseLink path={path} title={name} spacing={spacing}/>
                <p className={classes.description}>
                    {description}
                </p>
            </div>
        </div>
    );
};

Mission.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    path: PropTypes.string,
    spacing: PropTypes.string,
};

Mission.defaultProps = {
    path: '/',
};

export default Mission;
