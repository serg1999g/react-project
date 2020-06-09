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
        language,
        location,
        duration,
        start,
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
                <p className={classes.description}>
                    {language}
                </p>
                <p className={classes.description}>
                    {location}
                </p>
                <p className={classes.description}>
                    {duration}
                </p>
                <p className={classes.description}>
                    {start}
                </p>
            </div>
        </div>
    );
};

ShowPost.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    images: PropTypes.array,
    description: PropTypes.string,
    content: PropTypes.string,
    path: PropTypes.string,
    spacing: PropTypes.string,
};

ShowPost.defaultProps = {
    path: '/',
    images: [],
};

export default ShowPost;
