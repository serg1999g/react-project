export const routesByName = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  missions:'/missions',
  profile:'/profile',
  roteWithParams(param = ':param'){
    return `/prefix/${param}`
  },
};
