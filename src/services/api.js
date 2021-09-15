const API_LINK = 'https://norma.nomoreparties.space/api'
const API_LINK_AUTH = `${API_LINK}/auth`;

export const API_LINK_INGREDIENTS = `${API_LINK}/ingredients`;
export const API_LINK_ORDERS = `${API_LINK}/orders`;

// POST endpoint for password reset
export const API_LINK_PASSWORD_RESET = `${API_LINK}/password-reset`; 

// POST endpoint for creating a new password
export const API_LINK_PASSWORD_UPDATE = `${API_LINK_PASSWORD_RESET}/reset`;

// POST endpoint for user registration
export const API_LINK_REGISTER = `${API_LINK_AUTH}/register`; 

// POST endpoint for authorization
export const API_LINK_LOGIN = `${API_LINK_AUTH}/login`;

// POST endpoint for logout
export const API_LINK_LOGOUT = `${API_LINK_AUTH}/logout`;

// POST endpoint token refresh 
export const API_LINK_TOKEN = `${API_LINK_AUTH}/token`;

// GET endpoint for receiving / PATCH endpoint for updating user data
export const API_LINK_USER = `${API_LINK_AUTH}/user`;

// WebSocket url
export const API_WS_URL = 'wss://norma.nomoreparties.space/orders';

// Receiving all orders
export const API_ORDERS_ALL = `${WS_URL}/all`;