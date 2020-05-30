import BaseAxiosInstance from "libs/axios/BaseAxiosInstance";


const PostService = {
    allPost() {
        return BaseAxiosInstance.get('/api/mission')
    },

    getPost(id) {
        return BaseAxiosInstance.get(`/api/mission/${id}/show`)
    },

    editPost(id) {
        return BaseAxiosInstance.put(`/api/mission/${id}/edit`)
    },
}

export default PostService;
