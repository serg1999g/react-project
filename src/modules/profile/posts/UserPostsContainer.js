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
    }, [posts, dispatch])

    const user = useSelector(state => state.auth.user)

    const userAuth = useMemo(() => {
        return user && user[0]
            ? user[0].id
            : null
    }, [user])

    return (
        <UserPostsComponent posts={posts} user={userAuth}/>
    );
};

UserPostsContainer.propTypes = {
    posts: PropTypes.array,
};

UserPostsContainer.defaultProps = {
    posts: [],
};
const mapStateToProps = ({posts: {posts,error}}) => ({
    posts, error
});

export default connect(mapStateToProps)(UserPostsContainer);