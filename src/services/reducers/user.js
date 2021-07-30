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

  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,

  /*REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,*/

  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED
  
} from '../actions/user';

const initialState = {
  user: null,

  isRegisterRequest: false,
  isRegisterSuccess: false,
  isRegisterFailed: false,

  isLoginRequest: false,
  isLoginFailed: false,

  isLogoutRequest: false,
  isLogoutSuccess: false,
  isLogoutFailed: false,

  isGetUserRequest: false,
  isGetUserFailed: false,

  isUpdateUserRequest: false,
  isUpdateUserFailed: false,

  isForgotPasswordRequest: false,
  isForgotPasswordSuccess: false,
  isForgotPasswordFailed: false,

  isResetPasswordRequest: false,
  isResetPasswordFailed: false,

  /*isTokenRefreshRequest: false,
  isTokenRefreshSuccess: false,
  isTokenRefreshFailed: false,*/
};

export const userReducer = (state = initialState, action) => {  

  switch (action.type) {

    case REGISTER_REQUEST:
      return {
        ...state,
        isRegisterRequest: true,
        isRegisterSuccess: false,
        isRegisterFailed: false,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isRegisterRequest: false,
        isRegisterSuccess: true,
        isRegisterFailed: false,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        isRegisterRequest: false,
        isRegisterSuccess: false,
        isRegisterFailed: true,
      };



    case LOGIN_REQUEST:
      return {
        ...state,
        isLoginRequest: true,
        isLoginFailed: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoginRequest: false,
        isLoginFailed: false,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        isLoginRequest: false,
        isLoginFailed: true,
      };



    case LOGOUT_REQUEST:
      return {
        ...state,
        isLogoutRequest: true,
        isLogoutSuccess: false,
        isLogoutFailed: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isLogoutRequest: false,
        isLogoutSuccess: true,
        isLogoutFailed: false,
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        isLogoutRequest: false,
        isLogoutSuccess: false,
        isLogoutFailed: true,
      };



    case GET_USER_REQUEST:
      return {
        ...state,
        isGetUserRequest: true,
        isGetUserFailed: false,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isGetUserRequest: false,
        isGetUserFailed: false,
      };

    case GET_USER_FAILED:
      return {
        ...state,
        isGetUserRequest: false,
        isGetUserFailed: true,
      };



    case UPDATE_USER_REQUEST:
      return {
        ...state,
        isUpdateUserRequest: true,
        isUpdateUserFailed: false,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isUpdateUserRequest: false,
        isUpdateUserFailed: false,
      };

    case UPDATE_USER_FAILED:
      return {
        ...state,
        isUpdateUserRequest: false,
        isUpdateUserFailed: true,
      };

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        isForgotPasswordRequest: true,
        isForgotPasswordSuccess: false,
        isForgotPasswordFailed: false,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isForgotPasswordRequest: false,
        isForgotPasswordSuccess: true,
        isForgotPasswordFailed: false,
      };

    case FORGOT_PASSWORD_FAILED:
      return {
        ...state,
        isForgotPasswordRequest: false,
        isForgotPasswordSuccess: false,
        isForgotPasswordFailed: true,
      };



    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isResetPasswordRequest: true,
        isResetPasswordFailed: false,
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isResetPasswordRequest: false,
        isResetPasswordFailed: false,
      };

    case RESET_PASSWORD_FAILED:
      return {
        ...state,
        isResetPasswordRequest: false,
        isResetPasswordFailed: true,
      };



    /*case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isTokenRefreshRequest: true,
        isTokenRefreshSuccess: false,
        isTokenRefreshFailed: false,
      };

    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isTokenRefreshRequest: false,
        isTokenRefreshSuccess: true,
        isTokenRefreshFailed: false,
      };

    case REFRESH_TOKEN_FAILED:
      return {
        ...state,
        isTokenRefreshRequest: false,
        isTokenRefreshSuccess: false,
        isTokenRefreshFailed: true,
      };*/

    default:
      return state;
  }
};

export default userReducer;