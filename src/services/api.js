import { getCookie } from './utils';

const API_LINK = 'https://norma.nomoreparties.space/api'
const API_LINK_AUTH = `${API_LINK}/auth`;

export const API_LINK_INGREDIENTS = `${API_LINK}/ingredients`;
export const API_LINK_ORDERS = `${API_LINK}/orders`;

export const API_LINK_PASSWORD_FORGOT = `${API_LINK}/password-reset`; // POST эндпоинт для сброса пароля
export const API_LINK_PASSWORD_RESET = `${API_LINK_PASSWORD_FORGOT}/reset`; // POST эндпоинт для создания нового пароля
export const API_LINK_LOGIN = `${API_LINK_AUTH}/login`; // POST эндпоинт для авторизации
export const API_LINK_REGISTER = `${API_LINK_AUTH}/register`; // POST эндпоинт для регистрации пользователя
export const API_LINK_LOGOUT = `${API_LINK_AUTH}/logout`; // POST эндпоинт для выхода из системы
export const API_LINK_TOKEN = `${API_LINK_AUTH}/token`; // POST эндпоинт обновления токена

// GET эндпоинт получения данных о пользователе
// PATCH эндпоинт обновления данных о пользователе
export const API_LINK_USER = `${API_LINK_AUTH}/user`;


export const deserializeQuery = (query, noQuestionMark = false) => {
    const pairs = (noQuestionMark ? query : query.substring(1)).split('&');
    const array = pairs.map(elem => elem.split('='));
    return Object.fromEntries(array);
};

export const serializeQuery = queryParams =>
    Object.entries(queryParams).reduce((acc, [key, value], index, array) => {
        if (typeof value === 'undefined') {
            return acc;
        }
        const postfix = index === array.length - 1 ? '' : '&';
        return `${acc}${encodeURIComponent(key)}=${encodeURIComponent(value)}${postfix}`;
    }, '?');

export const loginRequest = async form => {
    return await fetch(API_LINK_LOGIN, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(form)
    });
};

export const getUserRequest = async () =>
    await fetch(API_LINK_USER, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

export const logoutRequest = async () => {
    return await fetch(API_LINK_LOGOUT, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });
};