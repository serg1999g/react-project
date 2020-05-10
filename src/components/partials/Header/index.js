import React, {} from 'react';
import classes from './Header.module.scss';
import BaseLink from "components/ui/Link/Base";
import {routesByName} from "constants/routes";

const Header = (
    {}
) => {

    return (
        <header className={classes.header}>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        <BaseLink path={routesByName.home} title='Home'/>
                    </div>
                    <div>
                        <BaseLink path={routesByName.signIn} title='Sign In' spacing='mr-2'/>
                        <BaseLink path={routesByName.signUp} title='Sign Up'/>
                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
