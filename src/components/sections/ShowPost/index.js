import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./ShowPosts.module.scss";
import Image from "components/ui/Image";
import clsx from 'clsx';

const ShowPost = (
    {
        id,
        name,
        description,
        content,
        images,
    }
) => {
    const renderImage = useMemo(() => images.map(({image, id}) => (
        <Image
            key={id}
            id={id}
            image={image}
            size='large'
        />
    )), [images]);

    return (
        <div id={id} className={clsx(classes.post, 'd-flex')}>
            {renderImage}
            <div className={classes.blockWithDescription}>
                <h4>{name}</h4>
                <p className={classes.description}>
                    {description}
                </p>
                <p className={classes.content}>
                    {content}
                </p>
            </div>
        </div>
    );
};

ShowPost.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.array,
    description: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    path: PropTypes.string,
    spacing: PropTypes.string,
};

ShowPost.defaultProps = {
    path: '/',
    image: [],
};

export default ShowPost;
