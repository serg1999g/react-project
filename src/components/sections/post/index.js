import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Post.module.scss';
import BaseLink from "components/ui/Link/Base";
import clsx from 'clsx';
import Image from "components/ui/Image";

const Post = (
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
        <div id={id} className={clsx(classes.post, 'd-flex')}>
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

Post.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.array,
    description: PropTypes.string.isRequired,
    path: PropTypes.string,
    spacing: PropTypes.string,
};

Post.defaultProps = {
    path: '/',
    image: [],
};

export default Post;
