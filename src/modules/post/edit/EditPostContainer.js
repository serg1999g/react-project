import React, {} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import EditPostComponent from "./EditPostComponent";


const EditPostContainer = (
    {}
) => {

    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.posts.data)

    console.log(post)

    return (
        <EditPostComponent/>
    );
};

export default EditPostContainer;