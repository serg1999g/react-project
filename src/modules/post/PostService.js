import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const PostService = {
    allPost() {
        return BaseAxiosInstance.get('/api/mission')
    },

    getPost(id) {
        return BaseAxiosInstance.get(`/api/mission/${id}/show`)
    },

    updatePost(formData, id) {
        return BaseAxiosInstance.post(`/api/mission/${id}/update`, formData)
    },

    editPost(id) {
        return BaseAxiosInstance.get(`/api/mission/${id}/edit`)
    },

    deletePost(id) {
        return BaseAxiosInstance.delete(`/api/mission/${id}/destroy`)
    },

    createPost(formData) {
        return BaseAxiosInstance.post(`/api/mission/create`, formData)
    },
    deleteImage(id) {
        return BaseAxiosInstance.delete(`/api/image/${id}/delete`)
    },
    createImage(formData) {
        return BaseAxiosInstance.post('/api/image/create', formData)
    }
}

export default PostService;
