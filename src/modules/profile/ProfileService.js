import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const ProfileService = {
    setAuthProfile() {
        return BaseAxiosInstance.get('/api/user/profile')
    },

    editProfile() {
        return BaseAxiosInstance.get('/api/user/edit')
    },

    updateProfile(formValues) {
        return BaseAxiosInstance.post('/api/user/update', formValues)
    },
    changePassword(formValues) {
        return BaseAxiosInstance.post('/api/user/change', formValues)
    },

    deleteAvatar(id) {
        return BaseAxiosInstance.delete(`/api/image/${id}/delete`)
    },
    createAvatar(formValues) {
        return BaseAxiosInstance.post('/api/image/create', formValues)
    }
}

export default ProfileService;