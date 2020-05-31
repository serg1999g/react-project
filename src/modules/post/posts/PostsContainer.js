import React, {useEffect, useCallback} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setPosts} from 'modules/post/store/actions';
import isEmpty from 'lodash/isEmpty';
import {connect} from "react-redux";
import PostsComponent from "./PostsComponent";

const PostsContainer = (
    {
        posts,
    }
) => {
    const dispatch = useDispatch();

    const fetchApi = useCallback(async () => {
        await dispatch(setPosts());
    }, []);

    useEffect(() => {
        if (!isEmpty(posts)) {
            return;
        }
        fetchApi();
    }, [])

    return (
        <PostsComponent items={posts}/>
    );
};

PostsContainer.propTypes = {
    posts: PropTypes.array,
    error: PropTypes.string,
};

PostsContainer.defaultProps = {
    posts: [],
};
const mapStateToProps = ({posts: {posts, error}}) => ({
    posts, error
});

export default connect(mapStateToProps)(PostsContainer);
