import { ReactNode } from 'react'

export interface IForm {
	children?: ReactNode[] | ReactNode
}
export interface ISigninForm {
	title?: string
	copy?: string
}
export interface ISignupForm {
	title?: string
	copy?: string
}
export interface IResetPasswordForm {
	title?: string
	copy?: string
}
export interface IForgotPasswordForm {
	title?: string
	copy?: string
}
