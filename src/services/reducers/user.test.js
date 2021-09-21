import { initialState, userReducer } from './user'
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

	FORGOT_PASSWORD_REQUEST,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILED,

	RESET_PASSWORD_REQUEST,
	RESET_PASSWORD_SUCCESS,
	RESET_PASSWORD_FAILED
} from '../actions/user'


describe('Testing User reducer', () => {

	it('should return the initial state', () => {
		const state = userReducer(undefined, {})
		expect(state).toEqual(initialState)
	})

	it('should handle REGISTER_REQUEST', () => {
		const action = { type: REGISTER_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle REGISTER_SUCCESS', () => {
		const action = {
			type: REGISTER_SUCCESS,
			payload: {
				accessToken: 'abc',
				refreshToken: 'qwe'
			},
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			}
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			},
			isLoggined: true,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle REGISTER_FAILED', () => {
		const action = { type: REGISTER_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle LOGIN_REQUEST', () => {
		const action = { type: LOGIN_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle LOGIN_SUCCESS', () => {
		const action = {
			type: LOGIN_SUCCESS,
			payload: {
				accessToken: 'abc',
				refreshToken: 'qwe'
			},
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			}
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			},
			isLoggined: true,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle LOGIN_FAILED', () => {
		const action = { type: LOGIN_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle LOGOUT_REQUEST', () => {
		const action = { type: LOGOUT_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true,
			isLogout: true
		}
		expect(state).toEqual(result)
	})

	it('should handle LOGOUT_SUCCESS', () => {
		const action = {
			type: LOGOUT_SUCCESS,
			payload: {
				accessToken: 'abc',
				refreshToken: 'qwe'
			},
			user: null
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			user: null,
			isLoggined: false,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle LOGOUT_FAILED', () => {
		const action = { type: LOGOUT_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false,
			isLogout: false
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_USER_REQUEST', () => {
		const action = { type: GET_USER_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_USER_SUCCESS', () => {
		const action = {
			type: GET_USER_SUCCESS,
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			}
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			},
			isLoggined: true,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle GET_USER_FAILED', () => {
		const action = { type: GET_USER_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle UPDATE_USER_REQUEST', () => {
		const action = { type: UPDATE_USER_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle UPDATE_USER_SUCCESS', () => {
		const action = {
			type: UPDATE_USER_SUCCESS,
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			}
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			user: {
				name: 'buratino',
				email: 'buratino@gmail.com'
			},
			isLoggined: true,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle UPDATE_USER_FAILED', () => {
		const action = { type: UPDATE_USER_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle FORGOT_PASSWORD_REQUEST', () => {
		const action = { type: FORGOT_PASSWORD_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle FORGOT_PASSWORD_SUCCESS', () => {
		const action = {
			type: FORGOT_PASSWORD_SUCCESS
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isForgotPasswordRequest: true,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle FORGOT_PASSWORD_FAILED', () => {
		const action = { type: FORGOT_PASSWORD_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle RESET_PASSWORD_REQUEST', () => {
		const action = { type: RESET_PASSWORD_REQUEST }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: true
		}
		expect(state).toEqual(result)
	})

	it('should handle RESET_PASSWORD_SUCCESS', () => {
		const action = {
			type: RESET_PASSWORD_SUCCESS
		}
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isResetPasswordRequest: true,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

	it('should handle RESET_PASSWORD_FAILED', () => {
		const action = { type: RESET_PASSWORD_FAILED }
		const state = userReducer(initialState, action)
		const result = {
			...initialState,
			isLoading: false
		}
		expect(state).toEqual(result)
	})

})