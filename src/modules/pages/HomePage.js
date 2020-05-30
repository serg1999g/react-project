import React, {} from 'react';
import UploadImage from "../../components/ui/UploadImage";
import AuthProfileContainer from "../profile/AuthProfile/AuthProfileContainer";


const HomePage = (
    {}
) => {

    return (
        <main className='my-5'>
            <div className="container">
                home
                <UploadImage/>
                <AuthProfileContainer/>
            </div>
        </main>
    );
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
