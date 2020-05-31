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
    });

    const user = useMemo(() => {
        return profile
            ? profile[0]
            : null
    }, [profile])


    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <div>
            <AuthProfileComponent user={user}/>
        </div>
    );
};

AuthProfileContainer.propTypes = {
    profile: PropTypes.array,
    error: PropTypes.string,
};

AuthProfileContainer.defaultProps = {
    profile: [],
};

const mapStateToProps = ({profile: {profile, error}}) => ({
    profile, error
});

export default connect(mapStateToProps)(AuthProfileContainer);