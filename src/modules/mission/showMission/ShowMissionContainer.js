import React, {useEffect, useCallback, useState} from 'react';
import {useParams} from "react-router-dom";
import ShowMissionComponent from "./ShowMissionComponent";
import MissionService from "../MissionService";


const ShowMissionContainer = (
    {}
) => {
    const {id} = useParams();
    const [post, setPost] = useState({});

    const fetchApi = useCallback(async () => {
        const response = await MissionService.getMission(id);
        setPost(response)
    });

    useEffect(() => {
        fetchApi();
    }, [])

    return (
        <ShowMissionComponent item={post.data}/>
    );
};

export default ShowMissionContainer;
// TODO
// ) => {
//     const {id} = useParams();
//     const dispatch = useDispatch()
//
//     const fetchApi = useCallback(async () => {
//         await dispatch(setMission(id));
//
//     });
//
//     useEffect(() => {
//         if (!isEmpty(mission.data.id === id)) {
//             return;
//         }
//         fetchApi();
//     }, [])
//
//     return (
//         <ShowMissionComponent item={mission.data}/>
//     );
// };
//
// ShowMissionContainer.propTypes = {
//     missions: PropTypes.object,
//     error: PropTypes.string,
// };
//
// ShowMissionContainer.defaultProps = {
//     mission: {},
// };
// const mapStateToProps = ({missions: {mission, error}}) => ({
//     mission, error
// });
//
// export default connect(mapStateToProps)(ShowMissionContainer);