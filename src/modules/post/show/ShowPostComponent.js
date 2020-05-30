import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import ShowPost from "components/sections/ShowPost";


const ShowPostComponent = (
    {
        item
    }
) => {
    const renderPost = useMemo(() => item.map(({...props}) => (
        <ShowPost
            key={props.id}
            {...props}
        />
    )), [item]);

    return (
        <section>
            <div className="container">
                {renderPost}
            </div>
        </section>
    );
};

ShowPostComponent.propTypes = {
    item: PropTypes.array,
};

ShowPostComponent.defaultProps = {
    item: []
};

export default ShowPostComponent;