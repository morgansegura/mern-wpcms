import { fetchWrapper } from './fetchWrapper'
import { TSignin, TRegister, TForgotPassword, TResetPassword } from 'api/types'

const baseUrl = ''

export const authService = {
	getCurrentAdmin,
	signout,
	signin,
	signup,
	forgotPassword,
	resetPassword,
}

function getCurrentAdmin() {
	return fetchWrapper.get(`${baseUrl}/current-admin`)
}

function signout() {
	return fetchWrapper.post(`${baseUrl}/signout`, {})
}

function signup(params: TRegister) {
	console.log({ params })
	return fetchWrapper.post(`${baseUrl}/signup`, params)
}

function signin(params: TSignin) {
	return fetchWrapper.post(`${baseUrl}/signin`, params)
}

function forgotPassword(params: TForgotPassword) {
	return fetchWrapper.post(`${baseUrl}/forgot-password`, params)
}

function resetPassword(params: TResetPassword) {
	return fetchWrapper.post(`${baseUrl}/reset-password`, params)
}
