import React, {useEffect, useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {setPosts} from 'modules/post/store/actions';
import isEmpty from 'lodash/isEmpty';
import {connect} from "react-redux";
import UserPostsComponent from "./UserPostsComponent";


const UserPostsContainer = (
    {
        posts,
    }
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPosts())
    }, [])

    const userPosts = useMemo(() => {
        return posts && posts.data
            ? posts.data
            : null
    }, [posts])


    const user = useSelector(state => state.auth.user)
    const userAuth = useMemo(() => {
        return user && user.data
            ? user.data[0].id
            : null
    }, [user])

    return (
        <UserPostsComponent posts={userPosts} user={userAuth}/>
    );
};

UserPostsContainer.propTypes = {
    posts: PropTypes.object,
    error: PropTypes.string,
};

UserPostsContainer.defaultProps = {
    posts: {},
};
const mapStateToProps = ({posts: {posts, error}}) => ({
    posts, error
});

export default connect(mapStateToProps)(UserPostsContainer);