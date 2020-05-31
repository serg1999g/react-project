import React, {useEffect, useCallback, useState} from 'react';
import {useParams} from "react-router-dom";
import ShowPostComponent from "./ShowPostComponent";
import PostService from "../PostService";


const ShowPostContainer = (
    {}
) => {
    const {id} = useParams();
    const [post, setPost] = useState([]);

    const fetchApi = useCallback(async () => {
        const response = await PostService.getPost(id);
        setPost(response)
    });

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <ShowPostComponent item={post}/>
    );
};

export default ShowPostContainer;