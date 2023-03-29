export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
}

export enum AppRoute {
    Main = '/',
    SignIn = '/sign-in',
}

export enum NameSpace {
    Hotel = 'HOTEL',
    User = 'USER',
}

export const errorLoginPasswordMessage = 'Неверный логин или пароль. Пароль должен быть без кириллицы и минимум 8 символов, а логин состоять из почты';

export const redirectToMainScreen = 'hotelsList/redirectToMain';

export const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export const passwordRegexp = /^[\w\d\s\[\]\^\$\.\|\?\*\+\(\)\/]*$/u;

export const APIRoute = 'https://engine.hotellook.com/api/v2/cache.json';

export const GET_HOTEL_LIST = 'GET_HOTEL_LIST';
export const PUT_HOTELS_LIST_STORE = 'PUT_HOTELS_LIST_STORE'