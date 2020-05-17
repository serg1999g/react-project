export const routesByName = {
  home: '/',
  signIn: '/login',
  signUp: '/sign-up',
  missions:'/missions',
  roteWithParams(param = ':param'){
    return `/prefix/${param}`
  },
};
