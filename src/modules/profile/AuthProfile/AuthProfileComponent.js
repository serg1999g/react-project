import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import EditProfileContainer from "../edit/EditProfileContainer";
import {Tabs, Tab} from 'react-bootstrap'
import classes from 'components/ui/Tabs/Tabs.module.scss'
import clsx from 'clsx';
import UserPostsContainer from "../posts/UserPostsContainer";
import PasswordContainer from "../password/PasswordContainer";
import EditAvatarContainer from "../editAvatar/EditAvatarContainer";


const AuthProfileComponent = (
    {
        user,
        image,
    }
) => {

    const [key, setKey] = useState('userInfo');

    return (
        <div className='container'>
            <Tabs
                className={classes.tabs}
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                <Tab
                    tabClassName={clsx(classes.tab, 'd-flex', key === 'userInfo' ? classes.active : null)}
                    eventKey="userInfo"
                    title='User Info'>
                    <div className='d-flex'>
                        <EditProfileContainer user={user}/>
                        <PasswordContainer/>
                        <EditAvatarContainer image={image}/>
                    </div>
                </Tab>
                <Tab
                    tabClassName={clsx(classes.tab, key === 'postsInfo' ? classes.active : null)}
                    eventKey="postsInfo"
                    title='Posts Info'>
                    <UserPostsContainer/>
                </Tab>
                <Tab
                    tabClassName={clsx(classes.tab, key === 'requirements' ? classes.active : null)}
                    eventKey="requirements"
                    title='RequirementsTab'>

                </Tab>
            </Tabs>


        </div>
    );
};

AuthProfileComponent.propTypes = {
    user: PropTypes.object,
    image: PropTypes.object,
};

AuthProfileComponent.defaultProps = {
    user: {},
    image: {},
};

export default AuthProfileComponent;
