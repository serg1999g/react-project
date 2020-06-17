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
        <div id={id} className={clsx(classes.post, 'd-flex flex-column')}>
            <h3 className='text-center'>{name}</h3>
            <div className={clsx(classes.blockWithDescription, 'd-flex align-items-center')}>
                <div>
                    <p className={classes.description}>
                        <span className={classes.titleName}>Программа:</span> {description}
                    </p>

                    <p className={classes.description}>
                        <span className={classes.titleName}>Языки:</span> {language}
                    </p>
                    <p className={classes.description}>
                        <span className={classes.titleName}>Место:</span> {location}
                    </p>
                    <p className={classes.description}>
                        <span className={classes.titleName}>Продолжительность:</span> {duration}
                    </p>
                    <p className={classes.description}>
                        <span className={classes.titleName}>Когда:</span> {start}
                    </p>
                    <p className={classes.content}>
                        <span className={clsx(classes.titleName, 'd-flex mb-1')}>Описание:</span> {content}
                    </p>
                </div>
            </div>
            <div>
                <div className='d-flex flex-wrap my-2'>
                    {renderImage}
                </div>
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
