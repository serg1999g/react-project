export const routesByName = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  posts:'/posts',
  profile:'/profile',
  roteWithParams(param = ':param'){
    return `/prefix/${param}`
  },
};
