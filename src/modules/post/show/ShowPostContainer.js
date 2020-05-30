import React, {useEffect, useCallback, useState} from 'react';
import {useParams} from "react-router-dom";
import ShowPostComponent from "./ShowPostComponent";
import PostService from "../PostService";


const ShowPostContainer = (
    {}
) => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    const fetchApi = useCallback(async () => {
        const response = await PostService.getPost(id);
        setPost(response)
    });

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <ShowPostComponent item={post.data}/>
    );
};

export default ShowPostContainer;
// TODO
// ) => {
//     const {id} = useParams();
//     const dispatch = useDispatch()
//
//     const fetchApi = useCallback(async () => {
//         await dispatch(setpost(id));
//
//     });
//
//     useEffect(() => {
//         if (!isEmpty(post.data.id === id)) {
//             return;
//         }
//         fetchApi();
//     }, [])
//
//     return (
//         <ShowPostComponent item={post.data}/>
//     );
// };
//
// ShowPostContainer.propTypes = {
//     posts: PropTypes.object,
//     error: PropTypes.string,
// };
//
// ShowPostContainer.defaultProps = {
//     post: {},
// };
// const mapStateToProps = ({posts: {post, error}}) => ({
//     post, error
// });
//
// export default connect(mapStateToProps)(ShowPostContainer);