import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import Image from "components/ui/Image";


const UserProfile = (
    {
        id,
        image,
        name,
        email
    }
) => {
    const renderImage = useMemo(() => image.map(({image, id}) => (
        <Image
            key={id}
            id={id}
            image={image}
            size='large'
        />
    )), [image]);
    return (
        <div id={id}>
            <div>
                {renderImage}
            </div>
            <h4>
                {name}
            </h4>
            <h4>{email}</h4>
        </div>
    );
};

UserProfile.propTypes = {
    image: PropTypes.array,
};

UserProfile.defaultProps = {
    image: []
};

export default UserProfile;
