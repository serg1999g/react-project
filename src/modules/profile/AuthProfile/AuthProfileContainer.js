import React, {useEffect, useCallback, useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {setAuthProfile} from "../store/actions";
import {useDispatch} from 'react-redux';
import AuthProfileComponent from "./AuthProfileComponent";
import {connect} from "react-redux";


const AuthProfileContainer = (
    {
        data
    }
) => {
    const dispatch = useDispatch()

    const fetchApi = useCallback(async () => {
        await dispatch(setAuthProfile());
    });

    const user = useMemo(() => {
        return data && data.user
            ? data.user
            : null
    }, [data])

    const posts = useMemo(() => {
        return data && data.post
            ? data.post
            : null
    }, [data])


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

const mapStateToProps = ({profile: {profile: {data, error}}}) => ({
    data, error
});

export default connect(mapStateToProps)(AuthProfileContainer);