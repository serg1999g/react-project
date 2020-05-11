import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {routesByName} from 'constants/routes';
import HomePage from 'modules/pages/HomePage';
import Page404 from 'modules/pages/Page404';
import SignUpContainer from 'modules/auth/signUp/SignUpContainer';
import SignInComponent from "./modules/auth/signIn/signInComponent";
import Header from "components/partials/Header";
import Footer from "components/partials/Footer";
import {PrivateRoute} from "./routers/PrivateRoute";
import {PublicRoute} from './routers/PublicRoute';
import {setUser} from "./modules/auth/store/actions";
import isEmpty from 'lodash/isEmpty';

function App() {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!isEmpty(user)) {
            return;
        }
        if (token) {
            dispatch(setUser());
        }
    }, []);

    return (
        <>
            <Header/>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}/>
                    <PublicRoute exact path={routesByName.signIn} component={SignInComponent}/>
                    <PublicRoute exact path={routesByName.signUp} component={SignInComponent}/>
                    <Route exact path="*" component={Page404}/>
                </Switch>
            <Footer/>
        </>
    );
}

export default App;
