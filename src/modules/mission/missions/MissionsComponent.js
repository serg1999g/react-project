import React, {useEffect, useCallback, useState} from 'react';
import * as PropTypes from 'prop-types';
import Mission from "components/sections/mission";
import {useDispatch} from 'react-redux';
import {setMission} from 'modules/mission/store/actions';
import isEmpty from 'lodash/isEmpty';
import {connect} from "react-redux";
import classes from './Missions.module.scss';

const MissionsComponent = (
    {
        mission,
    }
) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState(null);

    const fetchApi = useCallback(async () => {
        await dispatch(setMission());
        setPosts(mission.data)
    });

    useEffect(() => {
        if (!isEmpty(mission)) {
            setPosts(mission.data);
            return;
        }
        fetchApi();
    }, [fetchApi])

    if (!posts) {
        return 'loading...';
    }

    return (
        <section className={classes.sectionMissions}>
            <div className="container">
                {posts.map(post => (
                    <Mission
                        key={post.id}
                        name={post.name}
                        description={post.description}
                        id={post.id}/>
                ))}
            </div>
        </section>
    );
};

MissionsComponent.propTypes = {
    mission: PropTypes.object,
    error: PropTypes.string,
};

MissionsComponent.defaultProps = {
    mission: {},
};
const mapStateToProps = ({mission: {mission, error}}) => ({
    mission, error
});

export default connect(mapStateToProps)(MissionsComponent);
