import React, {useEffect, useCallback, useMemo} from 'react';
import * as PropTypes from 'prop-types';
import {setAuthProfile} from "../store/actions";
import {useDispatch} from 'react-redux';
import AuthProfileComponent from "./AuthProfileComponent";
import {connect} from "react-redux";


const AuthProfileContainer = (
    {
        profile
    }
) => {
    const dispatch = useDispatch()

    const fetchApi = useCallback(async () => {
        await dispatch(setAuthProfile());
    },[dispatch]);

    const user = useMemo(() => {
        return profile.data
            ? profile.data
            : null
    }, [profile])

    const image = useMemo(() => {
        return profile.data
            ? profile.data.images
            : null
    },[profile])

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <div>
            <AuthProfileComponent user={user} image={image}/>
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

const mapStateToProps = ({profile: {profile, error}}) => ({
    profile, error
});

export default connect(mapStateToProps)(AuthProfileContainer);