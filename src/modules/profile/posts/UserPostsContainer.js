import React, {useEffect, useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {setPosts} from 'modules/post/store/actions';
import {connect} from "react-redux";
import UserPostsComponent from "./UserPostsComponent";
import isEmpty from 'lodash/isEmpty';


const UserPostsContainer = (
    {
        posts,
    }
) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!isEmpty(posts)) {
            return;
        }
        dispatch(setPosts())
    }, [])

    const userPosts = useMemo(() => {
        return posts
            ? posts
            : null
    }, [posts])


    const user = useSelector(state => state.auth.user)

    const userAuth = useMemo(() => {
        return user && user[0]
            ? user[0].id
            : null
    }, [user])

    return (
        <UserPostsComponent posts={userPosts} user={userAuth}/>
    );
};

UserPostsContainer.propTypes = {
    data: PropTypes.array,
};

UserPostsContainer.defaultProps = {
    data: [],
};
const mapStateToProps = ({posts: {posts, error}}) => ({
    posts, error
});

export default connect(mapStateToProps)(UserPostsContainer);