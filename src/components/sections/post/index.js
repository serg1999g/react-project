import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Post.module.scss';
import BaseLink from "components/ui/Link/Base";
import clsx from 'clsx';
import Image from "components/ui/Image";
import {deletePost} from "modules/post/store/actions";
import {useDispatch} from 'react-redux';


const Post = (
    {
        id,
        name,
        image,
        path,
        description,
        spacing,
        editPost,
    }
) => {
    const renderImage = useMemo(() => image.map(({image, id}) => (
        <Image
            key={id}
            id={id}
            image={image}
        />
    )), [image]);

    const dispatch = useDispatch()

    const handleClick = ((event) => {
        event.preventDefault();
        dispatch(deletePost(id))
    })

    return (
        <div id={id} className={clsx(classes.post, 'd-flex align-items-center justify-content-between')}>
            <div className='d-flex'>
                {renderImage}
                <div className={classes.blockWithDescription}>
                    <BaseLink path={path} title={name} spacing={spacing}/>
                    <p className={classes.description}>
                        {description}
                    </p>
                </div>
            </div>

            {editPost
                ?
                <div className={classes.wrapperBtn}>

                    <BaseLink title='Edit' path={editPost}/>
                    <button className={classes.btnDelete} key={id} onClick={handleClick}>Delete</button>
                </div>
                : null
            }
        </div>
    );
};

Post.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.array,
    description: PropTypes.string.isRequired,
    path: PropTypes.string,
    editPost: PropTypes.string,
    spacing: PropTypes.string,
};

Post.defaultProps = {
    path: '/',
    image: [],
    editPost: '',
};

export default Post;
