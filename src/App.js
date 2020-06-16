import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {routesByName} from 'constants/routes';
import HomePage from 'modules/pages/HomePage';
import Page404 from 'modules/pages/Page404';
import SignUpContainer from "./modules/auth/signUp/SignUpContainer";
import Header from "components/partials/Header";
import Footer from "components/partials/Footer";
import {PrivateRoute} from "./routers/PrivateRoute";
import {PublicRoute} from './routers/PublicRoute';
import {setUser} from "./modules/auth/store/actions";
import isEmpty from 'lodash/isEmpty';
import postsContainer from "./modules/post/posts/PostsContainer";
import SignInContainer from "./modules/auth/signIn/signInContainer";
import PostPage from "./modules/pages/PostPage";
import AuthProfileContainer from "./modules/profile/AuthProfile/AuthProfileContainer";
import EditPostContainer from "./modules/post/edit/EditPostContainer";
import SpeciesWeProtect from "./modules/pages/SpeciesWeProtect";
import CreatePostContainer from "./modules/post/create/CreatePostContainer";
import FightClimateChange from "./modules/pages/FightClimateChange";

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
                <PublicRoute exact path={routesByName.signIn} component={SignInContainer}/>
                <PrivateRoute exact path={routesByName.posts} component={postsContainer}/>
                <PrivateRoute exact path={routesByName.profile} component={AuthProfileContainer}/>
                <PrivateRoute exact path={routesByName.createPost} component={CreatePostContainer}/>
                <PrivateRoute exact path="/posts/:id" component={PostPage}/>
                <PrivateRoute exact path="/posts/:id/edit" component={EditPostContainer}/>
                <PublicRoute exact path={routesByName.signUp} component={SignUpContainer}/>
                <Route exact path={routesByName.speciesWeProtect} component={SpeciesWeProtect}/>
                <Route exact path={routesByName.FightClimateChange} component={FightClimateChange}/>
                <Route exact path="*" component={Page404}/>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
