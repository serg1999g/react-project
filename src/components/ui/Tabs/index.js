import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import {Tabs, Tab} from 'react-bootstrap'
import classes from './Tabs.module.scss'
import clsx from 'clsx';


const CustomTabs = (
    {

    }
) => {
    const [key, setKey] = useState('userInfo');

    return (

        <Tabs
            className={classes.tabs}
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}>
            <Tab
                tabClassName={clsx(classes.tab, key === 'userInfo' ? classes.active : null)}
                eventKey="userInfo"
                title='User Info'>

            </Tab>
            <Tab
                tabClassName={clsx(classes.tab, key === 'postsInfo' ? classes.active : null)}
                eventKey="postsInfo"
                title='Posts Info'>

            </Tab>
            <Tab
                tabClassName={clsx(classes.tab, key === 'requirements' ? classes.active : null)}
                eventKey="requirements"
                title='RequirementsTab'>

            </Tab>
        </Tabs>
    )
};

CustomTabs.propTypes = {
    editUser: PropTypes.children,
    editPost: PropTypes.children,
};

CustomTabs.defaultProps = {};

export default CustomTabs;
