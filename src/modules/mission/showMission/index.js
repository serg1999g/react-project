import React, {useEffect, useCallback} from 'react';
import * as PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from "react-router-dom";
import {setMission} from "../store/actions";
import {connect} from 'react-redux';

const ShowMission = (
    {
        mission
    }
) => {
    const dispatch = useDispatch();
    const {id} = useParams();

    // const fetchApi = useCallback(async () => {
    //     await dispatch(setMission(id));
    // });

    console.log(mission)


    // useEffect(() => {
    //     fetchApi();
    // }, [])
    // console.log(id)


    return (
        <section>
            <div className="container">

            </div>
        </section>
    );
};

ShowMission.propTypes = {
    mission: PropTypes.object,
};

ShowMission.defaultProps = {
    mission: {},
};

const mapStateToProps = ({missions: {mission, error}}) => ({
    mission, error
});

export default connect(mapStateToProps)(ShowMission);
