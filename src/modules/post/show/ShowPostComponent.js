import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import ShowPost from "components/sections/ShowPost";


const ShowPostComponent = (
    {
        item
    }
) => {
    const post = useMemo(() => {
        return item.data
            ? item.data
            : {}
    }, [item])

    return (
        <section>
            <div className="container">
                <ShowPost
                    id={post.id}
                    name={post.name}
                    content={post.content}
                    description={post.description}
                    images={post.images}
                    language={post.language}
                    location={post.location}
                    duration={post.duration}
                    start={post.start}
                />
            </div>
        </section>
    );
};

ShowPostComponent.propTypes = {
    item: PropTypes.object,
};

ShowPostComponent.defaultProps = {
    item: {}
};

export default ShowPostComponent;