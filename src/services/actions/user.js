import {
	API_LINK_LOGIN,
	API_LINK_REGISTER,
	API_LINK_LOGOUT,
	API_LINK_USER,
	API_LINK_TOKEN
} from '../api';
import {
	getCookie,
	deleteCookie,
	setCookie
} from '../utils'

export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILED = 'USER_FAILED'

export const PATCH_USER_REQUEST = 'PATCH_USER_REQUEST'
export const PATCH_USER_SUCCESS = 'PATCH_USER_SUCCESS'
export const PATCH_USER_FAILED = 'PATCH_USER_FAILED'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILED = 'REGISTER_FAILED'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILED = 'LOGOUT_FAILED'

export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS'
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED'

const checkResponse = (res) => {
	return res.ok ?
		res.json() :
		res.json().then((error) => Promise.reject(error));
};

const updateToken = async () => {
	const response = await fetch(API_LINK_TOKEN, {
		method: "POST",
		mode: 'no-cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			token: localStorage.getItem("refreshToken")
		}),
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	})

	return await checkResponse(response);
};

const fetchWithRefresh = async (url, options) => {
	try {
		const response = await fetch(url, options);
		return await checkResponse(response);
	} catch (error) {
		if (error.message === "jwt expired") {
			const tokenData = await updateToken();
			//console.log(tokenData)
			localStorage.setItem("refreshToken", tokenData.refreshToken);
			setCookie("token", tokenData.accessToken.split("Bearer ")[1]);
			options.headers.authorization = tokenData.accessToken;
			const response = await fetch(url, options);
			return await checkResponse(response);
		} else {
			return Promise.reject(error);
		}
	}
};

export const registerRequest = (name, email, password) => (dispatch) => {
	dispatch({
		type: REGISTER_REQUEST
	});

	return fetch(API_LINK_REGISTER, {
			method: "POST",
			mode: 'no-cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name,
				email,
				password
			}),
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			//console.log(response)

			if (response && response.success) {
				const authToken = response.accessToken.split("Bearer ")[1];
				const updateToken = response.refreshToken;
				setCookie("token", authToken);
				localStorage.setItem("refreshToken", updateToken);

				dispatch({
					type: REGISTER_SUCCESS,
					payload: {
						user: response.user
					}
				});
			}
		})
		.catch(() => {
			dispatch({
				type: REGISTER_FAILED
			});
		});
};


export const loginRequest = (email, password) => (dispatch) => {
	dispatch({
		type: LOGIN_REQUEST
	});

	return fetch(API_LINK_LOGIN, {
			method: "POST",
			mode: 'no-cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			}),
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				const authToken = response.accessToken.split("Bearer ")[1];
				const updateToken = response.refreshToken;
				setCookie("token", authToken);
				localStorage.setItem("refreshToken", updateToken);

				dispatch({
					type: LOGIN_SUCCESS,
					payload: {
						user: response.user
					},
				});
			}
		})
		.catch(() => {
			dispatch({
				type: LOGIN_FAILED
			});
		});
};


export const logoutRequest = () => (dispatch) => {
	dispatch({
		type: LOGOUT_REQUEST
	});

	return fetch(API_LINK_LOGOUT, {
			method: "POST",
			mode: 'no-cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token: localStorage.getItem("refreshToken")
			}),
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				deleteCookie("token");
				localStorage.removeItem("refreshToken");

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

export const getUserRequest = () => async (dispatch) => {
	dispatch({
		type: USER_REQUEST
	});

	return await fetchWithRefresh(API_LINK_USER, {
			method: "GET",
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getCookie('token')}`
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				//console.log(response)
				dispatch({
					type: USER_SUCCESS,
					payload: {
						user: response.user
					},
				});
			}
		})
		.catch(() => {
			dispatch({
				type: USER_FAILED
			});
		});
};

export const patchUserRequest = (name, email, password) => async (dispatch) => {
	dispatch({
		type: PATCH_USER_REQUEST
	});

	return await fetchWithRefresh(API_LINK_USER, {
			method: "PATCH",
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${getCookie('token')}`
			},
			body: JSON.stringify({
				name,
				email,
				password
			}),
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				//console.log(response)
				dispatch({
					type: PATCH_USER_SUCCESS,
					payload: {
						user: response.user
					},
				});
			}
		})
		.catch(() => {
			dispatch({
				type: PATCH_USER_FAILED
			});
		});
};


export const updateTokenRequest = () => (dispatch) => {
	dispatch({
		type: UPDATE_TOKEN_REQUEST
	});

	return fetch(API_LINK_TOKEN, {
			method: "POST",
			mode: 'no-cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				token: localStorage.getItem("refreshToken")
			})
		})
		.then((response) => {
			if (response.ok) {
				return response.json()
			} else {
				throw new Error('Something went wrong')
			}
		})
		.then((response) => {
			if (response && response.success) {
				localStorage.setItem("refreshToken", response.refreshToken);
				const authToken = response.accessToken.split("Bearer ")[1];
				setCookie("token", authToken);

				dispatch({
					type: UPDATE_TOKEN_SUCCESS
				});
			}
		})
		.catch(() => {
			dispatch({
				type: UPDATE_TOKEN_FAILED
			});
		});
};