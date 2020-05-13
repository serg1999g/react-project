import React, {useEffect} from 'react';
import Mission from "components/sections/mission";
import {useDispatch} from 'react-redux';
import {setMission} from "../mission/store/actions";


const HomePage = (
    {}
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMission())
    },[])

    return (
        <main className='my-5'>
            <div className="container">
                <Mission path='/' image=''
                         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                         title='title text'/>
                <Mission path='/' image=''
                         description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                         title='title text'/>
            </div>
        </main>
    );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
