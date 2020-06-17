import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from './Post.module.scss';
import BaseLink from "components/ui/Link/Base";
import clsx from 'clsx';
import {deletePost} from "modules/post/store/actions";
import {useDispatch} from 'react-redux';
import defaultImage from 'assets/images/default.png';


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
    const renderImage = useMemo(() => {
        return image && image[0]
            ? image[0].image
            : defaultImage
    }, [image])

    const dispatch = useDispatch()

    const handleClick = ((event) => {
        event.preventDefault();
        dispatch(deletePost(id))
    })

    return (
        <div id={id} className={clsx(classes.post, 'd-flex align-items-center justify-content-between')}>
            <div className={clsx(classes.wrapperContent, 'd-flex')}>
                <div className={classes.imageBlock}>
                    <img className={classes.image} src={renderImage} alt=""/>
                </div>
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
