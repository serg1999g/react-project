import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const ProfileService = {
    setAuthProfile() {
        return BaseAxiosInstance.get('/api/user/profile')
    },
}

export default ProfileService;