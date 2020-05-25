import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Mission.module.scss';
import BaseLink from "components/ui/Link/Base";
import clsx from 'clsx';
import Image from "components/ui/Image";

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
    const renderImage = useMemo(() => image.map(({image, id}) => (
        <Image
            key={id}
            id={id}
            image={image}
        />
    )), [image]);

    return (
        <div id={id} className={clsx(classes.mission, 'd-flex')}>
            {renderImage}
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
    image: PropTypes.array,
    description: PropTypes.string.isRequired,
    path: PropTypes.string,
    spacing: PropTypes.string,
};

Mission.defaultProps = {
    path: '/',
    image: [],
};

export default Mission;
