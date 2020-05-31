import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from './UserPosts.module.scss';
import Post from "components/sections/post";

const UserPostsComponent = (
    {
        posts,
        user
    }
) => {
    const renderUserInfo = useMemo(() => {
        if (!posts) {
            return;
        }

        return posts.filter(post => post.user_id === user)
            .map((post, index) => {
                return (
                    <Post
                        key={index}
                        id={post.id}
                        description={post.description}
                        name={post.name}
                        path={`/posts/${post.id}`}
                        image={post.image}
                        editPost={`/posts/${post.id}/edit`}
                    />
                )
            }, [posts]);
    });

    return (
        <section
            className={classes.sectionPosts}>
            <div className="container">
                {renderUserInfo}
            </div>
        </section>
    );
};

UserPostsComponent.propTypes = {
    posts: PropTypes.array,
};

UserPostsComponent.defaultProps = {
    posts: [],
};

export default UserPostsComponent;
