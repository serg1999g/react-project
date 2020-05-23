export const routesByName = {
  home: '/',
  signIn: '/sign-in',
  signUp: '/sign-up',
  missions:'/missions',
  roteWithParams(param = ':param'){
    return `/prefix/${param}`
  },
};
