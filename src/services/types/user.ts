export type TUserState = {	
	user: null | { email: string; name: string };
	isLoggined: boolean;
	isForgotPasswordRequest: boolean;
	isResetPasswordRequest: boolean;
	isLoading: boolean;
	isLogout: boolean;
};