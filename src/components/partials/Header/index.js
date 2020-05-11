import React, {useEffect} from 'react';
import classes from './Header.module.scss';
import BaseLink from "components/ui/Link/Base";
import {useSelector, useDispatch} from 'react-redux';
import {routesByName} from "constants/routes";
import {logout as logoutAction} from "modules/auth/store/actions";

const Header = (
    {}
) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const Logout = (event) => {
        event.preventDefault();
        dispatch(logoutAction())
    }

    return (
        <header className={classes.header}>
            <div className="container">
                <div className='d-flex justify-content-between align-items-center'>
                    <div>
                        {isAuthenticated ?
                            <BaseLink path={routesByName.home} title='Home'/>
                            : null
                        }

                    </div>
                    <div>
                        {
                            !isAuthenticated ?
                                <div>
                                    <BaseLink path={routesByName.signIn} title='Sign In' spacing='mr-2'/>
                                    <BaseLink path={routesByName.signUp} title='Sign Up'/>
                                </div>
                                : <a className={classes.link} href="#" onClick={Logout}>Logout</a>
                        }

                    </div>
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
