import {
	API_LINK_PASSWORD_RESET,
	API_LINK_PASSWORD_NEW
} from '../api'

export const PASSWORD_RESET_REQUEST = 'PASSWORD_RESET_REQUEST'
export const PASSWORD_RESET_SUCCESS = 'PASSWORD_RESET_SUCCESS'
export const PASSWORD_RESET_FAILED = 'PASSWORD_RESET_FAILED'
export const PASSWORD_NEW_REQUEST = 'PASSWORD_NEW_REQUEST'
export const PASSWORD_NEW_SUCCESS = 'PASSWORD_NEW_SUCCESS'
export const PASSWORD_NEW_FAILED = 'PASSWORD_NEW_FAILED'

export const resetPassword = (email) => (dispatch) => {
	dispatch({
		type: PASSWORD_RESET_REQUEST
	});

	return fetch(API_LINK_PASSWORD_RESET, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(email)
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
				dispatch({
					type: PASSWORD_RESET_SUCCESS,
					"email": email
				});
			}
		})
		.catch(() => {
			dispatch({
				type: PASSWORD_RESET_FAILED
			});
		});
};

export const createPassword = (password, verificationToken) => (dispatch) => {
	dispatch({
		type: PASSWORD_NEW_REQUEST
	});

	return fetch(API_LINK_PASSWORD_NEW, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(password, verificationToken)
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
				dispatch({
					type: PASSWORD_NEW_SUCCESS,
					"password": password,
					"token": verificationToken
				});
			}
		})
		.catch(() => {
			dispatch({
				type: PASSWORD_NEW_FAILED
			});
		});
};