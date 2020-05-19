import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const MissionService = {
    allMission() {
        return BaseAxiosInstance.get('/api/mission')
    },

    getMission(id) {
        return BaseAxiosInstance.get(`/api/mission/${id}/show`)
    },
}

export default MissionService;
