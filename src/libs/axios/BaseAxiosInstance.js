import axios from 'axios';
import appConfig from 'constants/appConfig';

const BaseAxiosInstance = axios.create(
    {
        baseURL: appConfig.apiUrl,
        withCredentials: true,
    }
);

const createSetAuthInterceptor = (config) => {
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        delete config.headers.Authorization;
    }
    return config;
};

BaseAxiosInstance.interceptors.request.use(createSetAuthInterceptor);

BaseAxiosInstance.interceptors.response.use(
    ({data}) => data,
    ({response: {data}}) => {
        throw new Error(data.message);
    },
);

export default BaseAxiosInstance;

