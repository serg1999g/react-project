import BaseAxiosInstance from 'libs/axios/BaseAxiosInstance';

const AuthService = {
    signUp(formValues) {
        return BaseAxiosInstance.post('/sign-up', formValues);
    },

    signIn(formValues) {
        return BaseAxiosInstance.post('/api/login', formValues);
    },

    logout() {
        return BaseAxiosInstance.post('/api/logout');
    },

    getUser() {
        return BaseAxiosInstance.get('/api/user');
    },
};

export default AuthService;
