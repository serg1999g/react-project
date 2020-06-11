import React, {} from 'react';
import * as PropTypes from 'prop-types';
import classes from './EditAvatar.module.scss';


const EditAvatarContainer = (
    {
        image
    }
) => {
    console.log(image)
    return (
        <div>

        </div>
    );
};

EditAvatarContainer.propTypes = {
    image: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageable_id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })
};

EditAvatarContainer.defaultProps = {};

export default EditAvatarContainer;