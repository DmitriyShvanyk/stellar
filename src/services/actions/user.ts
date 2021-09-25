import {
	API_LINK_LOGIN,
	API_LINK_REGISTER,
	API_LINK_LOGOUT,
	API_LINK_USER,
	API_LINK_TOKEN,
	API_LINK_PASSWORD_RESET,
	API_LINK_PASSWORD_UPDATE
} from '../api'
import {
	getCookie,
	setCookie,
	deleteCookie
} from '../utils'
import { AppThunk, AppDispatch } from '../types'

export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST"
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS"
export const REGISTER_FAILED: "REGISTER_FAILED" = "REGISTER_FAILED"

export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST"
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS"
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED"

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST"
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS"
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED"

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST"
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS"
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED"

export const UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST"
export const UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS"
export const UPDATE_USER_FAILED: "UPDATE_USER_FAILED" = "UPDATE_USER_FAILED"

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" = "FORGOT_PASSWORD_REQUEST"
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" = "FORGOT_PASSWORD_SUCCESS"
export const FORGOT_PASSWORD_FAILED: "FORGOT_PASSWORD_FAILED" = "FORGOT_PASSWORD_FAILED"

export const RESET_PASSWORD_REQUEST: "RESET_PASSWORD_REQUEST" = "RESET_PASSWORD_REQUEST"
export const RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS" = "RESET_PASSWORD_SUCCESS"
export const RESET_PASSWORD_FAILED: "RESET_PASSWORD_FAILED" = "RESET_PASSWORD_FAILED"

export interface IRegisterRequestAction {
	readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterFailedAction {
	readonly type: typeof REGISTER_FAILED;
}

export interface IRegisterSuccessAction {
	readonly type: typeof REGISTER_SUCCESS;
	readonly user: { 
		email: string; 
		name: string 
	};
}

export interface ILoginRequestAction {
	readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginFailedAction {
	readonly type: typeof LOGIN_FAILED;
}

export interface ILoginSuccessAction {
	readonly type: typeof LOGIN_SUCCESS;
	readonly user: { 
		email: string; 
		name: string 
	};
}

export interface ILogoutRequestAction {
	readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutFailedAction {
	readonly type: typeof LOGOUT_FAILED;
}

export interface ILogoutSuccessAction {
	readonly type: typeof LOGOUT_SUCCESS;
}

export interface IGetUserRequestAction {
	readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserFailedAction {
	readonly type: typeof GET_USER_FAILED;
}

export interface IGetUserSuccessAction {
	readonly type: typeof GET_USER_SUCCESS;
	readonly user: { 
		email: string; 
		name: string 
	};
}

export interface IUpdateUserRequestAction {
	readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserFailedAction {
	readonly type: typeof UPDATE_USER_FAILED;
}

export interface IUpdateUserSuccessAction {
	readonly type: typeof UPDATE_USER_SUCCESS;
	readonly user: { 
		email: string; 
		name: string 
	};
}

export interface IForgotPasswordRequestAction {
	readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordFailedAction {
	readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IForgotPasswordSuccessAction {
	readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IResetPasswordRequestAction {
	readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordFailedAction {
	readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface IResetPasswordSuccessAction {
	readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export type TUserActions =
	| IRegisterRequestAction | IRegisterSuccessAction | IRegisterFailedAction
	| ILoginRequestAction | ILoginFailedAction | ILoginSuccessAction
	| ILogoutRequestAction | ILogoutFailedAction | ILogoutSuccessAction
	| IGetUserRequestAction | IGetUserSuccessAction | IGetUserFailedAction
	| IUpdateUserRequestAction | IUpdateUserSuccessAction | IUpdateUserFailedAction
	| IForgotPasswordRequestAction | IForgotPasswordSuccessAction | IForgotPasswordFailedAction
	| IResetPasswordRequestAction | IResetPasswordSuccessAction | IResetPasswordFailedAction

const checkResponse = (response: Response) => {
	return response.ok ?
		response.json() :
		response.json().then((error) => Promise.reject(error));
}

const setTokenCookies = (response: { accessToken: string; refreshToken: string }) => {
	const accessToken = response.accessToken.split('Bearer ')[1];
	const refreshToken = response.refreshToken;
	setCookie('accessToken', accessToken);
	setCookie('refreshToken', refreshToken);
}

const updateTokenHeaders: any = {
	"Accept": "application/json",
	"Content-Type": "application/json",
	authorization: getCookie('refreshToken')
}

const updateToken = async () => {
	const response = await fetch(API_LINK_TOKEN, {
		method: "POST",
		headers: updateTokenHeaders,
		body: JSON.stringify({
			token: getCookie('refreshToken')
		}),
	});
	return await checkResponse(response);
};

const fetchWithRefresh = async (url: RequestInfo, fetchOptions: RequestInit) => {
	try {
		const response = await fetch(url, fetchOptions);
		//console.log(response)
		return await checkResponse(response);
	} catch (error: any) {
		if (error.message === "jwt expired") {
			const refreshData = await updateToken();
			setTokenCookies(refreshData)
			//console.log('accessToken: ' + accessToken)
			//console.log('refreshToken: ' + refreshToken)
			const response = await fetch(url, fetchOptions);
			return await checkResponse(response);

		} else {
			return Promise.reject(error);
		}
	}
};

export const getUserInfo: AppThunk = () => async (dispatch: AppDispatch) => {
	dispatch({
		type: GET_USER_REQUEST
	});

	return await fetchWithRefresh(API_LINK_USER, {
		method: "GET",
		headers: {
			"Accept": "application/json",
			'Content-Type': 'application/json',
			authorization: `Bearer ${getCookie('accessToken')}`
		}
	})
		.then(async (response) => {
			//console.log('GET USER ' + response.json)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			//console.log('GET USER ' + response.name)
			if (response && response.success) {
				if (response.accessToken) {
					setTokenCookies(response)
				}

				dispatch({
					type: GET_USER_SUCCESS,
					user: response.user
				});
			}
		})
		.catch(() => {
			dispatch({
				type: GET_USER_FAILED
			});
		});
};

export const updateUserInfo: AppThunk = payload => async (dispatch: AppDispatch) => {
	dispatch({
		type: UPDATE_USER_REQUEST
	});

	return await fetchWithRefresh(API_LINK_USER, {
		method: "PATCH",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			authorization: `Bearer ${getCookie('accessToken')}`
		},
		body: JSON.stringify(payload)
	})
		.then(async (response) => {
			//console.log('UPADETE USER ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				if (response.accessToken) {
					setTokenCookies(response)
				}
				dispatch({
					type: UPDATE_USER_SUCCESS,
					user: response.user
				});
			}
		})
		.catch(() => {
			dispatch({
				type: UPDATE_USER_FAILED
			});
		});
};


export const registerUserRequest: AppThunk = payload => async (dispatch: AppDispatch) => {
	dispatch({
		type: REGISTER_REQUEST
	});

	return await fetch(API_LINK_REGISTER, {
		method: "POST",
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
		.then(async (response) => {
			//console.log('REGISTER ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				setTokenCookies(response)

				dispatch({
					type: REGISTER_SUCCESS,
					user: response.user
				});
			}
		})
		.catch(() => {
			dispatch({
				type: REGISTER_FAILED
			});
		});
};


export const loginUserRequest: AppThunk = payload => async (dispatch: AppDispatch) => {
	dispatch({
		type: LOGIN_REQUEST
	});

	return await fetch(API_LINK_LOGIN, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
		.then(async (response) => {
			//console.log('LOGIN ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				setTokenCookies(response)
				localStorage.setItem('userData', JSON.stringify(response.user))

				dispatch({
					type: LOGIN_SUCCESS,
					user: response.user
				});
			}
		})
		.catch(() => {
			dispatch({
				type: LOGIN_FAILED
			});
		});
};


export const logoutUserRequest: AppThunk = () => async (dispatch: AppDispatch) => {
	dispatch({
		type: LOGOUT_REQUEST
	});

	return await fetch(API_LINK_LOGOUT, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			token: getCookie('refreshToken')
		})
	})
		.then(async (response) => {
			//console.log('LOGOUT ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				deleteCookie('accessToken')
				deleteCookie('refreshToken')
				localStorage.clear();

				dispatch({
					type: LOGOUT_SUCCESS
				});
			}
		})
		.catch(() => {
			dispatch({
				type: LOGOUT_FAILED
			});
		});
};

export const resetUserPassword: AppThunk = email => async (dispatch: AppDispatch) => {
	dispatch({
		type: FORGOT_PASSWORD_REQUEST
	});

	return await fetch(API_LINK_PASSWORD_RESET, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(email)
	})
		.then(async (response) => {
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				dispatch({
					type: FORGOT_PASSWORD_SUCCESS
				});
			}
		})
		.catch(() => {
			dispatch({
				type: FORGOT_PASSWORD_FAILED
			});
		});
};


export const createUserPassword: AppThunk = (password, token) => async (dispatch: AppDispatch) => {
	dispatch({
		type: RESET_PASSWORD_REQUEST
	});

	return await fetch(API_LINK_PASSWORD_UPDATE, {
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(password, token)
	})
		.then(async (response) => {
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				dispatch({
					type: RESET_PASSWORD_SUCCESS
				});
			}
		})
		.catch(() => {
			dispatch({
				type: RESET_PASSWORD_FAILED
			});
		});
};