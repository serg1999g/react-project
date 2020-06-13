import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from './UserPosts.module.scss';
import Post from "components/sections/post";
import BaseLink from "components/ui/Link/Base";

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
                        image={post.images}
                        editPost={`/posts/${post.id}/edit`}
                    />
                )
            }, [posts]);
    });

    return (
        <section className={classes.sectionPosts}>
            <div className={classes.link}><BaseLink path='' title='Create post'/></div>
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
