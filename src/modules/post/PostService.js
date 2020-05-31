import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const PostService = {
    allPost() {
        return BaseAxiosInstance.get('/api/mission')
    },

    getPost(id) {
        return BaseAxiosInstance.get(`/api/mission/${id}/show`)
    },

    updatePost(id) {
        return BaseAxiosInstance.put(`/api/mission/${id}/edit`)
    },

    deletePost(id) {
        return BaseAxiosInstance.delete(`/api/mission/${id}/destroy`)
    },
}

export default PostService;
