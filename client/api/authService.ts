import { fetchWrapper } from './fetchWrapper'
import { SigninType, RegisterType, ForgotPasswordType, ResetPasswordType } from 'core/config/types'

const baseUrl = ''

export const authService = {
	authUser,
	signout,
	signin,
	signup,
	forgotPassword,
	resetPassword,
}

function authUser() {
	return fetchWrapper.get(`${baseUrl}`)
}

function signout() {
	return fetchWrapper.post(`${baseUrl}/signout`, {})
}

function signup(params: RegisterType) {
	return fetchWrapper.post(`${baseUrl}/signup`, params)
}

function signin(params: SigninType) {
	return fetchWrapper.post(`${baseUrl}/signin`, params)
}

function forgotPassword(params: ForgotPasswordType) {
	return fetchWrapper.post(`${baseUrl}/forgot-password`, params)
}

function resetPassword(params: ResetPasswordType) {
	return fetchWrapper.post(`${baseUrl}/reset-password`, params)
}
