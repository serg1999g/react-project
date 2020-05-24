import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import classes from "./Missions.module.scss";
import Mission from "components/sections/mission";


const MissionsComponent = (
    {
        items
    }
) => {
    const renderPosts = useMemo(() => items.map(({id, images, name, description}) => (
        <Mission
            key={id}
            id={id}
            path={`/missions/${id}`}
            description={description}
            name={name}
            image={images}
        />
    )), [items]);

    return (
        <section className={classes.sectionMissions}>
            <div className="container">
                {renderPosts}
            </div>
        </section>
    );
};

MissionsComponent.propTypes = {
    items: PropTypes.array,
};

MissionsComponent.defaultProps = {
    items: [],
};

export default MissionsComponent;
