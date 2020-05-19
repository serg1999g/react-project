import React, {useEffect, useCallback, useState} from 'react';
import * as PropTypes from 'prop-types';
import Mission from "components/sections/mission";
import {useDispatch} from 'react-redux';
import {setMissions} from 'modules/mission/store/actions';
import isEmpty from 'lodash/isEmpty';
import {connect} from "react-redux";
import classes from './Missions.module.scss';

const MissionsComponent = (
    {
        missions,
    }
) => {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState(null);

    const fetchApi = useCallback(async () => {
        await dispatch(setMissions());
        setPosts(missions.data)
    });

    useEffect(() => {
        if (!isEmpty(missions)) {
            setPosts(missions.data);
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
                        path={`/missions/${post.id}`}
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
    missions: PropTypes.object,
    error: PropTypes.string,
};

MissionsComponent.defaultProps = {
    missions: {},
};
const mapStateToProps = ({missions: {missions, error}}) => ({
    missions, error
});

export default connect(mapStateToProps)(MissionsComponent);
