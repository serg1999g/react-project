import React, {useEffect, useCallback} from 'react';
import * as PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setMissions} from 'modules/mission/store/actions';
import isEmpty from 'lodash/isEmpty';
import {connect} from "react-redux";
import MissionsComponent from "./MissionsComponent";

const MissionsContainer = (
    {
        missions,
    }
) => {
    const dispatch = useDispatch();

    const fetchApi = useCallback(async () => {
        await dispatch(setMissions());
    }, []);

    useEffect(() => {
        if (!isEmpty(missions)) {
            return;
        }
        fetchApi();
    }, [])

    return (
        <MissionsComponent items={missions.data}/>
    );
};

MissionsContainer.propTypes = {
    missions: PropTypes.object,
    error: PropTypes.string,
};

MissionsContainer.defaultProps = {
    missions: {},
};
const mapStateToProps = ({missions: {missions, error}}) => ({
    missions, error
});

export default connect(mapStateToProps)(MissionsContainer);
