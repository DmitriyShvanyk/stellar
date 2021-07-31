import {
	API_LINK_LOGIN,
	API_LINK_REGISTER,
	API_LINK_LOGOUT,
	API_LINK_USER,
	API_LINK_TOKEN,
	API_LINK_PASSWORD_RESET,
	API_LINK_PASSWORD_UPDATE
} from '../api';
import {
	getCookie,
	deleteCookie,
	setCookie
} from '../utils'

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const REFRESH_TOKEN_REQUEST = "REFRESH_TOKEN_REQUEST";
export const REFRESH_TOKEN_SUCCESS = "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_FAILED = "REFRESH_TOKEN_FAILED";

const checkResponse = (response) => {
	return response.ok ?
		response.json() :
		response.json().then((error) => Promise.reject(error));
};

const updateToken = async () => {
	const response = await fetch(API_LINK_TOKEN, {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			authorization: getCookie('refreshToken')
		},
		body: JSON.stringify({
			token: getCookie('refreshToken')
		}),
	});
	return await checkResponse(response);
};

const fetchWithRefresh = async (url, fetchOptions) => {
	try {		
		const response = await fetch(url, fetchOptions);
		console.info(response)
		return await checkResponse(response);
	} catch (error) {
		if (error.message === "jwt expired") {
			const refreshData = await updateToken();
			const accessToken = refreshData.accessToken.split('Bearer ')[1];
			const refreshToken = refreshData.refreshToken;
			setCookie('accessToken', accessToken);
			setCookie('refreshToken', refreshToken);
			//console.log('accessToken: ' + accessToken)
			//console.log('refreshToken: ' + refreshToken)
			const response = await fetch(url, fetchOptions);
			return await checkResponse(response);

		} else {
			return Promise.reject(error);
		}
	}
};

export const getUserInfo = () => async (dispatch) => {
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
		.then( async (response) => {	
			console.log('GET USER ' + response.json)		
			if (response.ok) {					
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {			
			console.log('GET USER ' + response.name)
			if (response && response.success) {				
				if (response.accessToken) {					
					const accessToken = response.accessToken.split('Bearer ')[1];
					const refreshToken = response.refreshToken;
					setCookie('accessToken', accessToken);
					setCookie('refreshToken', refreshToken);	
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

export const updateUserInfo = (payload) => async (dispatch) => {
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
		.then( async (response) => {
			console.log('UPADETE USER ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				if (response.accessToken) {
					const accessToken = response.accessToken.split('Bearer ')[1];
					const refreshToken = response.refreshToken;
					setCookie('accessToken', accessToken);
					setCookie('refreshToken', refreshToken);
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


export const registerUserRequest = (payload) => async (dispatch) => {
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
		.then( async (response) => {
			console.log('REGISTER ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				const accessToken = response.accessToken.split('Bearer ')[1];
				const refreshToken = response.refreshToken;
				setCookie('accessToken', accessToken);
				setCookie('refreshToken', refreshToken);

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


export const loginUserRequest = (payload) => async (dispatch) => {
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
		.then( async (response) => {
			console.log('LOGIN ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				const accessToken = response.accessToken.split('Bearer ')[1];
				const refreshToken = response.refreshToken;
				setCookie('accessToken', accessToken);
				setCookie('refreshToken', refreshToken);
				localStorage.setItem('userData', JSON.stringify(response.user))
				//localStorage.setItem('userName', response.user.name)
				//localStorage.setItem('userEmail', response.user.email)
				
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


export const logoutUserRequest = () => async (dispatch) => {
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
		.then( async (response) => {
			console.log('LOGOUT ' + response)
			if (response.ok) {
				return await response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				deleteCookie('accessToken');
				deleteCookie('refreshToken');
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

export const resetUserPassword = (email) => async (dispatch) => {
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
		.then( async (response) => {
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


export const createUserPassword = (password, token) => async (dispatch) => {
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
		.then( async (response) => {
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

/*
export const refreshUserToken = () => {
	return async function (dispatch) {
		dispatch({
			type: REFRESH_TOKEN_REQUEST,
		});
		try {
			const res = await refreshToken();
			if (res && res.success) {
				localStorage.setItem("refreshToken", res.refreshToken);
				const authToken = res.accessToken.split("Bearer ")[1];
				setCookie("token", authToken);
				dispatch({
					type: REFRESH_TOKEN_SUCCESS,
				});
			} else {
				throw new Error("Refresh token is failed");
			}
		} catch (error) {
			dispatch({
				type: REFRESH_TOKEN_FAILED,
			});
			console.log("There is a problem with your request: ", error.message);
		}
	};
};*/