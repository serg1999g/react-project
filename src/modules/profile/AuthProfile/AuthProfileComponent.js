import React, {useMemo} from 'react';
import * as PropTypes from 'prop-types';
import UserProfile from "components/sections/Profile/User";


const AuthProfileComponent = (
    {
        user,
        posts,
    }
) => {
    const renderUserInfo = useMemo(() => {
        if (!user) {
            return null;
        }
        return user.map(({id, email, name, image}) => (
            <UserProfile
                key={id}
                id={id}
                email={email}
                name={name}
                image={image}

            />
        ))
    }, [user]);

    return (
        <div className='container'>
            {renderUserInfo}
        </div>
    );
};

AuthProfileComponent.propTypes = {
    user: PropTypes.array,
    posts: PropTypes.array,
};

AuthProfileComponent.defaultProps = {
    user: [],
    posts: [],
};

export default AuthProfileComponent;
