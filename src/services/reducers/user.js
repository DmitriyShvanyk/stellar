import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,

  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,

  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED,

  USER_REQUEST,
  USER_SUCCESS,
  USER_FAILED,

  PATCH_USER_REQUEST,
  PATCH_USER_SUCCESS,
  PATCH_USER_FAILED,

} from '../actions/user';


const initialState = {
  name: '',
  email: '',
  password: '',

  isRegisterRequest: false,
  isRegisterFailed: false,

  isLoginRequest: false,
  isLoginFailed: false,

  isLogoutRequest: false,
  isLogoutFailed: false,

  isUserRequest: false,
  isUserFailed: false,

  isPathUserRequest: false,
  isPathUserFailed: false,

  isUpdateTokenRequest: false,
  isUpdateTokenSuccess: false,
  isUpdateTokenFailed: false,

  isLoading: false,
  hasError: false
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case REGISTER_REQUEST:
      return {
        ...state,
        isRegisterRequest: true,
        isRegisterFailed: false,
        isLoading: true,
        hasError: false
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        password: payload.user.password,
        isRegisterRequest: false,
        isRegisterFailed: false,
        isLoading: false,
        hasError: false
      }

    case REGISTER_FAILED:
      return {
        ...state,
        isRegisterRequest: false,
        isRegisterFailed: true,
        isLoading: false,
        hasError: true
      }

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoginRequest: true,
        isLoginFailed: false,
        isLoading: true,
        hasError: false
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        isLoginRequest: false,
        isLoginFailed: false,
        isLoading: false,
        hasError: false
      }

    case LOGIN_FAILED:
      return {
        ...state,
        isLoginRequest: false,
        isLoginFailed: true,
        isLoading: false,
        hasError: true
      }

    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogoutRequest: true,
        isLogoutFailed: false,
        isLoading: true,
        hasError: false
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLogoutRequest: false,
        isLogoutFailed: false,
        isLoading: false,
        hasError: false
      }

    case LOGOUT_FAILED:
      return {
        ...state,
        isLogoutRequest: false,
        isLogoutFailed: true,
        isLoading: false,
        hasError: true
      }

    case USER_REQUEST:
      return {
        ...state,
        isUserRequest: true,
        isUserFailed: false,
        isLoading: true,
        hasError: false
      }

    case USER_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        isUserRequest: false,
        isUserFailed: false,
        isLoading: false,
        hasError: false
      }

    case USER_FAILED:
      return {
        ...state,
        isPathUserRequest: false,
        isPathUserFailed: true,
        isLoading: false,
        hasError: true
      }

    case PATCH_USER_REQUEST:
      return {
        ...state,
        isPathUserRequest: true,
        isPathUserFailed: false,
        isLoading: true,
        hasError: false
      }

    case PATCH_USER_SUCCESS:
      return {
        ...state,
        name: payload.user.name,
        email: payload.user.email,
        isPathUserRequest: false,
        isPathUserFailed: false,
        isLoading: false,
        hasError: false
      }

    case PATCH_USER_FAILED:
      return {
        ...state,
        isPathUserRequest: false,
        isPathUserFailed: true,
        isLoading: false,
        hasError: true
      }

    case UPDATE_TOKEN_REQUEST:
      return {
        ...state,
        isUpdateTokenRequest: true,
        isUpdateTokenSuccess: false,
        isUpdateTokenFailed: false,
        isLoading: true,
        hasError: false
      }

    case UPDATE_TOKEN_SUCCESS:
      return {
        ...state,
        isUpdateTokenRequest: false,
        isUpdateTokenSuccess: true,
        isUpdateTokenFailed: false,
        isLoading: false,
        hasError: false
      }

    case UPDATE_TOKEN_FAILED:
      return {
        ...state,
        isUpdateTokenRequest: false,
        isUpdateTokenSuccess: false,
        isUpdateTokenFailed: true,
        isLoading: false,
        hasError: true
      }

    default:
      return state;
  }
};