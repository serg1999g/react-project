export const routesByName = {
  home: '/',
  signIn: '/login',
  signUp: '/sign-up',
  roteWithParams(param = ':param'){
    return `/prefix/${param}`
  },
};
