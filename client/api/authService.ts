import { fetchWrapper } from './fetchWrapper'
import { SigninType, RegisterType } from 'core/config'

const baseUrl = ''

export const authService = {
	authUser,
	signout,
	signin,
	signup,
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
