export type TRegister = {
	fullName: string
	username: string
	email: string
	password: string
	passwordConfirm: string
}
export type TSignin = {
	email: string
	password: string
}
export type TForgotPassword = {
	email?: string
}
export type TResetPassword = {
	email?: string
	resetCode?: string
	password?: string
	passwordConfirm?: string
}
