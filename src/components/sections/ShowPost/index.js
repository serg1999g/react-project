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

            <div className={clsx(classes.blockWithDescription, 'd-flex align-items-center')}>
                <div>
                    {renderImage}
                </div>
                <div className='ml-4'>
                    <h4>Название: {name}</h4>
                    <p className={classes.description}>
                        Программа: {description}
                    </p>

                    <p className={classes.description}>
                        Языки: {language}
                    </p>
                    <p className={classes.description}>
                        Место: {location}
                    </p>
                    <p className={classes.description}>
                        Продолжительность: {duration}
                    </p>
                    <p className={classes.description}>
                        Когда: {start}
                    </p>
                </div>
            </div>
            <div>
                <p className={classes.content}>
                    {content}
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
