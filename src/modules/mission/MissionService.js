import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const MissionService = {
    allMission() {
        return BaseAxiosInstance.get('/api/mission')
    },

    getMission(id) {
        return BaseAxiosInstance.get(`/api/mission/${id}/show`)
    },

    editMission(id) {
        return BaseAxiosInstance.put(`/api/mission/${id}/edit`)
    },
}

export default MissionService;
