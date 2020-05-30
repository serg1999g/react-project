import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./Posts.module.scss";
import Post from "components/sections/post";


const PostsComponent = (
    {
        items
    }
) => {
    const renderPosts = useMemo(() => items.map(({id, images, name, description}) => (
        <Post
            key={id}
            id={id}
            path={`/posts/${id}`}
            description={description}
            name={name}
            image={images}
        />
    )), [items]);

    return (
        <section className={classes.sectionPosts}>
            <div className="container">
                {renderPosts}
            </div>
        </section>
    );
};

PostsComponent.propTypes = {
    items: PropTypes.array,
};

PostsComponent.defaultProps = {
    items: [],
};

export default PostsComponent;
