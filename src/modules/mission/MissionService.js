import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const MissionService = {
    allMission() {
        return BaseAxiosInstance.get('/api/mission')
    },
}

export default MissionService;
