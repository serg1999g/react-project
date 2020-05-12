import BaseAxiosInstance from 'libs/axios/BaseAxiosInstance';

const AuthService = {
    // signUp(formValues) {
    //     return BaseAxiosInstance.post('/sign-up', formValues);
    // },

    signUp(formValues) {
        return BaseAxiosInstance.post('/api/register', formValues);
    },

    signIn(formValues) {
        return BaseAxiosInstance.post('/api/login', formValues);
    },

    logout() {
        return BaseAxiosInstance.post('/api/logout');
    },

    AuthUser() {
        return BaseAxiosInstance.get('/api/user/auth-user');
    },

    allUser() {
        return BaseAxiosInstance.get('api/user');
    },
};

export default AuthService;
