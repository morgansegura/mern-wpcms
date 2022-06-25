export type RegisterType = {
	fullName: string
	username: string
	email: string
	password: string
	passwordConfirm: string
}
export type SigninType = {
	email: string
	password: string
}
export type ForgotPasswordType = {
	email?: string
}
export type ResetPasswordType = {
	email?: string
	resetCode?: string
	password?: string
	passwordConfirm?: string
}
export type UserType = {
	email?: string
	resetCode?: string
	password?: string
	passwordConfirm?: string
}
