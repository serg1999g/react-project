import React, {useEffect, useCallback, useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {setAuthProfile} from "../store/actions";
import {useDispatch, useSelector} from 'react-redux';
import AuthProfileComponent from "./AuthProfileComponent";

const AuthProfileContainer = (
    {}
) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile.profile.data)

    const fetchApi = useCallback(async () => {
        await dispatch(setAuthProfile());
    });

    const user = useMemo(() => {
        return profile && profile.user
            ? profile.user
            : null
    }, [profile])

    const posts = useMemo(() => {
        return profile && profile.post
            ? profile.post
            : null
    }, [profile])


    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
            <AuthProfileComponent posts={posts} user={user}/>
        </div>
    );
};

AuthProfileContainer.propTypes = {
    profile: PropTypes.object,
    error: PropTypes.string,
};

AuthProfileContainer.defaultProps = {
    profile: {},
};

export default AuthProfileContainer;