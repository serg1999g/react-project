import React, {useEffect, useCallback, useMemo} from 'react';
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
    }, [dispatch]);

    useEffect(() => {
        if (!isEmpty(posts)) {
            return;
        }
        fetchApi();
    }, [])

    const Posts = useMemo(() => {
        return posts
            ? posts
            : null
    }, [posts])

    return (
        <PostsComponent items={Posts}/>
    );
};

PostsContainer.propTypes = {
    posts: PropTypes.array,
    error: PropTypes.string,
};

PostsContainer.defaultProps = {
    posts: [],
};
const mapStateToProps = ({posts: {posts, error}}) =>
    ({
        posts, error
    });

export default connect(mapStateToProps)(PostsContainer);
