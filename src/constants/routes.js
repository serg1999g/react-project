export const routesByName = {
    home: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
    posts: '/posts',
    profile: '/profile',
    createPost: '/post/create',
    speciesWeProtect: '/species-we-protect',
    roteWithParams(param = ':param') {
        return `/prefix/${param}`
    },
};
